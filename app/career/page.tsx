import type { Metadata } from "next";

import { CareerPageContent } from "@/features/jobs/components/career-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Career",
  description: "Build your career at Banca. Explore opportunities, featured jobs, and our recruitment process.",
  alternates: { canonical: `${SITE_CONFIG.url}/career` },
};

export default function CareerPage() {
  return <CareerPageContent />;
}
