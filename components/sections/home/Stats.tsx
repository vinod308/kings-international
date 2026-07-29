import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ProcessGrid from "@/components/sections/home/ProcessGrid";
import type { HomeContent } from "@/lib/home";

export default function Stats({ content }: { content: HomeContent["stats"] }) {
  const { eyebrow, heading, process, items } = content;

  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="container-site">
        <Reveal type="up" className="mb-14 text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-3">{eyebrow}</p>
          <h2 className="font-display text-[clamp(26px,3.4vw,40px)] text-cream leading-tight">{heading}</h2>
        </Reveal>

        <ProcessGrid process={process} />

        <div className="border-t border-cream/10 pt-14">
          <RevealGroup className="grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-6">
            {items.map((s) => (
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
