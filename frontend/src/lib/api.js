/**
 * lib/api.js — Payload adapter (DRAFT for Phase 4 of the multi-brand CMS move).
 *
 * Drop-in replacement for the Strapi client. Keeps the SAME exports
 * (`fetchAPI`, `getStrapiMedia`) and returns the SAME Strapi-v5 response shapes
 * the existing components read (`{ data, meta }`, flattened article fields,
 * `article.content` as an HTML string, `image.url`, the `global` navbar/footer),
 * so the consuming files (blog list/detail, category, tag, Articles.js, layout.js)
 * need NO changes.
 *
 * It talks to the Sarapis Payload REST API, always scoped to this brand via
 * `where[sites.key][equals]=<SITE_KEY>` — so the same file powers any brand by
 * changing one env var.
 *
 * Env:
 *   NEXT_PUBLIC_PAYLOAD_URL   Payload origin (default https://next.sarapis.org)
 *   NEXT_PUBLIC_SITE_KEY      brand key in the Sites collection (default 'wegovnyc')
 *   (NEXT_PUBLIC_STRAPI_URL still read as a fallback origin during cutover)
 *
 * NOT covered here (see NOTES at bottom):
 *   - `/pages` dynamic-zone content (home/about/blog page bodies) — returns an
 *     empty result so consumers fall back to their defaults; migrating those
 *     needs Payload blocks or keeping those pages as React.
 *   - The campaign form POSTs live in the unnyc components, not this file — a
 *     tiny edit there (see `createSubmission` + NOTES).
 */

const PAYLOAD_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL ||
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  'https://next.sarapis.org'
).replace(/\/$/, '');

const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY || 'wegovnyc';

// ---------------------------------------------------------------------------
// Public API (unchanged signatures)
// ---------------------------------------------------------------------------

