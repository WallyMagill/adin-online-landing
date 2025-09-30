import { IonIcon } from "@/Components/icons";
import { COLORS } from "@/lib/constants";
import { ChecklistItemProps } from "@/types/components";

export const ChecklistItem = ({
  task,
  completed = true,
}: ChecklistItemProps) => {
  return (
    <div
      className="flex items-center justify-between p-4 rounded-2xl"
      style={{ backgroundColor: "rgba(73, 193, 122, 0.04)" }}
    >
      <span className="text-base font-bold">{task}</span>
      <div className="flex items-center gap-2">
        <span
          className="text-sm font-medium"
          style={{ color: COLORS.accent.green }}
        >
          {completed ? "Complete" : "Pending"}
        </span>
        <IonIcon
          name="checkmark-circle"
          size={24}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
          }}
        />
      </div>
    </div>
  );
};
