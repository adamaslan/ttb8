import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const ASCII_ART = `
╔══════════════════════════════════════════════════════════╗
║   ROBINHOOD :: AGENTIC TRADING                           ║
║                                                          ║
║   AI Agent (Claude / Cursor)                             ║
║     │                                                    ║
║     ├── MCP connection ──────────► Robinhood API         ║
║     │                                ├── equities ✓      ║
║     │                                ├── options (soon)  ║
║     │                                └── crypto  (soon)  ║
║     │                                                    ║
║     ├── agentic account ........... isolated funds       ║
║     ├── agentic credit card ....... spending limits      ║
║     └── kill switch .............. instant disconnect    ║
║                                                          ║
║   Every trade → push notification → you                  ║
╚══════════════════════════════════════════════════════════╝
`;

const TITLE = "Robinhood Launches Agentic Trading: AI Agents Can Now Execute Your Trades";
const DATE = "May 2026";
const SLUG = "robinhood-agentic-trading";

const bodyParagraphs = [
  "Robinhood just made AI agents into brokers. The company launched Agentic Trading on May 27, 2026 — a feature that lets you connect third-party AI agents like Claude or Cursor to your Robinhood account via the Model Context Protocol (MCP) and have them execute real stock trades on your behalf.",
  "This is not a chatbot that suggests what to buy. This is an AI that can build a portfolio, rebalance it, monitor sectors, and pull the trigger — autonomously, using real money. Robinhood built the plumbing; you supply the agent and the investment thesis.",
];

const features = [
  {
    name: "Dedicated agentic investment account",
    detail: "Agents operate from a separate account, isolated from your main portfolio. They can build and rebalance holdings, monitor sectors, and respond to market conditions — all without touching your primary balance.",
  },
  {
    name: "MCP integration — Claude, Cursor, and beyond",
    detail: "Robinhood exposes trading actions over the Model Context Protocol, letting any MCP-compatible agent (Claude, Cursor, or a custom build) authenticate and place orders. No proprietary SDK required.",
  },
  {
    name: "Equities now; options, crypto, futures next",
    detail: "Stock trading is live. Options, crypto, futures, and prediction markets are on the roadmap. The architecture is already in place — asset class support is what's being staged.",
  },
  {
    name: "Agentic Credit Card (Robinhood Gold)",
    detail: "A virtual credit card the AI can use for purchases. Customizable per-agent spending limits, 3% cash back, and the ability to auto-buy an asset when its price drops below a threshold the AI is watching.",
  },
];

const guardrails = [
  {
    name: "Fund isolation",
    detail: "Agents only see and move money in their dedicated agentic account or card. Your main portfolio balance is invisible to them.",
  },
  {
    name: "Push notifications on every trade",
    detail: "Every order placed by an agent fires a push notification to you in real time. A live activity feed shows the full trade history for each connected agent.",
  },
  {
    name: "Configurable approval thresholds",
    detail: "Set a dollar amount above which the agent must pause and wait for manual confirmation before executing. Below the threshold: autonomous. Above it: it asks first.",
  },
  {
    name: "Kill switch",
    detail: "One tap disconnects any agent instantly. It loses all access — no pending orders can complete after the switch fires.",
  },
];

const mcpExample = `// Pseudocode: connecting Claude to Robinhood via MCP
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 1024,
  tools: [
    {
      type: "computer_20250124",   // MCP tool surface
      name: "robinhood_trading",
      // Robinhood exposes: place_order, get_portfolio,
      //   get_quote, cancel_order, get_positions
    },
  ],
  messages: [
    {
      role: "user",
      content:
        "Monitor NVDA. If it drops more than 3% intraday, " +
        "buy $500 worth from the agentic account.",
    },
  ],
});

console.log(response.content);`;