export async function fetchAPI(path, options = {}) {
  const { isDraftMode } = options;
  const [rawPath, rawQuery = ''] = path.replace(/^\//, '').split('?');
  const collection = rawPath.split('/')[0]; // 'articles' | 'pages' | 'global'
  const sp = new URLSearchParams(rawQuery);

  const cache = isDraftMode ? 'no-store' : 'force-cache';

  switch (collection) {
    case 'articles':
      return getArticles(sp, { cache, isDraftMode });
    case 'global':
      return getGlobal({ cache });
    case 'pages':
      // Dynamic-zone page bodies are not migrated to Payload (see NOTES).
      return { data: [], meta: {} };
    default:
      // Unknown endpoint — behave like an empty Strapi list so callers degrade.
      return { data: [], meta: {} };
  }
}

/** Resolve a Payload media URL (absolute passthrough, else prefix the origin). */
export function getStrapiMedia(url) {
  if (url == null) return null;
  if (url.startsWith('http') || url.startsWith('//')) return url;
  return `${PAYLOAD_URL}${url}`;
}

/**
 * Submit a campaign form to Payload (used by the unnyc components in place of
 * their direct Strapi fetch). `collection` is 'campaign-signups' or
 * 'campaign-endorsements'; `data` is the flat submission (email, campaign, …).
 * The originating brand is attached automatically.
 */
export async function createSubmission(collection, data) {
  const siteId = await getSiteId();
  const res = await fetch(`${PAYLOAD_URL}/api/${collection}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, ...(siteId ? { site: siteId } : {}) }),
  });
  if (!res.ok) throw new Error(`Submission failed (${res.status})`);
  return res.json();
}

// ---------------------------------------------------------------------------
// Payload calls + Strapi-shape mapping
// ---------------------------------------------------------------------------

async function payloadGET(collection, params, cache = 'force-cache') {
  const qs = new URLSearchParams(params);
  const res = await fetch(`${PAYLOAD_URL}/api/${collection}?${qs.toString()}`, {
    headers: { 'Content-Type': 'application/json' },
    cache,
  });
  if (!res.ok) throw new Error(`Payload ${collection} ${res.status}`);
  return res.json();
}

// Cache the brand's site id for the request lifetime (submissions need the id).
let _siteIdPromise;
function getSiteId() {
  if (!_siteIdPromise) {
    _siteIdPromise = payloadGET('sites', {
      'where[key][equals]': SITE_KEY,
      limit: '1',
      depth: '0',
    })
      .then((r) => r.docs?.[0]?.id ?? null)
      .catch(() => null);
  }
  return _siteIdPromise;
}

async function getArticles(sp, { cache, isDraftMode }) {
  const params = {
    depth: '2', // populate heroImage, categories, tags, populatedAuthors, sites
    limit: sp.get('pagination[limit]') || sp.get('pagination[pageSize]') || '100',
    'where[sites.key][equals]': SITE_KEY,
  };
  if (isDraftMode) params.draft = 'true';

  // sort: originalPublishDate:desc -> -publishedAt
  const sort = sp.get('sort');
  if (sort) {
    const [, dir] = sort.split(':');
    params.sort = `${dir === 'desc' ? '-' : ''}publishedAt`;
  } else {
    params.sort = '-publishedAt';
  }

  // filters -> Payload where (AND-ed with the brand filter)
  const slug = sp.get('filters[slug][$eq]');
  if (slug) params['where[slug][equals]'] = slug;
  const category = sp.get('filters[category][$eq]');
  if (category) params['where[categories.title][equals]'] = category;
  const tag = sp.get('filters[tags][$contains]');
  if (tag) params['where[tags.title][equals]'] = tag;

  const page = sp.get('pagination[page]');
  if (page) params.page = page;

  const r = await payloadGET('posts', params, cache);
  return {
    data: (r.docs || []).map(articleFromPost),
    meta: {
      pagination: {
        page: r.page || 1,
        pageSize: r.limit || Number(params.limit),
        pageCount: r.totalPages || 1,
        total: r.totalDocs ?? (r.docs?.length || 0),
      },
    },
  };
}

/** Payload post -> flattened Strapi-v5 article shape the components expect. */
function articleFromPost(p) {
  const cat = Array.isArray(p.categories) ? p.categories[0] : p.categories;
  return {
    id: p.id,
    documentId: String(p.id), // Articles.js uses documentId as the React key
    slug: p.slug,
    title: p.title,
    author: (p.populatedAuthors || []).map((a) => a?.name).filter(Boolean).join(', ') || null,
    category: cat && typeof cat === 'object' ? cat.title : null,
    tags: (p.tags || []).map((t) => (t && typeof t === 'object' ? t.title : t)).filter(Boolean),
    description: p.meta?.description || null,
    originalPublishDate: p.publishedAt || null,
    createdAt: p.createdAt || null,
    image: mediaObj(p.heroImage) || (p.meta?.image ? mediaObj(p.meta.image) : null),
    content: lexicalToHTML(p.content), // components render this as HTML
  };
}

function mediaObj(m) {
  if (!m || typeof m !== 'object') return null;
  return { url: m.url, alt: m.alt, width: m.width, height: m.height };
}

async function getGlobal({ cache }) {
  const r = await payloadGET('sites', {
    'where[key][equals]': SITE_KEY,
    depth: '1',
    limit: '1',
  }, cache);
  const s = r.docs?.[0];
  if (!s) return { data: null };

  const toLink = (l, i) => ({
    id: l.id || i,
    label: l.label,
    url: l.href,
    isExternal: /^https?:\/\//i.test(l.href || ''),
    style: 'primary',
  });

  return {
    data: {
      siteName: s.siteName || s.name,
      defaultSeo: {
        metaTitle: s.defaultSeo?.title || null,
        metaDescription: s.defaultSeo?.description || null,
      },
      favicon: s.logo ? mediaObj(s.logo) : null,
      navbar: {
        links: (s.nav || []).map(toLink),
        button: null, // Donate migrated as a nav link; promote here later if desired
      },
      footer: {
        newsletterTitle: 'Get Involved',
        newsletterText: s.footer?.tagline || null,
        socialLinks: (s.footer?.links || []).map(toLink),
      },
    },
  };
}

// ---------------------------------------------------------------------------
// Minimal Lexical -> HTML (dependency-free; covers WeGov article content:
// headings, paragraphs, lists, quotes, links, formatted text, images, tables,
// hr, line breaks). Unknown nodes render their children.
// ---------------------------------------------------------------------------

const esc = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function textNode(n) {
  let t = esc(n.text || '');
  const f = n.format || 0;
  if (f & 1) t = `<strong>${t}</strong>`;
  if (f & 2) t = `<em>${t}</em>`;
  if (f & 4) t = `<s>${t}</s>`;
  if (f & 8) t = `<u>${t}</u>`;
  if (f & 16) t = `<code>${t}</code>`;
  return t;
}

function childrenHTML(node) {
  return (node.children || []).map(nodeHTML).join('');
}

function nodeHTML(n) {
  if (!n || typeof n !== 'object') return '';
  switch (n.type) {
    case 'text':
      return textNode(n);
    case 'linebreak':
      return '<br />';
    case 'paragraph': {
      const inner = childrenHTML(n);
      return inner ? `<p>${inner}</p>` : '';
    }
    case 'heading': {
      const tag = /^h[1-6]$/.test(n.tag) ? n.tag : 'h2';
      return `<${tag}>${childrenHTML(n)}</${tag}>`;
    }
    case 'quote':
      return `<blockquote>${childrenHTML(n)}</blockquote>`;
    case 'list': {
      const tag = n.listType === 'number' || n.tag === 'ol' ? 'ol' : 'ul';
      return `<${tag}>${childrenHTML(n)}</${tag}>`;
    }
    case 'listitem':
      return `<li>${childrenHTML(n)}</li>`;
    case 'link':
    case 'autolink': {
      const url = n.fields?.url || n.url || '#';
      const target = n.fields?.newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${esc(url)}"${target}>${childrenHTML(n)}</a>`;
    }
    case 'horizontalrule':
      return '<hr />';
    case 'upload': {
      const url = n.value?.url;
      if (!url) return '';
      return `<img src="${esc(getStrapiMedia(url))}" alt="${esc(n.value?.alt || '')}" />`;
    }
    case 'table':
      return `<table>${childrenHTML(n)}</table>`;
    case 'tablerow':
      return `<tr>${childrenHTML(n)}</tr>`;
    case 'tablecell':
      return `<${n.headerState ? 'th' : 'td'}>${childrenHTML(n)}</${n.headerState ? 'th' : 'td'}>`;
    default:
      return childrenHTML(n); // unknown container -> render children
  }
}

