"use client";

import { openWhatsApp } from "@/data/siteConfig";
import { cn } from "@/lib/cn";

export default function WhatsAppButton({
  programName,
  label = "I'M INTERESTED",
  variant = "outline",
  className,
}: {
  programName: string;
  label?: string;
  variant?: "outline" | "solid" | "outline-light";
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => openWhatsApp(programName)}
      className={cn(
        "focus-ring label inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 transition-colors duration-300",
        variant === "solid" && "bg-mauve text-ivory hover:bg-violet",
        variant === "outline" && "border border-mauve/30 text-plum hover:border-gold hover:text-gold",
        variant === "outline-light" && "border border-ivory/30 text-ivory hover:border-gold hover:text-gold",
        className
      )}
      aria-label={`${label} — ${programName}, opens WhatsApp`}
    >
      {label}
    </button>
  );
}