const ibkrFeatures = [
  {
    name: "AI-Configured Stock Screener",
    ibkr: "Plain-language LLM filters in IBKR Desktop — e.g. \"mid-cap tech stocks with 20-50% revenue growth\" — translated directly into screener criteria.",
    robinhood: "No equivalent screener. Robinhood delegates research and filtering entirely to the connected agent.",
    edge: "IBKR",
  },
  {
    name: "MCP Server Integration",
    ibkr: "Already supports MCP servers connecting Claude to the TWS API — read live portfolio, fetch historical data, build and run trading scripts.",
    robinhood: "Also MCP-based, but with a purpose-built isolated account and a consumer-grade UX. IBKR's MCP is developer-configured; Robinhood's is app-level.",
    edge: "Tie — different audiences",
  },
  {
    name: "AI Portfolio Theme Analysis",
    ibkr: "Generative AI clusters equities into investment themes derived from macro events, SEC filings, and news feeds — useful for top-down research.",
    robinhood: "No native theme analysis. An agent could build this logic, but it's not provided out of the box.",
    edge: "IBKR",
  },
  {
    name: "Multilingual AI Client Assistant",
    ibkr: "Generative AI chatbot answers real-time capital queries — buying power, margin requirements, account routing — in multiple languages.",
    robinhood: "Standard support chatbot; no equivalent multi-language generative AI layer for account queries.",
    edge: "IBKR",
  },
  {
    name: "Algorithmic Trading API",
    ibkr: "IBridgePy and the TWS API let quant developers wire ML execution logic directly to IBKR's institutional liquidity. Full asset class support.",
    robinhood: "Agentic Trading is the API — but it's MCP-native and consumer-facing. No low-level order routing hooks yet; equities only at launch.",
    edge: "IBKR (depth) · Robinhood (accessibility)",
  },
  {
    name: "Retail UX and onboarding",
    ibkr: "Powerful but steep. MCP setup requires TWS, API keys, and developer configuration. Not designed for non-technical users.",
    robinhood: "Connect an agent in a few taps from the app. Dedicated account, kill switch, and push notifications are first-class features — not bolt-ons.",
    edge: "Robinhood",
  },
];

const watchItems = [
  "Robinhood's MCP server spec — what actions are exposed and what parameters they accept",
  "Options and crypto support timeline — equities is phase one; derivatives expand the agent's action surface significantly",
  "Third-party agent ecosystem — any MCP-compatible agent can plug in, so watch for specialized trading agents built on top of this",
  "Regulatory response — autonomous AI trading at consumer scale is novel territory for the SEC and FINRA",
  "Rate limits and order types — market orders vs. limit orders, how the agent handles partial fills, and what happens during halts",
];

