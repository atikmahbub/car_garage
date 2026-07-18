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
  metadataBase: new URL("https://argarage.uk"),
  alternates: { canonical: "/" },
  title: "A & R Garage — Car Servicing & Repairs | London, UK",
  description:
    "A & R Garage is an independent service and repair centre. Short and full servicing, brakes, suspension, electrical, transmission and lighting — trusted by drivers across London.",
  openGraph: {
    title: "A & R Garage — Engineered Care For Your Car",
    description:
      "Independent garage in London. Short and full servicing, brakes, suspension, electrical and transmission repairs.",
    url: "https://argarage.uk",
    siteName: "A & R Garage",
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
