import dynamic from "next/dynamic";
import AboutSection1 from "./About/AboutSection1";
import AboutSection2 from "./About/AboutSection2";

// Lazy load heavy components below the fold
const AboutCarousel = dynamic(() => import("./About/AboutCarousel"), {
  loading: () => (
    <div className="w-full h-96 animate-pulse bg-gray-100 rounded-lg mx-auto max-w-6xl mb-16" />
  ),
  ssr: true,
});

const FAQSection = dynamic(() => import("../../layout/FAQSection"), {
  loading: () => (
    <div className="w-full h-64 animate-pulse bg-gray-50 rounded-lg" />
  ),
  ssr: true,
});

const InvestSection = dynamic(() => import("../../layout/InvestSection"), {
  loading: () => (
    <div className="w-full h-48 animate-pulse bg-gray-100 rounded-lg" />
  ),
  ssr: true,
});

export default function AboutContent() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24 overflow-x-hidden">
      <AboutCarousel />
      <AboutSection1 />
      <AboutSection2 />
      <FAQSection />
      <InvestSection title="Invest with ADIN." />
    </div>
  );
}
