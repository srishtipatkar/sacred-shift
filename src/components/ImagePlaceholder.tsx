import { cn } from "@/lib/cn";

/**
 * Editorial placeholder for portrait/photo slots.
 * Replace by rendering next/image with the real asset at the given `label` path
 * once photography is available — this component's markup can be swapped 1:1.
 */
export default function ImagePlaceholder({
  label,
  tone = "plum",
  className,
  aspect = "aspect-[4/5]",
}: {
  label: string;
  tone?: "plum" | "ivory";
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-sm",
        aspect,
        tone === "plum"
          ? "bg-gradient-to-br from-mauve via-violet to-mauve"
          : "bg-gradient-to-br from-champagne via-ivory to-amethyst/30",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(201,164,92,0.35), transparent 55%), radial-gradient(circle at 75% 80%, rgba(201,164,92,0.2), transparent 50%)",
        }}
      />
      <svg
        viewBox="0 0 200 200"
        className={cn("relative h-24 w-24 opacity-70", tone === "plum" ? "text-champagne" : "text-violet")}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="100" cy="72" r="34" />
        <path d="M40 172c8-42 40-64 60-64s52 22 60 64" />
      </svg>
      <span
        className={cn(
          "label absolute inset-x-4 bottom-5 text-center text-[0.65rem] sm:text-xs",
          tone === "plum" ? "text-champagne/70" : "text-violet/60"
        )}
      >
        {label}
      </span>
      <span className="pointer-events-none absolute inset-3 rounded-sm border border-gold/30" />
    </div>
  );
}
