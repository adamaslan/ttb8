import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Idempotency Keys: How to Retry API Calls Safely";
const DESCRIPTION = "Every network call can fail after succeeding. Idempotency keys make retries safe by giving the server a way to recognize a repeat.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ IDEMPOTENCY :: THE RETRY THAT CAN'T DOUBLE-CHARGE    ║
║                                                      ║
║   POST /charge  Idempotency-Key: 9c1…                ║
║   timeout? ──► retry, same key ──► first result      ║
║                                                      ║
║   server stores key ──► result                       ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function IdempotencyKeysSafeRetriesArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The ambiguity at the heart of retries</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"A POST times out. Did the server process it? You cannot know: the failure may have happened before the work, during it, or on the way back with the response. Retry blindly and you sometimes do the thing twice: two charges, two bookings, two messages sent. Any client that retries, which is every client that works on real networks, needs the server to make repetition harmless."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"An idempotency key is a client-generated unique ID sent with the request. The server stores the outcome keyed by it: first arrival does the work and saves the result; repeats return the saved result without redoing the work. The retry ambiguity stops mattering."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Server side, the details are the product</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Store the key atomically with the work: same transaction as the charge, or a compare-and-set claim checked before starting."}</li>
            <li>{"Scope keys per account and per endpoint; a key reused for a different operation must be an error, not a collision."}</li>
            <li>{"Reply to repeats with the original status and body, including the original error, so clients see consistent history."}</li>
            <li>{"Expire stored keys after a window matched to your actual retry and reconciliation flow: hours for interactive APIs, days where jobs retry on daily schedules, and whatever the vendor contract specifies when you integrate with someone else's."}</li>
          </ul>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`claim = store.claim_if_absent(key, request_hash)
if claim.existed:
    if claim.request_hash != request_hash:
        return conflict(422)      # same key, different body
    return claim.response         # replay the original result`}</pre>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Client side, generate once</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The key must be stable across retries of the same logical operation and unique across operations: generate it when the user taps pay, not inside the retry loop. Natural keys work when one exists, an order ID, a form submission ID; otherwise a random UUID per user intent."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"If you build APIs, support the key on every non-idempotent endpoint that money or messages flow through. If you consume APIs, send keys everywhere they are accepted. It is the cheapest reliability primitive either side can implement."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Helpful · idempotency-keys-safe-retries · TastyTechBytes
      </footer>
    </div>
  );
}
