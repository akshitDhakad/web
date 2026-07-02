import type { Metadata } from "next";

import { JobsPageContent } from "@/features/jobs/components/jobs-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Browse current job openings at Banca and find your next role in banking and finance.",
  alternates: { canonical: `${SITE_CONFIG.url}/jobs` },
};

export default function JobsPage() {
  return <JobsPageContent />;
}
