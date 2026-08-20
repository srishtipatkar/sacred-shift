"use client";

import { motion } from "framer-motion";
import { journeyPhases } from "@/data/programs";
import SectionHeading from "./SectionHeading";
import DiscoveryCallButton from "./DiscoveryCallButton";
import WhatsAppButton from "./WhatsAppButton";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProgramJourney() {
  return (
    <section id="the-journey-phases" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading eyebrow="The 90-Day Journey" align="center" title="A journey in three phases" />

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent md:block" />

          <div className="grid gap-16 md:grid-cols-3 md:gap-10">
            {journeyPhases.map((phase, i) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease }}
                className="relative"
              >
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/60 bg-ivory md:mx-0">
                  <span className="font-display text-xl text-plum">0{i + 1}</span>
                </div>

                <p className="label mt-6 text-center text-amethyst md:text-left">{phase.phase}</p>
                <h3 className="font-display mt-2 text-center text-4xl text-plum md:text-left">{phase.name}</h3>
                <p className="font-display mt-1 text-center italic text-violet md:text-left">{phase.subtitle}</p>

                <p className="mt-5 text-center text-base leading-relaxed text-charcoal/65 md:text-left">
                  {phase.description}
                </p>

                <div className="mt-6 space-y-2 rounded-sm border border-amethyst/15 bg-white/40 p-5 text-center md:text-left">
                  <p className="text-base italic text-charcoal/45">{phase.from}</p>
                  <p className="label text-gold">&darr;</p>
                  <p className="font-display italic text-violet">{phase.to}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          <DiscoveryCallButton />
          <WhatsAppButton programName="Shiv Shakti Balance (90-Day Journey)" label="Message on WhatsApp" />
        </motion.div>
      </div>
    </section>
  );
}
