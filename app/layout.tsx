import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://ghaffarenterprises.com/"),
  title: "Ghaffar Enterprises",
  description:
    "Ghaffar Enterprises is a multi-faceted organization founded by Abdullah Ghaffar...",
  openGraph: {
    title: "Ghaffar Enterprises",
    description:
      "Ghaffar Enterprises is a multi-faceted organization founded by Abdullah Ghaffar...",
    images: [
      {
        url: "/logo-1200x630.png",  // Standard aspect ratio for Open Graph
        width: 1200,
        height: 630,
        alt: "Ghaffar Enterprises",
      },
      {
        url: "/logo-1600x440.png",  // Original image
        width: 1600,
        height: 440,
        alt: "Ghaffar Enterprises",
      },
      {
        url: "/logo-1200x600.png",  // Twitter recommended size
        width: 1200,
        height: 600,
        alt: "Ghaffar Enterprises",
      },
    ],
    type: "website",
    url: "https://ghaffarenterprises.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghaffar Enterprises",
    description:
      "Ghaffar Enterprises is a multi-faceted organization founded by Abdullah Ghaffar...",
    images: [
      {
        url: "/logo-1200x600.png",  // Twitter recommended size
        width: 1200,
        height: 600,
        alt: "Ghaffar Enterprises",
      },
    ],
  },
};
