import type { Metadata } from "next";

import { SimplePageContent } from "@/features/home-variants/simple/components/simple-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Simple Banca",
  description:
    "Compare loans from several banks, use our loan calculator, and find the cheapest loan with Banca.",
  alternates: { canonical: `${SITE_CONFIG.url}/simple` },
};

export default function SimplePage() {
  return <SimplePageContent />;
}
