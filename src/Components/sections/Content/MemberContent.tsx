import FAQSection from "../../layout/FAQSection";
import InvestSection from "../../layout/InvestSection";
import MemberSection1 from "./Member/MemberSection1";
import MemberSection2 from "./Member/MemberSection2";
import MemberSection3 from "./Member/MemberSection3";

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
