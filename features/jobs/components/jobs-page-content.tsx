"use client";

import Link from "next/link";
import { useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { JobMeta } from "@/features/jobs/components/job-meta";
import { JobsSidebar } from "@/features/jobs/components/jobs-sidebar";
import { JOB_SORT_OPTIONS } from "@/features/jobs/constants/filters";
import { JOB_LISTINGS, getJobHref } from "@/features/jobs/lib/jobs";

export function JobsPageContent() {
  const [sortBy, setSortBy] = useState<(typeof JOB_SORT_OPTIONS)[number]>(JOB_SORT_OPTIONS[0]);

  return (
    <>
      <section className="breadcrumb-area">
        <div
          className="breadcrumb-widget page-pt-145"
          style={{ backgroundImage: "url(/img/breadcrumb/bg-2.png)" }}
        >
          <div className="container">
            <div className="breadcrumb-content job-pt-135 job-pb-180">
              <h1>Job Posts</h1>
              <ul>
                <li>
                  <Link href="/">home</Link>
                </li>
                <li>
                  <Link href="/career">pages</Link>
                </li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="job-pt-110 job-pb-130 bg_disable">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4 job-pr-lg-55">
              <JobsSidebar />
            </div>

            <div className="lg:col-span-8">
              <div className="job-post-widget">
                <div className="sidebar-header mt-4 flex flex-wrap items-center justify-between gap-4 lg:mt-0">
                  <div className="sidebar-title">
                    <h4>25 job offers</h4>
                  </div>
                  <div className="sorting-select">
                    <select
                      id="sort-select"
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value as (typeof JOB_SORT_OPTIONS)[number])}
                      aria-label="Sort jobs"
                    >
                      {JOB_SORT_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {JOB_LISTINGS.map((job, index) => (
                  <FadeIn key={job.slug} delay={index * 0.08}>
                    <article className="single-job-post page-mt-25">
                      <div className="post-header">
                        <div>
                          <h6 className="job-title">
                            <Link href={getJobHref(job.slug)}>{job.title}</Link>
                          </h6>
                          <JobMeta job={job} />
                        </div>
                        <div className="timestamp">{job.postedAt}</div>
                      </div>
                      <div className="post-content">
                        <p>{job.excerpt}</p>
                      </div>
                    </article>
                  </FadeIn>
                ))}

                <div className="page-mt-70 text-center">
                  <button type="button" className="theme-btn theme-btn-outlined">
                    More jobs
                  </button>
                </div>
              </div>

              <FadeIn>
                <div className="email-alert-widget job-mt-100">
                  <h4>Get email alerts for the latest Jobs in Bangladesh</h4>
                  <p>You can cancel email alerts at any time.</p>
                  <form
                    className="alert-input-group"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <input type="email" className="form-control" placeholder="Type in your email..." />
                    <button type="submit" className="theme-btn theme-btn-lg">
                      Set Up Alert
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
