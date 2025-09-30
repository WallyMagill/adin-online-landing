import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Investors - ADIN",
  description:
    "Discover high-quality deal flow powered by AI. Access curated startups, comprehensive due diligence reports, and make informed investment decisions faster.",
  keywords: [
    "investors",
    "deal flow",
    "due diligence",
    "venture capital",
    "startup investment",
    "AI analysis",
  ],
  openGraph: {
    title: "For Investors - ADIN",
    description:
      "Discover high-quality deal flow powered by AI. Access curated startups and comprehensive due diligence reports.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Investors - ADIN",
  },
};

export default function InvestorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
