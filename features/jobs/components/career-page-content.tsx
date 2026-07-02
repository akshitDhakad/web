"use client";

import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { JobMeta } from "@/features/jobs/components/job-meta";
import {
  CAREER_FEATURE_CARDS,
  CAREER_HERO,
  CAREER_INTRO,
  RECRUITMENT_INTRO,
  RECRUITMENT_STEPS,
} from "@/features/jobs/constants/career";
import { getFeaturedJobs, getJobHref } from "@/features/jobs/lib/jobs";
import { cn } from "@/lib/utils";

export function CareerPageContent() {
  const featuredJobs = getFeaturedJobs();
  const [selectedSlug, setSelectedSlug] = useState(featuredJobs[0]?.slug ?? "");
  const selectedJob = featuredJobs.find((job) => job.slug === selectedSlug) ?? featuredJobs[0];

  return (
    <>
      <section className="breadcrumb-area">
        <div
          className="breadcrumb-widget page-pt-145 page-pb-200"
          style={{ backgroundImage: "url(/img/breadcrumb/bg-2.png)" }}
        >
          <div className="container">
            <div className="page-pb-100 sm:page-pb-100">
              <div className="breadcrumb-content page-pt-140 page-pb-15">
                <h1>{CAREER_HERO.title}</h1>
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
        </div>

        <div className="container">
          <div className="relative">
            <div className="floated-widget search-job">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="mb-0">Search for jobs</h4>
                <p className="mb-0">{CAREER_HERO.jobsAvailable} Jobs available</p>
              </div>
              <form
                className="px-3"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="search-box page-mt-30 grid grid-cols-1 items-center gap-3 py-2 md:grid-cols-12">
                  <div className="search-divider md:col-span-6">
                    <div className="input-field">
                      <span className="field-icon">
                        <Briefcase size={20} aria-hidden />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Job title, keywords or company"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="input-field">
                      <span className="field-icon">
                        <MapPin size={20} aria-hidden />
                      </span>
                      <input className="form-control" type="text" placeholder="Town or region" />
                    </div>
                  </div>
                  <div className="text-center md:col-span-2 md:text-end">
                    <button type="submit" className="custom-btn theme-btn theme-btn-primary_alt theme-btn">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="page-pt-200 page-pb-145 bg_disable">
        <div className="container job-pt-40">
          <FadeIn>
            <div className="section-title text-start page-pt-5 max-md:page-pt-0">
              <h2>{CAREER_INTRO.title}</h2>
              <p className="page-mt-15">{CAREER_INTRO.description}</p>
            </div>
          </FadeIn>

          <div className="page-mt-30 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CAREER_FEATURE_CARDS.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.1}>
                <div className="feature-card-widget-7">
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <Link href={card.href} className="theme-btn theme-btn-outlined page-mt-45 mb-4 inline-block">
                    {card.buttonLabel}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-jobs bg_white page-pt-125 page-pb-140">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="section-title text-start">
              <h2 className="mb-0">Featured jobs</h2>
            </div>
            <Link href="/jobs" className="theme-btn theme-btn-outlined inline-flex items-center gap-2">
              Show All <ArrowRight size={16} aria-hidden />
            </Link>
          </div>

          <div className="page-pt-60 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="feature-job-tab">
                <ul className="feature-job-list">
                  {featuredJobs.map((job, index) => (
                    <li key={job.slug}>
                      <button
                        type="button"
                        className="w-full border-0 bg-transparent p-0 text-start"
                        onClick={() => setSelectedSlug(job.slug)}
                      >
                        <FadeIn delay={index * 0.1}>
                          <div
                            className={cn(
                              "single-feature-job",
                              selectedJob?.slug === job.slug && "is-active",
                            )}
                          >
                            <h6 className="job-title">{job.title}</h6>
                            <JobMeta job={job} />
                          </div>
                        </FadeIn>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {selectedJob && (
              <div className="lg:col-span-5">
                <FadeIn>
                  <div className="feature-job-description">
                    <h6 className="job-title">{selectedJob.title}</h6>
                    <JobMeta job={selectedJob} className="page-mt-10" />
                    {selectedJob.description[0]?.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="page-mt-35">
                        {paragraph}
                      </p>
                    ))}
                    <Link
                      href={getJobHref(selectedJob.slug)}
                      className="theme-btn theme-btn-lg page-mt-70 mb-6 inline-flex items-center gap-2"
                    >
                      Apply Now <ArrowRight size={16} aria-hidden />
                    </Link>
                  </div>
                </FadeIn>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="recruitment-procces bg_disable page-pt-120 page-pb-100">
        <div className="container">
          <FadeIn>
            <div className="section-title text-start">
              <h2>{RECRUITMENT_INTRO.title}</h2>
              <p className="page-mt-15">{RECRUITMENT_INTRO.description}</p>
            </div>
          </FadeIn>

          <div className="page-pt-60 page-pb-100 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RECRUITMENT_STEPS.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1}>
                <div className="feature-card-widget-2 py-5 text-start">
                  <Image className="img-fluid" src={step.icon} alt="" width={48} height={48} />
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="our-offer grid grid-cols-1 gap-4 md:grid-cols-2">
            <FadeIn>
              <div className="single-offer-box">
                <h2>Our Offer</h2>
                <p>You will be invited at our head office to take a skills and knowledge assessment.</p>
                <Link href="#">
                  <span>Read more</span> <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="single-offer-box">
                <h2>FAQ</h2>
                <p>Find the answers to frequently asked questions about working at Banca.</p>
                <Link href="#">
                  <span>Read more</span> <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
