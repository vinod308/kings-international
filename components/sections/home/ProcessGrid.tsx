"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import type { HomeContent } from "@/lib/home";

type ProcessStep = HomeContent["stats"]["process"][number];

export default function ProcessGrid({ process }: { process: ProcessStep[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % process.length));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? i : (i - 1 + process.length) % process.length));
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, process.length]);

  const active = activeIndex === null ? null : process[activeIndex];

  return (
    <>
      <RevealGroup className="flex flex-col gap-5 mb-20">
        {process.map((p, idx) => (
          <RevealItem key={p.image} type="up">
            <button
              onClick={() => setActiveIndex(idx)}
              className="group relative block w-full text-left rounded-2xl overflow-hidden"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={p.image}
                  alt={p.title?.trim() || "The process"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn
                  size={26}
                  strokeWidth={1.6}
                  className="text-cream opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300"
                />
              </div>
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
            onClick={() => setActiveIndex(null)}
          >
            <button
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="absolute top-5 right-5 sm:top-8 sm:right-8 text-cream/70 hover:text-cream transition-colors"
            >
              <X size={28} strokeWidth={1.6} />
            </button>

            {process.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((i) => (i === null ? i : (i - 1 + process.length) % process.length));
                  }}
                  aria-label="Previous image"
                  className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition-colors"
                >
                  <ChevronLeft size={32} strokeWidth={1.6} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((i) => (i === null ? i : (i + 1) % process.length));
                  }}
                  aria-label="Next image"
                  className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition-colors"
                >
                  <ChevronRight size={32} strokeWidth={1.6} />
                </button>
              </>
            )}

            <motion.div
              key={active.image}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-[90vw] sm:w-[70vw] h-[75vh] max-w-3xl rounded-xl overflow-hidden">
                <Image src={active.image} alt={active.title?.trim() || "The process"} fill sizes="90vw" className="object-contain" />
              </div>
              {(active.num?.trim() || active.title?.trim() || active.body?.trim()) && (
                <p className="mt-5 text-[14px] text-cream/75 text-center">
                  {active.num} · {active.title} - {active.body}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
