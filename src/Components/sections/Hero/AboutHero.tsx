"use client";

import { CategoryWords } from "@/Components/ui/CategoryWords";
import { VideoButton } from "@/Components/ui/VideoButton";
import {
  COLORS,
  HERO_CATEGORIES,
  HERO_CONTENT,
  TYPOGRAPHY,
} from "@/lib/constants";
import { AboutHeroProps } from "@/types/components";
import { useState } from "react";

const AboutHero = ({ onVideoClick, className = "" }: AboutHeroProps) => {
  const [selectedWord, setSelectedWord] = useState<string>("biotech");

  const handleWordClick = (word: string) => {
    setSelectedWord(word);
  };

  return (
    <section
      className={`relative flex flex-col items-center justify-center px-6 py-4 md:py-20 ${className}`}
    >
      {/* Hero Heading */}
      <h1
        className="text-4xl lg:text-6xl font-bold text-center max-w-3xl leading-tight mb-2 md:mb-6"
        style={{
          color: COLORS.base.black,
          fontFamily: TYPOGRAPHY.fontFamily.primary,
        }}
      >
        {HERO_CONTENT.heading.line1}
        <br />
        {HERO_CONTENT.heading.line2}
      </h1>

      {/* Category Words - Mobile (all words vertically stacked with auto-cycle) */}
      <CategoryWords
        words={HERO_CATEGORIES}
        selectedWord={selectedWord}
        onWordClick={handleWordClick}
        isMobile={true}
      />

      {/* Category Words - Desktop (all words horizontally) */}
      <CategoryWords
        words={HERO_CATEGORIES}
        selectedWord={selectedWord}
        onWordClick={handleWordClick}
        isMobile={false}
      />

      {/* Description - Hidden on mobile, shown on desktop */}
      <p
        className="hidden md:block text-lg md:text-xl text-center max-w-xl mt-2 md:mt-4 mb-4"
        style={{
          color: COLORS.neutral.dark.darkGray1,
          fontFamily: TYPOGRAPHY.fontFamily.primary,
        }}
      >
        {HERO_CONTENT.description}
      </p>

      {/* Video Button */}
      <VideoButton onClick={onVideoClick} className="mt-6 md:mt-10" />
    </section>
  );
};

export default AboutHero;
