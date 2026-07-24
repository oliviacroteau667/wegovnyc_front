import SectionRenderer from '@/components/sections/SectionRenderer';
import { FROZEN_PAGES } from '@/content/frozen-pages';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Marketing pages (e.g. /about) are now frozen in src/content/frozen-pages.js
// rather than fetched from Strapi (hybrid CMS move). Unknown slugs 404.
function getFrozen(slug) {
  return FROZEN_PAGES[slug] || null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getFrozen(slug);
  if (!page) return {};
  return { title: (page.title || slug) + ' | WeGovNYC' };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const page = getFrozen(slug);
  if (!page) notFound();

  return (
    <div>
      <SectionRenderer sections={page.content} />
    </div>
  );
}
