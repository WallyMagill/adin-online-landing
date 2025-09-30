"use client";

import { ComparisonCard } from "@/Components/ui/ComparisonCard";
import { DealCalculator } from "@/Components/ui/DealCalculator";
import { COLORS, MEMBER_SECTION1, SECTION_SPACING } from "@/lib/constants";
import { useState } from "react";

export default function MemberSection1() {
  const [exitValue, setExitValue] = useState<number>(
    MEMBER_SECTION1.calculator.defaultValue
  );
  const { heading, description, calculator, comparison } = MEMBER_SECTION1;

  const standardEarnings = exitValue * comparison.standard.carryPercentage;
  const adinEarnings = exitValue * comparison.adin.carryPercentage;

  return (
    <section className={SECTION_SPACING.padding}>
      <div className={SECTION_SPACING.container}>
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header */}
          <div className="flex flex-col items-start text-left w-full">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight md:leading-[64px]">
              {heading.line1}
              <br />
              {heading.line2}
              <span style={{ color: COLORS.accent.green }}>
                {heading.highlight}
              </span>
              {heading.line2End}
            </h2>
            <p className="text-lg md:text-xl leading-normal md:leading-loose mt-4 max-w-2xl">
              {description}
            </p>
          </div>

          {/* Calculator Box */}
          <div
            className="w-full p-6 md:p-10 bg-white rounded-[32px] md:rounded-[48px] border flex flex-col gap-8 md:gap-12"
            style={{ borderColor: COLORS.neutral.light.light2 }}
          >
            {/* Calculator Header */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">{calculator.title}</h3>
              <p className="text-sm text-zinc-900 leading-tight">
                {calculator.subtitle}
              </p>
            </div>

            {/* Calculator */}
            <DealCalculator
              min={calculator.sliderMin}
              max={calculator.sliderMax}
              step={calculator.sliderStep}
              defaultValue={calculator.defaultValue}
              onValueChange={setExitValue}
            />

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <ComparisonCard
                badge={comparison.standard.badge}
                earnings={standardEarnings}
                earningsLabel={comparison.standard.earningsLabel}
                features={comparison.standard.features}
                warning={comparison.standard.warning}
              />
              <ComparisonCard
                badge={comparison.adin.badge}
                earnings={adinEarnings}
                earningsLabel={comparison.adin.earningsLabel}
                features={comparison.adin.features}
                badges={comparison.adin.badges}
                isAdin={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
