import { COLORS, INVEST_SECTION, SECTION_SPACING } from "@/lib/constants";
import { InvestSectionProps } from "@/types/components";

export default function InvestSection({
  title = INVEST_SECTION.title,
  ctaText = INVEST_SECTION.ctaText,
  buttonText = INVEST_SECTION.buttonText,
  waitlistPrefix = INVEST_SECTION.waitlistPrefix,
  waitlistLink = INVEST_SECTION.waitlistLink,
}: InvestSectionProps = {}) {
  return (
    <section className={SECTION_SPACING.padding}>
      <div
        className={`${SECTION_SPACING.container} flex flex-col items-center gap-10`}
      >
        <h2
          className={`${SECTION_SPACING.heading.mobile} ${SECTION_SPACING.heading.desktop} ${SECTION_SPACING.heading.styles} text-center max-w-4xl`}
        >
          {title}
        </h2>

        {/* CTA Pill */}
        <div className="w-full md:w-auto md:inline-flex bg-white border border-purple-100 rounded-full pl-6 pr-1 py-1 flex items-center justify-between gap-4 overflow-hidden">
          <span
            className="text-base font-medium leading-tight"
            style={{
              background: "radial-gradient(circle, #A97DF5, #B19AD9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {ctaText}
          </span>
          <button
            className="px-6 py-3.5 rounded-full flex items-center gap-1 text-white text-base font-medium leading-tight hover:bg-purple-500 transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: COLORS.accent.purple }}
          >
            {buttonText}
            <span className="hidden md:inline">→</span>
          </button>
        </div>

        {/* Waitlist link */}
        <div className="text-base leading-normal text-center">
          <div className="md:hidden">
            <div className="text-neutral-600">{waitlistPrefix}</div>
            <div
              className="cursor-pointer hover:text-purple-500 transition-colors"
              style={{ color: COLORS.accent.purple }}
            >
              {waitlistLink}
            </div>
          </div>
          <p className="hidden md:block">
            <span className="text-neutral-600">{waitlistPrefix}</span>
            <span
              className="cursor-pointer hover:text-purple-500 transition-colors"
              style={{ color: COLORS.accent.purple }}
            >
              {waitlistLink}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
