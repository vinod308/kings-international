import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";

const STATS = [
  { target: 1977, suffix: "", label: "Established" },
  { target: 200, suffix: "", label: "Hides Processed / Day" },
  { target: 48, suffix: "+", label: "Years of Craft" },
  { target: 5, suffix: "", label: "House Brands" },
  { target: 6, suffix: "", label: "Leather Categories" },
];

const PROCESS = [
  {
    num: "01",
    title: "Raw Hide",
    image: "/images/kings/manufacturing/tannery-hides.jpg",
    body: "Hides tanned and hung to dry.",
  },
  {
    num: "02",
    title: "Drying & Sorting",
    image: "/images/kings/manufacturing/handcraft-stitching.jpg",
    body: "Dried, sorted and staged for cutting.",
  },
  {
    num: "03",
    title: "Cutting & Production",
    image: "/images/kings/hero/manufacturing-hero.jpg",
    body: "Cut, stitched and assembled on the line.",
  },
  {
    num: "04",
    title: "Finished Order",
    image: "/images/kings/hero/showroom.jpg",
    body: "Inspected, packed and ready to ship.",
  },
];

export default function Stats() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="container-site">
        <Reveal type="up" className="mb-14 text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-3">The Process</p>
          <h2 className="font-display text-[clamp(26px,3.4vw,40px)] text-cream leading-tight">
            From raw hide to finished order, vertically integrated.
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {PROCESS.map((p) => (
            <RevealItem key={p.num} type="up">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 45vw, 23vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <span className="absolute top-4 left-4 font-display text-[13px] font-bold text-gold/80">{p.num}</span>
                <div className="absolute left-4 right-4 bottom-4">
                  <h3 className="text-[15px] font-semibold text-cream leading-snug mb-1">{p.title}</h3>
                  <p className="text-[12px] text-cream/65 leading-snug">{p.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="border-t border-cream/10 pt-14">
          <RevealGroup className="grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-6">
            {STATS.map((s) => (
              <RevealItem key={s.label} type="scale" className="text-center">
                <p className="font-display text-[clamp(32px,4.5vw,54px)] font-semibold text-cream leading-none">
                  <CountUp target={s.target} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[11px] tracking-[0.1em] uppercase text-cream/50">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
