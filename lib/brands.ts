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

export const BRANDS: Brand[] = [
  {
    slug: "kingston",
    num: "01",
    name: "Kingston",
    tag: "Saddlery & Harness",
    copy: "Full-grain, aniline-finished Indian buffalo leather - handcrafted saddles and harness for the serious trade.",
    image: "/images/kings/products/equestrian.jpg",
    description: [
      "The Kingston range is a premium collection of saddlery and harness products made from the finest full-grain, aniline-finished Indian buffalo leather - known for exceptional quality and durability.",
      "Each product is handcrafted by skilled artisans and rigorously inspected for precision and quality before it reaches the customer.",
    ],
    materials: ["Full-grain leather", "Aniline finish", "Indian buffalo leather"],
    quote: "Full-grain leather, cut, stitched and finished as saddlery & harness - made under one roof.",
  },
  {
    slug: "equitel",
    num: "02",
    name: "Equitel",
    tag: "Premium Equestrian",
    copy: "European cow and ox hides, hand-dressed in India - the top of the equestrian range.",
    image: "/images/kings/products/equitel.jpg",
    description: [
      "Equitel is a premium collection of equestrian products, meticulously handcrafted from genuine European cow and ox hides - carefully selected for superior quality and hand-dressed in India using a time-honoured technique.",
      "The result is top-end products combining functional performance and aesthetic appeal, blending European leather quality with Indian craftsmanship.",
    ],
    materials: ["European cow hide", "European ox hide", "Hand-dressed finish"],
    quote: "European cow hide, cut, stitched and finished as premium equestrian - made under one roof.",
  },
  {
    slug: "ryder",
    num: "03",
    name: "Ryder Belts",
    tag: "Belts",
    copy: "Top-grain and split leather belts - casual, fashion and equestrian styles at volume.",
    image: "/images/kings/products/belts.jpg",
    description: [
      "Ryder Belts offers a stylish collection of casual and fashion belts, along with equestrian-themed styles, crafted from premium top-grain and split leather.",
      "Top-grain leather brings a smooth, high-quality finish for everyday wear; split leather adds strength and flexibility for more rugged designs.",
    ],
    materials: ["Top-grain leather", "Split leather"],
    quote: "Top-grain leather, cut, stitched and finished as belts - made under one roof.",
  },
  {
    slug: "target",
    num: "04",
    name: "Target",
    tag: "Hunting Accessories",
    copy: "Gun covers, holsters, cartridge belts and ammunition bags - traditional and modern.",
    image: "/images/kings/products/hunting-accessories.jpg",
    description: [
      "Target is a collection of traditional and modern hunting accessories, including gun covers, holsters, cartridge belts, and ammunition bags, crafted using a combination of high-quality leather and other durable materials.",
      "The range blends classic leatherworking with modern functionality for the active hunter.",
    ],
    materials: ["High-quality leather", "Durable hardware"],
    quote: "High-quality leather, cut, stitched and finished as hunting accessories - made under one roof.",
  },
  {
    slug: "pets-pal",
    num: "05",
    name: "Pets' Pal",
    tag: "Pet Leather Goods",
    copy: "Collars, leashes and accessories in imported and indigenous leathers.",
    image: "/images/kings/products/pet-accessories.jpg",
    description: [
      "Pets' Pal is a stylish, functional collection of pet accessories crafted from a mix of imported and indigenous leathers, balancing luxury, durability, and eco-consciousness.",
    ],
    materials: ["Imported leather", "Indigenous leather"],
    quote: "Imported leather, cut, stitched and finished as pet accessories - made under one roof.",
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}
