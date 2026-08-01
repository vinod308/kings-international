import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import {
  CERTIFICATIONS,
  WHY_CERTIFIED,
  CERTIFICATIONS_HERO,
  CERTIFICATIONS_SECTION,
  CERTIFICATIONS_CTA,
  AWARDS_SECTION,
  AWARDS,
} from "@/lib/certifications";

export const metadata: Metadata = {
  title: "Certifications & Awards",
  description:
    "Quality, environmental, health & safety, energy and social accountability standards audited across Kings International's Kanpur factory and tannery. Certificate documents available on request.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow={CERTIFICATIONS_HERO.eyebrow}
        title={CERTIFICATIONS_HERO.title}
        intro={CERTIFICATIONS_HERO.intro}
        image={CERTIFICATIONS_HERO.image}
        imageAlt={CERTIFICATIONS_HERO.imageAlt}
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <RevealGroup className="grid sm:grid-cols-3 gap-5 mb-20 sm:mb-28">
            {WHY_CERTIFIED.map((w) => (
              <RevealItem key={w.title} type="up">
                <div className="h-full rounded-2xl bg-cream-deep p-6">
                  <h3 className="text-[15px] font-semibold text-ink mb-1.5">{w.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-soft">{w.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{CERTIFICATIONS_SECTION.eyebrow}</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              {CERTIFICATIONS_SECTION.heading}
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATIONS.map((c) => (
              <RevealItem key={c.num} type="up">
                <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-6">
                  <div className="w-11 h-11 rounded-xl bg-green-soft flex items-center justify-center text-green mb-4">
                    <BadgeCheck size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[14.5px] font-semibold text-ink mb-1.5 leading-snug">{c.title}</h3>
                  <p className="text-[12.5px] leading-relaxed text-ink-soft">{c.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {AWARDS.length > 0 && (
        <section className="bg-cream-deep py-24 sm:py-32">
          <div className="container-site">
            <Reveal type="up" className="mb-14 max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{AWARDS_SECTION.eyebrow}</p>
              <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
                {AWARDS_SECTION.heading}
              </h2>
            </Reveal>

            <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {AWARDS.map((a) => (
                <RevealItem key={a.image} type="up">
                  <div className="rounded-2xl overflow-hidden bg-white border border-[var(--line)]">
                    <div className="relative aspect-[4/3]">
                      <Image src={a.image} alt={a.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain p-4" />
                    </div>
                    {a.caption && (
                      <p className="px-5 pb-5 text-[13px] text-ink-soft text-center">{a.caption}</p>
                    )}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <section className="bg-cream-deep pb-24 sm:pb-32">
        <div className="container-site">
          <Reveal type="up">
            <div className="rounded-3xl bg-ink px-8 py-12 sm:px-14 sm:py-16 flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">{CERTIFICATIONS_CTA.eyebrow}</p>
                <h3 className="font-display text-[clamp(24px,2.8vw,34px)] leading-tight tracking-tight text-cream">
                  {CERTIFICATIONS_CTA.heading}
                </h3>
              </div>
              <Link
                href={CERTIFICATIONS_CTA.buttonHref}
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase text-ink hover:bg-cream transition-colors shrink-0"
              >
                {CERTIFICATIONS_CTA.buttonText}
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
