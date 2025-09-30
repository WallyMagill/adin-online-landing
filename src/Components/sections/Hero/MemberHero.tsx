"use client";

import { COLORS, TYPOGRAPHY } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const MemberHero: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex items-start justify-center px-6 pt-12 pb-20 md:pt-56 md:pb-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile Layout - Stacked vertically */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Mobile Content Area */}
          <div className="text-left">
            {/* Main Heading */}
            <h1
              className="mb-4 text-4xl"
              style={{
                fontWeight: TYPOGRAPHY.fontWeights.bold,
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
                lineHeight: TYPOGRAPHY.lineHeight.tight,
              }}
            >
              Submit Deals,
              <br />
              Earn Carry.
            </h1>

            {/* Description */}
            <p
              className="mb-8 text-lg"
              style={{
                fontWeight: TYPOGRAPHY.fontWeights.normal,
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
                lineHeight: TYPOGRAPHY.lineHeight.normal,
              }}
            >
              Members earn a 10% carry on deals they submit that ADIN approves
              and successfully closes.
            </p>

            {/* Button Container - Horizontal on mobile */}
            <div className="flex flex-row gap-4 mb-8">
              {/* CTA Button */}
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 flex-1"
                style={{
                  backgroundColor: COLORS.base.black,
                  border: `1px solid ${COLORS.accent.green}`,
                }}
                aria-label="Apply now to become a member with ADIN"
                type="button"
              >
                <span
                  className="font-medium"
                  style={{
                    color: COLORS.base.pureWhite,
                    fontSize: TYPOGRAPHY.fontSize.base,
                    fontFamily: TYPOGRAPHY.fontFamily.primary,
                    fontWeight: TYPOGRAPHY.fontWeights.medium,
                  }}
                >
                  Apply Now
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: COLORS.accent.green }}
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Members Button */}
              <button
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border transition-transform duration-200 hover:scale-105 active:scale-95 flex-1"
                style={{
                  borderColor: COLORS.accent.green,
                  backgroundColor: "transparent",
                }}
                type="button"
                aria-label="Members category"
              >
                <span
                  className="font-medium"
                  style={{
                    color: COLORS.neutral.dark.darkGray1,
                    fontSize: TYPOGRAPHY.fontSize.base,
                    fontFamily: TYPOGRAPHY.fontFamily.primary,
                    fontWeight: TYPOGRAPHY.fontWeights.medium,
                  }}
                >
                  Members
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Video Thumbnail */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="relative w-64 h-48 rounded-3xl overflow-hidden">
                {/* Background Image */}
                <Image
                  src="/assets/images/VideoScreenshot.png"
                  alt="Meet ADIN video preview"
                  fill
                  className="object-cover scale-110"
                />

                {/* Top Left Text */}
                <div className="absolute top-4 left-4">
                  <h3
                    className="text-white font-medium"
                    style={{
                      fontSize: TYPOGRAPHY.fontSize.lg,
                      fontFamily: TYPOGRAPHY.fontFamily.primary,
                      fontWeight: TYPOGRAPHY.fontWeights.medium,
                    }}
                  >
                    Meet ADIN
                  </h3>
                </div>

                {/* Top Right Label */}
                <div className="absolute top-4 right-4">
                  <span
                    className="text-white font-medium"
                    style={{
                      fontSize: TYPOGRAPHY.fontSize.xs,
                      fontFamily: TYPOGRAPHY.fontFamily.primary,
                      fontWeight: TYPOGRAPHY.fontWeights.medium,
                    }}
                  >
                    AI-natl
                  </span>
                </div>

                {/* Bottom Left Logo */}
                <div className="absolute bottom-4 left-4">
                  <Image
                    src="/assets/images/WordmarkWhite.svg"
                    alt="ADIN Wordmark"
                    width={80}
                    height={32}
                    className="w-auto h-6"
                  />
                </div>

                {/* Center Play Button */}
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"
                  style={{
                    backgroundColor: COLORS.base.pureWhite,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                  aria-label="Play video about ADIN"
                  type="button"
                >
                  <Image
                    src="/assets/icons/Ionicons Designer Pack/play-circle.svg"
                    alt="Play"
                    width={40}
                    height={40}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(78%) sepia(46%) saturate(556%) hue-rotate(338deg) brightness(102%) contrast(101%)",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Two-column grid */}
        <div className="hidden lg:grid grid-cols-[60%_40%] gap-12 items-center">
          {/* Left Side - Content Area */}
          <div className="text-left">
            {/* Category Badge */}
            <button
              className="inline-flex items-center px-6 py-3 rounded-full border transition-transform duration-200 hover:scale-105 active:scale-95"
              style={{
                borderColor: COLORS.accent.green,
                backgroundColor: "transparent",
              }}
              type="button"
              aria-label="Members category"
            >
              <span
                className="font-medium"
                style={{
                  color: COLORS.neutral.dark.darkGray1,
                  fontSize: TYPOGRAPHY.fontSize.base,
                  fontFamily: TYPOGRAPHY.fontFamily.primary,
                  fontWeight: TYPOGRAPHY.fontWeights.medium,
                }}
              >
                Members
              </span>
            </button>

            {/* Main Heading */}
            <h1
              className="mt-8 mb-4 text-6xl"
              style={{
                fontWeight: TYPOGRAPHY.fontWeights.bold,
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
                lineHeight: TYPOGRAPHY.lineHeight.tight,
              }}
            >
              Submit Deals,
              <br />
              Earn Carry.
            </h1>

            {/* Description */}
            <p
              className="max-w-[600px] mb-8 text-xl"
              style={{
                fontWeight: TYPOGRAPHY.fontWeights.normal,
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
                lineHeight: TYPOGRAPHY.lineHeight.normal,
              }}
            >
              Members earn a 10% carry on deals they submit that ADIN approves
              and successfully closes.
            </p>

            {/* CTA Button */}
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-transform duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: COLORS.base.black,
                border: `1px solid ${COLORS.accent.green}`,
              }}
              aria-label="Apply now to become a member with ADIN"
              type="button"
            >
              <span
                className="font-medium"
                style={{
                  color: COLORS.base.pureWhite,
                  fontSize: TYPOGRAPHY.fontSize.base,
                  fontFamily: TYPOGRAPHY.fontFamily.primary,
                  fontWeight: TYPOGRAPHY.fontWeights.medium,
                }}
              >
                Apply Now
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                style={{ color: COLORS.accent.green }}
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Right Side - Video Thumbnail */}
          <div className="relative w-full rounded-3xl overflow-hidden aspect-video -ml-12">
            {/* Background Image */}
            <Image
              src="/assets/images/VideoScreenshot.png"
              alt="Meet ADIN video preview"
              fill
              className="object-cover scale-110"
            />

            {/* Top Left Text */}
            <div className="absolute top-6 left-6">
              <h3
                className="text-white font-medium"
                style={{
                  fontSize: TYPOGRAPHY.fontSize.xl,
                  fontFamily: TYPOGRAPHY.fontFamily.primary,
                  fontWeight: TYPOGRAPHY.fontWeights.medium,
                }}
              >
                Meet ADIN
              </h3>
            </div>

            {/* Top Right Label */}
            <div className="absolute top-6 right-6">
              <span
                className="text-white font-medium"
                style={{
                  fontSize: TYPOGRAPHY.fontSize.sm,
                  fontFamily: TYPOGRAPHY.fontFamily.primary,
                  fontWeight: TYPOGRAPHY.fontWeights.medium,
                }}
              >
                AI-natl
              </span>
            </div>

            {/* Bottom Left Logo */}
            <div className="absolute bottom-6 left-6">
              <Image
                src="/assets/images/WordmarkWhite.svg"
                alt="ADIN Wordmark"
                width={120}
                height={40}
                className="w-auto h-10"
              />
            </div>

            {/* Center Play Button */}
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"
              style={{
                backgroundColor: COLORS.base.pureWhite,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
              aria-label="Play video about ADIN"
              type="button"
            >
              <Image
                src="/assets/icons/Ionicons Designer Pack/play-circle.svg"
                alt="Play"
                width={80}
                height={80}
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(78%) sepia(46%) saturate(556%) hue-rotate(338deg) brightness(102%) contrast(101%)",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberHero;
