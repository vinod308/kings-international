import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Leather Knowledge",
  description:
    "Sourcing guides and explainers on leather grades, manufacturing models, and compliance - written for brands, wholesalers, and buyers sourcing leather goods.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Leather Knowledge"
        title="Sourcing guides, written for buyers."
        intro="Plain-language explainers on the leather, manufacturing, and compliance questions that come up most often before an order gets placed."
        image="/images/kings/manufacturing/tannery-hides.jpg"
        imageAlt="Hides drying at the Kings International tannery"
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((p) => (
              <RevealItem key={p.slug} type="up">
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block rounded-2xl bg-white border border-[var(--line)] overflow-hidden hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.14em] uppercase text-cream/90 bg-ink/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-ink-soft/50 mb-2">{p.date}</p>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-[18px] font-semibold text-ink leading-snug">{p.title}</h3>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 mt-1 text-ink-soft/40 group-hover:text-green group-hover:rotate-45 transition-all duration-300"
                      />
                    </div>
                    <p className="text-[13.5px] leading-relaxed text-ink-soft">{p.excerpt}</p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
