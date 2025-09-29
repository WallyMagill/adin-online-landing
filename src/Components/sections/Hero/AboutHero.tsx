"use client";

import { ASSETS, COLORS, TYPOGRAPHY } from "@/lib/constants";
import React, { useState } from "react";

interface AboutHeroProps {
  onVideoClick?: () => void;
  className?: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  onVideoClick,
  className = "",
}) => {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const [clickedWord, setClickedWord] = useState<string | null>(null);

  const categoryWords = [
    { text: "3d printing", color: COLORS.interaction.yellowHover },
    { text: "blockchain", color: COLORS.interaction.greenHover },
    { text: "biotech", color: COLORS.accent.purple, default: true },
    { text: "creative tools", color: COLORS.interaction.orangeHover },
    { text: "medical", color: COLORS.interaction.yellowHover },
  ];

  // Determine which word should be selected
  const selectedWord = clickedWord || hoveredWord || "biotech";

  return (
    <section
      className={`relative flex flex-col items-center justify-center px-6 py-12 md:py-20 ${className}`}
    >
      {/* Hero Heading Section */}
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-2xl leading-tight mb-4 md:mb-6"
        style={{
          color: COLORS.base.black,
          fontFamily: TYPOGRAPHY.fontFamily.primary,
        }}
      >
        Investing in early<br /> stage ideas building for
      </h1>

      {/* Rotating Category Words Section */}
      <div className="w-screen overflow-hidden -mt-2 md:-mt-3 mb-4 md:mb-6">
        {/* Mobile: 3 words with biotech centered */}
        <div className="flex md:hidden justify-center gap-6 overflow-hidden w-full px-8">
          {/* blockchain */}
          <button
            onClick={() => {
              if (clickedWord === "blockchain") {
                setClickedWord(null);
              } else {
                setClickedWord("blockchain");
              }
            }}
            className="text-3xl font-bold transition-all duration-300 ease-in-out cursor-pointer pb-2 whitespace-nowrap"
            style={{
              color: COLORS.interaction.greenHover,
              opacity: selectedWord === "blockchain" ? 1 : 0.3,
              fontFamily: TYPOGRAPHY.fontFamily.primary,
            }}
          >
            blockchain
            {selectedWord === "blockchain" && (
              <span className="text-black">.</span>
            )}
          </button>

          {/* biotech - DEFAULT */}
          <button
            onClick={() => {
              if (clickedWord === "biotech") {
                setClickedWord(null);
              } else {
                setClickedWord("biotech");
              }
            }}
            className="text-3xl font-bold transition-all duration-300 ease-in-out cursor-pointer pb-2 whitespace-nowrap"
            style={{
              color: COLORS.accent.purple,
              opacity: selectedWord === "biotech" ? 1 : 0.3,
              fontFamily: TYPOGRAPHY.fontFamily.primary,
            }}
          >
            biotech
            {selectedWord === "biotech" && (
              <span className="text-black">.</span>
            )}
          </button>

          {/* creative tools */}
          <button
            onClick={() => {
              if (clickedWord === "creative tools") {
                setClickedWord(null);
              } else {
                setClickedWord("creative tools");
              }
            }}
            className="text-3xl font-bold transition-all duration-300 ease-in-out cursor-pointer pb-2 whitespace-nowrap"
            style={{
              color: COLORS.interaction.orangeHover,
              opacity: selectedWord === "creative tools" ? 1 : 0.3,
              fontFamily: TYPOGRAPHY.fontFamily.primary,
            }}
          >
            creative tools
            {selectedWord === "creative tools" && (
              <span className="text-black">.</span>
            )}
          </button>
        </div>

        {/* Desktop: Show all words */}
        <div className="hidden md:flex justify-evenly gap-4 md:gap-8">
          {categoryWords.map((word, index) => (
            <button
              key={index}
              className="text-3xl md:text-4xl lg:text-5xl font-bold cursor-pointer transition-all duration-300 ease-in-out pb-2"
              style={{
                color: word.color,
                opacity: selectedWord === word.text ? 1 : 0.3,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
              }}
              onMouseEnter={() => !clickedWord && setHoveredWord(word.text)}
              onMouseLeave={() => !clickedWord && setHoveredWord(null)}
              onClick={() => {
                if (clickedWord === word.text) {
                  setClickedWord(null);
                } else {
                  setClickedWord(word.text);
                }
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

      {/* Description & Video Button Section */}
      <p
        className="text-lg md:text-xl text-center max-w-xl mt-2 md:mt-4 mb-4"
        style={{
          color: COLORS.neutral.dark.darkGray1,
          fontFamily: TYPOGRAPHY.fontFamily.primary,
        }}
      >
        ADIN backs teams building the future of the internet focusing on Seed
        Rounds to Series-A.
      </p>

      {/* Watch Video Button */}
      <button
        onClick={onVideoClick}
        className="inline-flex items-center gap-4 pl-2 pr-8 py-1.5 md:pl-2 md:pr-10 md:py-2 rounded-2xl hover:opacity-90 transition-opacity duration-300 cursor-pointer mt-8 md:mt-10"
        style={{ backgroundColor: COLORS.accent.cream }}
        aria-label="Watch introduction video"
      >
        {/* Left: Play Button with Logo */}
        <div
          className="relative w-16 h-9 md:w-20 md:h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: COLORS.base.smiley }}
        >
          {/* Background Logo - smaller and subtle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 opacity-80 z-0"
            style={{
              backgroundImage: `url(${ASSETS.svg.logo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          {/* Play Icon - overlaid on top */}
          <div className="relative z-10">
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Right: Text with gradient */}
        <span
          className="text-base md:text-lg font-medium"
          style={{
            background: "radial-gradient(circle, #000000 0%, #B3B3B3 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: TYPOGRAPHY.fontFamily.primary,
          }}
        >
          Watch the Video
        </span>
      </button>
    </section>
  );
};

export default AboutHero;
