export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Legacy", href: "/about" },
      { label: "Certifications & Awards", href: "/certifications" },
      { label: "Media & Gallery", href: "/media" },
    ],
  },
  {
    label: "Our Leathers",
    href: "/products",
    children: [
      { label: "By Leather Type", href: "/products" },
      { label: "Our Brands", href: "/brands" },
      { label: "By Industry", href: "/markets" },
      { label: "Leather Knowledge", href: "/blog" },
    ],
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    children: [
      { label: "Sustainability Overview", href: "/sustainability" },
      { label: "Quality Assurance", href: "/quality" },
    ],
  },
  { label: "Smart Factory", href: "/manufacturing" },
  {
    label: "B2B Hub",
    href: "/quote",
    children: [
      { label: "Request a Quote / Sample", href: "/quote" },
      { label: "OEM Services", href: "/oem" },
      { label: "Contact", href: "/contact" },
      { label: "Download Catalogue (PDF)", href: "https://drive.google.com/file/d/1WfNV9NIUXDZXFmso4KVxm60cPSS5JsjZ/view" },
    ],
  },
];

export const FOOTER_LEATHERS = [
  { label: "By Leather Type", href: "/products" },
  { label: "Finished Leather", href: "/products/finished-leather" },
  { label: "Buffalo Leather", href: "/products/buffalo-leather" },
  { label: "Goat Leather", href: "/products/goat-leather" },
  { label: "Safety Shoe Leather", href: "/products/safety-shoe-leather" },
  { label: "Industrial Leather", href: "/products/industrial-leather" },
  { label: "Leather Goods", href: "/products/leather-goods" },
  { label: "Our Brands", href: "/brands" },
  { label: "By Industry", href: "/markets" },
  { label: "Leather Knowledge", href: "/blog" },
];

export const FOOTER_COMPANY = [
  { label: "Our Legacy", href: "/about" },
  { label: "Smart Factory", href: "/manufacturing" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Quality Assurance", href: "/quality" },
  { label: "Certifications & Awards", href: "/certifications" },
  { label: "Media & Gallery", href: "/media" },
];

export const FOOTER_B2B = [
  { label: "Request a Quote / Sample", href: "/quote" },
  { label: "OEM Services", href: "/oem" },
  { label: "Contact", href: "/contact" },
  { label: "Download Catalogue", href: "https://drive.google.com/file/d/1WfNV9NIUXDZXFmso4KVxm60cPSS5JsjZ/view" },
];
