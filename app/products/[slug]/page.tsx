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

  return (
    <>
      <PageHero
        eyebrow={product.heroEyebrow}
        title={product.heroTitle ?? product.title}
        intro={product.tagline}
        image={product.image}
        imageAlt={product.title}
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 sm:mb-28">
            <div className="lg:col-span-7">
              <Reveal type="up">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">
                  {product.introEyebrow ?? "Overview"}
                </p>
                {product.introHeading && (
                  <h2 className="font-display text-[clamp(24px,3vw,36px)] leading-[1.15] tracking-tight text-ink mb-4">
                    {product.introHeading}
                  </h2>
                )}
                <div className="flex flex-col gap-4">
                  {product.heroIntro.split("\n\n").map((p, i) => (
                    <p key={i} className="text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
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

          {product.collections && (
            <div className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-[var(--line)]">
              <Reveal type="up" className="mb-10">
                <h2 className="font-display text-[clamp(24px,3vw,36px)] leading-[1.15] tracking-tight text-ink">
                  {product.collections.heading}
                </h2>
              </Reveal>

              <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                {product.collections.items.map((item) => (
                  <RevealItem key={item.name} type="up">
                    <div className="rounded-2xl overflow-hidden bg-white border border-[var(--line)]">
                      <div className="relative aspect-[4/3] bg-cream-deep">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 50vw, 20vw"
                            className="object-cover"
                          />
                        )}
                      </div>
                      <p className="text-center text-[13.5px] font-medium text-ink py-3">{item.name}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          )}

          {product.qualityStandards && (
            <div className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-[var(--line)] max-w-3xl">
              <Reveal type="up">
                <h2 className="font-display text-[clamp(24px,3vw,36px)] leading-[1.15] tracking-tight text-ink mb-4">
                  {product.qualityStandards.heading}
                </h2>
                <p className="text-[16px] leading-relaxed text-ink-soft">{product.qualityStandards.body}</p>
              </Reveal>
            </div>
          )}

          {product.customDevelopment && (
            <div className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-[var(--line)] max-w-3xl">
              <Reveal type="up">
                <h2 className="font-display text-[clamp(24px,3vw,36px)] leading-[1.15] tracking-tight text-ink mb-4">
                  {product.customDevelopment.heading}
                </h2>
                <div className="flex flex-col gap-4">
                  {product.customDevelopment.body.split("\n\n").map((p, i) => (
                    <p key={i} className="text-[16px] leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>

      <section className="bg-cream-deep py-24 sm:py-32">
        <div className="container-site">
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
