"use client";

import { IonIcon } from "@/Components/icons";
import { COLORS } from "@/lib/constants";
import { CalculatorProps } from "@/types/components";
import { useState } from "react";

export const DealCalculator = ({
  min,
  max,
  step,
  defaultValue,
  onValueChange,
}: CalculatorProps) => {
  const [value, setValue] = useState(defaultValue);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-2">
      {/* Value Display */}
      <div className="flex flex-col gap-2">
        <div className="text-4xl md:text-7xl font-semibold leading-tight md:leading-[80px]">
          {formatCurrency(value)}
        </div>
        <div className="text-lg md:text-xl leading-normal md:leading-loose">
          Exit Value
        </div>
      </div>

      {/* Slider */}
      <div className="flex flex-col gap-2 mt-6">
        <div
          className="relative h-11 w-full bg-white rounded-[86px] border"
          style={{ borderColor: COLORS.neutral.light.light1 }}
        >
          {/* Fill bar */}
          <div
            className="absolute left-0 top-0 h-full rounded-l-[48px]"
            style={{
              width: `${percentage}%`,
              backgroundColor: COLORS.neutral.light.light1,
            }}
          />

          {/* Slider knob */}
          <div
            className="absolute top-0 h-11 w-11 rounded-full flex items-center justify-center"
            style={{
              left: `calc(${percentage}% - 22px)`,
              backgroundColor: COLORS.accent.purple,
            }}
          >
            <IonIcon
              name="menu-outline"
              size={24}
              className="rotate-90 brightness-0 invert"
            />
          </div>

          {/* Input slider */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
          />
        </div>

        {/* Labels */}
        <div className="flex justify-between text-sm font-medium text-zinc-900">
          <span>$1M</span>
          <span>$50M</span>
          <span>$100M</span>
        </div>
      </div>
    </div>
  );
};
