import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/analytics1.jpeg";

const TITLE = "The Easy Way to Verify Domain Ownership with Google";
const DESC = "Learn how to verify your domain ownership with Google Publisher Center using HTML tags, whether you're building with HTML, React, or Next.js.";
const SLUG = "easy-domain-verification-with-google";
const CATEGORY = "Dev Tools";
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
    ];
};

const Article2 = () => {
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
                        Simplify your domain verification process across any framework.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
                <img
                    className="w-full rounded-xl border border-gray-800"
                    src={hero}
                    alt="computer and graphs"
                />

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        The Domain Problem
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Oh domains! The web of developer sadness they can indeed weave. Luckily, whether your building your website with just HTML or in React with Nextjs, there is an easy solution for you.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Google Publisher Center
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        If you have already found the <a href="https://publishercenter.google.com/" className="text-green-400 hover:underline">Google's Publisher Center</a>, then you are half of the way there. Next, comes the challenging part, Domain Verification.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        The Solution: HTML Tags
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        So what is the easy solution already? HTML Tags. Yes, just put the verification tags in your &lt;Head&gt; section on the main page of your site.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Next.js Specific Guidance
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        This can be a bit tricky with something like Nextjs as their is no index.html. Instead, its just the index.js &lt;Head&gt; section that u must import like so:
                        import Head from "next/head";
                        Hope this helps!
                        For more info check <a href="https://support.google.com/webmasters/answer/9008080#domain_name_verification&zippy=%2Cdomain-name-provider%2Chtml-file-upload" className="text-green-400 hover:underline">Google's docs</a>
                    </p>
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

export default Article2;
