import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Token Bucket vs Leaky Bucket: Rate Limiting Explained With Code";
const DESCRIPTION = "Two algorithms dominate rate limiting. One permits bursts and one smooths them, and picking wrong shapes your API's entire feel.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ TWO BUCKETS                                          ║
║                                                      ║
║   token bucket:  refill r/s, spend per request       ║
║                  idle time banks burst capacity      ║
║   leaky bucket:  requests queue, drain at fixed rate ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function RateLimitingTokenBucketLeakyArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Token bucket: banked capacity</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"A bucket holds up to B tokens and refills at r per second. Each request spends one; an empty bucket rejects. The defining property: idle time accumulates burst capacity. A user quiet for a minute can fire a short burst, then settles back to the sustained rate. That matches how humans actually use APIs."}</p>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`function allow(state, now, rate, burst) {
  const elapsed = now - state.updated;
  state.tokens = Math.min(burst, state.tokens + elapsed * rate);
  state.updated = now;
  if (state.tokens >= 1) { state.tokens -= 1; return true; }
  return false;
}`}</pre>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Leaky bucket: forced smoothness</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"A leaky bucket queues requests and drains them at a fixed rate; overflow rejects. Output is perfectly smooth regardless of input burstiness. That is exactly right when you are protecting something downstream that hates bursts, a legacy database, a partner API with a hard concurrency cap, and exactly wrong when you are shaping user-facing behavior, where bursts are normal and queuing adds latency."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The pragmatic default for public APIs is token bucket: simple to implement per key, memory-light, and its burst tolerance matches client retry behavior. Reach for the queue when the resource you protect genuinely cannot absorb a spike."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The operational details decide</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Return 429 with Retry-After so well-behaved clients back off correctly instead of hammering."}</li>
            <li>{"Limit on the right key: per user for fairness, per IP as a backstop, per expensive-operation for cost control. Often all three layers at once."}</li>
            <li>{"Store state where your topology works: in-memory for one process, Redis for a fleet; a limiter that each server enforces independently multiplies your real limit by server count."}</li>
            <li>{"Log near-limit traffic. The clients just under your limit are tomorrow's incident or tomorrow's pricing tier."}</li>
          </ul>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Helpful · rate-limiting-token-bucket-leaky · TastyTechBytes
      </footer>
    </div>
  );
}
