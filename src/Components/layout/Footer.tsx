// TODO: Could make mobile footer better

import { IonIcon } from "@/Components/icons";
import { FooterNavSection } from "@/Components/layout/FooterNavSection";
import {
  ASSETS,
  COLORS,
  FOOTER_COMPANY_INFO,
  FOOTER_NAV_SECTIONS,
  FOOTER_SOCIAL_LINKS,
  TYPOGRAPHY,
} from "@/lib/constants";
import { FooterProps } from "@/types/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`w-full px-8 md:px-16 lg:px-24 py-6 md:py-8 ${className}`}
      style={{
        backgroundColor: COLORS.base.pureWhite,
        fontFamily: TYPOGRAPHY.fontFamily.primary,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Left Section: Navigation Columns */}
        <div className="flex gap-6 md:gap-10">
          {FOOTER_NAV_SECTIONS.map((section) => (
            <FooterNavSection key={section.title} {...section} />
          ))}
        </div>

        {/* Right Section: Company Info */}
        <div className="flex flex-col items-start md:items-end">
          {/* Logo */}
          <Image
            src={ASSETS.svg.logo}
            alt="ADIN Logo"
            width={40}
            height={40}
            loading="lazy"
            className="w-8 h-8 md:w-8 md:h-8 mb-3"
          />

          {/* Description */}
          <p
            className="max-w-xs text-sm md:text-base leading-relaxed text-left md:text-right mb-3"
            style={{ color: COLORS.neutral.dark.darkGray1 }}
          >
            {FOOTER_COMPANY_INFO.description}
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 items-center mb-3">
            {FOOTER_SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="hover:opacity-70 transition-opacity"
                aria-label={social.label}
              >
                {social.icon.startsWith("/") ? (
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={20}
                    height={20}
                    loading="lazy"
                    className="w-4 h-4"
                  />
                ) : (
                  <IonIcon
                    name={social.icon}
                    size={20}
                    className="w-5 h-5"
                    style={{ color: COLORS.base.pureBlack }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-xs text-left md:text-right"
            style={{ color: COLORS.neutral.dark.lightGray2 }}
          >
            {FOOTER_COMPANY_INFO.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
