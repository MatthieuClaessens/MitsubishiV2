import type { Metadata } from "next";
import { Inter, Zen_Dots } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/app/components/CustomCursor";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const zenDots = Zen_Dots({
  weight: "400",
  variable: "--font-zen-dots",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mitsubishi",
  description: "Application v2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${zenDots.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#050505] cursor-none">
        <CustomCursor />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}