"use client";

import { useState, useEffect } from "react";
import { Inter, Zen_Dots } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/app/components/CustomCursor";
import ConfigureButton from "@/app/components/ConfigureButton";
import ErrorBanner from "@/app/components/ErrorBanner";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showError, setShowError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showError) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        const removeTimer = setTimeout(() => setShowError(false), 300);
        return () => clearTimeout(removeTimer);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  const configclick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <html
      lang="fr"
      className={`${inter.variable} ${zenDots.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#050505] cursor-none">
        <CustomCursor />
        <ConfigureButton onClick={configclick} />
        <NavBar onConfigureClick={configclick} />
        {children}
        <Footer />
        <ErrorBanner show={showError} visible={isVisible} />
      </body>
    </html>
  );
}