import { CategoryBadge } from "@/Components/ui/CategoryBadge";
import { CTAButton } from "@/Components/ui/CTAButton";
import {
  COLORS,
  FOUNDER_HERO,
  HERO_SPACING,
  TYPOGRAPHY,
} from "@/lib/constants";

export default function FounderHero() {
  return (
    <section className={HERO_SPACING.section}>
      <div className={HERO_SPACING.container}>
        {/* Mobile Layout */}
        <div className={`lg:hidden flex flex-col ${HERO_SPACING.mobileGap}`}>
          <div className="text-left">
            <h1
              className={`${HERO_SPACING.headingMargin} text-4xl font-bold leading-tight`}
              style={{
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
              }}
            >
              {FOUNDER_HERO.heading.line1}
              <br />
              {FOUNDER_HERO.heading.line2}
            </h1>

            <p
              className={`${HERO_SPACING.descriptionMargin} text-lg leading-normal`}
              style={{
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
              }}
            >
              {FOUNDER_HERO.description}
            </p>

            <div className={`flex flex-row ${HERO_SPACING.buttonGap}`}>
              <CTAButton
                text={FOUNDER_HERO.cta.text}
                href={FOUNDER_HERO.cta.href}
                borderColor={FOUNDER_HERO.badgeColor}
                ariaLabel={FOUNDER_HERO.cta.ariaLabel}
                className="flex-1"
              />
              <CategoryBadge
                label={FOUNDER_HERO.badge}
                borderColor={FOUNDER_HERO.badgeColor}
                className="flex-1"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-8 w-full">
          <CategoryBadge
            label={FOUNDER_HERO.badge}
            borderColor={FOUNDER_HERO.badgeColor}
          />

          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <h1
              className="text-6xl font-semibold leading-[64px] text-center"
              style={{
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
              }}
            >
              {FOUNDER_HERO.heading.line1}
              <br />
              {FOUNDER_HERO.heading.line2}
            </h1>

            <div className="w-full max-w-[599px] px-4">
              <p
                className="text-xl leading-normal text-center"
                style={{
                  color: COLORS.base.black,
                  fontFamily: TYPOGRAPHY.fontFamily.primary,
                }}
              >
                {FOUNDER_HERO.description}
              </p>
            </div>
          </div>

          <CTAButton
            text={FOUNDER_HERO.cta.text}
            href={FOUNDER_HERO.cta.href}
            borderColor={FOUNDER_HERO.badgeColor}
            ariaLabel={FOUNDER_HERO.cta.ariaLabel}
          />
        </div>
      </div>
    </section>
  );
}
