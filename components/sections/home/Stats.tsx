import Reveal from "@/components/motion/Reveal";
import ProcessGrid from "@/components/sections/home/ProcessGrid";
import type { HomeContent } from "@/lib/home";

export default function Stats({ content }: { content: HomeContent["stats"] }) {
  const { eyebrow, heading, process } = content;

  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="container-site">
        <Reveal type="up" className="mb-14 text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold mb-3">{eyebrow}</p>
          <h2 className="font-display text-[clamp(26px,3.4vw,40px)] text-cream leading-tight">{heading}</h2>
        </Reveal>

        <ProcessGrid process={process} />
      </div>
    </section>
  );
}
