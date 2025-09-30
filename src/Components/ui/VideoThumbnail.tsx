/**
 * Video Thumbnail Component
 * Video preview with play button for MemberHero
 * Shows thumbnail image with title, label, wordmark, and play button
 */

import { IonIcon } from "@/Components/icons";
import { COLORS, TYPOGRAPHY } from "@/lib/constants";
import { VideoThumbnailProps } from "@/types/components";
import Image from "next/image";

export const VideoThumbnail = ({
  thumbnail,
  title,
  label,
  wordmark,
  onPlay,
  className = "",
}: VideoThumbnailProps) => {
  return (
    <div
      className={`relative w-64 h-48 md:w-full md:aspect-video rounded-3xl overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <Image
        src={thumbnail}
        alt={`${title} video preview`}
        fill
        className="object-cover scale-110"
      />

      {/* Top Left Text */}
      <div className="absolute top-4 md:top-6 left-4 md:left-6">
        <h3
          className="text-white font-medium text-lg md:text-xl"
          style={{ fontFamily: TYPOGRAPHY.fontFamily.primary }}
        >
          {title}
        </h3>
      </div>

      {/* Top Right Label */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6">
        <span
          className="text-white font-medium text-xs md:text-sm"
          style={{ fontFamily: TYPOGRAPHY.fontFamily.primary }}
        >
          {label}
        </span>
      </div>

      {/* Bottom Left Logo */}
      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
        <Image
          src={wordmark}
          alt="ADIN Wordmark"
          width={120}
          height={40}
          className="w-auto h-6 md:h-10"
        />
      </div>

      {/* Center Play Button */}
      <button
        onClick={onPlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{
          backgroundColor: COLORS.base.pureWhite,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
        aria-label={`Play video about ${title}`}
        type="button"
      >
        <IonIcon
          name="play-circle"
          size={80}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(78%) sepia(46%) saturate(556%) hue-rotate(338deg) brightness(102%) contrast(101%)",
          }}
        />
      </button>
    </div>
  );
};
