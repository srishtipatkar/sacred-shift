import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer">
      <p>
        Shiv Shakti Balance and Coach Ujwal&apos;s other programs are coaching, personal development and spiritual
        practice offerings. They are not therapy, medical treatment, or a substitute for professional medical or
        mental health care, and they do not diagnose, treat or cure any medical or psychological condition.
      </p>
      <p>[Placeholder — final disclaimer language to be supplied by Coach Ujwal / legal counsel before publishing.]</p>
    </LegalPage>
  );
}
