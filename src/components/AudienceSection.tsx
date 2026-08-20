"use client";

import { motion } from "framer-motion";
import { audienceFor } from "@/data/programs";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function AudienceSection() {
  return (
    <section className="bg-champagne/35 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading eyebrow="Is This For You?" title="This program is for you if…" />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.05)}
          className="mt-14 grid gap-x-10 gap-y-5 sm:grid-cols-2"
        >
          {audienceFor.map((line) => (
            <motion.li
              key={line}
              variants={staggerItem(14, "x")}
              className="flex items-start gap-3 border-b border-violet/15 pb-5"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
              <span className="font-display text-lg leading-snug text-plum md:text-xl">{line}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-charcoal/60">You don&apos;t need to have everything figured out.</p>
          <p className="font-display mt-2 text-2xl italic text-violet">You only need to be ready to begin.</p>
        </motion.div>
      </div>
    </section>
  );
}
