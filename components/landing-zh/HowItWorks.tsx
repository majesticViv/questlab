"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "@/lib/content-zh";
import { SectionWrapper } from "@/components/landing/SectionWrapper";

export function HowItWorks() {
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.15 });

  return (
    <SectionWrapper id="how-it-works" alternate>
      <h2 className="text-2xl md:text-[2.5rem] md:leading-tight font-bold text-center text-gray-900 mb-12 max-w-[680px] mx-auto">
        {content.howItWorks.heading}
      </h2>

      <div
        ref={listRef}
        className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative"
      >
        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-purple-accent/20 z-0" />

        {content.howItWorks.steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="flex flex-col items-center text-center relative z-10"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          >
            <div className="w-16 h-16 rounded-full bg-purple-accent/10 flex items-center justify-center mb-4 text-purple-accent font-bold text-xl">
              {step.number}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{step.label}</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
