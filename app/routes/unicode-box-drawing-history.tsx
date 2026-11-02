import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Box-Drawing Characters: From Code Page 437 to Your Terminal";
const DESCRIPTION = "The \u2554\u2550\u2550\u2557 characters in every CLI dashboard descend from a 1981 IBM PC character set designed to draw interfaces without graphics hardware.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ BOX DRAWING :: GRAPHICS BEFORE GRAPHICS              ║
║                                                      ║
║   ┌─────┐  1981: text mode UI                        ║
║   │ UI  │  1991: Unicode keeps the set               ║
║   └─────┘  now: your dev tools still use it          ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function UnicodeBoxDrawingHistoryArticle() {
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
          <span className="rounded-full bg-green-400 px-3 py-1 text-sm font-bold text-white">
            Code World - Random
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Text mode was the whole screen</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The 1981 IBM PC's text mode was a grid of character cells, fast and memory-cheap, with no pixels to draw on directly. Code page 437 shipped with a toolkit for faking graphics in that grid: single and double box lines, corners, tees, shading blocks, and a handful of glyphs like arrows and card suits. Entire applications, editors, installers, games, built their interfaces out of them."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The double-line style you still see in installers and retro-styled tools is a direct quote from that era. It read as technical and solid in 1985, and it still does, which is why the aesthetic survives on purpose now."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The encoding cliff</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Code pages were mutually incompatible: bytes that drew a box corner on a US machine printed accented letters elsewhere, and mangled boxes were the visual signature of a misconfigured system for decades. Unicode absorbed the box-drawing and block-element sets wholesale in 1991, giving the glyphs stable identities, but the transition took years and a generation of corrupted READMEs."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"UTF-8 won, and the characters became boringly portable: the same \u2550 renders in your terminal, your editor, and your phone. Boring portability is the highest compliment an encoding can earn."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Why your tools still use them</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"CLI design rediscovered what DOS knew: a bordered panel, a tree of \u251c\u2500 and \u2514\u2500, and a \u2593\u2593\u2593\u2591 progress bar communicate structure faster than prose and work everywhere a monospaced font does. Modern TUI libraries are code page 437 with better color."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The lineage is the charm: when a deploy tool draws a clean box around its summary, it is participating in a forty-year design tradition that started with drawing windows one character at a time."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Random · unicode-box-drawing-history · TastyTechBytes
      </footer>
    </div>
  );
}
