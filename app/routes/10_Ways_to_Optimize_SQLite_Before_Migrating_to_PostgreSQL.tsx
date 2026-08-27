import React from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';

const hero = "/sqlite_to_postgres.png";

const TITLE = "10 Ways to Optimize SQLite Before Migrating to PostgreSQL";
const DESC = "Prepare your SQLite database for migration to PostgreSQL with these 10 essential optimization steps, from schema normalization to data type fixes.";
const SLUG = "10-ways-to-optimize-sqlite-before-migrating-to-postgresql";
const CATEGORY = "Databases";
const AUTHOR = "Adam Timur Aslan";

export const meta: MetaFunction = () => {
  return [
    { title: TITLE },
    { name: "description", content: DESC },
  ];
};

export default function ArticleSQLiteToPostgres() {
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
            Prepare your database for production-ready PostgreSQL with essential optimization steps.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8 max-w-3xl">
        <img
          className="w-full rounded-xl border border-gray-800"
          src={hero}
          alt="SQLite to PostgreSQL Migration"
        />

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Overview
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Migrating from SQLite to PostgreSQL is a natural step when an application grows beyond simple use cases. SQLite is light and easy for small apps, while PostgreSQL provides powerful features, scalability, and stricter data handling. Preparing your SQLite database properly will ensure a smoother migration. Here are 10 key steps, along with PostgreSQL <a href="https://www.postgresql.org/docs/current/" className="text-green-400 hover:underline">documentation</a> you can explore further.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Migration Preparation Steps
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            These steps form the backbone of a successful migration process:
          </p>
          <ul className="space-y-3 text-gray-300 leading-relaxed text-sm list-disc pl-5">
            <li><span className="text-gray-100">Normalize your schema:</span> Clean up duplicate data and make sure relationships between tables are clear.</li>
            <li><span className="text-gray-100">Fix data types:</span> Use strict types like INTEGER, BOOLEAN, and TIMESTAMP, since PostgreSQL doesn't allow the type mixing SQLite does.</li>
            <li><span className="text-gray-100">Add primary keys and foreign keys:</span> PostgreSQL enforces keys and constraints more strictly than SQLite.</li>
            <li><span className="text-gray-100">Audit NULLs and defaults:</span> Ensure important columns are NOT NULL and that defaults are set properly.</li>
            <li><span className="text-gray-100">Create indexes:</span> Index frequently queried columns to maintain speed after migration.</li>
            <li><span className="text-gray-100">Standardize dates and times:</span> Store dates in ISO 8601 format (YYYY-MM-DD HH:MM:SS) for PostgreSQL compatibility.</li>
            <li><span className="text-gray-100">Replace AUTOINCREMENT:</span> PostgreSQL uses SERIAL or <a href="https://www.postgresql.org/docs/current/sql-createtable.html" className="text-green-400 hover:underline">GENERATED AS IDENTITY</a> instead of AUTOINCREMENT.</li>
            <li><span className="text-gray-100">Rename reserved words:</span> Change column/table names that conflict with PostgreSQL keywords (like "user" or "order").</li>
            <li><span className="text-gray-100">Ensure UTF-8 encoding:</span> Use UTF-8 for text to avoid character issues.</li>
            <li><span className="text-gray-100">Use migration tools:</span> Tools like <a href="https://pgloader.io/" className="text-green-400 hover:underline">pgloader</a> or <a href="https://dbeaver.io/" className="text-green-400 hover:underline">DBeaver</a> can move schema and data automatically.</li>
          </ul>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Exploring Migration Further
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            PostgreSQL provides features like JSON support, powerful indexing, and advanced queries. Preparing SQLite carefully lets you use these features right away without errors.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm">
            With the right preparation, you can scale from a simple SQLite app to a production-ready PostgreSQL system smoothly.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Real-World Applications
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Developers often start with SQLite in small apps or mobile projects. As usage grows, PostgreSQL becomes the choice for production systems, e-commerce platforms, and SaaS apps that need speed, reliability, and scalability.
          </p>
        </section>

        <section className="bg-gray-950 rounded-xl border border-gray-800 p-6 space-y-4">
          <h2 className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
            Why These 10 Steps Matter
          </h2>
          <ul className="space-y-2 text-gray-300 leading-relaxed text-sm list-disc pl-5">
            <li><span className="text-gray-100">Reliability:</span> Avoids migration errors and data loss.</li>
            <li><span className="text-gray-100">Performance:</span> Keeps queries and joins fast after migration.</li>
            <li><span className="text-gray-100">Scalability:</span> Prepares your schema for larger workloads and more users.</li>
            <li><span className="text-gray-100">Maintainability:</span> A clean schema makes it easier to manage updates and future changes.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed text-sm">
            These 10 steps help you move from SQLite to PostgreSQL smoothly and unlock PostgreSQL's advanced features for production use.
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
