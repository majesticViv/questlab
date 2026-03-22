"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "@/lib/content";
import { assets } from "@/lib/assets";
import { SectionWrapper } from "./SectionWrapper";

const placeholders: Record<string, React.ReactNode> = {
  experiment: (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      <rect x="10" y="30" width="60" height="40" rx="4" fill="#7c4dff" opacity="0.15" />
      <polygon points="40,10 55,30 25,30" fill="#7c4dff" opacity="0.3" />
      <circle cx="30" cy="50" r="4" fill="#7c4dff" />
      <circle cx="50" cy="45" r="3" fill="#b388ff" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      <rect x="10" y="15" width="45" height="28" rx="14" fill="#7c4dff" opacity="0.15" />
      <circle cx="24" cy="29" r="3" fill="#7c4dff" />
      <circle cx="34" cy="29" r="3" fill="#7c4dff" />
      <circle cx="44" cy="29" r="3" fill="#7c4dff" />
      <rect x="25" y="50" width="45" height="24" rx="12" fill="#b388ff" opacity="0.2" />
    </svg>
  ),
  world: (
    <svg viewBox="0 0 80 80" className="w-16 h-16">
      <circle cx="20" cy="20" r="4" fill="#7c4dff" />
      <circle cx="60" cy="15" r="3" fill="#b388ff" />
      <circle cx="45" cy="45" r="5" fill="#7c4dff" opacity="0.6" />
      <circle cx="15" cy="60" r="3" fill="#b388ff" opacity="0.5" />
      <circle cx="65" cy="55" r="4" fill="#7c4dff" opacity="0.4" />
      <line x1="20" y1="20" x2="45" y2="45" stroke="#7c4dff" strokeWidth="1" opacity="0.2" />
      <line x1="60" y1="15" x2="45" y2="45" stroke="#7c4dff" strokeWidth="1" opacity="0.2" />
      <line x1="15" y1="60" x2="45" y2="45" stroke="#7c4dff" strokeWidth="1" opacity="0.2" />
      <line x1="65" y1="55" x2="45" y2="45" stroke="#7c4dff" strokeWidth="1" opacity="0.2" />
    </svg>
  ),
};

const assetMap: Record<string, string | null> = {
  experiment: assets.featureExperiment,
  ai: assets.featureAi,
  world: assets.featureWorld,
};

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <SectionWrapper id="features">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.features.items.map((feature, i) => (
          <motion.div
            key={feature.key}
            className="bg-off-white rounded-2xl p-8 flex flex-col items-start hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          >
            <div className="mb-6">
              {assetMap[feature.key] ? (
                <img
                  src={assetMap[feature.key]!}
                  alt=""
                  className="w-16 h-16"
                />
              ) : (
                placeholders[feature.key]
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.headline}
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
