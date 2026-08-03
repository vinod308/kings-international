import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import type { AboutContent } from "@/lib/about";

export default function AboutStory({ content }: { content: AboutContent["story"] }) {
  const { eyebrow, heading, paragraphs } = content;

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-site">
        <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-16 overflow-hidden">
          <Image
            src="/images/kings/logo/kings-international-logo-grey.png"
            alt=""
            aria-hidden="true"
            width={1212}
            height={1536}
            className="pointer-events-none select-none absolute left-1/2 top-1/2 w-[140px] sm:w-[180px] h-auto -translate-x-1/2 -translate-y-1/2 opacity-15"
          />
          <div className="relative z-10 lg:col-span-5">
            <Reveal type="up">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">{eyebrow}</p>
              <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
                {heading}
              </h2>
            </Reveal>
          </div>
          <div className="relative z-10 lg:col-span-7">
            <Reveal type="up" delay={0.1} className="flex flex-col gap-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
