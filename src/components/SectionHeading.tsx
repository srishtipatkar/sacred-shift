"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "label mb-4 flex items-center gap-3",
            align === "center" && "justify-center",
            tone === "dark" ? "text-gold" : "text-champagne"
          )}
        >
          <span className={cn("h-px w-8", tone === "dark" ? "bg-gold" : "bg-champagne")} />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className={cn(
          "font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl",
          tone === "dark" ? "text-plum" : "text-ivory",
          titleClassName
        )}
      >
        {title}
      </motion.h2>
    </div>
  );
}
