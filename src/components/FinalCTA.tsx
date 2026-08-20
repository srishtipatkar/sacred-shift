"use client";

import { motion } from "framer-motion";
import DiscoveryCallButton from "./DiscoveryCallButton";
import WhatsAppButton from "./WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-mauve py-24 text-center md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(201,164,92,0.15), transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-2 text-ivory/70"
        >
          <p>You don&apos;t need another reminder to be strong.</p>
          <p>You need a space where you can breathe.</p>
          <p>Where you can heal.</p>
          <p>Where you can listen to yourself.</p>
          <p>Where you can remember your worth.</p>
          <p>Where you can become balanced without becoming less powerful.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display mt-10 italic text-2xl text-champagne"
        >
          That is the essence of Shiv Shakti Balance.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-10 text-5xl leading-tight text-ivory md:text-6xl"
        >
          Your power is not lost.
          <br />
          <span className="italic text-gold">Your Shakti is still within you.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-ivory/60"
        >
          It is time to awaken it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <DiscoveryCallButton label="Begin Your Shiv Shakti Journey" />
          <WhatsAppButton programName="Shiv Shakti Balance" label="Talk to Coach Ujwal" variant="outline-light" />
        </motion.div>
      </div>
    </section>
  );
}
