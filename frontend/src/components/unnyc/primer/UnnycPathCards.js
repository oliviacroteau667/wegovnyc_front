import Link from 'next/link';

const PATHS = [
    {
        href: '/unnyc/start',
        question: 'I am new to open source.',
        answer: 'Let’s walk you through it. You’ll get familiar with key terms and the history of the movement.',
    },
    {
        href: '/unnyc/crosswalk',
        question: 'I want to know why open source matters to me.',
        answer: 'We’ll show you exactly how open source principles can make NYC work better for you.',
    },
    {
        href: '/unnyc/campaign',
        question: 'I’m ready to show my support.',
        answer: 'Here’s the open letter, ready for you to sign.',
    },
    {
        href: '/unnyc/resources',
        question: 'I’m looking for related resources.',
        answer: 'Let’s see if we have what you’re looking for. If not, we’ll direct you to someone who does.',
    },
];

/**
 * UnnycPathCards — the hub's entry point. Four questions route a reader to
 * whichever of the four campaign sub-pages matches where they're starting
 * from, instead of asking everyone to read one long page top to bottom.
 */
export default function UnnycPathCards() {
    return (
        <section className="unnyc-pr-paths">
            <div className="unnyc-container">
                <p className="unnyc-pr-paths__eyebrow">First Things First</p>
                <div className="unnyc-pr-paths__grid">
                    {PATHS.map((path) => (
                        <Link key={path.href} href={path.href} className="unnyc-pr-path">
                            <h2 className="unnyc-pr-path__question">{path.question}</h2>
                            <p className="unnyc-pr-path__answer">
                                {path.answer}{' '}
                                <span className="unnyc-pr-path__arrow" aria-hidden="true">→</span>
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
