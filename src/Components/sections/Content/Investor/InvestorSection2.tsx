"use client";

import { DealFlowCard } from "@/Components/ui/DealFlowCard";
import { InvestorAgentCard } from "@/Components/ui/InvestorAgentCard";
import { COLORS, INVESTOR_SECTION2 } from "@/lib/constants";
import Image from "next/image";

export default function InvestorSection2() {
  const { heading, description, cards } = INVESTOR_SECTION2;

  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 w-full">
          <h2 className="text-5xl md:text-6xl font-bold leading-none mb-4">
            {heading.line1}
            <br />
            {heading.line2}
          </h2>
          <p className="text-lg md:text-xl text-black mt-4">{description}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          {/* Private Network */}
          <div
            className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 flex flex-col lg:flex-row gap-10"
            style={{ border: `1px solid ${COLORS.neutral.dark.lightGray1}` }}
          >
            <div className="flex-1 min-w-[280px] lg:min-w-[400px] flex flex-col justify-center">
              <span className="text-base font-bold">{cards.network.badge}</span>
              <h3 className="text-2xl md:text-3xl font-semibold text-black mt-6">
                {cards.network.title}
              </h3>
              <p className="text-base md:text-lg mt-2 text-black">
                {cards.network.description}
              </p>
            </div>
            <div className="flex-1 relative h-[300px] lg:h-auto min-h-[300px]">
              <Image
                src={cards.network.image}
                alt="Private investor network"
                fill
                className="rounded-[32px] object-contain"
              />
            </div>
          </div>

          {/* AI Investor */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 flex flex-col"
            style={{ border: `1px solid ${COLORS.neutral.dark.lightGray1}` }}
          >
            <span className="text-base font-bold">
              {cards.aiInvestor.badge}
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold text-black mt-6">
              {cards.aiInvestor.title}
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              {cards.aiInvestor.description}
            </p>

            <div
              className="mt-10 rounded-[32px] p-10 relative overflow-hidden flex-1"
              style={{
                background: `linear-gradient(180deg, ${COLORS.accent.green} 0%, rgba(73, 193, 122, 0.3) 100%)`,
              }}
            >
              <div className="flex flex-col gap-4 relative z-10 items-center justify-center h-full">
                {cards.aiInvestor.agents.map((agent) => (
                  <InvestorAgentCard key={agent.id} agent={agent} />
                ))}
              </div>
            </div>
          </div>

          {/* Deal Flow */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14"
            style={{ border: `1px solid ${COLORS.neutral.dark.lightGray1}` }}
          >
            <span className="text-base font-bold">{cards.dealFlow.badge}</span>
            <h3 className="text-2xl md:text-3xl font-semibold text-black mt-6">
              {cards.dealFlow.title}
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              {cards.dealFlow.description}
            </p>

            <div
              className="mt-10 rounded-[32px] p-10 relative overflow-hidden h-[604px] flex items-center justify-center"
              style={{
                background: `linear-gradient(180deg, ${COLORS.accent.yellow} 0%, rgba(255, 191, 102, 0.3) 100%)`,
              }}
            >
              {/* Background cards */}
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

              {/* Front card */}
              <DealFlowCard company={cards.dealFlow.featuredCompany} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
