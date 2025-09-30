import { Card, ReportCardContent } from "@/Components/ui/card";
import { COLORS, LIVE_REPORTS, LIVE_REPORTS_CONFIG } from "@/lib/constants";
import { LiveReportsProps } from "@/types/components";
import Link from "next/link";

export default function AboutLiveReport({ className = "" }: LiveReportsProps) {
  return (
    <div
      className={`w-80 rounded-3xl flex flex-col items-end gap-4 relative ${className}`}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#4D4D4D] via-[#8A8A8A] to-[#B3B3B3] opacity-10 rounded-3xl pointer-events-none" />

      {/* Header */}
      <div className="self-stretch pl-4 flex items-center gap-2 relative z-10">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: COLORS.accent.green }}
        />
        <span className="text-sm leading-tight">
          {LIVE_REPORTS_CONFIG.header}
        </span>
      </div>

      {/* Report List */}
      <div className="self-stretch flex flex-col gap-2 relative z-10">
        {LIVE_REPORTS.map((report) => (
          <Card key={report.id} variant="report">
            <ReportCardContent
              name={report.name}
              category={report.category}
              logo={report.logo}
              logoClassName={report.logoClassName}
              bgColor={report.bgColor}
            />
          </Card>
        ))}
      </div>

      {/* Footer Link */}
      <div className="pl-4 flex items-center gap-2 relative z-10">
        <Link
          href={LIVE_REPORTS_CONFIG.footerLink}
          className="text-xs font-medium text-neutral-600 leading-none hover:text-neutral-900 transition-colors"
        >
          {LIVE_REPORTS_CONFIG.footerText}
        </Link>
      </div>
    </div>
  );
}
