"use client";

import { motion } from "framer-motion";
import { recognitionSymptoms } from "@/data/programs";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/motion";

// One icon per line in recognitionSymptoms, in the same order.
const icons = [
  // exhausted, but still keep going -> low battery
  <path key="battery" d="M2.5 8h16v8h-16z M18.5 10.5v3 M5.5 10v4" />,
  // guilty taking time for yourself -> clock
  <path key="clock" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M12 7v5l3.2 2" />,
  // always available for everyone else -> bell
  <path key="bell" d="M12 3a4 4 0 0 0-4 4v2.5c0 2-.8 3-1.8 4.1h11.6c-1-1.1-1.8-2.1-1.8-4.1V7a4 4 0 0 0-4-4Z M10 19.5a2 2 0 0 0 4 0" />,
  // struggle to say no -> raised hand
  <path key="hand" d="M7.5 12.5v-6a1.3 1.3 0 0 1 2.6 0v5 M10.1 11.2V5a1.3 1.3 0 0 1 2.6 0v6.2 M12.7 11.5V6.3a1.3 1.3 0 0 1 2.6 0v7 M15.3 12v-3a1.3 1.3 0 0 1 2.6 0v6.5c0 3-2 5.5-5.4 5.5-2.6 0-4-.9-5.3-2.6l-2.1-3.4c-.5-.9 0-1.9.9-2.1.9-.2 1.6.3 2.1 1.1l1.2 1.7" />,
  // gives love and care, but wonders who cares for her -> heart
  <path key="heart" d="M12 20.3s-7.3-4.4-9.3-9.2C1.4 7.7 3.4 4.5 6.7 4.2c1.9-.2 3.6.8 5.3 2.6 1.7-1.8 3.4-2.8 5.3-2.6 3.3.3 5.3 3.5 4 6.9-2 4.8-9.3 9.2-9.3 9.2Z" />,
  // overthink conversations -> thought bubble
  <path key="thought" d="M4.5 5.5h15v9.5h-8l-3.5 3.3v-3.3h-3.5z M9 9.2c0-.9.9-1.4 1.8-1 .9.4.9 1.4 0 1.8-.9.4-.9 1.4 0 1.8" />,
  // want to slow down -> pause
  <path key="pause" d="M7 5h3v14H7z M14 5h3v14h-3z" />,
  // miss who she used to be -> mirror / reflection
  <path key="mirror" d="M7 3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z M12 9.3a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6Z M8.3 17.5c0-2 1.7-3.6 3.7-3.6s3.7 1.6 3.7 3.6" />,
];

export default function RecognitionSection() {
  return (
    <section className="bg-ivory pt-10 pb-10 md:pt-14 md:pb-14">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Self-Recognition"
          align="center"
          title={
            <>
              You may be successful…
              <br />
              <span className="italic text-violet">but are you at peace?</span>
            </>
          }
        />

        <p className="mx-auto mt-8 max-w-lg text-center text-charcoal/60">Maybe this sounds like you.</p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.06)}
          className="mt-12 grid gap-x-12 gap-y-6 sm:grid-cols-2"
        >
          {recognitionSymptoms.map((line, i) => (
            <motion.div
              key={line}
              variants={staggerItem(14)}
              className="flex items-start gap-4 border-b border-amethyst/15 pb-6"
            >
              <svg
                viewBox="0 0 24 24"
                className="mt-0.5 h-8 w-8 flex-shrink-0 text-violet"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {icons[i]}
              </svg>
              <p className="font-display font-bold text-lg leading-snug text-charcoal/80 md:text-xl">{line}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display mx-auto mt-14 max-w-xl text-center italic text-xl text-amethyst"
        >
          Or perhaps… you don&apos;t even remember who you were before everyone needed you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 max-w-lg text-center"
        >
          <p className="text-charcoal/70">If this feels familiar, you are not failing.</p>
          <p className="font-display mt-2 text-3xl text-plum">
            You are out of balance. <span className="italic text-violet">And balance can be restored.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
