"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useCallback, useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import {
  ABOUT_PROCESS_FEATURES,
  ABOUT_STATS,
  BANNER_FACTS,
  BANNER_FEATURES,
  COMPANY_FEATURES,
  CONSULT_STATS,
  COUNTRIES,
  CUSTOMER_STATS,
  LOAN_TERM_TABS,
  LOAN_TYPES,
  type LoanTermTab,
} from "@/features/home-variants/loan-company/constants";
import { cn } from "@/lib/utils";

const FACT_ICON_CLASS = {
  globe: "fas fa-globe",
  user: "fas fa-user",
  briefcase: "fas fa-briefcase",
} as const;

function StaticRangeSlider({ id, fillPercent = 50 }: { id: string; fillPercent?: number }) {
  return (
    <div id={id} className="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
      <div className="noUi-base">
        <div className="noUi-connects">
          <div
            className="noUi-connect"
            style={{ transform: `translate(0%, 0px) scale(${fillPercent / 100}, 1)` }}
          />
        </div>
        <div className="noUi-origin" style={{ transform: `translate(${fillPercent}%, 0px)` }}>
          <div className="noUi-handle noUi-handle-lower" role="slider" aria-valuemin={0} aria-valuemax={100} />
        </div>
      </div>
    </div>
  );
}

function LoanTypeSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="loan-slider">
      <div className="lc-embla-viewport" ref={emblaRef}>
        <div className="lc-embla-track">
          {LOAN_TYPES.map((loan) => (
            <div key={loan.id} className="lc-embla-slide">
              <div className="single-slide">
                <div className="icon">
                  <img src={loan.icon} alt="" />
                </div>
                <h4>{loan.title}</h4>
                <p>{loan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="slick-prev slick-arrow"
        onClick={scrollPrev}
        aria-label="Previous loan type"
      >
        <i className="arrow_left" aria-hidden />
      </button>
      <button
        type="button"
        className="slick-next slick-arrow"
        onClick={scrollNext}
        aria-label="Next loan type"
      >
        <i className="arrow_right" aria-hidden />
      </button>
    </div>
  );
}

export function LoanCompanyPageContent() {
  const [loanTerm, setLoanTerm] = useState<LoanTermTab>("Yearly");

  const termIndicator = loanTerm === "Yearly" ? "Years" : loanTerm === "Monthly" ? "Months" : "Weeks";

  return (
    <div className="loan-company-page">
      <section className="banner-area-6" aria-label="Loan company hero">
        <div className="container">
          <div className="lc-hero-grid">
            <div>
              <FadeIn direction="right" delay={0.2}>
                <div className="banner-content">
                  <h1>
                    Simplify all your
                    <br />
                    banking and loan
                    <br />
                    methods.
                  </h1>
                  <p>
                    Our team of experts uses a methodology to
                    <br />
                    identify the credit cards most.
                  </p>
                  <div className="subscribe-field">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email address"
                    />
                    <Link
                      href="#"
                      className="input-append theme-btn theme-btn-lg"
                    >
                      Get Started
                    </Link>
                  </div>
                  <ul className="feature-list">
                    {BANNER_FEATURES.map((feature) => (
                      <li key={feature}>
                        <i className="fas fa-check-circle" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
            <div className="text-center min-[992px]:text-start">
              <div className="banner-img">
                <img className="img-1" src="/img/home-5/banner-img-1.png" alt="" />
                <img className="img-2" src="/img/home-5/banner-img-2.png" alt="" />
                <img className="img-3" src="/img/home-5/banner-img-3.png" alt="" />
                <img className="img-shape" src="/img/home-5/banner-shape.png" alt="" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="banner-fact">
        <div className="container">
          <div className="lc-banner-fact-grid">
            {BANNER_FACTS.map((fact) => (
              <div
                key={fact.id}
                className={cn(fact.id === "experience" && "lc-fact-last")}
              >
                <FadeIn delay={fact.delay}>
                  <div className="single-fact">
                    <div className="icon">
                      <i className={FACT_ICON_CLASS[fact.icon]} aria-hidden />
                    </div>
                    <p>
                      {fact.id === "global" && (
                        <>
                          A global customer base from
                          <br />
                          over 120 countries
                        </>
                      )}
                      {fact.id === "users" && (
                        <>
                          Almost over 250 thousand
                          <br />
                          active users
                        </>
                      )}
                      {fact.id === "experience" && (
                        <>
                          10 years worth of experience
                          <br />
                          as a industry expert
                        </>
                      )}
                    </p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="feature-area-3">
        <div className="container">
          <div className="section-title">
            <span className="short-title-2">OUR Features</span>
            <FadeIn>
              <h1>We have better and more feature</h1>
            </FadeIn>
          </div>
          <div className="lc-feature-grid">
            {COMPANY_FEATURES.map((feature) => (
              <div key={feature.id} className="lc-feature-col">
                <FadeIn delay={feature.delay}>
                  {feature.isLinkCard ? (
                    <div className="feature-card-widget-9 widget-link">
                      <h1>{feature.title}</h1>
                      <Link href="#">
                        More features <i className="arrow_right" aria-hidden />
                      </Link>
                    </div>
                  ) : (
                    <div className="feature-card-widget-9">
                      <img src={feature.icon} alt="" />
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  )}
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-area-2 bg-white">
        <div className="container">
          <div className="lc-process-grid">
            <FadeIn direction="left">
              <div className="text-start">
                <h1>
                  Get loan from 3
                  <br />
                  simple process
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form,
                </p>
                <ul className="feature-list">
                  {ABOUT_PROCESS_FEATURES.map((item) => (
                    <li key={item}>
                      <i className="fas fa-check-circle" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="#" className="read-more-btn">
                  <span>Learn about the process</span>
                  <i className="arrow_right" aria-hidden />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="sms-flow">
                <img className="arrow-1" src="/img/home-5/about-arrow-1.png" alt="" aria-hidden />
                <img className="arrow-2" src="/img/home-5/about-arrow-2.png" alt="" aria-hidden />
                <img className="msg-1" src="/img/home-5/msg-1.png" alt="" />
                <img className="msg-2" src="/img/home-5/msg-2.png" alt="" />
                <img className="msg-3" src="/img/home-5/msg-3.png" alt="" />
              </div>
            </FadeIn>
          </div>

          <div className="lc-customer-row">
            <div className="lc-customer-media">
              <div className="card-holder">
                <div className="shape-1" />
                <div className="shape-2" />
                <img className="img-1" src="/img/home-5/card-holder.png" alt="Card holder" />
                <img className="img-2" src="/img/home-5/bank-balance.png" alt="Bank balance" />
              </div>
            </div>
            <div className="lc-customer-content">
              <FadeIn direction="right">
                <h1>
                  We have reputable
                  <br />
                  customer relatinships
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form, by injected humour, or randomised words which
                  don&apos;t look even slightly .
                </p>
                <div className="customer-num">
                  {CUSTOMER_STATS.map((stat) => (
                    <div key={stat.label}>
                      <h1>{stat.value}</h1>
                      <span>
                        {stat.label} <br />
                        {stat.sublabel}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="calculator-area-2" aria-label="Loan calculator">
        <div className="container">
          <div className="section-title">
            <span className="short-title-2">Loan calculator</span>
            <FadeIn>
              <h1 className="text-white">Calculate and confirm your loans</h1>
            </FadeIn>
          </div>

          <div className="calculator-widget-2">
            <div className="lc-calculator-grid">
              <div>
                <FadeIn delay={0.1}>
                  <div className="single-calculator-widget">
                    <h4>Loan Calculator</h4>
                    <div className="range-label mt-40">Loan Term</div>
                    <nav>
                      <div className="nav nav-tabs loan-type-select" id="nav-tab" role="tablist">
                        {LOAN_TERM_TABS.map((tab) => (
                          <button
                            key={tab}
                            type="button"
                            className={cn("nav-link", loanTerm === tab && "active")}
                            role="tab"
                            aria-selected={loanTerm === tab}
                            onClick={() => setLoanTerm(tab)}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                    </nav>

                    <div className="range-label">Loan Amount</div>
                    <div className="single-range">
                      <StaticRangeSlider id="RangeSlider" fillPercent={60} />
                      <div className="input-group">
                        <input className="noTextMerge" type="text" defaultValue="50,000" readOnly />
                        <span className="input-group-text">$</span>
                      </div>
                    </div>

                    <div className="range-label">Interest Rate</div>
                    <div className="single-range">
                      <StaticRangeSlider id="RoiRangeSlider" fillPercent={35} />
                      <div className="input-group">
                        <input type="text" defaultValue="7.5" readOnly />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>

                    <div className="range-label">Loan Duration</div>
                    <div className="single-range">
                      <div className="tab-content">
                        <div
                          className={cn(
                            "tab-pane fade",
                            loanTerm === "Yearly" && "show active",
                          )}
                          id="yearTab"
                          role="tabpanel"
                        >
                          <StaticRangeSlider id="YearRangeSlider" fillPercent={40} />
                        </div>
                        <div
                          className={cn(
                            "tab-pane fade",
                            loanTerm === "Monthly" && "show active",
                          )}
                          id="monthTab"
                          role="tabpanel"
                        >
                          <StaticRangeSlider id="MonthRangeSlider" fillPercent={55} />
                        </div>
                        <div
                          className={cn(
                            "tab-pane fade",
                            loanTerm === "Weekly" && "show active",
                          )}
                          id="weekTab"
                          role="tabpanel"
                        >
                          <StaticRangeSlider id="WeekRangeSlider" fillPercent={70} />
                        </div>
                      </div>
                      <div className="input-group">
                        <input className="noTextMerge" type="text" defaultValue="5" readOnly />
                        <span className="input-group-text loanTermIndicator">{termIndicator}</span>
                      </div>
                    </div>

                    <div className="loan-start-date flex">
                      <div>
                        <div className="range-label">Start Date</div>
                        <div className="inp-container">
                          <input type="text" id="loanStartDate" placeholder="Select Date" readOnly />
                        </div>
                      </div>
                      <div>
                        <div className="range-label">End Date</div>
                        <div className="inp-container">
                          <input type="text" id="loanEndDate" placeholder="Select Date" readOnly />
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="lc-calculator-result">
                <FadeIn delay={0.3}>
                  <div className="calculator-result-widget">
                    <div className="pie-wrapper" id="loan_graph_circle">
                      <div className="label">
                        Total Amount
                        <h2 className="LoanTotalAmount">$62,450</h2>
                      </div>
                      <div className="pie">
                        <div className="left-side half-circle" />
                        <div className="right-side half-circle" />
                      </div>
                      <div className="circle-border" />
                    </div>
                    <div className="graph-indicator">
                      <div>
                        <span className="blue-dot" /> EMI Amount
                      </div>
                      <div>
                        <span className="orange-dot" /> Interest Payable
                      </div>
                    </div>
                    <ul className="loan-calculation">
                      <li>
                        <span className="label">EMI Amount (Principal + Interest)</span>
                        <span className="amount LoanTotalAmount">$62,450</span>
                      </li>
                      <li>
                        <span className="label">Interest Payable</span>
                        <span className="amount" id="InterestPayable">
                          $12,450
                        </span>
                      </li>
                      <li>
                        <span className="label">Loan Duration</span>
                        <span className="amount LoanTotalDuration">5 Years</span>
                      </li>
                      <li>
                        <span className="label">Your EMI Amount</span>
                        <span className="amount" id="emiAmount">
                          $1,041
                        </span>
                      </li>
                    </ul>
                    <Link href="/loan/personal-details" className="theme-btn theme-btn-lg">
                      Apply Now <i className="arrow_right" aria-hidden />
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="loan-slider-area bg-white">
        <div className="container">
          <div className="section-title">
            <span className="short-title-2">Loan types</span>
            <FadeIn>
              <h1>We offer a wide variety of loans</h1>
            </FadeIn>
          </div>
          <LoanTypeSlider />
        </div>
      </section>

      <section className="about-area-3 bg-white">
        <div className="container">
          <div className="section-title">
            <span className="short-title-2">ABout us</span>
            <FadeIn>
              <h1>Learn about how Banca works</h1>
            </FadeIn>
          </div>
          <div className="lc-about-grid">
            <FadeIn direction="right" delay={0.1}>
              <div>
                {ABOUT_STATS.map((stat, index) => (
                  <div key={stat.label} className={index > 0 ? "lc-stat-gap" : undefined}>
                    <h5>
                      <span className="round-dot" /> <span>{stat.value}</span> {stat.label}
                    </h5>
                    <p>{stat.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.3}>
              <div className="video-tut">
                <img src="/img/home-5/about-us-img.png" alt="" />
                <a
                  className="play-btn"
                  href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play video"
                >
                  <i className="fas fa-play" aria-hidden />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="coverage-area">
        <div className="container">
          <div className="section-title">
            <span className="short-title-2">ABout us</span>
            <FadeIn>
              <h1>Learn about how Banca works</h1>
            </FadeIn>
          </div>
          <div className="lc-coverage-grid">
            {COUNTRIES.map((country) => (
              <FadeIn key={country.id} delay={country.delay} direction="left">
                <Link href="#" className="country-widget">
                  <img src={country.flag} alt={country.name} />
                  <h5>{country.name}</h5>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="get-touch-area-2">
        <div className="container">
          <div className="lc-consult-grid">
            <FadeIn>
              <div>
                <h1>
                  Get your own
                  <br />
                  personal consultation
                </h1>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form,
                </p>
                <div className="consult-num">
                  {CONSULT_STATS.map((stat) => (
                    <div key={stat.label}>
                      <h1>{stat.value}</h1>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="touch-form">
                <h3>Get in touch</h3>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <input className="form-control" type="text" placeholder="Enter full name" required />
                  <input className="form-control" type="email" placeholder="Enter email address" required />
                  <button type="submit" className="theme-btn">
                    Subscribe
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
