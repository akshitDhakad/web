import type { Metadata } from "next";

import { CardsPageContent } from "@/features/pages/components/cards-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Cards",
  description: "Discover Banca credit and debit cards with cashback, security, and flexible payment options.",
  alternates: { canonical: `${SITE_CONFIG.url}/cards` },
};

export default function CardsPage() {
  return <CardsPageContent />;
}
