import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import QuoteForm from "@/components/sections/quote/QuoteForm";
import { readContentFile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell Kings International what you need to source - product category, quantities, and destination market - and get a reply from the Kanpur export desk within one business day.",
};

type QuoteContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  why: { num: string; title: string; body: string }[];
};

export default function QuotePage() {
  const { hero, why } = readContentFile<QuoteContent>("settings/quote.json");

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt={hero.imageAlt} />

      <section className="bg-cream py-24 sm:py-32">
        <QuoteForm why={why} />
      </section>
    </>
  );
}
