import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "ADIN - AI-First Venture Capital",
  description:
    "ADIN is an AI-powered venture capital platform connecting founders, investors, and members in the startup ecosystem.",
  keywords: [
    "venture capital",
    "AI",
    "startups",
    "investment",
    "biotech",
    "fintech",
    "deep tech",
  ],
  metadataBase: new URL("https://adin.online"),
  openGraph: {
    title: "ADIN - AI-First Venture Capital",
    description:
      "AI-powered venture capital platform connecting founders, investors, and members in the startup ecosystem.",
    type: "website",
    locale: "en_US",
    siteName: "ADIN",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADIN - AI-First Venture Capital",
    description:
      "AI-powered venture capital platform connecting founders, investors, and members.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Viewport meta tag for mobile responsiveness */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* Force light mode */}
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
