import React from 'react';
import { Link } from 'react-router';
import { lazy } from 'react';
import type { MetaFunction } from 'react-router';

const MovingObject = lazy(() => import('../components/chicken'));
const MovingObject1 = lazy(() => import('../components/Cloud'));

const hero = "/threejs-and-web3.jpg";

const TITLE = "ThreeJS and Web3: Exploring the Intersection";
const DESC = "Is ThreeJS part of Web3? Exploring the relationship between 3D rendering and decentralized technologies.";
const SLUG = "threejs-and-web3";
const CATEGORY = "Web3";
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
    { property: "linkedin:title", content: TITLE },
    { property: "linkedin:description", content: DESC },
    { property: "linkedin:image", content: hero },
    { property: "keywords", content: "ThreeJS, Web3, 3D rendering, decentralized technology" },
  ];
};

const ThreeJSWeb3Article = () => {
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
            Exploring the relationship between 3D rendering and decentralized technologies.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Introduction
          </h2>
          <MovingObject />
          <p className="text-gray-300 leading-relaxed text-sm">
            ThreeJS has been around a while. So can it be considered part of Web3?
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Understanding Web3
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Maybe its better to think of what the baseline of web3 is. Maybe its like a cusp. Sort of like being a millenial and GenZ cusp kid.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            ThreeJS and Web3
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            For the docs on ThreeJS, you can visit
            <a
              href="https://threejs.org/"
              className="text-green-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}here
            </a>.
          </p>
          <MovingObject1 />
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Resources
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            For some solid advice on film sound and sound mixers in NYC, you can visit
            <a
              href="https://www.nycsoundguy.com"
              className="text-green-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}NYC Sound Guy here
            </a>.
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

export default ThreeJSWeb3Article;
