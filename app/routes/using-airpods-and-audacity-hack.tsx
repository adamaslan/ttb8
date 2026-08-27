import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/airpods.jpeg";

const TITLE = "AirPods Audacity: How to make AirPods(or any other bluetooth audio) work with Audacity 2023";
const DESC = "Learn the simple steps to connect your AirPods or other Bluetooth headphones to Audacity for seamless audio recording and editing.";
const SLUG = "using-airpods-and-audacity-hack";
const CATEGORY = "Dev Tools";
const AUTHOR = "Adam Timur Aslan";

export const meta: MetaFunction = () => {
    return [
        { title: TITLE },
        { property: "og:image", content: `https://tastytechbytes.com${hero}` },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESC },
        { property: "og:type", content: "article" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: TITLE },
        { property: "twitter:description", content: DESC },
        { property: "twitter:image", content: `https://tastytechbytes.com${hero}` },
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
                        Connect your Bluetooth audio devices to Audacity with these simple steps.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
                <img
                    className="w-full rounded-xl border border-gray-800"
                    src={hero}
                    alt="airpods"
                />

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        The Problem
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        Often times AirPods (or any other bluetooth headphones) and Audacity don't play well together.
                        Well luckily, as of 2023, there is a way to sync up audacity and airports.
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        How to Connect
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        To do it:<br />
                        -have your AirPods connected to you computer<br />
                        -click the transport tab<br />
                        -select "rescan audio devices"<br />
                        -click on audio setup<br />
                        -click playback device<br />
                        -select your AirPods (or other bluetooth auto devices)<br />
                    </p>
                </section>

                <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
                    <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                        More Resources
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        For more Audacity and podcasts, you can visit <a href='https://www.lifewire.com/best-podcast-recording-software-2722085' className='text-green-400 hover:underline'>here</a>.
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
