"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block">
      <AnimatePresence>
        {visible && (
          <motion.a
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            href={siteConfig.discoveryCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring label inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-plum shadow-[0_8px_24px_rgba(74,42,59,0.35)] transition-colors duration-300 hover:bg-champagne"
          >
            Book a Discovery Call
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
