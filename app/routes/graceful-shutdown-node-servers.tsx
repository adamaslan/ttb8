import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Graceful Shutdown in Node: Stop Dropping In-Flight Requests";
const DESCRIPTION = "SIGTERM is not a crash. A server that closes in the right order drains cleanly through deploys, autoscaling, and rollbacks.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ SHUTDOWN SEQUENCE                                    ║
║                                                      ║
║   SIGTERM ──► stop accepting ──► drain in-flight     ║
║        ──► close idles ──► close DB ──► exit 0       ║
║                                                      ║
║   deadline: force-kill after grace period            ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function GracefulShutdownNodeServersArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What a deploy does to requests</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Every rolling deploy sends your process a SIGTERM. The default Node behavior drops the process on the floor: connections reset, in-flight requests die mid-write, clients see truncated responses. Multiply by deploy frequency and you have a low-grade error rate that never quite triggers an alert but absolutely reaches users."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The order matters</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 font-mono text-xs text-gray-300">
            <pre>{`process.on('SIGTERM', async () => {
  server.close();            // stop accepting; finish in-flight
  server.closeIdleConnections();
  await drainWork();         // let active handlers complete
  await db.close();          // only after handlers are done
  process.exit(0);
});

setTimeout(() => process.exit(1), GRACE_MS).unref(); // backstop`}</pre>
          </div>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Stop accepting first, so the load balancer routes new work elsewhere while you drain."}</li>
            <li>{"Close idle keep-alive connections explicitly; they hold server.close open for minutes otherwise."}</li>
            <li>{"Shut downstream resources last: handlers still running need the database pool alive."}</li>
            <li>{"Always keep a forced-exit backstop slightly under the platform's kill deadline."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The details that bite</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Health checks should flip to failing the moment SIGTERM lands, so orchestrators stop sending traffic during the drain window. Keep-alive timeouts, load-balancer idle timeouts, and the platform's grace period need to agree with each other; the classic bug is the LB holding a connection the server has half-closed."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Test it the honest way: fire a slow request, send SIGTERM mid-flight, and watch the request complete with a correct response. That thirty-second test catches every ordering mistake above, and almost nobody runs it before the first on-call page."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Code World - Helpful · graceful-shutdown-node-servers · TastyTechBytes
      </footer>
    </div>
  );
}
