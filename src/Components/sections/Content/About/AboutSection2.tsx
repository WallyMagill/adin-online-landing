import { StageCard } from "@/Components/ui/StageCard";
import {
  ABOUT_SECTION2,
  INVESTMENT_STAGES,
  SECTION_SPACING,
} from "@/lib/constants";

export default function AboutSection2() {
  return (
    <section className={SECTION_SPACING.padding}>
      <div className={SECTION_SPACING.container}>
        {/* Heading */}
        <h2
          className={`${SECTION_SPACING.heading.mobile} ${SECTION_SPACING.heading.desktop} ${SECTION_SPACING.heading.styles} ${SECTION_SPACING.headingMargin}`}
        >
          {ABOUT_SECTION2.heading.line1}
          <br />
          {ABOUT_SECTION2.heading.line2}
        </h2>

        {/* Description */}
        <p
          className={`${SECTION_SPACING.description.styles} ${SECTION_SPACING.descriptionMargin}`}
        >
          {ABOUT_SECTION2.description}
        </p>

        {/* Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${SECTION_SPACING.cardGap}`}
        >
          {INVESTMENT_STAGES.map((stage) => (
            <StageCard key={stage.id} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  );
}
