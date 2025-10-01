/**
 * Featured Startup Card Component
 * Main card showing featured company in InvestorHero
 * Displays company background, icon, and confidence badge
 */

import { COLORS, TYPOGRAPHY } from "@/lib/constants";
import { FeaturedStartupCardProps } from "@/types/components";
import Image from "next/image";

export const FeaturedStartupCard = ({
  company,
  category,
  backgroundImage,
  icon,
  badge,
  className = "",
}: FeaturedStartupCardProps) => {
  return (
    <div
      className={`relative w-56 h-40 md:w-80 md:h-60 rounded-3xl overflow-hidden ${className}`}
      style={{ backgroundColor: COLORS.neutral.dark.lightGray1 }}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={`${company} background`}
        fill
        className="object-cover mix-blend-luminosity"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Top Left Badge */}
      <div
        className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-2 rounded-full"
        style={{ backgroundColor: COLORS.base.smiley }}
      >
        <Image src={badge.logo} alt="Logo" width={16} height={16} />
        <span
          className="text-black font-bold text-base"
          style={{ fontFamily: "var(--font-barrio)" }}
        >
          {badge.percentage}
        </span>
      </div>

      {/* Center Icon */}
      <div
        className="absolute top-[47px] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(20, 43, 28, 1)" }}
      >
        <Image
          src={icon}
          alt={`${company} icon`}
          width={40}
          height={40}
          style={{
            filter:
              "brightness(0) saturate(100%) invert(54%) sepia(96%) saturate(1559%) hue-rotate(88deg) brightness(101%) contrast(89%)",
          }}
        />
      </div>

      {/* Bottom Info Bar */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 py-3 flex flex-col"
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3
          className="text-white font-bold text-xl"
          style={{ fontFamily: TYPOGRAPHY.fontFamily.primary }}
        >
          {company}
        </h3>
        <p
          className="text-white text-sm"
          style={{ fontFamily: TYPOGRAPHY.fontFamily.primary }}
        >
          {category}
        </p>
      </div>
    </div>
  );
};
