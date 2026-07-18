import Image from "next/image";
import Link from "next/link";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BRANDS } from "@/lib/brands";
import type { AboutContent } from "@/lib/about";

export default function AboutHouses({ content }: { content: AboutContent["houses"] }) {
  const { eyebrow, heading, intro } = content;

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{eyebrow}</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink mb-5">
            {heading}
          </h2>
          <p className="text-[16px] leading-relaxed text-ink-soft">{intro}</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {BRANDS.map((b) => (
            <RevealItem key={b.slug} type="up">
              <Link href={`/brands/${b.slug}`} className="group block relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  sizes="(max-width: 768px) 45vw, 18vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <span className="absolute left-4 bottom-4 right-4 text-cream text-[15px] font-display font-semibold tracking-tight">
                  {b.name}
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
