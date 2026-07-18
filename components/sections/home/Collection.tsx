import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BRANDS } from "@/lib/brands";

export default function Collection() {
  return (
    <section className="bg-cream-deep py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">The Collection</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink">
            Five house brands, one factory floor.
          </h2>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {BRANDS.map((b) => (
            <RevealItem key={b.slug} type="up">
              <Link href={`/brands/${b.slug}`} className="group block">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-semibold tracking-[0.14em] uppercase text-gold-soft">
                    {b.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[19px] font-semibold text-ink">{b.name}</h3>
                  <ArrowUpRight
                    size={17}
                    className="text-ink-soft/40 group-hover:text-green group-hover:rotate-45 transition-all duration-300"
                  />
                </div>
                <p className="text-[13px] leading-relaxed text-ink-soft mt-1.5">{b.copy}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
