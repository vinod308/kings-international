import { readContentDir } from "./content";

export type ProductSpec = { label: string; value: string };

export type Product = {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  blurb: string;
  image: string;
  heroIntro: string;
  characteristics: string[];
  applications: string[];
  specs: ProductSpec[];
  heroEyebrow?: string;
  heroTitle?: string;
  introEyebrow?: string;
  introHeading?: string;
  collections?: { heading: string; items: { name: string; image?: string }[] };
  categoriesSection?: { eyebrow: string; heading: string };
  qualityStandards?: { heading: string; body: string; image?: string };
  customDevelopment?: { heading: string; body: string };
  heroBadgeImage?: string;
  heroBadgeImageAlt?: string;
};

export const PRODUCTS: Product[] = readContentDir<Product>("products").sort((a, b) =>
  a.num.localeCompare(b.num)
);

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
