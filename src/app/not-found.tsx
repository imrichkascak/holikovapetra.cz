import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ink text-cream flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_#F9F7F4_1px,_transparent_1px)] bg-[length:40px_40px]"
      />

      <div className="relative z-10 text-center max-w-lg">
        {/* 404 number */}
        <p className="font-display text-[clamp(6rem,20vw,14rem)] font-light leading-none text-cream/10 select-none mb-0">
          404
        </p>

        {/* Gold divider */}
        <div className="h-px w-16 bg-gold mx-auto -mt-4 mb-10" aria-hidden="true" />

        <h1 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-light italic text-cream mb-4">
          Stránka nenalezena
        </h1>

        <p className="font-sans text-sm text-cream/50 leading-relaxed mb-12">
          Hledaná stránka neexistuje nebo byla přesunuta.
          <br />
          Vraťte se zpátky a pokračujte dále.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 border border-cream/20 hover:border-gold hover:text-gold text-cream/70 text-xs font-sans uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Zpět na hlavní stránku
        </Link>
      </div>

      {/* Bottom signature */}
      <p className="absolute bottom-8 font-display italic text-cream/20 text-sm">
        Petra Holíková
      </p>
    </main>
  );
}
