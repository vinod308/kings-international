import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Shirt, Medal, Car, HardHat, Dog, Crosshair } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "By Industry",
  description:
    "Kings International supplies leather across fashion, equestrian, automotive, industrial footwear, pet, and outdoor markets - vertically integrated from hide to finished product.",
};

const MARKETS = [
  {
    icon: Shirt,
    title: "Fashion & Retail",
    body: "Belts, bags, wallets and small leather goods for brands, wholesalers and retailers, private label or fully custom.",
    links: [{ label: "Leather Goods", href: "/products/leather-goods" }, { label: "Ryder Belts", href: "/brands/ryder" }],
  },
  {
    icon: Medal,
    title: "Equestrian & Saddlery",
    body: "Saddles, harness, bridles and tack, made in Kanpur, home of the world's largest saddlery centre.",
    links: [{ label: "Kingston", href: "/brands/kingston" }, { label: "Equitel", href: "/brands/equitel" }],
  },
  {
    icon: Car,
    title: "Automotive & Furniture",
    body: "Technical leather for automotive and furniture upholstery, straps and components, held to component-level tolerances.",
    links: [{ label: "Industrial Leather", href: "/products/industrial-leather" }],
  },
  {
    icon: HardHat,
    title: "Industrial & Safety Footwear",
    body: "Abrasion- and water-resistant leather finished to the durability standards industrial and safety footwear demands.",
    links: [{ label: "Safety Shoe Leather", href: "/products/safety-shoe-leather" }],
  },
  {
    icon: Dog,
    title: "Pet Accessories",
    body: "Collars, leads and harnesses built with saddlery-grade hides and hardware - comfortable, durable, retail-ready.",
    links: [{ label: "Pets' Pal", href: "/brands/pets-pal" }],
  },
  {
    icon: Crosshair,
    title: "Hunting & Outdoor",
    body: "Cartridge belts, holsters and field gear in heavier-weight, reinforced leather, built for actual field use.",
    links: [{ label: "Target", href: "/brands/target" }],
  },
];

export default function MarketsPage() {
  return (
    <>
      <PageHero
        eyebrow="By Industry"
        title="Six industries, one vertically integrated tannery."
        intro="From fashion retail to industrial footwear, our leather and finished goods serve markets that each demand something different from a hide - we tan and manufacture for all of them under one roof."
        image="/images/kings/hero/showroom.jpg"
        imageAlt="Kings International leather showroom, Kanpur"
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MARKETS.map((m) => (
              <RevealItem key={m.title} type="up">
                <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-7">
                  <div className="w-11 h-11 rounded-xl bg-green-soft flex items-center justify-center text-green mb-5">
                    <m.icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-[19px] font-semibold text-ink mb-2">{m.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-soft mb-5">{m.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="inline-flex items-center gap-1 text-[12.5px] font-medium text-green hover:text-green-deep transition-colors"
                      >
                        {l.label}
                        <ArrowUpRight size={13} />
                      </Link>
                    ))}
                  </div>
                </div>
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
                  Not seeing your industry?
                </p>
                <h3 className="font-display text-[clamp(24px,2.8vw,34px)] leading-tight tracking-tight text-cream">
                  We build custom leather solutions too.
                </h3>
              </div>
              <Link
                href="/oem"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase text-ink hover:bg-cream transition-colors shrink-0"
              >
                Explore OEM Services
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
