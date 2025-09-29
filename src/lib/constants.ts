/**
 * Design Constants for ADIN Landing Page
 * Extracted from Figma design system
 * Used throughout the Next.js 15 + TypeScript + Tailwind CSS v4 project
 */

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface ColorPalette {
  accent: {
    blue: string;
    cream: string;
    green: string;
    orange: string;
    purple: string;
    red: string;
    yellow: string;
  };
  base: {
    black: string;
    pureBlack: string;
    pureWhite: string;
    smiley: string;
  };
  interaction: {
    greenHover: string;
    orangeHover: string;
    yellowHover: string;
  };
  neutral: {
    dark: {
      darkGray1: string;
      lightGray0: string;
      lightGray1: string;
      lightGray2: string;
    };
    light: {
      light1: string;
      light2: string;
    };
  };
}

export interface TypographyConfig {
  fontFamily: {
    primary: string;
  };
  fontWeights: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
  };
  lineHeight: {
    tight: string;
    normal: string;
    relaxed: string;
  };
}

export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

export interface ButtonVariant {
  background: string;
  backgroundHover: string;
  text: string;
  border?: string;
  borderHover?: string;
}

export interface IconName {
  INFORMATION_CIRCLE: string;
  CASH: string;
  PEOPLE: string;
  CONSTRUCT_OUTLINE: string;
  PLAY: string;
  CHEVRON_DOWN: string;
}

// =============================================================================
// COLOR SYSTEM
// =============================================================================

/**
 * Complete color palette from Figma design system
 * Organized by semantic categories for easy maintenance
 */
export const COLORS: ColorPalette = {
  accent: {
    blue: "#5CCEE5",
    cream: "#FCF0D1",
    green: "#49C17A",
    orange: "#FF7A45",
    purple: "#A97DF5",
    red: "#F3655B",
    yellow: "#FFBF66",
  },
  base: {
    black: "#111111",
    pureBlack: "#000000",
    pureWhite: "#FFFFFF",
    smiley: "#FFD800",
  },
  interaction: {
    greenHover: "#5ED890",
    orangeHover: "#FF9066",
    yellowHover: "#FFD17A",
  },
  neutral: {
    dark: {
      darkGray1: "#4D4D4D",
      lightGray0: "#FAFAFA",
      lightGray1: "#E0E0E0",
      lightGray2: "#B3B3B3",
    },
    light: {
      light1: "#F3EAFD",
      light2: "#E1D1FA",
    },
  },
};

/**
 * Semantic color mappings for common use cases
 */
export const SEMANTIC_COLORS = {
  primary: COLORS.accent.blue,
  secondary: COLORS.accent.purple,
  success: COLORS.accent.green,
  warning: COLORS.accent.yellow,
  error: COLORS.accent.red,
  info: COLORS.accent.blue,
  background: COLORS.base.pureWhite,
  backgroundAlt: COLORS.neutral.dark.lightGray0,
  text: COLORS.base.black,
  textSecondary: COLORS.neutral.dark.darkGray1,
  textMuted: COLORS.neutral.dark.lightGray2,
  border: COLORS.neutral.dark.lightGray1,
  borderLight: COLORS.neutral.dark.lightGray0,
} as const;

// =============================================================================
// TYPOGRAPHY
// =============================================================================

/**
 * Typography system based on Inter font family
 * Includes font weights, sizes, and line heights
 */
