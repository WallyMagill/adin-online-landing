import { COLORS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function AboutLiveReport() {
  return (
    <div className="w-80 rounded-3xl flex flex-col items-end gap-4 relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#4D4D4D] via-[#8A8A8A] to-[#B3B3B3] opacity-10 rounded-3xl pointer-events-none" />

      {/* Header */}
      <div className="self-stretch pl-4 flex items-center gap-2 relative z-10">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: COLORS.accent.green }}
        />
        <span className="text-sm leading-tight">Live Reports</span>
      </div>

      {/* Report List */}
      <div className="self-stretch flex flex-col gap-2 relative z-10">
        {/* Report 1 - New Range */}
        <div className="self-stretch flex items-center gap-6">
          <div className="flex-1 p-4 bg-white rounded-2xl border border-purple-100 flex items-center gap-2">
            <div className="w-8 h-8 relative rounded-lg overflow-hidden flex items-center justify-center bg-black shrink-0">
              <Image
                src="/assets/images/Frame.svg"
                alt="New Range"
                width={24}
                height={12}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-neutral-900 leading-none truncate">
                  New Range
                </span>
              </div>
              <span className="text-xs text-neutral-600 leading-none mt-1 truncate">
                Automated Compliance
              </span>
            </div>
          </div>
        </div>

        {/* Report 2 - Cactos */}
        <div className="self-stretch flex items-center gap-6">
          <div className="flex-1 p-4 bg-white rounded-2xl border border-purple-100 flex items-center gap-2">
            <div className="w-8 h-8 relative rounded-lg overflow-hidden flex items-center justify-center bg-lime-950 shrink-0">
              <Image
                src="/assets/images/ReportIcon.png"
                alt="Cactos"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-neutral-900 leading-none truncate">
                  Cactos
                </span>
              </div>
              <span className="text-xs text-neutral-600 leading-none mt-1 truncate">
                Energy Systems
              </span>
            </div>
          </div>
        </div>

        {/* Report 3 - OpenAI */}
        <div className="self-stretch flex items-center gap-6">
          <div className="flex-1 p-4 bg-white rounded-2xl border border-purple-100 flex items-center gap-2">
            <div className="w-8 h-8 relative rounded-lg overflow-hidden flex items-center justify-center bg-white shrink-0">
              <Image
                src="/assets/images/ReportIconContainer.svg"
                alt="OpenAI"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-neutral-900 leading-none truncate">
                  OpenAI
                </span>
              </div>
              <span className="text-xs text-neutral-600 leading-none mt-1 truncate">
                Machine Intelligence
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="pl-4 flex items-center gap-2 relative z-10">
        <Link
          href="/reports"
          className="text-xs font-medium text-neutral-600 leading-none hover:text-neutral-900 transition-colors"
        >
          View All Recent Reports →
        </Link>
      </div>
    </div>
  );
}
