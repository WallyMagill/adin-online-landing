// TODO: Could make mobile footer better

import { ASSETS, COLORS, TYPOGRAPHY } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterProps {
  className?: string;
}

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
          {/* Column 1: ADIN for */}
          <div className="flex flex-col">
            <Image
              src="/assets/icons/Ionicons Designer Pack/people.svg"
              alt="People icon"
              width={24}
              height={24}
              className="w-6 h-6"
              style={{ color: COLORS.base.pureBlack }}
            />
            <h3
              className="font-bold mt-1.5 text-base"
              style={{ color: COLORS.base.pureBlack }}
            >
              ADIN for
            </h3>
            <Link
              href="/investor"
              className="mt-2 text-sm md:text-base hover:opacity-70 transition-opacity"
              style={{ color: COLORS.neutral.dark.darkGray1 }}
            >
              Investors
            </Link>
            <Link
              href="/member"
              className="mt-1.5 text-sm md:text-base hover:opacity-70 transition-opacity"
              style={{ color: COLORS.neutral.dark.darkGray1 }}
            >
              Members
            </Link>
            <Link
              href="/founder"
              className="mt-1.5 text-sm md:text-base hover:opacity-70 transition-opacity"
              style={{ color: COLORS.neutral.dark.darkGray1 }}
            >
              Founders
            </Link>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col">
            <Image
              src="/assets/icons/Ionicons Designer Pack/shield-checkmark.svg"
              alt="Shield checkmark icon"
              width={24}
              height={24}
              className="w-6 h-6"
              style={{ color: COLORS.base.pureBlack }}
            />
            <h3
              className="font-bold mt-1.5 text-base"
              style={{ color: COLORS.base.pureBlack }}
            >
              Resources
            </h3>
            <Link
              href="/terms"
              className="mt-2 text-sm md:text-base hover:opacity-70 transition-opacity"
              style={{ color: COLORS.neutral.dark.darkGray1 }}
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="mt-1.5 text-sm md:text-base hover:opacity-70 transition-opacity"
              style={{ color: COLORS.neutral.dark.darkGray1 }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Right Section: Company Info */}
        <div className="flex flex-col items-start md:items-end">
          {/* Logo */}
          <Image
            src={ASSETS.svg.logo}
            alt="ADIN Logo"
            width={40}
            height={40}
            className="w-8 h-8 md:w-8 md:h-8 mb-3"
          />

          {/* Description */}
          <p
            className="max-w-xs text-sm md:text-base leading-relaxed text-left md:text-right mb-3"
            style={{ color: COLORS.neutral.dark.darkGray1 }}
          >
            ADIN was designed and developed by Tribute Labs in Brooklyn, NY.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 items-center mb-3">
            <Link
              href="https://twitter.com/adin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Follow ADIN on X (Twitter)"
            >
              <Image
                src="/assets/images/Vector.svg"
                alt="X (Twitter)"
                width={20}
                height={20}
                className="w-4 h-4"
              />
            </Link>
            <Link
              href="mailto:contact@adin.com"
              className="hover:opacity-70 transition-opacity flex items-center justify-center w-5 h-5"
              aria-label="Email us"
            >
              <Image
                src="/assets/icons/Ionicons Designer Pack/mail.svg"
                alt="Mail icon"
                width={20}
                height={20}
                className="w-5 h-5"
                style={{ color: COLORS.base.pureBlack }}
              />
            </Link>
          </div>

          {/* Copyright */}
          <p
            className="text-xs text-left md:text-right"
            style={{ color: COLORS.neutral.dark.lightGray2 }}
          >
            © 2025 Tribute Labs, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
