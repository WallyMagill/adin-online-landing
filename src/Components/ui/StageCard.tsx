import { StageCardProps } from "@/types/components";

export const StageCard = ({ stage }: StageCardProps) => {
  return (
    <div className="flex items-start gap-4">
      {/* Decorative line */}
      <div className="flex flex-col items-center">
        <div className="w-px h-11 bg-neutral-200" />
        <div
          className="w-px h-7"
          style={{ backgroundColor: stage.accentColor }}
        />
        <div className="w-px h-20 bg-neutral-200" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-6">
        <p className="text-xs font-medium leading-none text-neutral-900 uppercase">
          {stage.label}
        </p>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold leading-7 text-neutral-900">
            {stage.title}
          </h3>
          <p className="text-base leading-normal text-neutral-900">
            {stage.description}
          </p>
        </div>
      </div>
    </div>
  );
};
