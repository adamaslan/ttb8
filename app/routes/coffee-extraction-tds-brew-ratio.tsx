import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Coffee Extraction: TDS, Brew Ratios, and Why Sour Means Under";
const DESCRIPTION = "Brewing is controlled dissolution. Two numbers, dose-to-water ratio and extraction yield, explain most of what you taste.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ EXTRACTION :: DISSOLVE THE RIGHT FRACTION            ║
║                                                      ║
║   under-extracted: sour, thin, salty                 ║
║   sweet spot:      18-22% of the grounds dissolved   ║
║   over-extracted:  bitter, dry, hollow               ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function CoffeeExtractionTdsBrewRatioArticle() {
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
          <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-bold text-white">
            Drink World - Helpful
          </span>
          <h1 className="text-3xl font-bold text-green-400 sm:text-4xl">{TITLE}</h1>
          <p className="text-sm text-gray-500">November 2026 · TastyTechBytes</p>
        </div>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The two numbers</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Brew ratio is dose to water by weight: 1:16 means 20 grams of coffee to 320 grams of water, and it mostly sets strength, how concentrated the cup is. Extraction yield is the fraction of the grounds' mass that dissolved, and it mostly sets balance: the compounds dissolve in a rough order, acids early, sugars mid, bitter and dry compounds late."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The classic target zone for filter coffee is around 18 to 22 percent yield. You do not need a refractometer to use the idea: the taste map is reliable. Sour and thin means you stopped early; bitter and drying means you went long."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The levers, in order of leverage</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Grind size: finer extracts faster. It is the primary adjustment for a given brewer, and most home fixes are one grind step."}</li>
            <li>{"Time: longer contact extracts more. Adjust it after grind, since the two trade against each other."}</li>
            <li>{"Water temperature: hotter water extracts faster and pulls different compounds; lighter roasts generally want near-boiling, darker roasts tolerate cooler."}</li>
            <li>{"Agitation: stirring and pouring technique even out extraction across the bed; channeling is water cheating past the coffee."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">A debugging procedure</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Change one variable per brew and take the tasting notes seriously: sour and sharp, grind finer or brew longer. Bitter and ashy, coarser or shorter. Weak but balanced, tighten the ratio, that is a strength fix, not an extraction fix. Muddy and flat, check water and freshness before blaming the recipe."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"Two brews of adjustment usually land the cup. The framework's real value is that it converts I don't like this coffee into a specific, fixable diagnosis."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Drink World - Helpful · coffee-extraction-tds-brew-ratio · TastyTechBytes
      </footer>
    </div>
  );
}
