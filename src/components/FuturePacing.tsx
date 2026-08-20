"use client";

import { motion } from "framer-motion";
import { futurePacingLines } from "@/data/programs";

const ease = [0.16, 1, 0.3, 1] as const;

// Icons paired with the four most resonant future-pacing lines, kept as simple line-art —
// full supplied copy remains in futurePacingLines for future use, this is a curated subset.
const highlights = [
  {
    text: futurePacingLines[0],
    icon: (
      <path d="M12 3v4M5 12H3m18 0h-2M5.6 5.6l1.4 1.4m10.4-1.4-1.4 1.4M6 18a6 6 0 1 1 12 0" />
    ),
  },
  {
    text: futurePacingLines[1],
    icon: <path d="M8 12h8M8 8l-4 4 4 4M12 4v16" />,
  },
  {
    text: futurePacingLines[3],
    icon: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />,
  },
  {
    text: futurePacingLines[4],
    icon: <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.4-6.4-2.1 2.1M8.7 15.3l-2.1 2.1m0-10.8 2.1 2.1m7.6 7.6 2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />,
  },
];

export default function FuturePacing() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 text-ivory md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(125,91,116,0.5), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="label text-gold">Your Sacred Shift Starts Here</p>

        <div className="mt-14 grid gap-x-10 gap-y-10 text-left sm:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="flex items-start gap-4"
            >
              <svg
                viewBox="0 0 24 24"
                className="mt-1 h-7 w-7 flex-shrink-0 text-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {item.icon}
              </svg>
              <p className="font-display text-xl italic leading-snug text-ivory/85 md:text-2xl">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="font-display mt-16 text-3xl text-champagne md:text-5xl"
        >
          &ldquo;I know who I am.
          <br />
          I know what I need.
          <br />
          And I trust myself.&rdquo;
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="label mt-10 text-gold"
        >
          This is the shift we create.
        </motion.p>
      </div>
    </section>
  );
}
