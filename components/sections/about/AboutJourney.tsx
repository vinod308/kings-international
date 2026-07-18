import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import type { AboutContent } from "@/lib/about";

export default function AboutJourney({ content }: { content: AboutContent["journey"] }) {
  const { eyebrow, heading, items } = content;

  return (
    <section className="bg-cream-deep py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{eyebrow}</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink">
            {heading}
          </h2>
        </Reveal>

        <RevealGroup className="border-t border-[var(--line)]">
          {items.map((j) => (
            <RevealItem key={j.year} type="up">
              <div className="grid sm:grid-cols-[150px_minmax(0,4fr)_minmax(0,6fr)] gap-3 sm:gap-8 py-7 sm:py-8 border-b border-[var(--line)] sm:items-baseline">
                <span className="font-display text-[20px] sm:text-[24px] font-semibold text-ink tracking-tight whitespace-nowrap">
                  {j.year}
                </span>
                <h3 className="text-[17px] sm:text-[19px] font-semibold text-ink tracking-tight">{j.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-ink-soft">{j.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
