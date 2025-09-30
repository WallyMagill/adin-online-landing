import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Founders - ADIN",
  description:
    "Transform your startup pitch with AI-powered analysis and connect with the right investors. Get real-time feedback, improve your deck, and accelerate your fundraising journey.",
  keywords: [
    "startup founders",
    "pitch deck",
    "fundraising",
    "venture capital",
    "AI pitch analysis",
  ],
  openGraph: {
    title: "For Founders - ADIN",
    description:
      "Transform your startup pitch with AI-powered analysis and connect with the right investors.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Founders - ADIN",
  },
};

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
