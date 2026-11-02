// Hand-maintained taxonomy for the four nav sections: culture / biotech / ai / finance.
//
// The `ai` section is served separately by /ai-articles (routes/ai-articles.tsx) and
// is intentionally NOT represented here. This module backs /culture, /biotech, and
// /finance — the three new section list pages.
//
// Each entry mirrors the card shape used by routes/ai-articles.tsx so the section
// pages can share one card component.

export type SectionArticle = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export type SectionId = "culture" | "biotech" | "finance";

export const SECTION_META: Record<
  SectionId,
  { label: string; emoji: string; blurb: string; accent: string }
> = {
  culture: {
    label: "Culture",
    emoji: "🎛️",
    blurb: "Tech where it meets music, gear, games, and the way people work.",
    accent: "from-pink-500 via-fuchsia-500 to-purple-500",
  },
  biotech: {
    label: "Biotech",
    emoji: "🧬",
    blurb: "Life sciences, hard-science hardware, and research that touches the body.",
    accent: "from-emerald-500 via-green-500 to-teal-500",
  },
  finance: {
    label: "Finance",
    emoji: "📈",
    blurb:
      "Markets, trading infrastructure, and the daily financial-tech article series.",
    accent: "from-blue-500 via-cyan-500 to-indigo-500",
  },
};

