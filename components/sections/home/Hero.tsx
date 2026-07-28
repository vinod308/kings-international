import Image from "next/image";

export default function Hero({ heroImage, heroAlt }: { heroImage: string; heroAlt: string }) {
  return (
    <section className="bg-cream pt-[72px]">
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
