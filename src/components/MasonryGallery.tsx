"use client";

import Image from "next/image";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
}

interface MasonryGalleryProps {
  id: string;
  images: GalleryImage[];
}

export function MasonryGallery({ id, images }: MasonryGalleryProps) {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

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
                onClick={() => setLightbox(img)}
                className="group relative block w-full overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                aria-label={`Zobrazit fotografii: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={img.span === "tall" ? 900 : 600}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Fotografie: ${lightbox.alt}`}
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Zavřít náhled"
            className={cn(
              "absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            )}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={900}
              className="w-full h-full object-contain rounded-lg"
              quality={95}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
