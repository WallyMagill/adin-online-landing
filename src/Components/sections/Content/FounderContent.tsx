import FAQSection from "../../layout/FAQSection";
import InvestSection from "../../layout/InvestSection";

export default function FounderContent() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24">
      <FAQSection />
      <InvestSection title="You built the company. Let ADIN fund it." />
    </div>
  );
}
