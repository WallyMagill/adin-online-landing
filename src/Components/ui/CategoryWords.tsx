/**
 * Category Words Component
 * Interactive word selection for hero sections
 * Handles both mobile (3 words) and desktop (all words) layouts
 */

import { TYPOGRAPHY } from "@/lib/constants";
import { CategoryWordsProps } from "@/types/components";

export const CategoryWords = ({
  words,
  selectedWord,
  onWordClick,
  onWordHover,
  isMobile = false,
}: CategoryWordsProps) => {
  // For mobile, only show 3 specific words: blockchain, biotech, creative tools
  const mobileWords = words.filter((w) =>
    ["blockchain", "biotech", "creative tools"].includes(w.text)
  );

  const displayWords = isMobile ? mobileWords : words;

  return (
    <div className="w-screen overflow-hidden -mt-2 md:-mt-3 mb-4 md:mb-6">
      <div
        className={`flex ${
          isMobile
            ? "md:hidden justify-center gap-6 px-8"
            : "hidden md:flex justify-evenly gap-4 md:gap-8"
        }`}
      >
        {displayWords.map((word) => (
          <button
            key={word.text}
            className="text-3xl md:text-4xl lg:text-5xl font-bold cursor-pointer transition-all duration-300 ease-in-out pb-2 whitespace-nowrap"
            style={{
              color: word.color,
              opacity: selectedWord === word.text ? 1 : 0.3,
              fontFamily: TYPOGRAPHY.fontFamily.primary,
            }}
            onMouseEnter={() => !isMobile && onWordHover?.(word.text)}
            onMouseLeave={() => !isMobile && onWordHover?.(null)}
            onClick={() => onWordClick(word.text)}
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
