"use client";

import { motion } from "framer-motion";
import { notAbout } from "@/data/programs";
import SectionHeading from "./SectionHeading";

export default function NotAboutSection() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <SectionHeading eyebrow="Let's Be Clear" align="center" title="This program is not about…" />

        <div className="mx-auto mt-12 flex max-w-lg flex-col items-center gap-4">
          {notAbout.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 flex-shrink-0 text-gold/60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
              <p className="font-display text-xl text-charcoal/40 line-through decoration-gold/60 decoration-1 md:text-2xl">
                {line}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-14 max-w-md text-lg text-charcoal/70"
        >
          It is about becoming more conscious about how you live your life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mx-auto mt-14 max-w-xl"
        >
          <p className="font-display text-2xl text-plum md:text-3xl">
            You can be powerful and peaceful.
            <br />
            Ambitious and feminine.
            <br />
            Independent and receptive.
            <br />
            Strong and soft.
            <br />
            Successful and fulfilled.
          </p>
          <p className="font-display mt-6 text-3xl italic text-gold md:text-4xl">You do not have to choose.</p>
        </motion.div>
      </div>
    </section>
  );
}
