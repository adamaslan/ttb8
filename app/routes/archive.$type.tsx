import { Link, data } from "react-router";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import {
  getArticleByType,
  getArticleRawByType,
  getArticleTypes,
  type ArticleType,
} from "~/lib/articles-static.server";
import type { FirestoreArticle } from "~/types/article";

const HERO_IMAGE = "/fin8bit1.png";

export async function loader({ params }: LoaderFunctionArgs) {
  const typeId = params.type as ArticleType | undefined;
  if (!typeId) throw data("Not found", { status: 404 });

  const types = getArticleTypes();
  const meta = types.find((t) => t.id === typeId);
  if (!meta) throw data("Article type not found", { status: 404 });

  const article = getArticleByType(typeId);
  const raw = getArticleRawByType(typeId);

  return data(
    { article, meta, raw, types },
    {
      headers: {
        "Cache-Control": "public, max-age=600, stale-while-revalidate=1800",
      },
    },
  );
}

export const meta: MetaFunction<typeof loader> = ({ data: loaderData }) => {
  if (!loaderData?.meta) return [{ title: "Article Type Not Found" }];
  const title = `${loaderData.meta.label} — Daily Archive`;
  return [
    { title },
    {
      name: "description",
      content: `Latest ${loaderData.meta.label.toLowerCase()} from the daily AI pipeline.`,
    },
    { property: "og:title", content: title },
    { property: "og:image", content: HERO_IMAGE },
  ];
};

const TYPE_GRADIENTS: Record<string, string> = {
  story: "from-purple-600 via-pink-600 to-rose-600",
  blog: "from-blue-600 via-cyan-600 to-teal-600",
  correlation: "from-emerald-600 via-green-600 to-lime-600",
  review: "from-orange-600 via-amber-600 to-yellow-600",
  morning: "from-fuchsia-600 via-purple-600 to-indigo-600",
  macro: "from-rose-600 via-pink-600 to-fuchsia-600",
  "ai-summary": "from-sky-600 via-blue-600 to-indigo-600",
};

function formatDate(ms: number): string {
  return new Date(ms).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function StructuredFields({
  data,
  exclude,
}: {
  data: Record<string, unknown>;
  exclude: Set<string>;
}) {
  const fields = Object.entries(data).filter(
    ([k, v]) => !exclude.has(k) && v != null && v !== "" && (typeof v !== "object" || (Array.isArray(v) ? v.length : Object.keys(v).length)),
  );
  if (fields.length === 0) return null;
  return (
    <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {fields.map(([k, v]) => (
        <div
          key={k}
          className="rounded-xl border border-gray-700 bg-gray-900 backdrop-blur p-4 shadow-sm"
        >
          <dt className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-1">
            {k.replace(/_/g, " ")}
          </dt>
          <dd className="text-sm text-gray-200 wrap-break-word">
            {typeof v === "string" || typeof v === "number" ? (
              String(v)
            ) : (
              <pre className="whitespace-pre-wrap font-mono text-[11px] text-gray-400 max-h-48 overflow-auto">
                {JSON.stringify(v, null, 2)}
              </pre>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function ArchiveTypePage({
  loaderData,
}: {
  loaderData: {
    article: FirestoreArticle | null;
    meta: { id: string; label: string; category: string };
    raw: { docId: string; data: Record<string, unknown> } | null;
    types: { id: string; label: string; category: string }[];
  };
}) {
  const { article, meta, raw, types } = loaderData;
  const gradient = TYPE_GRADIENTS[meta.id] ?? "from-slate-600 to-slate-800";

  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-gray-200">
        <div className={`absolute inset-0 bg-linear-to-br ${gradient}`} />
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="relative container mx-auto px-4 py-12 sm:py-16 text-white">
          <Link
            to="/archive"
            className="inline-flex items-center gap-2 text-sm font-semibold opacity-80 hover:opacity-100 mb-6 transition-opacity"
          >
            ← All article types
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-widest">
              {meta.category}
            </span>
            {article && (
              <time className="text-xs font-medium opacity-90">
                {formatDate(article.publishedAt)}
              </time>
            )}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight drop-shadow-sm">
            {article?.title ?? meta.label}
          </h1>
          {article?.summary && (
            <p className="mt-4 text-base sm:text-lg max-w-3xl opacity-95">
              {article.summary}
            </p>
          )}
        </div>
      </header>

      {/* Type tabs */}
      <nav className="border-b border-gray-800 bg-black/90 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {types.map((t) => (
              <Link
                key={t.id}
                to={`/archive/${t.id}`}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  t.id === meta.id
                    ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-md"
                    : "text-gray-400 hover:bg-gray-800"
                }`}
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-10 sm:py-14 max-w-4xl">
        {!article || !raw ? (
          <div className="rounded-2xl border-2 border-dashed border-gray-700 bg-gray-900 p-12 text-center">
            <div className="text-5xl mb-4">📭</div>
            <h2 className="text-xl font-bold text-white mb-2">
              No {meta.label.toLowerCase()} for today
            </h2>
            <p className="text-gray-400">
              The pipeline hasn't generated this article type yet. Check back
              later or pick another flavor.
            </p>
          </div>
        ) : (
          <>
            <article className="rounded-2xl bg-gray-900 border border-gray-700 shadow-md p-6 sm:p-10">
              {article.content ? (
                <div className="prose prose-invert prose-lg max-w-none">
                  {article.content.split(/\n{2,}/).map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 italic">
                  No prose body for this article — see structured data below.
                </p>
              )}
            </article>

            <details className="mt-8 rounded-xl border border-gray-700 bg-gray-900/60 backdrop-blur p-4">
              <summary className="cursor-pointer text-sm font-bold text-gray-300">
                Show structured fields ({Object.keys(raw.data).length})
              </summary>
              <StructuredFields
                data={raw.data}
                exclude={new Set(["title", "body", "summary", "slug", "date", "blog_title"])}
              />
              <p className="mt-4 text-[11px] text-gray-400 font-mono">
                Source: gcp3_cache · {raw.docId}
              </p>
            </details>
          </>
        )}
      </section>
    </main>
  );
}
