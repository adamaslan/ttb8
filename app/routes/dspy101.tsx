// Suggested URL: /dspy101

import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/fish1.png";

const TITLE = "DSPy 101 Tutorial: Prompting Guide";
const DESC = "Simplify LLM-powered applications with DSPy. Learn signatures, predictions, and prompt optimization.";
const SLUG = "dspy101";
const CATEGORY = "Tutorial";
// const DATE = "May 2026";
const AUTHOR = "Adam Timur Aslan";

export const meta: MetaFunction = () => {
  return [
    { title: TITLE },
    { name: "description", content: DESC },
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
    { property: "keywords", content: "DSPy, Python, AI, AI Agent, AI Tutorial, AI Chatbot" },
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
            Simplify LLM-powered applications with DSPy. For a deeper dive on retrieval patterns, see our companion piece on Five Ways to Enhance RAG Efficiency with DSPy.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <img
          className="w-full rounded-xl border border-gray-800"
          src={hero}
          alt="DSPy tutorial"
        />

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Quick Start
          </h2>
          <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto text-xs font-mono">
{`import dspy

lm = dspy.LM('ollama_chat/llama3.2:1b', api_base='http://localhost:11434')
dspy.configure(lm=lm)`}
          </pre>
          <p className="text-gray-300 leading-relaxed text-sm">
            This snippet initializes a language model and configures DSPy for use.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Defining a Signature
          </h2>
          <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto text-xs font-mono">
{`from typing import Literal

class Categorize(dspy.Signature):
    event: str = dspy.InputField()
    category: Literal['Wars and Conflicts', 'Politics'] = dspy.OutputField()
    confidence: float = dspy.OutputField()`}
          </pre>
          <p className="text-gray-300 leading-relaxed text-sm">
            Signatures define input-output structures, making your models more intuitive.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Calling the Module
          </h2>
          <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto text-xs font-mono">
{`classify = dspy.Predict(Categorize)
classification = classify(event="[YOUR HISTORIC EVENT]")
print(classification)`}
          </pre>
          <p className="text-gray-300 leading-relaxed text-sm">
            Use the <span className="text-gray-100">Predict</span> module to classify events with ease.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Optimizing Prompts
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto text-xs font-mono">
{`from dspy.teleprompt import *
tp = dspy.MIPROv2(metric=validate_category, auto="light")
optimized_classify = tp.compile(classify, trainset=trainset)`}
            </pre>
            Optimize prompts with DSPy's Teleprompt module for better performance.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Saving Optimized Systems
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            <pre className="bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto text-xs font-mono">
{`optimized_classify.save("optimized_event_classifier.json")`}
            </pre>
            Save your optimized classification systems for later use or deployment.
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
};

export default RemixPage;
