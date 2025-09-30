/**
 * Icon Components
 * Reusable SVG icon components from Ionicons
 * Extracted from inline SVG code for better reusability
 */

import { cn } from "@/lib/utils";
import { IconProps } from "@/types/components";
import Image from "next/image";
import React from "react";

/**
 * Generic IonIcon component that loads from the public folder
 * Simpler alternative to creating individual SVG components
 */
interface IonIconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const IonIcon: React.FC<IonIconProps> = ({
  name,
  size = 24,
  className = "",
  style,
}) => {
  return (
    <Image
      src={`/assets/icons/Ionicons Designer Pack/${name}.svg`}
      alt=""
      width={size}
      height={size}
      className={className}
      style={style}
    />
  );
};

/**
 * Information Circle Icon (About page)
 * Filled variant from Ionicons
 */
export const InformationCircleIcon: React.FC<IconProps> = ({
  className,
  size = 16,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      className={cn("flex-shrink-0", className)}
      style={style}
      aria-hidden="true"
    >
      <path d="M256,56C145.72,56,56,145.72,56,256s89.72,200,200,200,200-89.72,200-200S366.28,56,256,56Zm0,82a26,26,0,1,1-26,26A26,26,0,0,1,256,138Zm48,226H216a16,16,0,0,1,0-32h28V244H228a16,16,0,0,1,0-32h32a16,16,0,0,1,16,16V332h28a16,16,0,0,1,0,32Z" />
    </svg>
  );
};

/**
 * Cash Icon (Investors page)
 * Filled variant from Ionicons
 */
export const CashIcon: React.FC<IconProps> = ({
  className,
  size = 16,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      className={cn("flex-shrink-0", className)}
      style={style}
      aria-hidden="true"
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
  );
};

/**
 * People Icon (Members page)
 * Filled variant from Ionicons
 */
export const PeopleIcon: React.FC<IconProps> = ({
  className,
  size = 16,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      className={cn("flex-shrink-0", className)}
      style={style}
      aria-hidden="true"
    >
      <path d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z" />
      <path d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z" />
      <path d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z" />
      <path d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z" />
    </svg>
  );
};

/**
 * Construct Icon (Founders page)
 * Filled variant from Ionicons
 */
export const ConstructIcon: React.FC<IconProps> = ({
  className,
  size = 16,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      className={cn("flex-shrink-0", className)}
      style={style}
      aria-hidden="true"
    >
      <path d="M503.58,126.2a16.85,16.85,0,0,0-27.07-4.55L425.36,172.8h0a11.15,11.15,0,0,1-15.66,0l-22.48-22.48a11.17,11.17,0,0,1,0-15.67L438.1,83.76a16.85,16.85,0,0,0-5.27-27.4c-39.71-17-89.08-7.45-120,23.29-26.81,26.61-34.83,68-22,113.7a11,11,0,0,1-3.16,11.1L114.77,365.1a56.76,56.76,0,1,0,80.14,80.18L357,272.08a11,11,0,0,1,10.9-3.17c45,12,86,4,112.43-22,15.2-15,25.81-36.17,29.89-59.71C514.05,165,511.63,142.76,503.58,126.2Z" />
      <path d="M437.33,378.41c-13.94-11.59-43.72-38.4-74.07-66.22L297.19,382.8c28.24,30,53.8,57.85,65,70.88l.07.08A30,30,0,0,0,383.72,464l1.1,0a30.11,30.11,0,0,0,21-8.62l.07-.07,33.43-33.37a29.46,29.46,0,0,0-2-43.53Z" />
      <path d="M118.54,214.55a20.48,20.48,0,0,0-3-10.76,2.76,2.76,0,0,1,2.62-4.22h.06c.84.09,5.33.74,11.7,4.61,4.73,2.87,18.23,12.08,41.73,35.54a34.23,34.23,0,0,0,7.22,22.12l66.23-61.55a33.73,33.73,0,0,0-21.6-9.2,2.65,2.65,0,0,1-.21-.26l-.65-.69L198.1,156.3a28.45,28.45,0,0,1-4-26.11,35.23,35.23,0,0,1,11.78-16.35c5.69-4.41,18.53-9.72,29.44-10.62a52.92,52.92,0,0,1,15.19.94,65.57,65.57,0,0,1,7.06,2.13,15.46,15.46,0,0,0,2.15.63,16,16,0,0,0,16.38-25.06c-.26-.35-1.32-1.79-2.89-3.73a91.85,91.85,0,0,0-9.6-10.36c-8.15-7.36-29.27-19.77-57-19.77a123.13,123.13,0,0,0-46.3,9C121.94,72.45,96.84,93.58,85.3,104.79l-.09.09A222.14,222.14,0,0,0,63.7,129.5,27,27,0,0,0,59,141.27a7.33,7.33,0,0,1-7.71,6.17c-.36,0-.73,0-1.09,0a20.65,20.65,0,0,0-14.59,5.9L6.16,182.05l-.32.32a20.89,20.89,0,0,0-.24,28.72c.19.2.37.39.57.58L53.67,258A21,21,0,0,0,68.32,264a20.65,20.65,0,0,0,14.59-5.9l29.46-28.79A20.51,20.51,0,0,0,118.54,214.55Z" />
    </svg>
  );
};

