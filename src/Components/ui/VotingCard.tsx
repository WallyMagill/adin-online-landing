import { IonIcon } from "@/Components/icons";
import { COLORS } from "@/lib/constants";
import { VotingCardProps } from "@/types/components";
import Image from "next/image";

export const VotingCard = ({
  companyName,
  companyIcon,
  question,
  options,
}: VotingCardProps) => {
  return (
    <div
      className="mt-10 bg-white rounded-3xl p-10"
      style={{ border: `1px solid ${COLORS.neutral.dark.lightGray1}` }}
    >
      {/* Company Header */}
      <div className="flex items-center gap-2">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(20, 43, 28, 1)" }}
        >
          <Image
            src={companyIcon}
            alt={companyName}
            width={16}
            height={16}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
            }}
          />
        </div>
        <h4 className="text-xl font-semibold">{companyName}</h4>
      </div>

      {/* Question */}
      <p className="text-sm mt-2 text-gray-600">{question}</p>

      {/* Vote Options */}
      <div className="flex flex-col gap-4 mt-6">
        {options.map((option) => (
          <button
            key={option.id}
            className="flex items-center gap-2 p-4 rounded-2xl transition-all"
            style={{
              backgroundColor: option.selected
                ? COLORS.neutral.dark.lightGray0
                : "transparent",
              border: option.selected
                ? `2px solid ${COLORS.accent.green}`
                : `1px solid ${COLORS.neutral.dark.lightGray1}`,
            }}
            aria-label={`Vote ${option.label}`}
          >
            <IonIcon
              name={option.icon}
              size={24}
              style={{
                filter: option.selected
                  ? "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)"
                  : undefined,
              }}
            />
            <span
              className={`text-base ${
                option.selected ? "font-bold" : "font-medium"
              }`}
            >
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
