import { openSource } from '@/data/unnyc';

/* Same icon set/order as the crosswalk's eight principle cards
   (data/unnyc-primer.js primerPolicies.items), so a reader who has seen
   one recognizes the other. */
const ICONS = ['🔓', '🤝', '🛡️', '🧑‍🤝‍🧑', '🧩', '📚', '🌱', '♻️'];

/**
 * PrincipleDefinitions — plain-English definitions of the eight UN Open
 * Source Principles, for a reader with no background. The crosswalk page
 * (/unnyc/crosswalk) covers the same eight in depth, paired with NYC's
 * reality; this is just the vocabulary.
 */
export default function PrincipleDefinitions() {
    return (
        <section id="principles" className="unnyc-section unnyc-section--alt">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <span className="unnyc-section__eyebrow">The Foundation</span>
                    <h2 className="unnyc-section__title">The Eight UN Open Source Principles</h2>
                    <p className="unnyc-section__desc">
                        Adopted by the UN’s Digital and Technology Network in 2025, these eight
                        commitments define what it means for an institution to take open source
                        seriously — from how software gets built to how the people who build it
                        are supported.
                    </p>
                </header>

                <div className="unnyc-start-principles__grid">
                    {openSource.principles.map((p, i) => (
                        <article key={i} className="unnyc-start-principle">
                            <span className="unnyc-start-principle__icon" aria-hidden="true">{ICONS[i]}</span>
                            <h3 className="unnyc-start-principle__title">{i + 1}. {p.title}</h3>
                            <p className="unnyc-start-principle__desc">{p.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