function lexicalToHTML(content) {
  if (!content || !content.root) return '';
  return childrenHTML(content.root);
}

/*
 * NOTES / remaining front-end edits for Phase 4
 * ---------------------------------------------
 * 1. Env: set NEXT_PUBLIC_PAYLOAD_URL=https://next.sarapis.org and
 *    NEXT_PUBLIC_SITE_KEY=wegovnyc (Vercel + .env). Leaving NEXT_PUBLIC_STRAPI_URL
 *    set is harmless (only used as origin fallback).
 * 2. next.config.mjs images.remotePatterns: add the Payload host
 *    (next.sarapis.org) alongside strapi.wegov.nyc so <Image> loads heroes.
 * 3. Campaign forms (components/unnyc/UnnycCampaignSignup.js + CampaignSignForm.js):
 *    replace their direct `fetch(`${STRAPI_URL}/api/campaign-signups`, { body:
 *    JSON.stringify({ data: {...} }) })` with:
 *        import { createSubmission } from '@/lib/api';
 *        await createSubmission('campaign-signups', { email, campaign, source });
 *    (Payload wants a FLAT body, not Strapi's { data: {...} } wrapper. Endorsements
 *    → createSubmission('campaign-endorsements', { kind, name, email, ... }).)
 * 4. `/pages` (home/about/blog dynamic zones): out of scope here. The blog page
 *    degrades gracefully (falls back to default hero + still lists articles). The
 *    home page renders Strapi page sections — decide whether to (a) recreate those
 *    sections as Payload blocks and map them here, or (b) keep those pages as React
 *    in the frontend. wegov.nyc's main content (/unnyc) is already React, so (b) is
 *    the smaller path.
 * 5. Draft mode: Payload uses ?draft=true (wired above) — confirm the frontend's
 *    draftMode cookie/token flow if preview is needed; public reads already gate to
 *    published via Payload access control.
 */
