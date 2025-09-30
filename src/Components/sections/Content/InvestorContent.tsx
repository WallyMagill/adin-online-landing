import dynamic from "next/dynamic";
import InvestorSection1 from "./Investor/InvestorSection1";
import InvestorSection2 from "./Investor/InvestorSection2";

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

export default function InvestorContent() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24">
      <InvestorSection1 />
      <InvestorSection2 />
      <FAQSection />
      <InvestSection title="Ready to shape the future of investing?" />
    </div>
  );
}
