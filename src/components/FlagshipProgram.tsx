"use client";

import { motion } from "framer-motion";
import DiscoveryCallButton from "./DiscoveryCallButton";
import WhatsAppButton from "./WhatsAppButton";

const ease = [0.16, 1, 0.3, 1] as const;

export default function FlagshipProgram() {
  return (
    <section id="programs" className="relative overflow-hidden bg-gradient-to-br from-plum to-mauve py-24 text-ivory md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 10%, rgba(125,91,116,0.55), transparent 55%), radial-gradient(ellipse at 85% 95%, rgba(201,164,92,0.15), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="label text-gold"
        >
          The Flagship Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="font-display mt-6 text-6xl leading-none text-ivory sm:text-8xl md:text-9xl"
        >
          Shiv Shakti
          <br />
          <span className="italic text-champagne">Balance</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mt-8 h-px w-32 bg-gold"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="label mt-8 text-gold tracking-wider"
        >
          90-Day Transformation Journey
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-display mt-4 text-3xl text-ivory md:text-4xl"
        >
          From Burnout to Balance.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display mt-2 italic text-xl text-champagne/90"
        >
          Where your inner strength meets your inner softness. Reclaim your life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <DiscoveryCallButton />
          <WhatsAppButton programName="Shiv Shakti Balance (90-Day Journey)" label="Message on WhatsApp" variant="outline-light" />
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.75 }}
          href="#the-journey-phases"
          className="focus-ring label mt-8 inline-block text-champagne/70 underline decoration-gold/40 underline-offset-4 hover:text-gold"
        >
          See the 90-Day Journey &darr;
        </motion.a>
      </div>
    </section>
  );
}
