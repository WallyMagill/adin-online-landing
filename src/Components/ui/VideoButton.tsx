/**
 * Video Button Component
 * Specialized button for triggering video playback
 * Features play icon, logo background, and gradient text
 */

import { IonIcon } from "@/Components/icons";
import { ASSETS, COLORS, HERO_CONTENT } from "@/lib/constants";
import { VideoButtonProps } from "@/types/components";
import Image from "next/image";

export const VideoButton = ({ onClick, className = "" }: VideoButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-4 pl-2 pr-8 py-1.5 md:pl-2 md:pr-10 md:py-2 rounded-2xl transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer ${className}`}
      style={{ backgroundColor: COLORS.accent.cream }}
      aria-label={HERO_CONTENT.videoButton.ariaLabel}
    >
      {/* Play Button with Logo Background */}
      <div
        className="relative w-16 h-9 md:w-20 md:h-11 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: COLORS.base.smiley }}
      >
        {/* Background Logo - subtle and centered */}
        <Image
          src={ASSETS.svg.logo}
          alt=""
          width={32}
          height={32}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 opacity-80"
        />

        {/* Play Icon - overlaid on top */}
        <IonIcon
          name="play"
          size={24}
          className="relative z-10 w-5 h-5 md:w-6 md:h-6"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Text with radial gradient */}
      <span
        className="text-base md:text-lg font-medium"
        style={{
          background: `radial-gradient(circle, ${COLORS.base.black} 0%, ${COLORS.neutral.dark.lightGray2} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {HERO_CONTENT.videoButton.text}
      </span>
    </button>
  );
};
