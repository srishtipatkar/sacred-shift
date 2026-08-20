import { siteConfig } from "@/data/siteConfig";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-mauve md:hidden [padding-bottom:env(safe-area-inset-bottom)]">
      <a
        href={siteConfig.discoveryCallUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring label flex items-center justify-center gap-2 px-4 py-4 text-gold"
      >
        Begin Your Shiv Shakti Journey
      </a>
    </div>
  );
}
