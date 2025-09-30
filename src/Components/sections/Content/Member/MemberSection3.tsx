import { ProcessStep } from "@/Components/ui/ProcessStep";
import { MEMBER_SECTION3, SECTION_SPACING } from "@/lib/constants";
import Image from "next/image";

export default function MemberSection3() {
  const { heading, subheading, logoImage, logoBgColor, steps } =
    MEMBER_SECTION3;

  return (
    <section className={SECTION_SPACING.padding}>
      <div className={SECTION_SPACING.container}>
        <div className="flex items-start gap-44 w-full">
          {/* Left Column - Steps */}
          <div className="flex flex-col gap-10">
            {/* Header */}
            <div className="flex flex-col gap-4 max-w-[453px]">
              <h2 className="text-6xl font-semibold leading-[64px]">
                {heading}
              </h2>
              <p className="text-xl leading-loose">{subheading}</p>
            </div>

            {/* Steps */}
            <div className="flex flex-col items-start">
              {steps.map((step, index) => (
                <ProcessStep
                  key={step.number}
                  step={step}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Logo */}
          <div
            className="w-[480px] h-[480px] relative rounded-[32px] overflow-hidden flex items-center justify-center ml-auto"
            style={{ backgroundColor: logoBgColor }}
          >
            <Image
              src={logoImage}
              alt="ADIN Logo"
              width={360}
              height={360}
              className="w-[360px] h-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
