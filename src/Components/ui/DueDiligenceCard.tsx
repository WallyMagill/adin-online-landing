import { IonIcon } from "@/Components/icons";
import { COLORS } from "@/lib/constants";
import { DueDiligenceCardProps } from "@/types/components";

export const DueDiligenceCard = ({
  currentPhase,
  status,
  timeEstimate,
  progress,
}: DueDiligenceCardProps) => {
  return (
    <div
      className="mt-10 bg-white rounded-3xl p-10"
      style={{ border: `1px solid ${COLORS.neutral.dark.lightGray1}` }}
    >
      {/* Progress Bar */}
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: COLORS.neutral.dark.lightGray1 }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${progress}%`,
            backgroundColor: COLORS.accent.green,
          }}
        />
      </div>

      {/* Phase Info */}
      <div className="mt-6">
        <p className="text-sm text-gray-600">Current Phase</p>
        <p className="text-base font-medium mt-1">{currentPhase}</p>
      </div>

      {/* Status Indicators */}
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: COLORS.neutral.light.light1 }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: COLORS.accent.purple }}
            />
          </div>
          <span className="text-sm" style={{ color: COLORS.accent.purple }}>
            {status}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IonIcon name="timer" size={16} />
          <span className="text-sm text-gray-600">{timeEstimate}</span>
        </div>
      </div>
    </div>
  );
};
