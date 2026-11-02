import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Getting Reliable JSON Out of LLMs: Structured Outputs That Survive Production";
const DESCRIPTION = "Free-form prompting for JSON breaks in boring, expensive ways. Schema-constrained decoding changes the failure mode from silent corruption to a visible retry.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ STRUCTURED OUTPUTS :: CONTRACT AT THE DECODER        ║
║                                                      ║
║   prompt ──► model ──► constrained decode ──► JSON   ║
║                            │                         ║
║                     invalid tokens never sampled     ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function StructuredOutputsJsonSchemaLlmsArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The failure mode you actually get</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Ask a chat model for JSON in prose and you mostly get JSON. Until you do not: a preamble sentence, a trailing explanation, a field renamed from total_amount to totalAmount, a number that arrives as a string with a currency symbol inside it. None of these throw. They surface three calls later as a confusing KeyError or a silent wrong value in a database column."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The underlying problem is that parsing is a contract, and a prose instruction is a weak contract. The model is sampling tokens that look plausible; nothing in the sampling process knows about your schema. Prompting harder narrows the distribution. It does not close it."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What constrained decoding changes</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Structured output APIs move the contract into the decoder. You supply a JSON Schema; the sampler masks any token that cannot lead to a schema-valid completion. For supported schemas, the output is guaranteed to parse and to match your field names, types, and enums, because invalid sequences were never reachable. That is the API's contract for structure, not for truth: semantic correctness still belongs to the model."}</p>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`// The contract lives in the request, not the prompt
response_format = {
  "type": "json_schema",
  "schema": {
    "type": "object",
    "properties": {
      "total_amount": {"type": "number"},
      "currency": {"enum": ["USD", "EUR", "GBP"]},
      "line_items": {"type": "array", "items": {"type": "object"}}
    },
    "required": ["total_amount", "currency"]
  }
}`}</pre>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">{"Two limits stay with you. Valid shape is not valid content: a schema cannot stop the model from putting the wrong number in total_amount. And deep schemas with many optional branches can degrade instruction following, because the model spends its attention on structure. Keep schemas flat and required fields few."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">How to adopt it without rewrites</h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Pick the one call site where a malformed response currently costs you the most: the parser with the most try/except layers."}</li>
            <li>{"Write the schema to match what the downstream code actually consumes, not what the prompt currently describes."}</li>
            <li>{"Keep the prompt. Structure and instruction work together; the schema enforces shape, the prompt still carries meaning."}</li>
            <li>{"Log the diff between old-parser output and schema output for a week. The mismatches tell you where your old contract was silently vague."}</li>
          </ol>
          <p className="text-sm leading-relaxed text-gray-300">{"The right mental model is a type signature for a stochastic function. You would not ship a function whose return type is string and parse it downstream with regex. Structured outputs let you stop doing exactly that."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        AI Tips / Tutorials · structured-outputs-json-schema-llms · TastyTechBytes
      </footer>
    </div>
  );
}
