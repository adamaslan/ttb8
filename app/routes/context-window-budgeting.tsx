import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Context Window Budgeting: What Actually Deserves Tokens";
const DESCRIPTION = "A big context window is a budget, not a landfill. What you exclude decides quality as much as what you include.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ CONTEXT BUDGET :: ATTENTION IS FINITE                ║
║                                                      ║
║   [system][task][evidence][history tail][question]   ║
║     fixed   fixed  ranked     trimmed      live      ║
║                                                      ║
║   dropped: raw dumps, stale turns, duplicates        ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function ContextWindowBudgetingArticle() {
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
            AI Tips / Tutorials
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">More context is not free</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Long context windows invite the lazy architecture: dump everything in and let the model sort it out. The costs are real and multiply: every input token is billed on every call, latency grows with prompt length, and accuracy on the relevant detail degrades as irrelevant mass grows. The needle-in-haystack result that mattered is the one in your document, at your position, under your distractors."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Treat the window like a memory hierarchy. The task and the output contract get permanent residency. Evidence earns admission by retrieval ranking. Conversation history gets a trimmed tail plus a summary. Everything else stays out."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">An allocation that works</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"System and task instructions: compact, stable, cache-friendly. Hundreds of tokens, not thousands."}</li>
            <li>{"Evidence: retrieved, deduplicated, ranked. Each passage included because it scored, with its source attached."}</li>
            <li>{"History: last few turns verbatim, older turns as a running summary refreshed periodically."}</li>
            <li>{"Reserve: a fixed margin for the output so completions never truncate against the window edge."}</li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-300">{"Instrument the split. Log token counts per section per request, and review the outliers. A single un-trimmed tool response, a stack trace, a base64 blob, routinely consumes more of the window than the entire conversation."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Exclusion is a ranking problem</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"What to leave out is decided by scoring, not guilt. Rank candidate passages by relevance, drop near-duplicates, cap per-source contributions so one verbose document cannot crowd out five terse ones, and stop filling when marginal passages stop adding information. The same discipline as a retrieval budget, applied to the prompt."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"When you find yourself needing a bigger window to fit a workload, that is usually a signal to decompose the task: map over chunks, reduce, then answer over the reductions. Decomposition scales; windows do not."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · context-window-budgeting · TastyTechBytes
      </footer>
    </div>
  );
}
