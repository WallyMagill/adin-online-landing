import { COLORS } from "@/lib/constants";
import Image from "next/image";

export default function FounderSection1() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-6xl font-semibold leading-[64px] text-center">
            Not Just a Form.
            <br />A Fundraising{" "}
            <span style={{ color: COLORS.accent.purple }}>Engine</span>.
          </h2>
          <p className="text-xl leading-loose text-center">
            Get real feedback, insights, and funding.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* TOP LEFT CARD - Deck Feedback */}
          <div className="px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium">Deck Feedback</p>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-7">
                  Pitch deck breakdown.
                </h3>
                <p className="text-base leading-normal">
                  Receive feedback on your deck&apos;s clarity, design, and
                  investor-readiness. ADIN makes sure you&apos;re ready for the
                  room.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[604px] rounded-[32px] border border-[#E1D1FA] overflow-hidden">
              {/* Red gradient background */}
              <div
                className="absolute inset-0 rounded-[32px]"
                style={{
                  background: `linear-gradient(180deg, ${COLORS.accent.red} 0%, rgba(243, 101, 91, 0.3) 100%)`,
                }}
              />

              {/* Blur effect */}
              <div
                className="absolute w-[777px] h-[777px] -left-32 top-[90px] rounded-full blur-[210px]"
                style={{ backgroundColor: COLORS.accent.red }}
              />

              {/* Desktop template */}
              <div className="absolute bottom-0 right-0 scale-[0.85] md:scale-100 origin-bottom-right">
                <Image
                  src="/assets/images/DesktopTemplate1.png"
                  alt="Desktop template"
                  width={480}
                  height={400}
                  className="object-contain"
                />
              </div>

              {/* Feedback card overlay */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.7] md:scale-100 w-80 p-5 bg-white rounded-xl shadow-lg border border-[#E1D1FA] flex flex-col gap-5">
                {/* Card header */}
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2.5">
                    <Image
                      src="/assets/icons/Ionicons Designer Pack/chevron-back-outline.svg"
                      alt="Back"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                    <Image
                      src="/assets/icons/Ionicons Designer Pack/chevron-forward-outline.svg"
                      alt="Forward"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                  </div>
                  <div className="flex gap-2.5">
                    <Image
                      src="/assets/icons/Ionicons Designer Pack/checkmark-circle-outline.svg"
                      alt="Check"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                    <Image
                      src="/assets/icons/Ionicons Designer Pack/close-outline.svg"
                      alt="Close"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/assets/images/Logo.svg"
                        alt="ADIN"
                        width={28}
                        height={28}
                      />
                    </div>
                    <span className="text-base font-medium">ADIN</span>
                    <span className="text-base font-medium opacity-60">
                      5s ago
                    </span>
                  </div>
                  <p className="text-base font-medium ml-9">
                    The leap from ~$12M to ~$41M in one year (2027 → 2028) and
                    then to $101M in 2029 may raise skepticism without detailed
                    justification.
                  </p>
                </div>

                {/* Input box */}
                <div className="w-full h-10 bg-neutral-50 rounded-[10px] border border-neutral-200 flex items-center px-2.5 py-1.5">
                  <div className="flex-1 flex items-center gap-3">
                    <span
                      style={{ color: COLORS.accent.purple }}
                      className="text-base"
                    >
                      |
                    </span>
                    <span className="text-base text-zinc-400">Ask ADIN</span>
                  </div>
                  <Image
                    src="/assets/icons/Ionicons Designer Pack/chevron-up-circle.svg"
                    alt="Send"
                    width={20}
                    height={20}
                    className="opacity-60"
                  />
                </div>
              </div>

              {/* Notification badge */}
              <div className="absolute left-1/2 translate-x-[118px] md:translate-x-[168px] top-1/2 translate-y-[84px] md:translate-y-[120px] scale-[0.7] md:scale-100 w-7 h-7 bg-white rounded-full shadow-lg border border-orange-400 flex items-center justify-center">
                <span className="text-xs font-medium">3</span>
              </div>
            </div>
          </div>

          {/* TOP RIGHT CARD - Pitch Practice */}
          <div className="px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
            <div className="relative h-[400px] md:h-[604px] rounded-[32px] overflow-hidden">
              {/* Green gradient background */}
              <div
                className="absolute inset-0 rounded-[32px]"
                style={{
                  background: `linear-gradient(180deg, ${COLORS.accent.green} 0%, rgba(73, 193, 122, 0.3) 100%)`,
                }}
              />

              {/* Blur effect */}
              <div
                className="absolute w-[777px] h-[777px] -left-32 -top-[263px] rounded-full blur-[210px]"
                style={{ backgroundColor: COLORS.accent.green }}
              />

              {/* iPhone image */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[280px] md:w-[420px]">
                <Image
                  src="/assets/images/iPhone-13-1.png"
                  alt="iPhone with pitch practice"
                  width={420}
                  height={580}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-base font-medium">Pitch Practice</p>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-7">
                  Practice with ADIN Live.
                </h3>
                <p className="text-base leading-normal">
                  Pitch in a live voice-chat interface. ADIN will ask real
                  investor-style questions and give you a score to sharpen your
                  story.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM LEFT CARD - Smart Evaluation */}
          <div className="px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
            <div className="relative h-[604px] rounded-[32px] border border-[#E1D1FA] overflow-hidden">
              {/* Purple gradient background */}
              <div
                className="absolute inset-0 rounded-[32px]"
                style={{
                  background: `linear-gradient(180deg, ${COLORS.accent.purple} 0%, rgba(169, 125, 245, 0.3) 100%)`,
                }}
              />

              {/* Blur effect */}
              <div
                className="absolute w-[777px] h-[777px] -left-32 -top-[263px] rounded-full blur-[210px]"
                style={{ backgroundColor: COLORS.accent.purple }}
              />

              {/* Analysis card */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100 md:left-10 md:top-10 md:translate-x-0 md:translate-y-0 w-96 p-10 bg-white rounded-3xl border border-[#E1D1FA] flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/assets/images/Logo.svg"
                          alt="ADIN"
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="w-8 h-8 -ml-2 bg-lime-950 rounded-full flex items-center justify-center">
                        <Image
                          src="/assets/images/chevron-collapse.svg"
                          alt="Analyzing"
                          width={20}
                          height={20}
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-xl font-medium">
                      Analyzing Lane AI
                    </span>
                  </div>
                  <p className="text-sm leading-tight">
                    This may take a few minutes. Hold tight.
                  </p>
                </div>

                {/* Progress steps */}
                <div className="flex flex-col gap-0">
                  {/* Step 1 - Complete */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-6 h-6 bg-white rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{ borderColor: COLORS.accent.green }}
                    >
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt="Complete"
                        width={24}
                        height={24}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(68%) sepia(51%) saturate(432%) hue-rotate(88deg) brightness(91%) contrast(85%)",
                        }}
                      />
                    </div>
                    <span className="text-base font-medium text-zinc-400">
                      Identity Check Complete
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center w-6">
                      <div
                        className="w-0.5 h-6"
                        style={{ backgroundColor: COLORS.accent.green }}
                      />
                    </div>
                  </div>

                  {/* Step 2 - Complete */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-6 h-6 bg-white rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{ borderColor: COLORS.accent.green }}
                    >
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt="Complete"
                        width={24}
                        height={24}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(68%) sepia(51%) saturate(432%) hue-rotate(88deg) brightness(91%) contrast(85%)",
                        }}
                      />
                    </div>
                    <span className="text-base font-medium text-zinc-400">
                      3 Employees Found
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center w-6">
                      <div
                        className="w-0.5 h-6"
                        style={{ backgroundColor: COLORS.accent.green }}
                      />
                    </div>
                  </div>

                  {/* Step 3 - Complete */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-6 h-6 bg-white rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{ borderColor: COLORS.accent.green }}
                    >
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt="Complete"
                        width={24}
                        height={24}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(68%) sepia(51%) saturate(432%) hue-rotate(88deg) brightness(91%) contrast(85%)",
                        }}
                      />
                    </div>
                    <span className="text-base font-medium text-zinc-400">
                      Founder Background Check Done
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center w-6">
                      <div
                        className="w-0.5 h-6"
                        style={{ backgroundColor: COLORS.accent.green }}
                      />
                    </div>
                  </div>

                  {/* Step 4 - In Progress */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-6 h-6 bg-white rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{ borderColor: COLORS.accent.purple }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 512 512"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z"
                          fill={COLORS.accent.purple}
                        />
                      </svg>
                    </div>
                    <span className="text-base font-medium">
                      Reviewing competition...
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center w-6">
                      <div
                        className="w-0.5 h-6"
                        style={{
                          background: `linear-gradient(to bottom, ${COLORS.accent.purple}, #F5F5F5)`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Progress bar section */}
                <div className="flex flex-col gap-2">
                  <span className="text-base font-medium">72% Complete</span>
                  <div className="relative w-full h-2 bg-neutral-200 rounded-lg overflow-hidden">
                    <div
                      className="absolute left-0 h-full rounded-lg"
                      style={{
                        width: "72%",
                        backgroundColor: COLORS.accent.green,
                      }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span className="text-base font-medium">
                      Verified Sources
                    </span>
                    <span className="text-base font-medium">32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-zinc-400">
                      Articles
                    </span>
                    <span className="text-base font-medium text-zinc-400">
                      19
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-zinc-400">
                      Posts
                    </span>
                    <span className="text-base font-medium text-zinc-400">
                      13
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-base font-medium">Smart Evaluation</p>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-7">
                  ADIN will analyze & rate your idea.
                </h3>
                <p className="text-base leading-normal">
                  Upload your deck, GTM, or site. ADIN returns key takeaways,
                  market insights, and competitive breakdown.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM RIGHT CARD - From Pitch to Capital */}
          <div className="px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium">From Pitch to Capital</p>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-7">
                  Secure funding.
                </h3>
                <p className="text-base leading-normal">
                  Once approved, your startup enters ADIN&apos;s deal room.
                  Investors commit, you choose who signs the check.
                </p>
              </div>
            </div>

            <div className="relative h-[604px] rounded-[32px] border border-purple-100 overflow-hidden">
              {/* Yellow/Orange gradient background */}
              <div
                className="absolute inset-0 rounded-[32px]"
                style={{
                  background: `linear-gradient(180deg, ${COLORS.accent.orange} 0%, rgba(255, 122, 69, 0.3) 100%)`,
                }}
              />

              {/* Blur effect */}
              <div
                className="absolute w-[777px] h-[777px] -left-32 -top-[283px] rounded-full blur-[210px]"
                style={{ backgroundColor: "#FFA726" }}
              />

              {/* Cards container */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100 md:left-[46px] md:top-[-116px] md:translate-x-0 md:translate-y-0 w-96 flex flex-col gap-6">
                {/* Top card (partially cut off) */}
                <div className="p-8 bg-white rounded-3xl flex flex-col gap-4 border border-purple-100">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full overflow-hidden"
                      style={{ backgroundColor: "#F8E6AE" }}
                    >
                      <Image
                        src="/assets/images/profile-headshot-1.png"
                        alt="Alice Schimer"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-medium text-neutral-900">
                        Alice Schimer
                      </span>
                      <span className="text-sm text-neutral-600">
                        Founder, Lane AI
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(68%) sepia(51%) saturate(432%) hue-rotate(88deg) brightness(91%) contrast(85%)",
                        }}
                      />
                      <span className="text-base">
                        Reviewed LaneAI 2 days ago
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(68%) sepia(51%) saturate(432%) hue-rotate(88deg) brightness(91%) contrast(85%)",
                        }}
                      />
                      <span className="text-base">
                        Specializes in early stage
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button className="flex-1 px-6 py-4 bg-neutral-50 rounded-[80px] border border-neutral-200 text-base font-medium hover:bg-neutral-100 transition-colors">
                      Ignore
                    </button>
                    <button className="flex-1 px-6 py-4 bg-black rounded-[80px] text-white text-base font-medium hover:bg-neutral-800 transition-colors">
                      View Offer
                    </button>
                  </div>
                </div>

                {/* Middle card - ADIN (fully visible) */}
                <div className="p-8 bg-white rounded-3xl flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src="/assets/images/Logo.svg"
                        alt="ADIN"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-medium text-neutral-900">
                        ADIN
                      </span>
                      <span className="text-sm text-neutral-600">
                        + The Investor Network
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(68%) sepia(51%) saturate(432%) hue-rotate(88deg) brightness(91%) contrast(85%)",
                        }}
                      />
                      <span className="text-base">100% Confidence Score</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(68%) sepia(51%) saturate(432%) hue-rotate(88deg) brightness(91%) contrast(85%)",
                        }}
                      />
                      <span className="text-base">
                        Approved by ADIN&apos;s Investors
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button className="flex-1 px-6 py-4 bg-neutral-50 rounded-[80px] border border-neutral-200 text-base font-medium hover:bg-neutral-100 transition-colors">
                      Ignore
                    </button>
                    <button className="flex-1 px-6 py-4 bg-black rounded-[80px] text-white text-base font-medium hover:bg-neutral-800 transition-colors">
                      View Offer
                    </button>
                  </div>
                </div>

                {/* Bottom card - Jamie Delgado (partially cut off) */}
                <div className="p-8 bg-white rounded-3xl border border-purple-100 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full overflow-hidden"
                      style={{ backgroundColor: "#F8E6AE" }}
                    >
                      <Image
                        src="/assets/images/profile-headshot-4.png"
                        alt="Jamie Delgado"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-medium text-neutral-900">
                        Jamie Delgado
                      </span>
                      <span className="text-sm text-neutral-600">
                        GP, Clark Ventures
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(68%) sepia(51%) saturate(432%) hue-rotate(88deg) brightness(91%) contrast(85%)",
                        }}
                      />
                      <span className="text-base">
                        Follows your Angel investor, Luke T
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(68%) sepia(51%) saturate(432%) hue-rotate(88deg) brightness(91%) contrast(85%)",
                        }}
                      />
                      <span className="text-base">
                        Invests in Freight and Logistics
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button className="flex-1 px-6 py-4 bg-neutral-50 rounded-[80px] border border-neutral-200 text-base font-medium hover:bg-neutral-100 transition-colors">
                      Ignore
                    </button>
                    <button className="flex-1 px-6 py-4 bg-black rounded-[80px] text-white text-base font-medium hover:bg-neutral-800 transition-colors">
                      View Offer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
