import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Where HTTP Status Codes Came From";
const DESCRIPTION = "404, 418, 451: the three-digit vocabulary of the web traces back to FTP, a coffee pot, and a law. A short history of the codes you type every day.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ STATUS CODES :: THREE DIGITS, THIRTY YEARS           ║
║                                                      ║
║   2xx ok   3xx go there   4xx your fault             ║
║   5xx my fault   418 teapot   451 censored           ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function WhereHttpStatusCodesCameFromArticle() {
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
          <span className="rounded-full bg-green-400 px-3 py-1 text-sm font-bold text-white">
            Code World - Random
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Borrowed from FTP</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Tim Berners-Lee's original HTTP was minimal, but by 1992 the protocol needed machine-readable outcomes, and the designers reached for the nearest working model: FTP's reply codes. Three digits, first digit as the class. That is why 2xx means success, 3xx redirection, 4xx client error, 5xx server error: the shape is older than the web itself."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The class system is the durable idea. New codes appear over the years, but any client anywhere can read the first digit and know roughly what happened, including clients written before the specific code existed. Forward compatibility through one digit of discipline."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The famous weirdos</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"418 I'm a Teapot: an April Fools' RFC from 1998 for the Hyper Text Coffee Pot Control Protocol. It was a joke, then an easter egg, then a marker of reserved-for-whimsy so beloved that a proposal to reclaim it for real use failed."}</li>
            <li>{"451 Unavailable for Legal Reasons: named for Fahrenheit 451, created so servers could say blocked by law instead of pretending the page never existed. Transparency as a status code."}</li>
            <li>{"402 Payment Required: reserved in the original spec for a future of web payments that took decades to arrive. Still mostly unused, still reserved, still waiting."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Why the system aged well</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Status codes are a tiny extensible protocol layered under everything: caches key on them, load balancers route on them, monitoring alerts on them. The designers got one thing exactly right: semantics in the class digit, specificity in the rest, and no requirement that anyone implement codes they do not care about."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"When you design an API error format today, you are re-deriving the same decision. The lesson of the codes is that coarse, stable categories outlive precise, clever ones."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Random · where-http-status-codes-came-from · TastyTechBytes
      </footer>
    </div>
  );
}
