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
  ],
};
