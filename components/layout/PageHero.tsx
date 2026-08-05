import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  imagePosition = "center",
  badgeImage,
  badgeImageAlt,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  badgeImage?: string;
  badgeImageAlt?: string;
}) {
  return (
    <section className="relative min-h-[56svh] flex items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />

        {badgeImage && (
          <div className="hidden lg:block absolute right-[350px] top-1/2 -translate-y-1/2 w-[400px]">
            <div className="relative aspect-[1567/900] rounded-2xl overflow-hidden">
              <Image src={badgeImage} alt={badgeImageAlt ?? ""} fill sizes="400px" className="object-cover" />
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      </div>

      <div className="container-site relative z-10 pb-16 pt-40">
        {eyebrow && (
          <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-gold font-semibold mb-6">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-[clamp(34px,5.4vw,64px)] leading-[1.05] tracking-tight text-cream max-w-5xl">
          {title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line.trim()}
            </span>
          ))}
        </h1>
        <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-cream/75 max-w-2xl">{intro}</p>
      </div>
    </section>
  );
}
