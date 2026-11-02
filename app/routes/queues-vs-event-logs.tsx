import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Queues vs Event Logs: Choosing the Backbone of Async Work";
const DESCRIPTION = "SQS-style queues and Kafka-style logs solve different problems. The confusion costs teams a migration; the distinction takes ten minutes.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ QUEUE vs LOG :: DELETE ON READ vs REMEMBER FOREVER   ║
║                                                      ║
║   queue: msg ──► worker ──► ack ──► gone             ║
║   log:   evt ──► offset 42 ──► stored, replayable    ║
║                                                      ║
║   work distribution ≠ event history                  ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function QueuesVsEventLogsArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">A queue distributes work</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"A queue's job: each message is processed once, by one worker, then deleted. Competing consumers give you horizontal scaling for free; visibility timeouts handle crashed workers; dead-letter queues catch poison messages. The mental model is a todo list. If your problem is send emails, resize images, run jobs, that is a queue's entire purpose."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">A log remembers history</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"An event log appends immutable events and lets every consumer track its own offset. Nothing is deleted on read, so new consumers can replay from the beginning, and two consumers can read the same event for different purposes without coordination. The mental model is a ledger. If your problem is keep an authoritative stream of what happened, feed analytics and serving from one source, rebuild state by replay, that is a log."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The expensive mistake is using a queue as a log: once messages are acked they are gone, so the analytics consumer you add next quarter has no history to read. The matching mistake is using a log as a work queue: per-partition ordering and consumer-group semantics fight the grab-any-task pattern."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Decide by the questions you will ask later</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Will a future consumer need this data from the beginning? Log."}</li>
            <li>{"Is each item a task to complete once? Queue."}</li>
            <li>{"Do you need per-key ordering across a long history? Log, partitioned by key."}</li>
            <li>{"Is operational simplicity the top constraint? Managed queues are the least infrastructure you can run."}</li>
          </ul>
          <p className="text-sm leading-relaxed text-gray-300">{"Many systems end up with both: a log as the source of truth, queues fed from it for task execution. That is not over-engineering; it is each tool doing the half it is good at."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Helpful · queues-vs-event-logs · TastyTechBytes
      </footer>
    </div>
  );
}
