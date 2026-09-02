// Suggested URL: /dextego-10-things-ai-sales-coaching

import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/dextego1.png"; // This file is in your public directory.

const TITLE = "10 Things You Need to Know About Dextego: The Future of AI Sales Coaching";
const DESC = "From roleplay and objection handling to a private AI coach that tracks coachability, discover how Dextego is transforming sales training with agentic AI.";
const SLUG = "dextego-10-things-ai-sales-coaching";
const CATEGORY = "AI News";
// const DATE = "May 2026";
const AUTHOR = "Adam Timur Aslan";

export const meta: MetaFunction = () => {
    return [
        { title: TITLE },
        { name: "description", content: DESC },
        { property: "og:image", content: hero },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESC },
        { property: "og:type", content: "article" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: TITLE },
        { property: "twitter:description", content: DESC },
        { property: "twitter:image", content: hero },
        { property: "linkedin:title", content: TITLE },
        { property: "linkedin:description", content: DESC },
        { property: "linkedin:image", content: hero },
        { property: "keywords", content: "AI sales coach, sales training, objection handling, sales roleplay, Dextego, agentic AI, sales coaching" },
    ];
};

type Item = {
    n: string;
    heading: string;
    body: React.ReactNode;
};

const ITEMS: Item[] = [
    {
        n: "01",
        heading: 'AI-Driven "Disc vs. Ocean" Comparative Analysis',
        body: (
            <>
                While traditional sales training relies on static DISC profiling to categorize
                personalities, Dextego goes much deeper. It introduces an "Ocean" of behavioral data
                points. Instead of just telling you that a buyer is "Dominant" or "Conscientious,"
                Dextego's AI analyzes thousands of micro-expressions, tonal shifts, and language
                patterns in real-time. This ocean of data provides a far more accurate, fluid
                understanding of the prospect, allowing the AI coach to adapt its strategy
                dynamically, just as a top-tier human coach would.
            </>
        ),
    },
    {
        n: "02",
        heading: 'The "Help Seller" Mentality',
        body: (
            <>
                Dextego is engineered to move sellers away from the "Always Be Closing" mindset to the
                "Always Be Helping" philosophy. The platform's AI evaluates whether your responses are
                consultative or transactional. By analyzing the conversation, it provides feedback on
                how to rephrase questions to uncover genuine pain points rather than push a product.
                This ensures that the seller builds trust and credibility, leading to longer-lasting
                client relationships and higher win rates.
            </>
        ),
    },
    {
        n: "03",
        heading: "Infinite, Adaptive Role-Play",
        body: (
            <>
                Traditional role-play is often awkward, limited, and fails to prepare sellers for the
                irrationality of real buyers. Dextego solves this with adaptive AI agents that can play
                any persona—from a skeptical CTO to a budget-conscious procurement officer. The AI
                doesn't just read a script; it reacts to you. If you stumble, it pushes harder. If you
                handle an objection well, it pivots to a new challenge. This provides a safe, private
                environment to fail, learn, and perfect your pitch.
            </>
        ),
    },
    {
        n: "04",
        heading: "Real-Time Dos and Don'ts Guidance",
        body: (
            <>
                Just like a coach whispering in your ear, Dextego provides real-time "Dos and Don'ts"
                during a practice call. The AI might suggest: "Do ask an open-ended question about their
                current workflow now" or "Don't mention pricing until they've agreed on the value."
                This just-in-time feedback mechanism helps sellers build muscle memory for the correct
                behaviors, bridging the gap between knowing what to do and actually doing it.
            </>
        ),
    },
    {
        n: "05",
        heading: "Multi-Modal Interaction (Voice or Text)",
        body: (
            <>
                Dextego understands that practice needs to be accessible. Users can engage with their AI
                coach via voice (simulating a real phone call) or text (simulating email or chat). The
                voice component is particularly powerful, as it analyzes not just what you say, but how
                you say it—including pacing, filler words (like "um" and "uh"), and confidence levels.
                This allows for a holistic training experience that prepares you for any communication
                channel.
            </>
        ),
    },
    {
        n: "06",
        heading: 'The "How Did You?" Self-Reflection Loop',
        body: (
            <>
                Learning is most effective when it is active. After a practice session, Dextego prompts
                the user with "How did you feel you handled that objection?" This encourages
                self-reflection, a critical component of adult learning. By contrasting the user's
                self-assessment with the AI's data-driven analysis (like the Score Card), the platform
                highlights blind spots—areas where the seller thought they did well but actually missed
                the mark.
            </>
        ),
    },
    {
        n: "07",
        heading: "Seamless Script Import",
        body: (
            <>
                Getting started with Dextego is frictionless. Sellers can import their existing sales
                scripts, battle cards, and product documentation directly into the platform. The AI
                ingests this data within seconds and builds a custom coaching model around it. This
                ensures that the roleplay and feedback are aligned with your specific product,
                messaging, and go-to-market strategy, rather than generic sales theory.
            </>
        ),
    },
    {
        n: "08",
        heading: "Granular Scorecards for Actionable Insight",
        body: (
            <>
                Forget ambiguous star ratings. Dextego provides a comprehensive Score Card that breaks
                down performance across multiple dimensions, including: Value Proposition, Objection
                Handling, Active Listening, Persuasion, and Closing Technique. It highlights your
                specific Strengths (the skills you should double down on) and Areas of Improvement (the
                skills that need immediate practice). This granularity allows sellers to focus their
                energy where it's needed most, ensuring continuous growth.
            </>
        ),
    },
    {
        n: "09",
        heading: '"Finn" Learning & Your Private AI Coach',
        body: (
            <>
                At the heart of Dextego is "Finn," your dedicated Private AI Coach. Unlike generic
                chatbots, Finn tracks your long-term learning and development. It remembers the
                objections you struggled with yesterday and integrates that knowledge into today's
                roleplay. Finn acts as a true mentor, adjusting its difficulty level as you improve,
                ensuring you are always in the Zone of Proximal Development—learning at the perfect pace
                to maximize retention and mastery.
            </>
        ),
    },
    {
        n: "10",
        heading: "Core Metrics: Coachability, Gravitas & Persuasion",
        body: (
            <>
                Dextego tracks the intangible qualities that separate good sellers from great ones. It
                measures <strong className="text-gray-100">Coachability</strong> (how quickly you
                integrate feedback), <strong className="text-gray-100">Gravitas</strong> (your ability
                to project confidence and authority), and{" "}
                <strong className="text-gray-100">Persuasion</strong> (your effectiveness in changing
                the prospect's mindset). By quantifying these traits and providing specific exercises to
                improve them, Dextego ensures that sellers don't just know the product better—they
                become better communicators and leaders.
            </>
        ),
    },
];

const DextegoArticle = () => {
    return (
        <div className="min-h-screen bg-black text-gray-100">
            <header className="bg-black border-b border-gray-800 py-6">
                <div className="container mx-auto px-4 max-w-3xl">
                    <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
                        {CATEGORY}
                    </span>
                    <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        {/* {DATE}  */}
                        by <span className="text-gray-300">{AUTHOR}</span>
                    </p>
                    <p className="mt-4 flex items-start gap-2 font-mono text-xs sm:text-sm text-green-400/90 tracking-tight">
                        <span className="text-green-500 font-bold shrink-0">▸</span>
                        Unlocking the power of agentic AI to build better, more persuasive sellers.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
                <img
                    className="w-full rounded-xl border border-gray-800"
                    src={hero}
                    alt="Dextego AI sales coaching"
                />

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Introduction
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        The landscape of sales training is changing rapidly. At the forefront of this
                        revolution is{" "}
                        <a
                            href="https://dextego.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:underline"
                        >
                            Dextego
                        </a>
                        , a platform that uses agentic AI to create a private, hyper-personalized
                        coaching experience. Whether you are a veteran sales executive or a newcomer to
                        the field, understanding what Dextego offers is key to staying ahead. Based on
                        recent deep-dives into the platform, here are the 10 most important things you
                        need to know.
                    </p>
                </section>

                {ITEMS.map((item) => (
                    <section
                        key={item.n}
                        className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4"
                    >
                        <div className="flex items-baseline gap-3">
                            <span className="font-mono text-green-400 text-sm font-bold shrink-0">
                                {item.n}
                            </span>
                            <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide">
                                {item.heading}
                            </h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">{item.body}</p>
                    </section>
                ))}

                <section className="bg-gray-950 rounded-xl border border-gray-700 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        The Verdict
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Dextego represents a paradigm shift in how we prepare sales teams. By combining
                        infinite role-play, real-time coaching, and deep analytics, it offers a scalable
                        solution to the age-old problem of sales training: making practice feel real and
                        effective. Whether you are looking to refine your objection handling or build
                        more gravitas, Dextego provides the tools to take your sales career—or your
                        sales organization—to the next level. Visit{" "}
                        <a
                            href="https://dextego.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:underline"
                        >
                            dextego.com/
                        </a>{" "}
                        to see the AI coach in action.
                    </p>
                </section>

                {/* <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        About the Author
                    </h2>
                    <div className="flex justify-between items-start gap-4">
                        <div>
                            <div className="font-semibold text-gray-100 text-sm">{AUTHOR}</div>
                            <div className="text-xs text-gray-500 mt-0.5">
                                Writes about AI tooling, developer workflows, and the tech worth paying
                                attention to at TastyTechBytes.
                            </div>
                        </div>
                        <span className="text-xs bg-gray-800 text-gray-300 rounded-full px-2 py-1 shrink-0">
                            {DATE}
                        </span>
                    </div>
                </section> */}

                <p className="text-center">
                    <Link to="/" className="text-green-400 hover:underline text-sm">
                        ← Back to Home
                    </Link>
                </p>
            </main>

            <footer className="bg-black border-t border-gray-800 py-4 text-center text-xs text-gray-600">
                {CATEGORY} · {SLUG} · TastyTechBytes
            </footer>
        </div>
    );
};

export default DextegoArticle;
