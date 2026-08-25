import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/js-burden.jpeg";

const TITLE = "VueJS as the Most Indie Yet Established Javascript Framework";
const DESC = "Explore why Vue.js stands out as an independent yet established JavaScript framework with vibrant ecosystem and excellent community support.";
const SLUG = "vuejs-independant-javascript-framework";
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
                        The progressive JavaScript framework with community-driven development.
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
                        The Framework Landscape
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        While there are newcomers that got that hot cheese (Astro), and lesser known yet exciting seeming frameworks (SolidJS), the uber DIY (Eleventy), the one time indie-darlings turned (Svelte)
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Vue's Philosophy
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        There is a sweet ring to Vue's branding: "The ProgressiveJavaScript Framework
                        An approachable, performant and versatile framework for building web user interfaces."
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Nuxt 3 Evolution
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        In other exciting Vuejs related news NUXT the go to framework of vue recently released its third version and seems like a great open source project to contribute to! NUXT 3 brings many new features and improvements, such as serverless rendering, auto-imported components, file-based routing and more.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        The Ecosystem
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Vue is definitely more indie with no Facebook backing, but it is still very established. Vuejs also has a vibrant ecosystem of libraries and tools that make it easy to create rich and interactive web applications. For example, pinia is a state management library that helps you manage the data flow in your app with a simple and intuitive API, Vue Router is a routing library that lets you navigate between different views, and Vite is a fast and modern build tool that supports hot module replacement and code splitting.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Documentation and Community
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Another reason to love Vuejs is its excellent documentation and community support. The official docs are clear, comprehensive and full of examples.
                         You can also find many tutorials, courses, books and podcasts on Vuejs online. The Vuejs community is friendly, welcoming and active on various platforms such as Discord, Reddit, Stack Overflow and Twitter. You can always find help and inspiration from other Vuejs developers.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        State Management with Pinia
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        If you are looking for an alternative to Vuex, you might want to check out
                        <a href='https://pinia.esm.dev/' className='text-green-400 hover:underline'> Pinia</a>, a state management library that works well with Vuejs.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        Resources
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        For the vue docs, you can visit
                        <a href='https://vuejs.org/' className='text-green-400 hover:underline'> here</a>.
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

export default Article4;
