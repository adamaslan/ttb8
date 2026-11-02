import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "DoH and DoT: What Encrypted DNS Hides and What It Doesn't";
const DESCRIPTION = "Encrypting DNS closes one specific window: on-path observers reading your lookups. Every other party to your traffic keeps their seat.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ ENCRYPTED DNS :: CLOSE ONE WINDOW, NOT THE HOUSE     ║
║                                                      ║
║   before: ISP sees every lookup, plaintext           ║
║   after:  resolver sees lookups; ISP sees IPs + SNI  ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function DnsOverHttpsWhatChangesArticle() {
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
          <span className="rounded-full bg-pink-600 px-3 py-1 text-sm font-bold text-white">
            Tech World - Helpful
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The leak being fixed</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Classic DNS travels in plaintext over port 53. Anyone on the path, cafe Wi-Fi, ISP, a transit network, reads every domain you look up, regardless of how encrypted the connection that follows is. The lookup log alone reconstructs a browsing profile with depressing fidelity."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"DoH and DoT wrap the same protocol in TLS: DoH inside HTTPS on 443, indistinguishable from web traffic; DoT on its own port, 853, easier for networks to identify and manage. Both authenticate the resolver and encrypt the lookup on the wire."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What does not change</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"The resolver sees everything: encryption moves trust from the network path to the resolver operator. Choose the operator on purpose."}</li>
            <li>{"Destinations still leak: IP addresses, connection metadata, and usually the TLS SNI hostname remain visible to the network, so per-site privacy from your ISP is partial."}</li>
            <li>{"Local policy gets bypassed: networks that relied on DNS for filtering lose that lever, which is why managed environments deploy their own DoH endpoints rather than blocking the idea."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The practical setup</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Browsers and OSes ship DoH support; enabling it at the OS level covers every app, and pointing the whole home network at a filtering resolver via the router covers devices that cannot configure themselves. The one technical footgun is split-horizon DNS at workplaces: internal names need the internal resolver, so automatic fallback modes exist for a reason."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Encrypted DNS is a real improvement with honest limits: it ends passive bulk surveillance of lookups by middlemen. It is one layer, and privacy that matters is always more than one layer."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Tech World - Helpful · dns-over-https-what-changes · TastyTechBytes
      </footer>
    </div>
  );
}
