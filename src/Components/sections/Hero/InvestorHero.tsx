"use client";

import { CategoryBadge } from "@/Components/ui/CategoryBadge";
import { CTAButton } from "@/Components/ui/CTAButton";
import { FeaturedStartupCard } from "@/Components/ui/FeaturedStartupCard";
import { VoteCard } from "@/Components/ui/VoteCard";
import {
  COLORS,
  HERO_SPACING,
  INVESTOR_FEATURED_CARD,
  INVESTOR_HERO,
  INVESTOR_VOTE_DATA,
  TYPOGRAPHY,
} from "@/lib/constants";
import React from "react";

const InvestorHero: React.FC = () => {
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
              {INVESTOR_HERO.heading.line1}
              <br />
              {INVESTOR_HERO.heading.line2}
            </h1>

            <p
              className={`${HERO_SPACING.descriptionMargin} text-lg leading-normal`}
              style={{
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
              }}
            >
              {INVESTOR_HERO.description}
            </p>

            <div
              className={`flex flex-row ${HERO_SPACING.buttonGap} mb-2 md:mb-8`}
            >
              <CTAButton
                text={INVESTOR_HERO.cta.text}
                href={INVESTOR_HERO.cta.href}
                borderColor={INVESTOR_HERO.badgeColor}
                ariaLabel={INVESTOR_HERO.cta.ariaLabel}
                className="flex-1"
              />
              <CategoryBadge
                label={INVESTOR_HERO.badge}
                borderColor={INVESTOR_HERO.badgeColor}
                className="flex-1"
              />
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="relative flex justify-center">
            <div className="relative">
              <FeaturedStartupCard {...INVESTOR_FEATURED_CARD} />

              {/* Voting Card */}
              <div
                className="absolute top-10 left-14 w-56 p-2 rounded-[32px] flex flex-col gap-1"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
                  backdropFilter: "blur(8px)",
                  boxShadow:
                    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                }}
              >
                {INVESTOR_VOTE_DATA.map((item, index) => (
                  <VoteCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div
          className={`hidden lg:grid grid-cols-[60%_40%] ${HERO_SPACING.desktopGap} items-center`}
        >
          <div className="text-left">
            <CategoryBadge
              label={INVESTOR_HERO.badge}
              borderColor={INVESTOR_HERO.badgeColor}
            />

            <h1
              className="mt-8 mb-4 text-6xl font-bold leading-tight"
              style={{
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
              }}
            >
              {INVESTOR_HERO.heading.line1}
              <br />
              {INVESTOR_HERO.heading.line2}
            </h1>

            <p
              className="max-w-[600px] mb-8 text-xl leading-normal"
              style={{
                color: COLORS.base.black,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
              }}
            >
              {INVESTOR_HERO.description}
            </p>

            <CTAButton
              text={INVESTOR_HERO.cta.text}
              href={INVESTOR_HERO.cta.href}
              borderColor={INVESTOR_HERO.badgeColor}
              ariaLabel={INVESTOR_HERO.cta.ariaLabel}
            />
          </div>

          {/* Desktop Cards */}
          <div className="relative flex justify-start">
            <div className="relative -mt-8 -ml-8">
              <FeaturedStartupCard
                {...INVESTOR_FEATURED_CARD}
                className="-mt-16 -ml-4"
              />

              <div
                className="absolute top-20 left-32 w-80 p-6 rounded-[32px] flex flex-col gap-2"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
                  backdropFilter: "blur(8px)",
                  boxShadow:
                    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                }}
              >
                {INVESTOR_VOTE_DATA.map((item, index) => (
                  <VoteCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorHero;
