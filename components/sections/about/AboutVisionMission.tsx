import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import type { AboutContent } from "@/lib/about";

export default function AboutVisionMission({ content }: { content: AboutContent["visionMission"] }) {
  const { eyebrow, heading, vision, mission } = content;

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{eyebrow}</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink">
            {heading}
          </h2>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 gap-6">
          {[vision, mission].map((item) => (
            <RevealItem key={item.title} type="up">
              <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-8 sm:p-10">
                <h3 className="text-[13px] font-semibold tracking-[0.14em] uppercase text-green mb-4">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
