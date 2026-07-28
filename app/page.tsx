import Hero from "@/components/sections/home/Hero";
import TheHouse from "@/components/sections/home/TheHouse";
import CertStrip from "@/components/sections/home/CertStrip";
import WhatWeMake from "@/components/sections/home/WhatWeMake";
import Stats from "@/components/sections/home/Stats";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Collection from "@/components/sections/home/Collection";
import { readContentFile } from "@/lib/content";
import type { HomeContent } from "@/lib/home";

export default function Home() {
  const home = readContentFile<HomeContent>("settings/home.json");

  return (
    <>
      <Hero heroImage={home.heroImage} heroAlt={home.heroAlt} />
      <TheHouse content={home.theHouse} />
      <CertStrip content={home.certStrip} />
      <WhatWeMake content={home.whatWeMake} />
      <Stats content={home.stats} />
      <WhyChooseUs content={home.whyChooseUs} />
      <Collection content={home.collection} />
    </>
  );
}
