# create-correlation-article

Generate an ASCII art header image and a ttb8 article route based on correlation data from the gcp3 CorrelationArticle component.

## What this command does

1. Reads the `CorrelationArticleData` shape from `/Users/adamaslan/code/gcp3/frontend/src/components/CorrelationArticle.tsx`
2. Asks the user to paste in (or describe) the correlation data they want the article to cover — or uses a provided `$ARGUMENTS` slug/topic
3. Generates an ASCII art banner matching the article topic
4. Creates `app/routes/<slug>.tsx` in ttb8 with the article content and ASCII art embedded
5. Registers the route in `app/routes.ts`
6. Runs `npm run typecheck` to verify no errors

## Instructions

The user may invoke this as:
```
/create-correlation-article <slug>
```
Where `<slug>` is a kebab-case URL slug for the article (e.g. `market-correlations-apr-2026`).
If no slug is given, derive one from today's date: `market-correlations-YYYY-MM`.

### Step 1 — Gather content

Ask the user: "Paste the correlation data JSON, or describe the market pairs and signals you want covered."

If they provide JSON matching `CorrelationArticleData`, extract:
- `title` → article `<h1>`
- `date` → subtitle
- `body` → main article paragraphs (split on `\n\n`)
- `focus_pairs` → signal cards (agreement = green, divergence = red, neutral = gray)
- `correlation_snapshot` → summary badges (agreements / divergences / neutral counts)
- `sources_used` → data sources tags
- `news_articles` → supporting news links

If they provide a description, synthesize realistic placeholder content in that shape.

### Step 2 — Generate ASCII art

Create an ASCII art banner for `public/<slug>.txt` that visually represents the article topic. Use characters like `█`, `▓`, `░`, `╔═╗`, `║`, `╚═╝`, `▲`, `▼`, `◆` to draw a meaningful image — for a correlations/market article, draw a correlation chart, network graph, or trend lines.

Example style for a market correlation theme:
```
╔══════════════════════════════════════╗
║  MARKET CORRELATIONS                 ║
║                                      ║
║   A ──┐                              ║
║       ├──► AGREEMENT ◆               ║
║   B ──┘                              ║
║                                      ║
║   C ──X──  DIVERGENCE ▼              ║
║                                      ║
╚══════════════════════════════════════╝
```

Save to `public/<slug>-ascii.txt` so it can be served statically.

Also embed the ASCII art in the route as a `<pre>` block for display in the article header.

### Step 3 — Create the route file

Create `app/routes/<slug>.tsx` following this pattern:

```tsx
import type { MetaFunction } from "react-router";
import { Link } from "react-router";

const ASCII_ART = `
<paste generated ASCII art here>
`;

const TITLE = "<article title from data.title>";
const DATE = "<data.date>";
const SLUG = "<slug>";

const focusPairs = [
  // { pair_id, signal, score, summary } objects from data.focus_pairs
];

const snapshot = { agreements: N, divergences: N, neutral: N };

const bodyParagraphs = [
  // strings split from data.body on \n\n
];

const sources = [/* data.sources_used */];

const newsArticles = [
  // { headline, source, url, summary } from data.news_articles
];

const SIGNAL_STYLES: Record<string, string> = {
  agreement: "border-green-300 bg-green-50",
  divergence: "border-red-300 bg-red-50",
  neutral: "border-gray-300 bg-gray-50",
};

const SIGNAL_TEXT: Record<string, string> = {
  agreement: "text-green-700",
  divergence: "text-red-700",
  neutral: "text-gray-600",
};

export const meta: MetaFunction = () => [
  { title: TITLE },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: bodyParagraphs[0]?.slice(0, 160) ?? "" },
  { property: "og:type", content: "article" },
  { property: "twitter:card", content: "summary" },
];

export default function CorrelationArticlePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* ASCII art header */}
      <header className="bg-gray-900 text-green-400 py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <pre className="text-xs leading-tight font-mono overflow-x-auto">{ASCII_ART}</pre>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{TITLE}</h1>
          <p className="text-sm text-gray-500 mt-1">{DATE}</p>
        </div>

        {/* Snapshot badges */}
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="px-3 py-1 rounded-full border border-green-300 bg-green-50 text-green-700 font-semibold">
            {snapshot.agreements} agreements
          </span>
          <span className="px-3 py-1 rounded-full border border-red-300 bg-red-50 text-red-700 font-semibold">
            {snapshot.divergences} divergences
          </span>
          <span className="px-3 py-1 rounded-full border border-gray-300 bg-gray-50 text-gray-600 font-semibold">
            {snapshot.neutral} neutral
          </span>
        </div>

        {/* Focus pairs */}
        <section>
          <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">Focus Correlations</h2>
          <div className="space-y-2">
            {focusPairs.map((pair) => (
              <div key={pair.pair_id} className={`p-4 rounded-lg border ${SIGNAL_STYLES[pair.signal] ?? ""}`}>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="text-xs font-mono text-gray-500">{pair.pair_id}</div>
                    <p className="text-sm text-gray-800 mt-1">{pair.summary}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`text-sm font-semibold capitalize ${SIGNAL_TEXT[pair.signal] ?? ""}`}>
                      {pair.signal}
                    </span>
                    <div className="text-xs text-gray-400 mt-0.5">{pair.score.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Article body */}
        <section className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-4">Article</h2>
          <div className="space-y-3">
            {bodyParagraphs.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* Sources */}
        {sources.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Data Sources</h2>
            <div className="flex flex-wrap gap-2">
              {sources.map((s) => (
                <span key={s} className="px-2 py-1 rounded bg-gray-200 text-gray-700 text-xs capitalize">
                  {s.replace("-", " ")}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* News */}
        {newsArticles.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-3">Supporting News</h2>
            <div className="space-y-2">
              {newsArticles.map((article, i) => (
                <a
                  key={i}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg border border-purple-200 bg-purple-50 hover:border-purple-400 transition-colors"
                >
                  <div className="text-xs font-semibold text-purple-600">{article.source}</div>
                  <p className="text-sm font-semibold text-gray-800 mt-1">{article.headline}</p>
                  {article.summary && <p className="text-xs text-gray-500 mt-1">{article.summary}</p>}
                </a>
              ))}
            </div>
          </section>
        )}

        <p className="text-center">
          <Link to="/" className="text-blue-500 hover:underline text-sm">← Back to Home</Link>
        </p>
      </main>

      <footer className="bg-gray-200 py-4 text-center text-xs text-gray-500">
        Correlation article generated by analyzing cross-source market patterns and news.
      </footer>
    </div>
  );
}
```

### Step 4 — Register the route

Add to `app/routes.ts` inside the array:
```ts
route("<slug>", "./routes/<slug>.tsx"),
```

### Step 5 — Typecheck

```bash
npm run typecheck
```

Fix any TypeScript errors before finishing.

### Step 6 — Report back

Tell the user:
- Route URL: `/<slug>`
- ASCII art saved to: `public/<slug>-ascii.txt`
- Files created/modified: route file + routes.ts
- Next step: `npm run dev` then visit the URL to preview
