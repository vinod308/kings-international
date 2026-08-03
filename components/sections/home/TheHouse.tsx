import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import type { HomeContent } from "@/lib/home";

export default function TheHouse({ content }: { content: HomeContent["theHouse"] }) {
  const { eyebrow, heading, intro, facts, image, imageAlt } = content;

  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="container-site grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <Reveal type="up">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{eyebrow}</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink mb-6">
              {heading.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line.trim()}
                </span>
              ))}
            </h2>
            <p className="text-[16px] leading-relaxed text-ink-soft max-w-xl mb-10">{intro}</p>
          </Reveal>

          <Reveal type="up" delay={0.1}>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {facts.map((f) => (
                <div key={f.label} className="border-l-2 border-green/25 pl-4">
                  <dt className="text-[10px] font-semibold tracking-[0.18em] uppercase text-ink-soft/60 mb-1.5">
                    {f.label}
                  </dt>
                  <dd className="text-[14px] font-medium text-ink leading-snug">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal type="scale" duration={0.9}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
