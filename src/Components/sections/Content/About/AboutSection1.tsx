// TODO: make mobile person card better
// TODO: person card could use better styling with no horizontal scroll
import { COLORS } from "@/lib/constants";
import Image from "next/image";

// Agent data for the AI Agents card
const agents = [
  {
    icon: "/assets/images/profile-icon-yellow.svg",
    name: "The Network Hunter",
    description: "Find the crowd, fuel the movement.",
  },
  {
    icon: "/assets/images/profile-icon-red.svg",
    name: "The Tech Oracle",
    description: "Spotting tomorrow's breakthroughs, today.",
  },
  {
    icon: "/assets/images/profile-icon-blue.svg",
    name: "The Monopoly Maker",
    description: "Backing the next market dominator.",
  },
  {
    icon: "/assets/images/profile-icon-green.svg",
    name: "The Unit Master",
    description: "Numbers first, profits always.",
  },
  {
    icon: "/assets/images/profile-icon-purple.svg",
    name: "The Value Guy",
    description: "Seeking hidden gems for lasting growth.",
  },
];

export default function AboutSection1() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-semibold leading-tight md:leading-[64px] text-neutral-900 mb-6">
          AI speed.
          <br />
          Human judgment.
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed md:leading-loose text-neutral-900 max-w-4xl mb-12 md:mb-16">
          ADIN pairs expert operators with intelligent agents to handle the
          heavy lifting of venture workflows. Faster analysis, tighter feedback
          loops, and more space for high-conviction bets.
        </p>

        {/* Two Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 md:mb-12">
          {/* Left Card - AI Agents */}
          <div className="bg-white/80 border border-neutral-200 rounded-[32px] backdrop-blur-sm p-10 h-[648px]">
            {/* Card Header */}
            <div className="mb-10">
              <p className="text-xl font-semibold leading-7 text-neutral-900 mb-1">
                Powered by
              </p>
              <h3 className="text-3xl font-semibold leading-10 text-neutral-900">
                AI Agents
              </h3>
            </div>

            {/* Agent List */}
            <div className="flex flex-col">
              {agents.map((agent, index) => (
                <div key={agent.name}>
                  <div className="flex items-center gap-4 py-4">
                    {/* Agent Icon */}
                    <div className="w-12 h-12 flex-shrink-0">
                      <Image
                        src={agent.icon}
                        alt={`${agent.name} icon`}
                        width={48}
                        height={48}
                        className="w-full h-full"
                      />
                    </div>

                    {/* Agent Info */}
                    <div className="flex flex-col">
                      <h4 className="text-base font-bold leading-tight text-neutral-900">
                        {agent.name}
                      </h4>
                      <p className="text-base leading-tight text-neutral-600">
                        {agent.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider between agents (not after last one) */}
                  {index < agents.length - 1 && (
                    <div className="border-t border-purple-100" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Humans */}
          <div className="bg-white/80 border border-neutral-200 rounded-[32px] backdrop-blur-sm h-[648px] overflow-hidden">
            {/* Card Header - WITH padding */}
            <div className="p-10 pb-6">
              <p className="text-xl font-semibold leading-7 text-neutral-900 mb-1">
                Supported by
              </p>
              <h3 className="text-3xl font-semibold leading-10 text-neutral-900">
                Humans
              </h3>
            </div>

            {/* Profile section - NO padding, extends to edges */}
            <div className="relative h-[400px] md:h-[460px] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Left card - mint green, positioned within bounds */}
                <div className="absolute left-0 top-0 w-[60px] md:w-[80px] h-full bg-[#AEFFCF] rounded-r-3xl"></div>

                {/* Center card - cream, square-shaped with proper spacing */}
                <div className="relative w-[300px] md:w-[400px] h-full bg-[#FFF4E6] rounded-3xl overflow-hidden">
                  {/* Orange gradient blur - positioned inside card for proper clipping */}
                  <div className="absolute top-0 left-0 w-full h-full bg-orange-100 rounded-full blur-[210px] opacity-50" />
                  <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-purple-100 rounded-full blur-[150px] opacity-30" />

                  {/* Profile Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/images/profile-headshot.png"
                      alt="Ryan Hoover profile"
                      fill
                      className="object-cover object-center"
                    />

                    {/* Profile Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-md p-4 rounded-b-3xl">
                      <div className="flex justify-center items-center">
                        <div className="text-center">
                          {/* Name with verified badge */}
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <h4 className="text-xl md:text-2xl font-semibold leading-loose text-white">
                              Ryan Hoover
                            </h4>
                            <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded flex items-center justify-center">
                              <span className="text-white text-xs md:text-sm">
                                ✓
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <p className="text-sm md:text-base leading-tight text-white">
                            Founder, Product Hunt
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right card - neutral light, positioned within bounds */}
                <div
                  className="absolute right-0 top-0 w-[60px] md:w-[80px] h-full rounded-l-3xl"
                  style={{ backgroundColor: COLORS.neutral.light.light1 }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Tribute Labs Footer Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left Box - Tribute Labs */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-4">
            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="w-10 h-10 bg-[#FF0080] rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/assets/images/tribute-labs-logo.svg"
                  alt="Tribute Labs logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h5 className="text-base font-bold leading-tight text-neutral-900">
                  A Tribute Labs Project
                </h5>
                <p className="text-xs leading-none text-neutral-600">
                  NYC / LDN / CHI
                </p>
              </div>
            </div>
          </div>

          {/* Right Description */}
          <div className="flex-1">
            <p className="text-base leading-normal text-neutral-600">
              Tribute Labs has supported over 30 communities, empowering more
              than 300 projects through technical guidance, infrastructure, and
              long-term partnership. Our mission is to help communities thrive
              by providing the tools and support they need to scale with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
