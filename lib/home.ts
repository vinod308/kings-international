export type HomeContent = {
  heroImage: string;
  heroAlt: string;
  theHouse: {
    eyebrow: string;
    heading: string;
    intro: string;
    facts: { label: string; value: string }[];
    image: string;
    imageAlt: string;
  };
  certStrip: {
    eyebrow: string;
    heading: string;
  };
  whatWeMake: {
    eyebrow: string;
    heading: string;
  };
  stats: {
    eyebrow: string;
    heading: string;
    process: { num: string; title: string; image: string; body: string }[];
    items: { target: number; suffix: string; label: string }[];
  };
  whyChooseUs: {
    eyebrow: string;
    heading: string;
    intro: string;
    reasons: { icon: string; title: string; copy: string }[];
  };
  collection: {
    eyebrow: string;
    heading: string;
  };
};
