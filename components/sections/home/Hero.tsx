import Image from "next/image";

export default function Hero({ heroImage, heroAlt }: { heroImage: string; heroAlt: string }) {
  return (
    <section className="bg-cream pt-[72px]">
      <h1 className="sr-only">
        Kings International - Hand-Crafted Leather Goods Manufacturer, Kanpur, India
      </h1>
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
