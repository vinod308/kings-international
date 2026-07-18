import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const JOURNEY = [
  {
    year: "1977",
    title: "Kings International Ltd.",
    body: "Founded in Kanpur - the heart of India's leather industry - with a focus on hand-crafted leather goods.",
  },
  {
    year: "1980s–90s",
    title: "Saddlery & Export Foundations",
    body: "Building deep expertise in saddlery and harness manufacturing, and establishing early export relationships.",
  },
  {
    year: "2000s",
    title: "Vertical Integration",
    body: "Bringing tanning in-house, giving full control over hide quality from raw material through to finished product.",
  },
  {
    year: "2010s",
    title: "Certifications & Sustainability",
    body: "Aligning operations with ISO 9001, Leather Working Group, and Sustainable Leather requirements, using REACH-compliant chemicals throughout.",
  },
  {
    year: "2010s–Now",
    title: "Brand Portfolio",
    body: "Growing a multi-brand portfolio, including Ryder Belts, Target Hunting Accessories, Kingston, and Equitel.",
  },
  {
    year: "Today",
    title: "Global Reach",
    body: "Serving brands, wholesalers, distributors, retailers, and OEM partners across international markets from one integrated facility.",
  },
];

export default function AboutJourney() {
  return (
    <section className="bg-cream-deep py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">The Journey</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink">
            48 years, six chapters.
          </h2>
        </Reveal>

        <RevealGroup className="border-t border-[var(--line)]">
          {JOURNEY.map((j) => (
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
