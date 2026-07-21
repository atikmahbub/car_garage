import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://argarage.uk"),
  alternates: { canonical: "/" },
  title: "A & R Garage — Car Servicing & Repairs | Nottingham, UK",
  description:
    "A & R Garage is an independent car servicing and MOT garage in Nottingham. Short and full servicing, brakes, suspension, electrical, transmission and lighting — trusted by Nottingham drivers.",
  openGraph: {
    title: "A & R Garage — Engineered Care For Your Car",
    description:
      "Independent garage in Nottingham. Car servicing, MOT, brakes, suspension, electrical and transmission repairs.",
    url: "https://argarage.uk",
    siteName: "A & R Garage",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 3840,
        height: 2160,
        alt: "A & R Garage — independent car servicing and repair centre in Nottingham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A & R Garage — Engineered Care For Your Car",
    description:
      "Independent garage in Nottingham. Car servicing, MOT, brakes, suspension, electrical and transmission repairs.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${anton.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <JsonLd />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