/**
 * Menu Icon (Mobile hamburger menu)
 * Standard hamburger menu icon
 */
export const MenuIcon: React.FC<IconProps> = ({
  className,
  size = 20,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("flex-shrink-0", className)}
      style={style}
      aria-hidden="true"
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};

/**
 * Shield Checkmark Icon (Resources/Security)
 * Filled variant from Ionicons
 */
export const ShieldCheckmarkIcon: React.FC<IconProps> = ({
  className,
  size = 16,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      className={cn("flex-shrink-0", className)}
      style={style}
      aria-hidden="true"
    >
      <path d="M479.07,111.35a16,16,0,0,0-13.15-14.17C379.89,81.18,363.72,69.15,337,45.38A16.14,16.14,0,0,0,320,40h-.3C301.41,40.45,281.48,42.9,256,42.9c-25.48,0-45.41-2.45-63.7-2.9H192a16.14,16.14,0,0,0-17,5.38C148.72,69.15,132.55,81.18,46.18,97.18A16,16,0,0,0,33,111.35C31.13,133.84,25.69,184.4,25.69,255.82c0,78.07,14.45,136.18,43,173.3C96.5,466.69,142.49,487,188.21,508c24,11.08,44.28,19.68,57.79,25.36,2.44,1.03,5.07,2.06,7.75,3a16.29,16.29,0,0,0,12.5,0c2.68-.93,5.31-1.95,7.75-3,13.51-5.68,33.79-14.28,57.79-25.36,45.72-21,91.71-41.3,119.5-78.87,28.55-37.12,43-95.23,43-173.3C486.31,184.4,480.87,133.84,479.07,111.35ZM218,360.59l-85.1-92.77a16,16,0,0,1,22.2-23.08l73.9,80.5,141.8-154.53a16,16,0,0,1,23.6,21.58Z" />
    </svg>
  );
};

/**
 * Mail Icon (Email contact)
 * Filled variant from Ionicons
 */
export const MailIcon: React.FC<IconProps> = ({
  className,
  size = 16,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      className={cn("flex-shrink-0", className)}
      style={style}
      aria-hidden="true"
    >
      <path d="M424,80H88a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H424a56.06,56.06,0,0,0,56-56V136A56.06,56.06,0,0,0,424,80Zm-14.18,92.63-144,112a16,16,0,0,1-19.64,0l-144-112a16,16,0,1,1,19.64-25.26L256,251.73,390.18,147.37a16,16,0,0,1,19.64,25.26Z" />
    </svg>
  );
};

/**
 * Helper function to get the appropriate icon component
 * Based on the icon name string
 */
export const getIconComponent = (iconName: string) => {
  const icons: Record<string, React.FC<IconProps>> = {
    "information-circle": InformationCircleIcon,
    cash: CashIcon,
    people: PeopleIcon,
    construct: ConstructIcon,
    menu: MenuIcon,
    "shield-checkmark": ShieldCheckmarkIcon,
    mail: MailIcon,
  };

  return icons[iconName] || InformationCircleIcon;
};
