// Karamazov Part 02: The Family
// Route for tastytechbytes.com — follows the verified template from
// ttb8 PR #55 (docs/agent-guides/instagram-to-blog-article-template.tsx),
// itself verified against PR #52.
// Article text is verbatim from the supplied article.txt (Drive posts/).
// Test PR (Parts 1-2 only): prev link to Part 1; no next link yet (Part 3 not published).
// Nothing in this file is merged or published until Tasty approves the PR.

import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Part 2: The Family";
const DESCRIPTION = "Meet the Karamazovs — and the machinery act: how AI actually works, from training data to hallucination.";

const ASCII_ART = `╔══════════════════════════════════════════════════════════╗
║ KARAMAZOV · PART 2: THE FAMILY                           ║
║                                                          ║
║   act i: the machinery                                   ║
╚══════════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function KaramazovPart02TheFamilyArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Family</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Meet the family. Fyodor, the father: wealthy, shameless, and proud of it. Dmitri, the eldest: all fists and feelings, convinced his father skimmed his inheritance. Ivan, the middle son: a brilliant cold mind that argues itself into corners. Alyosha, the youngest: a novice monk everyone trusts. And Smerdyakov, the cook, listening from the kitchen. Act I of our retelling belongs to them - the money fight, the two marriages, the legendary parties."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Act I: The Machinery</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Act I is also the machinery act: how AI actually works. Training data, prompts, tokens, guardrails, fine-tuning, hallucination, benchmarks - each one mapped to a scene in the family drama. If you have ever nodded along to AI talk at work while secretly understanding none of it, these are your parts, and the drama starts properly in Part 5 with Katerina's wager."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Scene</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Scene: Meet the Karamazovs: Fyodor presiding, Dmitri arguing, Ivan brooding, Alyosha listening - AI-generated concept art from the gallery's portraits."}</p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Source and limits</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The story is fiction; the tech is real, checked against current sources. The pictures are AI-generated concept art from our character gallery, not stills from a real film. Adaptation scenes are invented for this series and are not scenes from the novel itself."}</p>
          <a className="text-sm text-green-400 underline" href="https://www.instagram.com/tastytechbytes/">@tastytechbytes on Instagram</a>
        </section>

        <nav className="flex items-center justify-start gap-4 text-sm">
          <Link to="/karamazov-part-01-the-book" className="text-green-400 hover:underline">← Part 1: The Book</Link>
        </nav>
        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Karamazov Series · karamazov-part-02-the-family · TastyTechBytes
      </footer>
    </div>
  );
}
