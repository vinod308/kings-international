import {
  Award,
  Layers,
  Wrench,
  Headset,
  Globe2,
  Factory,
  Ship,
  HeartHandshake,
  Leaf,
  BadgeCheck,
} from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const REASONS = [
  { icon: Award, title: "Proven Expertise", copy: "48+ years of hands-on leather craftsmanship, since 1977." },
  { icon: Layers, title: "Premium Materials", copy: "Full-grain buffalo, goat and European cow hides, selected and tanned in-house." },
  { icon: Wrench, title: "Custom Solutions", copy: "Private label and OEM development, built around your specification." },
  { icon: Headset, title: "Customer-First Approach", copy: "A direct line to the export desk - not a call centre." },
  { icon: Globe2, title: "Global Partnerships", copy: "Trusted by brands, wholesalers and importers across three continents." },
  { icon: Factory, title: "Vertically Integrated", copy: "Hide to finished product, cut and stitched under one roof." },
  { icon: Ship, title: "Export Experience", copy: "Corporate office in Kanpur, plus an overseas subsidiary in the United Kingdom." },
  { icon: HeartHandshake, title: "Ethical Practices", copy: "Traceable sourcing and fair labour, audited to SA 8000." },
  { icon: Leaf, title: "Sustainability Commitment", copy: "Zero-liquid-discharge tannery, solar power and water recycling since 2015." },
  { icon: BadgeCheck, title: "Certified Quality", copy: "ISO 9001, 14001, 45001 and 50001 certified operations." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-site">
        <Reveal type="up" className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">03 · Why Choose Us</p>
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-tight text-ink mb-5">
            Crafting excellence. Delivering trust.
          </h2>
          <p className="text-[16px] leading-relaxed text-ink-soft">
            At Kings International, we don&apos;t just manufacture leather products - we build long-term business
            partnerships.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5" stagger={0.06}>
          {REASONS.map((r) => (
            <RevealItem key={r.title} type="up">
              <div className="h-full rounded-2xl bg-white border border-[var(--line)] p-6 hover:border-green/30 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-green-soft flex items-center justify-center text-green mb-4">
                  <r.icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-[14.5px] font-semibold text-ink mb-1.5 leading-snug">{r.title}</h3>
                <p className="text-[12.5px] leading-relaxed text-ink-soft">{r.copy}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
