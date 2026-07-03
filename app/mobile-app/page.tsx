import type { Metadata } from "next";

import { MobileAppPageContent } from "@/features/home-variants/mobile-app/components/mobile-app-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Mobile App",
  description:
    "Simple and safe digital banking mobile app — track finances, pay bills, and manage cards with Banca.",
  alternates: { canonical: `${SITE_CONFIG.url}/mobile-app` },
};

export default function MobileAppPage() {
  return <MobileAppPageContent />;
}
