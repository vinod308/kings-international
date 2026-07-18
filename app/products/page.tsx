import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Our Leathers",
  description:
    "Six leather categories, one tannery - finished, buffalo, goat, safety shoe, industrial leather and finished leather goods, tanned and manufactured in-house in Kanpur.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Leathers · By Type"
        title="Six leather categories, one tannery."
        intro="From raw hide to finished product, every leather we tan and every good we stitch comes off the same Kanpur floor. Explore each category below."
        image="/images/kings/hero/manufacturing-hero.jpg"
        imageAlt="Leather production line at Kings International, Kanpur"
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <RevealItem key={p.slug} type="up">
                <Link
                  href={`/products/${p.slug}`}
                  className="group block rounded-2xl bg-white border border-[var(--line)] overflow-hidden hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-[0.12em] text-cream/90 bg-ink/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {p.num} / 06
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-[19px] font-semibold text-ink">{p.title}</h3>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 mt-1 text-ink-soft/40 group-hover:text-green group-hover:rotate-45 transition-all duration-300"
                      />
                    </div>
                    <p className="text-[13.5px] leading-relaxed text-ink-soft">{p.blurb}</p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-cream-deep pb-24 sm:pb-32">
        <div className="container-site">
          <Reveal type="up">
            <div className="rounded-3xl bg-ink px-8 py-12 sm:px-14 sm:py-16 flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">
                  Private label or fully custom
                </p>
                <h3 className="font-display text-[clamp(24px,2.8vw,34px)] leading-tight tracking-tight text-cream">
                  Tell us the leather. We&apos;ll build the product.
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
