"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section
      id="o-mne"
      aria-labelledby="about-title"
      className="py-24 md:py-40 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image column */}
          <ScrollReveal variant="fade" className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/images/okamziky/7.jpg"
                alt="Fotografie Petry Holíkové"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={85}
              />
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 rounded-lg -z-10 hidden md:block"
              aria-hidden="true"
            />
          </ScrollReveal>

          {/* Text column */}
          <div className="flex flex-col justify-center">
            <ScrollReveal>
              <p className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-3">
                O mně
              </p>
              <h2
                id="about-title"
                className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light italic leading-none text-ink mb-8"
              >
                Za objektivem
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="font-sans text-base md:text-lg text-dust leading-relaxed mb-6">
                Moje cesta k fotografii byla jednoduše klikatá, tak jak už to
                bývá. Jiskřičku zájmu zažehlo moje první setkání s foťákem.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="font-sans text-base md:text-lg text-dust leading-relaxed mb-6">
                Začínala jsem fotit produktové fotografie, u kterých jsem
                zůstala, ale nejvíc mě pohltilo focení okamžiků, které jsem
                schopna zachytit v životě každého z Vás.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="font-sans text-base md:text-lg text-dust leading-relaxed mb-10">
                Digitální zrcadlovka mě okouzlila stejně, i když až o několik
                let později. Přenést svoje pocity do fotografie mě provází
                dodnes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex items-center gap-6">
                <a
                  href="#kontakt"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#kontakt")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-ink hover:bg-charcoal text-cream text-sm font-sans font-medium px-7 py-3.5 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  Napište mi
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dust hover:text-gold text-sm font-sans transition-colors duration-200 flex items-center gap-2"
                  aria-label="Instagram Petry Holíkové (otevře se v novém okně)"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                  Instagram
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
