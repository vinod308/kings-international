import Image from "next/image";
import { readContentFile } from "@/lib/content";

type HomeSettings = { heroImage: string; heroAlt: string };

export default function Hero() {
  const { heroImage, heroAlt } = readContentFile<HomeSettings>("settings/home.json");

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
