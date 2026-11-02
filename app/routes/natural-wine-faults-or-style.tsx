import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const TITLE = "Natural Wine: Brett, Mouse, and the Line Between Fault and Style";
const DESCRIPTION = "Low-intervention winemaking keeps compounds that conventional production removes. Some are character, some are spoilage, and the distinction is learnable.";

const ASCII_ART = `
╔══════════════════════════════════════════════════════╗
║ NATURAL WINE :: WHERE CHARACTER ENDS                 ║
║                                                      ║
║   brett:   barnyard ──► (dose matters)               ║
║   VA:      lift ──► nail polish                      ║
║   mouse:   aftertaste of cage ──► always a fault     ║
╚══════════════════════════════════════════════════════╝`;

export const meta: MetaFunction = () => [
  { title: `${TITLE} | TastyTechBytes` },
  { name: "description", content: DESCRIPTION },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function NaturalWineFaultsOrStyleArticle() {
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
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">What natural winemaking keeps in the glass</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"Conventional production uses selected yeasts, filtration, and sulfur to hit a consistent, clean profile. Natural producers farm organically and intervene minimally: native fermentations, little or no added sulfur, often unfiltered. The upside is vividness and variation; the cost is that spoilage organisms and unstable chemistry get less management."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"So the category contains both some of the most alive bottles being made and bottles that should not have been sold. Learning three compounds lets you tell which one you are holding."}</p>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">The three to know</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300">
            <li>{"Brettanomyces: barnyard, leather, band-aid aromas. At low levels many drinkers read it as savory complexity; at high levels it erases the fruit and the place. It is a spectrum, and where your line sits is legitimately taste."}</li>
            <li>{"Volatile acidity: a lifted, balsamic edge that becomes nail-polish remover as it climbs. A whisper can add brightness; you should never smell it from across the table."}</li>
            <li>{"Mouse: not an aroma but an aftertaste, a rodent-cage note that appears after swallowing and lingers. Caused by spoilage microbes, unstable in the bottle, and by near-universal agreement a fault, not a style. It can also worsen over days in an open bottle."}</li>
          </ul>
        </section>

        <section className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-green-500">Buying and drinking practically</h2>
          <p className="text-sm leading-relaxed text-gray-300">{"The format tells you the risk: p\u00e9t-nat and unfiltered bottles throw sediment and vary bottle to bottle, which is part of the deal. Buy from shops that store well and turn stock, because low-sulfur wine is less forgiving of heat. And if a bottle shows mouse or heavy VA, return it: a good natural-wine shop knows the difference between funky and spoiled and will treat the complaint as legitimate."}</p>
          <p className="text-sm leading-relaxed text-gray-300">{"The style debate is real, but the floor is technical: character is the presence of interesting compounds; a fault is the absence of the wine they were supposed to flavor."}</p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-sm text-green-400 hover:underline">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-800 bg-black py-6 text-center text-xs text-gray-600">
        Drink World - Helpful · natural-wine-faults-or-style · TastyTechBytes
      </footer>
    </div>
  );
}
