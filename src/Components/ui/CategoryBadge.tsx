/**
 * Category Badge Component
 * Reusable badge for Investors/Members/Founders categories
 * Used across all hero sections for consistent styling
 */

import { COLORS, TYPOGRAPHY } from "@/lib/constants";
import { CategoryBadgeProps } from "@/types/components";

export const CategoryBadge = ({
  label,
  borderColor,
  className = "",
}: CategoryBadgeProps) => {
  return (
    <button
      className={`inline-flex items-center px-6 py-3 rounded-full border transition-transform duration-200 hover:scale-105 active:scale-95 bg-transparent ${className}`}
      style={{ borderColor }}
      type="button"
      aria-label={`${label} category`}
    >
      <span
        className="font-medium text-base"
        style={{
          color: COLORS.neutral.dark.darkGray1,
          fontFamily: TYPOGRAPHY.fontFamily.primary,
          fontWeight: TYPOGRAPHY.fontWeights.medium,
        }}
      >
        {label}
      </span>
    </button>
  );
};
