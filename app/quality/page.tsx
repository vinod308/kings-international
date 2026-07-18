import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { readContentFile } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Quality checkpoints at every stage of production, not just before dispatch - hide grading, in-process inspection, and pre-shipment sign-off at Kings International, Kanpur.",
};

type QualityContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  stagesSection: { eyebrow: string; heading: string; items: { icon: string; num: string; title: string; body: string }[] };
  whySection: { eyebrow: string; heading: string; body: string };
  cta: { eyebrow: string; heading: string; buttonText: string; buttonHref: string };
};

export default function QualityPage() {
  const content = readContentFile<QualityContent>("settings/quality.json");
  const { hero, stagesSection, whySection, cta } = content;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt={hero.imageAlt} />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{stagesSection.eyebrow}</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              {stagesSection.heading}
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stagesSection.items.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <RevealItem key={s.num} type="up">
                  <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-green-soft flex items-center justify-center text-green">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <span className="text-[11px] font-bold tracking-[0.16em] text-ink-soft/35">{s.num}</span>
                    </div>
                    <h3 className="text-[15px] font-semibold text-ink mb-1.5 leading-snug">{s.title}</h3>
                    <p className="text-[13px] leading-relaxed text-ink-soft">{s.body}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-cream-deep py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-16 max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{whySection.eyebrow}</p>
            <h2 className="font-display text-[clamp(26px,3.2vw,40px)] leading-[1.1] tracking-tight text-ink mb-6">
              {whySection.heading}
            </h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">{whySection.body}</p>
          </Reveal>

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
