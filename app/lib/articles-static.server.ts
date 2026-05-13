// Server-only static article source.
// PROTOTYPE MODE — articles are baked into the bundle from
// app/data/today-articles.json. No live Firestore call from production.
// See docs/incidents/2026-04-27-firestore-prod-outage.md for context.
//
// To refresh: run `node scripts/snapshot-articles.mjs` from gcp3 repo
// (or re-run the Python snapshot one-liner) and rebuild.

import snapshot from "~/data/today-articles.json";
import type { ArticleCard, FirestoreArticle } from "~/types/article";

type StaticEntry = {
  doc_id: string;
  data: Record<string, unknown>;
} | null;

type Snapshot = Record<string, StaticEntry>;

const TYPES = [
  { id: "story", key: "daily_story", label: "Story", category: "Market Story" },
  { id: "blog", key: "daily_blog", label: "Blog", category: "Daily Blog" },
  {
    id: "correlation",
    key: "daily_correlation",
    label: "Correlation",
    category: "Correlations",
  },
  {
    id: "review",
    key: "blog_review",
    label: "Review",
    category: "Blog Review",
  },
  {
    id: "morning",
    key: "morning",
    label: "Morning Brief",
    category: "Morning Brief",
  },
  {
    id: "macro",
    key: "macro_pulse",
    label: "Macro Pulse",
    category: "Macro",
  },
  {
    id: "ai-summary",
    key: "ai_summary",
    label: "AI Summary",
    category: "AI Summary",
  },
] as const;

export type ArticleType = (typeof TYPES)[number]["id"];

const SNAPSHOT = snapshot as Snapshot;

function dateFromDocId(docId: string): number {
  const datePart = docId.split(":")[1];
  if (!datePart) return Date.now();
  return new Date(datePart).getTime();
}

function getString(data: Record<string, unknown>, key: string): string | undefined {
  const v = data[key];
  return typeof v === "string" ? v : undefined;
}

function deriveSummary(body: string): string {
  const firstSentence = body.split(/[.!?]/)[0]?.trim() ?? "";
  if (firstSentence.length > 20) return firstSentence + ".";
  return body.slice(0, 200);
}

function entryToArticle(
  type: (typeof TYPES)[number],
  entry: NonNullable<StaticEntry>,
): FirestoreArticle | null {
  const data = entry.data;
  const title =
    getString(data, "title") ||
    getString(data, "blog_title") ||
    `${type.label} — ${entry.doc_id.split(":")[1] ?? "today"}`;

  const body =
    getString(data, "body") ||
    getString(data, "summary") ||
    getString(data, "brief") ||
    getString(data, "ai_summary") ||
    "";

  const slug = getString(data, "slug") || `${type.id}-${entry.doc_id.split(":")[1] ?? "today"}`;
  const publishedAt = dateFromDocId(entry.doc_id);

  const base: FirestoreArticle = {
    slug,
    title,
    content: body,
    contentFormat: "markdown",
    publishedAt,
    summary: deriveSummary(body),
    category: type.category,
    tags: [type.id],
  };

  if (type.id === "ai-summary") {
    const toStringArray = (v: unknown): string[] =>
      Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
    base.aiSummary = {
      macro_regime: getString(data, "macro_regime") ?? "",
      market_tone: getString(data, "market_tone") ?? "",
      breadth_pct: typeof data.breadth_pct === "number" ? data.breadth_pct : 0,
      leading_sectors: toStringArray(data.leading_sectors),
      lagging_sectors: toStringArray(data.lagging_sectors),
      news_sentiment: getString(data, "news_sentiment") ?? "",
    };
  }

  return base;
}

function articleToCard(a: FirestoreArticle): ArticleCard {
  const { slug, title, summary, publishedAt, category, imageUrl } = a;
  return { slug, title, summary, publishedAt, category, imageUrl };
}

export function getArticleTypes(): readonly { id: ArticleType; label: string; category: string }[] {
  return TYPES.map(({ id, label, category }) => ({ id, label, category }));
}

export function getArticleByType(typeId: ArticleType): FirestoreArticle | null {
  const meta = TYPES.find((t) => t.id === typeId);
  if (!meta) return null;
  const entry = SNAPSHOT[meta.key];
  if (!entry) return null;
  return entryToArticle(meta, entry);
}

export function getArticleRawByType(typeId: ArticleType): {
  meta: (typeof TYPES)[number];
  data: Record<string, unknown>;
  docId: string;
} | null {
  const meta = TYPES.find((t) => t.id === typeId);
  if (!meta) return null;
  const entry = SNAPSHOT[meta.key];
  if (!entry) return null;
  return { meta, data: entry.data, docId: entry.doc_id };
}

export function getAllArticleCards(): ArticleCard[] {
  const cards: ArticleCard[] = [];
  for (const t of TYPES) {
    const entry = SNAPSHOT[t.key];
    if (!entry) continue;
    const article = entryToArticle(t, entry);
    if (article) cards.push(articleToCard(article));
  }
  return cards.sort((a, b) => b.publishedAt - a.publishedAt);
}

export function getLatestStaticArticle(): ArticleCard | null {
  const cards = getAllArticleCards();
  return cards[0] ?? null;
}
