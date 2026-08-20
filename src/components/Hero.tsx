"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DiscoveryCallButton from "./DiscoveryCallButton";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-mauve pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 0%, rgba(139,93,120,0.45), transparent 55%), radial-gradient(ellipse at 90% 90%, rgba(201,164,92,0.18), transparent 50%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:gap-6 lg:px-10">
        {/* Vertical Shiv / Shakti / Balance marker */}
        <div className="hidden lg:col-span-1 lg:flex lg:flex-col lg:items-center lg:justify-center gap-6">
          <span className="h-16 w-px bg-gold/40" />
          {["SHIV", "SHAKTI", "BALANCE"].map((w) => (
            <span
              key={w}
              className="label text-champagne/70"
              style={{ writingMode: "vertical-rl" }}
            >
              {w}
            </span>
          ))}
          <span className="h-16 w-px bg-gold/40" />
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="label text-gold"
          >
            The Sacred Shift &middot; by Coach Ujwal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="font-display mt-6 text-6xl leading-[0.98] text-ivory sm:text-7xl md:text-8xl"
          >
            From Burnout
            <br />
            <span className="italic text-champagne">to Balance.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="font-display mt-8 max-w-md text-2xl italic leading-snug text-champagne"
          >
            Where your inner strength meets your inner softness. Reclaim your life.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.35 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ivory/70"
          >
            A transformational journey for working women who are ready to move beyond exhaustion and
            create a life rooted in peace, personal growth, meaningful success, work-life balance, joy,
            and deep fulfilment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#programs"
              className="focus-ring label inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-plum transition-colors duration-300 hover:bg-champagne"
            >
              Discover Shiv Shakti Balance
            </a>
            <DiscoveryCallButton variant="ghost-gold" />
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            className="relative w-full max-w-sm"
          >
            <span className="absolute -inset-4 rounded-sm border border-gold/40" />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/ujwal-hero.jpg"
                alt="Coach Ujwal, Feminine Energy Transformation Coach and Reiki Master Healer"
                fill
                priority
                sizes="(min-width: 1024px) 384px, 90vw"
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease, delay: 0.9 }}
              className="absolute -bottom-6 left-6 right-6 h-px origin-left bg-gold/70"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
