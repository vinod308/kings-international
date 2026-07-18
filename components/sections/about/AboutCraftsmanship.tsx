import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import type { AboutContent } from "@/lib/about";

export default function AboutCraftsmanship({ content }: { content: AboutContent["craftsmanship"] }) {
  const { eyebrow, heading, intro, images } = content;

  return (
    <section className="bg-cream-deep py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{eyebrow}</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink mb-5">
            {heading}
          </h2>
          <p className="text-[16px] leading-relaxed text-ink-soft">{intro}</p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-3 gap-5">
          {images.map((img) => (
            <RevealItem key={img.src} type="up">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
