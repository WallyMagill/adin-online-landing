import Image from "next/image";
import React from "react";

interface ChevronDownProps {
  onClick: () => void;
  className?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll to content"
      className={`
        absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12
        z-20
        w-12 h-12
        flex flex-col items-center justify-center
        -space-y-3
        cursor-pointer
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
        hover:scale-105 hover:opacity-80
        active:scale-95
        transition-all duration-300 ease-in-out
        animate-[float_3s_ease-in-out_infinite]
        drop-shadow-lg
        ${className}
      `}
    >
      {/* Top chevron - 30% opacity */}
      <Image
        src="/assets/icons/Ionicons Designer Pack/chevron-down.svg"
        alt=""
        width={24}
        height={24}
        style={{
          opacity: 0.3,
        }}
      />

      {/* Middle chevron - 60% opacity */}
      <Image
        src="/assets/icons/Ionicons Designer Pack/chevron-down.svg"
        alt=""
        width={24}
        height={24}
        style={{
          opacity: 0.6,
        }}
      />

      {/* Bottom chevron - 100% opacity */}
      <Image
        src="/assets/icons/Ionicons Designer Pack/chevron-down.svg"
        alt=""
        width={24}
        height={24}
        style={{
          opacity: 1.0,
        }}
      />
    </button>
  );
};

export default ChevronDown;
