"use client";

import { COLORS, TYPOGRAPHY } from "@/lib/constants";
import Image from "next/image";
import React from "react";

interface VoteItem {
  name: string;
  icon: string;
  vote: "for" | "against";
}

const InvestorHero: React.FC = () => {
  const voteData: VoteItem[] = [
    { name: "Scribe", icon: "/assets/images/Capa_1.svg", vote: "for" },
    {
      name: "Lane AI",
      icon: "/assets/images/chevron-collapse.svg",
      vote: "for",
    },
    {
      name: "Sona",
      icon: "text", // Will render as text instead of image
      vote: "against",
    },
  ];

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
              AI Will be the
              <br />
              Best Investor.
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
              ADIN and its agents automate venture, from diligence to making
              investment decisions, with deals sourced by investors and the ADIN
              member network.
            </p>

            {/* Button Container - Horizontal on mobile */}
            <div className="flex flex-row gap-4 mb-8">
              {/* CTA Button */}
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 flex-1"
                style={{
                  backgroundColor: COLORS.base.black,
                  border: `1px solid ${COLORS.accent.yellow}`,
                }}
                aria-label="Apply now to become an investor with ADIN"
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
                  style={{ color: COLORS.accent.yellow }}
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

              {/* Investors Button */}
              <button
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border transition-transform duration-200 hover:scale-105 active:scale-95 flex-1"
                style={{
                  borderColor: COLORS.accent.yellow,
                  backgroundColor: "transparent",
                }}
                type="button"
                aria-label="Investors category"
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
                  Investors
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Mobile Card 1 - Featured Startup (Lane AI) */}
              <div
                className="relative w-64 h-48 rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: COLORS.neutral.dark.lightGray1,
                }}
              >
                {/* Background Image */}
                <Image
                  src="/assets/images/eilis-garvey-dl_S0Kyq1Z0-unslash.jpg"
                  alt="Lane AI background"
                  fill
                  className="object-cover mix-blend-luminosity"
                />

                {/* Dark overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)",
                  }}
                />

                {/* Top Left Badge */}
                <div
                  className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-2 rounded-full"
                  style={{
                    backgroundColor: COLORS.base.smiley,
                  }}
                >
                  <Image
                    src="/assets/images/Logo.svg"
                    alt="Logo"
                    width={16}
                    height={16}
                  />
                  <span
                    className="text-black font-bold"
                    style={{
                      fontSize: "16px",
                      fontFamily: "var(--font-barrio)",
                    }}
                  >
                    100%
                  </span>
                </div>

                {/* Center Icon */}
                <div
                  className="absolute top-[47px] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(20, 43, 28, 1)",
                  }}
                >
                  <Image
                    src="/assets/images/chevron-collapse.svg"
                    alt="Lane AI icon"
                    width={40}
                    height={40}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                    }}
                  />
                </div>

                {/* Bottom Info Bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 flex flex-col gap-0"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <h3
                    className="text-white font-bold"
                    style={{
                      fontSize: TYPOGRAPHY.fontSize.xl,
                      fontFamily: TYPOGRAPHY.fontFamily.primary,
                      fontWeight: TYPOGRAPHY.fontWeights.bold,
                    }}
                  >
                    Lane AI
                  </h3>
                  <p
                    className="text-white"
                    style={{
                      fontSize: TYPOGRAPHY.fontSize.sm,
                      fontFamily: TYPOGRAPHY.fontFamily.primary,
                      fontWeight: TYPOGRAPHY.fontWeights.normal,
                    }}
                  >
                    Logistics
                  </p>
                </div>
              </div>

              {/* Mobile Card 2 - Voting Interface */}
              <div
                className="absolute top-12 left-16 w-64 p-3 rounded-[32px] flex flex-col gap-2"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
                  backdropFilter: "blur(8px)",
                  boxShadow:
                    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                }}
              >
                {voteData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-2xl bg-white border cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.01]"
                    style={{
                      borderColor: COLORS.neutral.dark.lightGray1,
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Vote item for ${item.name} - ${item.vote}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        // Handle vote interaction if needed
                      }
                    }}
                  >
                    {/* Left side - Company info */}
                    <div className="flex items-center gap-2">
                      {/* Icon circle */}
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor:
                            item.vote === "for"
                              ? item.name === "Scribe"
                                ? "rgba(20, 43, 28, 1)"
                                : "rgba(20, 43, 28, 1)"
                              : COLORS.base.black,
                        }}
                      >
                        {item.icon === "text" ? (
                          <span
                            className="text-white text-xs font-bold"
                            style={{
                              fontSize: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            SONA
                          </span>
                        ) : (
                          <Image
                            src={item.icon}
                            alt={`${item.name} icon`}
                            width={16}
                            height={16}
                            style={{
                              filter:
                                item.name === "Lane AI"
                                  ? "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)"
                                  : "none",
                            }}
                          />
                        )}
                      </div>

                      {/* Company name */}
                      <span
                        className="font-bold"
                        style={{
                          color: COLORS.base.black,
                          fontSize: TYPOGRAPHY.fontSize.xl,
                          fontFamily: TYPOGRAPHY.fontFamily.primary,
                          fontWeight: TYPOGRAPHY.fontWeights.bold,
                        }}
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* Right side - Vote status */}
                    <div className="flex items-center gap-2">
                      <span
                        className="font-medium"
                        style={{
                          color: COLORS.base.black,
                          fontSize: TYPOGRAPHY.fontSize.base,
                          fontFamily: TYPOGRAPHY.fontFamily.primary,
                          fontWeight: TYPOGRAPHY.fontWeights.medium,
                        }}
                      >
                        {item.vote === "for" ? "For" : "Against"}
                      </span>

                      {/* Vote icon */}
                      {item.vote === "for" ? (
                        <Image
                          src="/assets/icons/Ionicons Designer Pack/add-circle.svg"
                          alt="Vote for"
                          width={24}
                          height={24}
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                          }}
                        />
                      ) : (
                        <Image
                          src="/assets/icons/Ionicons Designer Pack/close-circle.svg"
                          alt="Vote against"
                          width={24}
                          height={24}
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(36%) sepia(89%) saturate(2095%) hue-rotate(342deg) brightness(95%) contrast(95%)",
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
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
                borderColor: COLORS.accent.yellow,
                backgroundColor: "transparent",
              }}
              type="button"
              aria-label="Investors category"
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
                Investors
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
              AI Will be the
              <br />
              Best Investor.
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
              ADIN and its agents automate venture, from diligence to making
              investment decisions, with deals sourced by investors and the ADIN
              member network.
            </p>

            {/* CTA Button */}
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-transform duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: COLORS.base.black,
                border: `1px solid ${COLORS.accent.yellow}`,
              }}
              aria-label="Apply now to become an investor with ADIN"
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
                style={{ color: COLORS.accent.yellow }}
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

          {/* Right Side - Overlapping Cards */}
          <div className="relative flex justify-start">
            <div className="relative -mt-8 -ml-8">
              {/* Card 1 - Featured Startup (Lane AI) */}
              <div
                className="relative w-80 h-60 rounded-3xl overflow-hidden -mt-16 -ml-4"
                style={{
                  backgroundColor: COLORS.neutral.dark.lightGray1,
                }}
              >
                {/* Background Image */}
                <Image
                  src="/assets/images/eilis-garvey-dl_S0Kyq1Z0-unslash.jpg"
                  alt="Lane AI background"
                  fill
                  className="object-cover mix-blend-luminosity"
                />

                {/* Dark overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)",
                  }}
                />

                {/* Top Left Badge */}
                <div
                  className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-2 rounded-full"
                  style={{
                    backgroundColor: COLORS.base.smiley,
                  }}
                >
                  <Image
                    src="/assets/images/Logo.svg"
                    alt="Logo"
                    width={16}
                    height={16}
                  />
                  <span
                    className="text-black font-bold"
                    style={{
                      fontSize: "16px",
                      fontFamily: "var(--font-barrio)",
                    }}
                  >
                    100%
                  </span>
                </div>

                {/* Center Icon */}
                <div
                  className="absolute top-[47px] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(20, 43, 28, 1)",
                  }}
                >
                  <Image
                    src="/assets/images/chevron-collapse.svg"
                    alt="Lane AI icon"
                    width={40}
                    height={40}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                    }}
                  />
                </div>

                {/* Bottom Info Bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 flex flex-col gap-0"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <h3
                    className="text-white font-bold"
                    style={{
                      fontSize: TYPOGRAPHY.fontSize.xl,
                      fontFamily: TYPOGRAPHY.fontFamily.primary,
                      fontWeight: TYPOGRAPHY.fontWeights.bold,
                    }}
                  >
                    Lane AI
                  </h3>
                  <p
                    className="text-white"
                    style={{
                      fontSize: TYPOGRAPHY.fontSize.sm,
                      fontFamily: TYPOGRAPHY.fontFamily.primary,
                      fontWeight: TYPOGRAPHY.fontWeights.normal,
                    }}
                  >
                    Logistics
                  </p>
                </div>
              </div>

              {/* Card 2 - Voting Interface */}
              <div
                className="absolute top-20 left-32 w-80 p-6 rounded-[32px] flex flex-col gap-2"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
                  backdropFilter: "blur(8px)",
                  boxShadow:
                    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                }}
              >
                {voteData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white border cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.01]"
                    style={{
                      borderColor: COLORS.neutral.dark.lightGray1,
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Vote item for ${item.name} - ${item.vote}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        // Handle vote interaction if needed
                      }
                    }}
                  >
                    {/* Left side - Company info */}
                    <div className="flex items-center gap-2">
                      {/* Icon circle */}
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor:
                            item.vote === "for"
                              ? item.name === "Scribe"
                                ? "rgba(20, 43, 28, 1)"
                                : "rgba(20, 43, 28, 1)"
                              : COLORS.base.black,
                        }}
                      >
                        {item.icon === "text" ? (
                          <span
                            className="text-white text-xs font-bold"
                            style={{
                              fontSize: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            SONA
                          </span>
                        ) : (
                          <Image
                            src={item.icon}
                            alt={`${item.name} icon`}
                            width={16}
                            height={16}
                            style={{
                              filter:
                                item.name === "Lane AI"
                                  ? "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)"
                                  : "none",
                            }}
                          />
                        )}
                      </div>

                      {/* Company name */}
                      <span
                        className="font-bold"
                        style={{
                          color: COLORS.base.black,
                          fontSize: TYPOGRAPHY.fontSize.xl,
                          fontFamily: TYPOGRAPHY.fontFamily.primary,
                          fontWeight: TYPOGRAPHY.fontWeights.bold,
                        }}
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* Right side - Vote status */}
                    <div className="flex items-center gap-2">
                      <span
                        className="font-medium"
                        style={{
                          color: COLORS.base.black,
                          fontSize: TYPOGRAPHY.fontSize.base,
                          fontFamily: TYPOGRAPHY.fontFamily.primary,
                          fontWeight: TYPOGRAPHY.fontWeights.medium,
                        }}
                      >
                        {item.vote === "for" ? "For" : "Against"}
                      </span>

                      {/* Vote icon */}
                      {item.vote === "for" ? (
                        <Image
                          src="/assets/icons/Ionicons Designer Pack/add-circle.svg"
                          alt="Vote for"
                          width={24}
                          height={24}
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                          }}
                        />
                      ) : (
                        <Image
                          src="/assets/icons/Ionicons Designer Pack/close-circle.svg"
                          alt="Vote against"
                          width={24}
                          height={24}
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(36%) sepia(89%) saturate(2095%) hue-rotate(342deg) brightness(95%) contrast(95%)",
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorHero;
