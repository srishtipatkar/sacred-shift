"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

const items = [
  {
    text: "You have a career.",
    icon: <path d="M3 8h18v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19V8Z M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2 M3 13h18" />,
  },
  {
    text: "You have responsibilities.",
    icon: <path d="M6 3h12v18H6z M9 8h6 M9 12h6 M9 16h3.5" />,
  },
  {
    text: "You take care of people.",
    icon: <path d="M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z M16 11a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z M3.5 20c0-3 2.5-6 5.5-6s5.5 3 5.5 6 M14.5 20c0-2.3 1.6-4.6 3.8-4.6s3.7 2.3 3.7 4.6" />,
  },
  {
    text: "You keep things moving.",
    icon: <path d="M20 12a8 8 0 1 1-2.34-5.66 M20 4v4.5h-4.5" />,
  },
];

export default function EmotionalHook() {
  return (
    <section className="bg-ivory pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-x-10 gap-y-8 text-left sm:grid-cols-2"
        >
          {items.map((item) => (
            <motion.div key={item.text} variants={staggerItem(14)} className="flex items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9 flex-shrink-0 text-violet"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {item.icon}
              </svg>
              <p className="font-display font-bold text-xl text-charcoal/80 md:text-2xl">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display mt-12 italic text-2xl text-amethyst md:text-3xl"
        >
          And yet…
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-4 text-lg text-charcoal/60"
        >
          Somewhere inside, you are tired.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mx-auto mt-16 h-px w-24 bg-gold"
        />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-10 text-5xl leading-tight text-plum md:text-7xl"
        >
          Who is taking
          <br />
          care of <span className="italic text-violet">you?</span>
        </motion.h2>
      </div>
    </section>
  );
}
