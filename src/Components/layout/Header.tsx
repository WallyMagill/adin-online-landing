/**
 * Header Component
 * Main navigation header with logo, navigation, and authentication buttons
 * Responsive design with mobile menu
 */

"use client";

import { MenuIcon } from "@/Components/icons";
import Navigation from "@/Components/layout/Navigation";
import NavigationItem from "@/Components/layout/NavigationItem";
import { Button } from "@/Components/ui/Button";
import {
  ASSETS,
  COLORS,
  HEADER_NAV_ITEMS,
  LAYOUT,
  TYPOGRAPHY,
} from "@/lib/constants";
import { HeaderProps } from "@/types/components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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

  /**
   * Determines if a navigation item is active
   * Special handling for the home page (exact match)
   */
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
              priority
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
              priority
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
              priority
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Desktop Navigation Section - Centered */}
      <Navigation items={HEADER_NAV_ITEMS} currentPath={currentPath} />

      {/* Desktop Auth Section */}
      <div className="hidden lg:flex items-center gap-6">
        {/* Log In Button */}
        <Button variant="outline" size="default" asChild>
          <Link href="/login">Log In</Link>
        </Button>

        {/* Sign Up Button */}
        <Button variant="default" size="default" asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>

      {/* Mobile Auth Section and Menu Button */}
      <div className="lg:hidden flex items-center gap-3">
        {/* Mobile Log In Button */}
        <Button variant="outline" size="sm" asChild>
          <Link href="/login">Log In</Link>
        </Button>

        {/* Mobile Sign Up Button */}
        <Button variant="default" size="sm" asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          style={{ backgroundColor: COLORS.neutral.dark.lightGray0 }}
          aria-label="Open mobile menu"
          onClick={toggleMobileMenu}
        >
          <MenuIcon size={20} style={{ color: COLORS.base.black }} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 transition-all duration-200 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-6 py-4">
          {HEADER_NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <NavigationItem
                key={item.name}
                item={item}
                isActive={active}
                isMobile={true}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
