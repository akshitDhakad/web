"use client";

import Link from "next/link";
import { useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import {
  APPLY_TOPICS,
  CORPORATE_CARDS,
  CTA_SHAPES,
  FAQ_ITEMS,
  FEATURE_WIDGETS,
  HOW_IT_WORK_WIDGETS,
  LEARN_MORE_NOTES,
  SECURITY_SHAPES,
} from "@/features/home-variants/loan-steps/constants";
import { cn } from "@/lib/utils";

const BANNER_SHAPES = [
  { src: "/img/banner/shape-1.png", className: "shape-1" },
  { src: "/img/banner/shape-2.png", className: "shape-2" },
  { src: "/img/banner/shape-4.png", className: "shape-3" },
  { src: "/img/banner/shape-5.png", className: "shape-4" },
  { src: "/img/banner/shape-6.png", className: "shape-5" },
  { src: "/img/banner/shape-7.png", className: "shape-6" },
] as const;

function LoanStepsFaqAccordion() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0]?.id ?? "");

  return (
    <div className="faq-widget">
      <div className="accordion" id="loanStepsAccordion">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openId === item.id;
          const headingId = `loan-steps-heading-${index}`;

          return (
            <div
              key={item.id}
              className={cn("single-widget-one", isOpen && "is-open")}
            >
              <div className="faq-header" id={headingId}>
                <h4
                  className={cn("mb-0", !isOpen && "collapsed")}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={item.id}
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setOpenId(isOpen ? "" : item.id);
                    }
                  }}
                >
                  {item.question}
                  <i className="icon_plus" aria-hidden />
                  <i className="icon_minus-06" aria-hidden />
                </h4>
              </div>
              {isOpen ? (
                <div
                  id={item.id}
                  className="faq-body"
                  role="region"
                  aria-labelledby={headingId}
                >
                  <div className="faq-answer-text">{item.answer}</div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function LoanStepsPageContent() {
  return (
    <div className="loan-steps-page">
      <section
        className="banner-area-2"
        id="banner_animation"
        aria-label="Loan steps hero"
      >
        <div className="container">
          <div className="ls-hero-grid">
            <div className="ls-hero-content">
              <FadeIn>
                <div className="banner-content">
                  <img className="shape" src="/img/banner/shape-3.png" alt="" aria-hidden />
                  <h1 className="mb-0">Flexible home loans for the international lifestyle.</h1>
                  <p className="mt-50">
                    Banca is the one you can rely that will support you all the way by offering
                    Home Loan facilities.
                  </p>
                  <Link href="/loan" className="theme-btn theme-btn-lg mt-50">
                    Apply now <i className="arrow_right" />
                  </Link>
                </div>
              </FadeIn>
            </div>
            <div className="ls-hero-media">
              <FadeIn direction="right" delay={0.2}>
                <div className="banner-img">
                  <img
                    className="main-img img-fluid"
                    src="/img/banner/banner-img-2.png"
                    alt="Banner illustration"
                  />
                  <div className="shapes">
                    {BANNER_SHAPES.map((shape) => (
                      <img
                        key={shape.className}
                        className={shape.className}
                        src={shape.src}
                        alt=""
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-area-2" id="feature" aria-label="Loan features">
        <div className="container">
          <div className="feature">
            <div className="ls-feature-grid">
              {FEATURE_WIDGETS.map((widget) => (
                <FadeIn key={widget.id} delay={widget.delay}>
                  <div className={cn("feature-widget-2 align-items-center", widget.featureClass)}>
                    <div className="shapes">
                      {widget.shapes.map((shape, index) => (
                        <img key={`${widget.id}-shape-${index}`} src={shape} alt="" aria-hidden />
                      ))}
                    </div>
                    <div className="feature-img">
                      <img src={widget.icon} alt="" />
                    </div>
                    <div className="feature-content">
                      <p>{widget.label}</p>
                      <h6>{widget.title}</h6>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="fast-e-loan">
            <div className="ls-fast-loan-grid">
              <div className="ls-fast-loan-intro">
                <FadeIn>
                  <div className="section-title text-start">
                    <h2 className="mb-3">Fast, secure &amp; easy loans in just 7 days</h2>
                    <p>
                      Need some fast cash? Bad cradit history? We dont mind about your past, just
                      the future. Try loan start and feel secure in your future.
                    </p>
                  </div>
                </FadeIn>
              </div>

              <div className="ls-fast-loan-topics">
                <FadeIn delay={0.1}>
                  <div className="apply-topics">
                    <ul>
                      {APPLY_TOPICS.map((topic) => (
                        <li key={topic}>
                          <i className="icon_box-checked" /> {topic}
                        </li>
                      ))}
                    </ul>
                    <Link href="/loan" className="theme-btn mt-20 w-100">
                      Apply for loans
                    </Link>
                  </div>
                </FadeIn>
              </div>

              <div className="ls-fast-loan-notes">
                <FadeIn delay={0.2}>
                  <div className="learn-more">
                    <ul>
                      {LEARN_MORE_NOTES.map((note) => (
                        <li key={note.prefix}>
                          <span>{note.prefix}</span> {note.text}
                        </li>
                      ))}
                    </ul>
                    <Link href="/loan" className="theme-btn theme-btn-light w-100 mt-30">
                      Learn more
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="manage-c-finance" aria-label="Corporate finance">
        <div className="container">
          <div className="ls-corporate-intro">
            <FadeIn>
              <div className="section-title">
                <h2>Manage your corporate finances by yourself or in a team</h2>
                <p>To replace or complement your bank</p>
              </div>
            </FadeIn>
          </div>

          <div className="ls-corporate-grid">
            {CORPORATE_CARDS.map((card) => (
              <FadeIn key={card.id} delay={card.delay}>
                <div className="feature-card-widget-2">
                  <div className={card.iconBgClass}>
                    <img src={card.icon} alt="" />
                  </div>
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                  <Link href="/loan" className="theme-btn theme-btn-outlined mt-45">
                    Find Out More
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-work" aria-label="How it works">
        <div className="container">
          <div className="ls-how-intro">
            <FadeIn>
              <div className="section-title">
                <h2 className="mb-3">Here&apos;s how it works.</h2>
                <p>
                  When you&apos;re ready, Cardinal Loans is ready too - 24 hours a day, 7 days a
                  week.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="ls-how-grid">
            {HOW_IT_WORK_WIDGETS.map((widget, index) => (
              <div
                key={widget.id}
                className={cn(
                  index === 0 ? "ls-how-col-first" : "ls-how-col-second",
                )}
              >
                <FadeIn delay={widget.delay}>
                  <div className={cn("single-widget", widget.widgetClass)}>
                    <div className="widget-header">
                      <div className="widget-img">
                        <img src={widget.icon} alt="" />
                      </div>
                      <div className="widget-title">
                        <h4>{widget.title}</h4>
                        <p>{widget.description}</p>
                      </div>
                    </div>
                    <ul className="widget-content">
                      {widget.steps.map((step, stepIndex) => (
                        <li key={step.text} className={step.active ? "active" : undefined}>
                          <span className="number">{stepIndex + 1}</span>
                          <span className="text">{step.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="security-area" aria-label="Security">
        <div className="security-priority">
          <div className="shapes" aria-hidden>
            {SECURITY_SHAPES.map((shape, index) => (
              <img key={`${shape}-${index}`} src={shape} alt="" />
            ))}
          </div>
          <div className="container">
            <div className="ls-security-inner">
              <FadeIn>
                <img src="/img/security-tips/security-priority.png" alt="" />
                <h2>Your security. Our priority.</h2>
                <p>
                  We always have your security in mind. Rest easy knowing your data is protected
                  with 128-bit encryption. <Link href="/about">Learn more.</Link>
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-area" aria-label="Frequently asked questions">
        <div className="container">
          <FadeIn>
            <div className="section-title text-start">
              <h2 className="mb-0">Frequently asked questions</h2>
            </div>
          </FadeIn>

          <div className="ls-faq-grid">
            <div className="ls-faq-accordion">
              <LoanStepsFaqAccordion />
            </div>
            <div className="ls-faq-media">
              <FadeIn delay={0.2}>
                <div className="faq-img">
                  <img className="img-fluid" src="/img/faq/illustration.png" alt="FAQ illustration" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-area" aria-label="Contact call to action">
        <div className="container">
          <div className="ls-cta-shell">
            <div className="cta cta-bg-primary">
              <div className="shapes" aria-hidden>
                {CTA_SHAPES.map((shape, index) => (
                  <img key={`${shape}-${index}`} src={shape} alt="" />
                ))}
              </div>

              <div className="ls-cta-grid">
                <div>
                  <FadeIn direction="right">
                    <div className="cta-content">
                      <h2 className="mb-10">Have any question?</h2>
                      <p>Ask us anythisg.Do you have a love question you want us to answer?</p>
                    </div>
                  </FadeIn>
                </div>
                <div className="text-center text-md-end">
                  <FadeIn direction="left" delay={0.1}>
                    <div className="cta-content text-md-end">
                      <Link href="/contact" className="theme-btn theme-btn-alt m-0">
                        Contact Us
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
