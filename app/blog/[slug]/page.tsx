import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import MarkdownContent from "@/components/blog/MarkdownContent";
import { POSTS, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="relative min-h-[48svh] flex items-end overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        </div>

        <div className="container-site relative z-10 pb-16 pt-40">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.08em] uppercase text-cream/70 hover:text-cream transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Leather Knowledge
          </Link>
          <p className="text-[12px] sm:text-[13px] tracking-[0.24em] uppercase text-gold font-semibold mb-6">
            {post.category} · {post.date}
          </p>
          <h1 className="font-display text-[clamp(28px,4.4vw,50px)] leading-[1.08] tracking-tight text-cream max-w-3xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site">
          <Reveal type="up" className="max-w-2xl mx-auto mb-24">
            <MarkdownContent content={post.content} />
          </Reveal>

          <div className="max-w-2xl mx-auto">
            <Reveal type="up" className="mb-10 pt-10 border-t border-[var(--line)]">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green mb-4">Keep Reading</p>
            </Reveal>

            <RevealGroup className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <RevealItem key={p.slug} type="up">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block rounded-2xl bg-white border border-[var(--line)] overflow-hidden hover:shadow-xl hover:shadow-black/[0.06] hover:-translate-y-1 transition-all duration-400"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-[15.5px] font-semibold text-ink leading-snug">{p.title}</h3>
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
          </div>
        </div>
      </section>
    </>
  );
}
