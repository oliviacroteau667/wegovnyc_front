/**
 * Content for the UNNYC hub (/unnyc) — the education-first "primer" framing.
 * Audience: NYC government technology staff. Goal: explain the key concepts the UN system has
 * united around (unopensource.org/agenda) and how the world is advancing
 * them, funneling to the endorse-the-Principles campaign.
 *
 * Sourced/verified against: unite.un.org (UN OS Principles + the 16
 * endorsing organizations, 25 Mar 2025), unopensource.org/agenda (OSW 2026
 * themes), OSOR/Interoperable Europe (Barcelona, Paris, Munich OSPOs),
 * sovereign.tech (funding figures), x-road.global / NIIS (Estonia).
 * Static-first (like data/unnyc.js); move into the CMS later if needed.
 */

export const primerHero = {
    eyebrow: 'A Primer for NYC Government Technologists',
    titleParts: [
        'The UN’s New York City office organizes the world’s open source government movement.',
        'New York City Government Should Join It.',
    ],
    subtitle:
        'Every June, UN Open Source Week brings 2,600+ participants from 120+ countries to UN Headquarters in Manhattan. In 2025, Barcelona became the first city to formally endorse the UN Open Source Principles. The city that hosts the movement hasn’t joined it — yet.',
    ctas: [
        { text: 'Sign the Open Letter', href: '/unnyc/campaign', style: 'primary', internal: true },
    ],
    stats: [
        { number: '8', label: 'UN Open Source Principles' },
        { number: '17+', label: 'Endorsing Organizations' },
        { number: '120+', label: 'Countries at UN OSW 2026' },
        { number: '1', label: 'City Endorsed — NYC Next?' },
    ],
};

export const movement = {
    eyebrow: 'The Movement',
    title: 'How the UN Came to Champion Open Source',
    lede:
        'Open source at the UN is not a side conversation — it is official policy direction, adopted at the highest coordination level of the UN system and backed by an annual summit at UN Headquarters. Here’s the arc.',
    timeline: [
        {
            year: '2019',
            title: 'Digital Public Goods Alliance founded',
            desc: 'A multi-stakeholder initiative (endorsed in the Secretary-General’s digital cooperation agenda) begins vetting and promoting open source solutions that advance the SDGs.',
        },
        {
            year: '2020',
            title: 'SG’s Roadmap for Digital Cooperation',
            desc: 'The Secretary-General names digital public goods — open source software, open data, open standards — as essential to an inclusive digital future.',
        },
        {
            year: '2023–24',
            title: '"OSPOs for Good" at UN Headquarters',
            desc: 'The UN convenes governments and foundations in New York around Open Source Programme Offices as the institutional home for public-sector open source.',
        },
        {
            year: 'Sept 2024',
            title: 'Global Digital Compact adopted',
            desc: 'At the Summit of the Future, member states commit to shared principles for an open, safe digital future — including explicit support for digital public goods and infrastructure.',
        },
        {
            year: 'March 2025',
            title: 'UN Open Source Principles adopted',
            desc: 'The UN CEB’s Digital and Technology Network adopts eight principles — "open by default," "contribute back," and more. The Open Source Initiative endorses first; sixteen more organizations follow, from the Linux Foundation to Germany’s Sovereign Tech Agency.',
        },
        {
            year: 'June 2025',
            title: 'First UN Open Source Week',
            desc: 'OSPOs for Good grows into a full week at UN Headquarters spanning AI, digital public infrastructure, and community-led events.',
        },
        {
            year: 'Nov 2025',
            title: 'Barcelona endorses — a city first',
            desc: 'Barcelona becomes the first city in the world to formally endorse the Principles, pairing the signature with an OSPO, a citizen agreement, and a municipal open source fund.',
        },
        {
            year: 'June 2026',
            title: 'UN OSW draws 2,600+ from 120+ countries',
            desc: 'Themed days — UN Tech Over, Open Source × AI, DPI Day, OSPOs for Good — plus the launch of the Public Code Observatory mapping public-sector open source worldwide.',
        },
    ],
};

