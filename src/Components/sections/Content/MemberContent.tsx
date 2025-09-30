import FAQSection from "../../layout/FAQSection";
import InvestSection from "../../layout/InvestSection";
import MemberSection1 from "./Member/MemberSection1";

export default function MemberContent() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24">
      <MemberSection1 />
      <FAQSection />
      <InvestSection title="Submit Deals. Earn 10%." />
    </div>
  );
}
