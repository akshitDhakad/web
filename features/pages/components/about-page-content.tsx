"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import {
  ABOUT_AWARDS,
  ABOUT_STATS_GRID,
  ABOUT_STATS_MAIN,
  LEADERSHIP_TEAM,
  RECOGNITION_CONTENT,
  RECOGNITION_YEARS,
} from "@/features/pages/constants/about";
import { cn } from "@/lib/utils";

export function AboutPageContent() {
  const [activeYear, setActiveYear] = useState("2020");
  const [activeStat, setActiveStat] = useState(0);
  const recognition = RECOGNITION_CONTENT[activeYear];

  return (
    <>
      <section
        className="banner-area-2 page-pt-145"
        style={{ backgroundImage: "url(/img/banner/about-bg.png)" }}
        aria-label="About hero"
      >
        <div className="container">
          <div className="page-pt-130 page-pb-140">
            <FadeIn>
              <div className="banner-content max-w-2xl py-8">
                <span className="short-title">ABOUT US</span>
                <h1 className="page-mb-0 page-mt-10">Believing, banking and achieving different</h1>
                <Link href="#" className="theme-btn-2 page-mt-45 inline-flex">
                  <span className="arrow">
                    <span className="horizontal-line" />
                  </span>
                  View our 2019 Annual Report
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg_white page-pt-90 page-pb-160">
        <div className="container">
          <div className="description-widget grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="desc-title bg_primary text-end">
                <h2>A journey that started with a belief to Bank Different</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="desc-text md:pl-10">
                <p>
                  Banca Bank&apos;s journey started with a single belief to connect people, places and
                  possibilities by doing things others said could not be done. Anchored on this belief,
                  the Bank was founded in 2017 and we are, to date, headquartered in the Mauritius
                  International Financial Centre with a representative office in United States.
                </p>
                <p className="page-mt-20">
                  Banca Bank&apos;s core banking and transactional capabilities are also complemented.
                  Banca experienced team and its regional foundation are complemented by the belief and trust
                  our clients have in our ability to connect them to a global banking network to seamlessly
                  achieve their financial aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statistics-area page-pt-135 page-pb-140 bg_disable">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="statistics-widget-2">
                <div className="grid grid-cols-1 gap-0 sm:grid-cols-12">
                  <div className="sm:col-span-7">
                    <div className={`widget-content widget-1 min-h-[220px] ${ABOUT_STATS_MAIN[activeStat] ? "" : ""}`}>
                      <h1 className="stat-counter">{ABOUT_STATS_MAIN[activeStat]?.value}</h1>
                      <p>{ABOUT_STATS_MAIN[activeStat]?.label}</p>
                      <div className="page-mt-20 flex justify-center gap-2">
                        {ABOUT_STATS_MAIN.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            className={cn(
                              "h-2.5 w-2.5 rounded-full border-0",
                              index === activeStat ? "bg-white" : "bg-white/20",
                            )}
                            onClick={() => setActiveStat(index)}
                            aria-label={`Show statistic ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-5">
                    <Image className="h-full w-full object-cover" src="/img/statistics/img-1.png" alt="" width={300} height={220} />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="statistics-widget-2 h-full">
                <div className="widget-content widget-2 min-h-[220px]">
                  <h1 className="stat-counter">125</h1>
                  <p>Our colleagues come from 125 different countries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="page-mt-30 grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {ABOUT_STATS_GRID.map((stat, index) => (
                  <FadeIn key={stat.value} delay={0.1 + index * 0.2}>
                    <div className="statistics-widget-2 h-full">
                      <div className={`widget-content ${stat.variant} min-h-[180px]`}>
                        <h1 className="stat-counter">{stat.value}</h1>
                        <p>{stat.label}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div
                className="statistics-widget-2 h-full"
                style={{ backgroundImage: "url(/img/statistics/img-2.png)", backgroundSize: "cover" }}
              >
                <div className="widget-content widget-6 min-h-[180px]">
                  <h2>Best Consumer Digital Bank</h2>
                  <p>Global Finance 2020</p>
                </div>
              </div>
            </div>
          </div>

          <div className="page-mt-30 grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="md:col-span-5">
              <div
                className="statistics-widget-2 h-full"
                style={{ backgroundImage: "url(/img/statistics/img-3.png)", backgroundSize: "cover" }}
              >
                <div className="widget-content widget-7 min-h-[200px]">
                  <h1 className="stat-counter">35</h1>
                  <p>Global Finance 2020</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="statistics-widget-2 h-full">
                <div className="grid grid-cols-1 gap-0 sm:grid-cols-12">
                  <div className="sm:col-span-5">
                    <Image className="h-full w-full object-cover" src="/img/statistics/img-6.png" alt="" width={200} height={200} />
                  </div>
                  <div className="sm:col-span-7">
                    <div
                      className="widget-content widget-8 min-h-[200px]"
                      style={{ backgroundImage: "url(/img/statistics/img-4.png)" }}
                    >
                      <h1 className="stat-counter">2</h1>
                      <p>We&apos;re listed on two of Asia&apos;s largest stock exchanges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recognition-area bg_white page-pt-135 page-pb-140">
        <div className="container">
          <div className="section-title text-start">
            <span className="short-title page-mt-0">Recognition</span>
            <h2 className="page-mb-0 page-mt-10">Milestones and Accolades</h2>
          </div>
          <div className="recognition-widget page-pt-70 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <ul className="recognition-nav">
                {RECOGNITION_YEARS.map((year) => (
                  <li key={year.id}>
                    <button
                      type="button"
                      className={activeYear === year.id ? "active" : undefined}
                      onClick={() => setActiveYear(year.id)}
                    >
                      {year.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4">
              <div className="tab-content">
                <h3>{recognition.title}</h3>
                {recognition.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="accolades-widget">
                <div className="accolades-header">
                  <h2>Awards</h2>
                  <Image src="/img/recognition/icon.svg" alt="" width={48} height={48} aria-hidden />
                </div>
                <ul>
                  {ABOUT_AWARDS.map((award) => (
                    <li key={`${award.subtitle}-${award.text}`} className="page-mt-15">
                      <p className="subtitle">{award.subtitle}</p>
                      <p className="text">{award.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership-area page-pt-135 page-pb-140 bg_disable">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="section-title text-start">
              <span className="short-title page-mt-0">Leadership</span>
              <h2 className="page-mb-0 page-mt-10">Meet our leadership team</h2>
            </div>
            <Link href="#" className="theme-btn theme-btn-outlined">
              see more →
            </Link>
          </div>
          <div className="page-pt-65 grid grid-cols-1 gap-4 md:grid-cols-3">
            {LEADERSHIP_TEAM.map((leader, index) => (
              <FadeIn key={`${leader.image}-${index}`} delay={0.1 + index * 0.2}>
                <div className="single-leadership-widget">
                  <Link href="#">
                    <Image src={leader.image} alt={leader.name} width={400} height={480} />
                    <div className="leader-info">
                      <h5>{leader.name}</h5>
                      <p>{leader.role}</p>
                    </div>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-area-2 page-pt-80 page-pb-80">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div>
              <h2>Our latest financial results</h2>
              <p className="page-mt-15">Access Scotiabank&apos;s latest quarterly results and archived financial documents.</p>
            </div>
            <div className="text-center md:text-end">
              <Link href="#" className="theme-btn">See results</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
