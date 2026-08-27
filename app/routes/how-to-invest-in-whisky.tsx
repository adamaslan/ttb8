import { Link } from "react-router";
import cask from "/cask1.jpeg";
import type { MetaFunction } from "react-router";

const TITLE = "3 Ways to Invest in Whiskey";
const DESC = "Discover three proven strategies for investing in whiskey: rare bottle collections, barrel investments through BlockApps, and fractional cask ownership via Vino Vest.";
const SLUG = "how-to-invest-in-whisky";
const CATEGORY = "Lifestyle";
const AUTHOR = "Adam Timur Aslan";

export const meta: MetaFunction = () => {
  return [
    { title: TITLE },
    { name: "description", content: DESC },
    { property: "og:image", content: cask },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESC },
    { property: "og:type", content: "article" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: TITLE },
    { property: "twitter:description", content: DESC },
    { property: "twitter:image", content: cask },
    { name: "keywords", content: "Whiskey, Investment, Rare Whiskey, Whiskey Barrels, Whiskey Casks, BlockApps, Vino Vest, Whiskey Appreciation, Whiskey History, Whiskey Market, Japanese Whiskey, Ardbeg, Bowmore, Glenfarclas, Glenfiddich, Laphroaig, Lagavulin, Rosebank, Yamazaki" }
  ];
};

export default function HowToInvestInWhisky() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-black border-b border-gray-800 py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
            {CATEGORY}
          </span>
          <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
          <p className="text-sm text-gray-500 mt-1">
            by <span className="text-gray-300">{AUTHOR}</span>
          </p>
          <p className="mt-4 flex items-start gap-2 font-mono text-xs sm:text-sm text-green-400/90 tracking-tight">
            <span className="text-green-500 font-bold shrink-0">▸</span>
            Discover three proven strategies for investing in whiskey.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <img
          className="w-full rounded-xl border border-gray-800"
          src={cask}
          alt="whiskey barrels"
        />

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Introduction
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Over 500 years of whiskey history makes one think, "wow, I bet there are some rare whiskeys out there." With so much culture surrounding whiskey, it seems a bottle’s narrative could drive its value through the roof if it was found in a shipwreck of a famous captain, in a secret chamber in a palace, or dating back to a time previously unknown to even be distilling whiskey.
          </p>
        </section>
        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Rare Bottle Collections
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            The reasons for rarities are endless, but thanks to <a href="https://www.rarewhiskey101.com/" className="text-green-400 hover:underline">Rare Whiskey 101</a> it is easy to track the price of these rare whiskeys making them more of an asset than a commodity. With market performance indices tracking broader markets like Japanese whiskey, its easy to get an overarching perspective on the whiskey market. They also have a database of distillery specific indices of over 24 brands including Ardbeg, Bowmore, Glenfarclas, Glenfiddich, Laphroaig, Lagavulin, Rosebank, and Yamazaki.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Barrel Investments
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Another way of investing in whiskey is to buy <a href="https://www.forbes.com/sites/forbesfinancecouncil/2023/10/18/5-things-to-know-when-investing-in-whiskey-bottles-or-barrels/" className="text-green-400 hover:underline">barrels</a>. One way is thru <a href="https://marketplace.mercata.blockapps.net/dp/0a3a3d282806135273d9e68d8b981d923461eadb/The%20Deuces%20Wild%20Collection%20-%20Whiskey%20Casks" className="text-green-400 hover:underline">BlockApps</a>, and their collaboration with Connecticut Distilling to create the Deuces Wild Collection. You can buy multiple casks and 2 years of cask storage are included with purchase.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            You can also purchase casks with <a href="https://www.vinovest.co/" className="text-green-400 hover:underline">Vino Vest</a>, who offer a service to bottle the whiskey from your cask.
          </p>
        </section>


        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            The Verdict
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Whether you are purchasing a rare whiskey or an entire cask, the returns on these items have a clear track record of appreciation. For more information on Connecticut Distilling visit their website <a href="https://www.ctdistillingco.com/" className="text-green-400 hover:underline">here</a>.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            For more information on Block Apps visit their website <a href="https://blockapps.net/" className="text-green-400 hover:underline">here</a>.
          </p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-green-400 hover:underline text-sm">
            ← Back to Home
          </Link>
        </p>
      </main>

      <footer className="bg-black border-t border-gray-800 py-4 text-center text-xs text-gray-600">
        {CATEGORY} · {SLUG} · TastyTechBytes
      </footer>
    </div>
  );
}
