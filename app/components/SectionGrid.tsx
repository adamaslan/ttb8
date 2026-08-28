import type { SectionArticle } from "~/lib/section-articles";

export function SectionGrid({ articles }: { articles: SectionArticle[] }) {
  if (articles.length === 0) {
    return (
      <p className="text-center text-gray-400">No articles in this section yet.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {articles.map((article) => (
        <div
          key={article.link}
          className="transform overflow-hidden rounded-lg bg-gray-900 shadow-md transition duration-300 hover:scale-105 hover:bg-gray-800"
        >
          <a href={article.link} className="block">
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold text-white">
                {article.title}
              </h2>
              <p className="text-sm text-gray-400">{article.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
