import { IonIcon } from "@/Components/icons";
import { COLORS, TYPOGRAPHY } from "@/lib/constants";
import { FooterNavSectionProps } from "@/types/components";
import Link from "next/link";
import React from "react";

/**
 * FooterNavSection Component
 * Renders a single navigation column in the footer
 * with an icon, title, and list of links
 */
export const FooterNavSection: React.FC<FooterNavSectionProps> = ({
  title,
  icon,
  links,
}) => {
  return (
    <div className="flex flex-col">
      <IonIcon
        name={icon}
        size={24}
        className="w-6 h-6"
        style={{ color: COLORS.base.pureBlack }}
      />
      <h3
        className="font-bold mt-1.5 text-base"
        style={{
          color: COLORS.base.pureBlack,
          fontFamily: TYPOGRAPHY.fontFamily.primary,
        }}
      >
        {title}
      </h3>
      {links.map((link, index) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${
            index === 0 ? "mt-2" : "mt-1.5"
          } text-sm md:text-base hover:opacity-70 transition-opacity`}
          style={{ color: COLORS.neutral.dark.darkGray1 }}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
