import { AnalysisProgressVisual } from "@/Components/ui/AnalysisProgressVisual";
import { DeckFeedbackVisual } from "@/Components/ui/DeckFeedbackVisual";
import { InvestorOfferCard } from "@/Components/ui/InvestorOfferCard";
import { COLORS, FOUNDER_SECTION1, SECTION_SPACING } from "@/lib/constants";
import Image from "next/image";

export default function FounderSection1() {
  const { heading, description, cards } = FOUNDER_SECTION1;

  return (
    <section className={SECTION_SPACING.padding}>
      <div
        className={`${SECTION_SPACING.container} flex flex-col items-center gap-8`}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-6xl font-semibold leading-[64px] text-center">
            {heading.line1}
            <br />
            {heading.line2}
            <span style={{ color: COLORS.accent.purple }}>
              {heading.highlight}
            </span>
            {heading.line2End}
          </h2>
          <p className="text-xl leading-loose text-center">{description}</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {/* Deck Feedback Card */}
          <div className="px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium">
                {cards.deckFeedback.badge}
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-7">
                  {cards.deckFeedback.title}
                </h3>
                <p className="text-base leading-normal">
                  {cards.deckFeedback.description}
                </p>
              </div>
            </div>
            <DeckFeedbackVisual
              feedback={cards.deckFeedback.feedback}
              desktopImage={cards.deckFeedback.desktopImage}
              bgColor={cards.deckFeedback.bgColor}
            />
          </div>

          {/* Pitch Practice Card */}
          <div className="px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
            <div className="relative h-[400px] md:h-[604px] rounded-[32px] overflow-hidden">
              <div
                className="absolute inset-0 rounded-[32px]"
                style={{
                  background: `linear-gradient(180deg, ${cards.pitchPractice.bgColor} 0%, ${cards.pitchPractice.bgColor}4D 100%)`,
                }}
              />
              <div
                className="absolute w-[777px] h-[777px] -left-32 -top-[263px] rounded-full blur-[210px]"
                style={{ backgroundColor: cards.pitchPractice.bgColor }}
              />
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[280px] md:w-[420px]">
                <Image
                  src={cards.pitchPractice.image}
                  alt="Pitch practice"
                  width={420}
                  height={580}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium">
                {cards.pitchPractice.badge}
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-7">
                  {cards.pitchPractice.title}
                </h3>
                <p className="text-base leading-normal">
                  {cards.pitchPractice.description}
                </p>
              </div>
            </div>
          </div>

          {/* Smart Evaluation Card */}
          <div className="px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
            <AnalysisProgressVisual
              analysis={cards.smartEvaluation.analysis}
              bgColor={cards.smartEvaluation.bgColor}
            />
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium">
                {cards.smartEvaluation.badge}
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-7">
                  {cards.smartEvaluation.title}
                </h3>
                <p className="text-base leading-normal">
                  {cards.smartEvaluation.description}
                </p>
              </div>
            </div>
          </div>

          {/* From Pitch to Capital Card */}
          <div className="px-10 pt-14 pb-10 bg-white/80 rounded-[32px] border border-neutral-200 backdrop-blur-sm flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium">
                {cards.pitchToCapital.badge}
              </p>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-7">
                  {cards.pitchToCapital.title}
                </h3>
                <p className="text-base leading-normal">
                  {cards.pitchToCapital.description}
                </p>
              </div>
            </div>

            <div className="relative h-[604px] rounded-[32px] border border-purple-100 overflow-hidden">
              <div
                className="absolute inset-0 rounded-[32px]"
                style={{
                  background: `linear-gradient(180deg, ${cards.pitchToCapital.bgColor} 0%, ${cards.pitchToCapital.bgColor}4D 100%)`,
                }}
              />
              <div
                className="absolute w-[777px] h-[777px] -left-32 -top-[283px] rounded-full blur-[210px]"
                style={{ backgroundColor: "#FFA726" }}
              />

              {/* Investor cards stack */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100 md:left-[46px] md:top-[-116px] md:translate-x-0 md:translate-y-0 w-96 flex flex-col gap-6">
                {cards.pitchToCapital.investors.map((investor, index) => (
                  <InvestorOfferCard key={index} investor={investor} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