export const concepts = {
    eyebrow: 'Key Concepts',
    title: 'The Vocabulary of the Movement',
    lede:
        'Ten terms that recur across UN Open Source Week, the Global Digital Compact, and every government open source program worth studying. Learn these and you can follow — and join — any conversation in this space.',
    terms: [
        {
            term: 'Open Source (FOSS)',
            def: 'Software whose source code anyone can inspect, use, modify, and share. "Free and open source software" is about freedom and public auditability, not price.',
            nyc: 'A handful of NYC agencies already publish code on GitHub on their own initiative. Endorsement would turn that scattered habit into a citywide standard.',
            link: { url: 'https://en.wikipedia.org/wiki/Free_and_open-source_software', label: 'Wikipedia' },
        },
        {
            term: 'UN Open Source Principles',
            def: 'Eight commitments adopted by the UN’s Digital and Technology Network in 2025 — from "open by default" to "sustain and scale" — defining how the UN system approaches software.',
            nyc: 'Endorsement is a signature plus a roadmap, not a procurement overhaul. It’s the entry ticket to a global community of practice.',
            link: { url: 'https://unite.un.org/en/news/sixteen-organizations-endorse-un-open-source-principles', label: 'unite.un.org' },
        },
        {
            term: 'OSPO — Open Source Programme Office',
            def: 'A dedicated team that coordinates an institution’s open source strategy: what to use, what to publish, how to contribute, and how to stay secure and compliant.',
            nyc: 'Paris, Munich, and the UN itself run OSPOs. NYC’s Office of Technology & Innovation is the natural home for one.',
            link: { url: 'https://en.wikipedia.org/wiki/Open_Source_Program_Office', label: 'Wikipedia' },
        },
        {
            term: 'Digital Public Goods (DPGs)',
            def: 'Open source software, open data, open AI models, standards, and content that adhere to privacy and best practices and help attain the SDGs — vetted via the DPG Standard and listed in the DPGA registry.',
            nyc: 'Tools NYC builds could qualify as DPGs — and tools in the registry are free for NYC to adopt instead of procuring proprietary equivalents.',
            link: { url: 'https://www.digitalpublicgoods.net/', label: 'DPG Alliance' },
        },
        {
            term: 'Digital Public Infrastructure (DPI)',
            def: 'The shared digital rails a society runs on — identity, payments, data exchange. Like roads or the power grid, DPI works best as interoperable public infrastructure rather than a set of walled gardens.',
            nyc: 'Cities everywhere face the same needs — benefits access, permits, identity, participation. Increasingly they solve them once and share: platforms like Decidim and X-Road are built by one government and reused by dozens. NYC can join that exchange instead of buying its own silo.',
            link: { url: 'https://en.wikipedia.org/wiki/Digital_public_infrastructure', label: 'Wikipedia' },
        },
        {
            term: 'Digital Sovereignty',
            def: 'A government’s ability to control its own digital destiny — to understand, run, audit, and change the systems it depends on, rather than being locked into any single vendor.',
            nyc: 'Every proprietary contract renewal NYC can’t walk away from is a sovereignty question. Open source is the strongest structural answer.',
            link: { url: 'https://en.wikipedia.org/wiki/Digital_sovereignty', label: 'Wikipedia' },
        },
        {
            term: 'Global Digital Compact (GDC)',
            def: 'The framework adopted by UN member states in September 2024 committing to an inclusive, open, safe and secure digital future — with digital public goods and infrastructure named as shared priorities.',
            nyc: 'The GDC is the diplomatic umbrella. When NYC aligns local tech policy with it, the city speaks a language 193 member states have already agreed to.',
            link: { url: 'https://www.un.org/global-digital-compact', label: 'un.org' },
        },
        {
            term: 'Open Standards & Interoperability',
            def: 'Publicly documented formats and protocols that let systems from different makers work together — the difference between an ecosystem and a lock-in.',
            nyc: 'Writing open standards into procurement is the single highest-leverage clause NYC’s buyers control.',
            link: { url: 'https://en.wikipedia.org/wiki/Open_standard', label: 'Wikipedia' },
        },
        {
            term: 'Universal DPI Safeguards Framework',
            def: 'A UN-backed framework for building digital public infrastructure that protects rights by design — privacy, security, inclusion, and accountability baked in from the start.',
            nyc: 'A ready-made rights checklist NYC can apply to every resident-facing system it builds or buys — no need to invent one.',
            link: { url: 'https://www.dpi-safeguards.org/', label: 'dpi-safeguards.org' },
        },
        {
            term: '"Public Money, Public Code"',
            def: 'The principle that software paid for by the public should be available to the public as open source — popularized in Europe and adopted as policy by cities like Munich.',
            nyc: 'A slogan NYC’s civic tech community already believes in; endorsement would make it official posture.',
            link: { url: 'https://publiccode.eu/', label: 'FSFE' },
        },
    ],
};

