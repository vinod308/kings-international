import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BRANDS } from "@/lib/brands";
import { readContentFile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Smart Factory",
  description:
    "A section-by-section manufacturing process for saddlery, harness, belts and pet accessories - traditional hand craftsmanship where it matters, modern machinery where it counts. Kanpur, India.",
};

type ManufacturingContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  floorSection: { eyebrow: string; heading: string; items: { num: string; title: string; body: string }[] };
  brandsSection: { eyebrow: string; heading: string };
  cta: { eyebrow: string; heading: string; buttonText: string; buttonHref: string };
};

export default function ManufacturingPage() {
  const content = readContentFile<ManufacturingContent>("settings/manufacturing.json");
  const { hero, floorSection, brandsSection, cta } = content;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt={hero.imageAlt} />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{floorSection.eyebrow}</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              {floorSection.heading}
            </h2>
          </Reveal>

          <RevealGroup className="flex flex-col gap-4">
            {floorSection.items.map((f) => (
              <RevealItem key={f.num} type="up">
                <div className="grid sm:grid-cols-[minmax(0,3fr)_minmax(0,9fr)] gap-4 sm:gap-10 p-6 sm:p-8 rounded-2xl bg-white border border-[var(--line)] items-start">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-[26px] sm:text-[30px] font-bold text-ink/20 tracking-tight">
                      {f.num}
                    </span>
                    <h3 className="text-[17px] sm:text-[19px] font-semibold text-ink tracking-tight">{f.title}</h3>
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-ink-soft">{f.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-cream-deep py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{brandsSection.eyebrow}</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              {brandsSection.heading}
            </h2>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">
            {BRANDS.map((b) => (
              <RevealItem key={b.slug} type="up">
                <Link href={`/brands/${b.slug}`} className="group block relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    sizes="(max-width: 768px) 45vw, 18vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <span className="absolute left-4 bottom-4 right-4 text-cream text-[15px] font-display font-semibold tracking-tight">
                    {b.name}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

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
