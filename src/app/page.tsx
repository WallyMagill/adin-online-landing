"use client";

import BackgroundGradient from "@/Components/layout/BackgroundGradient";
import ChevronDown from "@/Components/layout/ChevronDown";
import Footer from "@/Components/layout/Footer";
import Header from "@/Components/layout/Header";
import AboutContent from "@/Components/sections/Content/AboutContent";
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
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section - Full viewport height */}
      <section className="relative h-screen flex flex-col w-full">
        <Header />

        <div className="flex-1 flex items-center justify-center">
          <AboutHero onVideoClick={() => console.log("Video clicked")} />
        </div>

        <BackgroundGradient position="bottom" />
        <ChevronDown onClick={scrollToContent} />
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="relative w-full">
        <BackgroundGradient position="top" />
        <AboutContent />
        <BackgroundGradient position="bottom" />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
