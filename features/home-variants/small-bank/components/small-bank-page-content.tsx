"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import {
  BANK_CARD_TABS,
  CLIENT_LOGOS,
  FACT_ITEMS,
  FOOTER_COMPANY_LINKS,
  FOOTER_DESIGN_LINKS,
  FOOTER_RESOURCES_LINKS,
  FOOTER_TOOLS_LINKS,
  INTEGRATIONS,
  MAP_FLAGS,
  PROCESS_STEPS,
  type BankCardTabId,
} from "@/features/home-variants/small-bank/constants/small-bank";
import { BankHeroCards } from "@/features/home-variants/small-bank/components/bank-hero-cards";
import { footerLink } from "@/lib/footer-links";
import { cn } from "@/lib/utils";

function SmallBankFooter() {
  return (
    <footer className="bank-footer-area">
      <div className="container">
        <div className="footer_top">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="f-widget about-widget">
                <Link href="/" className="m-0 inline-block p-0">
                  <Image src="/img/logo/Logo.png" alt="Banca logo" width={120} height={40} />
                </Link>
                <p>It&apos;s difficult to find examples of lorem ipsum in use before Letrase.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="f-widget link-widget">
                <h4 className="f-widget-title">Company</h4>
                <ul className="footer-link list-none p-0">
                  {FOOTER_COMPANY_LINKS.map((label) => (
                    <li key={label}>
                      <Link href={footerLink(label)}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="f-widget link-widget">
                <h4 className="f-widget-title">Resources</h4>
                <ul className="footer-link list-none p-0">
                  {FOOTER_RESOURCES_LINKS.map((label) => (
                    <li key={label}>
                      <Link href={footerLink(label)}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="f-widget link-widget">
                <h4 className="f-widget-title">Design Online</h4>
                <ul className="footer-link list-none p-0">
                  {FOOTER_DESIGN_LINKS.map((label) => (
                    <li key={label}>
                      <Link href={footerLink(label)}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="f-widget link-widget">
                <h4 className="f-widget-title">Tools</h4>
                <ul className="footer-link list-none p-0">
                  {FOOTER_TOOLS_LINKS.map((label) => (
                    <li key={label}>
                      <Link href={footerLink(label)}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          <div className="sb-footer-legal flex">
            <p className="copyright-text m-0">
              <Link href={footerLink("Terms of Service")}>Terms of Service</Link>
              <Link href={footerLink("Privacy Policy")}>Privacy Policy</Link>
              <Link href={footerLink("Cookies Policy")}>Cookies Policy</Link>
            </p>
          </div>
          <div className="sb-footer-social text-center md:text-right">
            <div className="f-social">
              <Link href="#" aria-label="Facebook">
                <i className="social_facebook" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <i className="social_youtube" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <i className="social_instagram" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SmallBankPageContent() {
  const [activeCardTab, setActiveCardTab] = useState<BankCardTabId>("freelancer");
  const activeCard = BANK_CARD_TABS.find((tab) => tab.id === activeCardTab) ?? BANK_CARD_TABS[0];

  return (
    <div className="small-bank-page">
      <section className="bank-banner-area" aria-label="Small bank hero">
        <img className="wave_img" src="/img/bank/wave.png" alt="" aria-hidden />
        <div className="container">
          <div className="grid grid-cols-1 gap-y-10 gap-x-0 lg:grid-cols-2 lg:items-stretch lg:gap-x-16 lg:gap-y-0">
            <div className="bank-banner-content text-left">
              <FadeIn delay={0.2}>
                <h5>Manage your Finance</h5>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h1>
                  Your <span className="underline-shape">banking</span> made easier.
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>
                  Inventore veritatis et architecto beatae vitaie dicta explicab nemo ipsam
                  volupetateme voluptashte aspernatur.
                </p>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div className="subscribe-field mt-[25px] flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    className="form-control sm:mr-1"
                    placeholder="Enter Email address"
                  />
                  <button type="button" className="input-append theme-btn theme-btn-lg sm:ml-2">
                    Subscribe
                  </button>
                </div>
              </FadeIn>
              <FadeIn delay={0.7}>
                <ul className="feature-list m-0 list-none p-0">
                  <li>
                    <i className="fas fa-check-circle" /> Get 30 day free trial
                  </li>
                  <li>
                    <i className="fas fa-check-circle" /> No Spamming
                  </li>
                </ul>
              </FadeIn>
              <FadeIn delay={0.8}>
                <div className="active-user flex items-center">
                  <div className="user-img-inner">
                    <img src="/img/bank/active-user1.jpg" alt="Active user" />
                    <img src="/img/bank/active-user2.jpg" alt="Active user" />
                    <img src="/img/bank/active-user3.jpg" alt="Active user" />
                  </div>
                  5K+ ⭐ Active users
                </div>
              </FadeIn>
            </div>
            <div className="sb-hero-cards-col">
              <BankHeroCards />
            </div>
          </div>
        </div>
      </section>

      <section className="bank-fact-area" aria-label="Bank facts">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3 md:gap-y-0">
            {FACT_ITEMS.map((item) => (
              <FadeIn key={item.title} delay={item.delay}>
                <div className="fact-item text-left">
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="process-area bg-white" aria-label="Loan process">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-10 gap-x-0 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
            <div className="lg:col-span-5">
              <div className="section-title bank-section-title text-left">
                <FadeIn>
                  <span className="short-title-2">OUR PROCESS</span>
                </FadeIn>
                <FadeIn>
                  <h1>
                    Get loan from 4 simple <span className="underline-shape">process</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p>
                    Choose your training and register for free. If you are a freelancer, the courses
                    are entirely taken care of you have nothing to pay and no money to advance.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <Link className="read-more" href="/about">
                    Learn more about it <i className="arrow_right" />
                  </Link>
                </FadeIn>
              </div>
            </div>
            <div className="lg:col-span-7 lg:ps-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
                {PROCESS_STEPS.map((step) => (
                  <FadeIn key={step.number} delay={step.delay}>
                    <div className="feature-card-widget-8 saas-feature-card h-full text-left">
                      <h2 className="number">{step.number}</h2>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bank-app-showcase-area bg-white" aria-label="Mobile app">
        <div className="container">
          <div className="sb-app-showcase-grid">
            <div className="sb-app-showcase-media">
              <FadeIn delay={0.4}>
                <img
                  src="/img/bank/mobile-showcase.png"
                  alt="Banca mobile banking app"
                  width={460}
                  height={441}
                />
              </FadeIn>
            </div>
            <div className="sb-app-showcase-content">
              <div className="app-content">
                <div className="section-title bank-section-title text-left">
                  <FadeIn>
                    <span className="short-title-2">Our Application</span>
                  </FadeIn>
                  <FadeIn>
                    <h1>
                      All your <span className="underline-shape">financials</span>
                      <br />
                      in one single app.
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <p>
                      It is a long established fact that a reader will be distracted by there
                      readable content of a page when looking at its layout point .
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <ul className="feature-list m-0 list-none p-0">
                      <li>
                        <i className="fas fa-check-circle" /> It is long established fact that
                        reader will be.
                      </li>
                      <li>
                        <i className="fas fa-check-circle" /> It is long established fact distracted
                        the readable.
                      </li>
                    </ul>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bank-card-area" aria-label="Bank cards">
        <div className="container">
          <div className="section-title bank-section-title mb-20 text-left">
            <FadeIn>
              <span className="short-title-2 text-[#b7b7b7]">Cards</span>
            </FadeIn>
            <FadeIn>
              <h1 className="!text-white">
                We offer variety of <br />
                <span className="underline-shape">cards</span> with features
              </h1>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-0 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
            <div className="lg:col-span-5">
              <ul className="bank-card-tab m-0 list-none p-0" role="tablist">
                {BANK_CARD_TABS.map((tab) => (
                  <li key={tab.id} role="presentation">
                    <FadeIn delay={tab.delay}>
                      <button
                        type="button"
                        className={cn(
                          "bank-card-item w-full",
                          activeCardTab === tab.id && "active",
                        )}
                        id={`${tab.id}-tab`}
                        role="tab"
                        aria-controls={tab.id}
                        aria-selected={activeCardTab === tab.id}
                        onClick={() => setActiveCardTab(tab.id)}
                      >
                        <h5>{tab.label}</h5>
                        <p>{tab.description}</p>
                      </button>
                    </FadeIn>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn>
                <div className="bank-card-content">
                  <div
                    className="tab-pane fade show active"
                    id={activeCard.id}
                    role="tabpanel"
                    aria-labelledby={`${activeCard.id}-tab`}
                  >
                    <div className="card-img">
                      <img
                        className="card_one"
                        src={activeCard.cardOne}
                        alt={`${activeCard.label} front`}
                      />
                      <img
                        className="card_two"
                        src={activeCard.cardTwo}
                        alt={`${activeCard.label} back`}
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="integrate-area bg-white" aria-label="Integrations">
        <div className="container">
          <div className="section-title bank-section-title mb-20 text-left">
            <span className="short-title-2">Our Integrations</span>
            <FadeIn>
              <h1>
                A variety of tools you
                <br />
                can <span className="underline-shape">integrate</span> with
              </h1>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {INTEGRATIONS.map((item) => (
              <FadeIn key={item.name} delay={item.delay}>
                <div className="feature-card-widget-8 saas-feature-card h-full text-left">
                  <div className="card-img">
                    <img src={item.icon} alt={item.name} />
                  </div>
                  <h4>{item.name}</h4>
                  <p>
                    Choose your training and register for free if you are a freelancer the courses
                    are entire taken care about the way to.
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="map_area bg-white" aria-label="Worldwide reach">
        <div className="container">
          <div className="section-title bank-section-title mb-20 text-left">
            <span className="short-title-2">Worldwide Reach</span>
            <h1>
              Our customer base
              <br /> reaches <span className="underline-shape">worldwide</span>
            </h1>
          </div>
          <div className="map_inner">
            <img src="/img/bank/map.png" alt="World map" />
            <ul className="map_list m-0 list-none p-0">
              {MAP_FLAGS.map((flag) => (
                <li
                  key={flag.src}
                  className={"active" in flag && flag.active ? "active" : undefined}
                >
                  <FadeIn delay={flag.delay}>
                    <img src={flag.src} alt="" aria-hidden />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="calculator-area-three" aria-label="Loan calculator">
        <div className="container">
          <div className="section-title bank-section-title mb-20 text-left">
            <span className="short-title-2">Loan Calculator</span>
            <FadeIn>
              <h1>
                <span className="underline-shape">Calculate</span> your loan
                <br />
                &amp; get loan details
              </h1>
            </FadeIn>
          </div>

          <div className="calculator-widget-2 mt-[50px]">
            <div className="grid grid-cols-1 gap-y-8 gap-x-0 lg:grid-cols-12 lg:gap-x-0 lg:gap-y-0">
              <div className="lg:col-span-7">
                <FadeIn delay={0.1}>
                  <div className="single-calculator-widget">
                    <h4>Loan Calculator</h4>
                    <div className="range-label mt-10">Loan Term</div>
                    <nav>
                      <div className="loan-type-select" id="nav-tab" role="tablist">
                        <button
                          className="active"
                          id="yearTab-tab"
                          type="button"
                          role="tab"
                          aria-controls="yearTab"
                          aria-selected
                        >
                          Yearly
                        </button>
                        <button
                          id="monthTab-tab"
                          type="button"
                          role="tab"
                          aria-controls="monthTab"
                          aria-selected={false}
                        >
                          Monthly
                        </button>
                        <button
                          id="weekTab-tab"
                          type="button"
                          role="tab"
                          aria-controls="weekTab"
                          aria-selected={false}
                        >
                          Weekly
                        </button>
                      </div>
                    </nav>

                    <div className="range-label">Loan Amount</div>
                    <div className="single-range">
                      <div id="RangeSlider" />
                      <div className="input-group">
                        <input
                          className="noTextMerge"
                          type="text"
                          id="SetRange"
                          defaultValue="200,000"
                          readOnly
                        />
                        <span className="input-group-text">$</span>
                      </div>
                    </div>
                    <div className="range-label">Interest Rate</div>
                    <div className="single-range">
                      <div id="RoiRangeSlider" />
                      <div className="input-group">
                        <input type="text" id="SetRoiRange" defaultValue="8.5" readOnly />
                        <span className="input-group-text">%</span>
                      </div>
                    </div>
                    <div className="range-label">Loan Duration</div>
                    <div className="single-range">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="yearTab"
                          role="tabpanel"
                          aria-labelledby="yearTab"
                        >
                          <div id="YearRangeSlider" />
                        </div>
                        <div className="tab-pane fade" id="monthTab" role="tabpanel" aria-labelledby="monthTab">
                          <div id="MonthRangeSlider" />
                        </div>
                        <div className="tab-pane fade" id="weekTab" role="tabpanel" aria-labelledby="weekTab">
                          <div id="WeekRangeSlider" />
                        </div>
                      </div>
                      <div className="input-group">
                        <input
                          className="noTextMerge"
                          type="text"
                          id="SetMonthRange"
                          defaultValue="5"
                          readOnly
                        />
                        <span className="input-group-text loanTermIndicator">Years</span>
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

              <div className="lg:col-span-5 lg:pl-[35px]">
                <FadeIn delay={0.3}>
                  <div className="calculator-result-widget">
                    <div className="pie-wrapper mt-[25px]" id="loan_graph_circle">
                      <div className="label">
                        Total Amount
                        <h2 className="LoanTotalAmount">$245,678</h2>
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
                    <ul className="loan-calculation m-0 list-none p-0">
                      <li>
                        <span className="label">EMI Amount (Principal + Interest)</span>
                        <span className="amount LoanTotalAmount">$4,095</span>
                      </li>
                      <li>
                        <span className="label">Interest Payable</span>
                        <span className="amount" id="InterestPayable">
                          $45,678
                        </span>
                      </li>
                      <li>
                        <span className="label">Loan Duration</span>
                        <span className="amount LoanTotalDuration">5 Years</span>
                      </li>
                      <li>
                        <span className="label">Your EMI Amount</span>
                        <span className="amount" id="emiAmount">
                          $4,095
                        </span>
                      </li>
                    </ul>
                    <Link href="/loan/personal-details" className="theme-btn theme-btn-lg mt-5 w-full">
                      Apply Now
                      <i className="arrow_right" />
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="saas-clients-logo bg-white pt-[100px]" aria-label="Trusted clients">
        <div className="container">
          <FadeIn delay={0.3}>
            <p className="clients-logo-title">
              Trust Trusted by over <span>10,000+</span> customers wordwide
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 items-center gap-y-8 md:grid-cols-5 md:gap-y-0">
            {CLIENT_LOGOS.map((logo) => (
              <div key={logo.src} className="flex justify-center">
                <Link href="/about">
                  <FadeIn direction="right" delay={logo.delay}>
                    <img className="clients-logo max-w-full h-auto" src={logo.src} alt={logo.alt} />
                  </FadeIn>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-action-area-three bg-white" aria-label="Call to action">
        <div className="container">
          <div className="cta-4 cta-five cta-bg-primary">
            <div className="sb-cta-grid grid grid-cols-1 items-center gap-y-8 gap-x-0 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
              <div className="sb-cta-copy">
                <FadeIn>
                  <div className="cta-content">
                    <h2 className="text-white">Try it for free</h2>
                    <p className="text-white/80">
                      Choose your training and register for free. If you are a freelancer, the
                      courses are entirely taken care.
                    </p>
                    <Link href="/loan" className="theme-btn theme-btn-lg">
                      Get started now <i className="arrow_right-up" />
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <div className="sb-cta-media">
                <FadeIn delay={0.2}>
                  <img
                    src="/img/bank/mobile-two.png"
                    alt="Mobile app"
                    width={335}
                    height={308}
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SmallBankFooter />
    </div>
  );
}
