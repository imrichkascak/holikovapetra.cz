"use client";

import { useEffect, useRef } from "react";

const words = [
  "Moje",
  "práce",
  "je",
  "zachycovat",
  "ty",
  "nejkrásnější",
  "okamžiky",
  "ve",
  "Vašem",
  "životě.",
];

export function Statement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wordsRef.current.forEach((word, i) => {
            if (word) {
              setTimeout(() => {
                word.style.opacity = "1";
                word.style.transform = "translateY(0)";
              }, i * 90);
            }
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-label="Citát"
      className="relative overflow-hidden py-28 md:py-40"
    >
      {/* Fade from Hero's dark bottom into cream */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none z-0"
      />
      <div ref={containerRef} className="relative z-10 max-w-4xl px-6 md:px-12 mx-auto">
        <p
          className="font-display text-[clamp(2rem,5vw,4.5rem)] font-light italic leading-[1.2] text-ink"
          aria-label="Moje práce je zachycovat ty nejkrásnější okamžiky ve Vašem životě."
        >
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => {
                wordsRef.current[i] = el;
              }}
              className="inline-block mr-[0.3em] last:mr-0"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
              }}
            >
              {word}
            </span>
          ))}
        </p>
        <div className="mt-10 h-px w-24 bg-gold" aria-hidden="true" />
      </div>
    </section>
  );
}
