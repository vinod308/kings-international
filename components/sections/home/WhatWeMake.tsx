import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import type { HomeContent } from "@/lib/home";

export default function WhatWeMake({ content }: { content: HomeContent["whatWeMake"] }) {
  const { eyebrow, heading } = content;

  return (
    <section className="bg-cream-deep py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{eyebrow}</p>
          <p className="font-display text-[clamp(20px,2.4vw,28px)] leading-[1.45] tracking-tight text-ink">
            {heading}
          </p>
        </Reveal>

        <Reveal type="up" delay={0.1}>
          <div className="relative block rounded-2xl overflow-hidden border border-[var(--line)] shadow-sm">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/kings/products/categories-banner.png"
                alt="Our product categories - finished leather, equestrian goods, hand bags, wallets, belts, leather goods, pets' accessories, hunting accessories and gym accessories"
                fill
                sizes="(max-width: 1360px) 100vw, 1360px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
