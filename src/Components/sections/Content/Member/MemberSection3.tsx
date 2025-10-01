import { ProcessStep } from "@/Components/ui/ProcessStep";
import { MEMBER_SECTION3, SECTION_SPACING } from "@/lib/constants";
import Image from "next/image";

export default function MemberSection3() {
  const { heading, subheading, logoImage, logoBgColor, steps } =
    MEMBER_SECTION3;

  return (
    <section className={SECTION_SPACING.padding}>
      <div className={SECTION_SPACING.container}>
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-44 w-full">
          {/* Left Column - Steps */}
          <div className="flex flex-col gap-6 md:gap-10 w-full md:w-auto">
            {/* Header */}
            <div className="flex flex-col gap-4 w-full md:max-w-[453px]">
              <h2 className="text-4xl md:text-6xl font-semibold leading-tight md:leading-[64px]">
                {heading}
              </h2>
              <p className="text-lg md:text-xl leading-loose">{subheading}</p>
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
            className="hidden md:flex w-[480px] h-[480px] relative rounded-[32px] overflow-hidden items-center justify-center ml-auto"
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
