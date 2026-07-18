import Hero from "@/components/sections/home/Hero";
import TheHouse from "@/components/sections/home/TheHouse";
import CertStrip from "@/components/sections/home/CertStrip";
import WhatWeMake from "@/components/sections/home/WhatWeMake";
import Stats from "@/components/sections/home/Stats";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Collection from "@/components/sections/home/Collection";

export default function Home() {
  return (
    <>
      <Hero />
      <TheHouse />
      <CertStrip />
      <WhatWeMake />
      <Stats />
      <WhyChooseUs />
      <Collection />
    </>
  );
}
