import { IonIcon } from "@/Components/icons";
import { ChevronDownProps } from "@/types/components";
import React from "react";

/**
 * ChevronDown Component
 * Animated scroll indicator with three stacked chevron icons
 * Uses the float animation defined in globals.css
 */
const ChevronDown: React.FC<ChevronDownProps> = ({
  onClick,
  className = "",
}) => {
  const chevrons = [{ opacity: 0.3 }, { opacity: 0.6 }, { opacity: 1.0 }];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll to content"
      className={`
        absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 z-20
        w-12 h-12 flex flex-col items-center justify-center -space-y-3
        cursor-pointer
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
        hover:scale-105 hover:opacity-80 active:scale-95
        transition-all duration-300 ease-in-out
        animate-[float_3s_ease-in-out_infinite] drop-shadow-lg
        ${className}
      `}
    >
      {chevrons.map((chevron, index) => (
        <IonIcon
          key={index}
          name="chevron-down"
          size={24}
          style={{ opacity: chevron.opacity }}
        />
      ))}
    </button>
  );
};

export default ChevronDown;
