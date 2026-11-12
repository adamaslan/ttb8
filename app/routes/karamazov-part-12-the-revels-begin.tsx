// Karamazov Part 12: The Revels Begin
// Route for tastytechbytes.com — follows the verified template from
// ttb8 PR #55 (docs/agent-guides/instagram-to-blog-article-template.tsx),
// itself verified against PR #52.
// Article text is verbatim from the supplied article.txt (Drive posts/).
// Prev/next links cover the full 21-part chain (all ship in one PR).
// Nothing in this file is merged or published until Tasty approves the PR.

import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Part 12: The Revels Begin";
const DESCRIPTION = "Fyodor's house fills with guests, nobody in charge — and AI swarms, hundreds of agents turned loose together.";

const ASCII_ART = `╔══════════════════════════════════════════════════════════╗
║ KARAMAZOV · PART 12: THE REVELS BEGIN                    ║
║                                                          ║
║   ai swarms                                              ║
╚══════════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function KaramazovPart12TheRevelsBeginArticle() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="border-b border-gray-800 bg-black py-6">
        <div className="container mx-auto max-w-3xl px-4">
          <pre className="overflow-x-auto font-mono text-[9px] leading-tight text-green-400 sm:text-xs">
            {ASCII_ART}
          </pre>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl space-y-8 px-4 py-8">
        <div className="space-y-3">
          <span className="rounded-full bg-purple-400 px-3 py-1 text-sm font-bold text-white">
            Karamazov Series
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Revels Begin</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"After Adelaida dies, Fyodor stops pretending. His house fills with guests of every kind - flatterers, gamblers, musicians, women with plans of their own - all talking, plotting, and drinking at once, nobody in charge, each working the room for their own ends. (We will see this scene again, in full, at a famous party much later - a flash-forward, outside this run's timeline.)"}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">AI Swarms</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Now imagine not one AI but hundreds, turned loose together: booking, bidding, negotiating, replying, each pursuing its own goal. That is an AI swarm, and frameworks like Hugging Face's smolagents, CrewAI, and OpenAI's Agents SDK exist to build them. The hard part is not making agents act - it is Fyodor's problem exactly: coordination, and who is responsible for what the room does."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Scene</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Scene: The scene for Part 12: Fyodor's revels in his middle years - AI-generated concept art, an earlier period scene, not the later Mokroye night."}</p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Source and limits</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The story is fiction; the tech is real, checked against current sources. The pictures are AI-generated concept art from our character gallery, not stills from a real film. Adaptation scenes are invented for this series and are not scenes from the novel itself."}</p>
          <a className="text-sm text-green-400 underline" href="https://www.instagram.com/tastytechbytes/">@tastytechbytes on Instagram</a>
        </section>

        <nav className="flex items-center justify-between gap-4 text-sm">
          <Link to="/karamazov-part-11-adelaidas-dowry" className="text-green-400 hover:underline">← Part 11: Adelaida's Dowry</Link>
          <Link to="/karamazov-part-13-raised-by-servants" className="text-green-400 hover:underline">Part 13: Raised by Servants →</Link>
        </nav>
        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Karamazov Series · karamazov-part-12-the-revels-begin · TastyTechBytes
      </footer>
    </div>
  );
}
