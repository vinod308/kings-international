import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutJourney from "@/components/sections/about/AboutJourney";
import AboutBeliefs from "@/components/sections/about/AboutBeliefs";
import AboutCraftsmanship from "@/components/sections/about/AboutCraftsmanship";
import AboutHouses from "@/components/sections/about/AboutHouses";
import AboutCta from "@/components/sections/about/AboutCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Not just a tannery. Nor just a factory. Both. A vertically integrated leather goods manufacturer building hand-crafted products since 1977.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Kings · Est. 1977"
        title="Not just a tannery. Nor just a factory. Both."
        intro="A vertically integrated manufacturer that selects the hide and finishes the stitch - no subcontracted middlemen, no inconsistent batches. Founded in a modest Kanpur workshop in 1977. The workshop grew. The obsession with the craft didn't."
        image="/images/kings/brand/facility.jpg"
        imageAlt="Kings International facility in Kanpur"
      />
      <AboutStory />
      <AboutJourney />
      <AboutBeliefs />
      <AboutCraftsmanship />
      <AboutHouses />
      <AboutCta />
    </>
  );
}
