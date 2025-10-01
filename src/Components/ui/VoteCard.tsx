/**
 * Vote Card Component
 * Individual vote item for InvestorHero voting interface
 * Shows company info and vote status (For/Against)
 */

import { IonIcon } from "@/Components/icons";
import { COLORS, TYPOGRAPHY } from "@/lib/constants";
import { VoteCardProps } from "@/types/components";
import Image from "next/image";

export const VoteCard = ({ item, onClick }: VoteCardProps) => {
  return (
    <div
      className="flex items-center justify-between p-2 md:p-4 rounded-2xl bg-white border cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.01]"
      style={{ borderColor: COLORS.neutral.dark.lightGray1 }}
      role="button"
      tabIndex={0}
      aria-label={`Vote item for ${item.name} - ${item.vote}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {/* Left: Company info */}
      <div className="flex items-center gap-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            backgroundColor:
              item.vote === "for" ? "rgba(20, 43, 28, 1)" : COLORS.base.black,
          }}
        >
          {item.icon === "text" ? (
            <span className="text-white text-[10px] font-bold">SONA</span>
          ) : (
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              width={16}
              height={16}
              style={{
                filter:
                  item.name === "Lane AI"
                    ? "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)"
                    : "none",
              }}
            />
          )}
        </div>
        <span
          className="font-bold text-lg md:text-xl"
          style={{
            color: COLORS.base.black,
            fontFamily: TYPOGRAPHY.fontFamily.primary,
          }}
        >
          {item.name}
        </span>
      </div>

      {/* Right: Vote status */}
      <div className="flex items-center gap-2">
        <span
          className="font-medium text-sm md:text-base"
          style={{
            color: COLORS.base.black,
            fontFamily: TYPOGRAPHY.fontFamily.primary,
          }}
        >
          {item.vote === "for" ? "For" : "Against"}
        </span>
        <IonIcon
          name={item.vote === "for" ? "add-circle" : "close-circle"}
          size={24}
          style={{
            filter:
              item.vote === "for"
                ? "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)"
                : "brightness(0) saturate(100%) invert(36%) sepia(89%) saturate(2095%) hue-rotate(342deg) brightness(95%) contrast(95%)",
          }}
        />
      </div>
    </div>
  );
};
