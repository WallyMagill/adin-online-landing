import { COLORS } from "@/lib/constants";
import { ProcessStepProps } from "@/types/components";

export const ProcessStep = ({ step, isLast = false }: ProcessStepProps) => {
  return (
    <>
      {/* Connector before step */}
      <div className="w-px h-6 border-l border-neutral-200" />

      <div className="flex items-start gap-4">
        {/* Left side - Line indicator */}
        <div className="flex flex-col items-center">
          <div className="w-px h-11 border-l border-neutral-200" />
          <div
            className="w-px h-7 border-l-2"
            style={{ borderColor: COLORS.accent.purple }}
          />
          <div className="w-px h-20 border-l border-neutral-200" />
        </div>

        {/* Right side - Content */}
        <div className="w-[453px] flex flex-col gap-6">
          <span className="text-base font-medium">Step {step.number}</span>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold leading-7">{step.title}</h3>
            <p className="text-base leading-normal">{step.description}</p>
          </div>
        </div>
      </div>

      {/* Connector after step */}
      {!isLast && <div className="w-px h-12 border-l border-neutral-200" />}
    </>
  );
};
