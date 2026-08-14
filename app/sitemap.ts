import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { BRANDS } from "@/lib/brands";
import { POSTS } from "@/lib/blog";

const STATIC_ROUTES = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/brands", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/sustainability", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/quality", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/environmental-compliance", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/tannery", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/smart-factory", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/green-factory", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/certifications", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/media", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/markets", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/oem", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/quote", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productEntries: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const brandEntries: MetadataRoute.Sitemap = BRANDS.map((brand) => ({
    url: `${SITE_URL}/brands/${brand.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...productEntries, ...brandEntries, ...blogEntries];
}
