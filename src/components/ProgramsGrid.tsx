"use client";

import { motion } from "framer-motion";
import { otherPrograms } from "@/data/programs";
import ProgramCard from "./ProgramCard";
import SectionHeading from "./SectionHeading";
import { staggerContainer } from "@/lib/motion";

export default function ProgramsGrid() {
  return (
    <section className="bg-ivory pt-10 pb-20 md:pt-14 md:pb-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading eyebrow="Other Ways to Work With Me" title="Not ready for the full journey? That's okay." />
        <p className="mt-6 max-w-lg text-charcoal/60">
          You can begin with one of my shorter transformational experiences.
        </p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.08)}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {otherPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display mt-16 text-center text-2xl italic text-violet"
        >
          Every journey can begin with one small step.
        </motion.p>
      </div>
    </section>
  );
}
