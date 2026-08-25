import { SITE_URL } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { BRANDS } from "@/lib/brands";
import { POSTS } from "@/lib/blog";

export async function GET() {
  const lines: string[] = [];

  lines.push("# Kings International");
  lines.push("");
  lines.push(
    "> Vertically integrated manufacturer and exporter of hand-crafted leather goods, founded in 1977 in Kanpur, India. Operates an in-house tannery (chrome and chrome-free tanning, ~200 hides/day) producing finished leather and value-added leather goods - belts, bags, wallets, equestrian/saddlery, pet accessories, hunting accessories, gym accessories - for global brands, wholesalers, and OEM/private-label partners. ISO 9001, 14001, 45001 & 50001 certified, LWG Gold rated, MSME ZED Gold certified."
  );
  lines.push("");

  lines.push("## Company");
  lines.push(`- [About](${SITE_URL}/about): Company history and facilities.`);
  lines.push(`- [Sustainability](${SITE_URL}/sustainability): Environmental commitments and initiatives.`);
  lines.push(`- [Quality](${SITE_URL}/quality): Quality control process and standards.`);
  lines.push(`- [Certifications](${SITE_URL}/certifications): ISO, LWG, ZDHC, REACH and other certifications.`);
  lines.push(`- [Tannery](${SITE_URL}/tannery): In-house tanning division.`);
  lines.push(`- [Smart Factory](${SITE_URL}/smart-factory): Manufacturing facility overview.`);
  lines.push(`- [Green Factory](${SITE_URL}/green-factory): Renewable-energy and eco-manufacturing facility.`);
  lines.push(`- [Environmental Compliance](${SITE_URL}/environmental-compliance): Regulatory and compliance standards.`);
  lines.push(`- [OEM Services](${SITE_URL}/oem): Private-label and custom development services.`);
  lines.push(`- [Markets](${SITE_URL}/markets): Industries and markets served.`);
  lines.push("");

  lines.push("## Products");
  for (const p of PRODUCTS) {
    lines.push(`- [${p.title}](${SITE_URL}/products/${p.slug}): ${p.blurb}`);
  }
  lines.push("");

  lines.push("## Brands");
  lines.push(`- [Brands overview](${SITE_URL}/brands)`);
  for (const b of BRANDS) {
    lines.push(`- [${b.name}](${SITE_URL}/brands/${b.slug}): ${b.tag}`);
  }
  lines.push("");

  lines.push("## Leather Knowledge (Blog)");
  for (const post of POSTS) {
    lines.push(`- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`);
  }
  lines.push("");

  lines.push("## Contact");
  lines.push(
    `- [Contact](${SITE_URL}/contact): Corporate office in Kanpur, India; overseas subsidiary in Harrow, UK.`
  );
  lines.push(`- [Request a Quote](${SITE_URL}/quote)`);
  lines.push("");

  lines.push("## Optional");
  lines.push(`- [Media](${SITE_URL}/media)`);
  lines.push(`- [Privacy Policy](${SITE_URL}/privacy)`);

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
