import type { MetaFunction } from "react-router";
import { SectionGrid } from "~/components/SectionGrid";
import { SECTION_ARTICLES, SECTION_META } from "~/lib/section-articles";

const META = SECTION_META.biotech;

export const meta: MetaFunction = () => [
  { title: `${META.label} — Tasty Tech Bytes` },
  { name: "description", content: META.blurb },
];

export default function BiotechSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white">
          <span className="mr-2">{META.emoji}</span>
          {META.label}
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-gray-400">{META.blurb}</p>
      </header>
      <SectionGrid articles={SECTION_ARTICLES.biotech} />
    </div>
  );
}
