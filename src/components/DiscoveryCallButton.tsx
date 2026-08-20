import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/cn";

export default function DiscoveryCallButton({
  label = "BOOK A DISCOVERY CALL",
  variant = "solid",
  className,
}: {
  label?: string;
  variant?: "solid" | "outline" | "ghost-gold";
  className?: string;
}) {
  return (
    <a
      href={siteConfig.discoveryCallUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "focus-ring label inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 transition-colors duration-300",
        variant === "solid" && "bg-gold text-plum hover:bg-champagne",
        variant === "outline" && "border border-ivory/40 text-ivory hover:border-gold hover:text-gold",
        variant === "ghost-gold" && "border border-gold/50 text-gold hover:bg-gold hover:text-plum",
        className
      )}
    >
      {label}
    </a>
  );
}
