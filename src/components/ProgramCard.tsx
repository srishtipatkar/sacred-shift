"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { openWhatsApp } from "@/data/siteConfig";
import type { Program } from "@/data/programs";
import { staggerItem } from "@/lib/motion";

export default function ProgramCard({ program }: { program: Program; index?: number }) {
  return (
    <motion.div
      variants={staggerItem(20)}
      className="group flex flex-col overflow-hidden border border-amethyst/15 bg-white/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mauve">
        {program.image ? (
          <Image
            src={program.image}
            alt={program.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(201,164,92,0.25), transparent 60%)" }}
          >
            <span className="font-display text-3xl italic text-champagne/70">Shakti</span>
          </div>
        )}
        {program.duration && (
          <span className="label absolute left-4 top-4 rounded-full bg-mauve/80 px-3 py-1 text-champagne">
            {program.duration}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-plum">{program.name}</h3>
        {program.tagline && <p className="font-display mt-1 italic text-base text-violet">{program.tagline}</p>}
        <p className="mt-3 flex-1 text-base leading-relaxed text-charcoal/60">{program.description}</p>

        <button
          type="button"
          onClick={() => openWhatsApp(program.name)}
          className="focus-ring label mt-6 inline-flex items-center justify-center rounded-full border border-mauve/25 px-6 py-2.5 text-plum transition-colors duration-300 hover:border-gold hover:text-gold"
        >
          I&apos;m Interested
        </button>
      </div>
    </motion.div>
  );
}
