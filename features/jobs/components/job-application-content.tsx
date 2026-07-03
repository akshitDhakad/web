"use client";

import { ArrowRight, Bookmark } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { JobApplyModal } from "@/features/jobs/components/job-apply-modal";
import { JobMeta } from "@/features/jobs/components/job-meta";
import type { JobDetail } from "@/features/jobs/types/job";

interface JobApplicationContentProps {
  job: JobDetail;
}

export function JobApplicationContent({ job }: JobApplicationContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="breadcrumb-area">
        <div
          className="breadcrumb-widget page-pt-145"
          style={{ backgroundImage: "url(/img/breadcrumb/bg-2.png)" }}
        >
          <div className="container">
            <div className="breadcrumb-content job-pt-135 job-pb-180">
              <h1>{job.title}</h1>
              <div className="breadcrumb-job-info page-mt-20 flex flex-wrap items-center justify-center gap-3">
                <JobMeta job={job} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="job-application-area job-pt-110 job-pb-120 bg_white">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="order-1 lg:order-2 lg:col-span-8">
              <FadeIn>
                <div className="job-description-widget">
                  {job.description.map((section) => (
                    <div key={section.title} className="single-description-para">
                      <h6>{section.title}</h6>
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.items && (
                        <ul>
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  <div className="single-description-para border-t border-[var(--black_50)] pt-8">
                    <h6>
                      Application Process<span>*</span>
                    </h6>
                    <p className="text_body_color">{job.applicationNote}</p>
                    <ul className="page-mt-15 text_body_color">
                      {job.applicationRequirements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="note-text page-mt-15 page-mb-35">
                    <p>
                      <span>Note: </span>
                      {job.disclaimer}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--black_50)] pt-10">
                    <button
                      type="button"
                      className="theme-btn theme-btn-lg inline-flex items-center gap-2"
                      onClick={() => setIsModalOpen(true)}
                    >
                      apply now <ArrowRight size={16} aria-hidden />
                    </button>
                    <button
                      type="button"
                      className="theme-btn theme-btn-primary_alt theme-btn-lg custom-btn inline-flex items-center gap-2"
                    >
                      <Bookmark size={16} aria-hidden /> Save
                    </button>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="order-2 lg:order-1 lg:col-span-4 job-pl-lg-55">
              <div className="right-sidebar-widget sticky_sidebar_widget">
                <div className="single-sidebar-widget page-mt-25 widget-border">
                  <div className="widget-title">
                    <h5>Job Summary</h5>
                  </div>
                  <div className="widget-content px-6 py-6 !p-4">
                    <ul>
                      <li>
                        <span className="name">Published on:</span>
                        <span className="value">{job.publishedOn}</span>
                      </li>
                      <li>
                        <span className="name">Vacancy:</span>
                        <span className="value">{job.vacancy}</span>
                      </li>
                      <li>
                        <span className="name">Employment Status:</span>
                        <span className="value">{job.schedule}</span>
                      </li>
                      <li>
                        <span className="name">Experience:</span>
                        <span className="value">{job.experience}</span>
                      </li>
                      <li>
                        <span className="name">Age:</span>
                        <span className="value">{job.age}</span>
                      </li>
                      <li>
                        <span className="name">Job Location:</span>
                        <span className="value">{job.jobLocation}</span>
                      </li>
                      <li>
                        <span className="name">Salary:</span>
                        <span className="value">{job.salary}</span>
                      </li>
                      <li>
                        <span className="name">Application Deadline:</span>
                        <span className="value">{job.applicationDeadline}</span>
                      </li>
                    </ul>
                    <Link
                      href="/jobs"
                      className="theme-btn theme-btn-outlined page-mt-25 inline-block w-full text-center"
                    >
                      Browse all jobs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JobApplyModal job={job} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
