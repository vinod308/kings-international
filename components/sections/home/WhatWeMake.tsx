import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import type { HomeContent } from "@/lib/home";

export default function WhatWeMake({ content }: { content: HomeContent["whatWeMake"] }) {
  const { eyebrow, heading } = content;

  return (
    <section className="bg-cream-deep py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{eyebrow}</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink">
            {heading}
          </h2>
        </Reveal>

        <Reveal type="up" delay={0.1}>
          <Link
            href="/products"
            className="group relative block rounded-2xl overflow-hidden border border-[var(--line)] shadow-sm hover:shadow-xl hover:shadow-black/[0.08] transition-all duration-400"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/kings/products/categories-banner.png"
                alt="Our product categories - finished leather, equestrian goods, hand bags, wallets, belts, leather goods, pets' accessories, hunting accessories and gym accessories"
                fill
                sizes="(max-width: 1360px) 100vw, 1360px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-ink/80 backdrop-blur-sm px-5 py-2.5 text-[13px] font-semibold tracking-[0.06em] uppercase text-cream group-hover:bg-green transition-colors">
              Explore Our Products
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
