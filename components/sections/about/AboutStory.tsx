import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";

const STATS = [
  { target: 1977, suffix: "", label: "Founded in Kanpur" },
  { target: 48, suffix: "+", label: "Years of craftsmanship" },
  { target: 7, suffix: "+", label: "Product categories" },
  { target: 100, suffix: "%", label: "Vertically integrated" },
];

export default function AboutStory() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-site">
        <RevealGroup className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 mb-20 sm:mb-28 pb-16 sm:pb-20 border-b border-[var(--line)]">
          {STATS.map((s) => (
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
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Our Story</p>
              <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
                From a workshop to a vertically integrated facility.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal type="up" delay={0.1} className="flex flex-col gap-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              <p>
                We&apos;re <strong className="text-ink font-semibold">not a trading house</strong>{" "}
                sourcing finished goods from wherever&apos;s cheapest that week. Nor are we a single-product tannery
                with no finishing capability of our own.
              </p>
              <p>
                Tanning, cutting, stitching, and finishing all happen in-house, under one roof in Kanpur - the city
                that&apos;s home to the world&apos;s largest saddlery centre and some of South Asia&apos;s finest
                tanneries. Since 1977, we&apos;ve grown from a single leather workshop into a vertically integrated,
                multi-product, multi-brand manufacturer.
              </p>
              <p className="italic text-ink-soft/70">
                &ldquo;We didn&apos;t add sustainability to our process. We built our process to be sustainable.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
