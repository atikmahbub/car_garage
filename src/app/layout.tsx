import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

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
  title: "A & R Garage — MOT, Servicing & Performance | London, UK",
  description:
    "A & R Garage is a DVSA-approved MOT and service centre. Precision diagnostics, servicing, tyres and performance work — trusted by drivers across London.",
  openGraph: {
    title: "A & R Garage — Engineered Care For Your Car",
    description:
      "DVSA-approved MOT centre. Servicing, diagnostics, tyres and performance work in London.",
    type: "website",
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
