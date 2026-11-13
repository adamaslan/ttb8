// Karamazov Part 01: The Book
// Route for tastytechbytes.com — follows the verified template from
// ttb8 PR #55 (docs/agent-guides/instagram-to-blog-article-template.tsx),
// itself verified against PR #52.
// Article text is verbatim from the supplied article.txt (Drive posts/).
// Prev/next links cover the full 21-part chain (all ship in one PR).
// Nothing in this file is merged or published until Tasty approves the PR.

import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Part 1: The Book";
const DESCRIPTION = "Dostoevsky's The Brothers Karamazov, retold one scene at a time — Part 1 introduces the book, the family, and a 42-part journey where every scene explains one AI idea.";

const ASCII_ART = `╔══════════════════════════════════════════════════════════╗
║ KARAMAZOV · PART 1: THE BOOK                             ║
║                                                          ║
║   the greatest novel you never finished,                 ║
║   retold one scene at a time                             ║
╚══════════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function KaramazovPart01TheBookArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Book</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The Brothers Karamazov is Dostoevsky's last and biggest novel: a rich, ridiculous father, three sons who want nothing to do with him, and a family fortune nobody can agree on. It has love, faith, murder, and the two women who turn the whole town upside down - and it is regularly called the greatest novel ever written, even though almost nobody you know has finished it."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Series</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"This series is the fun way in. Forty-two installments, each one a scene from the story plus one core AI idea explained through it - what a model is, why it hallucinates, who owns the words it learned from. The story is fiction; the tech is real, checked against current sources. The pictures are AI concept art from our character gallery, not stills from a real film. New parts drop on Instagram - follow "}<a className="text-green-400 underline" href="https://www.instagram.com/tastytechbytes/">@tastytechbytes</a>{" and read the captions, because that is where the story moves."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Scene</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Scene: The wildest night in the book: Dmitri's party at Mokroye - AI-generated concept art from our portrait gallery; a flash-forward outside this run's timeline."}</p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Source and limits</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The story is fiction; the tech is real, checked against current sources. The pictures are AI-generated concept art from our character gallery, not stills from a real film. Adaptation scenes are invented for this series and are not scenes from the novel itself."}</p>
          <a className="text-sm text-green-400 underline" href="https://www.instagram.com/tastytechbytes/">@tastytechbytes on Instagram</a>
        </section>

        <nav className="flex items-center justify-end gap-4 text-sm">
          <Link to="/karamazov-part-02-the-family" className="text-green-400 hover:underline">Part 2: The Family →</Link>
        </nav>
        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Karamazov Series · karamazov-part-01-the-book · TastyTechBytes
      </footer>
    </div>
  );
}
