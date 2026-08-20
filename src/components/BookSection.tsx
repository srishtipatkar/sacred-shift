"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { book } from "@/data/book";
import { siteConfig } from "@/data/siteConfig";

const ease = [0.16, 1, 0.3, 1] as const;

export default function BookSection() {
  return (
    <section id="book" className="bg-champagne/30 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="relative mx-auto max-w-xs"
          >
            <div className="relative aspect-[2/3] overflow-hidden border border-gold/40 shadow-xl">
              <Image
                src={book.coverImage}
                alt={`${book.title} — book cover`}
                fill
                sizes="(min-width: 1024px) 320px, 80vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <p className="label text-violet">From the Author</p>
          <h2 className="font-display mt-4 text-5xl text-plum md:text-6xl">{book.title}</h2>
          <p className="font-display mt-3 italic text-xl text-amethyst">{book.subtitle}</p>
          <p className="label mt-4 text-charcoal/50">by {book.author}</p>

          <div className="mt-8 space-y-4 text-charcoal/70">
            {book.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <a
            href={siteConfig.amazonBookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring label mt-10 inline-flex items-center justify-center rounded-full bg-mauve px-8 py-3.5 text-ivory transition-colors duration-300 hover:bg-violet"
          >
            Read on Amazon
          </a>
        </div>
      </div>
    </section>
  );
}
