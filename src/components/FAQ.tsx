"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "What is Shiv Shakti Balance?",
    a: "Shiv Shakti Balance is my signature 90-day transformation journey for working women, inspired by the complementary qualities of Shiva and Shakti — helping you bring grounded strength and receptive feminine energy into harmony.",
  },
  {
    q: "Who is this journey for?",
    a: "It is for working women carrying too many responsibilities — women who feel emotionally exhausted, want more peace without giving up their ambition, and want to feel connected to themselves again.",
  },
  {
    q: "How long is the journey?",
    a: "Shiv Shakti Balance is a 90-day journey, moving through three phases: Shiv, Shakti and Balance.",
  },
  {
    q: "What happens during the 90 days?",
    a: "Coach Ujwal will discuss this during your discovery conversation.",
  },
  {
    q: "Do I need prior spiritual experience?",
    a: "No. You only need to be ready to begin — you don't need to have everything figured out.",
  },
  {
    q: "What practices are included?",
    a: "Depending on your needs, the journey may include self-worth coaching, Reiki & energy healing, EFT, inner child healing, Ho'oponopono, chakra work, meditation, journaling and feminine energy practices.",
  },
  {
    q: "Is this therapy?",
    a: "No. Shiv Shakti Balance is a coaching, personal development and spiritual practice journey — it is not therapy or a medical treatment, and it does not diagnose or treat any medical or mental health condition.",
  },
  {
    q: "How do I know whether this journey is right for me?",
    a: "The best way to know is to have a conversation with Coach Ujwal directly. Book a discovery call and she will help you understand whether this is the right fit for you.",
  },
  {
    q: "How can I speak with Coach Ujwal?",
    a: "You can book a discovery call or reach out on WhatsApp — Coach Ujwal will discuss your journey with you personally.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-champagne/30 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHeading eyebrow="Questions" align="center" title="Frequently Asked Questions" />

        <div className="mt-14 divide-y divide-violet/15 border-t border-b border-violet/15">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="focus-ring flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display text-xl text-plum md:text-2xl">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {/* CSS grid-rows trick instead of animating height: "auto" — stays on the
                    compositor instead of forcing layout recalculation on every frame. */}
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-charcoal/65">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
