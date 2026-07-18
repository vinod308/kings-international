export type MediaCategory = "facility" | "products";

export type MediaItem = {
  src: string;
  alt: string;
  caption: string;
  category: MediaCategory;
};

export const MEDIA_FILTERS: { key: "all" | MediaCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "facility", label: "Facility & Process" },
  { key: "products", label: "Products" },
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    src: "/images/kings/hero/showroom.jpg",
    alt: "Kings International showroom",
    caption: "The showroom floor, Kanpur.",
    category: "facility",
  },
  {
    src: "/images/kings/hero/manufacturing-hero.jpg",
    alt: "Production line at Kings International",
    caption: "The production line, mid-run.",
    category: "facility",
  },
  {
    src: "/images/kings/manufacturing/tannery-hides.jpg",
    alt: "Hides on the tannery floor",
    caption: "Hides, graded and staged for tanning.",
    category: "facility",
  },
  {
    src: "/images/kings/manufacturing/handcraft-stitching.jpg",
    alt: "Artisan hand-stitching leather",
    caption: "Hand-stitching, saddle section.",
    category: "facility",
  },
  {
    src: "/images/kings/manufacturing/sustainability-zld-plant.jpg",
    alt: "Zero liquid discharge water treatment plant",
    caption: "The ZLD water treatment plant.",
    category: "facility",
  },
  {
    src: "/images/kings/products/belts.jpg",
    alt: "Leather belts",
    caption: "Belts, full-grain and top-grain.",
    category: "products",
  },
  {
    src: "/images/kings/products/bags.jpg",
    alt: "Leather bags and travel goods",
    caption: "Bags & travel goods.",
    category: "products",
  },
  {
    src: "/images/kings/products/equitel.jpg",
    alt: "Premium equestrian leather goods",
    caption: "Premium equestrian, Equitel range.",
    category: "products",
  },
  {
    src: "/images/kings/products/leather-goods.jpg",
    alt: "Leather goods and small accessories",
    caption: "Wallets & small leather goods.",
    category: "products",
  },
  {
    src: "/images/kings/products/pet-accessories.jpg",
    alt: "Leather pet accessories",
    caption: "Collars, leads & pet accessories.",
    category: "products",
  },
  {
    src: "/images/kings/products/hunting-accessories.jpg",
    alt: "Hunting and outdoor leather accessories",
    caption: "Cartridge belts & field pouches.",
    category: "products",
  },
  {
    src: "/images/kings/products/gym-accessories.jpg",
    alt: "Leather gym accessories",
    caption: "Weightlifting belts & straps.",
    category: "products",
  },
];
