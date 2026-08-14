import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { readContentFile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Smart Factory",
  description:
    "A section-by-section manufacturing process for saddlery, harness, belts and pet accessories - traditional hand craftsmanship where it matters, modern machinery where it counts. Kanpur, India.",
  alternates: { canonical: "/smart-factory" },
};

type ManufacturingContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  floorSection: { eyebrow: string; heading: string; items: { num: string; title: string; body: string }[] };
  cta: { eyebrow: string; heading: string; buttonText: string; buttonHref: string };
};

export default function ManufacturingPage() {
  const content = readContentFile<ManufacturingContent>("settings/manufacturing.json");
  const { hero, floorSection, cta } = content;

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
