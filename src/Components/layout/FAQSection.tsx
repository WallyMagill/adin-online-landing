"use client";
import { COLORS } from "@/lib/constants";
import { useState } from "react";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  tabs?: string[];
  faqs?: FAQItem[];
}

// =============================================================================
// DEFAULT DATA
// =============================================================================

const defaultFAQs: FAQItem[] = [
  {
    question: "What is ADIN?",
    answer:
      "ADIN is an AI-first, community-powered venture DAO that combines a network of AI-agents with human insight to identify and fund the best early-stage startups. Its engine ingests a company's deck or website and, in minutes, produces a comprehensive report covering team background, market landscape, competitive positioning, and evaluations from a five-agent AI \"venture board.\" Investors review these data-rich findings and vote. By marrying AI's analytical speed with the collective wisdom of a diverse investor community, ADIN enables faster, more transparent capital deployment and broader access to high-potential deals.",
  },
  {
    question: "How is ADIN structured?",
    answer:
      "ADIN operates as a decentralized autonomous organization (DAO) with a hybrid governance model. The structure combines AI-driven analysis with community decision-making to ensure transparent and efficient investment processes.",
  },
  {
    question: "What industries does ADIN focus on?",
    answer:
      "ADIN focuses on early-stage startups across connectivity, compute, crypto, and creative economies. We seek bold ideas with strong operator insight and clear market potential.",
  },
  {
    question: "Will tokenization fit into ADIN's model?",
    answer:
      "Tokenization plays a key role in ADIN's governance and incentive structure, enabling transparent voting mechanisms and aligned participation across our investor community.",
  },
  {
    question: "How can I join the network?",
    answer:
      "You can join ADIN by applying through our member portal. We welcome investors, operators, and founders who share our vision for AI-enhanced venture capital.",
  },
  {
    question: "Who made ADIN?",
    answer:
      "ADIN was created by a team of experienced operators and technologists passionate about democratizing access to venture capital through AI and community governance.",
  },
];

// =============================================================================
// FAQ ITEM COMPONENT
// =============================================================================

interface FAQItemComponentProps {
  faq: FAQItem;
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
}

function FAQItemComponent({
  faq,
  index,
  isExpanded,
  onToggle,
}: FAQItemComponentProps) {
  return (
    <div className="w-full">
      {/* FAQ Header */}
      <button
        onClick={() => onToggle(index)}
        className="w-full flex justify-between items-start py-4 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${index}`}
      >
        {/* Question Text */}
        <h3 className="text-xl font-semibold leading-7 text-neutral-900 pr-4 text-left">
          {faq.question}
        </h3>

        {/* Toggle Icon Button */}
        <div className="flex-shrink-0">
          <div
            className={`
              w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out
              ${
                isExpanded
                  ? "bg-neutral-50 border border-purple-400"
                  : "bg-neutral-50 border border-purple-200"
              }
            `}
          >
            {isExpanded ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
              >
                <path
                  d="M6 15L12 9L18 15"
                  stroke={COLORS.accent.purple}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
      </button>

      {/* Answer Content (Expandable) */}
      <div
        id={`faq-answer-${index}`}
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="pt-2 pb-4">
          <p className="text-base leading-normal text-neutral-900 max-w-4xl">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export default function FAQSection({
  title = "Frequently asked questions.",
  description = "Here is a collection of what is asked most about ADIN.",
  tabs = ["General", "Pricing"],
  faqs = defaultFAQs,
}: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // All items closed by default
  const [activeTab, setActiveTab] = useState<string>(tabs[0] || "General");

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-semibold leading-tight md:leading-[64px] text-neutral-900 mb-4 max-w-2xl">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed md:leading-loose text-neutral-900 mb-6">
            {description}
          </p>

          {/* Tab Pills Container */}
          <div className="flex items-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-4 py-2 rounded-full text-base font-medium leading-tight transition-all duration-200 ease-in-out
                  ${
                    activeTab === tab
                      ? "bg-purple-400 text-white"
                      : "bg-white text-purple-400 border border-purple-200 hover:bg-purple-50"
                  }
                `}
                style={{
                  backgroundColor:
                    activeTab === tab ? COLORS.accent.purple : undefined,
                  color:
                    activeTab === tab
                      ? COLORS.base.pureWhite
                      : COLORS.accent.purple,
                  borderColor:
                    activeTab === tab
                      ? "transparent"
                      : COLORS.neutral.light.light2,
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-12">
          {faqs.map((faq, index) => (
            <div key={index}>
              <FAQItemComponent
                faq={faq}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={toggleFAQ}
              />

              {/* Divider Line - only show if not the last item */}
              {index < faqs.length - 1 && (
                <div className="border-t border-purple-100 mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
