/**
 * NavigationItem Component
 * Individual navigation link with icon
 * Works for both desktop and mobile layouts
 */

"use client";

import { getIconComponent } from "@/Components/icons";
import { COLORS, TYPOGRAPHY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { NavigationItemProps } from "@/types/components";
import Link from "next/link";
import React from "react";

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  isMobile = false,
  onClick,
}) => {
  // Get the appropriate icon component
  const IconComponent = getIconComponent(item.icon);

  // Determine icon size based on mobile or desktop
  const iconSize = isMobile ? 20 : 16;

  // Determine active color
  const activeColor = isActive
    ? COLORS.accent.purple
    : COLORS.neutral.dark.darkGray1;

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center transition-all duration-250",
        // Desktop styles
        !isMobile && [
          "gap-2 px-6 py-3.5 rounded-[80px]",
          "hover:bg-gray-50",
          isActive ? "bg-white border border-purple-400" : "bg-transparent",
        ],
        // Mobile styles
        isMobile && [
          "gap-3 px-4 py-3 rounded-lg mb-2",
          isActive
            ? "bg-purple-50 border border-purple-200"
            : "hover:bg-gray-50",
        ]
      )}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {/* Icon */}
      <IconComponent
        size={iconSize}
        className="flex-shrink-0"
        style={{ color: activeColor }}
      />

      {/* Text */}
      <span
        className={cn(
          "font-medium leading-tight",
          isMobile ? "text-base" : "text-base"
        )}
        style={{
          color: activeColor,
          fontFamily: TYPOGRAPHY.fontFamily.primary,
        }}
      >
        {item.name}
      </span>
    </Link>
  );
};

export default NavigationItem;
