import Link from 'next/link';
import '../primer.css';
import './start.css';
import HeaderHeightVar from '@/components/unnyc/primer/HeaderHeightVar';
import PrincipleDefinitions from '@/components/unnyc/primer/PrincipleDefinitions';
import PrimerConcepts from '@/components/unnyc/primer/PrimerConcepts';
import PrimerMovement from '@/components/unnyc/primer/PrimerMovement';
import PrimerMovementNow from '@/components/unnyc/primer/PrimerMovementNow';

export const metadata = {
    title: 'New to Open Source? Start Here — UNNYC',
    description:
        'New to open source? Learn the key vocabulary, the eight UN Open Source Principles, how the movement reached the UN, and who has already signed on.',
    openGraph: {
        title: 'New to Open Source? Start Here — UNNYC',
        description:
            'The vocabulary, the principles, the history, and the map — everything you need to follow the UNNYC campaign from the beginning.',
        type: 'article',
    },
};

/**
 * /unnyc/start — "I am new to open source." Orientation for a reader with
 * no background: vocabulary, the eight UN Open Source Principles, the
 * movement's history, and who has already signed on. Leads into
 * /unnyc/crosswalk ("why this matters to NYC").
 */
export default function StartPage() {
    return (
        <div className="unnyc-pr">
            <HeaderHeightVar />

            {/* Mini nav — back to the hub */}
            <nav className="unnyc-pr-nav" aria-label="New to open source">
                <div className="unnyc-pr-nav__inner">
                    <Link href="/unnyc" className="unnyc-pr-nav__logo" title="Back to the UNNYC hub">
                        <span className="unnyc-pr-nav__logo-mark">UN</span>
                        <span className="unnyc-pr-nav__logo-ny">NYC</span>
                        <span className="unnyc-pr-nav__logo-tag">Start Here</span>
                    </Link>
                </div>
            </nav>

            <header className="unnyc-start__header">
                <div className="unnyc-container">
                    <p className="unnyc-start__eyebrow">First Things First</p>
                    <h1 className="unnyc-start__title">New to Open Source? Let&rsquo;s Get You Oriented.</h1>
                    <p className="unnyc-start__lede">
                        Before the campaign asks anything of you, here&rsquo;s the background: the
                        vocabulary, the eight principles the UN adopted, how the movement got here,
                        and who has already signed on.
                    </p>
                </div>
            </header>

            <PrincipleDefinitions />
            <PrimerConcepts />
            <PrimerMovement />
            <PrimerMovementNow />

            {/* Foot CTA — leads into the next section */}
            <section className="unnyc-start__next">
                <div className="unnyc-container unnyc-container--narrow">
                    <p>Now that you know the basics —</p>
                    <Link href="/unnyc/crosswalk" className="unnyc-btn unnyc-btn--primary">
                        Why does this matter to me? →
                    </Link>
                </div>
            </section>
        </div>
    );
}
