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

const provasPhotos = [
  { src: "/images/provas/522A4562_1.jpg", alt: "Pro vás — taneční pár" },
  { src: "/images/provas/522A5026.jpg", alt: "Pro vás — atmosféra večera" },
  { src: "/images/provas/522A5105.jpg", alt: "Pro vás — detaily" },
];

const okamzikyPhotos = [
  { src: "/images/okamziky/1.jpg", alt: "Zachycený okamžik — příroda" },
  { src: "/images/okamziky/7.jpg", alt: "Zachycený okamžik — portrét" },
  { src: "/images/okamziky/DSC_0184.jpg", alt: "Zachycený okamžik — detail" },
];

const horizontalImages = [
  { src: "/images/okamziky/1.jpg", alt: "Okamžiky", category: "Okamžiky" },
  { src: "/images/provas/522A4562_1.jpg", alt: "Pro vás", category: "Pro vás" },
  { src: "/images/gallery/TFKF8515.jpg", alt: "Galerie", category: "Galerie" },
  { src: "/images/okamziky/7.jpg", alt: "Okamžiky", category: "Okamžiky" },
  { src: "/images/provas/522A5026.jpg", alt: "Pro vás", category: "Pro vás" },
  { src: "/images/gallery/IMG_3602_2.jpg", alt: "Galerie", category: "Galerie" },
  { src: "/images/okamziky/DSC_0184.jpg", alt: "Okamžiky", category: "Okamžiky" },
  { src: "/images/gallery/80236784_2769511283145404_1259329615717990400_n-4.jpg", alt: "Galerie", category: "Galerie" },
  { src: "/images/provas/522A5105.jpg", alt: "Pro vás", category: "Pro vás" },
  { src: "/images/gallery/TFKF8883_1.jpg", alt: "Galerie", category: "Galerie" },
];

const galleryImages = [
  { src: "/images/gallery/29.jpg", alt: "Fotografie" },
  { src: "/images/provas/522A4562_1.jpg", alt: "Pro vás — taneční pár", span: "tall" as const },
  { src: "/images/gallery/DSC_0022_1.jpg", alt: "Portrét" },
  { src: "/images/gallery/TFKF8515.jpg", alt: "Fotografie" },
  { src: "/images/okamziky/1.jpg", alt: "Zachycený okamžik" },
  { src: "/images/gallery/80236784_2769511283145404_1259329615717990400_n-4.jpg", alt: "Fotografie", span: "tall" as const },
  { src: "/images/gallery/DSC_0148.jpg", alt: "Portrét" },
  { src: "/images/provas/522A5026.jpg", alt: "Pro vás — atmosféra" },
  { src: "/images/gallery/TFKF8861.jpg", alt: "Fotografie" },
  { src: "/images/gallery/IMG_3602_2.jpg", alt: "Fotografie", span: "tall" as const },
  { src: "/images/okamziky/7.jpg", alt: "Okamžik" },
  { src: "/images/gallery/45.jpg", alt: "Fotografie" },
  { src: "/images/gallery/DSC_0184.jpg", alt: "Detail" },
  { src: "/images/provas/522A5105.jpg", alt: "Pro vás — detaily" },
  { src: "/images/gallery/TFKF8547-0.jpg", alt: "Fotografie" },
  { src: "/images/gallery/IMG_3495.jpg", alt: "Fotografie" },
  { src: "/images/gallery/80315343_435940383954365_8564820406391799808_n-2.jpg", alt: "Fotografie" },
  { src: "/images/gallery/TFKF8883_1.jpg", alt: "Fotografie" },
  { src: "/images/gallery/DSC_0058_1.jpg", alt: "Fotografie" },
  { src: "/images/gallery/IMG_0887.jpg", alt: "Fotografie" },
  { src: "/images/gallery/TFKF9024.jpg", alt: "Fotografie" },
  { src: "/images/gallery/120134271_3409187615812613_3923097025196652216_o.jpg", alt: "Fotografie" },
  { src: "/images/gallery/IMG_0915.jpg", alt: "Fotografie" },
  { src: "/images/gallery/120156686_3409187612479280_3025171193573527671_o.jpg", alt: "Fotografie" },
  { src: "/images/gallery/IMG_3508.jpg", alt: "Fotografie" },
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
            id="okamziky"
            label="01 — Okamžiky"
            title="Nejkrásnější okamžiky"
            description="Rodinné fotografie, příroda, každodenní krásy. Ty nejcennější jsou ty, které bychom si jinak nepamatovali."
            photos={okamzikyPhotos}
          />

          <WorkSection
            id="provas"
            label="02 — Pro vás"
            title="Nezapomenutelné dny"
            description="Plesy, promy, a slavnostní večery plné emocí. Zachycuji atmosféru, pohyb a radost — okamžiky, na které budete vzpomínat celý život."
            photos={provasPhotos}
            accent
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
