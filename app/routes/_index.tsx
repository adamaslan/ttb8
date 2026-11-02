import { Link } from "react-router";
import analytics from "/analytics1.jpeg";
import banner from "/old-comp1.jpeg";
import studio from "/studio.jpg";
import burden from "/js-burden.jpeg";
import box from "/boxchicken2.jpeg";
import graph4 from "/graph4.jpeg";
import js1 from "/js1.jpeg";
import blender1 from "/blender1.jpeg";
import airpods from "/airpods.jpeg";
import soundguy1 from "/soundsguy1.jpeg";
import webstorm1 from "/webstorm1.jpeg";
import dextego1 from "/dextego1.png";
import cloud from "/cloud1.jpeg"
import cask from "/cask1.jpeg";
import letters1 from "/letters1.png";
import databricks from "/databricks.png";
import dspyprompt from "/dspyprompt.png";
import huggingface1 from "/huggingface1.png";
import fish1 from "/fish1.png";
import text2speech from "/text2speech.png";
import restorationImage from "/restoration.png";
import pipe1 from "/pipeline1.png";
import NeuralNetworks from "/intro_to_Neural_Network.png";
import pytorch_elements_in_rnn from "/10_pytorch_elements_in_rnn.png";
import pytorch_elements_in_lstm from "/10_pytorch_elements_in_lstm.png";
import sqlite_to_postgres from "/sqlite_to_postgres.png";
import snapstatePersistentStateForAiAgentWorkflows from "/snapstate-persistent-state-for-ai-agent-workflows.jpg";
import continuousPentestingCiGuide from "/continuous-pentesting-ci-guide.png";
import firstPentestFreeToolsIntro from "/first-pentest-free-tools-intro.jpg";
import ibmAnderonQuantumFoundry from "/ibm-anderon-quantum-foundry.png";
import walkingBoostsCreativityStudy from "/walking-boosts-creativity-study.png";
import sexysignal1 from "/sexysignal1.jpeg";

export const meta = () => {
  return [{ property: "og:image", content: box }];
};

function AdSlot({ id }: { id: string }) {
  return (
    <div
      data-ad-slot={id}
      className="flex h-[250px] w-[300px] items-center justify-center rounded-lg border border-dashed border-gray-700 bg-gray-900 text-xs text-gray-500"
    >
      Ad · {id}
    </div>
  );
}
   {/* small little tabs with small photos to the right */}
