import React from 'react';
import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const ASCII_ART = `
╔══════════════════════════════════════════════════════════╗
║   L O R E   V E R S I O N   C O N T R O L               ║
║                                                          ║
║   code ──┐                                               ║
║          ├──► COMMIT ──► BRANCH ──► MERGE                ║
║   art ───┘        │                                      ║
║                   ▼                                      ║
║        10 GB binary  ░░░░░░░░░░░  streamed on demand     ║
║        10 devs       ░░░░░░░░░░░  10,000 devs            ║
║        same speed    ░░░░░░░░░░░  same speed             ║
║                                                          ║
║   Built by Epic Games. Open source. Scales to            ║
║   Fortnite-sized teams and assets.                       ║
╚══════════════════════════════════════════════════════════╝
`;

const TITLE = "Lore – Open Source Version Control Built for Massive Scale";
const DESC = "Epic Games released Lore, a next-generation open source version control system built to handle massive codebases and large binary assets at the same time.";
const DATE = "June 2026";
const SLUG = "lore-open-source-version-control-scalability";
const CATEGORY = "Dev Tools";
const AUTHOR = "Adam Timur Aslan";
const LORE_URL = "https://lore.org";
const HN_URL = "https://news.ycombinator.com/item?id=48571081";

export const meta: MetaFunction = () => {
  return [
    { title: TITLE },
    { name: "description", content: DESC },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESC },
  ];
};

const bodyParagraphs = [
  "Epic Games just open-sourced Lore, a next-generation version control system built to handle the kind of scale that breaks Git: massive codebases, enormous binary assets, and thousands of contributors all working at once.",
  "The key design difference is that Lore treats large binary files as first-class citizens, not awkward add-ons. It uses shared, reusable data and on-demand downloads so a new developer can start working without first pulling down hundreds of gigabytes of game art.",
  "Lore is designed to serve both programmers and artists on the same project — something game studios have struggled with for years, usually by bolting Git LFS, Perforce, or a proprietary system onto each other.",
  "It launched with local mode for quick setup and a scalable server mode for teams. The source is on GitHub under Epic's organization, and the team is active on Discord.",
  "This is one to watch if you work on any project that mixes code with large files — game dev, VFX, ML model checkpoints, or large media assets.",
];

export default function LoreVersionControl() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-black border-b border-gray-800 py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
            {CATEGORY}
          </span>
          <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
          <p className="text-sm text-gray-500 mt-1">
            {DATE} · by <span className="text-gray-300">{AUTHOR}</span>
          </p>
          <p className="mt-4 flex items-start gap-2 font-mono text-xs sm:text-sm text-green-400/90 tracking-tight">
            <span className="text-green-500 font-bold shrink-0">▸</span>
            Next-generation version control from Epic Games, built for massive scale.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <pre className="overflow-x-auto rounded bg-black p-4 text-xs text-green-400 font-mono border border-gray-800">
            {ASCII_ART}
          </pre>
        </section>

        {bodyParagraphs.map((p, i) => (
          <section key={i} className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
            <p className="text-gray-300 leading-relaxed text-sm">{p}</p>
          </section>
        ))}

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">
            Resources
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Source: <a href={LORE_URL} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">lore.org</a>
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            Discussion: <a href={HN_URL} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Hacker News thread (848+ points)</a>
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
}
