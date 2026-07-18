import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";
import MediaGallery from "@/components/sections/media/MediaGallery";
import { MEDIA_ITEMS } from "@/lib/media";
import { readContentFile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Media & Gallery",
  description:
    "Photos from Kings International's Kanpur facility - the tannery floor, hand-stitching, the ZLD water treatment plant, and the product range across belts, bags, saddlery and accessories.",
};

type MediaContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  gallerySection: { eyebrow: string; heading: string };
  cta: { eyebrow: string; heading: string; buttonText: string; buttonHref: string };
};

export default function MediaPage() {
  const content = readContentFile<MediaContent>("settings/media.json");
  const { hero, gallerySection, cta } = content;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt={hero.imageAlt} />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{gallerySection.eyebrow}</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              {gallerySection.heading}
            </h2>
          </Reveal>

          <MediaGallery items={MEDIA_ITEMS} />
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
