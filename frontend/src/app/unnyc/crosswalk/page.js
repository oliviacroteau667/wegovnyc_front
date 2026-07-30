import Link from 'next/link';
import '../primer.css';
import HeaderHeightVar from '@/components/unnyc/primer/HeaderHeightVar';
import { primerPolicies } from '@/data/unnyc-primer';
import { openSource } from '@/data/unnyc';

export const metadata = {
    title: 'Why Open Source Matters to You — UNNYC',
    description:
        'Why NYC’s reliance on proprietary vendor software costs New Yorkers, what endorsing the UN Open Source Principles would actually cost and fund, and a principle-by-principle look at the gap between the UN’s open source agenda and NYC’s reality.',
    openGraph: {
        title: 'Why Open Source Matters to You — UNNYC',
        description:
            'Who reliance on big tech vendors harms most, what endorsement would actually cost and fund, and the gap to close — principle by principle.',
        type: 'article',
    },
};

/**
 * /unnyc/crosswalk — "I want to know why open source matters to me." The
 * persuasive core of the campaign: who pays for vendor reliance today, what
 * endorsement would actually cost and fund, then a principle-by-principle
 * crosswalk between the UN's agenda and NYC's reality. Each principle ends
 * in the gap to close — the section this page treats as the point. Content
 * is the single source in data/unnyc-primer.js (primerPolicies), whose icon
 * set matches the definitions on /unnyc/start.
 */
