import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>[Placeholder — final terms &amp; conditions to be supplied by Coach Ujwal / legal counsel before publishing.]</p>
    </LegalPage>
  );
}
