"use client";

import { ASSETS, COLORS, LAYOUT, TYPOGRAPHY } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Define the navigation items with their corresponding icons
const HEADER_NAV_ITEMS = [
  {
    name: "About",
    href: "/",
    icon: "information-circle",
    isActive: true, // About is active in the design
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
];

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`relative w-full px-6 lg:px-10 pt-12 pb-6 lg:pt-12 lg:pb-8 flex items-center ${className}`}
      style={{
        height: LAYOUT.header.height,
        fontFamily: TYPOGRAPHY.fontFamily.primary,
        backgroundColor: COLORS.base.pureWhite,
      }}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        {/* Desktop: Logo + Wordmark */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Smiley Logo */}
          <div className="w-8 h-8 relative">
            <Image
              src={ASSETS.svg.logo}
              alt="ADIN Logo"
              width={32}
              height={32}
              className="w-full h-full"
            />
          </div>

          {/* ADIN Wordmark */}
          <div className="w-20 h-8 relative">
            <Image
              src={ASSETS.svg.wordmark}
              alt="ADIN"
              width={80}
              height={32}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Mobile: Logo only */}
        <div className="lg:hidden flex items-center">
          <div className="w-8 h-8 relative">
            <Image
              src={ASSETS.svg.logo}
              alt="ADIN Logo"
              width={32}
              height={32}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Desktop Navigation Section - Centered */}
      <nav
        className="hidden lg:flex items-center gap-1 px-1 py-1 rounded-[70px] absolute left-1/2 transform -translate-x-1/2"
        style={{
          backgroundColor: COLORS.base.pureWhite,
        }}
      >
        {HEADER_NAV_ITEMS.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`
              flex items-center gap-2 px-6 py-3.5 rounded-[80px]
              transition-all duration-250 hover:bg-gray-50
              ${
                item.isActive
                  ? "bg-white border border-purple-400"
                  : "bg-transparent"
              }
            `}
          >
            {/* Icon */}
            {React.createElement("ion-icon", {
              name: item.icon,
              style: {
                fontSize: "16px",
                color: item.isActive
                  ? COLORS.accent.purple
                  : COLORS.neutral.dark.darkGray1,
              },
            })}

            {/* Text */}
            <span
              className="text-base font-medium leading-tight"
              style={{
                color: item.isActive
                  ? COLORS.accent.purple
                  : COLORS.neutral.dark.darkGray1,
                fontFamily: TYPOGRAPHY.fontFamily.primary,
              }}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>

      {/* Desktop Auth Section */}
      <div className="hidden lg:flex items-center gap-6 ml-auto">
        {/* Log In Button */}
        <Link
          href="/login"
          className="flex items-center px-6 py-3.5 rounded-[80px] transition-all duration-250 hover:opacity-70"
          style={{
            backgroundColor: COLORS.base.pureWhite,
            color: COLORS.base.black,
            fontFamily: TYPOGRAPHY.fontFamily.primary,
            border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
          }}
        >
          <span className="text-base font-medium leading-tight">Log In</span>
        </Link>

        {/* Sign Up Button */}
        <Link
          href="/signup"
          className="flex items-center px-6 py-3.5 rounded-[80px] transition-all duration-250 hover:opacity-90"
          style={{
            backgroundColor: COLORS.accent.orange,
          }}
        >
          <span
            className="text-base font-medium leading-tight"
            style={{
              color: COLORS.base.pureWhite,
              fontFamily: TYPOGRAPHY.fontFamily.primary,
            }}
          >
            Sign Up
          </span>
        </Link>
      </div>

      {/* Mobile Auth Section and Menu Button */}
      <div className="lg:hidden flex items-center gap-3">
        {/* Mobile Log In Button */}
        <Link
          href="/login"
          className="flex items-center px-4 py-2 rounded-[40px] transition-all duration-250 hover:opacity-70"
          style={{
            backgroundColor: COLORS.base.pureWhite,
            color: COLORS.base.black,
            fontFamily: TYPOGRAPHY.fontFamily.primary,
            border: `1px solid ${COLORS.neutral.dark.lightGray1}`,
          }}
        >
          <span className="text-sm font-medium">Log In</span>
        </Link>

        {/* Mobile Sign Up Button */}
        <Link
          href="/signup"
          className="flex items-center px-4 py-2 rounded-[40px] transition-all duration-250 hover:opacity-90"
          style={{
            backgroundColor: COLORS.accent.orange,
          }}
        >
          <span
            className="text-sm font-medium"
            style={{
              color: COLORS.base.pureWhite,
              fontFamily: TYPOGRAPHY.fontFamily.primary,
            }}
          >
            Sign Up
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          style={{ backgroundColor: COLORS.neutral.dark.lightGray0 }}
          aria-label="Open mobile menu"
          onClick={toggleMobileMenu}
        >
          {React.createElement("ion-icon", {
            name: "menu",
            style: {
              fontSize: "20px",
              color: COLORS.base.black,
            },
          })}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="px-6 py-4">
            {HEADER_NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg mb-2
                  transition-all duration-250
                  ${
                    item.isActive
                      ? "bg-purple-50 border border-purple-200"
                      : "hover:bg-gray-50"
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {/* Icon */}
                {React.createElement("ion-icon", {
                  name: item.icon,
                  style: {
                    fontSize: "18px",
                    color: item.isActive
                      ? COLORS.accent.purple
                      : COLORS.neutral.dark.darkGray1,
                  },
                })}

                {/* Text */}
                <span
                  className="text-base font-medium"
                  style={{
                    color: item.isActive
                      ? COLORS.accent.purple
                      : COLORS.neutral.dark.darkGray1,
                    fontFamily: TYPOGRAPHY.fontFamily.primary,
                  }}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
