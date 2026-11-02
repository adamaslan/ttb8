import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Agent Loops Need Stop Conditions, Not Hopes";
const DESCRIPTION = "An agent that loops until done needs a precise definition of done, plus budgets for every way done can fail to arrive.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ AGENT LOOP :: EXIT IS A DESIGN DECISION              ║
║                                                      ║
║   act ──► observe ──► decide ──► act ──► …           ║
║     │                                                ║
║   stop: goal met | steps | tokens | time | no-progress║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function AgentLoopsStopConditionsArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The loop that never ends runs on your card</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"An agentic loop is a while statement whose condition is evaluated by a language model. That is powerful and dangerous in the same way: the model can keep finding plausible next steps indefinitely, each one costing tokens and tool calls. Runaway loops are the most common way agent demos become billing incidents."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The fix is unglamorous: hard budgets on every dimension. Maximum steps, maximum tokens, maximum wall-clock time, maximum cost, whichever hits first ends the loop and hands control to a defined fallback."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Progress detection beats step counting</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Budgets cap the damage; progress detection ends the loop early. Track whether state is actually changing: new files written, new facts retrieved, checklist items completed. An agent that has called search six times with reformulated queries and found nothing new is stuck, and the right response is to stop and report, not to search a seventh time with more enthusiasm."}</p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"No-progress rule: N consecutive steps with no state change."}</li>
            <li>{"Repetition rule: the same tool with near-identical arguments twice."}</li>
            <li>{"Oscillation rule: undoing and redoing the same change."}</li>
            <li>{"Each rule ends the loop with a structured report of what was tried."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Design the exit report first</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Every loop exit, success or budget, should produce the same artifact: goal, actions taken, current state, what remains, and confidence. That report is what makes a stopped agent useful instead of alarming, and it is what a human or a supervising process needs to decide the next move."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Agents earn autonomy in proportion to the quality of their stops. A loop that always ends cleanly, on budget, with a legible report can be trusted with longer budgets. A loop that sometimes vanishes into the weeds gets a short leash or a human in it."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · agent-loops-stop-conditions · TastyTechBytes
      </footer>
    </div>
  );
}
