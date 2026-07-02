import { redirect } from "next/navigation";

import { DEFAULT_JOB_SLUG } from "@/features/jobs/lib/jobs";

export default function JobApplicationRedirectPage() {
  redirect(`/job-application/${DEFAULT_JOB_SLUG}`);
}
