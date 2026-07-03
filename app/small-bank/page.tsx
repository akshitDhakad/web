import type { Metadata } from "next";

import { SmallBankPageContent } from "@/features/home-variants/small-bank/components/small-bank-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Small Bank",
  description:
    "Your banking made easier. Manage finances, explore cards, integrations, and calculate loans with Banca's small bank home experience.",
  alternates: { canonical: `${SITE_CONFIG.url}/small-bank` },
};

export default function SmallBankPage() {
  return <SmallBankPageContent />;
}
