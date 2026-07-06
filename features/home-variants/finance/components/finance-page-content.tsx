"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { FinanceParallaxImage } from "@/features/home-variants/finance/components/finance-parallax-image";
import {
  CLIENT_LOGOS,
  FAQ_COLUMN_ONE,
  FAQ_COLUMN_TWO,
  FOOTER_DESIGN_LINKS,
  FOOTER_SUPPORT_LINKS,
  FOOTER_TOOLS_LINKS,
  PAYMENT_ICONS,
  PRICING_FEATURES,
  PRICING_PLANS,
  PROCESS_CARDS,
} from "@/features/home-variants/finance/constants/finance";
import { footerLink } from "@/lib/footer-links";
import { cn } from "@/lib/utils";

/** Template container — do not mix with Tailwind max-width overrides */
const FINANCE_CONTAINER = "container";

function FinanceFaqColumn({
  items,
  accordionId,
}: {
  items: typeof FAQ_COLUMN_ONE | typeof FAQ_COLUMN_TWO;
  accordionId: string;
}) {
  const [openId, setOpenId] = useState<string | null>(
    () => items.find((item) => item.defaultOpen)?.id ?? items[0].id,
  );

  return (
    <div className="accordion saas-faq-list" id={accordionId}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={cn("faq_item", isOpen && "is-open")}
          >
            <div className="faq-header" id={item.headingId}>
              <h6
                className={cn("mb-0", !isOpen && "collapsed")}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={item.id}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setOpenId(isOpen ? null : item.id);
                  }
                }}
              >
                {item.question}
                <i className="icon_plus" aria-hidden />
                <i className="icon_minus-06" aria-hidden />
              </h6>
            </div>
            {isOpen ? (
              <div
                id={item.id}
                className="faq-body"
                role="region"
                aria-labelledby={item.headingId}
              >
                <div className="faq-answer-text">{item.answer}</div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function PricingPanel({ period }: { period: "month" | "year" }) {
  const plans = PRICING_PLANS[period];

  return (
    <div className={`price_items ${period}`}>
      <div className="row justify-content-center">
        {plans.map((plan, index) => (
          <div key={`${period}-${plan.name}`} className="col-xl-4 col-md-6">
            <FadeIn delay={index * 0.1}>
              <div className="price_item">
                <div className="price_header">
                  <h6>{plan.name}</h6>
                  <p>
                    There are many variations of passages of Lorem Ipsum available but the word.
                  </p>
                </div>
                <div className="price">
                  {plan.price}
                  <sub>{plan.period}</sub>
                </div>
                <ul className="service_list list-unstyled">
                  {PRICING_FEATURES.map((feature) => (
                    <li key={feature}>
                      <i className="icon_check_alt" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="price_btn theme-btn theme-btn-alt">
                  Choose Plan
                </Link>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinanceSaasFooter() {
  return (
    <footer className="saas-footer-area bg-white">
      <div className="saas-footer-top">
        <div className={FINANCE_CONTAINER}>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="f-widget about-widget">
                <h4 className="f-widget-title">Contact us</h4>
                <ul className="list-unstyled">
                  <li>
                    214 Cleo Street Suite 832 <br />
                    Botswana
                  </li>
                  <li>
                    <a href="tel:235684154">+23 572-904-6013</a>
                  </li>
                  <li>
                    <a href="mailto:banca.support@webmail.com">banca.support@webmail.com</a>
                  </li>
                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="f-widget link-widget">
                <h4 className="f-widget-title">Support</h4>
                <ul className="footer-link">
                  {FOOTER_SUPPORT_LINKS.map((link) => (
                    <li key={link}>
                      <Link href={footerLink(link)}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="f-widget link-widget">
                <h4 className="f-widget-title">Design Online</h4>
                <ul className="footer-link">
                  {FOOTER_DESIGN_LINKS.map((link) => (
                    <li key={link}>
                      <Link href={footerLink(link)}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="f-widget link-widget">
                <h4 className="f-widget-title">Tools</h4>
                <ul className="footer-link">
                  {FOOTER_TOOLS_LINKS.map((link) => (
                    <li key={link}>
                      <Link href={footerLink(link)}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="saas-footer-bottom">
        <div className={FINANCE_CONTAINER}>
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="d-flex">
                <div className="f-social">
                  <a href="#" aria-label="Facebook">
                    <i className="social_facebook" />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <i className="social_youtube" />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="social_instagram" />
                  </a>
                </div>
                <p>
                  2023 <Link href="/">Banca</Link>. All rights reserved
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <ul className="list-unstyled payment-list">
                {PAYMENT_ICONS.map((icon) => (
                  <li key={icon.src}>
                    <a href="#" aria-label={icon.alt}>
                      <Image src={icon.src} alt={icon.alt} width={48} height={32} unoptimized />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FinancePageContent() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => setIsYearly((value) => !value);

  return (
    <div className="finance-saas-page">
      <section className="banner-saas-area" aria-label="Finance SaaS hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="shape_img" src="/img/saas-app/grid.png" alt="" aria-hidden />
        <div className={FINANCE_CONTAINER}>
          <div className="row justify-content-center">
            <div className="saas-banner-content text-center">
              <FadeIn delay={0.35}>
                <h5>WeLCOME TO THE Best banking WEb application ⭐</h5>
              </FadeIn>
              <FadeIn delay={0.45}>
                <h1>
                  The modern banking <span>solution</span> for your business in one app.
                </h1>
              </FadeIn>
              <FadeIn delay={0.55}>
                <p>
                  Inventore veritatis et architecto beatae vitaie dicta explicabore nemo ipsam
                  volupetateme voluptas aspernatur magni.
                </p>
              </FadeIn>
              <div className="d-flex flex-column flex-sm-row justify-content-center mt-25 subscribe-field">
                <FadeIn delay={0.5}>
                  <Link href="/loan" className="theme-btn theme-btn-lg mt-50">
                    Get started now
                    <i className="arrow_right-up" />
                  </Link>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <Link href="/loan" className="mt-50 theme-btn theme-btn-lg theme-btn-alt">
                    Learn more
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
          <FadeIn delay={0.5}>
            <div className="dahbord_img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/saas-app/dashboard.png" alt="SaaS dashboard" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="saas-clients-logo bg-white pt-90 pb-85" aria-label="Trusted clients">
        <div className={FINANCE_CONTAINER}>
          <FadeIn delay={0.3}>
            <p className="clients-logo-title">
              Trust Trusted by over <span>10,000+</span> customers wordwide
            </p>
          </FadeIn>
          <div className="row gy-md-0 gy-4 align-items-center h-100">
            {CLIENT_LOGOS.map((logo) => (
              <div key={logo.src} className="col">
                <Link href="/about">
                  <FadeIn direction="right" delay={logo.delay}>
                    <Image
                      className="clients-logo img-fluid"
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={32}
                    />
                  </FadeIn>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-features-card-area bg-white" aria-label="Process steps">
        <div className={FINANCE_CONTAINER}>
          <div className="saas-section-title text-center mb-60">
            <h2>
              3 easy to follow <span>process</span>
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available but them
              <br />
              majority have suffered alteration form injected.
            </p>
          </div>
          <div className="row">
            {PROCESS_CARDS.map((card) => (
              <div key={card.title} className="col-lg-4">
                <FadeIn delay={card.delay} className="h-full w-full shadow-sm">
                  <div className="saas-feature-card">
                    <div className="card-img">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={card.icon} alt="feature svg" />
                    </div>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                    <Link href="/about" className="text-btn max-w-min whitespace-nowrap">
                      Learn More
                    </Link>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-features-area bg-white" aria-label="Features">
        <div className={FINANCE_CONTAINER}>
          {/* Row 1 — image left, content right */}
          <div className="saas-features-item">
            <FadeIn direction="right" delay={0.3} className="saas-features-media">
              <div className="saas-features-img saas-features-img--one">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/saas-app/features_img_one.png"
                  alt="Finance features"
                  width={506}
                  height={429}
                />
              </div>
            </FadeIn>
            <div className="saas-features-content">
              <div className="saas-section-title">
                <FadeIn>
                  <h2>
                    Simplify your finance <span>banking</span> and loan
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p>
                    Design Season is a collaboration between Leicester&apos;s creative hub LCB
                    based in the city&apos;s cultural quarter and designers and design businesses
                    all over the city &amp; county
                  </p>
                </FadeIn>
              </div>
              <div className="features-icon-row">
                <FadeIn delay={0.3}>
                  <div className="features-icon-box">
                    <div className="round_icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/img/saas-app/hand.png" alt="" aria-hidden />
                    </div>
                    <div className="text">
                      <h4>Single term fees</h4>
                      <p>Easily copy and paste Pricing components</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="features-icon-box two">
                    <div className="round_icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/img/saas-app/travel_explore.png" alt="" aria-hidden />
                    </div>
                    <div className="text">
                      <h4>150+ Locations</h4>
                      <p>Easily copy and paste Pricing components</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Row 2 — content left, image right */}
          <div className="saas-features-item saas-features-item--reverse">
            <div className="saas-features-content">
              <FadeIn delay={0.3}>
                <div className="saas-section-title">
                  <h2>
                    We have reputable <span>customer</span> feedbacks
                  </h2>
                  <p>
                    Design Season is a collaboration between Leicester&apos;s creative hub LCB
                    based in the city&apos;s cultural quarter and designers and design businesses
                    all over the city &amp; county
                  </p>
                </div>
              </FadeIn>
              <div className="features-icon-row features-icon-row--stats">
                <FadeIn delay={0.4}>
                  <div className="features-icon-box feedback">
                    <div className="text">
                      <h4>500+</h4>
                      <p>Active customers use our application</p>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="features-icon-box feedback feedback-divided">
                    <div className="text">
                      <h4>$105k</h4>
                      <p>Loans given out in the last few months</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
            <FadeIn direction="left" delay={0.2} className="saas-features-media">
              2              <div className="saas-features-img saas-features-img--two">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/saas-app/features_img_two.png"
                  alt="Customer feedback"
                  width={504}
                  height={419}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="app-showcase-area" aria-label="App showcase">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="shape_img" src="/img/saas-app/grid-two.png" alt="" aria-hidden />
        <div className={FINANCE_CONTAINER}>
          <div className="saas-section-title text-center mb-60">
            <FadeIn delay={0.2}>
              <h2>
                All your <span>finance</span> in one app
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available but them
                <br />
                majority have suffered alteration form injected.
              </p>
            </FadeIn>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="app-showcase-item">
                <div className="round floatingBubbles" />
                <h4>Simple loan register process</h4>
                <p>
                  I transform thorn problems into elagant solutions using visuals design use this
                  pack illustrations for many.
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/saas-app/app_showcase1.png"
                  alt="App showcase"
                  width={516}
                  height={294}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="app-showcase-item box-two">
                <div className="round floatingBubbles" />
                <h4>Access to secure banking</h4>
                <p>
                  I transform thorn problems into elagant solutions using visuals design use this
                  pack illustrations for many.
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/saas-app/app_showcase2.png"
                  alt="Secure banking"
                  width={516}
                  height={294}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="app-showcase-item box-three">
                <div className="app-text">
                  <h3>Calculate and confirm your loans</h3>
                  <p>
                    I transform thorn problems into elagant solutions using visuals design use this
                    pack illustrations for many.
                  </p>
                  <Link href="/loan" className="theme-btn theme-btn-lg theme-btn-alt">
                    Visit loan calculator
                  </Link>
                </div>
                <div className="img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/saas-app/dash_app.png"
                    alt="Loan dashboard"
                    width={469}
                    height={389}
                  />
                  <div className="app_shap_img one">
                    <FinanceParallaxImage
                      src="/img/saas-app/dash_app_small.png"
                      alt=""
                      parallax={{ x: 0, y: -80 }}
                      ariaHidden
                    />
                  </div>
                  <div className="app_shap_img two">
                    <FinanceParallaxImage
                      src="/img/saas-app/dash_app_small2.png"
                      alt=""
                      parallax={{ x: 0, y: 50 }}
                      ariaHidden
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="saas-pricing-area bg-white" aria-label="Pricing">
        <div className={FINANCE_CONTAINER}>
          <FadeIn delay={0.2}>
            <div className="saas-section-title text-center mb-60">
              <h2>
                The perfect <span>pricings</span> plans
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available but them
                <br />
                majority have suffered alteration form injected.
              </p>
            </div>
          </FadeIn>
          <div className={cn("pricing_tab_btn text-center", !isYearly && "active")}>
            <span>Monthly</span>
            <span
              className={cn("toggle", isYearly && "clicked")}
              role="button"
              tabIndex={0}
              aria-label="Toggle yearly pricing"
              onClick={togglePricing}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  togglePricing();
                }
              }}
            />
            <span>Yearly</span>
          </div>
          <div className={cn("pricing_inner", isYearly && "active")}>
            <PricingPanel period="month" />
            <PricingPanel period="year" />
          </div>
        </div>
      </section>

      <section className="saas-faq-area bg-white" aria-label="FAQ">
        <div className={FINANCE_CONTAINER}>
          <FadeIn delay={0.2}>
            <div className="saas-section-title text-center mb-60">
              <h2>
                Frequently asked <span>questions</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available but them
                <br />
                majority have suffered alteration form injected.
              </p>
            </div>
          </FadeIn>
          <div className="saas-faq-grid">
            <FinanceFaqColumn items={FAQ_COLUMN_ONE} accordionId="accordionExample" />
            <FinanceFaqColumn items={FAQ_COLUMN_TWO} accordionId="accordionExample2" />
          </div>
        </div>
      </section>

      <section className="saas-subscribe-area cta-4" aria-label="Subscribe">
        <div className={FINANCE_CONTAINER}>
          <FadeIn delay={0.2}>
            <div className="cta-content">
              <h2 className="mb-10">Start your free trial !</h2>
              <p>There are many variations of passages of Lorem Ipsum available.</p>
              <div className="d-flex flex-column flex-sm-row mt-30">
                <input type="email" className="form-control" placeholder="Enter Email address" />
                <Link href="/contact" className="input-append theme-btn theme-btn-lg ms-sm-1">
                  Subscribe
                </Link>
              </div>
              <ul className="list-unstyled feature-list !mt-2">
                <li>
                  <i className="fas fa-check-circle" /> Get 30 day free trial
                </li>
                <li>
                  <i className="fas fa-check-circle" /> No Spamming
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
        <FinanceParallaxImage
          className="saas_dash_img"
          src="/img/saas-app/subscribe-dashboard.png"
          alt="Subscribe dashboard"
          parallax={{ x: -40, y: 50 }}
        />
      </section>

      <FinanceSaasFooter />
    </div>
  );
}