export const cases = {
    eyebrow: 'Case Studies',
    title: 'Governments Doing This Now',
    lede:
        'None of this is theoretical. Cities and nations have run open source government programs for years — and increasingly build them together, sharing one codebase across dozens of governments instead of each buying its own. Results NYC can learn from, and networks it can join.',
    items: [
        {
            place: 'Barcelona',
            flag: '🇪🇸',
            headline: 'The endorsement playbook',
            body:
                'In November 2025 Barcelona became the first city in the world to formally endorse the UN Open Source Principles — sparked by attending UN Open Source Week. The signature came with three commitments: a citizen agreement on democratic technologies, an Open Source Programme Office, and a municipal fund for open source innovation.',
            lesson: 'Endorsement is cheap, concrete, and pairs a signature with a light-touch roadmap. This is the model NYC can copy directly.',
            link: 'https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor/news/barcelona-first-city-globally-adopt-un-open-source-principles',
        },
        {
            place: 'Paris',
            flag: '🇫🇷',
            headline: 'A city OSPO running 300+ services',
            body:
                'Paris runs Lutèce, an open source platform powering more than 300 city web services — permits, housing, the participatory budget. Its OSPO (begun 2019, fully established 2022, among the first city OSPOs anywhere) coordinates the city’s open source assets, and Lutèce has been redeployed as far away as Baltimore.',
            lesson: 'A city OSPO isn’t bureaucracy — it’s how one city’s investment becomes 300 reusable services, and other cities’ free head start.',
            link: 'https://www.projets-libres.org/en/podcast/offering-free-digital-services-to-citizens-from-lutece-to-cite-libre-paris-fr/',
        },
        {
            place: 'Munich',
            flag: '🇩🇪',
            headline: '"Public money, public code" as council policy',
            body:
                'After a decade of hard-won lessons on desktop Linux, Munich came back smarter: a 2023 City Council motion created an OSPO inside its IT department with a dual mandate — use open source where it’s strong, and publish the city’s own software under "public money, public code."',
            lesson: 'The mature posture isn’t all-or-nothing migration — it’s an institutional office with a publish-by-default rule.',
            link: 'https://opensource.muenchen.de/ospo.html',
        },
        {
            place: 'Estonia',
            flag: '🇪🇪',
            headline: 'Open sourcing the national data backbone',
            body:
                'X-Road, the data exchange layer connecting Estonia’s entire digital state, was open sourced under the MIT license in 2016. Estonia and Finland founded a joint institute (NIIS) to steward it; their national systems federated in 2018, Iceland followed, and roughly 20 more countries now run it.',
            lesson: 'Opening core infrastructure didn’t weaken it — it turned one country’s backbone into a shared international standard with pooled maintenance.',
            link: 'https://x-road.global/',
        },
        {
            place: 'Germany',
            flag: '🇩🇪',
            headline: 'Funding the open source that everything runs on',
            body:
                'Germany’s Sovereign Tech Agency (launched 2022) has invested over €24 million in 60+ critical open source components — the libraries, protocols, and tools every government and company silently depends on. Demand tells the story: nearly 500 applications seeking €114M+.',
            lesson: 'Open source infrastructure needs maintenance money, and a public fund for it is now a proven, exportable model.',
            link: 'https://www.sovereign.tech/',
        },
        {
            place: 'India',
            flag: '🇮🇳',
            headline: 'DPI at population scale',
            body:
                'India’s digital public infrastructure — open APIs and platforms for identity and payments — shows what shared rails do at scale: UPI processes billions of transactions a month across hundreds of competing apps. The open source ID platform MOSIP, born of the same thinking, is now adopted by countries across Asia and Africa.',
            lesson: 'When the rails are open and interoperable, the private sector competes on top of them instead of owning them.',
            link: 'https://www.mosip.io/',
        },
        {
            place: 'Decidim',
            flag: '🗳️',
            headline: 'One participation platform, ~90 governments',
            body:
                'Barcelona built Decidim, an open source citizen-participation platform — itself forked from Madrid’s Consul. It now runs in close to 90 cities, regions, and institutions reaching over a million people, while Consul’s lineage spans 35 countries. Governments pool code, features, and translations instead of each commissioning its own tool.',
            lesson: 'When one city opens its platform, the next gets it for free — and improves it for everyone. NYC could adopt and contribute rather than procure from scratch.',
            link: 'https://decidim.org/',
        },
        {
            place: 'DHIS2',
            flag: '🩺',
            headline: 'Health data for 80+ countries, one codebase',
            body:
                'DHIS2, stewarded by the University of Oslo with a global network of regional support groups, is the government health-information system of record in more than 80 countries — reaching roughly 3.2 billion people. National ministries co-fund and shape a single shared open source platform instead of buying 80 separate ones.',
            lesson: 'A public institution can steward critical government software as a shared good for decades. Pooled maintenance beats duplicated procurement.',
            link: 'https://dhis2.org/',
        },
        {
            place: 'OpenCRVS',
            flag: '🧾',
            headline: 'Civil registration, configured per country',
            body:
                'OpenCRVS is an open source birth-, death-, and marriage-registration platform built for multi-country adoption: configurable workflows adapt to each nation’s laws, and it interoperates with identity (MOSIP), payments, and health (DHIS2) systems. A digital public good governments deploy and extend together.',
            lesson: 'Foundational government systems can be built once as open standards and localized per jurisdiction — exactly the reusability NYC procurement could ask for.',
            link: 'https://www.opencrvs.org/',
        },
    ],
};

/* The crosswalk — all eight UN Open Source Principles mapped to NYC reality.
   Each item: a short UN/NYC summary pair (used in the page's sticky nav and
   header strip), then three full paragraphs — the principle, the reality,
   and the gap to close. The gap is the section the page treats as the point:
   what closing it would concretely mean for an average New Yorker, not just
   for city government. */
