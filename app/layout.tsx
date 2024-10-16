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
        url: "/logo.png",  // Standard aspect ratio for Open Graph
        width: 800,
        height: 330,
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
        url: "/logo.png",  // Twitter recommended size
        width: 800,
        height: 300,
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
