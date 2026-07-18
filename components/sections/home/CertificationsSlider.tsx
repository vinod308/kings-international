"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CERTIFICATION_SLIDES } from "@/lib/certifications";

export default function CertificationsSlider() {
  const [index, setIndex] = useState(0);
  const count = CERTIFICATION_SLIDES.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-[var(--line)]">
        {CERTIFICATION_SLIDES.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority={i === 0}
            className="object-contain p-[3%] transition-opacity duration-500"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous certification"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ink/60 text-cream flex items-center justify-center hover:bg-ink/80 transition-colors"
            >
              <ChevronLeft size={20} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next certification"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ink/60 text-cream flex items-center justify-center hover:bg-ink/80 transition-colors"
            >
              <ChevronRight size={20} strokeWidth={1.8} />
            </button>
          </>
        )}
      </div>

      <p className="mt-4 text-center text-[13px] font-medium text-ink-soft">{CERTIFICATION_SLIDES[index].label}</p>

      {count > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {CERTIFICATION_SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[7px] rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-ink" : "w-[7px] bg-ink/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
