import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Jev Turns Ambiguous Input Into Decisions Your Code Can Use";
const DESCRIPTION =
  "TypeSafe's Jev returns typed choices, scores, and probabilities. Here is where that interface helps, what it cannot guarantee, and how to test it.";
const SOURCE = "https://typesafe.ai/blog/introducing-system-one-models-and-jev?render=full";
const DOCS = "https://api.typesafe.ai/redoc";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ JEV :: DECISION AT THE SOFTWARE BOUNDARY             ║
║                                                      ║
║ messy input  ──► typed question ──► probability      ║
║                                      │               ║
║                            code chooses the action  ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function JevTypedDecisionsArticle() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="border-b border-gray-800 bg-black py-6">
        <div className="container mx-auto max-w-3xl px-4">
          <pre className="overflow-x-auto font-mono text-xs leading-tight text-green-400">
            {ASCII_ART}
          </pre>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl space-y-8 px-4 py-8">
        <div className="space-y-3">
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
            AI News
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">October 14, 2026 · TastyTechBytes</p>
        </div>

        <section
          aria-label="Decision flow illustration"
          className="rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 via-black to-green-950/40 p-5 font-mono shadow-2xl sm:p-8"
        >
          <div className="mb-5 text-xs uppercase tracking-widest text-green-500">A decision boundary</div>
          <div className="grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-lg border border-gray-700 bg-black/70 p-4">
              <div className="text-gray-500">01 / STATE</div>
              <div className="mt-3 text-gray-200">A messy support request</div>
            </div>
            <div className="rounded-lg border border-green-800 bg-black/70 p-4">
              <div className="text-green-500">02 / JUDGMENT</div>
              <div className="mt-3 text-green-300">urgent? → probability</div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-black/70 p-4">
              <div className="text-gray-500">03 / CODE</div>
              <div className="mt-3 text-gray-200">Route, review, or hold</div>
            </div>
          </div>
          <p className="mt-5 text-xs text-gray-500">Conceptual illustration; no model call or measured result.</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The useful idea</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Most AI integrations ask a model to write a response, then make code parse that response
            into a decision. TypeSafe&apos;s Jev starts with the decision: send it some state and named,
            structured questions; receive typed answers with probabilities. The application still owns
            the rules that turn those answers into actions.
          </p>
          <p className="text-sm leading-relaxed text-gray-300">
            That interface is useful when the input is ambiguous but the next action has a fixed shape:
            classify a ticket, score a lead, choose a review queue, or decide whether a human should
            inspect a case. It is a poor fit for writing an article or calculating an exact invoice total.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What the API exposes</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            The public API accepts a <code className="text-green-300">state</code> plus one or more
            named <code className="text-green-300">questions</code>. Its answer types cover a yes/no
            judgment (Noul), a choice from defined options, and a score. Responses identify answers
            by question name and include model and token usage. That gives a workflow a much narrower
            contract than free prose.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`// Conceptual routing logic, not an API response
if (urgentProbability >= reviewedThreshold) {
  routeToHuman();
} else {
  queueForNormalReview();
}`}</pre>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            The threshold belongs to your application. A probability is information about uncertainty;
            it is not permission to skip validation, audit logs, or a human review path.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Claims worth testing</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            TypeSafe lists Jev at $0.042 per million input tokens with free output and reports 70–500 ms
            response times for its examples. Its larger speed and cost comparisons come from workflows
            the company selected and measured. Those are vendor results, not a latency or quality
            guarantee for your workload.
          </p>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>Save a representative set of real inputs and the actions a reviewer would take.</li>
            <li>Ask the same narrow questions of Jev and your current implementation.</li>
            <li>Measure wrong routes, review volume, latency, and total cost per completed decision.</li>
            <li>Check whether stated probabilities match observed accuracy across confidence bands.</li>
          </ol>
          <p className="text-sm leading-relaxed text-gray-300">
            A schema can rule out an invalid answer shape. It cannot prove that a valid answer is correct.
            The practical question is whether your workflow makes better decisions at an acceptable cost.
          </p>
        </section>

        <section className="space-y-3 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Sources</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a className="text-green-400 hover:underline" href={SOURCE} target="_blank" rel="noopener noreferrer">TypeSafe: Introducing System One Models &amp; Jev</a> — product claims, pricing, and benchmark caveats.</li>
            <li><a className="text-green-400 hover:underline" href={DOCS} target="_blank" rel="noopener noreferrer">TypeSafe API reference</a> — request and answer types.</li>
          </ul>
        </section>

        <p className="text-center">
          <Link to="/ai-articles" className="text-sm text-green-400 hover:underline">← More AI articles</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI News · jev-typed-decisions-for-software · TastyTechBytes
      </footer>
    </div>
  );
}
