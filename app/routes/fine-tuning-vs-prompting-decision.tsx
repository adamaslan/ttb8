import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Fine-Tuning vs Prompting: A Decision Framework That Respects Your Time";
const DESCRIPTION = "Fine-tuning is a commitment with a maintenance tail. Prompting is iteration with a ceiling. Pick based on what is actually failing.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ THE LADDER :: CLIMB ONLY WHEN THE RUNG FAILS         ║
║                                                      ║
║   prompt ──► few-shot ──► retrieval ──► fine-tune    ║
║     cheap     cheap        grounded      committed   ║
║                                                      ║
║   each rung needs its own eval to justify the next   ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function FineTuningVsPromptingDecisionArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What fine-tuning is actually good at</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Fine-tuning moves behavior into weights: a tone, a format, a classification policy, a domain's vocabulary, applied consistently without spending prompt tokens on it every call. It is the right tool when the behavior is stable, demonstrable in hundreds of examples, and needed at a volume where prompt overhead and inconsistency cost more than training."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"It is the wrong tool for knowledge. Facts belong in retrieval, where they can be updated, cited, and corrected. A model fine-tuned on last quarter's documentation knows last quarter's documentation with total confidence and no source."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Climb the ladder with evidence</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Prompt: if a clear instruction fixes the failure, stop here."}</li>
            <li>{"Few-shot: if showing three examples of the exact format fixes it, stop here."}</li>
            <li>{"Retrieval: if the failure is missing or stale knowledge, fix the knowledge path, not the weights."}</li>
            <li>{"Fine-tune: only when the failure is consistent behavior or format at scale, and the earlier rungs measurably do not close the gap."}</li>
          </ol>
          <p className="text-sm leading-relaxed text-gray-300">{"Each rung needs the same eval suite, so the claim better is a number on fixed cases rather than a reading of two outputs. Without that, teams fine-tune to escape a retrieval bug and inherit both problems."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The maintenance tail</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"A fine-tuned model is an artifact you now own: training data versioning, re-runs when the base model deprecates, regression checks per provider migration, and the organizational memory of why the weights are the way they are. Prompts version in git with the app; weights version in a separate, slower loop."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The pragmatic split most teams land on: prompts and retrieval for knowledge and per-tenant variation, one small fine-tuned model for the stable high-volume behavior that justifies its upkeep. Revisit the split when model prices or your traffic shape change, because they will."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · fine-tuning-vs-prompting-decision · TastyTechBytes
      </footer>
    </div>
  );
}