export const primerPolicies = {
    eyebrow: 'Why It Matters',
    title: 'Eight Principles, Eight NYC Realities',
    lede: 'NYC is closer to the UN’s open source posture than most people inside the city realize. Here is what each of the eight UN Open Source Principles would concretely mean for New York — and for the New Yorkers who use what the city builds.',
    items: [
        {
            icon: '🔓',
            slug: 'open-by-default',
            title: 'Open by Default',
            un: 'UN Open Source Principle #1: open source as the standard approach for every project across the UN system.',
            nyc: 'NYC already applies this logic to data. The same default for code is the next step — and a few agencies have already started.',
            principle:
                '"Open by default" reverses the usual burden of proof. Instead of asking a team to justify why a piece of software should be open, it asks them to justify why it should stay closed — with legitimate exceptions for security, privacy, or third-party licensing. It is a starting posture, not an absolute: openness is the presumption a project begins from, not an afterthought someone has to fight for later.',
            reality:
                'New York already lives by a version of this rule — just not for software yet. The Open Data Law (Local Law 11 of 2012) is one of the strongest municipal transparency mandates in the country: it requires city agencies to publish their public data by default, no special request needed. A handful of agencies have taken the same approach with their own code, publishing repositories on GitHub on their own initiative. What doesn’t yet exist is a citywide rule that makes that the default, rather than a matter of which agency happens to care.',
            gap:
                'Endorsing this principle would turn scattered good habits into policy: a stated default, a short list of legitimate exceptions, and an expectation that new city projects start in the open. For the average New Yorker, that means the tools your government builds — a benefits calculator, a 311 tracker, a permit form — can be checked by outside experts, reused by other agencies instead of rebuilt from scratch, and fixed faster because more people can find and flag what’s broken.',
        },
        {
            icon: '🤝',
            slug: 'contribute-back',
            title: 'Contribute Back',
            un: 'UN Open Source Principle #2: active participation in the open source ecosystem, not just downstream consumption.',
            nyc: 'NYC Planning Labs has shipped open source tools for years — proof the city can contribute, not only consume.',
            principle:
                '"Contribute back" holds that institutions benefiting from open source should be active participants in it, not just downstream consumers: upstreaming fixes to the projects they depend on, publishing genuinely reusable tools rather than one-off scripts, and engaging the communities maintaining the software they rely on. It is the difference between taking from a commons and helping sustain it.',
            reality:
                'New York has a real track record to build on. NYC Planning Labs spent years shipping open source mapping and civic tools in public, and other city teams have published code and data pipelines that outside developers — and other governments — have reused. What has been missing is the policy and the plumbing to make that routine, rather than dependent on which individual team happens to take the initiative.',
            gap:
                'Scaling the practice mostly takes permission and process: a policy that lets staff upstream fixes, a default that reusable work gets published, and light guidance on licensing. For the average New Yorker, a city that contributes back means better tools arrive faster — the mapping library or data pipeline city staff improve today is the same one a nonprofit tracking housing conditions, or a journalist digging into 311 complaints, can build on tomorrow. Public money spent once, put to work far beyond city government.',
        },
        {
            icon: '🛡️',
            slug: 'secure-by-design',
            title: 'Secure by Design',
            un: 'UN Open Source Principle #3: security built in from the first line of code, with a clear channel to report a flaw before it’s exploited.',
            nyc: '[NEEDS SOURCE: NYC’s current vulnerability-disclosure practices across agencies] — most city software today runs on vendor systems no outside researcher can inspect at all.',
            principle:
                'Secure by design treats security as a first-class requirement, not a patch applied after launch: threat modeling before code is written, dependencies tracked and kept current, and — critically — a public, no-retaliation channel for outside researchers to report a flaw responsibly. This doesn’t mean open source is automatically safer than closed software; it means security is verifiable rather than taken on faith, because anyone qualified can check the work instead of trusting a vendor’s word for it.',
            reality:
                'New York runs a mix of homegrown and vendor-purchased systems, and for the vendor-purchased majority, residents, journalists, and independent security researchers have no way to check whether the software handling a benefits application or a child’s school records is actually secure — they can only take the vendor’s claims on faith. [NEEDS SOURCE: any NYC agency vulnerability-disclosure program or past incident worth citing]. When a flaw exists in closed software, the public often learns about it only after someone has already exploited it.',
            gap:
                'Endorsing this principle pushes city technology toward an auditable security posture and a real responsible-disclosure channel — the same posture bug-bounty programs and open source foundations already run on. For the average New Yorker, that’s the difference between a breach nobody could have caught in advance and one an outside researcher flags weeks before it could do any damage, because more than one vendor’s staff are allowed to go looking for the problem.',
        },
        {
            icon: '🧑‍🤝‍🧑',
            slug: 'foster-inclusion',
            title: 'Foster Inclusion',
            un: 'UN Open Source Principle #4: inclusive participation and community-building, so the people building the software reflect the people it serves.',
            nyc: 'Groups like BetaNYC already organize New Yorkers around civic technology — the constituency for this already exists; it just isn’t connected to city government yet.',
            principle:
                'Fostering inclusion means deliberately building a broad, diverse contributor base, not treating it as a nice-to-have: welcoming first-time contributors, writing documentation for non-experts, translating into the languages a community actually speaks, and making sure the loudest voices in a project aren’t the only ones steering it.',
            reality:
                'New York already has the raw ingredients — a large, technically skilled, famously diverse population, and civic tech groups like BetaNYC that have run open-data and open-government meetups for years, independent of any city mandate. What’s missing is a formal bridge between that existing community and city government’s own software work; today, a resident who wants to help fix a city tool has no clear door to walk through.',
            gap:
                'Closing this gap means actively inviting that community in: a published contributor guide, key civic tools and their documentation translated into the languages New Yorkers actually speak, and community contributions treated as normal rather than exceptional. For the average New Yorker, that’s the difference between government software designed for you and government software partly designed by people like you — including residents without a technical background who understand better than anyone where a form or a city tool is actually failing them.',
        },
        {
            icon: '🧩',
            slug: 'design-for-reusability',
            title: 'Design for Reusability',
            un: 'UN Open Source Principle #5: build software that works across platforms and contexts, so one government’s solution becomes every government’s head start.',
            nyc: 'NYC’s procurement rules are where reusability becomes real or doesn’t — an open-standards preference clause is the highest-leverage reform available to city buyers.',
            principle:
                'Open standards — publicly documented formats and protocols any vendor can implement — are what keeps a digital system part of an ecosystem rather than a trap. Interoperability is what lets a government change vendors, connect systems built by different makers, and avoid the slow accumulation of lock-in that makes every proprietary renewal non-negotiable.',
            reality:
                'For a city, procurement is where this stops being philosophy and becomes leverage. The contracts NYC signs decide whether its data stays portable, whether formats are documented, and whether a future administration can switch providers without rebuilding from scratch. As one of the largest municipal technology buyers in the country, the standards NYC writes into its solicitations ripple through the vendor market well beyond the five boroughs.',
            gap:
                'A preference clause — favoring open standards and open source where they meet the need, and requiring data export and documented interfaces — shapes every system the city buys for years afterward. For the average New Yorker, this shows up as a government that can actually fix things: a slow benefits portal or a broken permit form can be handed to a different vendor, or fixed in-house, instead of the city being stuck for years with whoever won the original contract.',
        },
        {
            icon: '📚',
            slug: 'provide-documentation',
            title: 'Provide Documentation',
            un: 'UN Open Source Principle #6: thorough documentation for the people who use, maintain, and build on a project — not just its original authors.',
            nyc: 'When a vendor contract ends or a key city employee leaves, institutional knowledge of how a system actually works often leaves with them.',
            principle:
                'Good documentation is what lets someone other than the original author safely use, fix, or extend a piece of software: what it does, how to run it, what happens when an input is wrong, who to ask when it breaks. In the open source world it’s a deliverable, reviewed and maintained alongside the code — not something written once and left to rot.',
            reality:
                '[NEEDS SOURCE: specific examples of under-documented city systems] — but the general pattern is familiar in any large institution buying software: vendor systems often ship with documentation that is thin, outdated, or contractually restricted to the vendor’s own staff. When a contract lapses or a key city technologist moves on, the working knowledge of how a critical system runs can leave with them.',
            gap:
                'Requiring real documentation — plain-language, kept current, and owned by the city rather than locked inside a vendor’s support desk — closes that gap directly. For the average New Yorker, that means fewer systems down for weeks because nobody left could explain how they worked, and faster fixes when something does break, because the next person to touch the code isn’t reverse-engineering it from scratch on the taxpayer’s clock.',
        },
        {
            icon: '🌱',
            slug: 'rise',
            title: 'RISE',
            un: 'UN Open Source Principle #7 — Recognize, Incentivize, Support, and Empower: institutions should formally back the people doing open source work, not leave it to individual initiative.',
            nyc: 'The Office of Technology & Innovation already coordinates citywide tech — the natural institutional home for the office that would make this real.',
            principle:
                'An Open Source Programme Office is the institutional mechanism behind this principle: a small team that coordinates what an organization uses, what it publishes, how it contributes back, and how it stays secure while doing so. The UN runs one, and its annual "OSPOs for Good" convening at UN Headquarters exists to help governments stand theirs up.',
            reality:
                'Cities have shown what this looks like at municipal scale: Paris built one of the first city OSPOs and now maintains a platform of 300+ reusable services; Munich’s OSPO runs under a "public money, public code" mandate; Barcelona paired its UN endorsement with a commitment to create one. In each case the office is small — a team and a mandate, not a new agency. New York already has the natural host in the Office of Technology & Innovation, which coordinates technology across city agencies today.',
            gap:
                'Without a dedicated office, good open source work inside city government depends entirely on which individual staff happen to care enough to push for it in their spare time — and it disappears when they leave. An NYC OSPO makes that support structural instead of personal. For the average New Yorker, that’s the difference between one good civic tool existing because an employee fought for it, and dozens existing because the city built a system that reliably produces them.',
        },
        {
            icon: '♻️',
            slug: 'sustain-and-scale',
            title: 'Sustain and Scale',
            un: 'UN Open Source Principle #8: build solutions that meet evolving needs over time — funded and maintained for the long run, not abandoned after launch.',
            nyc: 'Cities everywhere face the same needs — identity, payments, benefits access — and increasingly share the maintenance burden instead of each re-buying its own.',
            principle:
                'Sustaining and scaling means treating the digital systems a city runs on — identity, payments, data exchange — like roads or the power grid: shared, interoperable infrastructure kept in working order for decades, not a product that ships once and is left to decay. Estonia open-sourced its national data-exchange layer and roughly twenty countries now run it; Barcelona’s participation platform runs in close to ninety governments. Sharing the build is only half of it — someone still has to fund the ongoing maintenance.',
            reality:
                'New York’s question isn’t whether it has this kind of infrastructure — any large resident-facing platform is infrastructure in effect — but whether it’s built on open, reusable, standards-based components that can be maintained for the long haul, or on closed ones the city can’t sustain without the original vendor.',
            gap:
                'The mechanism other governments use to fund sustained maintenance is a modest public fund for the software the city already depends on — modeled on Germany’s Sovereign Tech Agency, which has put over €24 million into keeping critical open source infrastructure maintained, with demand far outstripping the money available. For the average New Yorker, a sustained system is simply one that keeps working: it doesn’t quietly degrade for years because the one person who understood it left, or vanish because a vendor discontinued a product line.',
        },
    ],
    /* The closing narrative for /unnyc/crosswalk — not a principle, but the
       answer to "why is NYC central to this movement," asked right after the
       eight-principle walkthrough. */
    closing: {
        icon: '🌐',
        eyebrow: 'One Last Question',
        title: 'Why New York Is Central to This Movement',
        paragraphs: [
            'Every June, UN Open Source Week brings more than 2,600 participants from over 120 countries to UN Headquarters — in New York City. The Global Digital Compact, adopted by member states in 2024, gives that gathering a shared vocabulary: digital public goods, digital public infrastructure, open standards. It is, in effect, a standing global table on public-interest technology, convened a subway ride from City Hall, at which New York is currently a host but not a participant.',
            'New York has a distinctive habit of being first to that kind of table. It was the first U.S. city to submit a Voluntary Local Review of its Sustainable Development Goal progress to the UN, in 2018 — a model since copied by cities worldwide — and the first U.S. city to join the UN’s Safe Cities initiative. In each case a relatively low-cost act of alignment gave the city outsized visibility and leadership. Endorsing the UN Open Source Principles is the same move, applied to technology.',
            'No city in the Americas has yet endorsed the Principles. New York, which hosts the movement every June, is the natural candidate to be first — gaining access to a global community of practice, to solutions other governments have already built and battle-tested, and to the contacts who can help it adopt them.',
        ],
    },
};

