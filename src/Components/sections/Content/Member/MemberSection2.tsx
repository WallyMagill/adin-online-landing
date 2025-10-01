import { MemberProfileCard } from "@/Components/ui/MemberProfileCard";
import { COLORS, MEMBER_SECTION2, SECTION_SPACING } from "@/lib/constants";
import Image from "next/image";

export default function MemberSection2() {
  const { heading, description, cards } = MEMBER_SECTION2;

  return (
    <section className={SECTION_SPACING.padding}>
      <div className={SECTION_SPACING.container}>
        <div className="flex flex-col items-start gap-8 w-full">
          {/* Header */}
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-6xl font-semibold leading-[64px]">
              {heading.line1}
              <span style={{ color: COLORS.accent.green }}>
                {heading.highlight}
              </span>
              .<br />
              {heading.line2}
            </h2>
            <p className="text-xl leading-loose">{description}</p>
          </div>

          {/* Bento Grid */}
          <div className="flex flex-col gap-4 w-full">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              {/* Earn Carry Card */}
              <div className="flex-1 px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
                <div className="text-base font-medium">
                  {cards.earnCarry.badge}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold leading-7">
                    {cards.earnCarry.title}
                  </h3>
                  <p className="text-base leading-normal">
                    {cards.earnCarry.description}
                  </p>
                </div>

                {/* Visual - Deal Cards */}
                <div className="relative h-50 md:h-96 rounded-[32px] overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-[32px]"
                    style={{
                      background: `linear-gradient(180deg, ${COLORS.accent.green} 0%, rgba(73, 193, 122, 0.3) 100%)`,
                    }}
                  />
                  <div
                    className="absolute w-[777px] h-[777px] -left-32 -top-[457px] rounded-full blur-[210px]"
                    style={{ backgroundColor: COLORS.accent.green }}
                  />

                  {/* Card stack wrapper */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[87px] md:top-[67px] md:translate-x-0 md:translate-y-0 w-56 md:w-80 h-44 md:h-64">
                    {/* Back Card (Sona - Purple) - hidden on mobile */}
                    <div
                      className="hidden md:block absolute w-60 md:w-80 h-45 md:h-60 top-[18px] md:top-[25px] rounded-3xl overflow-hidden transform -rotate-[4.54deg] origin-top-left"
                      style={{
                        backgroundColor: cards.earnCarry.companies[0].bgColor,
                      }}
                    >
                      {/* Holographic gradient overlay elements */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-3xl" />
                      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />
                      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg" />

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-[6px] rounded-b-3xl">
                        <h4 className="text-xl font-semibold text-white leading-tight">
                          {cards.earnCarry.companies[0].name}
                        </h4>
                        <p className="text-xs text-white">
                          {cards.earnCarry.companies[0].category}
                        </p>
                      </div>
                    </div>

                    {/* Front Card (Lane AI) */}
                    <div className="absolute w-56 md:w-80 h-44 md:h-60 top-[4px] md:top-[12px] bg-neutral-950 rounded-3xl overflow-hidden">
                      {/* Background image */}
                      <Image
                        src={cards.earnCarry.companies[1].image!}
                        alt={cards.earnCarry.companies[1].name}
                        fill
                        className="mix-blend-luminosity object-cover"
                      />

                      {/* Badge (top left) */}
                      <div
                        className="p-2 rounded-[40px] inline-flex items-center gap-1.5 absolute top-4 left-4"
                        style={{ backgroundColor: COLORS.accent.green }}
                      >
                        <span className="text-sm font-medium text-white leading-none">
                          {cards.earnCarry.companies[1].badge}
                        </span>
                      </div>

                      {/* Center icon wrapper */}
                      <div className="absolute top-4 right-4 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-lime-950 rounded-full flex items-center justify-center">
                        <Image
                          src={cards.earnCarry.companies[1].icon!}
                          alt="Icon"
                          width={20}
                          height={20}
                          className="md:w-[40px] md:h-[40px]"
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                          }}
                        />
                      </div>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-[6px] rounded-b-3xl">
                        <h4 className="text-xl font-semibold text-white leading-tight">
                          {cards.earnCarry.companies[1].name}
                        </h4>
                        <p className="text-xs text-white">
                          {cards.earnCarry.companies[1].category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Private Network Card */}
              <div className="flex-1 px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
                <div className="text-base font-medium">
                  {cards.privateNetwork.badge}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold leading-7">
                    {cards.privateNetwork.title}
                  </h3>
                  <p className="text-base leading-normal">
                    {cards.privateNetwork.description}
                  </p>
                </div>

                {/* Visual - Member Cards */}
                <div className="relative h-48 md:h-96 rounded-[32px] overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-[32px]"
                    style={{
                      background: `linear-gradient(180deg, ${COLORS.accent.yellow} 0%, rgba(255, 191, 102, 0.3) 100%)`,
                    }}
                  />
                  <div
                    className="absolute w-[777px] h-[777px] -left-32 -top-[457px] rounded-full blur-[210px]"
                    style={{ backgroundColor: COLORS.accent.yellow }}
                  />

                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-20 md:translate-y-0 flex items-center gap-8 md:gap-14">
                    {cards.privateNetwork.members.map((member, index) => (
                      <MemberProfileCard key={index} {...member} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Exclusive Access Card */}
            <div className="w-full h-auto md:h-80 p-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:flex-1 h-48 md:h-full relative rounded-[32px] overflow-hidden order-2 md:order-1">
                <div
                  className="absolute inset-0 rounded-[32px]"
                  style={{
                    background: `linear-gradient(to bottom, ${COLORS.accent.purple}, ${COLORS.accent.purple}60)`,
                  }}
                />
                <div
                  className="absolute w-[777px] h-[777px] -left-[76px] -top-[617px] rounded-full blur-[210px]"
                  style={{ backgroundColor: COLORS.accent.purple }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={cards.exclusiveAccess.image}
                    alt="iPhone"
                    width={400}
                    height={600}
                    className="object-cover w-full h-full md:object-contain md:w-full md:h-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 order-1 md:order-2">
                <div className="text-base font-medium">
                  {cards.exclusiveAccess.badge}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold leading-7">
                    {cards.exclusiveAccess.title}
                  </h3>
                  <p className="text-base leading-normal w-full md:w-[454px]">
                    {cards.exclusiveAccess.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
