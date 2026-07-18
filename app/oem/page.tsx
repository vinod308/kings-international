import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Tag, Wrench, Package, ShieldCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "OEM Services",
  description:
    "Full-service OEM and private-label leather manufacturing across every category we produce - from private labelling an existing design to fully custom product development, Kanpur, India.",
};

const MODELS = [
  {
    icon: Tag,
    title: "Private Labelling",
    body: "Choose from our existing catalogue of belts, bags, saddlery and accessories, and we produce it under your brand - your branding, packaging and hang tags, our proven design.",
  },
  {
    icon: Wrench,
    title: "Fully Custom Development",
    body: "Send a brief, a sketch, or a physical sample. We build a pattern and a counter-sample for your approval, then move to bulk production once the design is locked.",
  },
  {
    icon: Package,
    title: "Component Sourcing",
    body: "Hardware, hides, linings and trims sourced to your specification, whether you need full production support or just the raw materials.",
  },
  {
    icon: ShieldCheck,
    title: "Export & Compliance Support",
    body: "REACH-compliant chemicals, ISO 9001 quality management, and documentation support for buyers navigating export requirements into new markets.",
  },
];

export default function OemPage() {
  return (
    <>
      <PageHero
        eyebrow="B2B Hub · OEM Services"
        title="Your brand, our vertically integrated production."
        intro="From private labelling an existing catalogue line to developing a fully bespoke product from a blank brief, our facility handles it under one roof - tanning, cutting, stitching and finishing, all in Kanpur."
        image="/images/kings/products/leather-goods.jpg"
        imageAlt="Finished leather goods ready for dispatch at Kings International"
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">How We Work With Brands</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              Four ways to engage, one production floor.
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 gap-5">
            {MODELS.map((m) => (
              <RevealItem key={m.title} type="up">
                <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-7">
                  <div className="w-11 h-11 rounded-xl bg-green-soft flex items-center justify-center text-green mb-4">
                    <m.icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[16px] font-semibold text-ink mb-2">{m.title}</h3>
                  <p className="text-[14px] leading-relaxed text-ink-soft">{m.body}</p>
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
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Why It Works</p>
                <h2 className="font-display text-[clamp(26px,3vw,36px)] leading-[1.1] tracking-tight text-ink">
                  Vertically integrated, start to finish.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal type="up" delay={0.1}>
                <p className="text-[16px] leading-relaxed text-ink-soft">
                  Because tanning, cutting, stitching, and finishing all happen within our own facility, we can hold
                  consistency across a production run in a way that&apos;s harder to guarantee when a supply chain is
                  split across multiple subcontractors - and we can move faster when a specification changes
                  mid-development. We work with brands, wholesalers, distributors, retailers, and OEM partners of
                  varying sizes, from a first trial order to a repeat seasonal programme.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal type="up">
            <div className="rounded-3xl bg-ink px-8 py-12 sm:px-14 sm:py-16 flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">
                  Ready to develop a product?
                </p>
                <h3 className="font-display text-[clamp(24px,2.8vw,34px)] leading-tight tracking-tight text-cream">
                  Tell us your brief. We&apos;ll tell you what&apos;s realistic.
                </h3>
              </div>
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase text-ink hover:bg-cream transition-colors shrink-0"
              >
                Request a Quote
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
