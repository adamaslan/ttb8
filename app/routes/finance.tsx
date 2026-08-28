import { Link, data } from "react-router";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { SectionGrid } from "~/components/SectionGrid";
import { SECTION_ARTICLES, SECTION_META } from "~/lib/section-articles";
import { getAllArticleCards } from "~/lib/articles-static.server";
import type { ArticleCard } from "~/types/article";

const META = SECTION_META.finance;

export async function loader(_args: LoaderFunctionArgs) {
  const dailyArticles = getAllArticleCards();
  return data(
    { dailyArticles },
    {
      headers: {
        "Cache-Control": "public, max-age=600, stale-while-revalidate=1800",
      },
    },
  );
}

export const meta: MetaFunction = () => [
  { title: `${META.label} — Tasty Tech Bytes` },
  { name: "description", content: META.blurb },
];

function formatDate(ms: number): string {
  return new Date(ms).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function FinanceSection({
  loaderData,
}: {
  loaderData: { dailyArticles: ArticleCard[] };
}) {
  const { dailyArticles } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white">
          <span className="mr-2">{META.emoji}</span>
          {META.label}
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-gray-400">{META.blurb}</p>
      </header>

      {dailyArticles.length > 0 && (
        <section className="mb-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-2xl font-extrabold text-white">
              Daily Financial Tech Articles
            </h2>
            <Link
              to="/correlations-archive"
              className="text-xs font-bold uppercase tracking-wider text-blue-400 underline hover:text-blue-300"
            >
              View full archive →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dailyArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="group flex flex-col rounded-xl border border-gray-700 bg-gray-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full border border-blue-700 bg-blue-900 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-blue-300">
                    {article.category}
                  </span>
                  <time className="text-[11px] font-medium text-gray-400">
                    {formatDate(article.publishedAt)}
                  </time>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white group-hover:text-blue-400">
                  {article.title}
                </h3>
                <p className="line-clamp-3 flex-1 text-sm text-gray-400">
                  {article.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-4 text-2xl font-extrabold text-white">
          More on markets &amp; money
        </h2>
        <SectionGrid articles={SECTION_ARTICLES.finance} />
      </section>
    </div>
  );
}
