"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

interface Photo {
  src: string;
  alt: string;
}

interface WorkSectionProps {
  id: string;
  label: string;
  title: string;
  description: string;
  photos: Photo[];
  reverse?: boolean;
  accent?: boolean;
}

export function WorkSection({
  id,
  label,
  title,
  description,
  photos,
  reverse = false,
  accent = false,
}: WorkSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "py-24 md:py-36",
        accent ? "bg-charcoal text-cream" : "bg-cream text-ink"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <div className={cn("flex items-start gap-6", reverse ? "justify-end text-right" : "")}>
            <div>
              <p
                className={cn(
                  "text-xs font-sans uppercase tracking-[0.3em] mb-3",
                  accent ? "text-gold" : "text-gold"
                )}
              >
                {label}
              </p>
              <h2
                id={`${id}-title`}
                className={cn(
                  "font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light italic leading-none",
                  accent ? "text-cream" : "text-ink"
                )}
              >
                {title}
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div
          className={cn(
            "grid gap-4 md:gap-6",
            photos.length === 1
              ? "grid-cols-1"
              : photos.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : photos.length === 3
                  ? "grid-cols-1 md:grid-cols-3"
                  : "grid-cols-2 md:grid-cols-4"
          )}
        >
          {photos.map((photo, i) => (
            <ScrollReveal
              key={photo.src}
              delay={i * 100}
              className={cn(
                "group relative overflow-hidden rounded-lg",
                photos.length === 4 && i === 0
                  ? "md:col-span-2 md:row-span-2 aspect-square"
                  : "aspect-[3/4]"
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  photos.length <= 2
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 100vw, 33vw"
                }
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                quality={85}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
            </ScrollReveal>
          ))}
        </div>

        {/* Description */}
        <ScrollReveal delay={200} className="mt-12 max-w-lg">
          <p
            className={cn(
              "font-sans text-base leading-relaxed",
              accent ? "text-cream/70" : "text-dust"
            )}
          >
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
