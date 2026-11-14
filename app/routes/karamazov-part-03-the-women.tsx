// Karamazov Part 03: The Women
// Route for tastytechbytes.com — follows the verified template from
// ttb8 PR #55 (docs/agent-guides/instagram-to-blog-article-template.tsx),
// itself verified against PR #52.
// Article text is verbatim from the supplied article.txt (Drive posts/).
// Test PR (Part 3 only): prev link to Part 2; no next link yet (Part 4 not published).
// Nothing in this file is merged or published until Tasty approves the PR.

import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Part 3: The Women";
const DESCRIPTION = "The women the town cannot stop talking about — and the persuasion act: what happens when AI gets personal.";

const ASCII_ART = `╔══════════════════════════════════════════════════════════╗
║ KARAMAZOV · PART 3: THE WOMEN                            ║
║                                                          ║
║   act ii: the persuasion                                 ║
╚══════════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function KaramazovPart03TheWomenArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Women</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Then there are the women the town cannot stop talking about. Grushenka: broke once, comfortable now, and done being anyone's lesson - both father and son are in love with her, and she plays them better than they play her. Katerina: proud, brilliant, engaged to Dmitri and determined to win even her own humiliation. And Lise - written grown in this adaptation - watching all of it and wanting in. Act II belongs to them."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Act II: The Persuasion</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Act II is the persuasion act: what happens when AI gets personal. Feeds that learn what you cannot look away from, ads that know too much, companions that feel like someone, synthetic faces that look like anyone. The rivalry between Katya and Grushenka - and the famous meeting the whole run builds toward - carries every one of those ideas."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The Scene</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Scene: Grushenka and Katerina, the rivalry at the heart of Act II - AI-generated concept art from the gallery's portraits; both adults."}</p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Source and limits</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The story is fiction; the tech is real, checked against current sources. The pictures are AI-generated concept art from our character gallery, not stills from a real film. Adaptation scenes are invented for this series and are not scenes from the novel itself."}</p>
          <a className="text-sm text-green-400 underline" href="https://www.instagram.com/tastytechbytes/">@tastytechbytes on Instagram</a>
        </section>

        <nav className="flex items-center justify-start gap-4 text-sm">
          <Link to="/karamazov-part-02-the-family" className="text-green-400 hover:underline">← Part 2: The Family</Link>
        </nav>
        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Karamazov Series · karamazov-part-03-the-women · TastyTechBytes
      </footer>
    </div>
  );
}
