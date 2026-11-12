// Karamazov Part 19: Alyosha the Peacemaker
// Route for tastytechbytes.com — follows the verified template from
// ttb8 PR #55 (docs/agent-guides/instagram-to-blog-article-template.tsx),
// itself verified against PR #52.
// Article text is verbatim from the supplied article.txt (Drive posts/).
// Prev/next links cover the full 21-part chain (all ship in one PR).
// Nothing in this file is merged or published until Tasty approves the PR.

import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Part 19: Alyosha the Peacemaker";
const DESCRIPTION = "Alyosha is good and nobody can explain why — and alignment, AI's oldest unsolved problem.";

const ASCII_ART = `╔══════════════════════════════════════════════════════════╗
║ KARAMAZOV · PART 19: ALYOSHA THE PEACEMAKER              ║
║                                                          ║
║   alignment                                              ║
╚══════════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function KaramazovPart19AlyoshaThePeacemakerArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Alyosha the Peacemaker</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"And then there is Alyosha, who grows up in the same house with the same temptations and somehow turns toward goodness - not from rules drilled into him; the monks try that with everyone - but from something he seems to carry inside. Everyone in town trusts him with their worst secrets. Nobody can explain him."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Alignment</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"AI researchers face Alyosha's puzzle from the other side: how do you get a system to want the right things? It is called alignment, and the honest summary is that nobody fully knows. You can bolt on rules - we do, and they help - but rules describe behavior, not values. Building a model that shares our values the way Alyosha shares Zosima's remains the field's oldest unsolved problem."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Scene</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Scene: The scene for Part 19: Alyosha the peacemaker - AI-generated concept art from the gallery's portraits."}</p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Source and limits</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The story is fiction; the tech is real, checked against current sources. The pictures are AI-generated concept art from our character gallery, not stills from a real film. Adaptation scenes are invented for this series and are not scenes from the novel itself."}</p>
          <a className="text-sm text-green-400 underline" href="https://www.instagram.com/tastytechbytes/">@tastytechbytes on Instagram</a>
        </section>

        <nav className="flex items-center justify-between gap-4 text-sm">
          <Link to="/karamazov-part-18-ivans-questions" className="text-green-400 hover:underline">← Part 18: Ivan's Questions</Link>
          <Link to="/karamazov-part-20-sofyas-illness" className="text-green-400 hover:underline">Part 20: Sofya's Illness →</Link>
        </nav>
        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Karamazov Series · karamazov-part-19-alyosha-the-peacemaker · TastyTechBytes
      </footer>
    </div>
  );
}
