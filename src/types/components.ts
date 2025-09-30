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

// =============================================================================
// ABOUT HERO SECTION
// =============================================================================

/**
 * AboutHero component props
 */
export interface AboutHeroProps {
  onVideoClick?: () => void;
  className?: string;
}

/**
 * Category word configuration
 * Used in the interactive hero section
 */
export interface CategoryWord {
  text: string;
  color: string;
  default?: boolean;
}

/**
 * Video button component props
 */
export interface VideoButtonProps {
  onClick?: () => void;
  className?: string;
}

/**
 * Category words component props
 * Handles the interactive word selection in hero section
 */
export interface CategoryWordsProps {
  words: readonly CategoryWord[];
  selectedWord: string;
  onWordClick: (word: string) => void;
  onWordHover?: (word: string | null) => void;
  isMobile?: boolean;
}

// =============================================================================
// LIVE REPORTS SECTION
// =============================================================================

/**
 * Live reports component props
 */
export interface LiveReportsProps {
  className?: string;
}

// =============================================================================
// CARD COMPONENT
// =============================================================================

/**
 * Card component props
 * Extended by the Card component with CVA variants
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "report" | "feature" | "profile";
  hover?: boolean;
}

// =============================================================================
// HERO COMPONENTS (INVESTOR, MEMBER, FOUNDER)
// =============================================================================

/**
 * Hero content configuration
 * Shared structure for all hero variants
 */
export interface HeroContent {
  badge: string;
  badgeColor: string;
  heading: {
    line1: string;
    line2: string;
  };
  description: string;
  cta: {
    text: string;
    href: string;
    ariaLabel: string;
  };
}

/**
 * Category badge component props
 * Used for Investors/Members/Founders badges
 */
export interface CategoryBadgeProps {
  label: string;
  borderColor: string;
  className?: string;
}

/**
 * CTA button component props
 * Used for "Apply Now" buttons with icons
 */
export interface CTAButtonProps {
  text: string;
  href: string;
  borderColor: string;
  ariaLabel?: string;
  className?: string;
}

// =============================================================================
// INVESTOR HERO COMPONENTS
// =============================================================================

/**
 * Vote item data structure
 * For the voting card in InvestorHero
 */
export interface VoteItem {
  name: string;
  icon: string;
  vote: "for" | "against";
}

/**
 * Vote card component props
 */
export interface VoteCardProps {
  item: VoteItem;
  onClick?: () => void;
}

/**
 * Featured startup card component props
 * For the main card in InvestorHero
 */
export interface FeaturedStartupCardProps {
  company: string;
  category: string;
  backgroundImage: string;
  icon: string;
  badge: {
    percentage: string;
    logo: string;
  };
  className?: string;
}

// =============================================================================
// MEMBER HERO COMPONENTS
// =============================================================================

/**
 * Video thumbnail component props
 * For the video preview in MemberHero
 */
export interface VideoThumbnailProps {
  thumbnail: string;
  title: string;
  label: string;
  wordmark: string;
  onPlay?: () => void;
  className?: string;
}

// =============================================================================
// ABOUT CONTENT COMPONENTS
// =============================================================================

/**
 * Carousel slide data structure
 */
export interface CarouselSlide {
  text: string;
  bold: string;
  rest: string;
}

/**
 * Carousel component props
 */
export interface CarouselProps {
  slides?: readonly CarouselSlide[];
  slideDuration?: number;
  progressUpdateInterval?: number;
}

/**
 * AI Agent data structure
 */
export interface Agent {
  id: string;
  icon: string;
  name: string;
  description: string;
}

/**
 * Agent card component props
 */
export interface AgentCardProps {
  agent: Agent;
  showDivider?: boolean;
}

/**
 * Human profile data structure
 */
export interface HumanProfile {
  name: string;
  title: string;
  image: string;
  verified: boolean;
}

/**
 * Profile card component props
 */
export interface ProfileCardProps {
  profile: HumanProfile;
}

/**
 * Investment stage data structure
 */
export interface InvestmentStage {
  id: string;
  label: string;
  title: string;
  description: string;
  accentColor: string;
}

/**
 * Stage card component props
 */
export interface StageCardProps {
  stage: InvestmentStage;
}

/**
 * FAQ item data structure
 */
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * FAQ item component props
 */
export interface FAQItemProps {
  faq: FAQItem;
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
}

/**
 * FAQ section component props
 */
export interface FAQSectionProps {
  title?: string;
  description?: string;
  tabs?: readonly string[] | string[];
  faqs?: readonly FAQItem[];
}

/**
 * Invest section component props
 */