export const meta: MetaFunction = () => [
  { title: TITLE },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: bodyParagraphs[0]?.slice(0, 160) ?? "" },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function RobinhoodAgenticTradingPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-black border-b border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <pre className="text-xs leading-tight font-mono overflow-x-auto text-green-400">{ASCII_ART}</pre>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <div>
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">AI News</span>
          <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
          <p className="text-sm text-gray-500 mt-1">{DATE}</p>
        </div>

        {/* Intro */}
        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          {bodyParagraphs.map((para, i) => (
            <p key={i} className="text-gray-300 leading-relaxed">{para}</p>
          ))}
        </section>

        {/* Features */}
        <section>
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">What Agentic Trading Includes</h2>
          <div className="space-y-2">
            {features.map((item) => (
              <div key={item.name} className="bg-gray-950 rounded-lg border border-gray-800 p-4">
                <div className="font-semibold text-green-400 text-sm mb-1">{item.name}</div>
                <div className="text-xs text-gray-400">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How MCP connects */}
        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">How the MCP Integration Works</h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Robinhood exposes its trading actions as an MCP server. Any agent that speaks MCP — Claude, Cursor, or a custom agent built on the Anthropic SDK — can authenticate with that server and call trading actions directly. The agent never touches your brokerage credentials; it works through Robinhood's own permissioned API surface, scoped to the agentic account only.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            MCP (Model Context Protocol) is the open standard from Anthropic that lets AI agents call external tools in a structured, auditable way. Robinhood adopting it means any MCP-compatible agent in the ecosystem gets Robinhood trading as a capability — no custom integration needed per agent.
          </p>
        </section>

        {/* Code sample */}
        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-4">Connecting an Agent — Rough Shape</h2>
          <p className="text-sm text-gray-300 mb-3">
            Robinhood hasn't published the full MCP server spec yet, but the pattern follows standard MCP tool use with the Anthropic SDK. Here's the approximate shape of what a connected agent call looks like:
          </p>
          <pre className="bg-black text-green-400 text-xs rounded-lg p-4 overflow-x-auto font-mono border border-gray-800">{mcpExample}</pre>
          <p className="text-xs text-gray-500 mt-3">
            The agent receives the portfolio state, evaluates the condition, and calls{" "}
            <code className="bg-gray-800 text-green-300 px-1 rounded">place_order</code> when the threshold is met.
            All of this runs in the agentic account — your main balance is untouched.
          </p>
        </section>

        {/* Safety guardrails */}
        <section>
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">Safety Guardrails</h2>
          <div className="space-y-2">
            {guardrails.map((item) => (
              <div key={item.name} className="bg-gray-950 rounded-lg border border-gray-800 p-4 flex justify-between items-start gap-4">
                <div>
                  <div className="font-semibold text-gray-100 text-sm">{item.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.detail}</div>
                </div>
                <span className="text-xs bg-gray-800 text-green-300 rounded-full px-2 py-1 shrink-0">✓ live</span>
              </div>
            ))}
          </div>
        </section>

        {/* Context */}
        <section className="bg-gray-950 rounded-xl border border-gray-700 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">Why This Is a Bigger Deal Than It Looks</h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Robinhood democratized commission-free trading in 2013. Agentic Trading is the same bet applied to AI: make autonomous investing accessible to anyone with an AI subscription, not just quant funds with proprietary infrastructure.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            The architectural choice matters. By building on MCP instead of a proprietary plugin format, Robinhood plugs into an ecosystem of agents that already exists. Claude, Cursor, and every other MCP-compatible tool becomes a potential Robinhood client. That's a distribution play, not just a feature.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            The risk is real too. Autonomous AI executing trades on retail accounts at scale is something regulators haven't formally addressed. How liability is allocated when an agent makes a bad trade — and whether the fund isolation and kill switch are sufficient — will be stress-tested as adoption grows.
          </p>
        </section>

        {/* IBKR comparison */}
        <section>
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">Robinhood vs. Interactive Brokers — AI Features Compared</h2>
          <p className="text-sm text-gray-400 mb-3 mt-2">
            IBKR has quietly built one of the deepest AI toolkits in retail brokerage. Robinhood's launch isn't ahead of the curve — it's bringing a simpler version of what IBKR already offers to a different audience entirely.
          </p>
          <div className="space-y-2">
            {ibkrFeatures.map((item) => (
              <div key={item.name} className="bg-gray-950 rounded-lg border border-gray-800 p-4">
                <div className="flex justify-between items-start gap-3 mb-2">
                  <div className="font-semibold text-gray-100 text-sm">{item.name}</div>
                  <span className="text-xs bg-gray-800 text-green-300 rounded-full px-2 py-1 shrink-0 whitespace-nowrap">{item.edge}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">IBKR</div>
                    <div className="text-xs text-gray-400">{item.ibkr}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Robinhood</div>
                    <div className="text-xs text-gray-400">{item.robinhood}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-3">
            The honest read: IBKR wins on depth, breadth, and asset classes. Robinhood wins on friction. A developer who wants to build a quant strategy on institutional liquidity should be on IBKR. A Robinhood Gold user who wants to point Claude at their account and let it DCA into ETFs should be on Robinhood. These products are converging, but they're not competing for the same user yet.
          </p>
        </section>

        {/* What to watch */}
        <section>
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">What to Watch</h2>
          <ul className="space-y-2">
            {watchItems.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="text-green-400 font-bold">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Resources */}
        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-green-400 font-bold mr-2">▸</span>
              <a href="https://robinhood.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Robinhood — robinhood.com</a>
            </li>
            <li>
              <span className="text-green-400 font-bold mr-2">▸</span>
              <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Model Context Protocol — modelcontextprotocol.io</a>
            </li>
            <li>
              <span className="text-green-400 font-bold mr-2">▸</span>
              <a href="https://docs.anthropic.com/en/api/getting-started" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Anthropic API — building MCP-compatible agents</a>
            </li>
          </ul>
        </section>

        <section className="text-sm text-gray-600">
          <span>Sources: </span>
          TechCrunch, CNBC, Bloomberg, Reuters, The Verge, WSJ — May 27, 2026
        </section>

        <p className="text-center">
          <Link to="/" className="text-green-400 hover:underline text-sm">← Back to Home</Link>
        </p>
      </main>

      <footer className="bg-black border-t border-gray-800 py-4 text-center text-xs text-gray-600">
        AI News · {SLUG} · TastyTechBytes
      </footer>
    </div>
  );
}
