"use client";

import { ASSETS, COLORS, LAYOUT, TYPOGRAPHY } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

// Define the navigation items with their corresponding icons
const HEADER_NAV_ITEMS = [
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
];

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) => {
    return href === "/" ? currentPath === "/" : currentPath.startsWith(href);
  };

  return (
    <header
      className={`relative w-full px-6 lg:px-10 pt-12 pb-6 lg:pt-12 lg:pb-8 flex items-center justify-between ${className}`}
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
        {HEADER_NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-2 px-6 py-3.5 rounded-[80px]
                transition-all duration-250 hover:bg-gray-50
                ${
                  active
                    ? "bg-white border border-purple-400"
                    : "bg-transparent"
                }
              `}
            >
              {/* Icon */}
              <div
                className="w-4 h-4 flex items-center justify-center"
                style={{
                  color: active
                    ? COLORS.accent.purple
                    : COLORS.neutral.dark.darkGray1,
                }}
              >
                {item.icon === "information-circle" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    style={{
                      color: active
                        ? COLORS.accent.purple
                        : COLORS.neutral.dark.darkGray1,
                    }}
                  >
                    <path d="M256,56C145.72,56,56,145.72,56,256s89.72,200,200,200,200-89.72,200-200S366.28,56,256,56Zm0,82a26,26,0,1,1-26,26A26,26,0,0,1,256,138Zm48,226H216a16,16,0,0,1,0-32h28V244H228a16,16,0,0,1,0-32h32a16,16,0,0,1,16,16V332h28a16,16,0,0,1,0,32Z" />
                  </svg>
                )}
                {item.icon === "cash" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    style={{
                      color: active
                        ? COLORS.accent.purple
                        : COLORS.neutral.dark.darkGray1,
                    }}
                  >
                    <path d="M448,400H64a16,16,0,0,1,0-32H448a16,16,0,0,1,0,32Z" />
                    <path d="M416,448H96a16,16,0,0,1,0-32H416a16,16,0,0,1,0,32Z" />
                    <path d="M32,272H16v48a32,32,0,0,0,32,32H96V336A64.07,64.07,0,0,0,32,272Z" />
                    <path d="M480,240h16V176H480a96.11,96.11,0,0,1-96-96V64H128V80a96.11,96.11,0,0,1-96,96H16v64c5,0,10.34,0,16,0a96.11,96.11,0,0,1,96,96v16H384V336A96.11,96.11,0,0,1,480,240ZM256,304a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,304Z" />
                    <circle cx="256" cy="208" r="64" />
                    <path d="M416,336v16h48a32,32,0,0,0,32-32V272H480A64.07,64.07,0,0,0,416,336Z" />
                    <path d="M480,144h16V96a32,32,0,0,0-32-32H416V80A64.07,64.07,0,0,0,480,144Z" />
                    <path d="M96,80V64H48A32,32,0,0,0,16,96v48H32A64.07,64.07,0,0,0,96,80Z" />
                  </svg>
                )}
                {item.icon === "people" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    style={{
                      color: active
                        ? COLORS.accent.purple
                        : COLORS.neutral.dark.darkGray1,
                    }}
                  >
                    <path d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z" />
                    <path d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z" />
                    <path d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z" />
                    <path d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z" />
                  </svg>
                )}
                {item.icon === "construct" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    style={{
                      color: active
                        ? COLORS.accent.purple
                        : COLORS.neutral.dark.darkGray1,
                    }}
                  >
                    <path d="M503.58,126.2a16.85,16.85,0,0,0-27.07-4.55L425.36,172.8h0a11.15,11.15,0,0,1-15.66,0l-22.48-22.48a11.17,11.17,0,0,1,0-15.67L438.1,83.76a16.85,16.85,0,0,0-5.27-27.4c-39.71-17-89.08-7.45-120,23.29-26.81,26.61-34.83,68-22,113.7a11,11,0,0,1-3.16,11.1L114.77,365.1a56.76,56.76,0,1,0,80.14,80.18L357,272.08a11,11,0,0,1,10.9-3.17c45,12,86,4,112.43-22,15.2-15,25.81-36.17,29.89-59.71C514.05,165,511.63,142.76,503.58,126.2Z" />
                    <path d="M437.33,378.41c-13.94-11.59-43.72-38.4-74.07-66.22L297.19,382.8c28.24,30,53.8,57.85,65,70.88l.07.08A30,30,0,0,0,383.72,464l1.1,0a30.11,30.11,0,0,0,21-8.62l.07-.07,33.43-33.37a29.46,29.46,0,0,0-2-43.53Z" />
                    <path d="M118.54,214.55a20.48,20.48,0,0,0-3-10.76,2.76,2.76,0,0,1,2.62-4.22h.06c.84.09,5.33.74,11.7,4.61,4.73,2.87,18.23,12.08,41.73,35.54a34.23,34.23,0,0,0,7.22,22.12l66.23-61.55a33.73,33.73,0,0,0-21.6-9.2,2.65,2.65,0,0,1-.21-.26l-.65-.69L198.1,156.3a28.45,28.45,0,0,1-4-26.11,35.23,35.23,0,0,1,11.78-16.35c5.69-4.41,18.53-9.72,29.44-10.62a52.92,52.92,0,0,1,15.19.94,65.57,65.57,0,0,1,7.06,2.13,15.46,15.46,0,0,0,2.15.63,16,16,0,0,0,16.38-25.06c-.26-.35-1.32-1.79-2.89-3.73a91.85,91.85,0,0,0-9.6-10.36c-8.15-7.36-29.27-19.77-57-19.77a123.13,123.13,0,0,0-46.3,9C121.94,72.45,96.84,93.58,85.3,104.79l-.09.09A222.14,222.14,0,0,0,63.7,129.5,27,27,0,0,0,59,141.27a7.33,7.33,0,0,1-7.71,6.17c-.36,0-.73,0-1.09,0a20.65,20.65,0,0,0-14.59,5.9L6.16,182.05l-.32.32a20.89,20.89,0,0,0-.24,28.72c.19.2.37.39.57.58L53.67,258A21,21,0,0,0,68.32,264a20.65,20.65,0,0,0,14.59-5.9l29.46-28.79A20.51,20.51,0,0,0,118.54,214.55Z" />
                  </svg>
                )}
              </div>

              {/* Text */}
              <span
                className="text-base font-medium leading-tight"
                style={{
                  color: active
                    ? COLORS.accent.purple
                    : COLORS.neutral.dark.darkGray1,
                  fontFamily: TYPOGRAPHY.fontFamily.primary,
                }}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Desktop Auth Section */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Log In Button */}
        {/* TODO: Could remove boarder and fix hover effect */}
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: COLORS.base.black }}
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="px-6 py-4">
            {HEADER_NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg mb-2
                    transition-all duration-250
                    ${
                      active
                        ? "bg-purple-50 border border-purple-200"
                        : "hover:bg-gray-50"
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {/* Icon */}
                  <div
                    className="w-5 h-5 flex items-center justify-center"
                    style={{
                      color: active
                        ? COLORS.accent.purple
                        : COLORS.neutral.dark.darkGray1,
                    }}
                  >
                    {item.icon === "information-circle" && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        style={{
                          color: active
                            ? COLORS.accent.purple
                            : COLORS.neutral.dark.darkGray1,
                        }}
                      >
                        <path d="M256,56C145.72,56,56,145.72,56,256s89.72,200,200,200,200-89.72,200-200S366.28,56,256,56Zm0,82a26,26,0,1,1-26,26A26,26,0,0,1,256,138Zm48,226H216a16,16,0,0,1,0-32h28V244H228a16,16,0,0,1,0-32h32a16,16,0,0,1,16,16V332h28a16,16,0,0,1,0,32Z" />
                      </svg>
                    )}
                    {item.icon === "cash" && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        style={{
                          color: active
                            ? COLORS.accent.purple
                            : COLORS.neutral.dark.darkGray1,
                        }}
                      >
                        <path d="M448,400H64a16,16,0,0,1,0-32H448a16,16,0,0,1,0,32Z" />
                        <path d="M416,448H96a16,16,0,0,1,0-32H416a16,16,0,0,1,0,32Z" />
                        <path d="M32,272H16v48a32,32,0,0,0,32,32H96V336A64.07,64.07,0,0,0,32,272Z" />
                        <path d="M480,240h16V176H480a96.11,96.11,0,0,1-96-96V64H128V80a96.11,96.11,0,0,1-96,96H16v64c5,0,10.34,0,16,0a96.11,96.11,0,0,1,96,96v16H384V336A96.11,96.11,0,0,1,480,240ZM256,304a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,304Z" />
                        <circle cx="256" cy="208" r="64" />
                        <path d="M416,336v16h48a32,32,0,0,0,32-32V272H480A64.07,64.07,0,0,0,416,336Z" />
                        <path d="M480,144h16V96a32,32,0,0,0-32-32H416V80A64.07,64.07,0,0,0,480,144Z" />
                        <path d="M96,80V64H48A32,32,0,0,0,16,96v48H32A64.07,64.07,0,0,0,96,80Z" />
                      </svg>
                    )}
                    {item.icon === "people" && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        style={{
                          color: active
                            ? COLORS.accent.purple
                            : COLORS.neutral.dark.darkGray1,
                        }}
                      >
                        <path d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z" />
                        <path d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z" />
                        <path d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z" />
                        <path d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z" />
                      </svg>
                    )}
                    {item.icon === "construct" && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        style={{
                          color: active
                            ? COLORS.accent.purple
                            : COLORS.neutral.dark.darkGray1,
                        }}
                      >
                        <path d="M503.58,126.2a16.85,16.85,0,0,0-27.07-4.55L425.36,172.8h0a11.15,11.15,0,0,1-15.66,0l-22.48-22.48a11.17,11.17,0,0,1,0-15.67L438.1,83.76a16.85,16.85,0,0,0-5.27-27.4c-39.71-17-89.08-7.45-120,23.29-26.81,26.61-34.83,68-22,113.7a11,11,0,0,1-3.16,11.1L114.77,365.1a56.76,56.76,0,1,0,80.14,80.18L357,272.08a11,11,0,0,1,10.9-3.17c45,12,86,4,112.43-22,15.2-15,25.81-36.17,29.89-59.71C514.05,165,511.63,142.76,503.58,126.2Z" />
                        <path d="M437.33,378.41c-13.94-11.59-43.72-38.4-74.07-66.22L297.19,382.8c28.24,30,53.8,57.85,65,70.88l.07.08A30,30,0,0,0,383.72,464l1.1,0a30.11,30.11,0,0,0,21-8.62l.07-.07,33.43-33.37a29.46,29.46,0,0,0-2-43.53Z" />
                        <path d="M118.54,214.55a20.48,20.48,0,0,0-3-10.76,2.76,2.76,0,0,1,2.62-4.22h.06c.84.09,5.33.74,11.7,4.61,4.73,2.87,18.23,12.08,41.73,35.54a34.23,34.23,0,0,0,7.22,22.12l66.23-61.55a33.73,33.73,0,0,0-21.6-9.2,2.65,2.65,0,0,1-.21-.26l-.65-.69L198.1,156.3a28.45,28.45,0,0,1-4-26.11,35.23,35.23,0,0,1,11.78-16.35c5.69-4.41,18.53-9.72,29.44-10.62a52.92,52.92,0,0,1,15.19.94,65.57,65.57,0,0,1,7.06,2.13,15.46,15.46,0,0,0,2.15.63,16,16,0,0,0,16.38-25.06c-.26-.35-1.32-1.79-2.89-3.73a91.85,91.85,0,0,0-9.6-10.36c-8.15-7.36-29.27-19.77-57-19.77a123.13,123.13,0,0,0-46.3,9C121.94,72.45,96.84,93.58,85.3,104.79l-.09.09A222.14,222.14,0,0,0,63.7,129.5,27,27,0,0,0,59,141.27a7.33,7.33,0,0,1-7.71,6.17c-.36,0-.73,0-1.09,0a20.65,20.65,0,0,0-14.59,5.9L6.16,182.05l-.32.32a20.89,20.89,0,0,0-.24,28.72c.19.2.37.39.57.58L53.67,258A21,21,0,0,0,68.32,264a20.65,20.65,0,0,0,14.59-5.9l29.46-28.79A20.51,20.51,0,0,0,118.54,214.55Z" />
                      </svg>
                    )}
                  </div>

                  {/* Text */}
                  <span
                    className="text-base font-medium"
                    style={{
                      color: active
                        ? COLORS.accent.purple
                        : COLORS.neutral.dark.darkGray1,
                      fontFamily: TYPOGRAPHY.fontFamily.primary,
                    }}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
