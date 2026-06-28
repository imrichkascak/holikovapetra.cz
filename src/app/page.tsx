import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { WorkSection } from "@/components/WorkSection";
import { HorizontalScroll } from "@/components/HorizontalScroll";
import { MasonryGallery } from "@/components/MasonryGallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

/* ─── Image data ─────────────────────────────────────────────────── */

const produktyPhotos = [
  { src: "/images/produkty/TFKF9401.jpg", alt: "Produktová fotografie — detail výrobku" },
  { src: "/images/produkty/TFKF9420.jpg", alt: "Produktová fotografie — studio" },
  { src: "/images/produkty/TFKF9435.jpg", alt: "Produktová fotografie — kompozice" },
  { src: "/images/produkty/TFKF9454.jpg", alt: "Produktová fotografie — lifestyle" },
];

const provasPhotos = [
  { src: "/images/provas/522A4562_1.jpg", alt: "Focení provázkové akce — taneční pár" },
  { src: "/images/provas/522A5026.jpg", alt: "Focení provázkové akce — atmosféra večera" },
  { src: "/images/provas/522A5105.jpg", alt: "Focení provázkové akce — detaily" },
];

const okamzikyPhotos = [
  { src: "/images/okamziky/1.jpg", alt: "Zachycený okamžik — příroda" },
  { src: "/images/okamziky/7.jpg", alt: "Zachycený okamžik — portrét" },
  { src: "/images/okamziky/DSC_0184.jpg", alt: "Zachycený okamžik — detail" },
];

const horizontalImages = [
  { src: "/images/okamziky/1.jpg", alt: "Okamžiky", category: "Okamžiky" },
  { src: "/images/provas/522A4562_1.jpg", alt: "Provas", category: "Provas" },
  { src: "/images/produkty/TFKF9401.jpg", alt: "Produkty", category: "Produkty" },
  { src: "/images/okamziky/7.jpg", alt: "Okamžiky", category: "Okamžiky" },
  { src: "/images/provas/522A5026.jpg", alt: "Provas", category: "Provas" },
  { src: "/images/produkty/TFKF9435.jpg", alt: "Produkty", category: "Produkty" },
  { src: "/images/okamziky/DSC_0184.jpg", alt: "Okamžiky", category: "Okamžiky" },
  { src: "/images/provas/522A5105.jpg", alt: "Provas", category: "Provas" },
];

const galleryImages = [
  { src: "/images/produkty/TFKF9401.jpg", alt: "Produktová fotografie" },
  { src: "/images/provas/522A4562_1.jpg", alt: "Ples — taneční pár", span: "tall" as const },
  { src: "/images/okamziky/1.jpg", alt: "Zachycený okamžik" },
  { src: "/images/produkty/TFKF9420.jpg", alt: "Produktové focení" },
  { src: "/images/okamziky/7.jpg", alt: "Okamžik" },
  { src: "/images/provas/522A5026.jpg", alt: "Ples — atmosféra", span: "tall" as const },
  { src: "/images/produkty/TFKF9435.jpg", alt: "Produktová kompozice" },
  { src: "/images/okamziky/DSC_0184.jpg", alt: "Detail" },
  { src: "/images/produkty/TFKF9454.jpg", alt: "Lifestyle fotografie" },
  { src: "/images/provas/522A5105.jpg", alt: "Ples — detaily" },
];

export default function Home() {
  return (
    <main>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-cream focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-medium"
      >
        Přejít na obsah
      </a>

      <Navigation />

      <div id="main-content">
        <Hero />
        <Statement />

        {/* Work sections */}
        <div id="prace">
          <WorkSection
            id="produkty"
            label="01 — Produktové foto"
            title="Vše pro Vás"
            description="Profesionální produktové fotografie pro e-shopy, katalogy a marketingové materiály. Každý produkt si zaslouží tu nejlepší prezentaci."
            photos={produktyPhotos}
          />

          <WorkSection
            id="provas"
            label="02 — Provas & Plesy"
            title="Nezapomenutelné dny"
            description="Plesy, promy, a slavnostní večery plné emocí. Zachycuji atmosféru, pohyb a radost — okamžiky, na které budete vzpomínat celý život."
            photos={provasPhotos}
            accent
          />

          <WorkSection
            id="okamziky"
            label="03 — Okamžiky"
            title="Nejkrásnější okamžiky"
            description="Rodinné fotografie, příroda, každodenní krásy. Ty nejcennější jsou ty, které bychom si jinak nepamatovali."
            photos={okamzikyPhotos}
          />
        </div>

        <HorizontalScroll images={horizontalImages} />

        <MasonryGallery id="galerie" images={galleryImages} />

        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