/* Global map — governments and institutions advancing public-sector open source. */
export const primerMapMarkers = [
    { type: 'ask', lat: 40.7489, lng: -73.968, label: 'New York City — next?', desc: 'Host of UN Open Source Week. The campaign: make NYC the first city in the Americas to endorse the UN Open Source Principles.' },
    { type: 'city', lat: 41.3874, lng: 2.1686, label: 'Barcelona', desc: 'First city in the world to endorse the UN Open Source Principles (Nov 2025) — with an OSPO, citizen agreement, and municipal open source fund.' },
    { type: 'city', lat: 48.8566, lng: 2.3522, label: 'Paris', desc: 'Pioneer city OSPO (est. 2019); its open source Lutèce platform runs 300+ city services and has been redeployed abroad.' },
    { type: 'city', lat: 48.1351, lng: 11.582, label: 'Munich', desc: 'City Council–mandated OSPO (2023) operating under "public money, public code."' },
    { type: 'nation', lat: 59.437, lng: 24.7536, label: 'Estonia (Tallinn)', desc: 'Open sourced X-Road, the data exchange layer of its digital state, under MIT (2016); co-founded NIIS to steward it.' },
    { type: 'nation', lat: 60.1699, lng: 24.9384, label: 'Finland (Helsinki)', desc: 'Co-founder of NIIS; federated its national data exchange with Estonia’s in 2018.' },
    { type: 'nation', lat: 64.1466, lng: -21.9426, label: 'Iceland (Reykjavík)', desc: 'Runs Straumurinn, its national X-Road environment — open infrastructure crossing borders.' },
    { type: 'nation', lat: 52.52, lng: 13.405, label: 'Germany (Berlin)', desc: 'Sovereign Tech Agency: €24M+ invested in maintaining critical open source; ZenDiS builds openDesk for public administration. Both endorsed the UN Principles.' },
    { type: 'nation', lat: 12.9716, lng: 77.5946, label: 'India (Bengaluru)', desc: 'DPI at population scale (identity, payments) and home of MOSIP, the open source ID platform adopted internationally.' },
    { type: 'nation', lat: 8.4657, lng: -13.2317, label: 'Sierra Leone (Freetown)', desc: 'Ministerial voice at UN OSW 2026 — part of a wide Global South presence shaping the agenda.' },
    { type: 'nation', lat: 17.9714, lng: -76.7931, label: 'Jamaica (Kingston)', desc: 'At the ministerial table at UN OSW 2026 as the Caribbean engages DPI and open source.' },
    { type: 'un', lat: 46.2044, lng: 6.1432, label: 'Geneva — UN system', desc: 'ITU, UNICC and the wider UN digital ecosystem driving open standards and shared platforms.' },
    { type: 'un', lat: 40.7505, lng: -73.9682, label: 'UN Headquarters, NYC', desc: 'Where the UN CEB Digital & Technology Network adopted the eight Principles — and where the world’s open source movement meets every June.' },
];

