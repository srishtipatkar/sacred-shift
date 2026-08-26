"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/siteConfig";

const links = [
  { label: "The Journey", href: "/#the-journey-phases" },
  { label: "Shiv Shakti Balance", href: "/#programs" },
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Books", href: "/#book" },
  { label: "Journal", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const hasDarkHero = pathname === "/";
  const [scrolledPast, setScrolledPast] = useState(false);
  const [open, setOpen] = useState(false);
  const scrolled = !hasDarkHero || scrolledPast;

  useEffect(() => {
    if (!hasDarkHero) return;
    const onScroll = () => setScrolledPast(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasDarkHero]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(201,164,92,0.25)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5 focus-ring rounded" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo2.jpeg"
            alt="The Sacred Shift - Coach Ujwal"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex flex-col leading-tight">
            <span
              className={cn(
                "label tracking-[0.2em] text-[11px] font-600",
                scrolled ? "text-plum" : "text-ivory"
              )}
            >
              The Sacred Shift
            </span>
            <span className={cn("font-display text-[9px] italic -mt-0.5", scrolled ? "text-amethyst" : "text-champagne")}>
              by Coach Ujwal
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "label focus-ring rounded transition-colors duration-300",
                  scrolled ? "text-charcoal hover:text-violet" : "text-ivory/90 hover:text-gold"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={siteConfig.discoveryCallUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label focus-ring hidden rounded-full bg-gold px-6 py-2.5 text-plum shadow-[0_2px_14px_rgba(201,164,92,0.4)] transition-colors duration-300 hover:bg-champagne lg:inline-flex"
        >
          Book a Discovery Call
        </a>

        <button
          type="button"
          className={cn("focus-ring rounded p-2 lg:hidden", scrolled || open ? "text-plum" : "text-ivory")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-ivory px-6 py-8">
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="label focus-ring block text-lg text-charcoal hover:text-violet"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.discoveryCallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="label focus-ring mt-8 block rounded-full bg-mauve px-6 py-3 text-center text-ivory"
          >
            Begin Your Shiv Shakti Journey
          </a>
        </div>
      )}
    </header>
  );
}
