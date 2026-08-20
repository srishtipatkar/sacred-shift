"use client";

import { motion } from "framer-motion";
import { learningAreas } from "@/data/programs";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function LearningAreas() {
  return (
    <section className="bg-mauve py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading tone="light" align="center" eyebrow="What You Will Learn" title="Nine areas of the work" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.06)}
          className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {learningAreas.map((area, i) => (
            <motion.div key={area.title} variants={staggerItem(18)} className="border-t border-gold/25 pt-6">
              <span className="label text-champagne/50">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-3 text-2xl text-ivory">{area.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ivory/55">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
