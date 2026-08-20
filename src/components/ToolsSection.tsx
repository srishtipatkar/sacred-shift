"use client";

import { motion } from "framer-motion";
import { tools, wholeWomanFacets } from "@/data/programs";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ToolsSection() {
  const radius = 46; // percent
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading eyebrow="The Tools I Bring Into the Journey" align="center" title="An ecosystem for the whole woman" />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Orbit visual */}
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-amethyst/20" />
            <div className="absolute inset-10 rounded-full border border-gold/25" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-mauve text-center shadow-lg"
            >
              <span className="font-display text-sm italic leading-tight text-champagne">
                The Whole
                <br />
                Woman
              </span>
            </motion.div>

            {wholeWomanFacets.map((facet, i) => {
              const angle = (i / wholeWomanFacets.length) * 2 * Math.PI - Math.PI / 2;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              return (
                <motion.div
                  key={facet}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease }}
                  className="absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-champagne/60 text-center"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span className="label text-[0.6rem] text-violet">{facet}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Tools list */}
          <div>
            <p className="text-charcoal/70">
              My approach combines coaching, emotional healing and spiritual practices. Depending on your needs, the
              journey may include:
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {tools.map((tool) => (
                <li key={tool} className="border-b border-amethyst/15 pb-3 font-display text-lg text-plum">
                  {tool}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base text-charcoal/50">
              These are not random techniques. They are woven together to support the whole woman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
