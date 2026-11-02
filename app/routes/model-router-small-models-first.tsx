import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "The Model Router Pattern: Send Easy Queries to Small Models";
const DESCRIPTION = "Most traffic is easy. Routing easy queries to cheap models and hard ones to strong models cuts cost without touching the answers users complain about.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ ROUTER :: PAY FRONTIER PRICES ONLY FOR HARD QUERIES  ║
║                                                      ║
║   query ──► classifier ──┬─► small model  (80%)      ║
║                          └─► frontier     (20%)      ║
║                                                      ║
║   fallback: low confidence ──► escalate              ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function ModelRouterSmallModelsFirstArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The economics of mixed traffic</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Profile a real assistant workload and the difficulty distribution is lopsided: lookups, rewrites, simple Q&A dominate; genuinely hard reasoning is a minority. Paying frontier prices for the whole distribution is a tax on not measuring it. A router sends each query to the cheapest model expected to handle it, and the savings compound because the easy majority is also the high-volume majority."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The router itself can be as simple as heuristics (length, keywords, task type from the UI) or a small classifier trained on your logged traffic. Start heuristic. You will learn more from the routing logs than from a clever classifier on day one."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Escalation is the safety valve</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Misrouting downward, sending a hard query to a weak model, is the failure that users notice. Guard against it with escalation signals: low-confidence structured output, a failed validation, a user re-ask, or an explicit reviewer flag can all trigger a retry on the stronger model. Escalation converts a quality regression into a cost spike, and cost spikes are much easier to live with."}</p>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`route = classify(query)                    # cheap
if route == EASY:
    answer = small_model(query)
    if not validator.ok(answer):             # failed check
        answer = frontier_model(query)       # escalate
else:
    answer = frontier_model(query)`}</pre>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Measure per route, not on average</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Track quality and cost per route: small-model answers, frontier answers, escalations. Averages hide the story. If escalation rate climbs after a small-model version bump, you found a regression that an average would have diluted. If the frontier route handles mostly easy queries, your classifier is too timid and you are overpaying."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The pattern generalizes beyond models: cached answers for repeated queries, small models for easy ones, frontier for hard ones, humans for the tail. It is one principle, spend capability where difficulty is, applied at four levels."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · model-router-small-models-first · TastyTechBytes
      </footer>
    </div>
  );
}