export const primerMapLegend = [
    { type: 'city', label: 'Cities leading' },
    { type: 'nation', label: 'National programs' },
    { type: 'un', label: 'UN system' },
    { type: 'ask', label: 'NYC — the ask' },
];

export const endorsers = {
    eyebrow: 'Endorsers & Contributors',
    title: 'Who Has Already Signed On',
    lede:
        'The Open Source Initiative was first to endorse the UN Open Source Principles; sixteen more organizations — foundations, industry, and public agencies — joined at the March 2025 launch, and Barcelona became the first endorsing city that November.',
    orgs: [
        { name: 'Open Source Initiative (first endorser)', url: 'https://opensource.org/' },
        { name: 'The Linux Foundation', url: 'https://www.linuxfoundation.org/' },
        { name: 'Eclipse Foundation', url: 'https://www.eclipse.org/' },
        { name: 'GNOME Foundation', url: 'https://foundation.gnome.org/' },
        { name: 'The Document Foundation', url: 'https://www.documentfoundation.org/' },
        { name: 'Open Knowledge Foundation', url: 'https://okfn.org/' },
        { name: 'Open Forum Europe', url: 'https://openforumeurope.org/' },
        { name: 'OpenInfra Foundation', url: 'https://openinfra.dev/' },
        { name: 'Matrix.org Foundation', url: 'https://matrix.org/' },
        { name: 'Sovereign Tech Agency', url: 'https://www.sovereign.tech/' },
        { name: 'ZenDiS — Centre for Digital Sovereignty', url: 'https://zendis.de/' },
        { name: 'Nextcloud', url: 'https://nextcloud.com/' },
        { name: 'Rocket.Chat', url: 'https://www.rocket.chat/' },
        { name: 'Linagora', url: 'https://www.linagora.com/' },
        { name: 'RTE (Réseau de Transport d’Électricité)', url: 'https://www.rte-france.com/' },
        { name: 'Linux Professional Institute', url: 'https://www.lpi.org/' },
        { name: 'European Open Source Academy', url: 'https://opensource.academy/' },
    ],
    city: {
        name: 'Barcelona',
        desc: 'First city in the world to endorse (November 2025)',
    },
    cta: {
        text: 'The list of cities has one name on it. Help add New York’s — sign or endorse the open letter.',
        href: '/unnyc/campaign',
        label: 'Read & Sign the Open Letter',
    },
};

