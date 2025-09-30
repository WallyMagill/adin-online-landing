import dynamic from "next/dynamic";
import FounderSection1 from "./Founder/FounderSection1";

// Lazy load components below the fold
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

export default function FounderContent() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24">
      <FounderSection1 />
      <FAQSection />
      <InvestSection title="You built the company. Let ADIN fund it." />
    </div>
  );
}
