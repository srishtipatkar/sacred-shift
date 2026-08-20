import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import DiscoveryCallButton from "@/components/DiscoveryCallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <LegalPage title="Contact">
      <p>The best way to reach Coach Ujwal is by booking a discovery call or starting a WhatsApp conversation.</p>
      <div className="not-prose mt-8 flex flex-wrap gap-4">
        <DiscoveryCallButton variant="ghost-gold" />
        <WhatsAppButton programName="The Sacred Shift" label="Message on WhatsApp" />
      </div>
    </LegalPage>
  );
}
