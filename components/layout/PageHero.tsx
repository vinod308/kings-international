import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative min-h-[56svh] flex items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      </div>

      <div className="container-site relative z-10 pb-16 pt-40">
        <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-gold font-semibold mb-6">
          {eyebrow}
        </p>
        <h1 className="font-display text-[clamp(34px,5.4vw,64px)] leading-[1.05] tracking-tight text-cream max-w-3xl">
          {title}
        </h1>
        <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-cream/75 max-w-2xl">{intro}</p>
      </div>
    </section>
  );
}
