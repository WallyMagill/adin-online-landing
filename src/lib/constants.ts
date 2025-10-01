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

export interface NavigationItem {
  name: string;
  href: string;
  icon: string;
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

/**
 * Gradient configurations for background elements
 * Rainbow gradient and fade masks
 */
export const GRADIENTS = {
  rainbow: {
    colors: [
      COLORS.accent.green, // #49C17A
      COLORS.accent.yellow, // #FFBF66
      COLORS.accent.orange, // #FF7A45
      COLORS.accent.red, // #F3655B
      COLORS.accent.purple, // #A97DF5
      COLORS.accent.blue, // #5CCEE5
    ],
    direction: "to right",
  },
  fade: {
    top: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 100%)",
    bottom:
      "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%)",
  },
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

/**
 * Header navigation items with icons
 * Used specifically in the Header component
 */
export const HEADER_NAV_ITEMS = [
  {
    name: "About",
    href: "/",
    icon: "information-circle",
  },
  {
    name: "Investors",
    href: "/investor",
    icon: "cash",
  },
  {
    name: "Members",
    href: "/member",
    icon: "people",
  },
  {
    name: "Founders",
    href: "/founder",
    icon: "construct",
  },
] as const;

/**
 * Footer navigation sections with icons
 * Organized by category for the footer layout
 */
export const FOOTER_NAV_SECTIONS = [
  {
    title: "ADIN for",
    icon: "people",
    links: [
      { label: "Investors", href: "/investor" },
      { label: "Members", href: "/member" },
      { label: "Founders", href: "/founder" },
    ],
  },
  {
    title: "Resources",
    icon: "shield-checkmark",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
] as const;

/**
 * Footer social links
 * External links and contact methods
 */
export const FOOTER_SOCIAL_LINKS = [
  {
    label: "X (Twitter)",
    href: "https://twitter.com/adin",
    icon: "/assets/images/Vector.svg",
  },
  {
    label: "Email",
    href: "mailto:contact@adin.com",
    icon: "mail",
  },
] as const;

/**
 * Footer company information
 * Static text content for footer
 */
export const FOOTER_COMPANY_INFO = {
  description:
    "ADIN was designed and developed by Tribute Labs in Brooklyn, NY.",
  copyright: "© 2025 Tribute Labs, Inc.",
} as const;

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
// HERO SECTION
// =============================================================================

/**
 * Category words for the About Hero section
 * Interactive words with colors for investment focus areas
 */
export const HERO_CATEGORIES = [
  { text: "3d printing", color: COLORS.interaction.yellowHover },
  { text: "blockchain", color: COLORS.interaction.greenHover },
  { text: "biotech", color: COLORS.accent.purple, default: true },
  { text: "creative tools", color: COLORS.interaction.orangeHover },
  { text: "medical", color: COLORS.interaction.yellowHover },
] as const;

/**
 * Content text for the About Hero section
 * Centralized heading and description text
 */
export const HERO_CONTENT = {
  heading: {
    line1: "Investing in early",
    line2: "stage ideas building for",
  },
  description:
    "ADIN backs teams building the future of the internet focusing on Seed Rounds to Series-A.",
  videoButton: {
    text: "Watch the Video",
    ariaLabel: "Watch introduction video",
  },
} as const;

// =============================================================================
// LIVE REPORTS SECTION
// =============================================================================

/**
 * Live reports data for the AboutLiveReport component
 * Contains company information, logos, and categories
 */
export const LIVE_REPORTS = [
  {
    id: 1,
    name: "New Range",
    category: "Automated Compliance",
    logo: "/assets/images/Frame.svg",
    logoClassName: "object-contain",
    bgColor: "#000000",
  },
  {
    id: 2,
    name: "Cactos",
    category: "Energy Systems",
    logo: "/assets/images/ReportIcon.png",
    logoClassName: "rounded-full",
    bgColor: "#365314", // lime-950
  },
  {
    id: 3,
    name: "OpenAI",
    category: "Machine Intelligence",
    logo: "/assets/images/ReportIconContainer.svg",
    logoClassName: "object-contain",
    bgColor: "#FFFFFF",
  },
] as const;

/**
 * Configuration for the Live Reports section
 * Header text, footer link, and display settings
 */
export const LIVE_REPORTS_CONFIG = {
  header: "Live Reports",
  footerText: "View All Recent Reports →",
  footerLink: "/reports",
} as const;

// =============================================================================
// HERO SECTIONS (INVESTOR, MEMBER, FOUNDER)
// =============================================================================

/**
 * Investor Hero content and configuration
 */
export const INVESTOR_HERO = {
  badge: "Investors",
  badgeColor: COLORS.accent.yellow,
  heading: {
    line1: "AI Will be the",
    line2: "Best Investor.",
  },
  description:
    "ADIN and its agents automate venture, from diligence to making investment decisions, with deals sourced by investors and the ADIN member network.",
  cta: {
    text: "Apply Now",
    href: "/apply",
    ariaLabel: "Apply now to become an investor with ADIN",
  },
} as const;

/**
 * Investor Hero vote data for the voting card
 */
export const INVESTOR_VOTE_DATA = [
  { name: "Scribe", icon: "/assets/images/Capa_1.svg", vote: "for" as const },
  {
    name: "Lane AI",
    icon: "/assets/images/chevron-collapse.svg",
    vote: "for" as const,
  },
  { name: "Sona", icon: "text", vote: "against" as const },
] as const;

/**
 * Investor Hero featured startup card data
 */
export const INVESTOR_FEATURED_CARD = {
  company: "Lane AI",
  category: "Logistics",
  backgroundImage: "/assets/images/eilis-garvey-dl_S0Kyq1Z0-unslash.jpg",
  icon: "/assets/images/chevron-collapse.svg",
  badge: {
    percentage: "100%",
    logo: "/assets/images/Logo.svg",
  },
} as const;

/**
 * Member Hero content and configuration
 */
export const MEMBER_HERO = {
  badge: "Members",
  badgeColor: COLORS.accent.green,
  heading: {
    line1: "Submit Deals,",
    line2: "Earn Carry.",
  },
  description:
    "Members earn a 10% carry on deals they submit that ADIN approves and successfully closes.",
  cta: {
    text: "Apply Now",
    href: "/apply",
    ariaLabel: "Apply now to become a member with ADIN",
  },
  video: {
    thumbnail: "/assets/images/VideoScreenshot.png",
    title: "Meet ADIN",
    label: "AI-natl",
    wordmark: "/assets/images/WordmarkWhite.svg",
  },
} as const;

/**
 * Founder Hero content and configuration
 */
export const FOUNDER_HERO = {
  badge: "Founders",
  badgeColor: COLORS.accent.green,
  heading: {
    line1: "Raise Smarter.",
    line2: "Get Backed by the Network.",
  },
  description:
    "Members earn a 10% carry on deals they submit that ADIN approves and successfully closes.",
  cta: {
    text: "Apply Now",
    href: "/apply",
    ariaLabel: "Apply now as a founder",
  },
} as const;

/**
 * Shared spacing constants for hero sections
 * Ensures consistent spacing across all three hero variants
 */
export const HERO_SPACING = {
  section:
    "min-h-screen w-full flex items-start justify-center px-6 pt-12 pb-20 md:pt-56 md:pb-24",
  container: "w-full max-w-7xl mx-auto",
  mobileGap: "gap-8",
  desktopGap: "gap-12",
  headingMargin: "mb-4",
  descriptionMargin: "mb-8",
  buttonGap: "gap-4",
} as const;

// =============================================================================
// SECTION SPACING (Content Sections)
// =============================================================================

/**
 * Section spacing for consistency across all content sections
 * Used in AboutSection1, AboutSection2, FAQSection, InvestSection
 */
export const SECTION_SPACING = {
  padding: "py-16 md:py-24",
  container: "max-w-7xl mx-auto px-6 md:px-12",
  headingMargin: "mb-6",
  descriptionMargin: "mb-12 md:mb-16",
  cardGap: "gap-6",
  heading: {
    mobile: "text-5xl",
    desktop: "md:text-6xl",
    styles: "font-semibold leading-tight md:leading-[64px] text-neutral-900",
  },
  description: {
    styles:
      "text-lg md:text-xl leading-relaxed md:leading-loose text-neutral-900 max-w-4xl",
  },
} as const;

// =============================================================================
// ABOUT CONTENT - CAROUSEL
// =============================================================================

/**
 * AboutCarousel slide data
 * Content for the rotating carousel on About page
 */
export const CAROUSEL_SLIDES = [
  {
    text: "ADIN is a global network of ",
    bold: "12,302 humans",
    rest: " sharing insights and knowledge as Investors, Members, & Founders.",
  },
  {
    text: "",
    bold: "Investors (Human LPs)",
    rest: " vote on proposed deals, guiding decision-making through collective insights, and over time enabling the fine tuning of models.",
  },
  {
    text: "Our team writes checks for ",
    bold: "$500k to $2 million",
    rest: ", partnering with visionary builders in connectivity, compute, crypto, and creative economies.",
  },
] as const;

/**
 * AboutCarousel configuration
 * Timing and animation settings
 */
export const CAROUSEL_CONFIG = {
  slideDuration: 5000, // 5 seconds
  progressUpdateInterval: 16, // ~60fps
} as const;

// =============================================================================
// ABOUT CONTENT - SECTION 1 (AI + HUMANS)
// =============================================================================

/**
 * AI Agents data for AboutSection1
 * Five agents that power ADIN's analysis
 */
export const AI_AGENTS = [
  {
    id: "network-hunter",
    icon: "/assets/images/profile-icon-yellow.svg",
    name: "The Network Hunter",
    description: "Find the crowd, fuel the movement.",
  },
  {
    id: "tech-oracle",
    icon: "/assets/images/profile-icon-red.svg",
    name: "The Tech Oracle",
    description: "Spotting tomorrow's breakthroughs, today.",
  },
  {
    id: "monopoly-maker",
    icon: "/assets/images/profile-icon-blue.svg",
    name: "The Monopoly Maker",
    description: "Backing the next market dominator.",
  },
  {
    id: "unit-master",
    icon: "/assets/images/profile-icon-green.svg",
    name: "The Unit Master",
    description: "Numbers first, profits always.",
  },
  {
    id: "value-guy",
    icon: "/assets/images/profile-icon-purple.svg",
    name: "The Value Guy",
    description: "Seeking hidden gems for lasting growth.",
  },
] as const;

/**
 * Human profile data for AboutSection1
 * Featured operator profile
 */
export const HUMAN_PROFILE = {
  name: "Ryan Hoover",
  title: "Founder, Product Hunt",
  image: "/assets/images/profile-headshot.png",
  verified: true,
} as const;

/**
 * Tribute Labs information
 * Company behind ADIN
 */
export const TRIBUTE_LABS = {
  name: "A Tribute Labs Project",
  locations: "NYC / LDN / CHI",
  logo: "/assets/images/tribute-labs-logo.svg",
  description:
    "Tribute Labs has supported over 30 communities, empowering more than 300 projects through technical guidance, infrastructure, and long-term partnership. Our mission is to help communities thrive by providing the tools and support they need to scale with confidence.",
} as const;

/**
 * AboutSection1 content
 * Heading and description text
 */
export const ABOUT_SECTION1 = {
  heading: {
    line1: "AI speed.",
    line2: "Human judgment.",
  },
  description:
    "ADIN pairs expert operators with intelligent agents to handle the heavy lifting of venture workflows. Faster analysis, tighter feedback loops, and more space for high-conviction bets.",
  cards: {
    agents: {
      poweredBy: "Powered by",
      title: "AI Agents",
    },
    humans: {
      supportedBy: "Supported by",
      title: "Humans",
    },
  },
} as const;

// =============================================================================
// ABOUT CONTENT - SECTION 2 (INVESTMENT STAGES)
// =============================================================================

/**
 * Investment stages data for AboutSection2
 * Pre-Seed, Seed, and A Round stage information
 */
export const INVESTMENT_STAGES = [
  {
    id: "pre-seed",
    label: "Pre-Seed",
    title: "Backed by Belief",
    description:
      "At pre-seed, conviction outweighs traction. ADIN provides governance capital and strategic support to founders with deep alignment and long-term thinking.",
    accentColor: COLORS.accent.purple,
  },
  {
    id: "seed",
    label: "Seed",
    title: "Culture-First Capital",
    description:
      "Seed-stage founders shape ADIN's future. Our community brings cultural context and dealflow, helping us invest in projects that align with our collective values.",
    accentColor: COLORS.accent.green,
  },
  {
    id: "a-round",
    label: "A-Round",
    title: "Early, Not Late",
    description:
      "We don't chase momentum—we help create it. ADIN's A-Round capital supports early traction and sharp execution, before the noise of growth-stage hype.",
    accentColor: COLORS.accent.purple,
  },
] as const;

/**
 * AboutSection2 content
 * Heading and description text
 */
export const ABOUT_SECTION2 = {
  heading: {
    line1: "Only Early.",
    line2: "Always Human.",
  },
  description:
    "ADIN backs bold ideas at the beginning, where conviction matters most. We invest exclusively at the earliest stages, combining operator insight and intelligent systems to move faster, with greater focus.",
} as const;

// =============================================================================
// FAQ SECTION
// =============================================================================

/**
 * FAQ data for FAQSection
 * Frequently asked questions and answers
 */
export const FAQ_DATA = [
  {
    question: "What is ADIN?",
    answer:
      "ADIN is an AI-first, community-powered venture DAO that combines a network of AI-agents with human insight to identify and fund the best early-stage startups. Its engine ingests a company's deck or website and, in minutes, produces a comprehensive report covering team background, market landscape, competitive positioning, and evaluations from a five-agent AI \"venture board.\" Investors review these data-rich findings and vote. By marrying AI's analytical speed with the collective wisdom of a diverse investor community, ADIN enables faster, more transparent capital deployment and broader access to high-potential deals.",
  },
  {
    question: "How is ADIN structured?",
    answer:
      "ADIN operates as a decentralized autonomous organization (DAO) with a hybrid governance model. The structure combines AI-driven analysis with community decision-making to ensure transparent and efficient investment processes.",
  },
  {
    question: "What industries does ADIN focus on?",
    answer:
      "ADIN focuses on early-stage startups across connectivity, compute, crypto, and creative economies. We seek bold ideas with strong operator insight and clear market potential.",
  },
  {
    question: "Will tokenization fit into ADIN's model?",
    answer:
      "Tokenization plays a key role in ADIN's governance and incentive structure, enabling transparent voting mechanisms and aligned participation across our investor community.",
  },
  {
    question: "How can I join the network?",
    answer:
      "You can join ADIN by applying through our member portal. We welcome investors, operators, and founders who share our vision for AI-enhanced venture capital.",
  },
  {
    question: "Who made ADIN?",
    answer:
      "ADIN was created by a team of experienced operators and technologists passionate about democratizing access to venture capital through AI and community governance.",
  },
] as const;

/**
 * FAQ configuration
 * Section title, description, and tab labels
 */
export const FAQ_CONFIG = {
  title: "Frequently asked questions.",
  description: "Here is a collection of what is asked most about ADIN.",
  tabs: ["General", "Pricing"],
} as const;

// =============================================================================
// INVEST SECTION
// =============================================================================

/**
 * Invest Section content
 * CTA section at the bottom of About page
 */
export const INVEST_SECTION = {
  title: "Invest with ADIN.",
  ctaText: "Early access for Tribute Labs Members",
  buttonText: "Get Started",
  waitlistPrefix: "Not a Tribute Labs Member? ",
  waitlistLink: "Join the Waitlist →",
} as const;

// =============================================================================
// INVESTOR SECTION 1 CONTENT
// =============================================================================

/**
 * InvestorSection1 content - all cards and data
 */
export const INVESTOR_SECTION1 = {
  heading: {
    line1: "Be more than an ",
    highlight: "Investor",
    line2: "Be a power player.",
  },
  description:
    "Accelerate your decision-making. Execute borderless investment opportunities.",
  cards: {
    voting: {
      title: "Real-Time voting.",
      description:
        "Make investment decisions faster with transparent, community-driven voting.",
      company: {
        name: "Lane AI",
        icon: "/assets/images/chevron-collapse.svg",
        question: "What's your vote to invest in Lane AI?",
      },
      options: [
        {
          id: "for",
          label: "For",
          icon: "add-circle",
          selected: true,
        },
        {
          id: "against",
          label: "Against",
          icon: "close-circle-outline",
          selected: false,
        },
        {
          id: "abstain",
          label: "Abstain",
          icon: "remove-circle-outline",
          selected: false,
        },
      ],
    },
    submitDeal: {
      title: "Submit a deal, earn 10% carry.",
      description:
        "Refer promising companies with just a link or deck. ADIN handles the rest.",
      searchPlaceholder: "lane.ai",
      analyzeText: "ADIN can analyze links from",
      platforms: [
        { name: "DocSend", icon: "/assets/images/DocSend.svg" },
        { name: "Notion", icon: "/assets/images/Notion.svg" },
        { name: "Figma", icon: "/assets/images/Figma.svg" },
        { name: "Google Docs", icon: "/assets/images/GoogleSlides.svg" },
      ],
    },
    dueDiligence: {
      title: "Expansive due diligence.",
      description:
        "ADIN's agents sweat the details. Technical, business, and beyond and in just 10 minutes.",
      currentPhase: "Product, Technical, and Business Analysis",
      status: "Gathering project documentation...",
      timeEstimate: "This usually takes me 5-10 minutes",
      progress: 50,
    },
    inbox: {
      title: "Deals hit your inbox.",
      description:
        "Stay in the loop with real-time deal alerts, term sheets, and wins.",
      desktopImage: "/assets/images/DesktopTemplate.png",
      notifications: [
        {
          title: "We're in for Atoms!",
          body: "We closed a $400K investment in Atoms' series A.",
        },
        {
          title: "Boom. Hello Portco.",
          body: "Ember Mechanics has sent their term sheet.",
        },
        {
          title: "And another one!",
          body: "Hands have been shook with Primo.",
        },
      ],
    },
    dealCloses: {
      badge: "Deal Closes",
      title: "We handle the backend.",
      description:
        "Diligence, SPV structuring, check writing, and updates all covered by Tribute Labs.",
      checklist: [
        "Wiring $120,000",
        "Cactos Counter Signs",
        "TL Signs Terms Sheet",
        "Terms Sheet Reviewed",
        "Alignment Call",
      ],
    },
  },
} as const;

// =============================================================================
// INVESTOR SECTION 2 CONTENT
// =============================================================================

/**
 * InvestorSection2 content - AI agents, network, deal flow
 */
export const INVESTOR_SECTION2 = {
  heading: {
    line1: "The precision of a machine.",
    line2: "The instincts of a community.",
  },
  description:
    "ADIN combines machine intelligence with the power of an expert hive mind.",
  cards: {
    network: {
      badge: "Private Network",
      title: "Access a handpicked investor network.",
      description:
        "Share insights and collaborate with other ADIN Investors on emerging tech and trends.",
      image: "/assets/images/private_network.png",
    },
    aiInvestor: {
      badge: "AI Investor",
      title: "An LLM built for venture-grade signal.",
      description:
        "ADIN's AI uncovers patterns in founders, markets, and deal flow helping you invest faster and smarter, grounded in data.",
      agents: [
        {
          id: "network-hunter",
          icon: "/assets/images/profile-icon-green.svg",
          name: "The Network Hunter",
          color: COLORS.accent.green,
        },
        {
          id: "tech-oracle",
          icon: "/assets/images/profile-icon-yellow.svg",
          name: "The Tech Oracle",
          color: COLORS.accent.yellow,
        },
        {
          id: "monopoly-maker",
          icon: "/assets/images/profile-icon-red.svg",
          name: "The Monopoly Maker",
          color: COLORS.accent.red,
        },
        {
          id: "unit-master",
          icon: "/assets/images/profile-icon-purple.svg",
          name: "The Unit Master",
          color: COLORS.accent.purple,
        },
        {
          id: "value-guy",
          icon: "/assets/images/profile-icon-blue.svg",
          name: "The Value Guy",
          color: COLORS.accent.blue,
        },
      ],
    },
    dealFlow: {
      badge: "Deal Flow",
      title: "Tap into the collective edge.",
      description:
        "The ADIN Member network surfaces deals from top founders, operators, and scouts you won't find anywhere else.",
      featuredCompany: {
        name: "Lane AI",
        icon: "/assets/images/chevron-collapse.svg",
        description:
          "AI-native trade intel with real-time alerts, smart reporting, and predictive insights for truly. global logistics. Your goods, on time.",
        image: "/assets/images/eilis-garvey-dl_S0Kyq1Z0-unslash.jpg",
        score: "99%",
      },
    },
  },
} as const;

// =============================================================================
// MEMBER SECTION 1 CONTENT
// =============================================================================

/**
 * MemberSection1 content - Deal calculator and comparison
 */
export const MEMBER_SECTION1 = {
  heading: {
    line1: "Become an ADIN Member.",
    line2: "Earn ",
    highlight: "5x more",
    line2End: ".",
  },
  description:
    "Compared to traditional Venture Capital scout programs, ADIN's payouts reward members for being apart of the network.",
  calculator: {
    title: "Deal Calculator",
    subtitle: "Adjust the exit value to see your potential earnings.",
    exitValueLabel: "Exit Value",
    sliderMin: 1000000,
    sliderMax: 100000000,
    sliderStep: 1000000,
    defaultValue: 50000000,
  },
  comparison: {
    standard: {
      badge: "The Industry Standard",
      earningsLabel: "Standard Earnings",
      carryPercentage: 0.02, // 2%
      features: [
        {
          icon: "trending-down",
          label: "Limited Carry Share",
          detail: "10% of 20% = 2% Total Profits",
        },
        {
          icon: "pie-chart",
          label: "Small Piece",
          detail: "Minimal Profit Participation",
        },
        {
          icon: "accessibility",
          label: "Finder Status",
          detail: 'You\'re a "finder", not a Partner.',
        },
      ],
      warning: {
        icon: "thumbs-down",
        text: "Limited Upside Potential",
        color: COLORS.accent.red,
      },
    },
    adin: {
      badge: "ADIN Exclusive",
      earningsLabel: "Earnings with ADIN",
      carryPercentage: 0.1, // 10%
      features: [
        {
          icon: "sparkles",
          label: "Premium Carry Share",
          detail: "50% of 20% = 10% Total Profits",
          iconColor: COLORS.accent.yellow,
        },
        {
          icon: "heart",
          label: "True Partnership",
          detail: "Genuine partner in the upside.",
          iconColor: COLORS.accent.red,
        },
        {
          icon: "people",
          label: "Full Support",
          detail: "Backed by ADIN's infrastructure.",
          iconColor: COLORS.accent.purple,
        },
      ],
      badges: [
        { icon: "checkmark-circle", text: "5x More Upside" },
        { icon: "checkmark-circle", text: "Full Support" },
        { icon: "checkmark-circle", text: "Shared Success" },
      ],
    },
  },
} as const;

// =============================================================================
// MEMBER SECTION 2 CONTENT
// =============================================================================

/**
 * MemberSection2 content - Bento grid with earn carry, network, and events
 */
export const MEMBER_SECTION2 = {
  heading: {
    line1: "Be more than a ",
    highlight: "Member",
    line2: "Be a deal maker.",
  },
  description:
    "Get rewarded for the deals you bring, with 10% carry and access to a private network.",
  cards: {
    earnCarry: {
      badge: "Earn 10% Carry",
      title: "Earn 10% Carry on the Deals You Source",
      description:
        "Introduce great startups, and if ADIN invests, you get a 10% share of the upside. No capital required.",
      companies: [
        {
          name: "Sona",
          category: "AI Platform",
          bgColor: COLORS.accent.purple,
        },
        {
          name: "Lane AI",
          category: "Logistics",
          image: "/assets/images/eilis-garvey-dl_S0Kyq1Z0-unslash.jpg",
          icon: "/assets/icons/Ionicons Designer Pack/chevron-collapse.svg",
          badge: "100%",
        },
      ],
    },
    privateNetwork: {
      badge: "Private Network",
      title: "Enter a Private Curated Community",
      description:
        "Join a vetted network of founders, operators, angels, and technologists handpicked for collaboration.",
      members: [
        {
          name: "Marvin McKinney",
          location: "New York, NY",
          image: "/assets/images/profile-headshot-3.png",
          bgColor: COLORS.accent.green,
        },
        {
          name: "Alice Schimer",
          location: "Austin, TX",
          image: "/assets/images/profile-headshot-1.png",
          bgColor: COLORS.accent.purple,
        },
        {
          name: "Marvin McKinney",
          location: "San Francisco, CA",
          image: "/assets/images/profile-headshot-2.png",
          bgColor: COLORS.accent.red,
        },
      ],
    },
    exclusiveAccess: {
      badge: "Exclusive Access",
      title: "Get access to exclusive events.",
      description:
        "Learn and collaborate. From deep-dives to market trend sessions, discover insights to help you move faster.",
      image: "/assets/images/iPhone-13.png",
    },
  },
} as const;

// =============================================================================
// MEMBER SECTION 3 CONTENT
// =============================================================================

/**
 * MemberSection3 content - Process steps for earning carry
 */
export const MEMBER_SECTION3 = {
  heading: "How to earn your 10% carry.",
  subheading: '"Carry" is a boomer term for "cash back".',
  logoImage: "/assets/images/Logo.svg",
  logoBgColor: "#FFD800",
  steps: [
    {
      number: 1,
      title: "Spot something great.",
      description:
        "You meet a founder or discover a startup you believe in. You don't need to be an expert or just have a strong conviction in the team.",
    },
    {
      number: 2,
      title: "Share the deal.",
      description:
        "Upload the link or deck. We'll ask a few quick questions (and confirm you can intro the founder if needed).",
    },
    {
      number: 3,
      title: "ADIN gets to work.",
      description:
        "Our AI dives in—analyzing the market, product, team, and traction. You'll see how your deal stacks up in real time.",
    },
    {
      number: 4,
      title: "Investors vote.",
      description:
        "Over the next few days, ADIN members review the deal and cast a simple yes or no vote. It keeps the process transparent and democratic.",
    },
    {
      number: 5,
      title: "ADIN connects.",
      description:
        "If the deal shows strong signals, the ADIN team reaches out to the founder and kicks off formal diligence.",
    },
    {
      number: 6,
      title: "Times goes by...",
      description:
        "If the deal you submitted has an exit event (like an acquisition or IPO), you get 10% of the return. Payouts are made in USDC or by mailed check.",
    },
  ],
} as const;

// =============================================================================
// FOUNDER SECTION 1 CONTENT
// =============================================================================

/**
 * FounderSection1 content - Bento grid with fundraising features
 */
export const FOUNDER_SECTION1 = {
  heading: {
    line1: "Not Just a Form.",
    line2: "A Fundraising ",
    highlight: "Engine",
    line2End: ".",
  },
  description: "Get real feedback, insights, and funding.",
  cards: {
    deckFeedback: {
      badge: "Deck Feedback",
      title: "Pitch deck breakdown.",
      description:
        "Receive feedback on your deck's clarity, design, and investor-readiness. ADIN makes sure you're ready for the room.",
      bgColor: COLORS.accent.red,
      desktopImage: "/assets/images/DesktopTemplate1.png",
      feedback: {
        sender: "ADIN",
        time: "5s ago",
        message:
          "The leap from ~$12M to ~$41M in one year (2027 → 2028) and then to $101M in 2029 may raise skepticism without detailed justification.",
        inputPlaceholder: "Ask ADIN",
        notificationCount: 3,
      },
    },
    pitchPractice: {
      badge: "Pitch Practice",
      title: "Practice with ADIN Live.",
      description:
        "Pitch in a live voice-chat interface. ADIN will ask real investor-style questions and give you a score to sharpen your story.",
      bgColor: COLORS.accent.green,
      image: "/assets/images/iPhone-13-1.png",
    },
    smartEvaluation: {
      badge: "Smart Evaluation",
      title: "ADIN will analyze & rate your idea.",
      description:
        "Upload your deck, GTM, or site. ADIN returns key takeaways, market insights, and competitive breakdown.",
      bgColor: COLORS.accent.purple,
      analysis: {
        company: "Lane AI",
        companyIcon: "/assets/images/chevron-collapse.svg",
        title: "Analyzing Lane AI",
        subtitle: "This may take a few minutes. Hold tight.",
        progress: 72,
        steps: [
          { label: "Identity Check Complete", completed: true },
          { label: "3 Employees Found", completed: true },
          { label: "Founder Background Check Done", completed: true },
          { label: "Reviewing competition...", completed: false },
        ],
        stats: {
          verifiedSources: 32,
          articles: 19,
          posts: 13,
        },
      },
    },
    pitchToCapital: {
      badge: "From Pitch to Capital",
      title: "Secure funding.",
      description:
        "Once approved, your startup enters ADIN's deal room. Investors commit, you choose who signs the check.",
      bgColor: COLORS.accent.orange,
      investors: [
        {
          name: "Alice Schimer",
          title: "Founder, Lane AI",
          image: "/assets/images/profile-headshot-1.png",
          bgColor: "#F8E6AE",
          checks: ["Reviewed LaneAI 2 days ago", "Specializes in early stage"],
        },
        {
          name: "ADIN",
          title: "+ The Investor Network",
          image: "/assets/images/Logo.svg",
          bgColor: "#FFB366",
          checks: ["100% Confidence Score", "Approved by ADIN's Investors"],
        },
        {
          name: "Jamie Delgado",
          title: "GP, Clark Ventures",
          image: "/assets/images/profile-headshot-4.png",
          bgColor: "#F8E6AE",
          checks: [
            "Follows your Angel investor, Luke T",
            "Invests in Freight and Logistics",
          ],
        },
      ],
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
  GRADIENTS,
  TYPOGRAPHY,
  NAV_ITEMS,
  HEADER_NAV_ITEMS,
  FOOTER_NAV_SECTIONS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_COMPANY_INFO,
  ICONS,
  ICON_SIZES,
  ASSETS,
  BUTTON_VARIANTS,
  STYLING,
  BREAKPOINTS,
  LAYOUT,
  HERO_CATEGORIES,
  HERO_CONTENT,
  LIVE_REPORTS,
  LIVE_REPORTS_CONFIG,
  INVESTOR_HERO,
  INVESTOR_VOTE_DATA,
  INVESTOR_FEATURED_CARD,
  MEMBER_HERO,
  FOUNDER_HERO,
  HERO_SPACING,
  SECTION_SPACING,
  CAROUSEL_SLIDES,
  CAROUSEL_CONFIG,
  AI_AGENTS,
  HUMAN_PROFILE,
  TRIBUTE_LABS,
  ABOUT_SECTION1,
  INVESTMENT_STAGES,
  ABOUT_SECTION2,
  FAQ_DATA,
  FAQ_CONFIG,
  INVEST_SECTION,
  INVESTOR_SECTION1,
  INVESTOR_SECTION2,
  MEMBER_SECTION1,
  MEMBER_SECTION2,
  MEMBER_SECTION3,
  FOUNDER_SECTION1,
} as const;
