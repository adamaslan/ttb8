import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Guardrails for LLM Apps: Validate Inputs, Outputs, and Everything Between";
const DESCRIPTION = "The model is one component in a pipeline. Every boundary of that pipeline needs a check, because each side of the model can fail independently.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ GUARDRAILS :: CHECKS AT EVERY BOUNDARY               ║
║                                                      ║
║   user ──► [input filter] ──► model ──►              ║
║        [output validator] ──► [policy gate] ──► act  ║
║                                                      ║
║   each stage can fail closed                         ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function LlmInputOutputGuardrailsArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Input side: cheap checks first</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Before the model sees anything: length caps, encoding sanity, rate limits, and a prompt-injection screen proportional to your exposure. An app that summarizes user-supplied documents faces real injection risk; an internal tool that classifies tickets faces little. Match the defense to the surface rather than bolting on every filter you have read about."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The underrated input guardrail is structural: put untrusted content in delimited, clearly-labeled positions and keep instructions in a separate channel from data. It does not stop a determined injection, but it removes the accidental collisions where a user's text happens to read like a command."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Output side: never trust the shape or the claim</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Shape: parse and schema-validate every structured output before code consumes it."}</li>
            <li>{"Grounding: when the answer must come from a retrieved document, check that quoted claims actually appear in the source, and fail or flag when they do not."}</li>
            <li>{"Policy: a final deterministic gate for the actions that matter, what may be sent, spent, deleted, or published, with the model unable to override it."}</li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-300">{"Fail closed on the boundaries that touch the world, and fail open with a flag on the boundaries that only touch display. A blocked refund is a support ticket; an unblocked bad refund is an incident."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The middle: log like you will need it</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"When a guardrail fires in production, the first question is always what the model saw and said. Log prompts, retrieved context, raw completions, and validator verdicts per request. Without that, every guardrail trigger is an unsolvable mystery; with it, each one is a free eval case."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Guardrails are not a product you buy, they are the same engineering discipline as input validation and output encoding everywhere else, applied to a component whose failure mode is confident prose instead of a stack trace."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · llm-input-output-guardrails · TastyTechBytes
      </footer>
    </div>
  );
}
