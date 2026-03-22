"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  alternate = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 px-6 ${
        alternate ? "bg-off-white" : "bg-white"
      } ${className}`}
    >
      <motion.div
        className="max-w-[1120px] mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{}}
      >
        {children}
      </motion.div>
    </section>
  );
}
