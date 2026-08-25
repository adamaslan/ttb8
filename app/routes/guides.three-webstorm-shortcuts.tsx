import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import webstorm1 from "/webstorm1.jpeg";

const TITLE = "The Three WebStorm Shortcuts to Rule Them All";
const SLUG = "three-webstorm-shortcuts";
const CATEGORY = "Dev Tools";
const AUTHOR = "Adam Timur Aslan";
const READ_TIME = "2 min read";
const DIFFICULTY = "Beginner";
const LAST_VERIFIED = "2026-08-25";

const steps = [
  { id: "step-1", label: "Speed Search" },
  { id: "step-2", label: "Recent Files" },
  { id: "step-3", label: "Action Search" },
];

const prerequisites = ["WebStorm (or any JetBrains IDE) installed"];

export const meta: MetaFunction = () => [
  { title: TITLE },
  { property: "og:title", content: TITLE },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function ThreeWebstormShortcutsGuide() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-black border-b border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <span className="text-xs font-mono text-cyan-400">▸ guides / {SLUG}</span>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <span className="rounded-full bg-cyan-600 px-3 py-1 text-sm font-bold text-white">GUIDE</span>
          <h1 className="text-3xl font-bold text-cyan-400 mt-3">{TITLE}</h1>
          <pre className="text-xs font-mono text-gray-500 mt-3 whitespace-pre-wrap">{`⏱ ${READ_TIME}  ·  ⚑ ${DIFFICULTY}  ·  ✓ ${prerequisites.length} prerequisite`}</pre>
        </div>

        <nav className="sticky top-4 z-10 bg-gray-950/95 backdrop-blur border border-gray-800 rounded-xl p-4 mb-8">
          <div className="text-xs font-semibold text-cyan-500 uppercase tracking-wide mb-2">On this page</div>
          <ol className="space-y-1">
            {steps.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400">
                  <span className="text-xs font-mono text-cyan-500 w-4">{i + 1}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <main className="space-y-8">
          <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
            <img
              className="w-full rounded-xl border border-gray-800"
              src={webstorm1}
              alt="WebStorm logo"
            />
            <p className="text-gray-300 leading-relaxed">
              WebStorm is a smart IDE for web development. Keyboard shortcuts can
              help you write, debug, and test your code faster. Here are three
              shortcuts that you should know.
            </p>
          </section>

          <section id="step-1" className="scroll-mt-24 bg-gray-950 rounded-xl border border-gray-800 p-6">
            <h2 className="text-xs font-semibold text-cyan-500 uppercase tracking-wide mb-4">Step 1 — Speed Search</h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Press Shift + Up and then type the name of any file you want to find
              in WebStorm. You will see a list of suggestions. Press Enter to
              select an item. This also gets you to the navigation bar so you can clear up the file tree for a more zen like experience.
            </p>
          </section>

          <section id="step-2" className="scroll-mt-24 bg-gray-950 rounded-xl border border-gray-800 p-6">
            <h2 className="text-xs font-semibold text-cyan-500 uppercase tracking-wide mb-4">Step 2 — Recent Files</h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Press Command + E and you will see a list of recent files that you
              have accessed. Press Enter to select a file.
            </p>
          </section>

          <section id="step-3" className="scroll-mt-24 bg-gray-950 rounded-xl border border-gray-800 p-6">
            <h2 className="text-xs font-semibold text-cyan-500 uppercase tracking-wide mb-4">Step 3 — Action Search</h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Press Command + Shift + A and type the name of the action you want
              to execute. You will see a list of suggestions. Press Enter to
              execute an action.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm mt-4">
              Use these new powers carefully ;)
            </p>
          </section>

          <section className="text-sm text-gray-600">
            <span>For more shortcuts check this article out </span>
            <a
              href="https://blog.jetbrains.com/webstorm/2020/07/navigation-features-that-will-make-you-faster/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:underline"
            >
              here
            </a>
            .
          </section>

          <p className="text-center">
            <Link to="/" className="text-cyan-400 hover:underline text-sm">← Back to Home</Link>
          </p>
        </main>
      </div>

      <footer className="bg-black border-t border-gray-800 py-4 text-center text-xs text-gray-600">
        {CATEGORY} · {SLUG} · Last verified: {LAST_VERIFIED} · TastyTechBytes
      </footer>
    </div>
  );
}
