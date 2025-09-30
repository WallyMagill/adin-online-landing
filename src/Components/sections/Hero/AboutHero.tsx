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
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const [clickedWord, setClickedWord] = useState<string | null>(null);

  // Determine which word should be selected (clicked takes precedence over hover)
  const selectedWord = clickedWord || hoveredWord || "biotech";

  const handleWordClick = (word: string) => {
    setClickedWord(clickedWord === word ? null : word);
  };

  const handleWordHover = (word: string | null) => {
    if (!clickedWord) setHoveredWord(word);
  };

  return (
    <section
      className={`relative flex flex-col items-center justify-center px-6 py-12 md:py-20 ${className}`}
    >
      {/* Hero Heading */}
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-2xl leading-tight mb-4 md:mb-6"
        style={{
          color: COLORS.base.black,
          fontFamily: TYPOGRAPHY.fontFamily.primary,
        }}
      >
        {HERO_CONTENT.heading.line1}
        <br />
        {HERO_CONTENT.heading.line2}
      </h1>

      {/* Category Words - Mobile (3 words) */}
      <CategoryWords
        words={HERO_CATEGORIES}
        selectedWord={selectedWord}
        onWordClick={handleWordClick}
        isMobile={true}
      />

      {/* Category Words - Desktop (all words) */}
      <CategoryWords
        words={HERO_CATEGORIES}
        selectedWord={selectedWord}
        onWordClick={handleWordClick}
        onWordHover={handleWordHover}
        isMobile={false}
      />

      {/* Description */}
      <p
        className="text-lg md:text-xl text-center max-w-xl mt-2 md:mt-4 mb-4"
        style={{
          color: COLORS.neutral.dark.darkGray1,
          fontFamily: TYPOGRAPHY.fontFamily.primary,
        }}
      >
        {HERO_CONTENT.description}
      </p>

      {/* Video Button */}
      <VideoButton onClick={onVideoClick} className="mt-8 md:mt-10" />
    </section>
  );
};

export default AboutHero;
