"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-ink py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-cream/60">
        <p className="font-display text-base italic">Petra Holíková</p>

        <nav aria-label="Patička — navigace">
          <ul className="flex items-center gap-6 list-none text-xs font-sans uppercase tracking-widest">
            <li>
              <a
                href="#prace"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#prace")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-cream transition-colors"
              >
                Práce
              </a>
            </li>
            <li>
              <a
                href="#o-mne"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#o-mne")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-cream transition-colors"
              >
                O mně
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-cream transition-colors"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-xs font-sans">
          © {year} Petra Holíková. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}
