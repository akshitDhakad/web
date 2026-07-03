import type { Metadata } from "next";

import { FinancePageContent } from "@/features/home-variants/finance/components/finance-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Finance SaaS App",
  description:
    "The modern banking solution for your business in one app. Explore features, pricing, and FAQs for Banca's finance SaaS platform.",
  alternates: { canonical: `${SITE_CONFIG.url}/finance` },
};

export default function FinancePage() {
  return <FinancePageContent />;
}
