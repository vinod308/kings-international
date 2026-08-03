import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BRANDS } from "@/lib/brands";
import { readContentFile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "Kingston, Equitel, Ryder Belts, Target and Pets' Pal - five house brands, each built for its own category, all cut, stitched and finished on the same Kanpur floor.",
};

type BrandsPageContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  cta: { eyebrow: string; heading: string; buttonText: string; buttonHref: string };
};

export default function BrandsPage() {
  const { hero, cta } = readContentFile<BrandsPageContent>("settings/brands.json");

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt={hero.imageAlt} />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANDS.map((b) => (
              <RevealItem key={b.slug} type="up">
                <Link
                  href={`/brands/${b.slug}`}
                  className="group block rounded-2xl bg-white border border-[var(--line)] overflow-hidden hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src={b.image}
                      alt={b.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-[0.12em] text-cream/90 bg-ink/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {b.num} / 05
                    </span>
                    <span className="absolute bottom-4 left-4 text-[10px] font-semibold tracking-[0.14em] uppercase text-green">
                      {b.tag}
                    </span>
                  </div>
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h3 className="font-display text-[19px] font-semibold text-ink">{b.name}</h3>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-ink-soft/40 group-hover:text-green group-hover:rotate-45 transition-all duration-300"
                      />
                    </div>
                    <p className="text-[13.5px] leading-relaxed text-ink-soft">{b.copy}</p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-cream-deep pb-24 sm:pb-32">
        <div className="container-site">
          <Reveal type="up">
            <div className="rounded-3xl bg-ink px-8 py-12 sm:px-14 sm:py-16 flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">{cta.eyebrow}</p>
                <h3 className="font-display text-[clamp(24px,2.8vw,34px)] leading-tight tracking-tight text-cream">
                  {cta.heading}
                </h3>
              </div>
              <Link
                href={cta.buttonHref}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase text-ink hover:bg-cream transition-colors shrink-0"
              >
                {cta.buttonText}
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
