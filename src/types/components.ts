/**
 * Shared component prop types
 * Centralized type definitions for better type safety
 */

import { NavigationItem } from "@/lib/constants";

/**
 * Header component props
 */
export interface HeaderProps {
  className?: string;
}

/**
 * Navigation component props
 * Used for the desktop pill-style navigation
 */
export interface NavigationProps {
  items: readonly NavigationItem[];
  currentPath: string;
  className?: string;
}

/**
 * Individual navigation item props
 * Works for both desktop and mobile layouts
 */
export interface NavigationItemProps {
  item: NavigationItem;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

/**
 * Icon component props
 */
export interface IconProps {
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * Footer component props
 */
export interface FooterProps {
  className?: string;
}

/**
 * Footer navigation section props
 */
export interface FooterNavSectionProps {
  title: string;
  icon: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}

/**
 * Background gradient component props
 */
export interface BackgroundGradientProps {
  position: "top" | "bottom";
  className?: string;
}

/**
 * ChevronDown component props
 */
export interface ChevronDownProps {
  onClick: () => void;
  className?: string;
}
