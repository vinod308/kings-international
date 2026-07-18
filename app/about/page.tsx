import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutJourney from "@/components/sections/about/AboutJourney";
import AboutBeliefs from "@/components/sections/about/AboutBeliefs";
import AboutCraftsmanship from "@/components/sections/about/AboutCraftsmanship";
import AboutHouses from "@/components/sections/about/AboutHouses";
import AboutCta from "@/components/sections/about/AboutCta";
import { readContentFile } from "@/lib/content";
import type { AboutContent } from "@/lib/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Not just a tannery. Nor just a factory. Both. A vertically integrated leather goods manufacturer building hand-crafted products since 1977.",
};

export default function AboutPage() {
  const about = readContentFile<AboutContent>("settings/about.json");

  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        intro={about.hero.intro}
        image={about.hero.image}
        imageAlt={about.hero.imageAlt}
      />
      <AboutStory content={about.story} />
      <AboutJourney content={about.journey} />
      <AboutBeliefs content={about.beliefs} />
      <AboutCraftsmanship content={about.craftsmanship} />
      <AboutHouses content={about.houses} />
      <AboutCta content={about.cta} />
    </>
  );
}