export interface InvestSectionProps {
  title?: string;
  ctaText?: string;
  buttonText?: string;
  waitlistPrefix?: string;
  waitlistLink?: string;
}

// =============================================================================
// INVESTOR SECTION COMPONENTS
// =============================================================================

/**
 * Vote option data structure
 */
export interface VoteOption {
  id: string;
  label: string;
  icon: string;
  selected: boolean;
}

/**
 * Voting card component props
 */
export interface VotingCardProps {
  companyName: string;
  companyIcon: string;
  question: string;
  options: readonly VoteOption[];
}

/**
 * Platform data structure
 */
export interface Platform {
  name: string;
  icon: string;
}

/**
 * Deal submit card component props
 */
export interface DealSubmitCardProps {
  searchPlaceholder: string;
  analyzeText: string;
  platforms: readonly Platform[];
}

/**
 * Due diligence card component props
 */
export interface DueDiligenceCardProps {
  currentPhase: string;
  status: string;
  timeEstimate: string;
  progress: number;
}

/**
 * Notification data structure
 */
export interface Notification {
  title: string;
  body: string;
}

/**
 * Notification card component props
 */
export interface NotificationCardProps {
  notification: Notification;
}

/**
 * Checklist item component props
 */
export interface ChecklistItemProps {
  task: string;
  completed?: boolean;
}

/**
 * Investor agent data structure (Section 2)
 */
export interface InvestorAgent {
  id: string;
  icon: string;
  name: string;
  color: string;
}

/**
 * Investor agent card component props
 */
export interface InvestorAgentCardProps {
  agent: InvestorAgent;
}

/**
 * Featured company data structure
 */
export interface FeaturedCompany {
  name: string;
  icon: string;
  description: string;
  image: string;
  score: string;
}

/**
 * Deal flow card component props
 */
export interface DealFlowCardProps {
  company: FeaturedCompany;
}

// =============================================================================
// MEMBER SECTION COMPONENTS
// =============================================================================

/**
 * Calculator component props (MemberSection1)
 */
export interface CalculatorProps {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  onValueChange?: (value: number) => void;
}

/**
 * Comparison feature data structure
 */
export interface ComparisonFeature {
  icon: string;
  label: string;
  detail: string;
  iconColor?: string;
}

/**
 * Comparison card component props
 */
export interface ComparisonCardProps {
  badge: string;
  earnings: number;
  earningsLabel: string;
  features: readonly ComparisonFeature[];
  warning?: {
    icon: string;
    text: string;
    color: string;
  };
  badges?: readonly { icon: string; text: string }[];
  isAdin?: boolean;
}

/**
 * Member profile data structure (MemberSection2)
 */
export interface MemberProfile {
  name: string;
  location: string;
  image: string;
  bgColor: string;
}

/**
 * Deal company data structure (MemberSection2)
 */
export interface DealCompany {
  name: string;
  category: string;
  bgColor?: string;
  image?: string;
  icon?: string;
  badge?: string;
}

/**
 * Member card component props
 */
export interface MemberCardProps {
  badge: string;
  title: string;
  description: string;
  bgColor: string;
}

/**
 * Process step data structure (MemberSection3)
 */
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

/**
 * Process step component props
 */
export interface ProcessStepProps {
  step: ProcessStep;
  isLast?: boolean;
}

// =============================================================================
// FOUNDER SECTION COMPONENTS
// =============================================================================

/**
 * Feedback message data structure
 */
export interface FeedbackMessage {
  sender: string;
  time: string;
  message: string;
  inputPlaceholder: string;
  notificationCount: number;
}

/**
 * Analysis step data structure
 */
export interface AnalysisStep {
  label: string;
  completed: boolean;
}

/**
 * Analysis progress data structure
 */
export interface AnalysisProgress {
  company: string;
  companyIcon: string;
  title: string;
  subtitle: string;
  progress: number;
  steps: readonly AnalysisStep[];
  stats: {
    verifiedSources: number;
    articles: number;
    posts: number;
  };
}

/**
 * Investor profile data structure
 */
export interface InvestorProfile {
  name: string;
  title: string;
  image: string;
  bgColor: string;
  checks: readonly string[];
}

/**
 * Deck feedback visual component props
 */
export interface DeckFeedbackCardProps {
  feedback: FeedbackMessage;
  desktopImage: string;
  bgColor: string;
}

/**
 * Analysis progress visual component props
 */
export interface AnalysisCardProps {
  analysis: AnalysisProgress;
  bgColor: string;
}

/**
 * Investor offer card component props
 */
export interface InvestorCardProps {
  investor: InvestorProfile;
}
