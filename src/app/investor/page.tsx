"use client";

import BackgroundGradient from "@/Components/layout/BackgroundGradient";
import ChevronDown from "@/Components/layout/ChevronDown";
import Footer from "@/Components/layout/Footer";
import Header from "@/Components/layout/Header";
import InvestorContent from "@/Components/sections/Content/InvestorContent";
import InvestorHero from "@/Components/sections/Hero/InvestorHero";
import { useRef } from "react";

export default function Investor() {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative">
        <Header />
        <InvestorHero />
        <BackgroundGradient position="bottom" />
        <ChevronDown onClick={scrollToContent} />
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="relative">
        <BackgroundGradient position="top" />
        <InvestorContent />
        <BackgroundGradient position="bottom" />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
