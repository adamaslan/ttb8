import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "TypeScript's satisfies and as const: Keep the Inference, Add the Check";
const DESCRIPTION = "Annotations widen, assertions lie, and satisfies checks. Two small keywords remove a whole class of type-vs-value fights.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ satisfies :: CHECK WITHOUT WIDENING                  ║
║                                                      ║
║   const cfg = {...} satisfies Config                 ║
║        │            │                                ║
║   keeps literal type   must still fit Config         ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function TypescriptSatisfiesAsConstArticle() {
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
          <span className="rounded-full bg-red-900 px-3 py-1 text-sm font-bold text-white">
            Code World - Helpful
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The problem with annotation</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Annotate a value and TypeScript widens it to the annotation. Declare routes: Record<string, Route> and every path becomes just string; autocomplete on routes['/home'] dies, and so does exhaustiveness checking over known keys. The value was precise; the annotation threw the precision away."}</p>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`// Annotation widens; satisfies checks and keeps
const routes = {
  home: { path: '/', auth: false },
  admin: { path: '/admin', auth: true },
} as const satisfies Record<string, { path: string; auth: boolean }>;

// routes.admin.path is '/admin', not string`}</pre>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Where each keyword earns its keep</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"satisfies: validate a literal against a contract while keeping its exact inferred type. Config objects, route tables, color maps, test fixtures."}</li>
            <li>{"as const: a compile-time assertion that narrows literals to their exact types and marks properties and tuples readonly in the type system, so red is 'red' and the tuple's members are its members. It changes nothing at runtime; reach for Object.freeze if the value itself must be locked."}</li>
            <li>{"Together: the config is checked against the interface and stays fully precise for downstream inference, no manual generic plumbing."}</li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-300">{"Contrast with as Config, which tells the compiler to stop checking: it compiles when the object is wrong and lies to everyone after you. as is a cast; satisfies is a test. Prefer the test."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The payoff is downstream</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Precise literal types make the rest of the file smarter: exhaustive switches over route keys, autocompleted path strings, refactors that fail at compile time instead of at runtime. The two keywords cost nothing at runtime, they erase entirely, and they convert silent type drift into red squiggles at the exact line that caused it."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Helpful · typescript-satisfies-as-const · TastyTechBytes
      </footer>
    </div>
  );
}