export default function CrosswalkPage() {
    const { items, closing } = primerPolicies;

    return (
        <div className="unnyc-pr">
            <HeaderHeightVar />

            {/* Mini nav */}
            <nav className="unnyc-pr-nav" aria-label="Why it matters">
                <div className="unnyc-pr-nav__inner">
                    <Link href="/unnyc" className="unnyc-pr-nav__logo" title="Back to the UNNYC hub">
                        <span className="unnyc-pr-nav__logo-mark">UN</span>
                        <span className="unnyc-pr-nav__logo-ny">NYC</span>
                        <span className="unnyc-pr-nav__logo-tag">Why It Matters</span>
                    </Link>
                    <ul className="unnyc-pr-nav__links">
                        {items.map((it) => (
                            <li key={it.slug}>
                                <a href={`#${it.slug}`} className="unnyc-pr-nav__link">{it.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Header */}
            <header className="unnyc-pr-cw__header">
                <div className="unnyc-container">
                    <p className="unnyc-pr-cw__header-eyebrow">I want to know why open source matters to me</p>
                    <h1 className="unnyc-pr-cw__header-title">New York Runs on Software It Doesn&rsquo;t Control</h1>
                    <p className="unnyc-pr-cw__lede">
                        This is the case for the campaign — who pays for vendor reliance today, what
                        endorsing the UN Open Source Principles would actually cost and fund, and
                        what closing the gap on each of the eight principles would mean for you.
                    </p>
                </div>
            </header>

            {/* Persuasive intro — the "meat" of the campaign */}
            <section className="unnyc-pr-why">
                <div className="unnyc-container unnyc-container--narrow">
                    <h2 className="unnyc-pr-why__heading">Who Pays for Vendor Reliance?</h2>
                    <p>
                        Every city agency runs on software, and today most of that software is
                        proprietary — owned, licensed, and controlled by a small number of large
                        vendors. Every year the city can&rsquo;t walk away from a contract without
                        rebuilding a system from zero, the vendor&rsquo;s negotiating position gets
                        stronger and the city&rsquo;s gets weaker. That cost doesn&rsquo;t disappear:
                        it shows up as licensing fees paid year after year with no ownership at the
                        end, renewals with no leverage, and public money that goes to a vendor&rsquo;s
                        shareholders instead of a neighborhood.
                    </p>
                    <p>
                        The New Yorkers who feel this first aren&rsquo;t the ones with the loudest
                        voice in a budget hearing. They&rsquo;re the residents who depend most on the
                        systems that money should be improving: the family whose benefits application
                        sits in a slow, brittle portal that the agency running it can&rsquo;t change
                        without paying a vendor for the privilege; the small business or community
                        nonprofit that can&rsquo;t build anything on top of city data or city tools
                        because they&rsquo;re locked behind a system nobody outside the vendor can
                        touch; every taxpayer whose money renews a contract instead of funding a
                        caseworker.
                    </p>

                    <h2 className="unnyc-pr-why__heading">What Would Endorsement Actually Cost?</h2>
                    <p>
                        Endorsing the UN Open Source Principles costs the city nothing directly —
                        it&rsquo;s a signature, the same one Barcelona signed in November 2025. What
                        follows costs real but modest money, and other cities have already shown what
                        it looks like: an Open Source Programme Office (a small coordinating team,
                        not a new agency) and a public fund that supports maintaining the open source
                        software the city already depends on.{' '}
                        <span className="unnyc-pr-why__flag">
                            NEEDS SOURCE: a proposed NYC-specific budget figure — none exists yet
                        </span>
                    </p>
                    <p>
                        The clearest evidence this is financially sound comes from Germany&rsquo;s
                        Sovereign Tech Agency, which has invested more than €24 million in over 60
                        critical open source projects since 2022 — and received nearly 500
                        applications requesting more than €114 million, several times what it could
                        fund. That&rsquo;s a real, oversubscribed market showing this kind of
                        investment is not just affordable, but in demand from the people who&rsquo;d
                        actually use it to keep public infrastructure working. And because open
                        source software carries no per-seat licensing fee, this kind of one-time
                        public investment tends to replace a recurring vendor bill — money the city
                        currently pays out every year, indefinitely, for permission to keep using
                        its own systems.
                    </p>

                    <blockquote className="unnyc-pr-why__quote">
                        <p>
                            Barcelona framed its own endorsement in almost identical terms: a
                            &ldquo;desire to put technology in the hands of citizens and reduce
                            reliance on large tech companies,&rdquo; aiming for technology
                            &ldquo;in the hands of the citizens&rdquo; through &ldquo;a collaborative
                            model in which cities control their own data and infrastructure.&rdquo;
                        </p>
                        <cite>
                            — Barcelona&rsquo;s endorsement of the UN Open Source Principles, as
                            reported by{' '}
                            <a href={openSource.barcelona.link} target="_blank" rel="noopener noreferrer">
                                the EU Open Source Observatory
                            </a>
                        </cite>
                    </blockquote>
                    <p>
                        That&rsquo;s not an abstract ideal — it&rsquo;s the same argument in
                        different words: money and control that currently flow to outside vendors,
                        redirected toward the city and the residents it serves.
                    </p>
                </div>
            </section>

            {/* One section per principle */}
            <div className="unnyc-pr-cw">
                {items.map((it, index) => (
                    <section key={it.slug} id={it.slug} className="unnyc-pr-cw__section">
                        <div className="unnyc-container unnyc-container--narrow">
                            <div className="unnyc-pr-cw__heading">
                                <span className="unnyc-pr-cw__icon" aria-hidden="true">{it.icon}</span>
                                <h2 className="unnyc-pr-cw__title">{index + 1}. {it.title}</h2>
                            </div>

                            <div className="unnyc-pr-cw__summary">
                                <div className="unnyc-pr-cw__col">
                                    <h3 className="unnyc-pr-cw__col-label unnyc-pr-cw__col-label--un">UN Concept</h3>
                                    <p>{it.un}</p>
                                </div>
                                <div className="unnyc-pr-cw__col">
                                    <h3 className="unnyc-pr-cw__col-label unnyc-pr-cw__col-label--nyc">NYC Reality</h3>
                                    <p>{it.nyc}</p>
                                </div>
                            </div>

                            <div className="unnyc-pr-cw__part">
                                <h4 className="unnyc-pr-cw__part-label">The UN Principle</h4>
                                <p>{it.principle}</p>
                            </div>
                            <div className="unnyc-pr-cw__part">
                                <h4 className="unnyc-pr-cw__part-label">The NYC Reality</h4>
                                <p>{it.reality}</p>
                            </div>
                            <div className="unnyc-pr-cw__part unnyc-pr-cw__part--gap">
                                <h4 className="unnyc-pr-cw__part-label unnyc-pr-cw__part-label--gap">The Gap to Close</h4>
                                <p>{it.gap}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Closing — why NYC is central to the movement */}
            <section className="unnyc-pr-cw__closing">
                <div className="unnyc-container unnyc-container--narrow">
                    <p className="unnyc-pr-cw__closing-eyebrow">{closing.eyebrow}</p>
                    <h2 className="unnyc-pr-cw__closing-title">
                        <span aria-hidden="true">{closing.icon}</span> {closing.title}
                    </h2>
                    {closing.paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </section>

            {/* Foot nav */}
            <section className="unnyc-pr-cw__foot">
                <div className="unnyc-container unnyc-container--narrow">
                    <p>Convinced? The ask is a signature and a light-touch roadmap.</p>
                    <div className="unnyc-pr-cw__foot-ctas">
                        <Link href="/unnyc/campaign" className="unnyc-btn unnyc-btn--primary">
                            I&rsquo;m ready to show my support →
                        </Link>
                        <Link href="/unnyc/start" className="unnyc-btn unnyc-btn--outline">
                            ← New to open source?
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
