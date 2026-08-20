"use client";

import Link from "next/link";
import { MessageCircle, AtSign } from "lucide-react";
import { siteConfig, openWhatsApp } from "@/data/siteConfig";

function InstagramGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.5c0-.6.4-1 1-1h1V8Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl text-ivory">Coach Ujwal</p>
            <p className="mt-2 text-sm leading-relaxed text-ivory/60">
              Feminine Energy Transformation Coach
              <br />
              Reiki Master Healer
            </p>
            <p className="label mt-6 text-gold">The Sacred Shift · Shiv Shakti Balance</p>
          </div>

          <div>
            <p className="label mb-4 text-champagne">Connect</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 hover:text-gold"
                >
                  <InstagramGlyph /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 hover:text-gold"
                >
                  <FacebookGlyph /> Facebook
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.threadsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 hover:text-gold"
                >
                  <AtSign size={16} /> Threads
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openWhatsApp("Shiv Shakti Balance")}
                  className="focus-ring inline-flex items-center gap-2 hover:text-gold"
                >
                  <MessageCircle size={16} /> WhatsApp
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="label mb-4 text-champagne">Legal</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="focus-ring hover:text-gold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="focus-ring hover:text-gold">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="focus-ring hover:text-gold">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="focus-ring hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 border-t border-ivory/10 pt-8 text-center">
          <p className="font-display italic text-lg text-champagne">Come back to yourself.</p>
          <p className="text-xs text-ivory/40">© {new Date().getFullYear()} Coach Ujwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
