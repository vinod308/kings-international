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

export const PRODUCTS: Product[] = [
  {
    slug: "finished-leather",
    num: "01",
    title: "Finished Leather",
    tagline: "The base material behind everything we make.",
    blurb: "Wet-blue and wet-white leather, tanned and finished in-house for bags, belts, garments, saddlery and harness.",
    image: "/images/kings/manufacturing/tannery-hides.jpg",
    heroIntro:
      "Every product that leaves our facility starts on our own tannery floor. We process buffalo and cow hides through wet-blue and wet-white tanning in-house, giving us control over consistency, thickness, and finish from the raw hide onward - rather than buying pre-tanned stock from a third party.",
    characteristics: [
      "In-house wet-blue and wet-white processing",
      "Chrome and chrome-free tanning options",
      "Batch-to-batch consistency in colour and temper",
      "Full grading and selection before it reaches finishing",
    ],
    applications: ["Bags & leather goods", "Belts", "Garments", "Saddlery & harness"],
    specs: [
      { label: "Tanning", value: "Wet-blue & wet-white (chrome / chrome-free)" },
      { label: "Hide source", value: "Buffalo & cow" },
      { label: "Thickness range", value: "0.8mm – 3.5mm" },
      { label: "Finish options", value: "Aniline, semi-aniline, pigmented" },
    ],
  },
  {
    slug: "buffalo-leather",
    num: "02",
    title: "Buffalo Leather",
    tagline: "Full-grain strength for saddlery and harness.",
    blurb: "Full-grain buffalo hide, tanned in-house for the strength and grain character saddlery and harness demand.",
    image: "/images/kings/products/equestrian.jpg",
    heroIntro:
      "Buffalo hide has a denser fibre structure than cow or goat, which is why it's been the backbone of Kanpur's saddlery trade for generations. We tan it full-grain, keeping the natural markings and strength intact for products that need to carry real, repeated load.",
    characteristics: [
      "Dense fibre structure with high tensile strength",
      "Full-grain, natural markings retained",
      "Ages and patinas well under regular use",
      "Suited to heavy stitching and load-bearing hardware",
    ],
    applications: ["Saddles & harness", "Belts", "Heavy-duty bags", "Straps & tack"],
    specs: [
      { label: "Hide source", value: "Indian buffalo" },
      { label: "Grain", value: "Full-grain, natural character" },
      { label: "Thickness range", value: "1.2mm – 4mm" },
      { label: "Finish options", value: "Aniline & semi-aniline" },
    ],
  },
  {
    slug: "goat-leather",
    num: "03",
    title: "Goat Leather",
    tagline: "Fine grain, soft hand-feel, light weight.",
    blurb: "Softer hand-feel and finer grain than buffalo or cow leather - suited to wallets and small leather goods.",
    image: "/images/kings/manufacturing/handcraft-stitching.jpg",
    heroIntro:
      "Where buffalo leather is chosen for strength, goat leather is chosen for feel. Its tighter, finer grain and lighter weight give it a soft drape that buffalo and cow hides can't match - the right material for products that are judged by touch as much as durability.",
    characteristics: [
      "Fine, tight grain structure",
      "Lightweight with a soft, supple drape",
      "Strong strength-to-weight ratio for its thinness",
      "Takes dye and printing evenly",
    ],
    applications: ["Wallets & small leather goods", "Garment leather", "Linings", "Accessories"],
    specs: [
      { label: "Hide source", value: "Indian goat" },
      { label: "Grain", value: "Fine, tight grain" },
      { label: "Thickness range", value: "0.6mm – 1.2mm" },
      { label: "Finish options", value: "Aniline, nappa, printed" },
    ],
  },
  {
    slug: "safety-shoe-leather",
    num: "04",
    title: "Safety Shoe Leather",
    tagline: "Built to the standards industrial footwear demands.",
    blurb: "Tanned and finished to the abrasion, water-resistance and durability standards industrial footwear requires.",
    image: "/images/kings/products/gym-accessories.jpg",
    heroIntro:
      "Industrial and safety footwear puts leather through abrasion, moisture, and flex-fatigue that fashion leather never sees. We finish this category specifically for that environment - water-resistant crusting, reinforced abrasion resistance, and the consistent thickness footwear manufacturers need to build to spec.",
    characteristics: [
      "Water-resistant and oil-pull-up finish options",
      "Reinforced abrasion resistance",
      "Consistent thickness for automated cutting",
      "Tested for flex fatigue and durability",
    ],
    applications: ["Safety shoe uppers", "Industrial footwear", "Work boots"],
    specs: [
      { label: "Hide source", value: "Buffalo & cow" },
      { label: "Finish", value: "Waterproof / oil-pull-up, water-resistant crust" },
      { label: "Thickness range", value: "1.8mm – 2.6mm" },
      { label: "Durability", value: "Abrasion & water-resistance tested" },
    ],
  },
  {
    slug: "industrial-leather",
    num: "05",
    title: "Industrial Leather",
    tagline: "Heavier-duty leather for technical applications.",
    blurb: "Finished for heavier-duty applications - automotive and furniture upholstery, technical straps and components.",
    image: "/images/kings/manufacturing/sustainability-zld-plant.jpg",
    heroIntro:
      "Not every leather product is a finished good - a lot of what we tan goes into components. Automotive and furniture upholstery, technical straps, and machine parts all demand a heavier, more engineered leather than a bag or a belt, with thickness and finish held tight across the run.",
    characteristics: [
      "Engineered for load, heat, and repeated wear",
      "Consistent thickness for machine cutting and assembly",
      "Technical coating options for demanding environments",
      "Produced to component-level tolerances",
    ],
    applications: ["Automotive upholstery", "Furniture upholstery", "Technical straps", "Machine components"],
    specs: [
      { label: "Hide source", value: "Buffalo & cow" },
      { label: "Finish", value: "Pigmented, technical coatings" },
      { label: "Thickness range", value: "1.5mm – 4mm" },
      { label: "Typical use", value: "Automotive, furniture, industrial components" },
    ],
  },
  {
    slug: "leather-goods",
    num: "06",
    title: "Leather Goods",
    tagline: "Cut, dyed and stitched under one roof.",
    blurb: "Bags, wallets, belts, gym accessories and small leather goods, cut, dyed and stitched under one roof.",
    image: "/images/kings/products/leather-goods.jpg",
    heroIntro:
      "This is where the other five categories come together into finished product. Our cutting, dyeing, and stitching lines turn our own finished leather into bags, wallets, belts, and small goods - built to your specification, whether that's private label on an existing design or a fully custom development.",
    characteristics: [
      "Full in-house cutting, dyeing and stitching",
      "Private label and OEM development",
      "Hardware and component sourcing to your spec",
      "Quality inspection at every production stage",
    ],
    applications: ["Bags & totes", "Wallets & small leather goods", "Belts", "Gym & fitness accessories"],
    specs: [
      { label: "Process", value: "Cutting, dyeing & stitching in-house" },
      { label: "Capability", value: "Private label & OEM" },
      { label: "Categories", value: "Bags, wallets, belts, gym accessories" },
      { label: "Finish", value: "To brand specification" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