export const primerResources = {
    eyebrow: 'Resource Directory',
    title: 'Go Deeper',
    lede: 'The primary sources — read the frameworks, browse the registries, join the communities.',
    groups: [
        {
            title: 'Start Here',
            icon: '📖',
            links: [
                { text: 'UN Open Source Week', url: 'https://www.unopensource.org/', desc: 'The annual convening at UN HQ — agenda, recordings, and community.' },
                { text: 'The UN Open Source Principles', url: 'https://unite.un.org/en/news/sixteen-organizations-endorse-un-open-source-principles', desc: 'The eight principles and the launch announcement.' },
                { text: 'Global Digital Compact', url: 'https://www.un.org/global-digital-compact', desc: 'The member-state framework naming DPGs and DPI as shared priorities.' },
                { text: 'NYC Government Guide to UN Engagement', url: '/unnyc/guide', internal: true, desc: 'A practical guide for NYC government staff on OSW, OSPOs, GAM-4-DC, WUF13, and first steps.' },
            ],
        },
        {
            title: 'Directories & Registries',
            icon: '📋',
            links: [
                { text: 'DPI Map (UCL IIPP)', url: 'https://dpimap.org/', desc: 'Interactive world map — click any country to see the digital ID, payment, and data-exchange systems it uses. 210 countries; 2025 State of DPI report.' },
                { text: 'DPG Standard & Registry (DPGA)', url: 'https://www.digitalpublicgoods.net/registry', desc: 'The vetted registry of digital public goods, filterable by SDG and searchable by deployment.' },
                { text: 'Universal DPI Safeguards', url: 'https://www.dpi-safeguards.org/', desc: 'The rights-by-design framework for public digital infrastructure.' },
                { text: 'GovStack', url: 'https://www.govstack.global/', desc: 'Building-block specifications for government digital services.' },
                { text: 'X-Road', url: 'https://x-road.global/', desc: 'The open source data exchange layer run by 20+ countries.' },
            ],
        },
        {
            title: 'Communities of Practice',
            icon: '🤝',
            links: [
                { text: 'TODO Group', url: 'https://todogroup.org/', desc: 'The practitioner community for running an OSPO — guides and templates.' },
                { text: 'OSPO Alliance', url: 'https://ospo-alliance.org/', desc: 'European-rooted alliance with an OSPO onboarding handbook.' },
                { text: 'EU Open Source Observatory (OSOR)', url: 'https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor', desc: 'Case studies and news on public-sector open source across Europe.' },
                { text: 'Code for America', url: 'https://codeforamerica.org/', desc: 'The US civic tech network — the domestic ally ecosystem.' },
            ],
        },
        {
            title: 'Money & Maintenance',
            icon: '🌱',
            links: [
                { text: 'Sovereign Tech Agency', url: 'https://www.sovereign.tech/', desc: 'Germany’s public fund for maintaining critical open source infrastructure.' },
                { text: 'Digital Public Goods Alliance', url: 'https://www.digitalpublicgoods.net/', desc: 'Pathways to fund, certify, and scale DPGs.' },
                { text: 'MOSIP', url: 'https://www.mosip.io/', desc: 'The open source ID platform — a study in sustainably governed DPI.' },
            ],
        },
    ],
};

