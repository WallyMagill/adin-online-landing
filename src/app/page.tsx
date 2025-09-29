"use client";

import BackgroundGradient from "@/Components/layout/BackgroundGradient";
import ChevronDown from "@/Components/layout/ChevronDown";
import Footer from "@/Components/layout/Footer";
import Header from "@/Components/layout/Header";
import AboutHero from "@/Components/sections/Hero/AboutHero";
import { useRef } from "react";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative">
      {/* Hero Section - Full viewport height */}
      <section className="relative h-screen flex flex-col">
        <Header />

        <div className="flex-1 flex items-center justify-center">
          <AboutHero onVideoClick={() => console.log("Video clicked")} />
        </div>

        <BackgroundGradient position="bottom" />
        <ChevronDown onClick={scrollToContent} />
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="relative min-h-screen">
        <BackgroundGradient position="top" />
        <div className="py-20 px-6">
          <h2 className="text-3xl font-bold mb-4">Content Section</h2>
          <p>This is the content that appears after scrolling.</p>
        </div>
        <BackgroundGradient position="bottom" />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
