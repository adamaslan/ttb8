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
const DATE = "June 2026";
const SLUG = "lore-open-source-version-control-scalability";
const LORE_URL = "https://lore.org";
const HN_URL = "https://news.ycombinator.com/item?id=48571081";

export const meta: MetaFunction = () => {
  return [
    { title: TITLE },
    {
      name: "description",
      content:
        "Epic Games released Lore, a next-generation open source version control system built to handle massive codebases and large binary assets at the same time.",
    },
    { property: "og:title", content: TITLE },
    {
      property: "og:description",
      content:
        "Lore is a next-gen open source VCS from Epic Games, designed for teams that combine code with giant binary assets like game art, audio, and video.",
    },
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
    <div className="mx-auto max-w-3xl px-4 py-10 font-mono text-gray-900">
      <div className="mb-2 inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-bold text-white">
        Software
      </div>

      <pre className="my-6 overflow-x-auto rounded bg-gray-900 p-4 text-xs text-green-400">
        {ASCII_ART}
      </pre>

      <h1 className="mb-2 text-3xl font-bold leading-tight">{TITLE}</h1>
      <p className="mb-8 text-sm text-gray-500">{DATE}</p>

      <div className="space-y-5 leading-relaxed">
        {bodyParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-10 space-y-2 border-t pt-6 text-sm text-gray-500">
        <p>
          Source:{" "}
          <a
            href={LORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            lore.org
          </a>
        </p>
        <p>
          Discussion:{" "}
          <a
            href={HN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Hacker News thread (848+ points)
          </a>
        </p>
      </div>

      <div className="mt-10">
        <Link to="/" className="text-sm text-blue-600 underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
