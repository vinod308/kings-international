export type AboutContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  story: {
    eyebrow: string;
    heading: string;
    stats: { target: number; suffix: string; label: string }[];
    paragraphs: string[];
  };
  visionMission: {
    eyebrow: string;
    heading: string;
    vision: { title: string; body: string };
    mission: { title: string; body: string };
  };
  journey: {
    eyebrow: string;
    heading: string;
    items: { year: string; title: string; body: string }[];
  };
  craftsmanship: {
    eyebrow: string;
    heading: string;
    intro: string;
    images: { src: string; alt: string }[];
  };
  cta: { eyebrow: string; heading: string; buttonText: string; buttonHref: string };
};
