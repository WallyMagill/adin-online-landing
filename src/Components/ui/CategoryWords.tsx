/**
 * Category Words Component
 * Interactive word selection for hero sections
 * Handles both mobile (3 words) and desktop (all words) layouts
 */

import { TYPOGRAPHY } from "@/lib/constants";
import { CategoryWordsProps } from "@/types/components";
import { useEffect } from "react";

export const CategoryWords = ({
  words,
  selectedWord,
  onWordClick,
  isMobile = false,
}: CategoryWordsProps) => {
  // For mobile, show all words vertically stacked
  const displayWords = isMobile ? words : words;

  // Auto-cycle through words on both mobile and desktop
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = words.findIndex((w) => w.text === selectedWord);
      const nextIndex = (currentIndex + 1) % words.length;
      onWordClick(words[nextIndex].text);
    }, 3000); // Change word every 3 seconds (slower to reduce jumping)

    return () => clearInterval(interval);
  }, [selectedWord, words, onWordClick]);

  return (
    <div className="w-screen overflow-hidden -mt-2 md:-mt-3 mb-4 md:mb-6">
      <div
        className={`flex ${
          isMobile
            ? "md:hidden flex-col items-center gap-2 px-8"
            : "hidden md:flex justify-center gap-4 md:gap-8"
        }`}
      >
        {displayWords.map((word) => (
          <button
            key={word.text}
            className="text-4xl lg:text-6xl font-bold transition-all duration-300 ease-in-out pb-2 whitespace-nowrap pointer-events-none"
            style={{
              color: word.color,
              opacity: selectedWord === word.text ? 1 : 0.3,
              fontFamily: TYPOGRAPHY.fontFamily.primary,
            }}
          >
            {word.text}
            {selectedWord === word.text && (
              <span className="text-black">.</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
