import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutVisionMission from "@/components/sections/about/AboutVisionMission";
import AboutJourney from "@/components/sections/about/AboutJourney";
import AboutCraftsmanship from "@/components/sections/about/AboutCraftsmanship";
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
        imagePosition="center 20%"
      />
      <AboutStory content={about.story} />
      <AboutVisionMission content={about.visionMission} />
      <AboutJourney content={about.journey} />
      <AboutCraftsmanship content={about.craftsmanship} />
    </>
  );
}
