import Link from 'next/link';
import '../primer.css';
import './resources.css';
import HeaderHeightVar from '@/components/unnyc/primer/HeaderHeightVar';
import PrimerResources from '@/components/unnyc/primer/PrimerResources';
import PrimerContacts from '@/components/unnyc/primer/PrimerContacts';
import PrimerNewsEvents from '@/components/unnyc/primer/PrimerNewsEvents';
import { fetchAPI } from '@/lib/api';
import { events as staticEvents, news as staticNews } from '@/data/unnyc';

export const metadata = {
    title: 'Related Resources — UNNYC',
    description:
        'A resource directory, the people to call, and UNNYC news and events. Looking for case studies? See what success looks like.',
    openGraph: {
        title: 'Related Resources — UNNYC',
        description:
            'The resource directory, the people to call, and news and events for the UNNYC campaign.',
        type: 'website',
    },
};

/**
 * /unnyc/resources — "I'm looking for related resources." Reference
 * material: the resource directory, the people to call, and news & events.
 * Case studies live on /unnyc/success instead. CMS-driven events/news
 * fetch lives here now (moved from the old hub page.js).
 */
export const revalidate = 3600;

const mapEvent = (i) => ({
    id: i.id,
    category: i.category,
    date: i.dateLabel,
    start: i.startDate,
    end: i.endDate || i.startDate,
    title: i.title,
    location: i.location,
    description: i.description,
    link: i.link,
});

const mapNews = (i) => ({
    source: i.source,
    title: i.title,
    excerpt: i.excerpt,
    date: i.dateLabel,
    sortDate: i.sortDate,
    link: i.link,
});

async function getEvents() {
    try {
        const res = await fetchAPI('/events', { pagination: { pageSize: 100 } });
        const rows = (res?.data || []).map(mapEvent);
        return rows.length ? rows : staticEvents;
    } catch (e) {
        console.error('UNNYC: events fetch failed, using static fallback —', e.message);
        return staticEvents;
    }
}

async function getNews() {
    try {
        const res = await fetchAPI('/news-items', { pagination: { pageSize: 100 } });
        const rows = (res?.data || []).map(mapNews);
        return rows.length ? rows : staticNews;
    } catch (e) {
        console.error('UNNYC: news fetch failed, using static fallback —', e.message);
        return staticNews;
    }
}

export default async function ResourcesPage() {
    const [events, news] = await Promise.all([getEvents(), getNews()]);

    return (
        <div className="unnyc-pr">
            <HeaderHeightVar />

            <header className="unnyc-resources__header">
                <div className="unnyc-container">
                    <p className="unnyc-resources__eyebrow">Looking for Something Specific?</p>
                    <h1 className="unnyc-resources__title">Related Resources</h1>
                    <p className="unnyc-resources__lede">
                        The primary sources, the people to call, and what&rsquo;s happening now. If
                        it&rsquo;s not here, one of these contacts can point you to who has it. Looking
                        for case studies instead?{' '}
                        <Link href="/unnyc/success">See what success looks like →</Link>
                    </p>
                </div>
            </header>

            <PrimerResources />
            <PrimerContacts />
            <PrimerNewsEvents news={news} events={events} />

            {/* Foot nav — the four paths don't dead-end here */}
            <section className="unnyc-resources__foot">
                <div className="unnyc-container unnyc-container--narrow">
                    <p>Looking for something else?</p>
                    <div className="unnyc-resources__foot-links">
                        <Link href="/unnyc/start" className="unnyc-btn unnyc-btn--outline">
                            New to government open source?
                        </Link>
                        <Link href="/unnyc/crosswalk" className="unnyc-btn unnyc-btn--outline">
                            Why does this matter?
                        </Link>
                        <Link href="/unnyc/success" className="unnyc-btn unnyc-btn--outline">
                            What success looks like
                        </Link>
                        <Link href="/unnyc/campaign" className="unnyc-btn unnyc-btn--primary">
                            Sign the open letter
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