export const SECTION_ARTICLES: Record<SectionId, SectionArticle[]> = {
  culture: [
    {
      title: "LUFS and the End of the Loudness War: What Streaming Normalization Changed",
      description: "Streaming platforms normalize playback loudness, which diminished - but did not abolish - the incentive to master at maximum smash. Where normalization applies, dynamics are back on the menu.",
      link: "/loudness-normalization-lufs-streaming",
      image: "",
    },
    {
      title: "Field Recording in the City: Gear, Gain Staging, and Usable Chaos",
      description: "A city is the most overdriven input you will ever record. The skill is capturing range, from subway rumble to a street performer's detail, without clipping either end.",
      link: "/field-recording-city-soundscapes",
      image: "",
    },
    {
      title: "Modular Synths for Programmers: It's All Signal Flow",
      description: "A modular patch is a dataflow graph with cables. Oscillators are sources, filters are map operations, envelopes are scheduled events, and the clock is the event loop.",
      link: "/modular-synth-signal-flow-programmers",
      image: "",
    },
    {
      title:
        "Last.fm’s Independence: What Developers Should Know About the Platform’s Future",
      description:
        "Last.fm has officially gone independent. Discover what this means for your account, data, and the platform’s future as a standalone company.",
      link: "/lastfm-goes-independent-what-developers-need-to-know",
      image: "/lastfm-goes-independent-what-developers-need-to-know.jpg",
    },
    {
      title:
        "From Blender to Raycasting: How One Dev Built a 1990s FPS Cat Game by Hand",
      description:
        "Discover how a solo developer built Catlantean 3D, a 1990s-style FPS with 256 colors and software raycasting, entirely by hand.",
      link: "/how-one-dev-built-catlantean-3d-by-hand",
      image: "/how-one-dev-built-catlantean-3d-by-hand.jpg",
    },
    {
      title: "NAB 2023 Audio Video Gear",
      description:
        "A comprehensive review of the latest audio and video gear showcased at NAB 2023, highlighting innovations and must-have equipment.",
      link: "/nab-2023-audio-video-gear",
      image: "/soundsguy1.jpeg",
    },
    {
      title: "Using AirPods And Audacity Hack",
      description:
        "A clever hack to use AirPods with Audacity for improved audio recording and editing.",
      link: "/using-airpods-and-audacity-hack",
      image: "/airpods.jpeg",
    },
    {
      title: "What Are The Best Free Text To Speech Tools",
      description:
        "Discover the top free text-to-speech tools available, perfect for converting written content into natural-sounding audio.",
      link: "/what-are-the-best-free-text-to-speech-tools",
      image: "/text2speech.png",
    },
    {
      title: "Weirdinternetfacts",
      description:
        "Dive into a collection of bizarre and fascinating facts from the internet, guaranteed to surprise and entertain.",
      link: "/weirdinternetfacts",
      image: "/fish1.png",
    },
    {
      title: "Three Keys To Getting A Frontend Or Fullstack Job",
      description:
        "Unlock the secrets to landing a frontend or fullstack development job with these three crucial strategies.",
      link: "/threekeys-to-getting-a-frontend-or-fullstackjob",
      image: "/letters1.png",
    },
  ],
  biotech: [
    {
      title: "Finding CRISPR Off-Targets With Computation First",
      description: "Editing the wrong locus is the failure mode. Guide design is now a search-and-score problem, and the wet lab confirms what the pipeline ranks.",
      link: "/crispr-off-target-detection-computation",
      image: "",
    },
    {
      title: "5 Ways AI Can Help Farmland Restoration",
      description:
        "Explore how artificial intelligence can play a crucial role in restoring farmlands and promoting sustainable agriculture practices.",
      link: "/5-ways-ai-can-help-farmland-restoration",
      image: "/restoration.png",
    },
    {
      title: "IBM's Anderon Quantum Foundry Is a $2B Bet on 300mm Qubits",
      description:
        "IBM and the U.S. Department of Commerce are turning quantum computing into a manufacturing problem with Anderon, a standalone quantum foundry backed by a proposed $1B CHIPS award plus $1B from IBM.",
      link: "/ibm-anderon-quantum-foundry",
      image: "/ibm-anderon-quantum-foundry.png",
    },
    {
      title: "Take a Walk Before You Brainstorm: The Study Behind the Old Advice",
      description:
        "The old advice to take a walk when you're stuck has real lab backing. A 2014 Stanford study found walking measurably boosts divergent creative thinking in real time and shortly afterward.",
      link: "/walking-boosts-creativity-study",
      image: "/walking-boosts-creativity-study.png",
    },
  ],
  finance: [
    {
      title: "Scanning for Bollinger Bandwidth Squeezes",
      description: "Compression precedes expansion. A bandwidth squeeze scan finds coiled charts systematically, if you define compression before you look for it.",
      link: "/bollinger-bandwidth-squeeze-scanner",
      image: "",
    },
    {
      title: "Why Correlations Break Exactly When You Need Them",
      description: "Diversification is estimated on calm data and needed in storms. The breakdown is not bad luck; it is the structure of the estimate.",
      link: "/why-correlations-break-regime-shifts",
      image: "",
    },
    {
      title: "Your Backtest Is Overfit: Deflated Sharpe and the Multiple-Testing Problem",
      description: "Test enough variants and one will look great by chance. The fix is not a better strategy; it is honest accounting of how many tries you spent finding it.",
      link: "/backtest-overfitting-deflated-sharpe",
      image: "",
    },
    {
      title: "Reading a Limit Order Book: Microstructure for Builders",
      description: "The book is the market. Price, spread, and depth are outputs of a queueing system you can model with engineering instincts.",
      link: "/limit-order-book-mechanics",
      image: "",
    },
    {
      title: "ETF Creation and Redemption: The Mechanism Behind the Price",
      description: "ETFs track their holdings through an arbitrage loop run by authorized participants. Understanding the loop explains premiums, discounts, and when they matter.",
      link: "/etf-creation-redemption-mechanics",
      image: "",
    },
    {
      title: "VIX Futures Term Structure: Contango, Backwardation, and What It Costs",
      description: "Volatility futures usually slope upward, and that slope is a carrying cost on every long-vol position. The curve shape is the trade before the trade.",
      link: "/vix-term-structure-contango",
      image: "",
    },
    {
      title: "Post-Earnings Announcement Drift: The Slow-Motion Anomaly",
      description: "Markets underreact to earnings surprises, then catch up over weeks. PEAD is one of the oldest, most documented anomalies in the literature.",
      link: "/post-earnings-announcement-drift",
      image: "",
    },
    {
      title: "The 200-Day Regime Filter: What It Does and Does Not Protect Against",
      description: "Above the 200-day, hold risk; below it, step aside. The simplest regime filter in finance works on a specific kind of pain and fails on another.",
      link: "/regime-filter-200-day-average",
      image: "",
    },
    {
      title: "How To Invest In Whisky",
      description:
        "A guide to investing in whisky, covering market trends, valuation, and strategies for building a profitable collection.",
      link: "/how-to-invest-in-whisky",
      image: "/cask1.jpeg",
    },
    {
      title: "Robinhood’s Agentic Trading: AI Agents Get Direct Market Access",
      description:
        "Robinhood’s Agentic Trading enables AI agents like Claude and Cursor to execute stock trades via MCP, with safety guardrails and a virtual credit card for AI purchases.",
      link: "/robinhood-agentic-trading",
      image: "/robinhood-agentic-trading-ai-agents-get-market-access.jpg",
    },
    {
      title: "Smartbidder Diageo",
      description:
        "An analysis of Smartbidder's collaboration with Diageo, focusing on how technology optimizes bidding strategies in the beverage industry.",
      link: "/smartbidder-diageo",
      image: "/old-comp1.jpeg",
    },
    {
      title: "IPI Signal Report: Hourly Technical Confluence & Bollinger Scan",
      description:
        "Technical scan of Intrepid Potash ($IPI) across 189 hourly bars. Evaluates high-confidence bullish confluence (+11.0 net), Bollinger band ride, CMF buying pressure, and Ichimoku cloud support.",
      link: "/ipi-signal-report",
      image: "/sexysignal1.jpeg",
    },
    {
      title: "SNDK Signal Report: MA Stairstep Meets a Stretched 200SMA",
      description:
        "Technical scan of SanDisk ($SNDK) across 251 daily bars. A STRONG-strength MA alignment vs. a 60.5% extension above the 200SMA, plus a 5-40 day backtest answering whether to buy, wait, or skip it.",
      link: "/sndk-signal-report",
      image: "/sexysignal1.jpeg",
    },
  ],
};
