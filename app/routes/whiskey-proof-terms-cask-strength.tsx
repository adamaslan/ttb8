import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Cask Strength, Barrel Proof, and the Proof Terms That Matter";
const DESCRIPTION = "Proof is just alcohol by volume with history attached. The useful terms describe what happened between the barrel and your bottle.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ PROOF :: WHAT THE NUMBER ON THE LABEL MEANS          ║
║                                                      ║
║   cask strength: bottled at barrel ABV               ║
║   standard:    water added to a target proof         ║
║   NCF:         no chill filtration, texture kept     ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function WhiskeyProofTermsCaskStrengthArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Proof itself</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"US proof is simply twice the ABV: 100 proof is 50% alcohol. The term comes from a crude gunpowder test, spirits that could ignite powder were proved, and the number stuck around after the chemistry got precise. When a label says 90 proof, the only information is 45% ABV."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The process terms that change the whiskey</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Cask strength / barrel proof: bottled without dilution, at whatever ABV the barrel delivered. More intensity per sip, and the option to proof it down yourself with water, which genuinely changes the aroma as volatile compounds come out of solution."}</li>
            <li>{"Chill filtration: chilling and fine-filtering removes fatty compounds that cloud the bottle when cold or diluted. Non-chill-filtered keeps more texture; the haze it can show is cosmetic, not a flaw."}</li>
            <li>{"Single barrel vs small batch: one barrel bottled alone versus a blend of a limited set. Single barrels vary, delightfully; small batch is a consistency strategy with a marketing name."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Reading a label like a spec sheet</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The high-information fields: ABV, age statement or its absence, barrel type and finish, and filtration. Higher ABV signals intensity, not quality; a well-made 43% beats a hot, unbalanced 60%. Age statements describe the youngest whiskey in the bottle, which is why no-age-statement releases can legally blend a drop of old stock into young whiskey and advertise the romance."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The practical move for cask strength bottles: taste at full proof, then add water a few drops at a time. You are doing the distillery's dilution step to your own palate, and it is the cheapest upgrade in the hobby."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Drink World - Helpful · whiskey-proof-terms-cask-strength · TastyTechBytes
      </footer>
    </div>
  );
}
