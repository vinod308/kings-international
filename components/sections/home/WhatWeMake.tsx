import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { PRODUCTS } from "@/lib/products";

export default function WhatWeMake() {
  return (
    <section className="bg-cream-deep py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">02 · What We Make</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink">
            Six categories, one tannery.
          </h2>
        </Reveal>

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
  );
}
