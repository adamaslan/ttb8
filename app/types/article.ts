// Shape of a document stored in Firestore under the "articles" collection.
// The backend writes this shape; the frontend reads it.
export interface FirestoreArticle {
  slug: string;
  title: string;
  content: string;
  contentFormat: "html" | "markdown";
  publishedAt: number; // Unix timestamp in milliseconds
  summary: string;
  category: string;
  imageUrl?: string;
  tags?: string[];
  // Story-article extras (present when sourced from gcp3 daily_story cache)
  stale?: boolean;
  stale_date?: string;
  extreme_pair?: {
    pair_id: string;
    signal: "agreement" | "divergence" | "neutral";
    score: number;
    summary: string;
    source_a: string;
    source_b: string;
  };
  all_pairs_count?: number;
  // AI Summary extras (present when category === "AI Summary")
  aiSummary?: {
    macro_regime: string;
    market_tone: string;
    breadth_pct: number;
    leading_sectors: string[];
    lagging_sectors: string[];
    news_sentiment: string;
  };
}

// Lightweight version for landing page card display (no content field)
export interface ArticleCard {
  slug: string;
  title: string;
  summary: string;
  publishedAt: number;
  category: string;
  imageUrl?: string;
}
