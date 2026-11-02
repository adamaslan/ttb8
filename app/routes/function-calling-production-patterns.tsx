import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Function Calling Patterns That Hold Up in Production";
const DESCRIPTION = "Tool use fails in production for boring reasons: ambiguous schemas, unvalidated arguments, and no plan for the call that should never have happened. All three are fixable.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ TOOL USE :: THE MODEL PROPOSES, CODE DISPOSES        ║
║                                                      ║
║   model ──► {name, args} ──► validate ──► execute    ║
║                              │                       ║
║                          reject ──► feedback ──► retry║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function FunctionCallingProductionPatternsArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Design tools like an API, not like a prompt</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The model chooses a tool from its name, description, and parameter schema. That means your schema is documentation for a very literal reader. Names should be verbs (get_order_status, not orderInfo), enums should enumerate, and descriptions should say when not to call the tool. Ambiguity in the schema becomes ambiguity in routing, and the model will happily pick the wrong tool with complete confidence."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Keep the tool count small. Selection accuracy degrades as the menu grows; past a couple of dozen overlapping tools, route first (pick the tool category with a cheap classifier) and then present only that category's tools."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Validate arguments like they came from the internet</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Treat model-generated arguments with the same suspicion as user input, because that is what they are. Check types, ranges, string lengths, and referential integrity before execution: does this order ID exist, is this date in the past, is this amount sane. A schema-valid call can still be a nonsense call."}</p>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`def execute_tool(name, args):
    spec = TOOLS[name]
    cleaned = spec.validate(args)      # types, ranges, enums
    spec.authorize(cleaned, ctx)     # is this action allowed at all?
    result = spec.run(cleaned)       # sandboxed, timed, logged
    return spec.format(result)       # short, structured, model-readable`}</pre>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">{"When validation fails, return the error to the model as a tool result and let it correct. Models are good at fixing rejected arguments when the error message is specific. They are terrible at noticing that a call succeeded with the wrong meaning."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Decide what the model may never do</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Some actions should not be tools at all: sending money, deleting data, messaging a customer. Or they should be two-phase tools, where the model prepares an action and a human or a deterministic policy approves it. The model's job is proposal; your code owns commitment. Write that line down per tool before you ship, because the default, if you do not, is that everything is allowed."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · function-calling-production-patterns · TastyTechBytes
      </footer>
    </div>
  );
}
