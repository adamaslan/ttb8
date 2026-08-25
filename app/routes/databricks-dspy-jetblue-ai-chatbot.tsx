import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/databricks.png";

const TITLE = "JetBlue Optimizes Databricks LLM Pipelines with DSPy";
const DESC = "Discover how DSPy revolutionizes machine learning workflows with self-improving pipelines and how JetBlue leverages Databricks to achieve enhanced efficiency and reduced costs.";
const SLUG = "databricks-dspy-jetblue-ai-chatbot";
const CATEGORY = "AI";
const AUTHOR = "Adam Timur Aslan";

export const meta: MetaFunction = () => {
  return [
    { title: TITLE },
    { name: "description", content: DESC },
  ];
};

export default function Article12() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-black border-b border-gray-800 py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
            {CATEGORY}
          </span>
          <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
          <p className="text-sm text-gray-500 mt-1">
            by <span className="text-gray-300">{AUTHOR}</span>
          </p>
          <p className="mt-4 flex items-start gap-2 font-mono text-xs sm:text-sm text-green-400/90 tracking-tight">
            <span className="text-green-500 font-bold shrink-0">▸</span>
            Self-improving LLM pipelines powering next-generation AI applications.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <img
          className="w-full rounded-xl border border-gray-800"
          src={hero}
          alt="databricks"
        />

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Overview
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            The integration of DSPy and Databricks is revolutionizing machine learning workflows by introducing self-improving pipelines, simplifying data preparation, and optimizing large language model (LLM) performance. Learn how DSPy transforms LLM pipelines and read more in the original Databricks article <a href="https://www.databricks.com/blog/optimizing-databricks-llm-pipelines-dspy" className="text-green-400 hover:underline">here</a>.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Key Insights
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            The Databricks article highlights the groundbreaking nature of DSPy's pipeline optimization, including:
          </p>
          <ul className="space-y-2 text-gray-300 leading-relaxed text-sm list-disc pl-5">
            <li>Automated, self-improving pipelines that refine prompts to improve LLM responses.</li>
            <li>Streamlined support for retrieval-augmented generation (RAG) in various workflows.</li>
            <li>Enhanced compatibility with Databricks tools, such as Model Serving and Vector Search.</li>
          </ul>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            DSPy Deep Dive
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Released in October 2023, DSPy was developed by researchers in Matei Zaharia's Stanford lab. It empowers users to build modular systems that optimize LLM workflows and enables automated tuning for downstream performance improvements. For details, read their research paper <a href="https://arxiv.org/abs/2310.03714" className="text-green-400 hover:underline">here</a>.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            DSPy allows developers to construct complex LLM pipelines that adapt dynamically to evolving requirements, making traditional manual prompt-tuning redundant. For more on its retrieval capabilities, check out our deep-dive on <Link to="/5-ways-to-enhance-rag-efficiency-with-dspy" className="text-green-400 hover:underline">Five Ways to Enhance RAG Efficiency with DSPy</Link>.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            Developers can seamlessly integrate DSPy with Databricks Marketplace models like Llama 2 70B, enabling faster deployment of pipelines such as customer feedback classification or predictive maintenance chatbots.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            JetBlue Partnership
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            <a href="https://www.jetblue.com" className="text-green-400 hover:underline">JetBlue</a> is leveraging DSPy's self-optimizing pipelines to achieve enhanced efficiency and reduced costs. Their integration highlights DSPy's role in driving innovation in real-world applications.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            JetBlue Use Cases
          </h2>
          <ul className="space-y-3 text-gray-300 leading-relaxed text-sm">
            <li><span className="text-gray-100">Improved Control, Dynamic Updates, and Cost Reduction:</span> DSPy modularizes complex pipelines, enabling JetBlue to adapt quickly while reducing costs.</li>
            <li><span className="text-gray-100">Enhanced Pipeline Flexibility:</span> JetBlue updates their pipelines dynamically, ensuring continued optimization without rewriting entire systems.</li>
            <li><span className="text-gray-100">Optimized Resource Allocation:</span> DSPy identifies areas for efficiency, helping JetBlue scale their solutions effectively.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed text-sm">
            JetBlue's innovative use of DSPy demonstrates its potential to streamline complex ML workflows, adding new opportunities for LLM applications.
          </p>
        </section>

        <p className="text-center">
          <Link to="/" className="text-green-400 hover:underline text-sm">
            ← Back to Home
          </Link>
        </p>
      </main>

      <footer className="bg-black border-t border-gray-800 py-4 text-center text-xs text-gray-600">
        {CATEGORY} · {SLUG} · TastyTechBytes
      </footer>
    </div>
  );
}
