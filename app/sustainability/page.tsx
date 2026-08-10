import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { readContentFile } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Zero-liquid-discharge tannery, lime water recycling, hair-saving recovery, and REACH-compliant chemicals - measured sustainability at Kings International's Kanpur facility.",
};

type SustainabilityContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  initiativesSection: {
    eyebrow: string;
    heading: string;
    items: { icon: string; title: string; note: string | null; body: string }[];
    pillarsImage?: string;
    pillarsImageAlt?: string;
  };
  commitmentsSection: { eyebrow: string; heading: string; body?: string; items: string[] };
  cta: { eyebrow: string; heading: string; buttonText: string; buttonHref: string };
};

export default function SustainabilityPage() {
  const content = readContentFile<SustainabilityContent>("settings/sustainability.json");
  const { hero, initiativesSection, commitmentsSection, cta } = content;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt={hero.imageAlt} />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{initiativesSection.eyebrow}</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              {initiativesSection.heading}
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 gap-5">
            {initiativesSection.items.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <RevealItem key={s.title} type="up">
                  <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-7">
                    <div className="w-11 h-11 rounded-xl bg-green-soft flex items-center justify-center text-green mb-4">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-[16px] font-semibold text-ink mb-1">{s.title}</h3>
                    {s.note && (
                      <p className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-gold mb-3">{s.note}</p>
                    )}
                    <p className={`text-[13.5px] leading-relaxed text-ink-soft ${s.note ? "" : "mt-3"}`}>{s.body}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {initiativesSection.pillarsImage && (
            <Reveal type="up" className="mt-14">
              <Image
                src={initiativesSection.pillarsImage}
                alt={initiativesSection.pillarsImageAlt ?? ""}
                width={1600}
                height={853}
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="w-full h-auto rounded-2xl"
              />
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-cream-deep py-24 sm:py-32">
        <div className="container-site">
          <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 overflow-hidden">
            <Image
              src="/images/kings/logo/kings-international-logo-grey.png"
              alt=""
              aria-hidden="true"
              width={1212}
              height={1536}
              className="pointer-events-none select-none absolute left-1/2 top-1/2 w-[140px] sm:w-[180px] h-auto -translate-x-1/2 -translate-y-1/2 opacity-15"
            />
            <div className="relative z-10 lg:col-span-5">
              <Reveal type="up">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{commitmentsSection.eyebrow}</p>
                <h2 className="font-display text-[clamp(26px,3vw,36px)] leading-[1.1] tracking-tight text-ink">
                  {commitmentsSection.heading}
                </h2>
              </Reveal>
            </div>
            <div className="relative z-10 lg:col-span-7">
              {commitmentsSection.body && (
                <Reveal type="up" className="flex flex-col gap-4 mb-8">
                  {commitmentsSection.body.split("\n\n").map((p, i) => (
                    <p key={i} className="text-[16px] leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </Reveal>
              )}
              <Reveal type="up" delay={0.1}>
                <ul className="flex flex-col gap-4">
                  {commitmentsSection.items.map((c) => (
                    <li key={c} className="flex items-start gap-3 border-b border-[var(--line)] pb-4 last:border-0 last:pb-0">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                      <span className="text-[15px] leading-relaxed text-ink-soft">{c}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

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
