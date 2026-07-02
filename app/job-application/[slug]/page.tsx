import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JobApplicationContent } from "@/features/jobs/components/job-application-content";
import { getAllJobSlugs, getJobBySlug } from "@/features/jobs/lib/jobs";
import { SITE_CONFIG } from "@/constants/navigation";

interface JobApplicationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: JobApplicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Job Application" };
  }

  return {
    title: job.title,
    description: job.excerpt,
    alternates: { canonical: `${SITE_CONFIG.url}/job-application/${slug}` },
  };
}

export default async function JobApplicationPage({ params }: JobApplicationPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return <JobApplicationContent job={job} />;
}
