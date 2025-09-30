import { GRADIENTS } from "@/lib/constants";
import { BackgroundGradientProps } from "@/types/components";
import React, { useMemo } from "react";

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  position,
  className = "",
}) => {
  const rainbowGradient = useMemo(
    () =>
      `linear-gradient(${
        GRADIENTS.rainbow.direction
      }, ${GRADIENTS.rainbow.colors.join(", ")})`,
    []
  );

  const verticalFade = useMemo(() => GRADIENTS.fade[position], [position]);
  const positionStyles = position === "top" ? "top-0" : "bottom-0";

  return (
    <div
      className={`absolute ${positionStyles} left-0 w-full h-[80px] md:h-[120px] lg:h-[150px] pointer-events-none z-10 ${className}`}
      style={{
        background: rainbowGradient,
        WebkitMaskImage: verticalFade,
        maskImage: verticalFade,
      }}
    />
  );
};

export default BackgroundGradient;
