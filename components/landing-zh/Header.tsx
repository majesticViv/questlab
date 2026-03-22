"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/lib/content-zh";
import { assets } from "@/lib/assets";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/95 backdrop-blur-sm border-b border-gray-100 flex items-center px-6"
        >
          <div className="max-w-[1120px] mx-auto w-full flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-gray-900 tracking-tight">
              {assets.heroPlanet && (
                <img src={assets.heroPlanet} alt="" className="h-6 w-6" />
              )}
              QuestLab
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {content.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <Button variant="header" href="#waitlist">
              {content.nav.cta}
            </Button>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
