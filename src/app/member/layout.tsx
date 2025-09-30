import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Members - ADIN",
  description:
    "Join the ADIN community of startup experts, advisors, and operators. Participate in deal evaluation, earn rewards, and connect with innovative startups.",
  keywords: [
    "startup community",
    "deal evaluation",
    "advisors",
    "operators",
    "venture network",
  ],
  openGraph: {
    title: "For Members - ADIN",
    description:
      "Join the ADIN community of startup experts, advisors, and operators. Participate in deal evaluation and earn rewards.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Members - ADIN",
  },
};

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
