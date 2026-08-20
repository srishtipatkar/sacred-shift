"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { bookReviews } from "@/data/book";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function BookReviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="bg-ivory pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          <SectionHeading eyebrow="Reader Reviews" title={<>Readers of <span className="italic text-violet">From Broken to Bliss</span></>} />
          <div className="flex gap-2 md:gap-3 flex-shrink-0">
            <button
              type="button"
              aria-label="Scroll reviews left"
              onClick={() => scrollBy(-1)}
              className="focus-ring rounded-full border border-violet/30 p-2.5 text-violet transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Scroll reviews right"
              onClick={() => scrollBy(1)}
              className="focus-ring rounded-full border border-violet/30 p-2.5 text-violet transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          ref={scrollerRef}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.05)}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {bookReviews.map((r) => (
            <motion.figure
              key={r.name}
              variants={staggerItem(16)}
              className="w-[85%] flex-shrink-0 snap-start rounded-sm border border-amethyst/15 bg-white/50 p-7 sm:w-[46%] lg:w-[31%]"
            >
              <div className="flex gap-0.5 text-gold" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill={s < r.rating ? "currentColor" : "none"} strokeWidth={1.5} />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-charcoal/70">{r.text}</blockquote>
              <figcaption className="label mt-5 text-violet">{r.name}</figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
