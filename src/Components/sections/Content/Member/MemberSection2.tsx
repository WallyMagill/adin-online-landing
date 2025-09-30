import { COLORS } from "@/lib/constants";
import Image from "next/image";

export default function MemberSection2() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start gap-8 w-full">
          {/* Header Section */}
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-6xl font-semibold leading-[64px]">
              Be more than a{" "}
              <span style={{ color: COLORS.accent.green }}>Member</span>
              .<br />
              Be a deal maker.
            </h2>
            <p className="text-xl leading-loose">
              Get rewarded for the deals you bring, with 10% carry and access to
              a private network.
            </p>
          </div>

          {/* Bento Grid Container */}
          <div className="flex flex-col gap-4 w-full">
            {/* TOP ROW - Two Cards Side by Side on Desktop, Stacked on Mobile */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              {/* LEFT CARD - Earn 10% Carry */}
              <div className="flex-1 px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
                <div className="text-base font-medium">Earn 10% Carry</div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold leading-7">
                    Earn 10% Carry on the Deals You Source
                  </h3>
                  <p className="text-base leading-normal">
                    Introduce great startups, and if ADIN invests, you get a 10%
                    share of the upside. No capital required.
                  </p>
                </div>

                {/* Visual container */}
                <div className="relative h-96 rounded-[32px] overflow-hidden">
                  {/* Green gradient background */}
                  <div
                    className="absolute inset-0 rounded-[32px]"
                    style={{
                      background: `linear-gradient(180deg, ${COLORS.accent.green} 0%, rgba(73, 193, 122, 0.3) 100%)`,
                    }}
                  />

                  {/* Blur effect */}
                  <div
                    className="absolute w-[777px] h-[777px] -left-32 -top-[457px] rounded-full blur-[210px]"
                    style={{ backgroundColor: COLORS.accent.green }}
                  />

                  {/* Card stack wrapper */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-[87px] md:top-[67px] md:translate-x-0 md:translate-y-0 w-60 md:w-80 h-48 md:h-64">
                    {/* Back Card (Rotated Sona Card - Purple) */}
                    <div
                      className="absolute w-60 md:w-80 h-45 md:h-60 top-[18px] md:top-[25px] rounded-3xl overflow-hidden transform -rotate-[4.54deg] origin-top-left"
                      style={{ backgroundColor: COLORS.accent.purple }}
                    >
                      {/* Holographic gradient overlay elements */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-3xl" />
                      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl" />
                      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg" />

                      {/* Bottom info - same as front card */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-[6px] rounded-b-3xl">
                        <h4 className="text-xl font-semibold text-white leading-tight">
                          Sona
                        </h4>
                        <p className="text-xs text-white">AI Platform</p>
                      </div>
                    </div>

                    {/* Front Card (Lane AI) */}
                    <div className="absolute w-60 md:w-80 h-45 md:h-60 top-[9px] md:top-[12px] bg-neutral-950 rounded-3xl overflow-hidden">
                      {/* Background image */}
                      <Image
                        src="/assets/images/eilis-garvey-dl_S0Kyq1Z0-unslash.jpg"
                        alt="Lane AI"
                        fill
                        className="mix-blend-luminosity object-cover"
                      />

                      {/* Badge (top left) */}
                      <div
                        className="p-2 rounded-[40px] inline-flex items-center gap-1.5 absolute top-4 left-4"
                        style={{ backgroundColor: COLORS.accent.green }}
                      >
                        <span className="text-sm font-medium text-white leading-none">
                          100%
                        </span>
                      </div>

                      {/* Center icon wrapper */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-lime-950 rounded-full flex items-center justify-center">
                        <Image
                          src="/assets/icons/Ionicons Designer Pack/chevron-collapse.svg"
                          alt="Icon"
                          width={40}
                          height={40}
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                          }}
                        />
                      </div>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-[6px] rounded-b-3xl">
                        <h4 className="text-xl font-semibold text-white leading-tight">
                          Lane AI
                        </h4>
                        <p className="text-xs text-white">Logistics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD - Private Network */}
              <div className="flex-1 px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
                <div className="text-base font-medium">Private Network</div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold leading-7">
                    Enter a Private Curated Community
                  </h3>
                  <p className="text-base leading-normal">
                    Join a vetted network of founders, operators, angels, and
                    technologists handpicked for collaboration.
                  </p>
                </div>

                {/* Visual container */}
                <div className="relative h-96 rounded-[32px] overflow-hidden">
                  {/* Yellow gradient background */}
                  <div
                    className="absolute inset-0 rounded-[32px]"
                    style={{
                      background: `linear-gradient(180deg, ${COLORS.accent.yellow} 0%, rgba(255, 191, 102, 0.3) 100%)`,
                    }}
                  />

                  {/* Blur effect */}
                  <div
                    className="absolute w-[777px] h-[777px] -left-32 -top-[457px] rounded-full blur-[210px]"
                    style={{ backgroundColor: COLORS.accent.yellow }}
                  />

                  {/* Cards wrapper - centered */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-20 flex items-center gap-14">
                    {/* Left Card (Green - Partially Cut Off) */}
                    <div
                      className="w-80 h-60 rounded-3xl overflow-hidden relative flex-shrink-0"
                      style={{ backgroundColor: COLORS.accent.green }}
                    >
                      <Image
                        src="/assets/images/profile-headshot-3.png"
                        alt="Marvin McKinney"
                        fill
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-[6px] rounded-b-3xl">
                        <h4 className="text-xl font-semibold text-white">
                          Marvin McKinney
                        </h4>
                        <p className="text-xs text-white">New York, NY</p>
                      </div>
                    </div>

                    {/* Center Card (Purple - Fully Visible and CENTERED) */}
                    <div
                      className="w-80 h-60 rounded-3xl overflow-hidden relative flex-shrink-0"
                      style={{ backgroundColor: COLORS.accent.purple }}
                    >
                      <Image
                        src="/assets/images/profile-headshot-1.png"
                        alt="Alice Schimer"
                        fill
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-[6px] rounded-b-3xl">
                        <h4 className="text-xl font-semibold text-white">
                          Alice Schimer
                        </h4>
                        <p className="text-xs text-white">Austin, TX</p>
                      </div>
                    </div>

                    {/* Right Card (Red - Partially Cut Off) */}
                    <div
                      className="w-80 h-60 rounded-3xl overflow-hidden relative flex-shrink-0"
                      style={{ backgroundColor: COLORS.accent.red }}
                    >
                      <Image
                        src="/assets/images/profile-headshot-2.png"
                        alt="Marvin McKinney"
                        fill
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-[6px] rounded-b-3xl">
                        <h4 className="text-xl font-semibold text-white">
                          Marvin McKinney
                        </h4>
                        <p className="text-xs text-white">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM CARD - Exclusive Access */}
            <div className="w-full h-auto md:h-80 p-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col md:flex-row items-center gap-10">
              {/* Left Side - iPhone Image */}
              <div className="w-full md:flex-1 h-48 md:h-full relative rounded-[32px] overflow-hidden order-2 md:order-1">
                {/* Purple gradient background */}
                <div
                  className="absolute inset-0 rounded-[32px]"
                  style={{
                    background: `linear-gradient(to bottom, ${COLORS.accent.purple}, ${COLORS.accent.purple}60)`,
                  }}
                />

                {/* Blur effect */}
                <div
                  className="absolute w-[777px] h-[777px] -left-[76px] -top-[617px] rounded-full blur-[210px]"
                  style={{ backgroundColor: COLORS.accent.purple }}
                />

                {/* iPhone image wrapper */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/assets/images/iPhone-13.png"
                    alt="iPhone"
                    width={400}
                    height={600}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex flex-col gap-6 order-1 md:order-2">
                <div className="text-base font-medium">Exclusive Access</div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold leading-7">
                    Get access to exclusive events.
                  </h3>
                  <p className="text-base leading-normal w-full md:w-[454px]">
                    Learn and collaborate. From deep-dives to market trend
                    sessions, discover insights to help you move faster.
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
