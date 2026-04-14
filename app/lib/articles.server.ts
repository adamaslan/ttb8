// Server-only module. Never import from client components.
// Reads story articles from the gcp3_cache Firestore collection.
// Documents are keyed as "daily_story:{YYYY-MM-DD}" and written by
// the gcp3 backend's story_picker.py (Stage B6 of /refresh/bake).

import { getDb } from "~/lib/firestore.server";
import type { FirestoreArticle, ArticleCard } from "~/types/article";

const COLLECTION = "gcp3_cache";
const DOC_PREFIX = "daily_story:";
const CATEGORY = "Market Intelligence";

// ─── Shape written by story_picker.py ────────────────────────────────────────
interface StoryDoc {
  date: string;
  title: string;
  slug: string;
  body: string;
  extreme_pair: {
    pair_id: string;
    signal: "agreement" | "divergence" | "neutral";
    score: number;
    summary: string;
    source_a: string;
    source_b: string;
  };
  all_pairs_count: number;
  stale: boolean;
  stale_date?: string;
  expires_at?: { toMillis?: () => number } | null;
  updated_at?: { toMillis?: () => number } | null;
}

function storyToArticle(doc: StoryDoc): FirestoreArticle {
  // Derive a one-sentence summary from the first sentence of the body
  const firstSentence = doc.body.split(/[.!?]/)[0].trim();
  const summary = firstSentence.length > 20 ? firstSentence + "." : doc.body.slice(0, 160);

  // Derive publishedAt: prefer updated_at from Firestore metadata, else parse date string
  const publishedAt =
    doc.updated_at?.toMillis?.() ??
    (doc.date ? new Date(doc.date).getTime() : Date.now());

  // Build tags from the extreme pair IDs
  const tags = [
    doc.extreme_pair?.signal,
    doc.extreme_pair?.pair_id,
    "correlation",
    "market",
  ].filter(Boolean) as string[];

  return {
    slug: doc.slug,
    title: doc.title,
    content: doc.body,
    contentFormat: "markdown",
    publishedAt,
    summary,
    category: CATEGORY,
    tags,
    stale: doc.stale,
    stale_date: doc.stale_date,
    extreme_pair: doc.extreme_pair,
    all_pairs_count: doc.all_pairs_count,
  };
}

function articleToCard(a: FirestoreArticle): ArticleCard {
  const { slug, title, summary, publishedAt, category, imageUrl } = a;
  return { slug, title, summary, publishedAt, category, imageUrl };
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function getLatestArticle(): Promise<ArticleCard | null> {
  const db = getDb();
  // Query the two most recent daily_story docs (in case today's isn't written yet)
  const snap = await db
    .collection(COLLECTION)
    .where("__name__", ">=", DOC_PREFIX)
    .where("__name__", "<", DOC_PREFIX + "\uf8ff")
    .orderBy("__name__", "desc")
    .limit(1)
    .get();

  if (snap.empty) return null;
  const raw = snap.docs[0].data() as StoryDoc & { value?: StoryDoc };
  // gcp3_cache wraps the payload under a "value" field
  const doc = raw.value ?? raw;
  if (!doc.slug || !doc.title) return null;
  return articleToCard(storyToArticle(doc));
}

export async function getArticleBySlug(slug: string): Promise<FirestoreArticle | null> {
  const db = getDb();
  // Slug format from story_picker: e.g. "tech-leads-bonds-scream-warning"
  // We need to scan recent docs since we don't have a slug→date index
  const snap = await db
    .collection(COLLECTION)
    .where("__name__", ">=", DOC_PREFIX)
    .where("__name__", "<", DOC_PREFIX + "\uf8ff")
    .orderBy("__name__", "desc")
    .limit(30)
    .get();

  for (const docSnap of snap.docs) {
    const raw = docSnap.data() as StoryDoc & { value?: StoryDoc };
    const doc = raw.value ?? raw;
    if (doc.slug === slug) return storyToArticle(doc);
  }
  return null;
}

export async function getRecentArticles(limit = 10): Promise<ArticleCard[]> {
  const db = getDb();
  const snap = await db
    .collection(COLLECTION)
    .where("__name__", ">=", DOC_PREFIX)
    .where("__name__", "<", DOC_PREFIX + "\uf8ff")
    .orderBy("__name__", "desc")
    .limit(limit)
    .get();

  return snap.docs
    .map((d) => {
      const raw = d.data() as StoryDoc & { value?: StoryDoc };
      const doc = raw.value ?? raw;
      if (!doc.slug || !doc.title) return null;
      return articleToCard(storyToArticle(doc));
    })
    .filter((a): a is ArticleCard => a !== null);
}
