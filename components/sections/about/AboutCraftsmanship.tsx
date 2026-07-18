import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const IMAGES = [
  { src: "/images/kings/manufacturing/tannery-hides.jpg", alt: "Hides drying at the in-house tannery" },
  { src: "/images/kings/manufacturing/handcraft-stitching.jpg", alt: "Hand-stitched leather craftsmanship" },
  { src: "/images/kings/hero/manufacturing-hero.jpg", alt: "Production line at Kings International" },
];

export default function AboutCraftsmanship() {
  return (
    <section className="bg-cream-deep py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Inside the Facility</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink mb-5">
            Our craftsmanship.
          </h2>
          <p className="text-[16px] leading-relaxed text-ink-soft">
            Master tanners, saddlers, cutters, and stitchers - many with decades on the same floor. We don&apos;t
            publish headshots; we publish the work.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-3 gap-5">
          {IMAGES.map((img) => (
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
