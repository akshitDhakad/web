import type { Metadata } from "next";

import { AboutPageContent } from "@/features/pages/components/about-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Banca's journey, leadership, milestones, and commitment to banking differently.",
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
