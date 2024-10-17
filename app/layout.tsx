import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://ghaffar-media-aaqeb11s-projects.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Ghaffar Enterprises",
  description:
    "Ghaffar Enterprises is a multi-faceted organization founded by Abdullah Ghaffar...",
  openGraph: {
    title: "Ghaffar Enterprises",
    description:
      "Ghaffar Enterprises is a multi-faceted organization founded by Abdullah Ghaffar...",
    images: [
      {
        url: new URL("/logo_meta.png", baseUrl).toString(),
        width: 700,
        height: 700,
        alt: "Ghaffar Enterprises Square Logo",
      },
      {
        url: new URL("/logo_meta.png", baseUrl).toString(),
        width: 700,
        height: 700,
        alt: "Ghaffar Enterprises Rectangle Logo",
      },
    ],
    type: "website",
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghaffar Enterprises",
    description:
      "Ghaffar Enterprises is a multi-faceted organization founded by Abdullah Ghaffar...",
    images: [
      {
        url: new URL("/logo_meta.png", baseUrl).toString(),
        width: 700,
        height: 700,
        alt: "Ghaffar Enterprises Square Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
