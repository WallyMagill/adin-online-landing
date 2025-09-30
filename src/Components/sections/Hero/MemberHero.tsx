"use client";

import { CategoryBadge } from "@/Components/ui/CategoryBadge";
import { CTAButton } from "@/Components/ui/CTAButton";
import { VideoThumbnail } from "@/Components/ui/VideoThumbnail";
import { COLORS, HERO_SPACING, MEMBER_HERO, TYPOGRAPHY } from "@/lib/constants";
import React from "react";

const MemberHero: React.FC = () => {
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
              {MEMBER_HERO.heading.line1}
              <br />
              {MEMBER_HERO.heading.line2}
            </h1>

            <p
              className={`${HERO_SPACING.descriptionMargin} text-lg leading-normal`}
              style={{
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
              }}
            >
              {MEMBER_HERO.description}
            </p>

            <div className={`flex flex-row ${HERO_SPACING.buttonGap} mb-8`}>
              <CTAButton
                text={MEMBER_HERO.cta.text}
                href={MEMBER_HERO.cta.href}
                borderColor={MEMBER_HERO.badgeColor}
                ariaLabel={MEMBER_HERO.cta.ariaLabel}
                className="flex-1"
              />
              <CategoryBadge
                label={MEMBER_HERO.badge}
                borderColor={MEMBER_HERO.badgeColor}
                className="flex-1"
              />
            </div>
          </div>

          <div className="relative flex justify-center">
            <VideoThumbnail {...MEMBER_HERO.video} />
          </div>
        </div>

        {/* Desktop Layout */}
        <div
          className={`hidden lg:grid grid-cols-[60%_40%] ${HERO_SPACING.desktopGap} items-center`}
        >
          <div className="text-left">
            <CategoryBadge
              label={MEMBER_HERO.badge}
              borderColor={MEMBER_HERO.badgeColor}
            />

            <h1
              className="mt-8 mb-4 text-6xl font-bold leading-tight"
              style={{
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
              }}
            >
              {MEMBER_HERO.heading.line1}
              <br />
              {MEMBER_HERO.heading.line2}
            </h1>

            <p
              className="max-w-[600px] mb-8 text-xl leading-normal"
              style={{
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
              }}
            >
              {MEMBER_HERO.description}
            </p>

            <CTAButton
              text={MEMBER_HERO.cta.text}
              href={MEMBER_HERO.cta.href}
              borderColor={MEMBER_HERO.badgeColor}
              ariaLabel={MEMBER_HERO.cta.ariaLabel}
            />
          </div>

          <VideoThumbnail {...MEMBER_HERO.video} className="-ml-12" />
        </div>
      </div>
    </section>
  );
};

export default MemberHero;
