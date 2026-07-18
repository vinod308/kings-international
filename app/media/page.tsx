import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import MediaGallery from "@/components/sections/media/MediaGallery";

export const metadata: Metadata = {
  title: "Media & Gallery",
  description:
    "Photos from Kings International's Kanpur facility - the tannery floor, hand-stitching, the ZLD water treatment plant, and the product range across belts, bags, saddlery and accessories.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media & Gallery"
        title="The floor, and what comes off it."
        intro="A look inside the Kanpur facility - the tannery, the stitching floor, the water treatment plant - alongside the product range it produces."
        image="/images/kings/brand/facility.jpg"
        imageAlt="Kings International facility, Kanpur"
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Gallery</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              Facility and product, in frame.
            </h2>
          </Reveal>

          <MediaGallery />
        </div>
      </section>

      <section className="bg-cream-deep pb-24 sm:pb-32">
        <div className="container-site">
          <Reveal type="up">
            <div className="rounded-3xl bg-ink px-8 py-12 sm:px-14 sm:py-16 flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">
                  Compliance paperwork
                </p>
                <h3 className="font-display text-[clamp(24px,2.8vw,34px)] leading-tight tracking-tight text-cream">
                  Certification documents are available on request.
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
