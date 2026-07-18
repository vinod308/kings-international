import Reveal from "@/components/motion/Reveal";
import { CERTIFICATION_BADGES } from "@/lib/certifications";
import CertificationsSlider from "@/components/sections/home/CertificationsSlider";

export default function CertStrip() {
  return (
    <section className="bg-cream-deep py-24 sm:py-32">
      <div className="container-site grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <Reveal type="up">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">
              Certifications &amp; Awards
            </p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink mb-6">
              Recognised for quality and sustainability.
            </h2>
            <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
              {CERTIFICATION_BADGES.map((badge) => (
                <li
                  key={badge}
                  className="text-[12px] font-semibold text-ink-soft border border-[var(--line)] rounded-full px-3.5 py-2 bg-white"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal type="scale" duration={0.9}>
            <div className="max-w-md mx-auto">
              <CertificationsSlider />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
