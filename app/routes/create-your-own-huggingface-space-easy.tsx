import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/huggingface1.png";

const TITLE = "The Easy Way to Host Your Python Project on Hugging Face Spaces";
const DESC = "Hugging Face Spaces offer a simple way to host not just ML demo apps directly on your profile or your organization's profile, but any Python code with frameworks like Gradio, Streamlit, Docker, or static HTML.";
const SLUG = "create-your-own-huggingface-space-easy";
const CATEGORY = "Dev Tools";
const AUTHOR = "Adam Timur Aslan";

export const meta: MetaFunction = () => {
  return [
    { title: TITLE },
    { name: "description", content: DESC },
    { name: "keywords", content: "Hugging Face, Spaces, Gradio, Streamlit, Python, Deployment" },
    { name: "author", content: AUTHOR },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "robots", content: "index, follow" },
  ];
};

export default function Article5() {
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
            A simple way to host ML demo apps and Python code using Gradio, Streamlit, Docker, or static HTML.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <img
          className="w-full rounded-xl border border-gray-800"
          src={hero}
          alt="Hugging Face Spaces Overview"
        />

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Overview
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            <a href="https://huggingface.co/spaces" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Hugging Face Spaces</a>
            {" "}offer a simple way to host not just ML demo apps directly on your profile or your organization's profile, but really any Python code you want. If you are deploying a model that uses RAG patterns, our primer on{" "}
            <Link to="/what-is-rag" className="text-green-400 hover:underline">What is RAG</Link>
            {" "}pairs well with this guide.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Framework Support
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            This is especially helpful for apps that use{' '}
            <a href="https://www.gradio.app/" className="text-green-400 hover:underline">
              Gradio
            </a>, Streamlit, Docker, or static HTML, allowing you to create a decent looking UI fast.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Key Benefits
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            In addition to quick deployment, Hugging Face Spaces provides automatic GPU allocation, collaborative editing, and customizable templates so you can focus on building your application rather than managing infrastructure.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Getting Started
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Checkout{' '}
            <a href="https://huggingface.co/spaces/" className="text-green-400 hover:underline">
              Hugging Face Spaces
            </a>
            {' '}to get started. Here's their{' '}
            <a href="https://www.huggingface.co/" className="text-green-400 hover:underline">
              docs for spaces
            </a>
            .
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
