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

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // When menu is open, always use dark (ink) text since overlay is cream
  const headerTextColor = menuOpen || scrolled ? "text-ink" : "text-cream";

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled && !menuOpen
            ? "bg-cream/80 backdrop-blur-xl border-b border-mist/60 shadow-sm"
            : menuOpen
            ? "bg-cream"
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
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={cn(
              "font-display font-semibold text-lg tracking-wide transition-colors duration-300",
              headerTextColor
            )}
            aria-label="Petra Holíková — přejít na začátek stránky"
          >
            Petra Holíková
          </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none" role="list">
          {navLinks.filter((l) => l.href !== "#kontakt").map((link) => (
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
          <li>
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#kontakt");
              }}
              className={cn(
                "text-xs font-sans font-medium uppercase tracking-widest px-5 py-2 rounded-full border transition-all duration-300 hover:bg-gold hover:border-gold hover:text-cream",
                scrolled
                  ? "border-ink/30 text-ink"
                  : "border-cream/50 text-cream"
              )}
            >
              Kontakt
            </a>
          </li>
        </ul>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 transition-colors",
              headerTextColor
            )}
          >
            <span
              className={cn(
                "block w-6 h-px bg-current transition-all duration-300",
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
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
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              )}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigační menu"
        aria-modal="true"
        aria-hidden={!menuOpen}
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-cream flex flex-col justify-center items-center transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <ul className="flex flex-col items-center gap-2 list-none w-full px-8" role="list">
          {navLinks.map((link, i) => (
            <li key={link.href} className="w-full">
              <a
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "flex items-center justify-between w-full py-6 border-b border-mist",
                  "font-display text-3xl font-light text-ink hover:text-gold transition-colors duration-200",
                  i === 0 && "border-t"
                )}
              >
                <span>{link.label}</span>
                <span className="text-dust text-sm font-sans font-normal tracking-widest">
                  0{i + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
