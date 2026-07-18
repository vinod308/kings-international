"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import type { MediaCategory, MediaItem } from "@/lib/media";

const MEDIA_FILTERS: { key: "all" | MediaCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "facility", label: "Facility & Process" },
  { key: "products", label: "Products" },
];

export default function MediaGallery({ items: allItems }: { items: MediaItem[] }) {
  const [filter, setFilter] = useState<"all" | MediaCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = filter === "all" ? allItems : allItems.filter((i) => i.category === filter);

  useEffect(() => {
    if (lightboxIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, items.length]);

  const active = lightboxIndex === null ? null : items[lightboxIndex];

  return (
    <>
      <div className="flex flex-wrap gap-2.5 mb-12">
        {MEDIA_FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => {
              setFilter(f.key);
              setLightboxIndex(null);
            }}
            className={`rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-[0.04em] transition-colors ${
              filter === f.key
                ? "bg-ink text-cream"
                : "bg-white border border-[var(--line)] text-ink-soft hover:border-ink/30"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <RevealGroup key={filter} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {items.map((item, idx) => (
          <RevealItem key={item.src} type="up">
            <button
              onClick={() => setLightboxIndex(idx)}
              className="group block w-full text-left relative aspect-[4/5] rounded-2xl overflow-hidden bg-cream-deep"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute left-4 right-4 bottom-4 text-cream text-[13px] font-medium leading-snug opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                {item.caption}
              </span>
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
              className="absolute top-5 right-5 sm:top-8 sm:right-8 text-cream/70 hover:text-cream transition-colors"
            >
              <X size={28} strokeWidth={1.6} />
            </button>

            {items.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
                  }}
                  aria-label="Previous image"
                  className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition-colors"
                >
                  <ChevronLeft size={32} strokeWidth={1.6} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) => (i === null ? i : (i + 1) % items.length));
                  }}
                  aria-label="Next image"
                  className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition-colors"
                >
                  <ChevronRight size={32} strokeWidth={1.6} />
                </button>
              </>
            )}

            <motion.div
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden">
                <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-contain" />
              </div>
              <p className="mt-5 text-[14px] text-cream/75">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
