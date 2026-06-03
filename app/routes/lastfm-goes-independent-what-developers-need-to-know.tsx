import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const ASCII_ART = `
╔══════════════════════════════════════════════════════════╗
║   LAST.FM :: NOW INDEPENDENT                             ║
║                                                          ║
║   [scrobble event]                                       ║
║     ├── artist: The National                             ║
║     ├── track: Bloodbuzz Ohio                            ║
║     └── timestamp: 2026-05-27T14:32:00Z                 ║
║                                                          ║
║   Corporate parent ──✗──► CBS / Paramount Global        ║
║   Now standalone   ──✓──► Last.fm Ltd                   ║
║                                                          ║
║   User accounts ........ ✓ unchanged                    ║
║   Scrobble history ..... ✓ intact                       ║
║   API access ........... ✓ operational                  ║
║   Roadmap .............. ▼ self-directed                ║
╚══════════════════════════════════════════════════════════╝
`;

const TITLE = "Last.fm Is Now Independent: What It Means for Developers and Users";
const DATE = "May 2026";
const SLUG = "lastfm-goes-independent-what-developers-need-to-know";

const bodyParagraphs = [
  "Last.fm has officially gone independent. After years under the umbrella of CBS and later Paramount Global, the platform that pioneered music scrobbling and social listening is now its own company. No accounts deleted, no data lost, no APIs going dark — just a structural change that hands the wheel back to the Last.fm team.",
  "For developers who have integrated the Last.fm API into apps, bots, or personal dashboards, this is good news wrapped in a clean announcement. The service continues operating as-is. What changes is who owns the company — and that opens a more interesting question: what does Last.fm do with its independence?",
];

const whatChanged = [
  {
    label: "Corporate parent",
    before: "CBS Interactive / Paramount Global",
    after: "Independent (Last.fm Ltd)",
  },
  {
    label: "Product & roadmap",
    before: "Subject to parent company priorities",
    after: "Fully self-directed",
  },
  {
    label: "User accounts",
    before: "Active",
    after: "Active — no action required",
  },
  {
    label: "Scrobble history",
    before: "Stored in Last.fm",
    after: "Stored in Last.fm — unchanged",
  },
  {
    label: "API access",
    before: "Operational",
    after: "Operational — same keys, same endpoints",
  },
];

const apiEndpoints = [
  {
    name: "user.getRecentTracks",
    desc: "Fetch a user's scrobble history. Still returns the same JSON shape.",
    url: "https://www.last.fm/api/show/user.getRecentTracks",
  },
  {
    name: "artist.getTopTracks",
    desc: "Top tracks for an artist by scrobble count. Unchanged.",
    url: "https://www.last.fm/api/show/artist.getTopTracks",
  },
  {
    name: "track.scrobble",
    desc: "Submit a scrobble via the authenticated write API. Still works.",
    url: "https://www.last.fm/api/show/track.scrobble",
  },
  {
    name: "user.getTopArtists",
    desc: "A user's most-scrobbled artists over a time period. Unchanged.",
    url: "https://www.last.fm/api/show/user.getTopArtists",
  },
];

const opportunities = [
  {
    name: "Faster iteration",
    detail: "Without a parent company's approval chain, Last.fm can ship API improvements and new features on its own timeline.",
  },
  {
    name: "Community alignment",
    detail: "The platform was always community-driven in spirit. Independence lets the team make decisions that serve users rather than quarterly reports.",
  },
  {
    name: "API investment",
    detail: "The API has stayed relatively static for years. Independence could unlock resources to improve docs, add endpoints, or raise rate limits.",
  },
  {
    name: "Open-source potential",
    detail: "Some independent platforms use their autonomy to open-source tooling or datasets. Last.fm's scrobble data is uniquely valuable for music ML — it's worth watching.",
  },
];

const sampleFetch = `// Fetch recent tracks for a Last.fm user
const API_KEY = process.env.LASTFM_API_KEY;
const user    = "your_lastfm_username";

const url = new URL("https://ws.audioscrobbler.com/2.0/");
url.searchParams.set("method", "user.getrecenttracks");
url.searchParams.set("user",   user);
url.searchParams.set("api_key", API_KEY);
url.searchParams.set("format", "json");
url.searchParams.set("limit",  "10");

const res  = await fetch(url.toString());
const data = await res.json();

for (const track of data.recenttracks.track) {
  console.log(track.artist["#text"], "—", track.name);
}`;

