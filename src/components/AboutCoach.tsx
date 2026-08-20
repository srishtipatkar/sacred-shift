"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { coach } from "@/data/coach";
import DiscoveryCallButton from "./DiscoveryCallButton";
import { staggerContainer, staggerItem } from "@/lib/motion";

const ease = [0.16, 1, 0.3, 1] as const;

const listingIcons = [
  // listen without judgement -> ear
  <path key="ear" d="M8 12.5c0-4.5 2.7-8 6-8s6 3 6 7c0 3-1.7 4-2.8 5.3-.8.9-1.2 1.7-1.2 3.2a2.5 2.5 0 0 1-5 0v-2 M8 12.5c0 2 .8 3 1.6 4" />,
  // guide without taking away power -> compass
  <path key="compass" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M14.5 9.5 13 13l-3.5 1.5L11 11l3.5-1.5Z" />,
  // help reconnect with strength and wisdom -> sparkle
  <path key="sparkle" d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />,
];

function CoachPhoto({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease }}
      className={`relative ${className ?? ""}`}
    >
      <span className="absolute -inset-4 rounded-sm border border-gold/30" />
      <div className="relative aspect-[731/1280] w-full overflow-hidden rounded-sm">
        <Image
          src="/images/mamma2.jpeg"
          alt="Coach Ujwal, Feminine Energy Transformation Coach and Reiki Master Healer"
          fill
          sizes="(min-width: 1024px) 420px, 60vw"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}

export default function AboutCoach() {
  return (
    <section id="about" className="bg-mauve py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Mobile: centered intro + photo up top, so nothing reads as mismatched or floating */}
        <div className="mx-auto max-w-sm text-center lg:hidden">
          <p className="label text-gold">Meet Coach Ujwal</p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-ivory">
            The woman behind <span className="italic text-champagne">Shiv Shakti Balance</span>
          </h2>
          <CoachPhoto className="mx-auto mt-8 max-w-[240px]" />
          <p className="label mt-6 whitespace-pre-line text-champagne">{coach.positioning}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 lg:pr-6">
            <div className="hidden lg:block">
              <p className="label text-gold">Meet Coach Ujwal</p>
              <h2 className="font-display mt-6 text-5xl leading-tight text-ivory md:text-6xl">
                The woman behind <span className="italic text-champagne">Shiv Shakti Balance</span>
              </h2>
              <p className="label mt-6 whitespace-pre-line text-champagne">{coach.positioning}</p>
            </div>

            <div className="mt-10 space-y-4 border-l-2 border-gold/25 pl-6 text-left text-lg leading-relaxed text-ivory/75 lg:mt-0">
              {coach.bio.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer(0.1)}
              className="mt-8 space-y-4 text-left"
            >
              {coach.bioListing.map((line, i) => (
                <motion.div key={line} variants={staggerItem(12)} className="flex items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 flex-shrink-0 text-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {listingIcons[i]}
                  </svg>
                  <p className="font-display text-xl italic text-champagne">{line}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 space-y-3 text-left text-lg leading-relaxed text-ivory/75">
              {coach.bioClosing.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-10 text-center lg:text-left">
              <DiscoveryCallButton />
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:col-start-8 lg:sticky lg:top-28 lg:block lg:self-start">
            <CoachPhoto />
          </div>
        </div>
      </div>
    </section>
  );
}
