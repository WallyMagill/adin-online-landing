import { AgentCard } from "@/Components/ui/AgentCard";
import { ProfileCard } from "@/Components/ui/ProfileCard";
import {
  ABOUT_SECTION1,
  AI_AGENTS,
  HUMAN_PROFILE,
  SECTION_SPACING,
  TRIBUTE_LABS,
} from "@/lib/constants";
import Image from "next/image";

export default function AboutSection1() {
  return (
    <section className={SECTION_SPACING.padding}>
      <div className={SECTION_SPACING.container}>
        {/* Heading */}
        <h2
          className={`${SECTION_SPACING.heading.mobile} ${SECTION_SPACING.heading.desktop} ${SECTION_SPACING.heading.styles} ${SECTION_SPACING.headingMargin}`}
        >
          {ABOUT_SECTION1.heading.line1}
          <br />
          {ABOUT_SECTION1.heading.line2}
        </h2>

        {/* Description */}
        <p
          className={`${SECTION_SPACING.description.styles} ${SECTION_SPACING.descriptionMargin}`}
        >
          {ABOUT_SECTION1.description}
        </p>

        {/* Cards Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 ${SECTION_SPACING.cardGap} mb-8 md:mb-12`}
        >
          {/* AI Agents Card */}
          <div className="bg-white/80 border border-neutral-200 rounded-[32px] backdrop-blur-sm p-10 h-[648px]">
            <div className="mb-10">
              <p className="text-xl font-semibold leading-7 text-neutral-900 mb-1">
                {ABOUT_SECTION1.cards.agents.poweredBy}
              </p>
              <h3 className="text-3xl font-semibold leading-10 text-neutral-900">
                {ABOUT_SECTION1.cards.agents.title}
              </h3>
            </div>
            <div className="flex flex-col">
              {AI_AGENTS.map((agent, index) => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  showDivider={index < AI_AGENTS.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Humans Card */}
          <div className="bg-white/80 border border-neutral-200 rounded-[32px] backdrop-blur-sm h-[480px] md:h-[648px] overflow-hidden">
            <div className="p-10 pb-6">
              <p className="text-xl font-semibold leading-7 text-neutral-900 mb-1">
                {ABOUT_SECTION1.cards.humans.supportedBy}
              </p>
              <h3 className="text-3xl font-semibold leading-10 text-neutral-900">
                {ABOUT_SECTION1.cards.humans.title}
              </h3>
            </div>
            <ProfileCard profile={HUMAN_PROFILE} />
          </div>
        </div>

        {/* Tribute Labs Footer */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-white border border-neutral-200 rounded-2xl p-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FF0080] rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src={TRIBUTE_LABS.logo}
                  alt="Tribute Labs logo"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="w-6 h-6"
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-base font-bold leading-tight text-neutral-900">
                  {TRIBUTE_LABS.name}
                </h5>
                <p className="text-xs leading-none text-neutral-600">
                  {TRIBUTE_LABS.locations}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-base leading-normal text-neutral-600">
              {TRIBUTE_LABS.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
