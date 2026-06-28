"use client";

import Image from "next/image";
import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface HorizontalScrollProps {
  images: { src: string; alt: string; category: string }[];
}

export function HorizontalScroll({ images }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "right" ? 400 : -400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      aria-label="Horizontální galerie"
      className="py-24 bg-mist/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-3">
                Procházet
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light italic leading-none text-ink">
                Z posledních prací
              </h2>
            </div>
            <div className="hidden md:flex gap-2" aria-label="Posun galerie">
              <button
                onClick={() => scroll("left")}
                aria-label="Předchozí fotografie"
                className="w-10 h-10 rounded-full border border-mist hover:border-gold text-dust hover:text-gold transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Další fotografie"
                className="w-10 h-10 rounded-full border border-mist hover:border-gold text-dust hover:text-gold transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll track */}
      <div
        ref={scrollRef}
        role="list"
        aria-label="Fotografie z posledních prací"
        className="flex gap-4 overflow-x-auto scrollbar-hide pl-6 md:pl-12 pr-6 md:pr-12 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            role="listitem"
            className="flex-shrink-0 relative group overflow-hidden rounded-lg"
            style={{ width: "clamp(240px, 30vw, 380px)", aspectRatio: "2/3" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 240px, 380px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
              <span className="text-xs font-sans uppercase tracking-widest text-cream/80">
                {img.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
