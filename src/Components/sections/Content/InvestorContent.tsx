import FAQSection from "../../layout/FAQSection";
import InvestSection from "../../layout/InvestSection";
import InvestorSection1 from "./Investor/InvestorSection1";
import InvestorSection2 from "./Investor/InvestorSection2";

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
