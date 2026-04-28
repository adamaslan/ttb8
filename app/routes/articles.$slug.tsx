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

  return data(
    { article },
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

export default function ArticlePage({
  loaderData,
}: {
  loaderData: { article: import("~/types/article").FirestoreArticle };
}) {
  const { article } = loaderData;
  const publishDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          to="/correlations-archive"
          className="text-sm font-bold text-purple-600 hover:underline"
        >
          ← All Correlations
        </Link>
        <div className="mt-3">
          <span className="rounded-full bg-purple-400 px-3 py-1 text-sm font-bold text-white">
            {article.category}
          </span>
          <p className="mt-2 text-sm text-gray-500">{publishDate}</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-4 lg:text-4xl">{article.title}</h1>
      <p className="text-lg text-gray-600 mb-8">{article.summary}</p>
      {article.contentFormat === "html" ? (
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      ) : (
        // Plain-text / prose body from story_picker — render as paragraphs
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
            ? "border-red-300 bg-red-50 text-red-800"
            : article.extreme_pair.signal === "agreement"
            ? "border-green-300 bg-green-50 text-green-800"
            : "border-gray-300 bg-gray-50 text-gray-700"
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