export const meta: MetaFunction = () => [
  { title: TITLE },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: bodyParagraphs[0]?.slice(0, 160) ?? "" },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function LastfmIndependentPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-black border-b border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <pre className="text-xs leading-tight font-mono overflow-x-auto text-green-400">{ASCII_ART}</pre>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <div>
          <span className="rounded-full bg-pink-600 px-3 py-1 text-sm font-bold text-white">Tech World</span>
          <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
          <p className="text-sm text-gray-500 mt-1">{DATE}</p>
        </div>

        {/* Intro */}
        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          {bodyParagraphs.map((para, i) => (
            <p key={i} className="text-gray-300 leading-relaxed">{para}</p>
          ))}
        </section>

        {/* What changed table */}
        <section>
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">What Changed vs. What Stayed the Same</h2>
          <div className="space-y-2">
            {whatChanged.map((row) => (
              <div key={row.label} className="bg-gray-950 rounded-lg border border-gray-800 p-4 flex justify-between items-start gap-4">
                <div>
                  <div className="font-semibold text-gray-100 text-sm">{row.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">Before: {row.before}</div>
                </div>
                <span className="text-xs bg-gray-800 text-green-300 rounded-full px-2 py-1 shrink-0 text-right max-w-[200px]">{row.after}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Context */}
        <section className="bg-gray-950 rounded-xl border border-gray-700 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">Some Context on Last.fm's History</h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Last.fm launched in 2002 and popularized the concept of "scrobbling" — automatically tracking every track you play and building a listening profile over time. CBS Interactive acquired it in 2007 for $280 million, back when streaming was barely a concept and music metadata was genuinely hard to aggregate at scale.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            As CBS became part of Paramount Global, Last.fm became a small asset in a very large media company. The platform continued running but didn't move fast. Independence means the team now has the mandate — and the obligation — to build Last.fm for the people who actually use it.
          </p>
        </section>

        {/* API endpoints */}
        <section>
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">Key API Endpoints (Still Operational)</h2>
          <div className="space-y-2">
            {apiEndpoints.map((ep) => (
              <div key={ep.name} className="bg-gray-950 rounded-lg border border-gray-800 p-4">
                <div className="font-semibold text-green-400 text-sm mb-1">
                  <a href={ep.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{ep.name}</a>
                </div>
                <div className="text-xs text-gray-400">{ep.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Code sample */}
        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-4">Fetching Scrobbles — Nothing to Migrate</h2>
          <p className="text-sm text-gray-300 mb-3">If you're already calling the Last.fm API, your integration survives this transition with zero changes. Your API key still works. The base URL is the same.</p>
          <pre className="bg-black text-green-400 text-xs rounded-lg p-4 overflow-x-auto font-mono border border-gray-800">{sampleFetch}</pre>
          <p className="text-xs text-gray-500 mt-3">
            Get a free API key at{" "}
            <a href="https://www.last.fm/api/account/create" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">last.fm/api/account/create</a>.
            Rate limits remain at 5 requests/second per API key.
          </p>
        </section>

        {/* Opportunities */}
        <section>
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-3">What Independence Could Unlock</h2>
          <div className="space-y-2">
            {opportunities.map((item) => (
              <div key={item.name} className="bg-gray-950 rounded-lg border border-gray-800 p-4">
                <div className="font-semibold text-green-400 text-sm mb-1">{item.name}</div>
                <div className="text-xs text-gray-400">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What to watch */}
        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">What to Watch</h2>
          <ul className="space-y-2">
            {[
              "API changelog at last.fm/api — watch for new endpoints or rate limit increases",
              "The Last.fm blog for product direction announcements",
              "Any changes to the authentication flow (the existing OAuth2-style auth has been stable for years)",
              "Community posts on the Last.fm support forum for early signals on upcoming changes",
            ].map((item, i) => (
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
              <a href="https://support.last.fm/t/last-fm-is-now-independent/118591" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Official announcement — Last.fm Support Forum</a>
            </li>
            <li>
              <span className="text-green-400 font-bold mr-2">▸</span>
              <a href="https://www.last.fm/api" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Last.fm API documentation</a>
            </li>
            <li>
              <span className="text-green-400 font-bold mr-2">▸</span>
              <a href="https://www.last.fm/api/account/create" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Create a free Last.fm API key</a>
            </li>
          </ul>
        </section>

        <section className="text-sm text-gray-600">
          <span>Source: </span>
          <a
            href="https://support.last.fm/t/last-fm-is-now-independent/118591"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            last.fm/support — Last.fm Is Now Independent
          </a>
        </section>

        <p className="text-center">
          <Link to="/" className="text-green-400 hover:underline text-sm">← Back to Home</Link>
        </p>
      </main>

      <footer className="bg-black border-t border-gray-800 py-4 text-center text-xs text-gray-600">
        Tech World · {SLUG} · TastyTechBytes
      </footer>
    </div>
  );
}
