import { Link, data } from "react-router";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { getAllArticleCards } from "~/lib/articles-static.server";
import type { ArticleCard } from "~/types/article";

const HERO_IMAGE = "/fin8bit1.png";

export async function loader(_args: LoaderFunctionArgs) {
  const articles = getAllArticleCards();
  return data(
    { articles },
    {
      headers: {
        "Cache-Control": "public, max-age=600, stale-while-revalidate=1800",
      },
    },
  );
}

export const meta: MetaFunction = () => [
  { title: "Daily Correlations Archive — Tasty Tech Bytes" },
  {
    name: "description",
    content:
      "Archive of daily AI-generated market articles across stories, blogs, and correlations.",
  },
  { property: "og:title", content: "Daily Correlations Archive" },
  { property: "og:image", content: HERO_IMAGE },
];

function formatDate(ms: number): string {
  return new Date(ms).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function relativeTime(ms: number): string {
  const diff = Date.now() - ms;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

const GRADIENTS = [
  "from-purple-500 via-pink-500 to-red-500",
  "from-blue-500 via-cyan-500 to-teal-500",
  "from-emerald-500 via-green-500 to-lime-500",
  "from-orange-500 via-amber-500 to-yellow-500",
  "from-fuchsia-500 via-purple-500 to-indigo-500",
  "from-rose-500 via-pink-500 to-fuchsia-500",
];

function gradientFor(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) | 0;
  return GRADIENTS[Math.abs(hash) % GRADIENTS.length];
}

function FeaturedCard({ article }: { article: ArticleCard }) {
  const gradient = gradientFor(article.slug);
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group relative col-span-1 sm:col-span-2 lg:col-span-3 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95`} />
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="relative p-6 sm:p-10 text-white min-h-[260px] flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider">
            ★ Latest
          </span>
          <span className="rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold">
            {article.category}
          </span>
          <time className="text-xs font-medium opacity-90">
            {relativeTime(article.publishedAt)} · {formatDate(article.publishedAt)}
          </time>
        </div>
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-3 drop-shadow-sm group-hover:underline decoration-white/60 underline-offset-4">
            {article.title}
          </h2>
          <p className="text-base sm:text-lg opacity-95 line-clamp-2 max-w-3xl">
            {article.summary}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold">
            Read article
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ArchiveCard({ article, index }: { article: ArticleCard; index: number }) {
  const gradient = gradientFor(article.slug);
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-transparent"
    >
      <div className={`h-2 bg-gradient-to-r ${gradient}`} />
      <div className="flex flex-col p-5 flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-purple-700">
            {article.category}
          </span>
          <time className="text-[11px] font-medium text-gray-500" title={formatDate(article.publishedAt)}>
            {relativeTime(article.publishedAt)}
          </time>
        </div>
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 flex-1">{article.summary}</p>
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-mono">#{String(index + 1).padStart(3, "0")}</span>
          <span className="text-xs font-bold text-purple-600 inline-flex items-center gap-1">
            Read
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function CorrelationsArchive({
  loaderData,
}: {
  loaderData: { articles: ArticleCard[] };
}) {
  const { articles } = loaderData;
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <header className="relative overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.3),transparent_50%)]" />
        <div className="relative container mx-auto px-4 py-12 sm:py-16 text-white">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold opacity-80 hover:opacity-100 mb-6 transition-opacity"
          >
            ← Back to home
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl sm:text-4xl">📈</span>
            <span className="rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-widest">
              Daily Series
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
            Correlations Archive
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-2xl opacity-95">
            Daily-generated market articles. Each entry pinpoints the most
            extreme signal across asset pairs — agreement, divergence, or calm.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="rounded-lg bg-white/15 backdrop-blur px-4 py-2">
              <div className="text-xs opacity-80">Articles</div>
              <div className="text-xl font-extrabold">{articles.length}</div>
            </div>
            <div className="rounded-lg bg-white/15 backdrop-blur px-4 py-2">
              <div className="text-xs opacity-80">Latest</div>
              <div className="text-xl font-extrabold">
                {featured ? relativeTime(featured.publishedAt) : "—"}
              </div>
            </div>
            <div className="rounded-lg bg-white/15 backdrop-blur px-4 py-2">
              <div className="text-xs opacity-80">Updated</div>
              <div className="text-xl font-extrabold">Daily</div>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-10 sm:py-14">
        {articles.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
            <div className="text-5xl mb-4">📊</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              No correlation articles yet
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              The daily story pipeline hasn't published any articles to the cache.
              Check back after the next refresh.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-lg transition-shadow"
            >
              Go home
            </Link>
          </div>
        ) : (
          <>
            {featured && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <FeaturedCard article={featured} />
              </div>
            )}

            {rest.length > 0 && (
              <>
                <div className="flex items-baseline justify-between mb-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    Other articles today
                  </h2>
                  <span className="text-sm text-gray-500 font-medium">
                    {rest.length} {rest.length === 1 ? "entry" : "entries"}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {rest.map((article, i) => (
                    <ArchiveCard key={article.slug} article={article} index={i + 1} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </section>
    </main>
  );
}
