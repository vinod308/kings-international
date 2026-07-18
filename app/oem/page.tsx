import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { readContentFile } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "OEM Services",
  description:
    "Full-service OEM and private-label leather manufacturing across every category we produce - from private labelling an existing design to fully custom product development, Kanpur, India.",
};

type OemContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  modelsSection: { eyebrow: string; heading: string; items: { icon: string; title: string; body: string }[] };
  whySection: { eyebrow: string; heading: string; body: string };
  cta: { eyebrow: string; heading: string; buttonText: string; buttonHref: string };
};

export default function OemPage() {
  const content = readContentFile<OemContent>("settings/oem.json");
  const { hero, modelsSection, whySection, cta } = content;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt={hero.imageAlt} />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{modelsSection.eyebrow}</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              {modelsSection.heading}
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 gap-5">
            {modelsSection.items.map((m) => {
              const Icon = getIcon(m.icon);
              return (
                <RevealItem key={m.title} type="up">
                  <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-7">
                    <div className="w-11 h-11 rounded-xl bg-green-soft flex items-center justify-center text-green mb-4">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-[16px] font-semibold text-ink mb-2">{m.title}</h3>
                    <p className="text-[14px] leading-relaxed text-ink-soft">{m.body}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-cream-deep py-24 sm:py-32">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            <div className="lg:col-span-5">
              <Reveal type="up">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{whySection.eyebrow}</p>
                <h2 className="font-display text-[clamp(26px,3vw,36px)] leading-[1.1] tracking-tight text-ink">
                  {whySection.heading}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal type="up" delay={0.1}>
                <p className="text-[16px] leading-relaxed text-ink-soft">{whySection.body}</p>
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