export const TYPOGRAPHY: TypographyConfig = {
  fontFamily: {
    primary:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
};

// =============================================================================
// NAVIGATION
// =============================================================================

/**
 * Navigation items for all 4 pages
 * Used in header navigation and mobile menu
 */
export const NAV_ITEMS: NavItem[] = [
  {
    name: "Home",
    href: "/",
    description: "Main landing page",
  },
  {
    name: "Investor",
    href: "/investor",
    description: "Information for investors",
  },
  {
    name: "Member",
    href: "/member",
    description: "Member portal and benefits",
  },
  {
    name: "Founder",
    href: "/founder",
    description: "Resources for founders",
  },
] as const;

// =============================================================================
// ICONS
// =============================================================================

/**
 * Ion Icons used throughout the application
 * Consistent naming convention for easy reference
 */
export const ICONS: IconName = {
  INFORMATION_CIRCLE: "information-circle",
  CASH: "cash",
  PEOPLE: "people",
  CONSTRUCT_OUTLINE: "construct",
  PLAY: "play",
  CHEVRON_DOWN: "chevron-down",
} as const;

/**
 * Icon sizes for consistent usage
 */
export const ICON_SIZES = {
  xs: "1rem", // 16px
  sm: "1.25rem", // 20px
  md: "1.5rem", // 24px
  lg: "2rem", // 32px
  xl: "2.5rem", // 40px
  "2xl": "3rem", // 48px
} as const;

// =============================================================================
// ASSETS
// =============================================================================

/**
 * Asset paths for images and SVGs
 * Centralized for easy maintenance
 */
export const ASSETS = {
  images: {
    reportIcon: "/assets/images/Report Icon.png",
  },
  svg: {
    logo: "/assets/images/Logo.svg",
    wordmark: "/assets/images/Wordmark.svg",
    frame: "/assets/images/Frame.svg",
    reportIconContainer: "/assets/images/Report Icon Container.svg",
  },
} as const;

// =============================================================================
// BUTTON VARIANTS
// =============================================================================

/**
 * Button style variants using the color system
 * Provides consistent button styling across components
 */
export const BUTTON_VARIANTS: Record<string, ButtonVariant> = {
  primary: {
    background: COLORS.accent.blue,
    backgroundHover: COLORS.accent.purple,
    text: COLORS.base.pureWhite,
  },
  secondary: {
    background: COLORS.accent.purple,
    backgroundHover: COLORS.accent.blue,
    text: COLORS.base.pureWhite,
  },
  success: {
    background: COLORS.accent.green,
    backgroundHover: COLORS.interaction.greenHover,
    text: COLORS.base.pureWhite,
  },
  warning: {
    background: COLORS.accent.yellow,
    backgroundHover: COLORS.interaction.yellowHover,
    text: COLORS.base.black,
  },
  danger: {
    background: COLORS.accent.red,
    backgroundHover: COLORS.accent.orange,
    text: COLORS.base.pureWhite,
  },
  outline: {
    background: "transparent",
    backgroundHover: COLORS.neutral.dark.lightGray0,
    text: COLORS.accent.blue,
    border: COLORS.accent.blue,
    borderHover: COLORS.accent.purple,
  },
  ghost: {
    background: "transparent",
    backgroundHover: COLORS.neutral.dark.lightGray0,
    text: COLORS.base.black,
  },
} as const;

// =============================================================================
// COMPONENT STYLING
// =============================================================================

/**
 * Common styling constants for components
 * Ensures consistency across the application
 */
export const STYLING = {
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "2.5rem", // 40px
    "3xl": "3rem", // 48px
    "4xl": "4rem", // 64px
    "5xl": "5rem", // 80px
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  transitions: {
    fast: "150ms ease-in-out",
    normal: "250ms ease-in-out",
    slow: "350ms ease-in-out",
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

/**
 * Responsive breakpoints for consistent media queries
 * Matches Tailwind CSS default breakpoints
 */
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// =============================================================================
// LAYOUT CONSTANTS
// =============================================================================

/**
 * Layout-specific constants for consistent spacing and sizing
 */
export const LAYOUT = {
  header: {
    height: "4rem", // 64px
    heightMobile: "3.5rem", // 56px
  },
  footer: {
    height: "8rem", // 128px
  },
  container: {
    maxWidth: "1280px",
    padding: {
      mobile: "1rem", // 16px
      tablet: "2rem", // 32px
      desktop: "3rem", // 48px
    },
  },
  section: {
    padding: {
      y: {
        mobile: "3rem", // 48px
        desktop: "5rem", // 80px
      },
    },
  },
} as const;

// =============================================================================
// EXPORTS
// =============================================================================

/**
 * Default export with all constants grouped
 */
export default {
  COLORS,
  SEMANTIC_COLORS,
  TYPOGRAPHY,
  NAV_ITEMS,
  ICONS,
  ICON_SIZES,
  ASSETS,
  BUTTON_VARIANTS,
  STYLING,
  BREAKPOINTS,
  LAYOUT,
} as const;
