import { Link, useLocation } from "react-router";
import type { MetaFunction } from "react-router";
import { voicePrivateArticles } from "../lib/voice-private-ai";

export const meta: MetaFunction = ({ location }) => {
  const slug = location.pathname.replace(/^\//, "").replace(/\/$/, "");
  const article = voicePrivateArticles.find((item) => item.slug === slug);
  if (!article) return [{ title: "Article not found | TastyTechBytes" }];
  return [
    { title: `${article.title} | TastyTechBytes` },
    { name: "description", content: article.description },
    { property: "og:title", content: article.title },
    { property: "og:description", content: article.description },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary" },
  ];
};

export default function VoicePrivateArticle() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "").replace(/\/$/, "");
  const article = voicePrivateArticles.find((item) => item.slug === slug);
  if (!article) return <main className="p-8"><h1>Article not found</h1><Link to="/ai-articles">Back to AI articles</Link></main>;
  const related = voicePrivateArticles.filter((item) => item.category === article.category && item.slug !== slug);
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="border-b border-gray-800 py-6">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-green-400">TTB FIELD GUIDE / {article.category}</p>
          <pre className="overflow-x-auto rounded-xl border border-green-900 bg-green-950/20 p-4 font-mono text-[10px] leading-relaxed text-green-300 sm:text-xs">{article.diagram}</pre>
        </div>
      </header>
      <main className="mx-auto max-w-3xl space-y-8 px-4 py-8">
        <div className="space-y-4">
          <span className="inline-block rounded-full bg-purple-400 px-3 py-1 text-xs font-bold text-black">AI Tips / Tutorials</span>
          <h1 className="text-3xl font-bold leading-tight text-green-400 sm:text-4xl">{article.title}</h1>
          <p className="text-sm text-gray-400">November 10, 2026 · TastyTechBytes · {article.category}</p>
          <p className="text-lg leading-relaxed text-gray-200">{article.description}</p>
        </div>
        <section className="space-y-3 rounded-xl border border-green-900 bg-green-950/20 p-5" aria-label="Key takeaways">
          <h2 className="font-mono text-xs uppercase tracking-wider text-green-300">What to keep</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-200">{article.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        {article.sections.map((section, index) => (
          <section key={section.title} className="space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-5 sm:p-6">
            <h2 className="text-xl font-semibold leading-snug text-green-400">{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-7 text-gray-300">{paragraph}</p>)}
            {article.code && index === 2 ? <div className="space-y-2"><p className="text-xs text-gray-400">{article.code.label}</p><pre className="overflow-x-auto rounded-lg border border-gray-800 bg-black p-4 text-xs leading-relaxed text-green-200"><code>{article.code.text}</code></pre></div> : null}
          </section>
        ))}
        <section className="space-y-4 rounded-xl border border-gray-800 p-5 sm:p-6">
          <h2 className="text-xl font-semibold text-green-400">Sources and limits</h2>
          <p className="text-sm leading-relaxed text-gray-400">Sources checked November 10, 2026. Product behavior, licenses and policies can change. Design checklists are proposed engineering guidance, not a benchmark, security audit or legal opinion. Recheck the exact model, plan and terms before acting.</p>
          <ul className="list-disc space-y-3 pl-5 text-sm">{article.sources.map((source) => <li key={source.url}><a className="break-words text-green-300 underline decoration-green-800 underline-offset-4 hover:text-white" href={source.url} rel="noreferrer">{source.label}</a></li>)}</ul>
        </section>
        <nav aria-label={`More ${article.category} articles`} className="space-y-4 border-t border-gray-800 pt-6">
          <h2 className="text-xl font-semibold">More {article.category}</h2>
          <ul className="space-y-3">{related.map((item) => <li key={item.slug}><Link className="text-sm text-green-300 hover:underline" to={`/${item.slug}`}>{item.title}</Link></li>)}</ul>
          <p className="pt-4"><Link to="/ai-articles" className="text-sm text-green-400 hover:underline">Back to AI articles</Link><span className="px-3 text-gray-600">/</span><Link to="/" className="text-sm text-green-400 hover:underline">Home</Link></p>
        </nav>
      </main>
      <footer className="border-t border-gray-800 px-4 py-6 text-center text-xs text-gray-400">{article.category} · {article.slug} · TastyTechBytes</footer>
    </div>
  );
}
