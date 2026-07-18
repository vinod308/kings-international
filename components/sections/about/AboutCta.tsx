import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export default function AboutCta() {
  return (
    <section className="bg-cream-deep pb-24 sm:pb-32">
      <div className="container-site">
        <Reveal type="up">
          <div className="rounded-3xl bg-ink px-8 py-12 sm:px-14 sm:py-16 flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">
                See the factory behind the story
              </p>
              <h3 className="font-display text-[clamp(24px,2.8vw,34px)] leading-tight tracking-tight text-cream">
                Walk the floor, section by section.
              </h3>
            </div>
            <Link
              href="/manufacturing"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase text-ink hover:bg-cream transition-colors shrink-0"
            >
              See Our Smart Factory
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
