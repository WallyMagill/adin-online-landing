"use client";

import { ChecklistItem } from "@/Components/ui/ChecklistItem";
import { DealSubmitCard } from "@/Components/ui/DealSubmitCard";
import { DueDiligenceCard } from "@/Components/ui/DueDiligenceCard";
import { NotificationCard } from "@/Components/ui/NotificationCard";
import { VotingCard } from "@/Components/ui/VotingCard";
import { COLORS, INVESTOR_SECTION1 } from "@/lib/constants";
import Image from "next/image";

export default function InvestorSection1() {
  const { heading, description, cards } = INVESTOR_SECTION1;

  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-6xl font-bold leading-none mb-4">
            {heading.line1}
            <span style={{ color: COLORS.accent.yellow }}>
              {heading.highlight}
            </span>
            .
            <br />
            {heading.line2}
          </h2>
          <p className="text-lg md:text-xl text-black mt-4 max-w-3xl">
            {description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 lg:grid-rows-[auto_auto_auto] items-start">
          {/* Real-Time Voting */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 lg:row-span-2"
            style={{ border: `1px solid ${COLORS.neutral.dark.lightGray1}` }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              {cards.voting.title}
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              {cards.voting.description}
            </p>
            <VotingCard
              companyName={cards.voting.company.name}
              companyIcon={cards.voting.company.icon}
              question={cards.voting.company.question}
              options={cards.voting.options}
            />
          </div>

          {/* Submit a Deal */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14"
            style={{ border: `1px solid ${COLORS.neutral.dark.lightGray1}` }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              {cards.submitDeal.title}
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              {cards.submitDeal.description}
            </p>
            <DealSubmitCard
              searchPlaceholder={cards.submitDeal.searchPlaceholder}
              analyzeText={cards.submitDeal.analyzeText}
              platforms={cards.submitDeal.platforms}
            />
          </div>

          {/* Due Diligence */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 lg:row-start-3"
            style={{ border: `1px solid ${COLORS.neutral.dark.lightGray1}` }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              {cards.dueDiligence.title}
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              {cards.dueDiligence.description}
            </p>
            <DueDiligenceCard
              currentPhase={cards.dueDiligence.currentPhase}
              status={cards.dueDiligence.status}
              timeEstimate={cards.dueDiligence.timeEstimate}
              progress={cards.dueDiligence.progress}
            />
          </div>

          {/* Deals Hit Inbox */}
          <div
            className="relative bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 overflow-hidden lg:row-start-2 lg:row-span-2 lg:h-full h-auto"
            style={{ border: `1px solid ${COLORS.neutral.dark.lightGray1}` }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black">
              {cards.inbox.title}
            </h3>
            <p className="text-base md:text-lg mt-2 text-black">
              {cards.inbox.description}
            </p>

            <div className="hidden lg:block absolute bottom-0 left-0 right-0 overflow-hidden">
              <Image
                src={cards.inbox.desktopImage}
                alt="Desktop notifications"
                width={800}
                height={600}
                className="w-full"
              />
            </div>

            <div className="lg:absolute lg:-right-12 lg:top-60 space-y-2.5 mt-8 lg:mt-0">
              {cards.inbox.notifications.map((notification, index) => (
                <NotificationCard key={index} notification={notification} />
              ))}
            </div>
          </div>

          {/* Deal Closes */}
          <div
            className="lg:col-span-2 lg:row-start-4 bg-white/80 backdrop-blur-sm rounded-[32px] p-10 md:p-14 flex flex-col lg:flex-row gap-6 lg:overflow-hidden lg:h-[320px] h-auto"
            style={{ border: `1px solid ${COLORS.neutral.dark.lightGray1}` }}
          >
            <div className="flex-1 flex flex-col justify-center gap-6">
              <span className="text-base font-bold">
                {cards.dealCloses.badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-black">
                {cards.dealCloses.title}
              </h3>
              <p className="text-base md:text-lg text-black max-w-[454px]">
                {cards.dealCloses.description}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-4 lg:-mt-16 lg:-mb-4">
              {cards.dealCloses.checklist.map((task) => (
                <ChecklistItem key={task} task={task} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
