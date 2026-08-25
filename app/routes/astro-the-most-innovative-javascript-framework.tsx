import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/boxchicken2.jpeg";

const TITLE = "Astro.js as the Most Innovative and Modern Javascript Framework";
const DESC = "Discover why Astro stands out as the most groundbreaking JavaScript framework with its innovative approach to performance and component flexibility.";
const SLUG = "astro-the-most-innovative-javascript-framework";
const CATEGORY = "JavaScript";
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

const Article5 = () => {
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
                        The framework revolutionizing web performance with static HTML and partial hydration.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
                <img
                    className="w-full rounded-xl border border-gray-800"
                    src={hero}
                    alt="Chicken Box Space Ship"
                />

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        The Framework Landscape
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        While there are established frameworks that have a loyal fanbase
                        (React, Vue, Angular), and promising newcomers that offer a fresh
                        perspective (Svelte, SolidJS), the most exciting and groundbreaking
                        framework in the Javascript ecosystem is Astro.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Static HTML at Build Time
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Astro is a new kind of framework that lets you build faster websites
                        with your favorite UI components. Astro renders your pages to static
                        HTML at build time for optimal performance. No JavaScript runtime
                        required. You can use any UI component library (React, Vue, Svelte
                        and more) or write your own components using HTML and CSS. Astro
                        makes it easy to build modern websites without sacrificing
                        performance or user experience.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Astro Islands Architecture
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Astro islands are interactive UI components that render in isolation on a static HTML page. They use partial hydration, a technique that Astro handles automatically, to enable multiple islands with different functionalities on the same page. Astro uses zero client-side JavaScript by default because it renders every component to HTML ahead of time and then strips out all the JavaScript Astro islands are like mini-apps that can coexist harmoniously in a sea of HTML, bringing life and interactivity to your web pages.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Resources
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        For the Astro docs, you can visit
                        <a href="https://astro.build/" className="text-green-400 hover:underline">
                            here
                        </a>
                        .
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

export default Article5;
