"use client";
import { COLORS } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";

export default function MemberSection1() {
  const [exitValue, setExitValue] = useState(50000000); // Default $50M

  // Calculated values
  const standardEarnings = exitValue * 0.02; // 2% of exit value
  const adinEarnings = exitValue * 0.1; // 10% of exit value

  // Format currency helper
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Slider handler
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExitValue(Number(e.target.value));
  };

  // Calculate slider position percentage for visual fill
  const sliderPercentage =
    ((exitValue - 1000000) / (100000000 - 1000000)) * 100;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-16 w-full">
          {/* Header Section */}
          <div className="flex flex-col items-start text-left w-full">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight md:leading-[64px]">
              Become an ADIN Member.
              <br />
              Earn <span style={{ color: COLORS.accent.green }}>5x more</span>.
            </h2>
            <p className="text-lg md:text-xl leading-normal md:leading-loose mt-4 max-w-2xl">
              Compared to traditional Venture Capital scout programs,
              ADIN&apos;s payouts reward members for being apart of the network.
            </p>
          </div>

          {/* Calculator Box */}
          <div
            className="w-full p-6 md:p-10 bg-white rounded-[32px] md:rounded-[48px] border flex flex-col gap-8 md:gap-12"
            style={{ borderColor: COLORS.neutral.light.light2 }}
          >
            {/* Calculator Header */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">Deal Calculator</h3>
              <p className="text-sm text-zinc-900 leading-tight">
                Adjust the exit value to see your potential earnings.
              </p>
            </div>

            {/* Exit Value Display */}
            <div className="flex flex-col gap-2">
              <div className="text-4xl md:text-7xl font-semibold leading-tight md:leading-[80px]">
                {formatCurrency(exitValue)}
              </div>
              <div className="text-lg md:text-xl leading-normal md:leading-loose">
                Exit Value
              </div>
            </div>

            {/* Slider Section */}
            <div className="flex flex-col gap-2">
              <div
                className="relative h-11 w-full bg-white rounded-[86px] border"
                style={{ borderColor: COLORS.neutral.light.light1 }}
              >
                {/* Fill bar */}
                <div
                  className="absolute left-0 top-0 h-full rounded-l-[48px]"
                  style={{
                    width: `${sliderPercentage}%`,
                    backgroundColor: COLORS.neutral.light.light1,
                  }}
                />

                {/* Slider knob */}
                <div
                  className="absolute top-0 h-11 w-11 rounded-full flex items-center justify-center"
                  style={{
                    left: `calc(${sliderPercentage}% - 22px)`,
                    backgroundColor: COLORS.accent.purple,
                  }}
                >
                  <Image
                    src="/assets/icons/Ionicons Designer Pack/menu-outline.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="rotate-90 brightness-0 invert"
                  />
                </div>

                {/* Actual input slider */}
                <input
                  type="range"
                  min="1000000"
                  max="100000000"
                  step="1000000"
                  value={exitValue}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
                />
              </div>

              {/* Labels below */}
              <div className="flex justify-between text-sm font-medium text-zinc-900">
                <span>$1M</span>
                <span>$50M</span>
                <span>$100M</span>
              </div>
            </div>

            {/* Comparison Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* LEFT CARD - Industry Standard */}
              <div
                className="relative rounded-[32px] border backdrop-blur-sm overflow-hidden"
                style={{ borderColor: COLORS.neutral.dark.lightGray1 }}
              >
                {/* Content wrapper */}
                <div className="relative z-10 p-6 md:p-10 flex flex-col gap-6 md:gap-10 bg-white/80 h-full">
                  {/* Badge */}
                  <div className="bg-neutral-50 rounded-[20px] px-3 py-2 inline-block w-fit">
                    <span className="text-base font-medium text-neutral-600">
                      The Industry Standard
                    </span>
                  </div>

                  {/* Earnings display */}
                  <div className="flex flex-col">
                    <div className="text-4xl md:text-6xl font-semibold leading-tight md:leading-[64px]">
                      {formatCurrency(standardEarnings)}
                    </div>
                    <div className="text-lg md:text-xl leading-normal md:leading-loose">
                      Standard Earnings
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-6">
                    {/* Row 1 */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/trending-down.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                        <span className="text-sm font-medium">
                          Limited Carry Share
                        </span>
                        <span className="text-sm text-neutral-600">
                          10% of 20% = 2% Total Profits
                        </span>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/pie-chart.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                        <span className="text-sm font-medium">Small Piece</span>
                        <span className="text-sm text-neutral-600">
                          Minimal Profit Participation
                        </span>
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/accessibility.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                        <span className="text-sm font-medium">
                          Finder Status
                        </span>
                        <span className="text-sm text-neutral-600">
                          You&apos;re a &quot;finder&quot;, not a Partner.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Warning box */}
                  <div
                    className="px-2 py-1 bg-[#F3655B1A] rounded-lg border flex items-center gap-1 w-fit"
                    style={{ borderColor: COLORS.accent.red }}
                  >
                    <Image
                      src="/assets/icons/Ionicons Designer Pack/thumbs-down.svg"
                      alt=""
                      width={16}
                      height={16}
                      style={{
                        filter:
                          "invert(38%) sepia(80%) saturate(2476%) hue-rotate(337deg) brightness(96%) contrast(91%)",
                      }}
                    />
                    <span className="text-sm">Limited Upside Potential</span>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD - ADIN Exclusive */}
              <div
                className="relative rounded-[32px] border backdrop-blur-sm overflow-hidden"
                style={{ borderColor: COLORS.neutral.dark.lightGray1 }}
              >
                {/* Gradient background */}
                <div
                  className="absolute inset-x-0 top-0 h-48 pointer-events-none"
                  style={{
                    background: `linear-gradient(to right, ${COLORS.accent.green}, ${COLORS.accent.yellow}, ${COLORS.accent.orange}, ${COLORS.accent.red}, ${COLORS.accent.purple}, ${COLORS.accent.blue})`,
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
                  }}
                />

                {/* Content wrapper */}
                <div className="relative z-10 p-6 md:p-10 flex flex-col gap-6 md:gap-10 bg-white/70 h-full">
                  {/* Badge */}
                  <div className="bg-white rounded-[20px] px-3 py-2 inline-block w-fit">
                    <span className="text-base font-medium text-neutral-600">
                      ADIN Exclusive
                    </span>
                  </div>

                  {/* Earnings display */}
                  <div className="flex flex-col">
                    <div className="text-4xl md:text-6xl font-semibold leading-tight md:leading-[64px]">
                      {formatCurrency(adinEarnings)}
                    </div>
                    <div className="text-lg md:text-xl leading-normal md:leading-loose">
                      Earnings <span className="italic">with</span> ADIN
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-col gap-6">
                    {/* Row 1 */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/sparkles.svg"
                        alt=""
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "invert(78%) sepia(82%) saturate(548%) hue-rotate(359deg) brightness(102%) contrast(101%)",
                        }}
                      />
                      <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                        <span className="text-sm font-medium">
                          Premium Carry Share
                        </span>
                        <span className="text-sm text-neutral-600">
                          50% of 20% = 10% Total Profits
                        </span>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/heart.svg"
                        alt=""
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "invert(38%) sepia(80%) saturate(2476%) hue-rotate(337deg) brightness(96%) contrast(91%)",
                        }}
                      />
                      <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                        <span className="text-sm font-medium">
                          True Partnership
                        </span>
                        <span className="text-sm text-neutral-600">
                          Genuine partner in the upside.
                        </span>
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/people.svg"
                        alt=""
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "invert(47%) sepia(95%) saturate(1775%) hue-rotate(235deg) brightness(92%) contrast(88%)",
                        }}
                      />
                      <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                        <span className="text-sm font-medium">
                          Full Support
                        </span>
                        <span className="text-sm text-neutral-600">
                          Backed by ADIN&apos;s infrastructure.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Success badges */}
                  <div className="flex gap-2 md:gap-4 flex-wrap">
                    <div
                      className="pl-1.5 pr-2 py-1 bg-[#49C17A1A] rounded-lg border flex items-center gap-1"
                      style={{ borderColor: COLORS.accent.green }}
                    >
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt=""
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "invert(65%) sepia(39%) saturate(634%) hue-rotate(97deg) brightness(92%) contrast(86%)",
                        }}
                      />
                      <span className="text-sm">5x More Upside</span>
                    </div>

                    <div
                      className="pl-1.5 pr-2 py-1 bg-[#49C17A1A] rounded-lg border flex items-center gap-1"
                      style={{ borderColor: COLORS.accent.green }}
                    >
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt=""
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "invert(65%) sepia(39%) saturate(634%) hue-rotate(97deg) brightness(92%) contrast(86%)",
                        }}
                      />
                      <span className="text-sm">Full Support</span>
                    </div>

                    <div
                      className="pl-1.5 pr-2 py-1 bg-[#49C17A1A] rounded-lg border flex items-center gap-1"
                      style={{ borderColor: COLORS.accent.green }}
                    >
                      <Image
                        src="/assets/icons/Ionicons Designer Pack/checkmark-circle.svg"
                        alt=""
                        width={16}
                        height={16}
                        style={{
                          filter:
                            "invert(65%) sepia(39%) saturate(634%) hue-rotate(97deg) brightness(92%) contrast(86%)",
                        }}
                      />
                      <span className="text-sm">Shared Success</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
