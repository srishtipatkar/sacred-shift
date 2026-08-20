"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { coach } from "@/data/coach";
import { staggerContainer, staggerItem } from "@/lib/motion";

const ease = [0.16, 1, 0.3, 1] as const;

function WhyPhoto({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease }}
      className={`relative ${className ?? ""}`}
    >
      <span className="absolute -inset-4 rounded-sm border border-violet/30" />
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
        <Image
          src="/images/ujwal.jpeg"
          alt="Coach Ujwal reflecting on her healing journey"
          fill
          sizes="(min-width: 1024px) 420px, 60vw"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}

export default function WhyUjwalSection() {
  const { whyCreated } = coach;
  return (
    <section className="relative overflow-hidden bg-champagne/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Mobile: centered intro + photo up top */}
        <div className="mx-auto max-w-sm text-center lg:hidden">
          <p className="label text-violet">
            <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-gold" />
            Why I Created Shiv Shakti Balance
          </p>
          <h2 className="font-display mt-6 text-3xl leading-tight text-plum">{whyCreated.statement}</h2>
          <WhyPhoto className="mx-auto mt-8 max-w-[240px]" />
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 lg:pt-8">
            <div className="hidden lg:block">
              <p className="label text-violet">
                <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-gold" />
                Why I Created Shiv Shakti Balance
              </p>
              <h2 className="font-display mt-6 text-4xl leading-tight text-plum md:text-5xl">
                {whyCreated.statement}
              </h2>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer(0.12)}
              className="mt-10 space-y-4 text-left lg:mt-8"
            >
              {whyCreated.points.map((p) => (
                <motion.p
                  key={p}
                  variants={staggerItem(12)}
                  className="border-l-2 border-violet/20 pl-6 text-lg leading-relaxed text-charcoal/75"
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>

            <p className="mt-8 text-left text-lg leading-relaxed text-charcoal/75">{whyCreated.turningPoint}</p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
              className="font-display mt-8 border-l-2 border-gold pl-6 text-left text-3xl italic leading-snug text-violet md:text-4xl"
            >
              {whyCreated.quote.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.blockquote>

            <div className="mt-8 space-y-3 text-left text-lg leading-relaxed text-charcoal/75">
              {whyCreated.closing.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:col-start-8 lg:sticky lg:top-28 lg:block lg:self-start">
            <WhyPhoto />
          </div>
        </div>
      </div>
    </section>
  );
}
