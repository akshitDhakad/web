import { MapPin } from "lucide-react";

import type { JobSummary } from "@/features/jobs/types/job";

interface JobMetaProps {
  job: Pick<JobSummary, "location" | "category" | "schedule">;
  className?: string;
}

export function JobMeta({ job, className = "" }: JobMetaProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <div className="job-location">
        <MapPin size={14} aria-hidden />
        {job.location}
      </div>
      <div className="job-catagory">
        <span>{job.category}</span> | {job.schedule}
      </div>
    </div>
  );
}
