import dynamic from "next/dynamic";
import MemberSection1 from "./Member/MemberSection1";
import MemberSection2 from "./Member/MemberSection2";
import MemberSection3 from "./Member/MemberSection3";

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

export default function MemberContent() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24">
      <MemberSection1 />
      <MemberSection2 />
      <MemberSection3 />
      <FAQSection />
      <InvestSection title="Submit Deals. Earn 10%." />
    </div>
  );
}
