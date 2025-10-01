import { IonIcon } from "@/Components/icons";
import { COLORS } from "@/lib/constants";
import { DealSubmitCardProps } from "@/types/components";
import Image from "next/image";

export const DealSubmitCard = ({
  searchPlaceholder,
  analyzeText,
  platforms,
}: DealSubmitCardProps) => {
  return (
    <div
      className="mt-10 rounded-3xl p-10"
      style={{
        backgroundColor: `${COLORS.neutral.light.light2}26`, // 15% opacity
        border: `1px solid ${COLORS.neutral.light.light2}`,
      }}
    >
      {/* Search Bar */}
      <div
        className="flex items-center justify-between bg-white rounded-full px-4 py-1"
        style={{
          border: `1px solid ${COLORS.accent.purple}`,
          boxShadow: `0 0 20px ${COLORS.accent.purple}40`,
        }}
      >
        <div className="flex items-center px-3 py-2">
          <span className="text-base font-bold">{searchPlaceholder}</span>
          <span
            className="inline-block w-0.5 h-5 ml-1 animate-pulse"
            style={{ backgroundColor: COLORS.accent.purple }}
          />
        </div>
        <div className="flex items-center gap-2">
          <IonIcon name="close-outline" size={24} className="md:hidden" />
          <IonIcon name="close-outline" size={24} className="hidden md:block" />
          <button
            className="hidden md:block px-4 py-2 rounded-full text-white text-sm"
            style={{ backgroundColor: COLORS.accent.purple }}
          >
            Submit
          </button>
        </div>
      </div>

      {/* Platform Icons */}
      <div className="mt-6">
        <p className="text-sm text-gray-600 mb-4 text-center">{analyzeText}</p>
        <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:items-center md:justify-center md:gap-6">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: COLORS.neutral.dark.lightGray0 }}
              >
                <Image
                  src={platform.icon}
                  alt={platform.name}
                  width={16}
                  height={16}
                />
              </div>
              <span className="text-xs text-gray-600">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
