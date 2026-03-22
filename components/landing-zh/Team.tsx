"use client";

import { content } from "@/lib/content-zh";
import { assets } from "@/lib/assets";
import { SectionWrapper } from "@/components/landing/SectionWrapper";

const assetMap: Record<string, string | null> = {
  AZ: assets.teamAlex,
  VR: assets.teamVivian,
};

export function Team() {
  return (
    <SectionWrapper className="!pb-10 md:!pb-12">
      <p
        className="text-2xl md:text-3xl text-center text-gray-900 max-w-[680px] mx-auto mb-12 leading-relaxed"
      >
        {content.team.vision}
      </p>

      <div className="flex justify-center gap-12 md:gap-16">
        {content.team.members.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            {assetMap[member.initials] ? (
              <div className="relative w-[120px] h-[120px] mb-4 mt-6">
                <div className="absolute inset-0 rounded-full bg-gray-100" />
                <img
                  src={assetMap[member.initials]!}
                  alt={member.name}
                  className="absolute w-[144px] h-[144px] object-cover left-1/2 bottom-0 -translate-x-1/2 rounded-full"
                  style={{
                    clipPath: "ellipse(50% 60% at 50% 60%)",
                  }}
                />
              </div>
            ) : (
              <div className="w-[120px] h-[120px] rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-semibold text-gray-300">
                  {member.initials}
                </span>
              </div>
            )}
            <p className="font-semibold text-gray-900">{member.name}</p>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
