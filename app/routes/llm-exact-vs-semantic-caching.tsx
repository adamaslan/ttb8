import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Exact vs Semantic Caching for LLM Calls";
const DESCRIPTION = "Caching model output is the highest-leverage optimization in most LLM systems. The design question is what counts as the same question.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ TWO CACHES, TWO CONTRACTS                            ║
║                                                      ║
║   exact:    hash(prompt)  ──► stored answer          ║
║   semantic: embed(query)  ──► nearest ≥ threshold    ║
║                                                      ║
║   wrong threshold = confidently stale answers        ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function LlmExactVsSemanticCachingArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Exact caching: boring and correct</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Hash the full request, model, system prompt, parameters, and input, and store the completion. A hit is definitionally the same computation replayed, so correctness is never in question. Exact caches shine in development loops, eval reruns, retries, and production traffic with genuinely repeated requests: the same document summarized, the same classification of the same ticket."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Normalize before hashing: trim whitespace, canonicalize JSON key order, and exclude volatile fields like timestamps, or the cache never hits. Then log hit rate; an exact cache with a 2% hit rate is a config error, not a workload property."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Semantic caching: hits more, risks more</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Semantic caches embed the query and reuse a stored answer when a similar question was answered before. Hit rates jump, because what is the refund policy and how do I get my money back collide. So does a new failure mode: questions that are similar but not the same. What is the refund policy for annual plans is close in embedding space to the monthly one and must not share its answer."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The threshold is a business decision measured, not guessed. Label a few hundred query pairs as same-answer or different-answer, pick the similarity cutoff with acceptable precision, and re-check it whenever the embedding model or the corpus changes. When in doubt, cache narrower and let some hits go."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Stale answers are the real cost</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Both caches share the harder problem: the world changes. An answer cached last month about pricing, status, or policy is wrong in the expensive way, confidently. Tie cache lifetime to the volatility of the underlying data: static documentation can cache for weeks, anything operational needs short TTLs or event-driven invalidation, and anything about right now probably should not be cached at all."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Cache the question class, not just the question: factual lookups cache well, generative writing caches poorly because users wanted it fresh. A good cache policy is a small document that says what is cached, for how long, and what invalidates it."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · llm-exact-vs-semantic-caching · TastyTechBytes
      </footer>
    </div>
  );
}
