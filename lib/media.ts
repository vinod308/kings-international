import { readContentDir } from "./content";

export type MediaCategory = "facility" | "products";

export type MediaItem = {
  order: number;
  src: string;
  alt: string;
  caption: string;
  category: MediaCategory;
};

export const MEDIA_ITEMS: MediaItem[] = readContentDir<MediaItem>("media").sort(
  (a, b) => a.order - b.order
);
