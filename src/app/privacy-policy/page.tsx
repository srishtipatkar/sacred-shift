import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>[Placeholder — final privacy policy content to be supplied by Coach Ujwal / legal counsel before publishing.]</p>
    </LegalPage>
  );
}
