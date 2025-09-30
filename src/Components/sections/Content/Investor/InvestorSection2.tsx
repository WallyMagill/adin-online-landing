"use client";

import { COLORS } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const InvestorSection2: React.FC = () => {
  const agentData = [
    {
      icon: "/assets/images/profile-icon-green.svg",
      name: "The Network Hunter",
      color: COLORS.accent.green,
    },
    {
      icon: "/assets/images/profile-icon-yellow.svg",
      name: "The Tech Oracle",
      color: COLORS.accent.yellow,
    },
    {
      icon: "/assets/images/profile-icon-red.svg",
      name: "The Monopoly Maker",
      color: COLORS.accent.red,
    },
    {
      icon: "/assets/images/profile-icon-purple.svg",
      name: "The Unit Master",
      color: COLORS.accent.purple,
    },
    {
      icon: "/assets/images/profile-icon-blue.svg",
      name: "The Value Guy",
      color: COLORS.accent.blue,
    },
  ];

  return (
    <section className="w-full py-24 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 w-full">
          <h2 className="text-5xl md:text-6xl font-bold leading-none mb-4 w-full">
            The precision of a machine.
            <br />
            The instincts of a community.
          </h2>
          <p className="text-lg md:text-xl text-black mt-4 w-full">
            ADIN combines machine intelligence with the power of an expert hive
            mind.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          {/* Card 1: Private Network (Full Width) */}
          <div
            className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 flex flex-col lg:flex-row gap-10"
            style={{
              border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
            }}
          >
            {/* Left Content */}
            <div className="flex-1 min-w-[280px] lg:min-w-[400px] flex flex-col justify-center">
              <span className="text-base font-bold">Private Network</span>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mt-6">
                Access a handpicked investor network.
              </h3>
              <p className="text-base md:text-lg mt-2 text-black">
                Share insights and collaborate with other ADIN Investors on
                emerging tech and trends.
              </p>
            </div>

            {/* Right Visual */}
            <div className="flex-1 relative h-[300px] lg:h-auto min-h-[300px]">
              <Image
                src="/assets/images/private_network.png"
                alt="Private investor network visualization"
                fill
                className="rounded-[32px] object-contain"
              />
            </div>
          </div>

          {/* Card 2: AI Investor (Bottom Left) */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 flex flex-col"
            style={{
              border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
            }}
          >
            <span className="text-base font-bold">AI Investor</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-black mt-6">
              An LLM built for venture-grade signal.
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              ADIN&apos;s AI uncovers patterns in founders, markets, and deal
              flow helping you invest faster and smarter, grounded in data.
            </p>

            {/* AI Agents Container */}
            <div
              className="mt-10 rounded-[32px] p-10 relative overflow-hidden flex-1"
              style={{
                background: `linear-gradient(180deg, ${COLORS.accent.green} 0%, rgba(73, 193, 122, 0.3) 100%)`,
              }}
            >
              {/* Agent Cards */}
              <div className="flex flex-col gap-4 relative z-10 items-center justify-center h-full">
                {agentData.map((agent) => (
                  <div
                    key={agent.name}
                    className="flex items-center gap-3 bg-white rounded-2xl p-4 px-6 max-w-xs w-full"
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: agent.color,
                      }}
                    >
                      <Image
                        src={agent.icon}
                        alt={agent.name}
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-xl font-semibold text-black">
                      {agent.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Deal Flow (Bottom Right) */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14"
            style={{
              border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
            }}
          >
            <span className="text-base font-bold">Deal Flow</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-black mt-6">
              Tap into the collective edge.
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              The ADIN Member network surfaces deals from top founders,
              operators, and scouts you won&apos;t find anywhere else.
            </p>

            {/* Cards Container */}
            <div
              className="mt-10 rounded-[32px] p-10 relative overflow-hidden h-[604px] flex items-center justify-center"
              style={{
                background: `linear-gradient(180deg, ${COLORS.accent.yellow} 0%, rgba(255, 191, 102, 0.3) 100%)`,
              }}
            >
              {/* Background Card 1 (Purple) */}
              <div
                className="absolute w-[320px] rounded-3xl overflow-hidden bg-white"
                style={{
                  height: "385px",
                  transform: "rotate(-8deg) translate(-12px, -18px)",
                  zIndex: 1,
                  border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
                }}
              >
                <div
                  style={{
                    height: "50%",
                    backgroundColor: COLORS.accent.purple,
                  }}
                />
              </div>

              {/* Background Card 2 (Grey) */}
              <div
                className="absolute w-[320px] rounded-3xl overflow-hidden bg-white"
                style={{
                  height: "385px",
                  transform: "rotate(-4deg) translate(-6px, -9px)",
                  zIndex: 2,
                  border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
                }}
              >
                <div
                  style={{
                    height: "50%",
                    backgroundColor: "#4D4D4D",
                  }}
                />
              </div>

              {/* Front Card */}
              <div
                className="relative w-[320px] bg-white rounded-3xl overflow-hidden"
                style={{
                  border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
                  zIndex: 10,
                }}
              >
                {/* Card Header Image */}
                <div className="relative h-[176px] w-full">
                  <Image
                    src="/assets/images/eilis-garvey-dl_S0Kyq1Z0-unslash.jpg"
                    alt="Lane AI background"
                    fill
                    className="object-cover"
                    style={{
                      filter: "brightness(0.4) contrast(1.2)",
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Company Header */}
                  <div className="flex items-center justify-between">
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
                    <Image
                      src="/assets/icons/Ionicons Designer Pack/globe-outline.svg"
                      alt="Website"
                      width={20}
                      height={20}
                    />
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm mt-2 leading-snug"
                    style={{
                      color: COLORS.neutral.dark.darkGray1,
                    }}
                  >
                    AI-native trade intel with real-time alerts, smart
                    reporting, and predictive insights for truly. global
                    logistics. Your goods, on time.
                  </p>

                  {/* Score Badge */}
                  <div className="flex items-center gap-2 mt-4">
                    <Image
                      src="/assets/images/Logo.svg"
                      alt="ADIN"
                      width={24}
                      height={24}
                    />
                    <span
                      className="text-2xl font-bold"
                      style={{
                        fontFamily: "Barrio, cursive",
                        color: COLORS.base.black,
                      }}
                    >
                      99%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection2;
