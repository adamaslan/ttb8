import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/graph4.jpeg";

const TITLE = "The Art of the Clean Install";
const DESC = "Learn the essential steps for performing a clean install of your Node.js project, from clearing node modules to reinstalling dependencies.";
const SLUG = "the-art-of-the-clean-install";
const CATEGORY = "Dev Tools";
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
        { property: "keywords", content: "Clean Install, Coding, NVM, Tailwind UI, NUXT, Node Modules, Package Lock, Yarn Lock, npm, Web Development" },
    ];
};

const Article7 = () => {
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
                        Master the clean install process for troubleshooting dependencies and environment issues.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
                <img
                    className="w-full rounded-xl border border-gray-800"
                    src={hero}
                    alt="a graph"
                />

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        The Problem
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Coder says "yeh, bruh, did a clean install and it works great…simple is as simple does"

                        Well, that's all fine and good, but then you have to use NVM and Tailwind UI. Not to mention, you want to support the "good guys" and use buggy-ass NUXT. Oy vey.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Understanding Clean Install
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        It's hard to remember what a "clean install" actually is.

                        Well, as one steps out of the dark tunnel of installing  the NUXT framework with Tailwind UI, the idea of a clean install becomes convoluted, murky, strange, etc.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Step-by-Step Instructions
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm mb-4">
                        Thus, it becomes important to take a step back and provide the steps to do a clean install. The steps are:
                    </p>
                    <ol className="text-gray-300 leading-relaxed text-sm space-y-2 list-decimal list-inside">
                        <li>Delete the projects Node Modules</li>
                        <li>
                            Delete package.lock or yarn lock or whatever other lock equivalents{" "}
                            <a href="https://classic.yarnpkg.com/lang/en/docs/yarn-lock/" className="text-green-400 hover:underline">
                                Yarn Lock Docs
                            </a>
                        </li>
                        <li>Then run npm I or whatever package manager equivalents</li>
                        <li>Then try to run project via npm run dev or equivalents</li>
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

export default Article7;
