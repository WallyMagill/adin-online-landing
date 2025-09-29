import { COLORS } from "@/lib/constants";
import React from "react";

interface BackgroundGradientProps {
  position: "top" | "bottom";
  className?: string;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  position,
  className = "",
}) => {
  // Define the gradient colors in the exact order specified
  const gradientColors = [
    COLORS.accent.green,   // #49C17A
    COLORS.accent.yellow,  // #FFBF66
    COLORS.accent.orange,  // #FF7A45
    COLORS.accent.red,     // #F3655B
    COLORS.accent.purple,  // #A97DF5
    COLORS.accent.blue,    // #5CCEE5
  ];

  // Create the horizontal rainbow gradient
  const rainbowGradient = `linear-gradient(to right, ${gradientColors.join(", ")})`;

  // Create a much softer vertical fade mask
  const verticalFade = position === "top"
    ? "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 100%)"
    : "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%)";

  // Determine positioning
  const positionStyles = position === "top" ? "top-0" : "bottom-0";

  return (
    <div
      className={`
        absolute ${positionStyles} left-0 w-full
        h-[80px] md:h-[120px] lg:h-[150px]
        pointer-events-none
        z-10
        ${className}
      `}
      style={{
        background: rainbowGradient,
        // Use mask to create the fade effect
        WebkitMaskImage: verticalFade,
        maskImage: verticalFade,
      }}
    />
  );
};

export default BackgroundGradient;
