import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "LLM Evals That Actually Catch Regressions";
const DESCRIPTION = "A prompt change that looks better in three examples can be worse on three hundred. Evals only earn their keep when they measure the behavior you ship.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ EVALS :: A GATE, NOT A VIBE                          ║
║                                                      ║
║   golden set ──► old prompt ──┐                      ║
║                    └► new ────┴─► compare ──► ship?  ║
║                                                      ║
║   failing case ──► promoted into the set             ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function LlmEvalsThatCatchRegressionsArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Vibe-testing is how regressions ship</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The default evaluation loop is: change the prompt, run five examples by hand, decide it reads better, deploy. This loop reliably detects improvements on the five examples you thought to try and reliably misses the sixth case, the one your users hit hourly. LLM behavior is a distribution; a handful of anecdotes tells you almost nothing about where the mass moved."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"An eval suite turns the question from does this look better into did anything get worse, measured on cases that represent production traffic. That is the question a gate can answer."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Build the golden set from reality</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Harvest real inputs from logs, including the ugly ones: empty fields, mixed languages, pasted novels, hostile input."}</li>
            <li>{"Label expected behavior as assertions, not essays: output must contain X, must not contain Y, must route to queue Z. Assertions are cheap to grade and hard to argue with."}</li>
            <li>{"Every production incident becomes at least one new case. The suite grows in the direction of observed failure, which is the only direction that matters."}</li>
            <li>{"Keep a fixed seed set and a rotating sample of fresh production inputs so the suite does not overfit to last quarter's traffic."}</li>
          </ol>
          <p className="text-sm leading-relaxed text-gray-300">{"Grading can be exact match, a rubric-scoring model, or a deterministic check on structured output. Use the cheapest grader that is faithful: a string check beats a judge model when the answer is a category, and a judge model beats nothing when the answer is prose."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Wire it where it blocks</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"An eval that runs when someone remembers to run it is documentation. Run the suite on every prompt, model, or dependency change, in CI, and set a threshold: no regression beyond noise on the golden set, no unexplained cost or latency jump. Model upgrades are the dangerous moment: the same prompt on a new checkpoint is a behavior change with no code diff to review."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Track two numbers over time: pass rate, and the rate at which the suite catches things before production does. If the second number is zero for months, your suite has drifted away from reality, and the fix is more incident-sourced cases, not more metrics."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · llm-evals-that-catch-regressions · TastyTechBytes
      </footer>
    </div>
  );
}
