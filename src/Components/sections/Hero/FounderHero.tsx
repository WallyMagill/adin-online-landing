import { COLORS } from "@/lib/constants";
import Link from "next/link";

export default function FounderHero() {
  return (
    <section className="min-h-screen w-full flex items-start justify-center px-6 pt-12 pb-20 md:pt-56 md:pb-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile Layout - Stacked vertically */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Mobile Content Area */}
          <div className="text-left">
            {/* Main Heading */}
            <h1 className="mb-4 text-4xl font-bold text-black leading-tight">
              Raise Smarter.
              <br />
              Get Backed by the Network.
            </h1>

            {/* Description */}
            <p className="mb-8 text-lg text-black leading-normal">
              Members earn a 10% carry on deals they submit that ADIN approves
              and successfully closes.
            </p>

            {/* Button Container - Horizontal on mobile */}
            <div className="flex flex-row gap-4">
              {/* CTA Button */}
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 flex-1"
                style={{
                  backgroundColor: COLORS.base.black,
                  border: `1px solid ${COLORS.accent.green}`,
                }}
              >
                <span className="font-medium text-white text-base">
                  Apply Now
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ color: COLORS.accent.green }}
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {/* Founders Badge Button */}
              <button
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border transition-transform duration-200 hover:scale-105 active:scale-95 flex-1"
                style={{
                  borderColor: COLORS.accent.green,
                  backgroundColor: "transparent",
                }}
                type="button"
                aria-label="Founders category"
              >
                <span
                  className="font-medium text-base"
                  style={{
                    color: COLORS.neutral.dark.darkGray1,
                  }}
                >
                  Founders
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Centered */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-8 w-full">
          {/* Top Badge */}
          <div
            className="px-3 py-2 rounded-full inline-flex items-center justify-center"
            style={{ border: `1px solid ${COLORS.accent.green}` }}
          >
            <span className="text-base font-medium text-neutral-600">
              Founders
            </span>
          </div>

          {/* Content Container */}
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            {/* Heading */}
            <div className="text-center">
              <h1 className="text-6xl font-semibold leading-[64px] text-black">
                Raise Smarter.
                <br />
                Get Backed by the Network.
              </h1>
            </div>

            {/* Description */}
            <div className="w-full max-w-[599px] px-4">
              <p className="text-xl leading-normal text-center">
                Members earn a 10% carry on deals they submit that ADIN approves
                and successfully closes.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/apply"
            className="px-6 py-4 rounded-[80px] inline-flex items-center justify-center gap-2 hover:text-black transition-colors"
            style={{
              backgroundColor: COLORS.base.pureBlack,
              border: `1px solid ${COLORS.accent.green}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.accent.green;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.base.pureBlack;
            }}
          >
            <span className="text-base font-medium text-white">Apply Now </span>
            <span
              className="text-base font-medium"
              style={{ color: COLORS.accent.green }}
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
