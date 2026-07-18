import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Droplets, Wind, Recycle, FlaskConical } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Zero-liquid-discharge tannery, lime water recycling, hair-saving recovery, and REACH-compliant chemicals - measured sustainability at Kings International's Kanpur facility.",
};

const INITIATIVES = [
  {
    icon: Droplets,
    title: "Lime Water Recycling System",
    note: "Since 2015",
    body: "Recycles roughly 600 KL (600,000 litres) of lime water annually, recovers 80% of re-lime liquor, reduces water use by 800 litres per ton of processed leather, and saves 15-25% on lime consumption.",
  },
  {
    icon: Wind,
    title: "Hair Saving Screen",
    note: "UNIDO-selected, 2016",
    body: "Recovers hair from the tanning process instead of chemically dissolving it, cutting Chemical Oxygen Demand (COD) in effluent by 50%. Recovered hair is repurposed as organic fertiliser for green-belt development.",
  },
  {
    icon: Recycle,
    title: "Mechanical Salt De-dusting",
    note: null,
    body: "Recovers roughly 6 kg of salt per hide (versus roughly 3 kg manually), preventing an estimated 550 tons of salt from entering the environment each year and reducing effluent Total Dissolved Solids (TDS) by 15-20%.",
  },
  {
    icon: FlaskConical,
    title: "Primary Effluent Treatment Plant (PETP) Upgrade",
    note: null,
    body: "A mechanical sludge dewatering system independently assessed by the Central Leather Research Institute (CLRI), confirming compliance with environmental discharge norms.",
  },
];

const COMMITMENTS = [
  "Zero-liquid-discharge tannery, treating and recycling process water on site.",
  "REACH-compliant chemicals used throughout tanning and finishing.",
  "Solar power supplementing the facility's energy load.",
  "ISO 14001 environmental management, independently audited.",
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Real numbers from a real tannery, not vague claims."
        intro="We didn't add sustainability to our process. We built our process to be sustainable - measured in litres recycled, kilograms of salt recovered, and audits passed, not marketing language."
        image="/images/kings/manufacturing/sustainability-zld-plant.jpg"
        imageAlt="Kings International's zero-liquid-discharge water treatment plant"
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Measured, Not Claimed</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              Four initiatives, with the numbers behind them.
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 gap-5">
            {INITIATIVES.map((s) => (
              <RevealItem key={s.title} type="up">
                <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-7">
                  <div className="w-11 h-11 rounded-xl bg-green-soft flex items-center justify-center text-green mb-4">
                    <s.icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[16px] font-semibold text-ink mb-1">{s.title}</h3>
                  {s.note && (
                    <p className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-gold mb-3">{s.note}</p>
                  )}
                  <p className={`text-[13.5px] leading-relaxed text-ink-soft ${s.note ? "" : "mt-3"}`}>{s.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-cream-deep py-24 sm:py-32">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            <div className="lg:col-span-5">
              <Reveal type="up">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Ongoing Commitments</p>
                <h2 className="font-display text-[clamp(26px,3vw,36px)] leading-[1.1] tracking-tight text-ink">
                  Sustainability isn&apos;t a slogan.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal type="up" delay={0.1}>
                <ul className="flex flex-col gap-4">
                  {COMMITMENTS.map((c) => (
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
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">Compliance</p>
                <h3 className="font-display text-[clamp(24px,2.8vw,34px)] leading-tight tracking-tight text-cream">
                  See the certifications behind these numbers.
                </h3>
              </div>
              <Link
                href="/certifications"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase text-ink hover:bg-cream transition-colors shrink-0"
              >
                View Certifications
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
