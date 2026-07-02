import type { Metadata } from "next";

import { PersonalDetailsContent } from "@/features/loan/components/personal-details-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Personal Details - Step 02",
  description: "Provide your personal details to continue your Banca loan application.",
  alternates: { canonical: `${SITE_CONFIG.url}/loan/personal-details` },
};

export default function PersonalDetailsPage() {
  return <PersonalDetailsContent />;
}
