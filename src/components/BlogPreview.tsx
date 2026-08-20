"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;

export default function BlogPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="The Journal" title="From the Journal" />
          <Link href="/blog" className="focus-ring label border-b border-gold text-violet hover:text-gold">
            Read All Articles
          </Link>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {latest.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
            >
              <Link href={`/blog/${post.slug}`} className="focus-ring group block">
                <div
                  className="aspect-[4/3] w-full"
                  style={{ backgroundImage: "linear-gradient(135deg, #7D5B74, #4A2A3B)" }}
                />
                <p className="label mt-5 text-gold">{post.category}</p>
                <h3 className="font-display mt-2 text-2xl text-plum transition-colors group-hover:text-violet">
                  {post.title}
                </h3>
                <p className="mt-2 text-base text-charcoal/55">{post.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
