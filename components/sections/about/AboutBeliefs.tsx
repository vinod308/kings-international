import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import type { AboutContent } from "@/lib/about";

export default function AboutBeliefs({ content }: { content: AboutContent["beliefs"] }) {
  const { eyebrow, heading, items } = content;

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{eyebrow}</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink">
            {heading}
          </h2>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--line)]">
          {items.map((b, i) => (
            <RevealItem key={b} type="up">
              <div className="h-full p-7 sm:p-8 border-b border-r border-[var(--line)]">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-ink-soft/40 mb-3.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-ink">{b}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
