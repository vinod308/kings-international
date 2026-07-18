import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Search, Ruler, ClipboardCheck, PackageCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Quality checkpoints at every stage of production, not just before dispatch - hide grading, in-process inspection, and pre-shipment sign-off at Kings International, Kanpur.",
};

const STAGES = [
  {
    icon: Search,
    num: "01",
    title: "Hide Grading",
    body: "Every hide is graded before it enters the tannery - thickness, grain quality, and blemishes assessed before a single cut is made.",
  },
  {
    icon: Ruler,
    num: "02",
    title: "In-Process Inspection",
    body: "Cutting, stitching, and finishing are checked at each stage of the floor, not just at the end - so a defect is caught where it happens, not after the batch is complete.",
  },
  {
    icon: ClipboardCheck,
    num: "03",
    title: "Pre-Dispatch Sign-Off",
    body: "A final inspection against the agreed specification before anything is packed - stitching density, hardware fit, colour match, and finish are all checked against the approved sample.",
  },
  {
    icon: PackageCheck,
    num: "04",
    title: "Documentation & Traceability",
    body: "Batch records and inspection documentation are kept for every order, so quality issues - if they ever arise - can be traced back to the stage that caused them.",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Assurance"
        title="Inspected before it leaves, not just before it's sold."
        intro="Quality control happens at every stage of production on our floor, backed by ISO 9001 quality management - not a single check at the end of the line."
        image="/images/kings/manufacturing/handcraft-stitching.jpg"
        imageAlt="Quality inspection during hand-stitching at Kings International"
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">The Process</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              Four checkpoints, hide to dispatch.
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STAGES.map((s) => (
              <RevealItem key={s.num} type="up">
                <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-green-soft flex items-center justify-center text-green">
                      <s.icon size={20} strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-bold tracking-[0.16em] text-ink-soft/35">{s.num}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-ink mb-1.5 leading-snug">{s.title}</h3>
                  <p className="text-[13px] leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-cream-deep py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-16 max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Why It Matters</p>
            <h2 className="font-display text-[clamp(26px,3.2vw,40px)] leading-[1.1] tracking-tight text-ink mb-6">
              A sample and a bulk order should be the same product.
            </h2>
            <p className="text-[16px] leading-relaxed text-ink-soft">
              Because tanning, cutting, stitching, and finishing all happen in-house, we can hold consistency across
              a production run in a way that&apos;s harder to guarantee when a supply chain is split across multiple
              subcontractors. What passed inspection in the sample room is what leaves the factory in the container.
            </p>
          </Reveal>

          <Reveal type="up">
            <div className="rounded-3xl bg-ink px-8 py-12 sm:px-14 sm:py-16 flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">Certifications</p>
                <h3 className="font-display text-[clamp(24px,2.8vw,34px)] leading-tight tracking-tight text-cream">
                  Backed by ISO 9001 and seven other standards.
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
