"use client";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const InvestorSection1: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-none mb-4">
            Be more than an{" "}
            <span style={{ color: COLORS.accent.yellow }}>Investor</span>.
            <br />
            Be a power player.
          </h2>
          <p className="text-lg md:text-xl text-black mt-4 max-w-3xl">
            Accelerate your decision-making. Execute borderless investment
            opportunities.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 lg:grid-rows-[auto_auto_auto] items-start">
          {/* Card 1: Real-Time Voting (Top Left) */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 lg:row-span-2"
            style={{
              border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              Real-Time voting.
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              Make investment decisions faster with transparent,
              community-driven voting.
            </p>

            {/* Voting Card */}
            <div
              className="mt-10 bg-white rounded-3xl p-10"
              style={{
                border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
              }}
            >
              {/* Company Header */}
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(20, 43, 28, 1)",
                  }}
                >
                  <Image
                    src="/assets/images/chevron-collapse.svg"
                    alt="Lane AI"
                    width={16}
                    height={16}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                    }}
                  />
                </div>
                <h4 className="text-xl font-semibold">Lane AI</h4>
              </div>

              {/* Question */}
              <p className="text-sm mt-2 text-gray-600">
                What&apos;s your vote to invest in Lane AI?
              </p>

              {/* Vote Buttons */}
              <div className="flex flex-col gap-4 mt-6">
                {/* For Button (Selected) */}
                <button
                  className="flex items-center gap-2 p-4 rounded-2xl transition-all"
                  style={{
                    backgroundColor: COLORS.neutral.dark.lightGray0,
                    border: `2px solid ${COLORS.accent.green}`,
                  }}
                  aria-label="Vote for Lane AI"
                >
                  <Image
                    src="/assets/icons/Ionicons Designer Pack/add-circle.svg"
                    alt="For"
                    width={24}
                    height={24}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                    }}
                  />
                  <span className="text-base font-bold">For</span>
                </button>

                {/* Against Button */}
                <button
                  className="flex items-center gap-2 p-4 rounded-2xl transition-all"
                  style={{
                    backgroundColor: "transparent",
                    border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
                  }}
                  aria-label="Vote against Lane AI"
                >
                  <Image
                    src="/assets/icons/Ionicons Designer Pack/close-circle-outline.svg"
                    alt="Against"
                    width={24}
                    height={24}
                  />
                  <span className="text-base font-medium">Against</span>
                </button>

                {/* Abstain Button */}
                <button
                  className="flex items-center gap-2 p-4 rounded-2xl transition-all"
                  style={{
                    backgroundColor: "transparent",
                    border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
                  }}
                  aria-label="Abstain from voting"
                >
                  <Image
                    src="/assets/icons/Ionicons Designer Pack/remove-circle-outline.svg"
                    alt="Abstain"
                    width={24}
                    height={24}
                  />
                  <span className="text-base font-medium">Abstain</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Submit a Deal (Top Right) */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14"
            style={{
              border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              Submit a deal, earn 10% carry.
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              Refer promising companies with just a link or deck. ADIN handles
              the rest.
            </p>

            {/* Inner Card */}
            <div
              className="mt-10 rounded-3xl p-10"
              style={{
                backgroundColor: "rgba(225, 209, 250, 0.15)",
                border: "1px solid #E1D1FA",
              }}
            >
              {/* Search Bar */}
              <div
                className="flex items-center justify-between bg-white rounded-full px-4 py-1"
                style={{
                  border: `1px solid ${COLORS.accent.purple}`,
                  boxShadow: `0 0 20px ${COLORS.accent.purple}40`,
                }}
              >
                <div className="flex items-center px-3 py-2">
                  <span className="text-base font-bold">lane.ai</span>
                  <span
                    className="inline-block w-0.5 h-5 ml-1 animate-pulse"
                    style={{
                      backgroundColor: COLORS.accent.purple,
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/icons/Ionicons Designer Pack/close-outline.svg"
                    alt="Close"
                    width={24}
                    height={24}
                  />
                  <button
                    className="px-4 py-2 rounded-full text-white text-sm"
                    style={{
                      backgroundColor: COLORS.accent.purple,
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>

              {/* Platform Icons */}
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-4 text-center">
                  ADIN can analyze links from
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  {[
                    {
                      name: "DocSend",
                      icon: "/assets/images/DocSend.svg",
                    },
                    {
                      name: "Notion",
                      icon: "/assets/images/Notion.svg",
                    },
                    {
                      name: "Figma",
                      icon: "/assets/images/Figma.svg",
                    },
                    {
                      name: "Google Docs",
                      icon: "/assets/images/GoogleSlides.svg",
                    },
                  ].map((platform) => (
                    <div
                      key={platform.name}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: COLORS.neutral.dark.lightGray0,
                        }}
                      >
                        <Image
                          src={platform.icon}
                          alt={platform.name}
                          width={16}
                          height={16}
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        {platform.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Expansive Due Diligence (Bottom Left) */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 lg:row-start-3"
            style={{
              border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              Expansive due diligence.
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              ADIN&apos;s agents sweat the details. Technical, business, and
              beyond and in just 10 minutes.
            </p>

            {/* Progress Card */}
            <div
              className="mt-10 bg-white rounded-3xl p-10"
              style={{
                border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
              }}
            >
              {/* Progress Bar */}
              <div
                className="h-2 rounded-full overflow-hidden"
                style={{
                  backgroundColor: COLORS.neutral.dark.lightGray1,
                }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "50%",
                    backgroundColor: COLORS.accent.green,
                  }}
                />
              </div>

              {/* Phase Info */}
              <div className="mt-6">
                <p className="text-sm text-gray-600">Current Phase</p>
                <p className="text-base font-medium mt-1">
                  Product, Technical, and Business Analysis
                </p>
              </div>

              {/* Status Indicators */}
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: COLORS.neutral.light.light1,
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: COLORS.accent.purple,
                      }}
                    />
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      color: COLORS.accent.purple,
                    }}
                  >
                    Gathering project documentation...
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/icons/Ionicons Designer Pack/timer.svg"
                    alt="Timer"
                    width={16}
                    height={16}
                  />
                  <span className="text-sm text-gray-600">
                    This usually takes me 5-10 minutes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Deals Hit Your Inbox (Bottom Right) */}
          <div
            className="relative bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 overflow-hidden lg:row-start-2 lg:row-span-2 lg:h-full h-auto"
            style={{
              border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              Deals hit your inbox.
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              Stay in the loop with real-time deal alerts, term sheets, and
              wins.
            </p>

            {/* Desktop Image Container */}
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 overflow-hidden">
              <Image
                src="/assets/images/DesktopTemplate.png"
                alt="Desktop notifications"
                width={800}
                height={600}
                className="w-full"
              />
            </div>

            {/* Notification Cards */}
            <div className="lg:absolute lg:-right-12 lg:top-60 space-y-2.5 mt-8 lg:mt-0">
              {[
                {
                  title: "We're in for Atoms!",
                  body: "We closed a $400K investment in Atoms' series A.",
                },
                {
                  title: "Boom. Hello Portco.",
                  body: "Ember Mechanics has sent their term sheet.",
                },
                {
                  title: "And another one!",
                  body: "Hands have been shook with Primo.",
                },
              ].map((notification, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-2.5 rounded-[20px] backdrop-blur-[40px] w-full lg:w-[380px] h-auto lg:h-[70px]"
                  style={{
                    backgroundColor: "rgba(245, 245, 245, 0.95)",
                    boxShadow:
                      "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: COLORS.base.smiley,
                    }}
                  >
                    <Image
                      src="/assets/images/Logo.svg"
                      alt="ADIN"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm leading-tight">ADIN</div>
                    <div className="font-semibold text-sm leading-tight">
                      {notification.title}
                    </div>
                    <div className="text-xs text-gray-600 leading-tight">
                      {notification.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Deal Closes (Full Width Bottom) */}
          <div
            className="lg:col-span-2 lg:row-start-4 bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 flex flex-col lg:flex-row gap-6 lg:overflow-hidden lg:h-[320px] h-auto"
            style={{
              border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
            }}
          >
            {/* Left Side */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              <div>
                <span className="text-base font-bold">Deal Closes</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-black">
                We handle the backend.
              </h3>
              <p className="text-base md:text-lg text-black max-w-[454px]">
                Diligence, SPV structuring, check writing, and updates all
                covered by Tribute Labs.
              </p>
            </div>

            {/* Right Side - Checklist */}
            <div className="flex-1 flex flex-col gap-4 lg:-mt-16 lg:-mb-4">
              {[
                "Wiring $120,000",
                "Cactos Counter Signs",
                "TL Signs Terms Sheet",
                "Terms Sheet Reviewed",
                "Alignment Call",
              ].map((task) => (
                <div
                  key={task}
                  className="flex items-center justify-between p-4 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(73, 193, 122, 0.04)",
                  }}
                >
                  <span className="text-base font-bold">{task}</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: COLORS.accent.green,
                      }}
                    >
                      Complete
                    </span>
                    <Image
                      src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                      alt="Complete"
                      width={24}
                      height={24}
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection1;
