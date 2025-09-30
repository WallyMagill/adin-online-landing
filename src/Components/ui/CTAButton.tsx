/**
 * CTA Button Component
 * Reusable "Apply Now" button with icon
 * Used across all hero sections with accent color borders
 */

import { COLORS, TYPOGRAPHY } from "@/lib/constants";
import { CTAButtonProps } from "@/types/components";
import Link from "next/link";

export const CTAButton = ({
  text,
  href,
  borderColor,
  ariaLabel,
  className = "",
}: CTAButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
      style={{
        backgroundColor: COLORS.base.black,
        border: `1px solid ${borderColor}`,
      }}
      aria-label={ariaLabel}
    >
      <span
        className="font-medium text-base"
        style={{
          color: COLORS.base.pureWhite,
          fontFamily: TYPOGRAPHY.fontFamily.primary,
          fontWeight: TYPOGRAPHY.fontWeights.medium,
        }}
      >
        {text}
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        style={{ color: borderColor }}
      >
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};
