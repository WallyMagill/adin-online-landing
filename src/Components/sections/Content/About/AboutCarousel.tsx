"use client";

import { COLORS, TYPOGRAPHY } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

interface SlideData {
  text: string;
  bold: string;
  rest: string;
}

export default function AboutCarousel() {
  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Refs for interval management
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  // Slide data
  const slides: SlideData[] = [
    {
      text: "ADIN is a global network of ",
      bold: "12,302 humans",
      rest: " sharing insights and knowledge as Investors, Members, & Founders.",
    },
    {
      text: "",
      bold: "Investors (Human LPs)",
      rest: " vote on proposed deals, guiding decision-making through collective insights, and over time enabling the fine tuning of models.",
    },
    {
      text: "Our team writes checks for ",
      bold: "$500k to $2 million",
      rest: ", partnering with visionary builders in connectivity, compute, crypto, and creative economies.",
    },
  ];

  const SLIDE_DURATION = 5000; // 5 seconds
  const PROGRESS_UPDATE_INTERVAL = 16; // ~60fps for smooth animation

  // Auto-play logic
  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      return;
    }

    // Start auto-play interval
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
      startTimeRef.current = Date.now();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [isPlaying, slides.length]);

  // Progress animation logic
  useEffect(() => {
    if (!isPlaying) return;

    startTimeRef.current = Date.now();

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const progressPercent = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(progressPercent);
    }, PROGRESS_UPDATE_INTERVAL);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [currentSlide, isPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case " ":
        event.preventDefault();
        togglePlayPause();
        break;
      case "ArrowLeft":
        event.preventDefault();
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setProgress(0);
        startTimeRef.current = Date.now();
        break;
      case "ArrowRight":
        event.preventDefault();
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
        startTimeRef.current = Date.now();
        break;
    }
  };

  return (
    <div
      className="w-full px-6 py-12 md:px-12 md:py-16"
      role="region"
      aria-label="About carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-4xl mx-auto">
        {/* Text Content with Fade Transition */}
        <div className="relative min-h-[120px] md:min-h-[140px]">
          <div className="max-w-3xl mx-auto">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                <div
                  className="text-center"
                  style={{
                    fontSize: TYPOGRAPHY.fontSize.xl,
                    lineHeight: TYPOGRAPHY.lineHeight.normal,
                    fontFamily: TYPOGRAPHY.fontFamily.primary,
                  }}
                >
                  <span className="text-neutral-400">
                    {slide.text}
                    <strong className="font-bold text-neutral-900">
                      {slide.bold}
                    </strong>
                    {slide.rest}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls Container */}
        <div className="flex items-center justify-center gap-6">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className={`
              rounded-full
              flex items-center justify-center
              transition-all duration-200
              hover:scale-105
              focus:outline-none
            `}
            style={{
              backgroundColor: COLORS.neutral.light.light1,
              width: "2.5rem",
              height: "2.5rem",
            }}
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? (
              // Pause icon using self-hosted SVG
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                viewBox="0 0 512 512"
                fill="currentColor"
                style={{ color: COLORS.accent.purple }}
              >
                <path d="M208,432H160a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V416A16,16,0,0,1,208,432Z" />
                <path d="M352,432H304a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V416A16,16,0,0,1,352,432Z" />
              </svg>
            ) : (
              // Play icon using self-hosted SVG
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                viewBox="0 0 512 512"
                fill="currentColor"
                style={{ color: COLORS.accent.purple }}
              >
                <path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z" />
              </svg>
            )}
          </button>

          {/* Progress Tracker */}
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-full"
            style={{
              backgroundColor: COLORS.neutral.light.light1,
            }}
          >
            {slides.map((_, index) => (
              <div
                key={index}
                className={`
                  rounded-full
                  transition-all duration-300
                  relative overflow-hidden
                  ${
                    index === currentSlide
                      ? "w-8 h-2 md:w-10 md:h-2.5"
                      : "w-2 h-2 md:w-2.5 md:h-2.5"
                  }
                `}
                style={{
                  backgroundColor: COLORS.neutral.light.light2,
                }}
              >
                {/* Active slide progress bar */}
                {index === currentSlide ? (
                  <div
                    className="h-full rounded-full transition-all duration-75 ease-linear absolute top-0 left-0"
                    style={{
                      backgroundColor: COLORS.accent.purple,
                      width: `${progress}%`,
                      minWidth: progress > 0 ? "4px" : "0px",
                    }}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Typography Override */}
        <style jsx>{`
          @media (min-width: 768px) {
            .text-center {
              font-size: ${TYPOGRAPHY.fontSize["2xl"]} !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
