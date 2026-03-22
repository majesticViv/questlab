"use client";

import { content } from "@/lib/content";
import { Accordion } from "@/components/ui/Accordion";
import { SectionWrapper } from "./SectionWrapper";

export function FAQ() {
  return (
    <SectionWrapper id="faq" alternate>
      <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold text-center text-gray-900 mb-12">
        {content.faq.heading}
      </h2>
      <div className="max-w-[680px] mx-auto">
        <Accordion
          items={content.faq.items.map((item) => ({
            question: item.question,
            answer: item.answer.includes("NGSS") ? (
              <>
                Yes. All experiments are aligned to{" "}
                <a
                  href="https://www.nextgenscience.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-accent hover:text-purple-light underline"
                >
                  Next Generation Science Standards (NGSS)
                </a>
                .
              </>
            ) : (
              item.answer
            ),
          }))}
        />
      </div>
    </SectionWrapper>
  );
}
