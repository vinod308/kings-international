import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const BELIEFS = [
  "Decades of expertise - founded 1977, still hands-on today.",
  "Premium materials: buffalo and cow hides, selected, not settled for.",
  "Traditional skill and modern technology, working in the same room.",
  "Private label or full OEM - we flex to your specification, not ours.",
  "Vertically integrated - tanning to finishing, under one roof.",
  "Global export experience: compliance, documentation, on-time delivery.",
  "Ethical business - fair labour, transparency, responsible sourcing.",
  "Sustainability isn't a slogan: REACH-compliant chemicals, water recycling, renewable energy.",
  "Every product is inspected before it leaves, not just before it's sold.",
  "Customer-first - from development to after-sales, real people respond.",
  "We build long-term partnerships, not one-off orders.",
];

export default function AboutBeliefs() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">What We Believe</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink">
            11 things we won&apos;t compromise on.
          </h2>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--line)]">
          {BELIEFS.map((b, i) => (
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
