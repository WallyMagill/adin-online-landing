"use client";

import { COLORS, FAQ_CONFIG, FAQ_DATA, SECTION_SPACING } from "@/lib/constants";
import { FAQItemProps, FAQSectionProps } from "@/types/components";
import { useState } from "react";

function FAQItemComponent({ faq, index, isExpanded, onToggle }: FAQItemProps) {
  return (
    <div className="w-full">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex justify-between items-start py-4 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className="text-xl font-semibold leading-7 text-neutral-900 pr-4 text-left">
          {faq.question}
        </h3>
        <div className="flex-shrink-0">
          <div
            className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isExpanded
                ? "bg-neutral-50 border border-purple-400"
                : "bg-neutral-50 border border-purple-200"
            }`}
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

      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
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

export default function FAQSection({
  title = FAQ_CONFIG.title,
  description = FAQ_CONFIG.description,
  tabs = FAQ_CONFIG.tabs,
  faqs = FAQ_DATA,
}: FAQSectionProps = {}) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  // Removed activeTab state to prevent style swapping on click

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={SECTION_SPACING.padding}>
      <div className={SECTION_SPACING.container}>
        {/* Header */}
        <div className={SECTION_SPACING.descriptionMargin}>
          <h2
            className={`${SECTION_SPACING.heading.mobile} ${SECTION_SPACING.heading.desktop} ${SECTION_SPACING.heading.styles} mb-4 max-w-2xl`}
          >
            {title}
          </h2>
          <p className={`${SECTION_SPACING.description.styles} mb-6`}>
            {description}
          </p>

          {/* Tabs */}
          <div className="flex items-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full text-base font-medium leading-tight transition-all duration-200 hover:scale-105 ${
                  tab === "General"
                    ? "bg-purple-400 text-white"
                    : "bg-white text-purple-400 border border-purple-200 hover:bg-purple-50"
                }`}
                style={{
                  backgroundColor:
                    tab === "General" ? COLORS.accent.purple : undefined,
                  color:
                    tab === "General"
                      ? COLORS.base.pureWhite
                      : COLORS.accent.purple,
                  borderColor:
                    tab === "General"
                      ? "transparent"
                      : COLORS.neutral.light.light2,
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-12">
          {faqs.map((faq, index) => (
            <div key={index}>
              <FAQItemComponent
                faq={faq}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={toggleFAQ}
              />
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
