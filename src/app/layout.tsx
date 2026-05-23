import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bitspace Interiors — Luxury Interior Design Studio Hyderabad",
  description: "Bitspace Interiors creates elegant residential and commercial interiors in Hyderabad with premium modern design solutions.",
  keywords: [
    "Interior Designer Hyderabad",
    "Luxury Interiors Hyderabad",
    "Modular Kitchen Design",
    "Villa Interiors",
    "Modern Home Interiors",
    "Jubilee Hills Interior Designer",
  ],
  openGraph: {
    title: "Bitspace Interiors — Luxury Interior Design Studio Hyderabad",
    description: "Transforming Spaces With Modern Elegance. Jubilee Hills, Hyderabad.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-luxury-white text-luxury-charcoal selection:bg-luxury-bronze/20 selection:text-luxury-charcoal relative overflow-x-hidden">
        {/* Soft Grain Texture Overlay */}
        <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <LenisProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
