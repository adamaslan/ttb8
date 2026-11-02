import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "ETF Creation and Redemption: The Mechanism Behind the Price";
const DESCRIPTION = "ETFs track their holdings through an arbitrage loop run by authorized participants. Understanding the loop explains premiums, discounts, and when they matter.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ CREATION/REDEMPTION :: THE ARB THAT KEEPS THE PEG    ║
║                                                      ║
║   price > NAV ──► AP creates shares ──► sell, close  ║
║   price < NAV ──► AP redeems shares ──► buy, close   ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function EtfCreationRedemptionMechanicsArticle() {
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
          <span className="rounded-full bg-green-700 px-3 py-1 text-sm font-bold text-white">
            Finance - Signal Scan
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The loop</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Authorized participants, large trading firms with a contract with the fund, can hand the issuer a basket of the underlying securities and receive new ETF shares (creation), or reverse the trade (redemption), in large blocks. When the ETF's market price rises above the value of its holdings, an AP buys the cheap underlyings, creates shares, and sells them into the rich market. The trade pushes price and value back together and pockets the gap."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"That arbitrage is why an ETF trades near its net asset value most of the time without any rule forcing it to. The peg is a profit motive, not a promise."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Why the peg sometimes bends</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Timing: an ETF on foreign stocks trades while its underlyings sleep; the price is a live estimate, and the NAV is stale. The premium is information, not breakage."}</li>
            <li>{"Friction: creations cost money, so small premiums and discounts persist inside the no-arb band the costs define."}</li>
            <li>{"Stress: when the underlying market seizes, the arb gets risky and expensive, and discounts widen until someone is paid enough to run the loop."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The structural perks</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Redemptions in kind let the fund hand out low-basis securities without selling them, which is the engine behind ETFs' famous tax efficiency relative to mutual funds. The same loop also means the fund rarely needs to hold much cash for redemptions, keeping tracking tighter."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The takeaway for anyone evaluating an ETF: the mechanism is robust, but its price is the arb's willingness to work. Liquid underlyings plus active APs equals a tight peg; illiquid underlyings plus stress equals a discount you should expect rather than fear."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Finance - Signal Scan · etf-creation-redemption-mechanics · TastyTechBytes
      </footer>
    </div>
  );
}