export default function Art2() {
  return (

    <main className="mx-4 min-h-screen bg-black pb-16 lg:mx-36 md:mx-16">

      <h1 className="text-left text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
        <span className="block uppercase text-blue-400 drop-shadow-md">
          Tasty Tech Bytes
        </span>
      </h1>

      <p className="text-left text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-4xl">
        {" "}
        Covering Tech in NYC and Beyond
      </p>
      
      {/* Part 1 — Hero rail: 5 cards (2 left, big middle, 2 right). See docs/agent-guides/homepage-grid.md */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
        {/* L1 */}
        <Link
          to="/how-to-invest-in-whisky"
          className="md:col-start-1 md:row-start-1"
        >
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-yellow-500 p-1 text-sm font-bold tracking-tight text-white">
              Drink World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={cask} alt="whiskey casks" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              3 Ways to Invest in Whiskey
            </h2>
          </article>
        </Link>

        {/* L2 */}
        <Link
          to="/how-to-use-the-pie-menu-in-blender"
          className="md:col-start-1 md:row-start-2"
        >
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-purple-900 p-1 text-sm font-bold tracking-tight text-white">
              3D World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={blender1} alt="Blender 3D interface" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              The Pie Menu Rocks in Blender
            </h2>
          </article>
        </Link>

        {/* Big middle */}
        <Link
          to="/dextego-10-things-ai-sales-coaching"
          className="md:col-span-2 md:col-start-2 md:row-span-2 md:row-start-1"
        >
          <article className="flex h-full flex-col transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-blue-500 p-1 text-sm font-bold tracking-tight text-white">
              AI Sales
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={dextego1} alt="Dextego AI sales coaching" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
              10 Things You Need to Know About Dextego: The Future of AI Sales Coaching
            </h2>
          </article>
        </Link>

        {/* R1 */}
        <Link
          to="/continuous-pentesting-ci-guide"
          className="md:col-start-4 md:row-start-1"
        >
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-red-600 p-1 text-sm font-bold tracking-tight text-white">
              AI News
            </div>
            <img
              className="m-2 h-auto max-w-full rounded-2xl"
              src={continuousPentestingCiGuide}
              alt="Set Up Continuous Pentesting in Your CI"
            />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              Pensar Tutorial: A Guide to Setting Up Continuous Pentesting in 10 Minutes with Pensar's CI Integration
            </h2>
          </article>
        </Link>

        {/* R2 */}
        <Link
          to="/snapstate-persistent-state-for-ai-agent-workflows"
          className="md:col-start-4 md:row-start-2"
        >
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
              AI News
            </div>
            <img
              className="m-2 h-auto max-w-full rounded-2xl"
              src={snapstatePersistentStateForAiAgentWorkflows}
              alt="SnapState: persistent state for AI agent workflows"
            />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              SnapState: Keeping AI Agent Workflows Alive Between Sessions
            </h2>
          </article>
        </Link>
      </section>

      {/* Part 2 — Quick row: 4 uniform cards. See docs/agent-guides/homepage-grid.md */}
      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link to="/threekeys-to-getting-a-frontend-or-fullstackjob">
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
              Code World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={studio} alt="Studio by Warren Hansen" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              The 3 Keys To Getting Your Dream Frontend or Full Stack Engineer Job
            </h2>
          </article>
        </Link>

        <Link to="/vuejs-independant-javascript-framework">
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
              Code World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={burden} alt="JavaScript framework illustration" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              VueJS as the Most Indie Yet Established Javascript Framework
            </h2>
          </article>
        </Link>

        <Link to="/astro-the-most-innovative-javascript-framework">
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
              Code World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={box} alt="Astro.js" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              Astro.js as the Most Innovative and Modern Javascript Framework
            </h2>
          </article>
        </Link>

        <Link to="/the-art-of-the-clean-install">
          <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
            <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
              Code World - Helpful
            </div>
            <img className="m-2 h-auto max-w-full rounded-2xl" src={graph4} alt="clean install graphic" />
            <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
              The Art of the Clean Install
            </h2>
          </article>
        </Link>
      </section>

      {/* Part 3 — Long feed + ad rail. See docs/agent-guides/homepage-grid.md */}
      <section className="mt-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link to="/structured-outputs-json-schema-llms">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                TEXT → SCHEMA → VALID JSON
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Getting Reliable JSON Out of LLMs: Structured Outputs That Survive Production
              </h2>
            </article>
          </Link>

          <Link to="/prompt-caching-llm-cost-guide">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                PREFIX STORED → COST PER CALL DROPS
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Prompt Caching: The Cheapest LLM Optimization You Are Not Using
              </h2>
            </article>
          </Link>

          <Link to="/llm-evals-that-catch-regressions">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                PROMPT v2 vs v1 → 300 CASES → DIFF
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                LLM Evals That Actually Catch Regressions
              </h2>
            </article>
          </Link>

          <Link to="/rerankers-vs-bigger-embeddings">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                RETRIEVE 100 → RERANK → TOP 5
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                When a Reranker Beats a Bigger Embedding Model
              </h2>
            </article>
          </Link>

          <Link to="/function-calling-production-patterns">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                MODEL PICKS fn → ARGS VALIDATED → RUN
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Function Calling Patterns That Hold Up in Production
              </h2>
            </article>
          </Link>

          <Link to="/local-llms-apple-silicon-mlx">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                7B @ 4-BIT ≈ 4 GB → RUNS LOCAL
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Running Local LLMs on Apple Silicon: What Fits in Memory and What It Costs You
              </h2>
            </article>
          </Link>

          <Link to="/chunking-strategies-that-matter">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                DOCS → SPLIT ON STRUCTURE → INDEX
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                RAG Chunking: The Few Decisions That Actually Matter
              </h2>
            </article>
          </Link>

          <Link to="/llm-input-output-guardrails">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                INPUT ✓ → MODEL → OUTPUT ✓ → ACT
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Guardrails for LLM Apps: Validate Inputs, Outputs, and Everything Between
              </h2>
            </article>
          </Link>

          <Link to="/model-router-small-models-first">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                EASY → SMALL $ · HARD → BIG $$$
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The Model Router Pattern: Send Easy Queries to Small Models
              </h2>
            </article>
          </Link>

          <Link to="/streaming-tokens-cancellation-ux">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                TOKEN… TOKEN… ✋ CANCEL → CLEANUP
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Streaming LLM Responses: Cancellation, Timeouts, and Partial State
              </h2>
            </article>
          </Link>

          <Link to="/agent-loops-stop-conditions">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                LOOP: BUDGET -1 … STOP ✓
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Agent Loops Need Stop Conditions, Not Hopes
              </h2>
            </article>
          </Link>

          <Link to="/context-window-budgeting">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                200K WINDOW: EVERY TOKEN EARNS ITS SLOT
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Context Window Budgeting: What Actually Deserves Tokens
              </h2>
            </article>
          </Link>

          <Link to="/llm-exact-vs-semantic-caching">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                Q == Q? HIT · Q ≈ Q? MAYBE HIT
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Exact vs Semantic Caching for LLM Calls
              </h2>
            </article>
          </Link>

          <Link to="/fine-tuning-vs-prompting-decision">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips / Tutorials
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                PROMPT → FEW-SHOT → RAG → TUNE?
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Fine-Tuning vs Prompting: A Decision Framework That Respects Your Time
              </h2>
            </article>
          </Link>

          <Link to="/sqlite-wal-mode-concurrent-readers">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                READERS ∥ WRITER (ONE AT A TIME)
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                SQLite WAL Mode: Concurrent Readers Without a Server
              </h2>
            </article>
          </Link>

          <Link to="/postgres-index-types-when-each-wins">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                QUERY SHAPE → INDEX TYPE
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                B-Tree, GIN, BRIN: Picking Postgres Indexes by Query Shape
              </h2>
            </article>
          </Link>

          <Link to="/http-caching-headers-practical-guide">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                200 (DISK CACHE) · 304 · REVALIDATE
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Cache-Control and ETags: A Practical Guide to HTTP Caching
              </h2>
            </article>
          </Link>

          <Link to="/dependency-pinning-supply-chain-hygiene">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                1 DIRECT DEP → 400 TRANSITIVE
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Lockfiles Are Not Enough: Dependency Hygiene for Supply-Chain Attacks
              </h2>
            </article>
          </Link>

          <Link to="/typescript-satisfies-as-const">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                VALUE STAYS PRECISE · TYPE CHECKS
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                TypeScript's satisfies and as const: Keep the Inference, Add the Check
              </h2>
            </article>
          </Link>

          <Link to="/rate-limiting-token-bucket-leaky">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                TOKENS +r/s · BURST ≤ B
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Token Bucket vs Leaky Bucket: Rate Limiting Explained With Code
              </h2>
            </article>
          </Link>

          <Link to="/queues-vs-event-logs">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                CONSUME-DELETE vs APPEND-REPLAY
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Queues vs Event Logs: Choosing the Backbone of Async Work
              </h2>
            </article>
          </Link>

          <Link to="/idempotency-keys-safe-retries">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                SAME KEY → SAME RESULT, ONCE
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Idempotency Keys: How to Retry API Calls Safely
              </h2>
            </article>
          </Link>

          <Link to="/graceful-shutdown-node-servers">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                SIGTERM → STOP ACCEPT → DRAIN → EXIT
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Graceful Shutdown in Node: Stop Dropping In-Flight Requests
              </h2>
            </article>
          </Link>

          <Link to="/expand-contract-migrations">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                ADD → DUAL-WRITE → BACKFILL → DROP
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Zero-Downtime Migrations: The Expand-and-Contract Pattern
              </h2>
            </article>
          </Link>

          <Link to="/where-http-status-codes-came-from">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-400 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Random
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                200 OK · 404 · 418 ☕ · 451
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Where HTTP Status Codes Came From
              </h2>
            </article>
          </Link>

          <Link to="/dial-up-handshake-sound-decoded">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-400 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Random
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                ♪ V.8 BLEEP → V.34 HISS → ONLINE
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                What the Dial-Up Handshake Sound Actually Meant
              </h2>
            </article>
          </Link>

          <Link to="/unicode-box-drawing-history">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-400 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Random
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                ╔═╗ CP437 → UTF-8 → YOUR CLI
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Box-Drawing Characters: From Code Page 437 to Your Terminal
              </h2>
            </article>
          </Link>

          <Link to="/gorillas-bas-learn-to-code">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-400 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Random
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                GORILLA → BANANA ↗ θ,v → BOOM
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Gorillas.bas: The Artillery Game That Taught a Generation to Read Code
              </h2>
            </article>
          </Link>

          <Link to="/bollinger-bandwidth-squeeze-scanner">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-700 p-1 text-sm font-bold tracking-tight text-white">
                Finance - Signal Scan
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                BANDWIDTH AT 6-MO LOW → WATCH
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Scanning for Bollinger Bandwidth Squeezes
              </h2>
            </article>
          </Link>

          <Link to="/why-correlations-break-regime-shifts">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-700 p-1 text-sm font-bold tracking-tight text-white">
                Finance - Signal Scan
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                CALM: ρ=0.2 · CRISIS: ρ=0.9
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Why Correlations Break Exactly When You Need Them
              </h2>
            </article>
          </Link>

          <Link to="/backtest-overfitting-deflated-sharpe">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-700 p-1 text-sm font-bold tracking-tight text-white">
                Finance - Signal Scan
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                1,000 TESTS → BEST SR ≈ LUCK
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Your Backtest Is Overfit: Deflated Sharpe and the Multiple-Testing Problem
              </h2>
            </article>
          </Link>

          <Link to="/limit-order-book-mechanics">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-700 p-1 text-sm font-bold tracking-tight text-white">
                Finance - Signal Scan
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                BID 99.98 ×400 │ ASK 99.99 ×250
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Reading a Limit Order Book: Microstructure for Builders
              </h2>
            </article>
          </Link>

          <Link to="/etf-creation-redemption-mechanics">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-700 p-1 text-sm font-bold tracking-tight text-white">
                Finance - Signal Scan
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                NAV ≠ PRICE → ARB LOOP → CONVERGE
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                ETF Creation and Redemption: The Mechanism Behind the Price
              </h2>
            </article>
          </Link>

          <Link to="/vix-term-structure-contango">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-700 p-1 text-sm font-bold tracking-tight text-white">
                Finance - Signal Scan
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                CURVE ↑ CONTANGO = RENT ON INSURANCE
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                VIX Futures Term Structure: Contango, Backwardation, and What It Costs
              </h2>
            </article>
          </Link>

          <Link to="/post-earnings-announcement-drift">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-700 p-1 text-sm font-bold tracking-tight text-white">
                Finance - Signal Scan
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                SURPRISE +5% → DRIFT FOR ~60 DAYS
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Post-Earnings Announcement Drift: The Slow-Motion Anomaly
              </h2>
            </article>
          </Link>

          <Link to="/regime-filter-200-day-average">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-700 p-1 text-sm font-bold tracking-tight text-white">
                Finance - Signal Scan
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                PRICE &gt; 200DMA? RISK ON : ASIDE
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The 200-Day Regime Filter: What It Does and Does Not Protect Against
              </h2>
            </article>
          </Link>

          <Link to="/threejs-instancedmesh-performance">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-900 p-1 text-sm font-bold tracking-tight text-white">
                3D World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                10,000 OBJECTS → 1 DRAW CALL
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                InstancedMesh in Three.js: 10,000 Objects Without the Frame Drop
              </h2>
            </article>
          </Link>

          <Link to="/blender-geometry-nodes-scatter-fields">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-900 p-1 text-sm font-bold tracking-tight text-white">
                3D World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                MESH → POINTS ×DENSITY → INSTANCES
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Blender Geometry Nodes: Scatter Fields Without the Node Soup
              </h2>
            </article>
          </Link>

          <Link to="/webgl-draw-call-batching">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-900 p-1 text-sm font-bold tracking-tight text-white">
                3D World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                2,000 CALLS @60FPS? MERGE → 40
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Draw Calls: The WebGL Performance Budget Nobody Graphs
              </h2>
            </article>
          </Link>

          <Link to="/projection-matrices-visual-guide">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-900 p-1 text-sm font-bold tracking-tight text-white">
                3D World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                FRUSTUM ──► SQUASH ──► CUBE
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Projection Matrices, Explained With Boxes Instead of Greek
              </h2>
            </article>
          </Link>

          <Link to="/gltf-optimization-draco-ktx2">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-900 p-1 text-sm font-bold tracking-tight text-white">
                3D World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                12MB GLB → 1.9MB, SAME LOOK
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Shipping glTF: Draco, KTX2, and the Size Budget
              </h2>
            </article>
          </Link>

          <Link to="/dns-over-https-what-changes">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-pink-600 p-1 text-sm font-bold tracking-tight text-white">
                Tech World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                LOOKUP ENCRYPTED · SNI STILL VISIBLE
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                DoH and DoT: What Encrypted DNS Hides and What It Doesn't
              </h2>
            </article>
          </Link>

          <Link to="/backup-3-2-1-rule-modern-version">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-pink-600 p-1 text-sm font-bold tracking-tight text-white">
                Tech World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                3 COPIES · 2 MEDIA · 1 OFFSITE · + HISTORY
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The 3-2-1 Backup Rule, Updated for Sync-and-Delete Mistakes
              </h2>
            </article>
          </Link>

          <Link to="/whiskey-proof-terms-cask-strength">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-yellow-500 p-1 text-sm font-bold tracking-tight text-white">
                Drink World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                BARREL 62% → BOTTLE 40-46% (OR NOT)
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Cask Strength, Barrel Proof, and the Proof Terms That Matter
              </h2>
            </article>
          </Link>

          <Link to="/coffee-extraction-tds-brew-ratio">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-yellow-500 p-1 text-sm font-bold tracking-tight text-white">
                Drink World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                1:16 RATIO · 18-22% EXTRACTION
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Coffee Extraction: TDS, Brew Ratios, and Why Sour Means Under
              </h2>
            </article>
          </Link>

          <Link to="/natural-wine-faults-or-style">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-yellow-500 p-1 text-sm font-bold tracking-tight text-white">
                Drink World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                FARMYARD? BAND-AID? MOUSE? FAULT.
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Natural Wine: Brett, Mouse, and the Line Between Fault and Style
              </h2>
            </article>
          </Link>

          <Link to="/loudness-normalization-lufs-streaming">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-pink-600 p-1 text-sm font-bold tracking-tight text-white">
                Tech World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                NORMALIZED → DYNAMICS SURVIVE
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                LUFS and the End of the Loudness War: What Streaming Normalization Changed
              </h2>
            </article>
          </Link>

          <Link to="/field-recording-city-soundscapes">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-pink-600 p-1 text-sm font-bold tracking-tight text-white">
                Tech World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                32-BIT FLOAT → NO CONVERTER CLIPPING
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Field Recording in the City: Gear, Gain Staging, and Usable Chaos
              </h2>
            </article>
          </Link>

          <Link to="/modular-synth-signal-flow-programmers">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-pink-600 p-1 text-sm font-bold tracking-tight text-white">
                Tech World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                VCO → VCF → VCA · CV = DATA
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Modular Synths for Programmers: It's All Signal Flow
              </h2>
            </article>
          </Link>

          <Link to="/crispr-off-target-detection-computation">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-pink-600 p-1 text-sm font-bold tracking-tight text-white">
                Tech World - Helpful
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                GUIDE 20nt → SCAN GENOME → RANK RISK
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Finding CRISPR Off-Targets With Computation First
              </h2>
            </article>
          </Link>

          <Link to="/jev-typed-decisions-for-software">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-600 p-1 text-sm font-bold tracking-tight text-white">
                AI News
              </div>
              <div aria-hidden="true" className="m-2 flex h-44 items-center justify-center rounded-2xl border border-green-900 bg-gradient-to-br from-gray-950 to-green-950/50 px-4 font-mono text-sm text-green-300 sm:text-base">
                STATE → JUDGMENT → ACTION
              </div>
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Jev Turns Ambiguous Input Into Decisions Your Code Can Use
              </h2>
            </article>
          </Link>

          <Link to="/walking-boosts-creativity-study">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-pink-600 p-1 text-sm font-bold tracking-tight text-white">
                Tech World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={walkingBoostsCreativityStudy} alt="Take a Walk Before You Brainstorm: The Study Behind the Old Advice" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Take a Walk Before You Brainstorm: The Study Behind the Old Advice
              </h2>
            </article>
          </Link>

          <Link to="/ipi-signal-report">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-700 p-1 text-sm font-bold tracking-tight text-white">
                Finance - Signal Scan
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={sexysignal1} alt="IPI Signal Report: Hourly Technical Confluence & Bollinger Scan" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                IPI Signal Report: Hourly Technical Confluence & Bollinger Scan
              </h2>
            </article>
          </Link>

          <Link to="/sndk-signal-report">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-700 p-1 text-sm font-bold tracking-tight text-white">
                Finance - Signal Scan
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={sexysignal1} alt="SNDK Signal Report: MA Stairstep Meets a Stretched 200SMA" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                SNDK Signal Report: MA Stairstep Meets a Stretched 200SMA
              </h2>
            </article>
          </Link>

          <Link to="/ibm-anderon-quantum-foundry">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-600 p-1 text-sm font-bold tracking-tight text-white">
                AI News
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={ibmAnderonQuantumFoundry} alt="IBM's Anderon Quantum Foundry Is a $2B Bet on 300mm Qubits" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                IBM's Anderon Quantum Foundry Is a $2B Bet on 300mm Qubits
              </h2>
            </article>
          </Link>

          <Link to="/first-pentest-free-tools-intro">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-600 p-1 text-sm font-bold tracking-tight text-white">
                AI News
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={firstPentestFreeToolsIntro} alt="Your First Pentest: A Practical Intro Using Free Tools" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Your First Pentest: A Practical Intro Using Free Tools
              </h2>
            </article>
          </Link>

          <Link to="/the-ultimate-guide-to-flyers-in-blender-with-the-node-editor">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-900 p-1 text-sm font-bold tracking-tight text-white">
                3D World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={pipe1} alt="Blender node editor pipeline" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The Ultimate Guide to Flyers in Blender with the Node Editor
              </h2>
            </article>
          </Link>

          <Link to="/what-is-rag">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={fish1} alt="RAG illustration" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                RAG 101 Tutorial: All you need to know about RAG
              </h2>
            </article>
          </Link>

          <Link to="/what-are-the-best-free-text-to-speech-tools">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={text2speech} alt="text-to-speech tools" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                What are the Best Free Text-to-Speech Tools?
              </h2>
            </article>
          </Link>

          <Link to="/dspy101">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={dspyprompt} alt="DSPy prompting" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                DSPy 101 Tutorial: Prompting Guide
              </h2>
            </article>
          </Link>

          <Link to="/databricks-dspy-jetblue-ai-chatbot">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={databricks} alt="Databricks DSPy JetBlue" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                JetBlue Optimizes Databricks LLM Pipelines with DSPy
              </h2>
            </article>
          </Link>

          <Link to="/5-ways-to-enhance-rag-efficiency-with-dspy">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={letters1} alt="RAG efficiency" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                5 ways to enhance RAG efficiency with DSPy
              </h2>
            </article>
          </Link>

          {/* Mobile ad slot 1 — shown on mobile/md, hidden on lg where the rail takes over */}
          <div className="lg:hidden md:col-span-2 flex justify-center py-2">
            <AdSlot id="mobile-1" />
          </div>

          <Link to="/weirdinternetfacts">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-400 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Random
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={banner} alt="vintage computer banner" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                4 Weird Things about the Internet
              </h2>
            </article>
          </Link>

          <Link to="/threejs-and-web3">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-green-800 p-1 text-sm font-bold tracking-tight text-white">
                Code Art - ThreeJS
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={cloud} alt="ThreeJS clouds" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                ThreeJS, the old Web3?
              </h2>
            </article>
          </Link>

          <Link to="/easy-domain-verification-with-google">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={analytics} alt="analytics chart" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The Easy Way to Verify Domain Ownership with Google
              </h2>
            </article>
          </Link>

          <Link to="/lies-about-javascript">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={js1} alt="JavaScript" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Sweet Little JavaScript Lies About Javascript
              </h2>
            </article>
          </Link>

          {/* Mobile ad slot 2 */}
          <div className="lg:hidden md:col-span-2 flex justify-center py-2">
            <AdSlot id="mobile-2" />
          </div>

          <Link to="/create-your-own-huggingface-space-easy">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={huggingface1} alt="Hugging Face Spaces" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The easy way to publish on Hugging Face Spaces
              </h2>
            </article>
          </Link>

          <Link to="/nab-2023-audio-video-gear">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-red-900 p-1 text-sm font-bold tracking-tight text-white">
                Code World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={soundguy1} alt="NAB 2023 audio video" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Highlights from NAB 2023
              </h2>
            </article>
          </Link>

          <Link to="/using-airpods-and-audacity-hack">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-pink-600 p-1 text-sm font-bold tracking-tight text-white">
                Tech World - Helpful
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={airpods} alt="AirPods and Audacity" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                AirPods Audacity: How to make AirPods (or any bluetooth audio) work with Audacity
              </h2>
            </article>
          </Link>

          <Link to="/10-essential-pytorch-elements-in-a-rnn">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl object-cover" src={pytorch_elements_in_rnn} alt="PyTorch RNN elements" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The 10 Essential PyTorch Elements in a RNN
              </h2>
            </article>
          </Link>

          <Link to="/introduction-to-neural-networks">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={NeuralNetworks} alt="neural network diagram" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                Introduction to Neural Networks
              </h2>
            </article>
          </Link>

          <Link to="/10_Essential_PyTorch_Elements_in_LSTMs">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={pytorch_elements_in_lstm} alt="PyTorch LSTM elements" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                10 Essential PyTorch Elements in LSTMs
              </h2>
            </article>
          </Link>

          <Link to="/10_Ways_to_Optimize_SQLite_Before_Migrating_to_PostgreSQL">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={sqlite_to_postgres} alt="SQLite to PostgreSQL" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                10 Ways to Optimize SQLite Before Migrating to PostgreSQL
              </h2>
            </article>
          </Link>

          <Link to="/5-ways-ai-can-help-farmland-restoration">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-purple-400 p-1 text-sm font-bold tracking-tight text-white">
                AI Tips
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={restorationImage} alt="farmland restoration" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                5 Ways AI Can Help Farmland Restoration
              </h2>
            </article>
          </Link>

          <Link to="/three-essential-webstorm-shortcuts">
            <article className="transition-all duration-300 ease-in-out hover:bg-gray-900">
              <div className="rounded-full bg-blue-500 p-1 text-sm font-bold tracking-tight text-white">
                Software - Webstorm
              </div>
              <img className="m-2 h-auto max-w-full rounded-2xl" src={webstorm1} alt="WebStorm IDE" />
              <h2 className="pb-4 text-left text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                The Three WebStorm Shortcuts to Rule Them All
              </h2>
            </article>
          </Link>
        </div>

        {/* Ad rail — visible on lg+, sticky as the feed scrolls */}
        <aside className="hidden lg:block">
          <div className="sticky top-4 space-y-4">
            <AdSlot id="rail-top" />
            <AdSlot id="rail-mid" />
          </div>
        </aside>
      </section>
</main>
     
  );
}