export const contacts = {
    eyebrow: 'Who Can Help',
    title: 'The People to Call',
    lede:
        'Outward-facing organizations — with public contact channels — whose job is helping governments adopt open source, DPGs, and DPI. If NYC wants to get on the same page as the UN community, these are the doors to knock on.',
    note: 'All channels listed are the organizations’ own public contact points.',
    groups: [
        {
            title: 'UN System',
            items: [
                {
                    org: 'UN Office for Digital and Emerging Technologies (ODET)',
                    role: 'Stewards the Global Digital Compact follow-up; led by USG Amandeep Singh Gill, the UN’s top digital official.',
                    helps: 'Connecting city digital policy to UN processes and the GDC.',
                    url: 'https://www.un.org/digital-emerging-technologies/',
                },
                {
                    org: 'UN Open Source Week organizers (OICT)',
                    role: 'The team behind the annual convening at UN Headquarters.',
                    helps: 'Getting NYC officials into the room every June — the single easiest first step.',
                    url: 'https://www.unopensource.org/',
                },
            ],
        },
        {
            title: 'Global Institutions',
            items: [
                {
                    org: 'Digital Public Goods Alliance (DPGA)',
                    role: 'The multi-stakeholder body that maintains the DPG Standard and registry.',
                    helps: 'Certifying NYC-built tools as DPGs; finding vetted open solutions to adopt.',
                    url: 'https://www.digitalpublicgoods.net/',
                },
                {
                    org: 'Centre for Digital Public Infrastructure (CDPI)',
                    role: 'Advisory center (co-founded by India Stack architects) that runs a help desk for governments building DPI.',
                    helps: 'Free architectural guidance for any DPI effort NYC takes on.',
                    url: 'https://cdpi.dev/',
                },
                {
                    org: 'TODO Group',
                    role: 'The global community of OSPO practitioners, hosted at the Linux Foundation.',
                    helps: 'Playbooks, templates, and peer mentors for standing up an NYC OSPO.',
                    url: 'https://todogroup.org/',
                },
                {
                    org: 'Open Forum Europe',
                    role: 'Policy think tank on open technologies; among the sixteen endorsers of the UN Principles.',
                    helps: 'Policy language and precedent from European open source legislation.',
                    url: 'https://openforumeurope.org/',
                },
                {
                    org: 'Sovereign Tech Agency',
                    role: 'Germany’s public investor in open source maintenance — and an endorser of the UN Principles.',
                    helps: 'The blueprint for public funding of critical open infrastructure.',
                    url: 'https://www.sovereign.tech/',
                },
            ],
        },
        {
            title: 'New York City',
            items: [
                {
                    org: 'NYC Office of Technology & Innovation (OTI)',
                    role: 'The city’s central technology agency — the campaign’s primary addressee and the natural home of an NYC OSPO.',
                    helps: 'The decision. Endorsing the Principles starts here.',
                    url: 'https://www.nyc.gov/content/oti/pages/',
                },
                {
                    org: 'Mayor’s Office for International Affairs',
                    role: 'NYC’s bridge to the UN and diplomatic community; ran the first-ever Voluntary Local Review.',
                    helps: 'The city-to-UN channel — the office that makes an endorsement diplomatic reality.',
                    url: 'https://www.nyc.gov/site/international/index.page',
                },
                {
                    org: 'WeGovNYC / Sarapis',
                    role: 'The civic tech organizers behind this campaign.',
                    helps: 'Briefings, introductions, and the open letter itself — we’re the local convener.',
                    url: '/unnyc/campaign',
                    internal: true,
                },
            ],
        },
    ],
};
