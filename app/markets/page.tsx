import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { readContentFile } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "By Industry",
  description:
    "Kings International supplies leather across fashion, equestrian, automotive, industrial footwear, pet, and outdoor markets - vertically integrated from hide to finished product.",
};

type MarketsContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  markets: { icon: string; title: string; body: string; links: { label: string; href: string }[] }[];
  cta: { eyebrow: string; heading: string; buttonText: string; buttonHref: string };
};

export default function MarketsPage() {
  const content = readContentFile<MarketsContent>("settings/markets.json");
  const { hero, markets, cta } = content;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt={hero.imageAlt} />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((m) => {
              const Icon = getIcon(m.icon);
              return (
                <RevealItem key={m.title} type="up">
                  <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-7">
                    <div className="w-11 h-11 rounded-xl bg-green-soft flex items-center justify-center text-green mb-5">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display text-[19px] font-semibold text-ink mb-2">{m.title}</h3>
                    <p className="text-[13.5px] leading-relaxed text-ink-soft mb-5">{m.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {m.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="inline-flex items-center gap-1 text-[12.5px] font-medium text-green hover:text-green-deep transition-colors"
                        >
                          {l.label}
                          <ArrowUpRight size={13} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </RevealItem>
              );
            })}
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
