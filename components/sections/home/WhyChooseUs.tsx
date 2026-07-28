import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { getIcon } from "@/lib/icons";
import type { HomeContent } from "@/lib/home";

export default function WhyChooseUs({ content }: { content: HomeContent["whyChooseUs"] }) {
  const { eyebrow, heading, intro, reasons } = content;

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{eyebrow}</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink mb-5">
            {heading}
          </h2>
          <p className="text-[16px] leading-relaxed text-ink-soft">{intro}</p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5" stagger={0.06}>
          {reasons.map((r) => {
            const Icon = getIcon(r.icon);
            return (
              <RevealItem key={r.title} type="up">
                <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-6 hover:border-green/30 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-green-soft flex items-center justify-center text-green mb-4">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[14.5px] font-semibold text-ink mb-1.5 leading-snug">{r.title}</h3>
                  <p className="text-[12.5px] leading-relaxed text-ink-soft">{r.copy}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
