import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Cache-Control and ETags: A Practical Guide to HTTP Caching";
const DESCRIPTION = "Caching bugs are configuration bugs. A small vocabulary of headers, applied deliberately per asset class, replaces superstition with behavior you can predict.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ HTTP CACHING :: THREE ANSWERS, IN ORDER              ║
║                                                      ║
║   fresh in cache?  ──► serve, zero network           ║
║   stale but valid? ──► conditional GET ──► 304       ║
║   else             ──► full response                 ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function HttpCachingHeadersPracticalGuideArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The two knobs</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Freshness says how long a response can be reused without asking: Cache-Control: max-age=3600. Validation says how to ask cheaply once it expires: the server sends an ETag, the client sends it back as If-None-Match, and an unchanged resource answers 304 with no body. Freshness saves the round trip; validation saves the payload. Good caching uses both."}</p>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`# Immutable build assets (hash in filename)
Cache-Control: public, max-age=31536000, immutable

# HTML documents (must always revalidate)
Cache-Control: no-cache
ETag: "v42"  # enables the cheap 304`}</pre>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">{"The trap in the vocabulary: no-cache does not mean do not store; it means store but always revalidate. Do-not-store is no-store. Nearly every caching horror story is someone deploying no-store by accident or expecting no-cache to skip the network."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Per asset class, not per vibes</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Fingerprinted assets (app.8f3a1.js): a year, immutable. The URL is the version; the cache can be forever."}</li>
            <li>{"HTML: no-cache with an ETag. Users always get the current shell, and repeat views cost a 304, not a render."}</li>
            <li>{"API responses: default to private, no-store unless you have a specific reason; add short max-age per endpoint only after thinking about staleness and per-user data."}</li>
            <li>{"Anything per-user: private, always, or a shared CDN will happily serve one customer's data to another."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Busting and debugging</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Cache invalidation by filename hash beats invalidation by header surgery: deploy new assets under new URLs, let the HTML point at them, and old clients degrade gracefully while new clients get new bytes. When something stale escapes, read the response headers first, Age, Cache-Control, ETag, the CDN's status header, before touching config. The answer to why is almost always printed on the response itself."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Helpful · http-caching-headers-practical-guide · TastyTechBytes
      </footer>
    </div>
  );
}
