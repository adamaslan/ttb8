import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/intro_to_Neural_Network.png";

const TITLE = "Introduction to Neural Networks";
const DESC = "Explore the foundation of modern machine learning systems, from neural network architecture to PyTorch implementation and practical applications in the Databricks ecosystem.";
const SLUG = "introduction-to-neural-networks";
const CATEGORY = "AI";
const AUTHOR = "Adam Timur Aslan";

export const meta: MetaFunction = () => {
  return [
    { title: TITLE },
    { name: "description", content: DESC },
  ];
};

export default function ArticleNN() {
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
            The foundation of modern machine learning systems powering AI innovation.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <img
          className="w-full rounded-xl border border-gray-800"
          src={hero}
          alt="Neural Networks"
        />

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Overview
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Neural networks form the foundation of modern machine learning systems—powering innovations in vision, speech, recommendation engines, and beyond. Inspired by the architecture of the human brain, these models consist of layers of interconnected nodes that learn patterns in data and make increasingly accurate predictions through iterative training. Learn more about neural networks <a href="https://www.databricks.com/glossary/neural-network" className="text-green-400 hover:underline">here</a>.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Key Insights
          </h2>
          <ul className="space-y-2 text-gray-300 leading-relaxed text-sm list-disc pl-5">
            <li>Neural networks use artificial neurons arranged in structured layers to process information.</li>
            <li>They learn by adjusting weights using backpropagation and optimization techniques like gradient descent.</li>
            <li>Common architectures include feedforward, convolutional, and recurrent neural networks.</li>
            <li>PyTorch provides dynamic computational graphs that make neural network development intuitive and flexible.</li>
          </ul>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Architecture & Training
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            A neural network includes an input layer, one or more hidden layers, and an output layer. Each layer applies activation functions like ReLU or sigmoid to learn and transform data. PyTorch's torch.nn module makes building these architectures straightforward with pre-built layers and activation functions.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            During training, neural networks minimize prediction errors through iterative weight updates based on loss calculations. PyTorch's automatic differentiation system handles backpropagation seamlessly, allowing developers to focus on model architecture rather than gradient computation. Their flexibility allows for powerful pattern recognition across a range of domains—from image classification to language translation.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            PyTorch Development
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            PyTorch has become the go-to framework for neural network research and production deployment. Its dynamic nature allows for easy debugging and experimentation, while its comprehensive ecosystem includes tools for computer vision (torchvision), natural language processing (torchtext), and audio processing (torchaudio). Get started with PyTorch by exploring their comprehensive <a href="https://pytorch.org/docs/stable/index.html" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">documentation</a>, then move on to our companion guide on <Link to="/10-essential-pytorch-elements-in-a-rnn" className="text-green-400 hover:underline">10 Essential PyTorch Elements in an RNN</Link> for the sequence-modeling building blocks.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Databricks Applications
          </h2>
          <ul className="space-y-2 text-gray-300 leading-relaxed text-sm list-disc pl-5">
            <li>Train neural networks using PyTorch or TensorFlow in Databricks notebooks with GPU acceleration.</li>
            <li>Deploy deep learning models at scale using MLflow for tracking and automation.</li>
            <li>Leverage PyTorch Lightning for structured training workflows and distributed computing.</li>
            <li>Support a variety of real-world use cases like anomaly detection, computer vision, and natural language understanding.</li>
          </ul>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Why Neural Networks Matter
          </h2>
          <ul className="space-y-2 text-gray-300 leading-relaxed text-sm list-disc pl-5">
            <li><span className="text-gray-100">Scalable Learning:</span> Neural networks adapt to large datasets and complex problems.</li>
            <li><span className="text-gray-100">Generalization Power:</span> With enough data, they can model virtually any function.</li>
            <li><span className="text-gray-100">Automation Ready:</span> Neural networks reduce the need for manual feature engineering.</li>
            <li><span className="text-gray-100">Framework Flexibility:</span> PyTorch's research-friendly design accelerates innovation and prototyping.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed text-sm">
            Neural networks are more than a research tool—they're production-grade intelligence engines, fueling today's AI-powered applications. PyTorch continues to democratize access to these powerful tools, making neural network development accessible to researchers and practitioners alike.
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



