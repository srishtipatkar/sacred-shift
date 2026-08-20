"use client";

import { motion } from "framer-motion";
import { coach } from "@/data/coach";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Credentials() {
  return (
    <section className="bg-ivory pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-10 border-y border-gold/25 py-14 sm:grid-cols-3">
          {coach.credentials.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="text-center"
            >
              <p className="font-display text-6xl text-plum">{s.value}</p>
              <p className="label mt-2 text-violet">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 text-center">
          <p className="label text-amethyst">Certifications</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {coach.credentials.certifications.map((c) => (
              <span key={c} className="font-display text-lg text-charcoal/70">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
