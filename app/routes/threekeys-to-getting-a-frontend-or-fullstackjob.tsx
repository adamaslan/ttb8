import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/studio.jpg";

const TITLE = "The 3 Keys To Getting Your Dream Frontend or Full Stack Engineer Job";
const DESC = "Learn the L.A.B. framework - Learn, Apply, Build - to land your dream role in frontend or full-stack development.";
const SLUG = "threekeys-to-getting-a-frontend-or-fullstackjob";
const CATEGORY = "Career";
const AUTHOR = "Adam Timur Aslan";

export const meta: MetaFunction = () => {
    return [
        { title: TITLE },
        { property: "og:image", content: hero },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESC },
        { property: "og:type", content: "article" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: TITLE },
        { property: "twitter:description", content: DESC },
        { property: "twitter:image", content: hero },
    ];
};

const Article4 = () => {
    return (
        <div className="min-h-screen bg-black text-gray-100">
            <header className="bg-black border-b border-gray-800 py-6">
                <div className="container mx-auto px-4 max-w-3xl">
                    <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
                        {CATEGORY}
                    </span>
                    <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        by <span className="text-gray-300">{AUTHOR}</span>
                    </p>
                    <p className="mt-4 flex items-start gap-2 font-mono text-xs sm:text-sm text-green-400/90 tracking-tight">
                        <span className="text-green-500 font-bold shrink-0">▸</span>
                        Master the L.A.B. framework to accelerate your software engineering career.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
                <img
                    className="w-full rounded-xl border border-gray-800"
                    src={hero}
                    alt="Studio by Warren Hansen"
                />

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        The Path to Success
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        If you are looking for a career in tech, focusing on developing your
                        coding skills in front-end or full-stack development is essential.
                        You can increase your chances of landing software engineering jobs
                        by following the three keys of L.A.B. - Learn, Apply, and Build.
                        Online learning and peer programming are excellent ways to improve
                        your coding skills and stay updated with the latest trends in the
                        industry. Creating practical projects and building a personal
                        portfolio can help you gain experience and showcase your skills to
                        potential employers.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Job Search and Interview Prep
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Utilizing job search strategies such as We Work
                        Remotely, JSremote, and LinkedIn can help you find remote work
                        opportunities. Preparing for coding interviews by creating features
                        that may be asked is a smart way to showcase your practical
                        knowledge. Professional development and continuous learning are
                        crucial for staying updated with the latest trends in the industry.
                        By following these strategies and staying persistent, you can
                        transform your passion for coding into a successful career in
                        software engineering.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        The L.A.B. Framework
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm mb-4">
                        The three keys to becoming a successful Software Engineer are:
                    </p>
                    <ol className="text-gray-300 leading-relaxed text-sm space-y-3 list-decimal list-inside">
                        <li>
                            <span className="font-semibold">Learn</span> - You can do this with online classes, peer programming,
                            chatGPT, or just plain old college.
                        </li>
                        <li>
                            <span className="font-semibold">Apply</span> - How can you get a job if you don't apply for it.
                            Wellfound,{" "}
                            <a href="https://www.weworkremotely.com" className="text-green-400 hover:underline">
                                We Work Remotely
                            </a>
                            , JSremote, and good ol Linkedin are all great for this.
                        </li>
                        <li>
                            <span className="font-semibold">Build</span> - It's hard to gain any experience without building
                            something. What you build can also be put on a personal website or
                            portfolio as well so its a win win to build build build. Start
                            small and scale up. Creating features that might be asked in a
                            coding interview is always a smart idea.
                        </li>
                    </ol>
                </section>

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

export default Article4;
