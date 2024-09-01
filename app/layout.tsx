import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghaffar Enterprises",
  description:
    "Aura - Nurture Naturally. Discover natural products for your well-being.",
  openGraph: {
    title: "Aura - Nurture Naturally",
    description: "Discover natural products for your well-being.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Aura Logo",
      },
    ],
    type: "website",
    url: "https://your-domain.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura - Nurture Naturally",
    description: "Discover natural products for your well-being.",
    images: ["https://your-domain.com/path-to-your-logo-image.jpg"],
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
