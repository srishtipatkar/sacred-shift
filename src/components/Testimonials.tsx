"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    scrollContainerRef.current?.scrollBy({ left: direction * 344, behavior: "smooth" });
  };

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          <SectionHeading eyebrow="Real Stories" title={<>Real Stories.<br /> <span className="italic text-violet">Real Shifts.</span></>} />
          <div className="flex gap-2 md:gap-3 flex-shrink-0">
            <button
              type="button"
              aria-label="Scroll testimonials left"
              onClick={() => scroll(-1)}
              className="focus-ring rounded-full border border-violet/30 p-2.5 text-violet transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Scroll testimonials right"
              onClick={() => scroll(1)}
              className="focus-ring rounded-full border border-violet/30 p-2.5 text-violet transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-hidden scrollbar-hide mt-8" ref={scrollContainerRef}>
          <div className="flex gap-6 pb-4">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.05, ease }}
                className="flex-shrink-0 w-80 border-t border-gold/40 pt-8"
              >
                <span className="font-display block -mt-8 mb-4 text-5xl text-gold/40">&ldquo;</span>
                <blockquote className="font-display text-lg italic leading-relaxed text-plum/80">{t.quote}</blockquote>
                <figcaption className="mt-6">
                  <p className="label text-violet">{t.name}</p>
                  <p className="mt-1 text-sm text-charcoal/40">{t.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
