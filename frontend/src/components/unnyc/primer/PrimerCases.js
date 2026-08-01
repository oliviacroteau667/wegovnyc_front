import { cases } from '@/data/unnyc-primer';

/**
 * PrimerCases — further case studies of governments running open source
 * programs now (Munich, Estonia, Germany, India, DHIS2, OpenCRVS). Barcelona
 * and Paris get full narrative treatment on /unnyc/success instead of a
 * card here. Each card ends with the transferable "lesson for NYC."
 */
export default function PrimerCases() {
    return (
        <section id="cases" className="unnyc-section">
            <div className="unnyc-container">
                <header className="unnyc-section__header">
                    <h2 className="unnyc-section__title">{cases.title}</h2>
                    <p className="unnyc-section__desc">{cases.lede}</p>
                </header>

                <div className="unnyc-pr-cases__grid">
                    {cases.items.map((c, i) => (
                        <article key={i} className="unnyc-pr-case">
                            <div className="unnyc-pr-case__place">
                                <span className="unnyc-pr-case__flag" aria-hidden="true">{c.flag}</span>
                                <span>{c.place}</span>
                            </div>
                            <h3 className="unnyc-pr-case__headline">{c.headline}</h3>
                            <p className="unnyc-pr-case__body">{c.body}</p>
                            <p className="unnyc-pr-case__lesson">
                                <span className="unnyc-pr-case__lesson-label">Lesson for NYC</span>
                                {c.lesson}
                            </p>
                            <a
                                href={c.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="unnyc-pr-case__link"
                            >
                                Learn more →
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
