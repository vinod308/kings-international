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
};

export const PRODUCTS: Product[] = readContentDir<Product>("products").sort((a, b) =>
  a.num.localeCompare(b.num)
);

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
