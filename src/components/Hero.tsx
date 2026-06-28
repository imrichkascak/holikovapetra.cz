"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxY = scrollY * 0.35;

  return (
    <section
      ref={ref}
      aria-label="Uvítací sekce"
      className="relative h-screen min-h-[600px] overflow-hidden flex items-end"
    >
      {/* Parallax background image */}
      <div
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${parallaxY}px) scale(1.1)` }}
        aria-hidden="true"
      >
        <Image
          src="/images/okamziky/1.jpg"
          alt="Zachycený okamžik"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
        <div className="max-w-3xl">
          <p className="text-cream/60 text-xs font-sans uppercase tracking-[0.3em] mb-6 animate-fade-in">
            Fotografie · Zlín
          </p>
          <h1 className="font-display text-cream leading-none mb-6">
            <span className="block text-[clamp(3.5rem,10vw,9rem)] font-light italic tracking-tight">
              Petra
            </span>
            <span className="block text-[clamp(3.5rem,10vw,9rem)] font-semibold tracking-tight -mt-2">
              Holíková
            </span>
          </h1>
          <p className="text-cream/70 font-sans text-base md:text-lg font-light max-w-md leading-relaxed">
            Zachycuji okamžiky, které tvoří příběhy. Od produktů po portréty —
            každá fotografie je světlo zachycené v čase.
          </p>
          <div className="mt-10 flex items-center gap-8">
            <a
              href="#prace"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#prace")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 bg-cream/10 hover:bg-cream/20 backdrop-blur-sm border border-cream/20 hover:border-cream/40 text-cream text-sm font-sans font-medium px-7 py-3.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Prohlédnout práce
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M8 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-cream/70 hover:text-cream text-sm font-sans font-medium transition-colors duration-200 underline underline-offset-4 decoration-cream/30 hover:decoration-cream/60"
            >
              Rezervovat termín
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-10 flex flex-col items-center gap-2 text-cream/40"
        aria-hidden="true"
      >
        <span className="text-[10px] font-sans uppercase tracking-widest rotate-90 origin-center mb-6">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-cream/40 to-transparent" />
      </div>
    </section>
  );
}
