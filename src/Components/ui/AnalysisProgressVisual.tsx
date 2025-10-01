import { IonIcon } from "@/Components/icons";
import { COLORS } from "@/lib/constants";
import { AnalysisCardProps } from "@/types/components";
import Image from "next/image";

export const AnalysisProgressVisual = ({
  analysis,
  bgColor,
}: AnalysisCardProps) => {
  return (
    <div className="relative h-[275px] md:h-[604px] rounded-[32px] border border-[#E1D1FA] overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 rounded-[32px]"
        style={{
          background: `linear-gradient(180deg, ${bgColor} 0%, ${bgColor}4D 100%)`,
        }}
      />

      {/* Blur effect */}
      <div
        className="absolute w-[777px] h-[777px] -left-32 -top-[263px] rounded-full blur-[210px]"
        style={{ backgroundColor: bgColor }}
      />

      {/* Analysis card */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.55] md:scale-100 md:left-10 md:top-10 md:translate-x-0 md:translate-y-0 w-96 p-6 md:p-10 bg-white rounded-3xl border border-[#E1D1FA] flex flex-col gap-4 md:gap-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/assets/images/Logo.svg"
                  alt="ADIN"
                  width={32}
                  height={32}
                />
              </div>
              <div className="w-8 h-8 -ml-2 bg-lime-950 rounded-full flex items-center justify-center">
                <Image
                  src={analysis.companyIcon}
                  alt="Analyzing"
                  width={20}
                  height={20}
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
                  }}
                />
              </div>
            </div>
            <span className="text-xl font-medium">{analysis.title}</span>
          </div>
          <p className="text-sm leading-tight">{analysis.subtitle}</p>
        </div>

        {/* Progress steps */}
        <div className="flex flex-col gap-0">
          {analysis.steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-center gap-4">
                <div
                  className="w-6 h-6 bg-white rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{
                    borderColor: step.completed
                      ? COLORS.accent.green
                      : COLORS.accent.purple,
                  }}
                >
                  {step.completed ? (
                    <IonIcon
                      name="checkmark-circle"
                      size={24}
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(68%) sepia(51%) saturate(432%) hue-rotate(88deg) brightness(91%) contrast(85%)",
                      }}
                    />
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 512 512"
                      fill="none"
                    >
                      <path
                        d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z"
                        fill={COLORS.accent.purple}
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-base font-medium ${
                    step.completed ? "text-zinc-400" : ""
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < analysis.steps.length - 1 && (
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center w-6">
                    <div
                      className="w-0.5 h-6"
                      style={{
                        background: step.completed
                          ? COLORS.accent.green
                          : `linear-gradient(to bottom, ${COLORS.accent.purple}, #F5F5F5)`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex flex-col gap-2">
          <span className="text-base font-medium">
            {analysis.progress}% Complete
          </span>
          <div className="relative w-full h-2 bg-neutral-200 rounded-lg overflow-hidden">
            <div
              className="absolute left-0 h-full rounded-lg"
              style={{
                width: `${analysis.progress}%`,
                backgroundColor: COLORS.accent.green,
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-base font-medium">Verified Sources</span>
            <span className="text-base font-medium">
              {analysis.stats.verifiedSources}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-base font-medium text-zinc-400">
              Articles
            </span>
            <span className="text-base font-medium text-zinc-400">
              {analysis.stats.articles}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-base font-medium text-zinc-400">Posts</span>
            <span className="text-base font-medium text-zinc-400">
              {analysis.stats.posts}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
