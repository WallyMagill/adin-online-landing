/**
 * Reusable Button Component
 * Built with class-variance-authority for type-safe variant handling
 * Matches ADIN design system specifications
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { COLORS, TYPOGRAPHY } from "@/lib/constants";

const buttonVariants = cva(
  // Base styles - applied to all buttons
  "inline-flex items-center justify-center transition-all duration-250 font-medium leading-tight disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary orange button (Sign Up style)
        default: "text-white hover:opacity-90",
        // White button with border (Log In style)
        outline: "bg-white text-black hover:opacity-70",
        // Ghost button - transparent with no border
        ghost: "bg-transparent hover:bg-gray-50",
      },
      size: {
        // Desktop size: px-6 py-3.5
        default: "px-6 py-3.5 text-base rounded-[80px]",
        // Mobile size: px-4 py-2
        sm: "px-4 py-2 text-sm rounded-[40px]",
        // Large size
        lg: "px-8 py-4 text-lg rounded-[80px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, the button will render as a Slot component
   * Useful for composing with Next.js Link or other components
   */
  asChild?: boolean;
}

/**
 * Button component with design system variants
 *
 * @example
 * ```tsx
 * // Primary button
 * <Button>Sign Up</Button>
 *
 * // Outline button
 * <Button variant="outline">Log In</Button>
 *
 * // With Next.js Link
 * <Button asChild>
 *   <Link href="/signup">Sign Up</Link>
 * </Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Determine background color based on variant
    const getBackgroundColor = () => {
      if (variant === "outline") return COLORS.base.pureWhite;
      if (variant === "ghost") return "transparent";
      return COLORS.accent.orange;
    };

    // Determine border based on variant
    const getBorder = () => {
      if (variant === "outline") return `1px solid ${COLORS.neutral.dark.lightGray1}`;
      return undefined;
    };

    // Merge inline styles with design system values
    const mergedStyles: React.CSSProperties = {
      backgroundColor: getBackgroundColor(),
      border: getBorder(),
      fontFamily: TYPOGRAPHY.fontFamily.primary,
      ...style,
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={mergedStyles}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

