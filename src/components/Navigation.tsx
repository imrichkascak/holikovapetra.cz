"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Práce", href: "#prace" },
  { label: "O mně", href: "#o-mne" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/80 backdrop-blur-xl border-b border-mist/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Hlavní navigace"
        className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={cn(
            "font-display font-semibold text-lg tracking-wide transition-colors duration-300",
            scrolled ? "text-ink" : "text-cream"
          )}
          aria-label="Petra Holíková — přejít na začátek stránky"
        >
          Petra Holíková
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "text-xs font-sans font-medium uppercase tracking-widest transition-colors duration-300 hover:text-gold",
                  scrolled ? "text-dust" : "text-cream/80"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className={cn(
            "md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 transition-colors",
            scrolled ? "text-ink" : "text-cream"
          )}
        >
          <span
            className={cn(
              "block w-6 h-px bg-current transition-all duration-300",
              menuOpen ? "rotate-45 translate-y-2" : ""
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-current transition-all duration-300",
              menuOpen ? "opacity-0" : ""
            )}
          />
          <span
            className={cn(
              "block w-6 h-px bg-current transition-all duration-300",
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            )}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigační menu"
        aria-modal="true"
        className={cn(
          "md:hidden absolute inset-x-0 backdrop-blur-xl border-b transition-all duration-300 overflow-hidden",
          scrolled
            ? "bg-cream/95 border-mist"
            : "bg-ink/90 border-white/10",
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col p-6 gap-6 list-none" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "text-sm font-sans font-medium uppercase tracking-widest transition-colors",
                  scrolled
                    ? "text-dust hover:text-gold"
                    : "text-cream/80 hover:text-gold-light"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
