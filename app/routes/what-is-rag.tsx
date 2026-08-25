// Suggested URL: /what-is-rag

import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/dspyprompt.png";

const TITLE = "What is RAG (Retrieval-Augmented Generation)?";
const DESC = "Learn about Retrieval-Augmented Generation (RAG), the AI framework that enhances LLM outputs with external knowledge for better accuracy and context.";
const SLUG = "what-is-rag";
const CATEGORY = "Tutorial";
// const DATE = "May 2026";
const AUTHOR = "Adam Timur Aslan";

export const meta: MetaFunction = () => {
  return [
    { title: TITLE },
    { property: "og:image", content: hero },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESC },
    { property: "og:type", content: "article" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: TITLE },
    { property: "twitter:description", content: DESC },
    { property: "twitter:image", content: hero },
    { property: "linkedin:title", content: TITLE },
    { property: "linkedin:description", content: DESC },
    { property: "linkedin:image", content: hero },
    { property: "keywords", content: "RAG, AI, LLM, Retrieval-Augmented Generation, AI Tutorial, Machine Learning, Natural Language Processing" },
  ];
};

const RemixPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="bg-black border-b border-gray-800 py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white">
            {CATEGORY}
          </span>
          <h1 className="text-3xl font-bold text-green-400 mt-3">{TITLE}</h1>
          <p className="text-sm text-gray-500 mt-1">
            {/* {DATE}  */}
            by <span className="text-gray-300">{AUTHOR}</span>
          </p>
          <p className="mt-4 flex items-start gap-2 font-mono text-xs sm:text-sm text-green-400/90 tracking-tight">
            <span className="text-green-500 font-bold shrink-0">▸</span>
            Understanding the Framework that Enhances LLM Capabilities
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <img
          className="w-full rounded-xl border border-gray-800"
          src={hero}
          alt="RAG framework"
        />

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Introduction
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Retrieval-Augmented Generation (RAG) is an AI framework — originally proposed in a{" "}
            <a
              href="https://arxiv.org/abs/2005.11401"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              2020 Facebook AI paper
            </a>
            {" "}— that enhances the outputs of large language models (LLMs) by incorporating information from external sources. It combines the generative capabilities of LLMs with the retrieval capabilities of traditional information retrieval. This combination allows RAG to access and reference information outside the LLMs&apos; training data, leading to more accurate, up-to-date, and contextually relevant responses. For a hands-on follow-up, see our companion piece on{" "}
            <Link to="/5-ways-to-enhance-rag-efficiency-with-dspy" className="text-green-400 hover:underline">Five Ways to Enhance RAG Efficiency with DSPy</Link>.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            How RAG Works
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-gray-100 font-bold mb-1">1. Retrieval</h3>
              <p className="text-gray-300 leading-relaxed text-sm">A user's query is first used to search an external knowledge base or database.</p>
            </div>
            <div>
              <h3 className="text-gray-100 font-bold mb-1">2. Augmentation</h3>
              <p className="text-gray-300 leading-relaxed text-sm">The retrieved relevant information is then integrated into the user's prompt before being sent to the LLM.</p>
            </div>
            <div>
              <h3 className="text-gray-100 font-bold mb-1">3. Generation</h3>
              <p className="text-gray-300 leading-relaxed text-sm">The LLM generates a response based on the augmented prompt, incorporating the retrieved context.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Benefits of RAG
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-gray-100 font-bold mb-1">Enhanced Accuracy</h3>
              <p className="text-gray-300 leading-relaxed text-sm">By accessing external knowledge, RAG can generate more factually correct and up-to-date answers.</p>
            </div>
            <div>
              <h3 className="text-gray-100 font-bold mb-1">Improved Context</h3>
              <p className="text-gray-300 leading-relaxed text-sm">RAG allows LLMs to produce responses that are more relevant to the specific user query and context.</p>
            </div>
            <div>
              <h3 className="text-gray-100 font-bold mb-1">Reduced Need for Fine-Tuning</h3>
              <p className="text-gray-300 leading-relaxed text-sm">RAG can provide some of the benefits of a custom-trained LLM without the need for extensive training or fine-tuning.</p>
            </div>
          </div>
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
};

export default RemixPage;

