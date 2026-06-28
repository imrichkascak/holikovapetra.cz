"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
  ratio?: "square" | "portrait" | "tall";
}

interface MasonryGalleryProps {
  id: string;
  images: GalleryImage[];
}

export function MasonryGallery({ id, images }: MasonryGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightbox = lightboxIndex !== null ? images[lightboxIndex] : null;

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, prev, next]);

  return (
    <section
      id={id}
      aria-label="Fotogalerie"
      className="py-24 md:py-36 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="mb-16">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-3">
            Galerie
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light italic leading-none text-ink">
            Výběr prací
          </h2>
        </ScrollReveal>

        {/* Masonry grid — inspired by 21st.dev image gallery patterns */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6"
          role="list"
          aria-label="Fotografie z portfolia"
        >
          {images.map((img, i) => (
            <ScrollReveal
              key={img.src}
              delay={i * 60}
              className="break-inside-avoid"
              role="listitem"
            >
              <button
                onClick={() => setLightboxIndex(i)}
                className="group relative block w-full overflow-hidden rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                aria-label={`Zobrazit fotografii: ${img.alt}`}
              >
                {/* Fixed aspect-ratio wrapper prevents layout shift before image loads */}
                <div
                  className={cn(
                    "relative w-full",
                    img.span === "tall" ? "aspect-[2/3]" : "aspect-[3/4]"
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i < 3}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    quality={75}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-500 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cream/90 rounded-full p-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                        stroke="#0D0C0B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Fotografie ${lightboxIndex + 1} z ${images.length}: ${lightbox.alt}`}
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Zavřít náhled (Esc)"
            className={cn(
              "absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors z-10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            )}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Counter */}
          <p className="absolute top-6 left-1/2 -translate-x-1/2 text-cream/40 text-xs font-sans tracking-widest select-none">
            {lightboxIndex + 1} / {images.length}
          </p>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Předchozí fotografie (←)"
            className={cn(
              "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10",
              "w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 border border-cream/20 hover:border-cream/40",
              "text-cream flex items-center justify-center transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            )}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M11 3.5L5.5 9l5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Následující fotografie (→)"
            className={cn(
              "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10",
              "w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 border border-cream/20 hover:border-cream/40",
              "text-cream flex items-center justify-center transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            )}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M7 3.5L12.5 9 7 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={lightbox.src}
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto h-auto object-contain rounded-lg"
              quality={95}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
