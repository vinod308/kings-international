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
    label: "Leather & Leather Goods",
    href: "/products",
    children: [
      { label: "Finished Leather", href: "/products/finished-leather" },
      { label: "Leather Goods", href: "/products/leather-goods" },
      { label: "Our Brands", href: "/brands" },
    ],
  },
  {
    label: "Sustainability",
    href: "/sustainability",
    children: [
      { label: "Sustainability Overview", href: "/sustainability" },
      { label: "Quality Assurance", href: "/quality" },
      { label: "Environmental Compliance", href: "/environmental-compliance" },
    ],
  },
  {
    label: "Manufacturing Facilities",
    href: "/tannery",
    children: [
      { label: "Tannery Division", href: "/tannery" },
      { label: "Smart Factory", href: "/manufacturing" },
      { label: "Green Factory", href: "/green-factory" },
    ],
  },
  {
    label: "B2B Hub",
    href: "/quote",
    children: [
      { label: "Send Your Enquiry", href: "/quote" },
      { label: "OEM Services", href: "/oem" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const FOOTER_LEATHERS = [
  { label: "Finished Leather", href: "/products/finished-leather" },
  { label: "Leather Goods", href: "/products/leather-goods" },
  { label: "Our Brands", href: "/brands" },
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
];
