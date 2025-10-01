"use client";

import BackgroundGradient from "@/Components/layout/BackgroundGradient";
import Footer from "@/Components/layout/Footer";
import Header from "@/Components/layout/Header";
import MemberContent from "@/Components/sections/Content/MemberContent";
import MemberHero from "@/Components/sections/Hero/MemberHero";
import ChevronDown from "@/Components/ui/ChevronDown";
import { useRef } from "react";

export default function Member() {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative">
        <Header />
        <MemberHero />
        <BackgroundGradient position="bottom" />
        <ChevronDown onClick={scrollToContent} />
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="relative">
        <BackgroundGradient position="top" />
        <MemberContent />
        <BackgroundGradient position="bottom" />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
