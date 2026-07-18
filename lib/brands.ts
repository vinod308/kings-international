import { readContentDir } from "./content";

export type Brand = {
  slug: string;
  num: string;
  name: string;
  tag: string;
  copy: string;
  image: string;
  description: string[];
  materials: string[];
  quote: string;
};

export const BRANDS: Brand[] = readContentDir<Brand>("brands").sort((a, b) =>
  a.num.localeCompare(b.num)
);

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}
