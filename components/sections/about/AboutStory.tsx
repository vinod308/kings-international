import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import type { AboutContent } from "@/lib/about";

export default function AboutStory({ content }: { content: AboutContent["story"] }) {
  const { eyebrow, heading, stats, paragraphs, quote } = content;

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-site">
        <RevealGroup className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 mb-20 sm:mb-28 pb-16 sm:pb-20 border-b border-[var(--line)]">
          {stats.map((s) => (
            <RevealItem key={s.label} type="scale" className="text-center sm:text-left">
              <p className="font-display text-[clamp(30px,4vw,48px)] font-semibold text-ink leading-none">
                <CountUp target={s.target} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[11px] tracking-[0.1em] uppercase text-ink-soft/60">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal type="up">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{eyebrow}</p>
              <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
                {heading}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal type="up" delay={0.1} className="flex flex-col gap-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="italic text-ink-soft/70">&ldquo;{quote}&rdquo;</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
