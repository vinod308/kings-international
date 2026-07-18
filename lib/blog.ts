export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
};

export const POSTS: Post[] = [
  {
    slug: "full-grain-vs-top-grain-leather",
    title: "Full-Grain vs. Top-Grain Leather: What Buyers Should Actually Look For",
    date: "July 6, 2026",
    category: "Materials",
    excerpt:
      "The terms get thrown around interchangeably in sourcing conversations, but the difference affects durability, cost, and finish - here's how to tell them apart.",
    image: "/images/kings/manufacturing/tannery-hides.jpg",
    content: `When you're sourcing belts, bags, or saddlery, "genuine leather" on a spec sheet doesn't tell you much on its own. The grade of leather - full-grain, top-grain, or corrected-grain - has a bigger effect on durability, feel, and price than most buyers realize.

## What "Grain" Actually Means

A hide has layers. The outermost layer, closest to the animal's skin, carries the natural grain pattern, pores, and texture that give leather its character. How much of that layer survives processing determines the grade.

## Full-Grain Leather

Full-grain leather uses the entire top layer of the hide, with only the hair removed. Nothing is sanded or buffed away, so the natural grain, small imperfections, and texture variations remain visible. This is the most durable grade - the dense fiber structure at the surface resists wear and develops a patina over years of use rather than cracking or peeling. It's also the least uniform, since every hide looks slightly different.

## Top-Grain Leather

Top-grain leather also comes from the top layer, but the surface is lightly sanded and often refinished with a coating to even out the texture and hide natural blemishes. It's more uniform in appearance and easier to work with at scale, which is why it's common in bags, belts, and upholstery where a consistent look across a production run matters. It's still genuine leather and holds up well, though it typically doesn't develop the same depth of patina as full-grain.

## Corrected-Grain and Bonded Leather

Below top-grain, corrected-grain leather has the surface sanded more aggressively and an artificial grain embossed back on. Bonded leather isn't really a hide at all - it's leftover leather fibers bonded together with adhesive and coated to look like leather. Both are lower-cost options, but they wear differently (and generally less gracefully) than genuine full-grain or top-grain material.

## What This Means for Sourcing

Neither full-grain nor top-grain is automatically "better" - it depends on the product. A cartridge belt or a saddle benefits from full-grain's toughness and character. A large batch of retail belts where every unit needs to look identical off the shelf might call for top-grain instead. What matters is that your manufacturer is transparent about which grade is going into your order, and that the grade matches what the product actually needs to do.

## FAQs

**Q1: Is full-grain leather always the most expensive option?**
Usually, yes - it costs more to select and process hides with fewer imperfections, and the material itself is scarcer per hide.

**Q2: Does top-grain leather still count as "genuine leather"?**
Yes. Both full-grain and top-grain are real leather from the hide's top layer; the difference is in surface treatment, not material origin.

**Q3: Which grade lasts longer?**
Full-grain generally outlasts top-grain because the natural fiber structure at the surface is left intact, but both can last for years with proper care.

**Q4: How can I verify what grade I'm actually receiving?**
Ask your manufacturer for a physical swatch or sample piece before committing to a bulk order, and request the grade in writing on the spec sheet.`,
  },
  {
    slug: "oem-vs-private-label-leather-manufacturing",
    title: "OEM vs. Private Label: Which Manufacturing Model Fits Your Brand?",
    date: "June 22, 2026",
    category: "Manufacturing",
    excerpt:
      "Both let you sell leather goods under your own name, but they start from different places - one from your brief, one from an existing design. Here's how to choose.",
    image: "/images/kings/manufacturing/handcraft-stitching.jpg",
    content: `Brands sourcing leather goods for the first time often use "OEM" and "private label" interchangeably. They overlap, but they're not the same starting point - and picking the wrong one can cost you time on development you didn't need, or leave you without the customization you actually wanted.

## Private Label: Start From What Already Exists

Private label manufacturing means putting your brand on a product that's already designed and in production. The manufacturer has a catalogue of existing belts, bags, or accessories; you choose a design, specify your branding - hardware stamping, packaging, hang tags - and the factory produces it under your name. It's the faster route to market because there's no pattern development or prototyping cycle. The trade-off is that you're working within the boundaries of an existing design rather than building something from scratch.

## OEM / Custom Development: Start From Your Brief

OEM (or fully custom development) starts from your specification, sketch, or physical sample instead of the manufacturer's catalogue. The factory builds a pattern, produces a counter-sample for your approval, and only moves to bulk production once the design is locked. This gives you full control over silhouette, materials, hardware, and construction - but it takes longer and usually requires a higher minimum order to justify the development work.

## How to Decide

Ask yourself three questions:

1. **Do you already have a product design, or are you starting from an idea?** If you have a design or a competitor's product you want matched closely, custom OEM development is the right lane. If you're happy building from an existing, proven design, private label is faster.
2. **How much time do you have before launch?** Private label can often move to production almost immediately. OEM development adds weeks for patterning, sampling, and revisions.
3. **What volume are you planning?** Custom tooling and pattern development are easier to justify against a larger order. If you're testing a small batch first, starting with a private-label product and evolving to custom development later is a common path.

## A Hybrid Approach

Many brands do both over time: launch with a private-label product to validate demand quickly, then move specific hero products to full OEM development once the brand has traction and can commit to the volume that justifies custom tooling. A manufacturer that offers both models under one roof makes that transition easier, since your production history and quality expectations carry over.

## FAQs

**Q1: Is OEM always more expensive than private label?**
Per-unit cost depends on volume more than model, but OEM typically carries additional upfront development cost for patterns and samples that private label skips.

**Q2: Can I request changes to a private-label design?**
Some manufacturers allow limited changes - color, hardware, stitching - to an existing private-label design without moving to full custom development. Ask what's flexible before assuming it isn't.

**Q3: Who owns the pattern or tooling in an OEM arrangement?**
This varies by agreement - some manufacturers retain the pattern for future reorders, others transfer it exclusively to the brand. Clarify this in your manufacturing agreement before development begins.

**Q4: Do I need a large order to start with OEM development?**
Not necessarily, but expect the manufacturer to set a minimum that reflects the cost of pattern-making and sampling, separate from the bulk production minimum.`,
  },
  {
    slug: "reach-compliance-leather-goods-buyers-guide",
    title: "What REACH Compliance Means for Leather Goods Buyers",
    date: "June 3, 2026",
    category: "Sustainability",
    excerpt:
      "If you're importing leather goods into the EU - or selling to brands that do - REACH compliance isn't optional. Here's what it actually covers.",
    image: "/images/kings/hero/manufacturing-hero.jpg",
    content: `REACH compliance comes up constantly in leather sourcing conversations, but buyers new to the industry often aren't sure exactly what it regulates or why it matters beyond "it's required for Europe." Here's a plain-language breakdown.

## What REACH Actually Is

REACH stands for Registration, Evaluation, Authorisation and Restriction of Chemicals - an EU regulatory framework that controls which chemical substances can be used in products sold within the European Union, including leather goods. For leather specifically, REACH restricts substances like certain chromium compounds, azo dyes, and other chemicals historically used in tanning and finishing that pose health or environmental risks.

## Why It Matters Beyond the EU

Even if your end market isn't the EU, REACH has become something of a de facto global standard because so much leather trade routes through or references European buyers. A manufacturer that tans and finishes to REACH standards as a baseline is generally also meeting or exceeding the chemical safety bar for other major markets, which simplifies compliance if you expand into new territories later.

## What to Ask Your Manufacturer

If a supplier tells you their leather is "REACH compliant," it's reasonable to ask what that means in practice:

- Which specific restricted substances are they testing for, and how often?
- Do they have third-party lab testing, or is compliance self-declared?
- Can they provide documentation per batch, or only as a general company policy?

A manufacturer with an in-house tannery has an advantage here - they control the tanning and dyeing process directly rather than relying on a subcontracted tannery whose chemical sourcing they can't fully verify.

## Compliance Is a Process, Not a Certificate

REACH isn't a one-time certification you earn and keep forever - restricted substance lists are updated periodically, and compliance needs to be maintained as an ongoing part of chemical sourcing and process control, not treated as a box checked once during an audit.

## FAQs

**Q1: Does REACH compliance affect the look or feel of the leather?**
Generally no - REACH restricts specific harmful substances, not the tanning method itself, so compliant leather can still be full-grain, top-grain, or any finish you'd otherwise specify.

**Q2: Is REACH the same as being "eco-friendly" or "sustainable"?**
Not exactly. REACH is specifically about chemical safety; sustainability claims (water usage, renewable energy, waste management) are separate, though a manufacturer serious about one is often serious about both.

**Q3: Can I request REACH test documentation for a specific order?**
Yes - reputable manufacturers should be able to provide batch-level or periodic lab test documentation on request, particularly for orders headed to regulated markets.

**Q4: Does REACH compliance cost more?**
It can, since compliant chemicals and testing add cost versus untested alternatives - but for any brand selling into regulated markets, it's not really optional, and it reduces the risk of shipments being rejected at customs.`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
