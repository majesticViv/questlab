"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content-zh";
import { assets } from "@/lib/assets";
import { Button } from "@/components/ui/Button";

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function useReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(REDUCED_QUERY).matches;
}

function MoonPlaceholder() {
  return (
    <div
      className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full shrink-0"
      style={{
        background:
          "radial-gradient(circle at 35% 35%, var(--color-planet-highlight) 0%, var(--color-planet-base) 50%, var(--color-planet-shadow) 100%)",
      }}
    />
  );
}

function LandscapePlaceholder() {
  return (
    <svg
      viewBox="0 0 1440 320"
      className="w-full h-auto block"
      preserveAspectRatio="none"
    >
      <path
        d="M0,320 L0,220 Q180,120 360,180 Q540,240 720,160 Q900,80 1080,140 Q1260,200 1440,160 L1440,320 Z"
        fill="var(--color-land-mid)"
      />
      <path
        d="M0,320 L0,260 Q200,180 400,230 Q600,280 800,210 Q1000,140 1200,200 Q1350,240 1440,220 L1440,320 Z"
        fill="var(--color-land-dark)"
      />
    </svg>
  );
}

const STARS: { x: number; y: number; size: number; opacity: number; twinkle?: number }[] = [
  { x: 7, y: 8, size: 1, opacity: 0.35 },
  { x: 15, y: 22, size: 1, opacity: 0.4 },
  { x: 22, y: 5, size: 2, opacity: 0.3 },
  { x: 28, y: 38, size: 1, opacity: 0.45 },
  { x: 33, y: 15, size: 1, opacity: 0.35, twinkle: 1 },
  { x: 40, y: 52, size: 1, opacity: 0.3 },
  { x: 45, y: 9, size: 2, opacity: 0.4 },
  { x: 51, y: 28, size: 1, opacity: 0.35 },
  { x: 56, y: 45, size: 1, opacity: 0.3 },
  { x: 62, y: 12, size: 1, opacity: 0.45 },
  { x: 68, y: 35, size: 2, opacity: 0.3, twinkle: 2 },
  { x: 73, y: 7, size: 1, opacity: 0.4 },
  { x: 78, y: 55, size: 1, opacity: 0.35 },
  { x: 83, y: 20, size: 1, opacity: 0.3 },
  { x: 88, y: 42, size: 2, opacity: 0.4 },
  { x: 92, y: 10, size: 1, opacity: 0.35 },
  { x: 5, y: 48, size: 1, opacity: 0.3 },
  { x: 12, y: 60, size: 1, opacity: 0.45, twinkle: 3 },
  { x: 19, y: 32, size: 2, opacity: 0.35 },
  { x: 36, y: 58, size: 1, opacity: 0.3 },
  { x: 48, y: 18, size: 1, opacity: 0.4 },
  { x: 55, y: 62, size: 1, opacity: 0.35 },
  { x: 64, y: 50, size: 2, opacity: 0.3 },
  { x: 71, y: 25, size: 1, opacity: 0.45, twinkle: 4 },
  { x: 80, y: 40, size: 1, opacity: 0.35 },
  { x: 86, y: 58, size: 1, opacity: 0.3 },
  { x: 94, y: 30, size: 2, opacity: 0.4, twinkle: 5 },
  { x: 96, y: 50, size: 1, opacity: 0.35 },
  { x: 3, y: 18, size: 1, opacity: 0.3 },
  { x: 42, y: 4, size: 1, opacity: 0.4 },
];

const TWINKLE_DURATIONS = [4.2, 5.1, 3.8, 5.7, 4.5];
const TWINKLE_DELAYS = [0, 1.3, 2.7, 0.8, 3.5];

const materialize = (delay: number) => ({
  initial: { opacity: 0, filter: "blur(8px)", scale: 1.03 },
  animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
  transition: { duration: 0.25, delay, ease: "easeOut" as const },
});

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative h-[100vh] overflow-hidden flex flex-col items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, var(--color-bg-mid) 0%, var(--color-bg-deep) 70%)",
      }}
    >
      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        {STARS.map((star, i) => (
          <div
            key={i}
            className={star.twinkle ? "star-twinkle" : ""}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              backgroundColor: "#fff",
              opacity: star.opacity,
              ...(star.twinkle
                ? {
                    animation: `twinkle-${star.twinkle} ${TWINKLE_DURATIONS[star.twinkle - 1]}s ease-in-out ${TWINKLE_DELAYS[star.twinkle - 1]}s infinite`,
                  }
                : {}),
            }}
          />
        ))}
      </div>

      <div className="relative z-[5] flex flex-col items-center text-center px-6 max-w-[720px]">
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className="relative z-[2]"
            initial={prefersReduced ? {} : { y: "calc(50vh)" }}
            animate={{ y: 0 }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
            }
          >
            {assets.heroPlanet ? (
              <img
                src={assets.heroPlanet}
                alt="QuestLab logo"
                className="w-12 h-12 md:w-[60px] md:h-[60px]"
              />
            ) : (
              <MoonPlaceholder />
            )}
          </motion.div>

          <motion.span
            className="text-white text-[2.25rem] md:text-[2.75rem] font-medium tracking-tight leading-none"
            {...(prefersReduced ? {} : materialize(0.5))}
          >
            {content.hero.logoText}
          </motion.span>
        </div>

        <motion.p
          className="text-white text-2xl sm:text-[1.75rem] md:text-[2.5rem] md:leading-[1.2] font-normal mb-8"
          {...(prefersReduced ? {} : materialize(0.6))}
        >
          {content.hero.tagline}
        </motion.p>

        <motion.div
          {...(prefersReduced ? {} : materialize(0.7))}
        >
          <Button href="#waitlist">{content.hero.cta}</Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-[3]"
        initial={prefersReduced ? {} : { y: "100%" }}
        animate={{ y: 0 }}
        transition={
          prefersReduced
            ? { duration: 0 }
            : { duration: 0.6, ease: "easeOut" as const }
        }
      >
        {assets.heroLandscape ? (
          <img src={assets.heroLandscape} alt="" className="w-full block scale-[1.15] md:scale-100 origin-bottom" />
        ) : (
          <LandscapePlaceholder />
        )}
      </motion.div>
    </section>
  );
}
