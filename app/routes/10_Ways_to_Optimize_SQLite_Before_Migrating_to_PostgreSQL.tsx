import { Link } from "react-router";
import sqlite_to_postgres from "/sqlite_to_postgres.png";

export default function ArticleSQLiteToPostgres() {
  return (
    <div>
      <div className="mx-3 lg:mx-36">
        <h1 className="tracking-light text-center text-2xl font-extrabold text-blue-500 sm:text-4xl lg:text-5xl">
          10 Ways to Optimize SQLite Before Migrating to PostgreSQL
        </h1>
        <h2 className="tracking-light text-center text-xl font-extrabold text-blue-500 sm:text-4xl lg:text-2xl">
          By Rajesh Kumar Reddy Avula
        </h2>
        <img
          className="mx-auto my-auto h-1/2 w-1/2"
          src={sqlite_to_postgres}
          alt="sqlite-to-postgres"
        />
        <div>
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            Migrating from SQLite to PostgreSQL is a natural step when an
            application grows beyond simple use cases. SQLite is light and easy
            for small apps, while PostgreSQL provides powerful features,
            scalability, and stricter data handling. Preparing your SQLite
            database properly will ensure a smoother migration. Here are 10 key
            steps, along with PostgreSQL{" "}
            <a
              href="https://www.postgresql.org/docs/current/"
              className="text-blue-500"
            >
              documentation
            </a>{" "}
            you can explore further.
          </p>
          <br />
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif font-bold">
            Key Insights for SQLite → PostgreSQL Migration
          </p>
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            These steps form the backbone of a successful migration process:
          </p>
          <ul className="list-disc pl-5 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            <li>
              <span className="font-semibold">Normalize your schema:</span> Clean
              up duplicate data and make sure relationships between tables are
              clear.
            </li>
            <li>
              <span className="font-semibold">Fix data types:</span> Use strict
              types like <code>INTEGER</code>, <code>BOOLEAN</code>, and{" "}
              <code>TIMESTAMP</code>, since PostgreSQL doesn’t allow the type
              mixing SQLite does.
            </li>
            <li>
              <span className="font-semibold">Add primary keys and foreign keys:</span>{" "}
              PostgreSQL enforces keys and constraints more strictly than SQLite.
            </li>
            <li>
              <span className="font-semibold">Audit NULLs and defaults:</span>{" "}
              Ensure important columns are <code>NOT NULL</code> and that
              defaults are set properly.
            </li>
            <li>
              <span className="font-semibold">Create indexes:</span> Index
              frequently queried columns to maintain speed after migration.
            </li>
            <li>
              <span className="font-semibold">Standardize dates and times:</span>{" "}
              Store dates in ISO 8601 format (<code>YYYY-MM-DD HH:MM:SS</code>)
              for PostgreSQL compatibility.
            </li>
            <li>
              <span className="font-semibold">Replace AUTOINCREMENT:</span>{" "}
              PostgreSQL uses <code>SERIAL</code> or{" "}
              <a
                href="https://www.postgresql.org/docs/current/sql-createtable.html"
                className="text-blue-500"
              >
                GENERATED AS IDENTITY
              </a>{" "}
              instead of <code>AUTOINCREMENT</code>.
            </li>
            <li>
              <span className="font-semibold">Rename reserved words:</span>{" "}
              Change column/table names that conflict with PostgreSQL keywords
              (like "user" or "order").
            </li>
            <li>
              <span className="font-semibold">Ensure UTF-8 encoding:</span> Use{" "}
              <code>UTF-8</code> for text to avoid character issues.
            </li>
            <li>
              <span className="font-semibold">Use migration tools:</span> Tools
              like{" "}
              <a href="https://pgloader.io/" className="text-blue-500">
                pgloader
              </a>{" "}
              or{" "}
              <a href="https://dbeaver.io/" className="text-blue-500">
                DBeaver
              </a>{" "}
              can move schema and data automatically.
            </li>
          </ul>
          <br />
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif font-bold">
            Exploring Migration Further
          </p>
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            PostgreSQL provides features like JSON support, powerful indexing,
            and advanced queries. Preparing SQLite carefully lets you use these
            features right away without errors.
          </p>
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            With the right preparation, you can scale from a simple SQLite app
            to a production-ready PostgreSQL system smoothly.
          </p>
          <br />
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif font-bold">
            In Real-World Applications
          </p>
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            Developers often start with SQLite in small apps or mobile projects.
            As usage grows, PostgreSQL becomes the choice for production
            systems, e-commerce platforms, and SaaS apps that need speed,
            reliability, and scalability.
          </p>
          <br />
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif font-bold">
            Why These 10 Steps Matter
          </p>
          <ul className="list-disc list-inside">
            <li className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
              <span className="font-semibold">Reliability:</span> Avoids
              migration errors and data loss.
            </li>
            <li className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
              <span className="font-semibold">Performance:</span> Keeps queries
              and joins fast after migration.
            </li>
            <li className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
              <span className="font-semibold">Scalability:</span> Prepares your
              schema for larger workloads and more users.
            </li>
            <li className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
              <span className="font-semibold">Maintainability:</span> A clean
              schema makes it easier to manage updates and future changes.
            </li>
          </ul>
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            These 10 steps help you move from SQLite to PostgreSQL smoothly and
            unlock PostgreSQL’s advanced features for production use.
          </p>
          <br />
          <p className="text-center text-lg font-extrabold tracking-tight text-yellow-500 sm:text-2xl lg:text-4xl">
            Go back
            <Link
              to="/"
              className="text-center text-6xl font-extrabold tracking-tight text-blue-500 sm:text-xl lg:text-4xl"
            >
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
