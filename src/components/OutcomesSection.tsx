"use client";

import { motion } from "framer-motion";
import { outcomes } from "@/data/programs";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function OutcomesSection() {
  return (
    <section className="bg-mauve py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading tone="light" eyebrow="What You Can Walk Away With" align="center" title="A life that feels more like yours" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.05)}
          className="mt-16 grid gap-x-12 gap-y-6 sm:grid-cols-2"
        >
          {outcomes.map((o) => (
            <motion.div key={o} variants={staggerItem(10)} className="flex items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 flex-shrink-0 text-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M8.3 12.3l2.4 2.4 5-5.2" />
              </svg>
              <p className="font-display text-xl italic leading-snug text-ivory/85">{o}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-display mt-16 text-center text-4xl text-gold md:text-6xl"
        >
          A life that feels more like yours.
        </motion.p>
      </div>
    </section>
  );
}
