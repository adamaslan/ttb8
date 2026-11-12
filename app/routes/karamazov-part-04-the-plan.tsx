// Karamazov Part 04: The Plan
// Route for tastytechbytes.com — follows the verified template from
// ttb8 PR #55 (docs/agent-guides/instagram-to-blog-article-template.tsx),
// itself verified against PR #52.
// Article text is verbatim from the supplied article.txt (Drive posts/).
// Prev/next links cover the full 21-part chain (all ship in one PR).
// Nothing in this file is merged or published until Tasty approves the PR.

import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Part 4: The Plan";
const DESCRIPTION = "How to read along — every part is a scene, one AI idea, and a caption carrying the story.";

const ASCII_ART = `╔══════════════════════════════════════════════════════════╗
║ KARAMAZOV · PART 4: THE PLAN                             ║
║                                                          ║
║   how to read along                                      ║
╚══════════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function KaramazovPart04ThePlanArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Plan</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Here is how to read along. Every installment is three things: a scene that moves the Karamazov story forward, one AI idea explained through that scene in plain language, and an Instagram caption carrying a beat of the story - so following the captions alone gets you the whole saga. The retelling runs in two acts of our own making, Act I: the family and Act II: the women, which is our structure for the early books, not Dostoevsky's table of contents."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What You Get</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Forty-two parts, one terrible family, and by the end you will actually understand the technology everyone argues about. Nothing here is homework: read the story, steal the explanations, use them at work. Part 5 is where the drama starts - Katerina's wager, and what 'smart' even means for a machine. Follow "}<a className="text-green-400 underline" href="https://www.instagram.com/tastytechbytes/">@tastytechbytes</a>{" so the next one finds you."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Scene</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Scene: Grushenka at her vanity, reading the town's love letters - AI-generated concept art from the gallery's portraits; an invented scene in this adaptation, all adults."}</p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Source and limits</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The story is fiction; the tech is real, checked against current sources. The pictures are AI-generated concept art from our character gallery, not stills from a real film. Adaptation scenes are invented for this series and are not scenes from the novel itself."}</p>
          <a className="text-sm text-green-400 underline" href="https://www.instagram.com/tastytechbytes/">@tastytechbytes on Instagram</a>
        </section>

        <nav className="flex items-center justify-between gap-4 text-sm">
          <Link to="/karamazov-part-03-the-women" className="text-green-400 hover:underline">← Part 3: The Women</Link>
          <Link to="/karamazov-part-05-katerinas-wager" className="text-green-400 hover:underline">Part 5: Katerina's Wager →</Link>
        </nav>
        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Karamazov Series · karamazov-part-04-the-plan · TastyTechBytes
      </footer>
    </div>
  );
}
