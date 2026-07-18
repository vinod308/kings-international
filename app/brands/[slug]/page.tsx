import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BRANDS, getBrandBySlug } from "@/lib/brands";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return { title: "Brand not found" };

  return {
    title: brand.name,
    description: brand.copy,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const related = BRANDS.filter((b) => b.slug !== brand.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Our Brands · ${brand.num} / 05`}
        title={brand.name}
        intro={brand.tag}
        image={brand.image}
        imageAlt={brand.name}
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 sm:mb-28">
            <div className="lg:col-span-7">
              <Reveal type="up">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Overview</p>
                <div className="flex flex-col gap-5 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
                  {brand.description.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal type="up" delay={0.1}>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Materials</p>
                <ul className="flex flex-wrap gap-2.5 border-t border-[var(--line)] pt-6">
                  {brand.materials.map((m) => (
                    <li
                      key={m}
                      className="text-[13.5px] font-medium text-ink bg-white border border-[var(--line)] rounded-full px-4 py-2"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <Reveal type="up">
            <blockquote className="rounded-2xl bg-cream-deep px-8 py-10 sm:px-12 sm:py-14 border-l-4 border-gold">
              <p className="font-display text-[clamp(20px,2.4vw,28px)] leading-snug tracking-tight text-ink italic">
                &ldquo;{brand.quote}&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Explore More</p>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight text-ink">
              Other house brands.
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-3 gap-6 mb-16">
            {related.map((b) => (
              <RevealItem key={b.slug} type="up">
                <Link
                  href={`/brands/${b.slug}`}
                  className="group block rounded-2xl bg-white border border-[var(--line)] overflow-hidden hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={b.image}
                      alt={b.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-[17px] font-semibold text-ink">{b.name}</h3>
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
                  Ready to talk {brand.name}?
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
