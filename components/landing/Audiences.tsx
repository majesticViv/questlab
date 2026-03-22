"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import { SectionWrapper } from "./SectionWrapper";

type Tab = "parents" | "teachers";

function AudienceColumn({
  heading,
  subheading,
  bullets,
}: {
  heading: string;
  subheading: string;
  bullets: readonly string[];
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{heading}</h3>
      <p className="text-purple-accent font-medium mb-6">{subheading}</p>
      <ul className="space-y-3">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-500">
            <svg
              className="w-5 h-5 mt-0.5 shrink-0 text-success"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Audiences() {
  const [activeTab, setActiveTab] = useState<Tab>("parents");
  const { parents, teachers } = content.audiences;

  return (
    <SectionWrapper alternate>
      {/* Mobile tabs */}
      <div className="md:hidden flex gap-2 mb-8">
        {(["parents", "teachers"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-lg font-medium text-sm transition-colors min-h-[44px] cursor-pointer ${
              activeTab === tab
                ? "bg-purple-accent text-white"
                : "bg-gray-100 text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab === "parents" ? "For Parents" : "For Teachers"}
          </button>
        ))}
      </div>

      {/* Mobile: active tab only */}
      <div className="md:hidden">
        {activeTab === "parents" ? (
          <AudienceColumn {...parents} />
        ) : (
          <AudienceColumn {...teachers} />
        )}
      </div>

      {/* Desktop: side by side */}
      <div className="hidden md:grid grid-cols-2 gap-16">
        <AudienceColumn {...parents} />
        <AudienceColumn {...teachers} />
      </div>
    </SectionWrapper>
  );
}
