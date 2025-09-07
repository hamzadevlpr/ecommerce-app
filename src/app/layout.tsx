import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Acouncement from "@/component/HomePage/Acouncement";
import Navbar from "@/component/HomePage/Navbar";
import NavLinks from "@/component/HomePage/NavLinks";
import Footer from "@/component/HomePage/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Al-Farooqui Dental Supply",
  description: "Your one-stop shop for quality dental supplies.",
  keywords: [
    "dental supplies",
    "dental equipment",
    "dental instruments",
    "oral care products",
    "dental materials",
    "dental hygiene",
    "dental tools",
    "dental accessories",
    "dental clinic supplies",
    "dental practice essentials",
  ],
  authors: [{ name: "Al-Farooqui Dental Supply", url: "https://alfarooquidental.com" }],
  creator: "Al-Farooqui Dental Supply",
  publisher: "Al-Farooqui Dental Supply",
  metadataBase: new URL("https://alfarooquidental.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        <Acouncement />
        <Navbar />
        <NavLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}
