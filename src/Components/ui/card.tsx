/**
 * Reusable Card Component
 * Built with class-variance-authority for type-safe variant handling
 * Matches ADIN design system specifications
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  // Base styles - applied to all cards
  "rounded-2xl transition-all duration-200",
  {
    variants: {
      variant: {
        // Default card with subtle shadow
        default: "bg-white border border-gray-200 shadow-sm hover:shadow-md",
        // Report card - specific styling for live reports
        report: "bg-white border border-purple-100 p-4 flex items-center gap-2",
        // Feature card - for feature highlights
        feature: "bg-white border border-gray-200 p-6",
        // Profile card - rounded styling for profile elements
        profile: "bg-white border border-gray-200 rounded-3xl overflow-hidden",
      },
      hover: {
        true: "hover:scale-[1.02] cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

/**
 * Card component with design system variants
 *
 * @example
 * ```tsx
 * // Default card
 * <Card>Content</Card>
 *
 * // Report card variant
 * <Card variant="report">
 *   <ReportCardContent {...reportData} />
 * </Card>
 *
 * // Card with hover effect
 * <Card hover>Hoverable content</Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, children, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, hover, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

/**
 * Report Card Content Component
 * Specialized content layout for live report cards
 */
export interface ReportCardContentProps {
  name: string;
  category: string;
  logo: string;
  logoClassName?: string;
  bgColor: string;
}

export const ReportCardContent: React.FC<ReportCardContentProps> = ({
  name,
  category,
  logo,
  logoClassName = "",
  bgColor,
}) => {
  return (
    <>
      {/* Logo Container */}
      <div
        className="w-8 h-8 relative rounded-lg overflow-hidden flex items-center justify-center shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        <Image
          src={logo}
          alt={name}
          width={32}
          height={32}
          className={logoClassName}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <span className="text-sm font-medium text-neutral-900 leading-none truncate">
          {name}
        </span>
        <span className="text-xs text-neutral-600 leading-none mt-1 truncate">
          {category}
        </span>
      </div>
    </>
  );
};

