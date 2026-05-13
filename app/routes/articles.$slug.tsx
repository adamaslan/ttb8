import sanitizeHtml from "sanitize-html";
import { Link, data } from "react-router";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { getAllArticleCards, getArticleByType, getArticleTypes } from "~/lib/articles-static.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;
  if (!slug) throw data("Not found", { status: 404 });

  const cards = getAllArticleCards();
  const card = cards.find((c) => c.slug === slug);
  if (!card) throw data("Article not found", { status: 404 });

  const types = getArticleTypes();
  const matchedType = types.find((t) => t.category === card.category);
  const article = matchedType ? getArticleByType(matchedType.id) : null;
  if (!article) throw data("Article not found", { status: 404 });

  const otherCards = cards.filter((c) => c.slug !== article.slug);

  return data(
    { article, otherCards },
    {
      headers: {
        "Cache-Control": "public, max-age=300, stale-while-revalidate=600",
      },
    }
  );
}

export const meta: MetaFunction<typeof loader> = ({ data: loaderData }) => {
  if (!loaderData?.article) return [{ title: "Article Not Found" }];
  return [
    { title: loaderData.article.title },
    { name: "description", content: loaderData.article.summary },
    { property: "og:title", content: loaderData.article.title },
    { property: "og:description", content: loaderData.article.summary },
  ];
};

type LoaderData = {
  article: import("~/types/article").FirestoreArticle;
  otherCards: import("~/types/article").ArticleCard[];
};

function toneColor(tone: string): string {
  const t = tone.toLowerCase();
  if (t === "bullish" || t === "positive") return "text-green-600";
  if (t === "bearish" || t === "negative") return "text-red-600";
  return "text-yellow-600";
}

function breadthColor(pct: number): string {
  if (pct > 5) return "text-green-600";
  if (pct < -5) return "text-red-600";
  return "text-yellow-600";
}

function AiSummaryLayout({ article }: { article: import("~/types/article").FirestoreArticle }) {
  const ai = article.aiSummary;
  if (!ai) return null;
  const publishDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  const paragraphs = article.content.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-3">
        <Link to="/correlations-archive" className="text-sm font-bold text-purple-600 hover:underline">
          ← All Articles
        </Link>
        <span className="rounded-full bg-purple-400 px-3 py-1 text-sm font-bold text-white">
          {article.category}
        </span>
        <span className="text-sm text-gray-400">{publishDate}</span>
      </div>

      <h1 className="text-3xl font-bold mb-3 lg:text-4xl">{article.title}</h1>

      {/* Snapshot strip */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-center">
          <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">Regime</div>
          <div className="font-semibold text-white text-sm">{ai.macro_regime}</div>
        </div>
        <div className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-center">
          <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">Tone</div>
          <div className={`font-semibold text-sm capitalize ${toneColor(ai.market_tone)}`}>
            {ai.market_tone}
          </div>
        </div>
        <div className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-center">
          <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">Breadth</div>
          <div className={`font-semibold text-sm ${breadthColor(ai.breadth_pct)}`}>
            {ai.breadth_pct > 0 ? "+" : ""}{ai.breadth_pct.toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Sector bars */}
      {(ai.leading_sectors.length > 0 || ai.lagging_sectors.length > 0) && (
        <div className="flex gap-4 mb-8">
          {ai.leading_sectors.length > 0 && (
            <div className="flex-1 rounded-lg border border-green-800 bg-green-950 px-4 py-3">
              <div className="text-xs uppercase tracking-wide text-green-400 font-semibold mb-2">Leading</div>
              <div className="flex flex-wrap gap-1">
                {ai.leading_sectors.map((s) => (
                  <span key={s} className="text-xs bg-green-900 text-green-300 rounded-full px-2 py-0.5">{s}</span>
                ))}
              </div>
            </div>
          )}
          {ai.lagging_sectors.length > 0 && (
            <div className="flex-1 rounded-lg border border-red-800 bg-red-950 px-4 py-3">
              <div className="text-xs uppercase tracking-wide text-red-400 font-semibold mb-2">Lagging</div>
              <div className="flex flex-wrap gap-1">
                {ai.lagging_sectors.map((s) => (
                  <span key={s} className="text-xs bg-red-900 text-red-300 rounded-full px-2 py-0.5">{s}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Brief prose */}
      <div className="prose prose-lg max-w-none">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </main>
  );
}

function StandardLayout({ article }: { article: import("~/types/article").FirestoreArticle }) {
  const publishDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/correlations-archive" className="text-sm font-bold text-purple-600 hover:underline">
          ← All Articles
        </Link>
        <div className="mt-3 flex items-center gap-3">
          <span className="rounded-full bg-purple-400 px-3 py-1 text-sm font-bold text-white">
            {article.category}
          </span>
          <span className="text-sm text-gray-400">{publishDate}</span>
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4 lg:text-4xl">{article.title}</h1>
      <p className="text-lg text-gray-300 mb-8">{article.summary}</p>

      {article.contentFormat === "html" ? (
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
        />
      ) : (
        <div className="prose prose-lg max-w-none">
          {article.content
            .split(/\n{2,}/)
            .map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
        </div>
      )}

      {article.extreme_pair && (
        <aside className={`mt-8 border rounded-lg px-4 py-3 text-sm ${
          article.extreme_pair.signal === "divergence"
            ? "border-red-800 bg-red-950 text-red-300"
            : article.extreme_pair.signal === "agreement"
            ? "border-green-800 bg-green-950 text-green-300"
            : "border-gray-700 bg-gray-900 text-gray-300"
        }`}>
          <div className="font-semibold uppercase tracking-wide text-xs mb-1">
            {article.extreme_pair.signal} — {article.extreme_pair.pair_id}
          </div>
          <div>
            {article.extreme_pair.source_a.replace(/-/g, " ")} vs{" "}
            {article.extreme_pair.source_b.replace(/-/g, " ")} · score{" "}
            {Math.abs(article.extreme_pair.score).toFixed(2)}
          </div>
          <div className="mt-1 opacity-80">{article.extreme_pair.summary}</div>
        </aside>
      )}
    </main>
  );
}

export default function ArticlePage({ loaderData }: { loaderData: LoaderData }) {
  const { article, otherCards } = loaderData;
  const isAiSummary = article.category === "AI Summary";

  return (
    <>
      {isAiSummary ? (
        <AiSummaryLayout article={article} />
      ) : (
        <StandardLayout article={article} />
      )}

      {otherCards.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">More Today</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {otherCards.map((c) => (
              <Link
                key={c.slug}
                to={`/articles/${c.slug}`}
                className="block rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 hover:border-purple-600 hover:bg-gray-800 transition-colors"
              >
                <div className="text-xs font-semibold text-purple-400 mb-1">{c.category}</div>
                <div className="font-medium text-white text-sm leading-snug line-clamp-2">{c.title}</div>
                <div className="text-xs text-gray-400 mt-1 line-clamp-2">{c.summary}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
