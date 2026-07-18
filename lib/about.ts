export type AboutContent = {
  hero: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string };
  story: {
    eyebrow: string;
    heading: string;
    stats: { target: number; suffix: string; label: string }[];
    paragraphs: string[];
    quote: string;
  };
  journey: {
    eyebrow: string;
    heading: string;
    items: { year: string; title: string; body: string }[];
  };
  beliefs: { eyebrow: string; heading: string; items: string[] };
  craftsmanship: {
    eyebrow: string;
    heading: string;
    intro: string;
    images: { src: string; alt: string }[];
  };
  houses: { eyebrow: string; heading: string; intro: string };
  cta: { eyebrow: string; heading: string; buttonText: string; buttonHref: string };
};
