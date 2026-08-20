"use client";

import { motion } from "framer-motion";
import { coach } from "@/data/coach";
import { staggerContainer, staggerItem } from "@/lib/motion";

const lifeIcons = [
  // grow professionally without losing yourself personally -> upward growth
  <path key="growth" d="M4 20V14M10 20V10M16 20V6M22 20V13 M4 14l6-4 6 3 6-6" />,
  // success and peace can exist together -> balance scale
  <path key="balance" d="M12 3v18M5 8l-3 6a3 3 0 0 0 6 0l-3-6Zm14 0-3 6a3 3 0 0 0 6 0l-3-6ZM12 3 5 8h14l-7-5ZM8 21h8" />,
  // connected to worth, energy, relationships, purpose -> radiant compass
  <path key="compass" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 8v1M12 15v1M8 12h1M15 12h1 M14.2 9.8 13 13l-3.2 1.2L11 11l3.2-1.2Z" />,
];

export default function VisionSection() {
  const [statement, ...lifeLines] = coach.vision.lines;

  return (
    <section className="bg-ivory pt-8 pb-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="label text-gold">{coach.vision.heading}</p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="font-display mx-auto mt-8 max-w-2xl text-3xl leading-snug text-plum md:text-4xl"
        >
          {statement}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.1)}
          className="mx-auto mt-14 grid max-w-3xl gap-x-10 gap-y-10 text-left sm:grid-cols-3"
        >
          {lifeLines.map((line, i) => (
            <motion.div key={line} variants={staggerItem(14)} className="flex flex-col items-start gap-3">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 flex-shrink-0 text-violet"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {lifeIcons[i]}
              </svg>
              <p className="text-lg leading-relaxed text-charcoal/70">{line}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
