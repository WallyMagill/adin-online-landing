import FAQSection from "../../layout/FAQSection";
import AboutCarousel from "./About/AboutCarousel";
import AboutSection1 from "./About/AboutSection1";
import AboutSection2 from "./About/AboutSection2";
import InvestSection from "../../layout/InvestSection";

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
