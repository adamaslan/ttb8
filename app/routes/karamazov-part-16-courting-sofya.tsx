// Karamazov Part 16: Courting Sofya
// Route for tastytechbytes.com — follows the verified template from
// ttb8 PR #55 (docs/agent-guides/instagram-to-blog-article-template.tsx),
// itself verified against PR #52.
// Article text is verbatim from the supplied article.txt (Drive posts/).
// Prev/next links cover the full 21-part chain (all ship in one PR).
// Nothing in this file is merged or published until Tasty approves the PR.

import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Part 16: Courting Sofya";
const DESCRIPTION = "Fyodor counts on nobody remembering — and context windows, how much a model can hold in mind.";

const ASCII_ART = `╔══════════════════════════════════════════════════════════╗
║ KARAMAZOV · PART 16: COURTING SOFYA                      ║
║                                                          ║
║   context windows                                        ║
╚══════════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function KaramazovPart16CourtingSofyaArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Courting Sofya</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Fyodor courts the general's ward with stories - each visit a fresh performance, each version of his past improved, counting on one thing: that nobody in the room remembers what he said last time. Sofya remembers. Every word. It is part of why she both loves him and cannot stand him."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Context Windows</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"AI has the opposite condition: a context window, the limit on how much of the conversation it can hold in mind at once. Inside the window it remembers everything you said, word for word. Past it, the beginning of the chat simply falls away, and the model will contradict itself with total confidence. Sofya never forgets; a chatbot, left to itself, always does. Know which window you are in."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Scene</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Scene: The scene for Part 16: Fyodor courting Sofya - AI-generated concept art; an adult in this adaptation."}</p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Source and limits</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The story is fiction; the tech is real, checked against current sources. The pictures are AI-generated concept art from our character gallery, not stills from a real film. Adaptation scenes are invented for this series and are not scenes from the novel itself."}</p>
          <a className="text-sm text-green-400 underline" href="https://www.instagram.com/tastytechbytes/">@tastytechbytes on Instagram</a>
        </section>

        <nav className="flex items-center justify-between gap-4 text-sm">
          <Link to="/karamazov-part-15-the-generals-ward" className="text-green-400 hover:underline">← Part 15: The General's Ward</Link>
          <Link to="/karamazov-part-17-a-marriage-of-tempests" className="text-green-400 hover:underline">Part 17: A Marriage of Tempests →</Link>
        </nav>
        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Karamazov Series · karamazov-part-16-courting-sofya · TastyTechBytes
      </footer>
    </div>
  );
}
