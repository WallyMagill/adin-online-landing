/**
 * Navigation Component
 * Desktop pill-style navigation bar
 * Centered in the header with rounded container
 */

"use client";

import { COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { NavigationProps } from "@/types/components";
import React from "react";
import NavigationItem from "./NavigationItem";

const Navigation: React.FC<NavigationProps> = ({
  items,
  currentPath,
  className = "",
}) => {
  /**
   * Determines if a navigation item is active
   * Special handling for the home page (exact match)
   */
  const isActive = (href: string) => {
    return href === "/" ? currentPath === "/" : currentPath.startsWith(href);
  };

  return (
    <nav
      className={cn(
        "hidden lg:flex items-center gap-1 px-1 py-1 rounded-[70px]",
        "absolute left-1/2 transform -translate-x-1/2",
        className
      )}
      style={{
        backgroundColor: COLORS.base.pureWhite,
      }}
      aria-label="Main navigation"
    >
      {items.map((item) => {
        const active = isActive(item.href);
        return (
          <NavigationItem
            key={item.name}
            item={item}
            isActive={active}
            isMobile={false}
          />
        );
      })}
    </nav>
  );
};

export default Navigation;
