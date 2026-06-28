import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://holikovapetra.cz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Petra Holíková — Fotografka | Zlín",
    template: "%s | Petra Holíková Fotografie",
  },
  description:
    "Petra Holíková — fotografka zachycující produktové fotografie, portréty, výjimečné okamžiky a promoakce ve Zlíně a okolí. Každá fotka je příběh.",
  keywords: [
    "fotografka Zlín",
    "produktové fotografie",
    "portréty",
    "rodinné fotografie",
    "svatební fotografie",
    "Petra Holíková",
    "fotograf Zlín",
    "fotografické studio",
  ],
  authors: [{ name: "Petra Holíková", url: siteUrl }],
  creator: "Petra Holíková",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: siteUrl,
    siteName: "Petra Holíková Fotografie",
    title: "Petra Holíková — Fotografka | Zlín",
    description:
      "Zachycuji ty nejkrásnější okamžiky ve Vašem životě. Produktové fotografie, portréty, rodinné a eventové focení ve Zlíně.",
    images: [
      {
        url: "/images/okamziky/1.jpg",
        width: 1200,
        height: 630,
        alt: "Petra Holíková — Fotografka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petra Holíková — Fotografka | Zlín",
    description:
      "Zachycuji ty nejkrásnější okamžiky ve Vašem životě. Produktové fotografie, portréty, rodinné a eventové focení ve Zlíně.",
    images: ["/images/okamziky/1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F7F4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body className="bg-cream text-ink antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
