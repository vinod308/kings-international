import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { PRODUCTS, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };

  return {
    title: product.title,
    description: product.blurb,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Our Leathers · ${product.num} / 06`}
        title={product.title}
        intro={product.tagline}
        image={product.image}
        imageAlt={product.title}
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 sm:mb-28">
            <div className="lg:col-span-7">
              <Reveal type="up">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Overview</p>
                <p className="text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">{product.heroIntro}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal type="up" delay={0.1}>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--line)] pt-6">
                  {product.specs.map((s) => (
                    <div key={s.label}>
                      <dt className="text-[10px] font-semibold tracking-[0.18em] uppercase text-ink-soft/60 mb-1.5">
                        {s.label}
                      </dt>
                      <dd className="text-[14px] font-medium text-ink leading-snug">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-12 lg:gap-16">
            <Reveal type="up">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">
                Key Characteristics
              </p>
              <ul className="flex flex-col gap-4">
                {product.characteristics.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-green-soft flex items-center justify-center text-green shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-soft">{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal type="up" delay={0.1}>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">
                Typical Applications
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {product.applications.map((a) => (
                  <li
                    key={a}
                    className="text-[13.5px] font-medium text-ink bg-white border border-[var(--line)] rounded-full px-4 py-2"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Explore More</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              Other leather categories.
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-3 gap-6 mb-16">
            {related.map((p) => (
              <RevealItem key={p.slug} type="up">
                <Link
                  href={`/products/${p.slug}`}
                  className="group block rounded-2xl bg-white border border-[var(--line)] overflow-hidden hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-[17px] font-semibold text-ink">{p.title}</h3>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 mt-1 text-ink-soft/40 group-hover:text-green group-hover:rotate-45 transition-all duration-300"
                      />
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal type="up">
            <div className="rounded-3xl bg-ink px-8 py-12 sm:px-14 sm:py-16 flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-gold mb-4">
                  Private label or fully custom
                </p>
                <h3 className="font-display text-[clamp(24px,2.8vw,34px)] leading-tight tracking-tight text-cream">
                  Ready to spec a {product.title.toLowerCase()} order?
                </h3>
              </div>
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-[13px] font-semibold tracking-[0.06em] uppercase text-ink hover:bg-cream transition-colors shrink-0"
              >
                Request a Quote
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
