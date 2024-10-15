import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghaffarenterprises.com/"),
  title: "Ghaffar Enterprises",
  description:
    "Ghaffar Enterprises is a multi-faceted organization founded by Abdullah Ghaffar, encompassing a diverse portfolio of companies focused on innovation, integrity, and impact. Our companies span lead generation, real estate, media, coaching, and more, all working together to empower businesses and individuals to achieve growth and success. At Ghaffar Enterprises, we are committed to delivering exceptional value and building a brighter future.",
  openGraph: {
    title: "Ghaffar Enterprises",
    description:
      "Ghaffar Enterprises is a multi-faceted organization founded by Abdullah Ghaffar, encompassing a diverse portfolio of companies focused on innovation, integrity, and impact. Our companies span lead generation, real estate, media, coaching, and more, all working together to empower businesses and individuals to achieve growth and success. At Ghaffar Enterprises, we are committed to delivering exceptional value and building a brighter future.",
    images: [
      {
        url: "/logo.png",
        width: 2000,
        height: 440,
        alt: "Ghaffar Enterprises",
      },
    ],
    type: "website",
    url: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghaffar Enterprises",
    description:
      "Ghaffar Enterprises is a multi-faceted organization founded by Abdullah Ghaffar, encompassing a diverse portfolio of companies focused on innovation, integrity, and impact. Our companies span lead generation, real estate, media, coaching, and more, all working together to empower businesses and individuals to achieve growth and success. At Ghaffar Enterprises, we are committed to delivering exceptional value and building a brighter future.",
    images: [
      {
        url: "/logo.png",
        width: 2000,
        height: 440,
        alt: "Ghaffar Enterprises",
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
{
  /* <meta property="og:image" content="Link preview image URL"></meta> */
}
