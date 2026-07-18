import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-cream pt-[72px]">
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src="/images/kings/hero/homepage-banner-v2.jpg"
          alt="Kings International - where traditional craft meets modern technology"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
