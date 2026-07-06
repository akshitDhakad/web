"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import {
  SIMPLE_ARTICLES,
  SIMPLE_CALCULATOR,
  SIMPLE_CALCULATOR_STEPS,
  SIMPLE_CORPORATE_LOGOS,
  SIMPLE_FAQ_ITEMS,
  SIMPLE_FEATURE_CARDS,
  SIMPLE_HELP_OFFERS,
  SIMPLE_TESTIMONIALS_PRIMARY,
  SIMPLE_TESTIMONIALS_SECONDARY,
  SIMPLE_TESTIMONIAL_CAPTION,
} from "@/features/home-variants/simple/constants";
import { calculateLoanEmi } from "@/features/loan/lib/calculator";
import { footerLink } from "@/lib/footer-links";
import { cn } from "@/lib/utils";

const BANNER_SLIDES = [
  { src: "/img/banner/slide-shape-1.png", parallax: { x: 220, y: 0, rotateZ: 0 } },
  { src: "/img/banner/slide-shape-2.png", parallax: { x: 270, y: 0, rotateZ: 0 } },
  { src: "/img/banner/slide-shape-3.png", parallax: { x: 330, y: 0, rotateZ: 0 } },
] as const;

function formatLoanAmount(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

function SimpleFaqAccordion() {
  const [openId, setOpenId] = useState<string>(
    () => SIMPLE_FAQ_ITEMS.find((item) => item.defaultOpen)?.id ?? SIMPLE_FAQ_ITEMS[0].id,
  );

  return (
    <div className="accordion" id="accordionExample">
      {SIMPLE_FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className={cn("single-widget-one", isOpen && "is-open")}>
            <div className="faq-header" id={item.headingId}>
              <h6
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
                <i className="icon_close" aria-hidden />
              </h6>
            </div>
            {isOpen ? (
              <div id={item.id} className="faq-body" role="region" aria-labelledby={item.headingId}>
                <div className="faq-answer-text">{item.answer}</div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function FeatureSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  const slides = [...SIMPLE_FEATURE_CARDS, ...SIMPLE_FEATURE_CARDS, ...SIMPLE_FEATURE_CARDS];

  return (
    <div className="feature-slider">
      <div className="sb-embla-viewport" ref={emblaRef}>
        <div className="sb-embla-track">
          {slides.map((card, index) => (
            <div key={`${card.title}-${index}`} className="sb-embla-slide">
              <FadeIn delay={card.delay}>
                <div className={cn("feature-card-widget-3", card.cardClass)}>
                  <div className="shapes">
                    {card.shapes.map((shape, shapeIndex) => (
                      <img key={`${shape}-${shapeIndex}`} src={shape} alt="" aria-hidden />
                    ))}
                  </div>
                  <img src={card.icon} alt="icon" />
                  <span className="title">{card.title}</span>
                  <h5>
                    Got a <span> question about Mortgage Loan?</span>
                  </h5>
                  <Link href={footerLink("Write to us")}>Write to us</Link>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SimpleTestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const primaryClient =
    SIMPLE_TESTIMONIALS_PRIMARY[selectedIndex % SIMPLE_TESTIMONIALS_PRIMARY.length];

  return (
    <section className="testimonial-area bg_white" aria-label="Testimonials">
      <div className="container">
        <div className="section-title sb-mobile-only">
          <h2>What Our Customers Are Saying</h2>
        </div>
        <div className="sb-testimonial-grid">
          <div className="sb-testimonial-primary">
            <div className="testimonial-slider-3">
              <div className="sb-testimonial-primary-panel">
                <div key={selectedIndex} className="sb-testimonial-primary-fade">
                  <div className="testimonial-widget-3">
                    <div className="client-img">
                      <img src={primaryClient.image} alt="client" />
                      <a
                        className="play-btn"
                        href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-play" />
                      </a>
                      <p className="caption">{SIMPLE_TESTIMONIAL_CAPTION}</p>
                    </div>
                    <div className="client-info">
                      <h6>{primaryClient.name}</h6>
                      <span>{primaryClient.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sb-testimonial-secondary">
            <div className="section-title sb-desktop-only">
              <FadeIn direction="right">
                <h2>
                  What Our Customers <br /> Are Saying
                </h2>
              </FadeIn>
            </div>
            <div className="testimonial-slider-2">
              <div className="sb-embla-viewport" ref={emblaRef}>
                <div className="sb-embla-track">
                  {SIMPLE_TESTIMONIALS_SECONDARY.map((client) => (
                    <div key={client.name} className="sb-embla-slide">
                      <div className="testimonial-widget-2">
                        <img src={client.image} alt="client" />
                        <div className="client-info">
                          <p>{client.name}</p>
                          <span>{client.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="slick-prev slick-arrow"
                onClick={scrollPrev}
                aria-label="Previous testimonial"
              >
                <i className="arrow_left" aria-hidden />
              </button>
              <button
                type="button"
                className="slick-next slick-arrow"
                onClick={scrollNext}
                aria-label="Next testimonial"
              >
                <i className="arrow_right" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SimplePageContent() {
  const [loanAmount, setLoanAmount] = useState<number>(SIMPLE_CALCULATOR.defaultAmount);
  const [loanYears, setLoanYears] = useState<number>(SIMPLE_CALCULATOR.defaultYears);
  const [activeStep, setActiveStep] = useState(1);

  const months = loanYears * 12;
  const payment = useMemo(
    () => calculateLoanEmi(loanAmount, SIMPLE_CALCULATOR.interestRate, months),
    [loanAmount, months],
  );

  const handleAmountChange = (value: number) => {
    setLoanAmount(value);
    setActiveStep((prev) => Math.max(prev, 2));
  };

  const handleYearsChange = (value: number) => {
    setLoanYears(value);
    setActiveStep(3);
  };

  return (
    <div className="simple-banca-page">
      <section className="banner-area-3" id="banner_animation2" aria-label="Loan comparison hero">
        <div className="bg-slides" aria-hidden>
          {BANNER_SLIDES.map((slide) => (
            <div key={slide.src} className="slide" data-parallax={JSON.stringify(slide.parallax)}>
              <img className="slideInRight" src={slide.src} alt="" />
            </div>
          ))}
        </div>
        <div className="container">
          <div className="sb-hero-grid">
            <div className="sb-hero-content">
              <div className="banner-content">
                <FadeIn delay={0.1}>
                  <h1>Compare Loans From Several Banks Find The Cheapest Loan</h1>
                  <Link
                    href="/loan"
                    className="theme-btn theme-btn-rounded-2 theme-btn-lg theme-btn-alt"
                  >
                    Apply Now
                    <i className="arrow_right" />
                  </Link>
                </FadeIn>
              </div>
            </div>
            <div className="sb-hero-media">
              <img
                className="person-img"
                src="/img/banner/person-2.png"
                alt=""
                width={900}
                height={872}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-calculator bg_white" aria-label="Loan calculator">
        <div className="container">
          <div className="feature">
            <FeatureSlider />
          </div>

          <div className="calculator">
            <div className="steps">
              {SIMPLE_CALCULATOR_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="single-step"
                  style={activeStep >= step.number ? { color: "var(--brand_color)" } : undefined}
                >
                  <span>{step.number}</span>
                  {step.label}
                </div>
              ))}
            </div>
            <div className="sb-calc-grid">
              <div className="sb-calc-col-first">
                <div className="calculator-slider">
                  <label htmlFor="loan-amount-range">Loan Amount</label>
                  <div className="sb-range-row">
                    <div className="range-slider">
                      <input
                        id="loan-amount-range"
                        type="range"
                        min={SIMPLE_CALCULATOR.minAmount}
                        max={SIMPLE_CALCULATOR.maxAmount}
                        step={1000}
                        value={loanAmount}
                        onChange={(event) => handleAmountChange(Number(event.target.value))}
                        aria-label="Loan amount"
                      />
                    </div>
                    <input
                      className="range-input"
                      type="text"
                      readOnly
                      value={formatLoanAmount(loanAmount)}
                      aria-label="Loan amount value"
                    />
                  </div>
                  <span className="range">
                    Min ${SIMPLE_CALCULATOR.minAmount.toLocaleString()} - Max $
                    {SIMPLE_CALCULATOR.maxAmount.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="sb-calc-col-second">
                <div className="calculator-slider">
                  <label className="label-2" htmlFor="loan-period-range">
                    Loan Period
                  </label>
                  <div className="sb-range-row">
                    <div className="range-slider">
                      <input
                        id="loan-period-range"
                        type="range"
                        min={SIMPLE_CALCULATOR.minYears}
                        max={SIMPLE_CALCULATOR.maxYears}
                        step={1}
                        value={loanYears}
                        onChange={(event) => handleYearsChange(Number(event.target.value))}
                        aria-label="Loan period in years"
                      />
                    </div>
                    <input
                      className="range-input"
                      type="text"
                      readOnly
                      value={`${loanYears} ${loanYears === 1 ? "year" : "years"}`}
                      aria-label="Loan period value"
                    />
                  </div>
                  <span className="range">
                    Min {SIMPLE_CALCULATOR.minYears} year - Max {SIMPLE_CALCULATOR.maxYears} years
                  </span>
                </div>
              </div>
            </div>
            <div className="expected-payment">
              <div className="bg_disable sec-head">
                <div>
                  <h5>Expected monthly payment</h5>
                  <p>Based on {SIMPLE_CALCULATOR.interestRate}% borrowing rate</p>
                </div>
                <h4 className="mb-0">
                  ${Math.round(payment.emi).toLocaleString("en-US")} / month
                </h4>
              </div>
              <p className="text">
                Price example: Total credit amount USD ${loanAmount.toLocaleString("en-US")} - Maturity{" "}
                {months} months - Variable borrowing rate {SIMPLE_CALCULATOR.interestRate}% - APR 7.24%
                - Etb. USD $1,000 - Total repayment: USD $
                {Math.round(payment.totalPayment).toLocaleString("en-US")} - Total credit costs: USD $
                {Math.round(payment.totalInterest).toLocaleString("en-US")} - 14-day right of withdrawal
              </p>
              <div className="sb-next-btn">
                <Link href="/loan/details" className="theme-btn theme-btn-rounded">
                  Next <i className="arrow_right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="help-ad-area" aria-label="Help advertisement">
        <div className="container">
          <div className="section-title">
            <h2>We Have Helped More Than 10,000 Users</h2>
          </div>
          <div className="sb-help-intro">
            <img className="main-img img-fluid" src="/img/help-ad/img-1.png" alt="img" />
            <div className="sb-help-bottom">
              <div className="offers">
                <ul>
                  {SIMPLE_HELP_OFFERS.map((offer) => (
                    <li key={offer}>
                      <span>
                        <i className="icon_check" />
                      </span>{" "}
                      {offer}
                    </li>
                  ))}
                </ul>
                <div className="shape">
                  <img src="/img/help-ad/shape.png" alt="" aria-hidden />
                </div>
              </div>
              <div className="sb-help-text">
                <p>
                  Compare multiple banks with just one non-binding application. We save you the hassle
                  of checking the price at each bank.
                </p>
                <p>
                  It takes 2 min. To fill out the application, you immediately get quotes from banks
                  and can choose the best quote.
                </p>
                <p>We save you not only time, but in many cases also many thousands of kroner.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banca-corporate bg_white" aria-label="Partner banks">
        <div className="container">
          <div className="sb-corporate-intro">
            <FadeIn>
              <div className="section-title">
                <h2>Banca Cooperates With These Banks</h2>
                <p>
                  <span>3000+ Companies</span> Trust Sturtaplanding to build landing page for their{" "}
                  <span> dream product</span>
                </p>
              </div>
            </FadeIn>
          </div>
          {[0, 1].map((rowIndex) => (
            <div
              key={rowIndex}
              className={cn("sb-brand-row", rowIndex === 1 && "sb-brand-row-second")}
            >
              {SIMPLE_CORPORATE_LOGOS.map((logo, index) => (
                <div
                  key={`${logo}-${rowIndex}`}
                  className={cn(index === 4 && rowIndex === 0 && "sb-brand-hide-mobile")}
                >
                  <FadeIn delay={0.1 + index * 0.2} direction="right">
                    <Link href="/about" className="single-brand">
                      <img className="img-fluid" src={logo} alt="logo" />
                    </Link>
                  </FadeIn>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="articles-area" aria-label="Articles">
        <div className="container">
          <div className="sb-articles-header section-title">
            <FadeIn direction="right">
              <h2>More About Finance &amp; Loans</h2>
            </FadeIn>
            <FadeIn direction="left">
              <Link href="/blog">
                See All Articles <i className="arrow_right" />
              </Link>
            </FadeIn>
          </div>
          <div className="sb-articles-grid">
            {SIMPLE_ARTICLES.map((article) => (
              <FadeIn key={article.title} delay={article.delay}>
                <div className="blog-widget-1">
                  <img src={article.image} alt="news image" />
                  <div className="blog-content">
                    <h6>
                      <Link href={article.href}>{article.title}</Link>
                    </h6>
                    <div className="blog-date">
                      <i className="icon_calendar" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SimpleTestimonialsSection />

      <section className="advisor-area" id="MouseMoveAnimation" aria-label="Advisor and FAQ">
        <div className="container">
          <div className="sb-advisor-grid">
            <div className="sb-advisor-media">
              <FadeIn>
                <div className="section-title text-start">
                  <h2 className="mb-0">Our Advisors Are Ready To Help You</h2>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="advisor-img">
                  <div className="shape">
                    <div className="box">
                      <img className="layer layer2" data-depth="0.5" src="/img/faq/Shape.png" alt="" aria-hidden />
                    </div>
                    <div className="circle-shape" />
                  </div>
                  <img className="main-img" src="/img/faq/advisor.png" alt="advisor" />
                  <div className="work-time">
                    <div className="circle-shape" />
                    All weekdays <span>10.00 - 18.00</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="sb-contact-grid">
                  <Link href="tel:01234567890" className="theme-btn theme-btn-primary_alt theme-btn-rounded">
                    <i className="icon_phone" /> 01234-567890
                  </Link>
                  <Link href="mailto:bancainfo@email.com" className="theme-btn theme-btn-primary_alt theme-btn-rounded">
                    <i className="icon_mail_alt" /> info@banca.com
                  </Link>
                </div>
              </FadeIn>
            </div>
            <div className="faq-widget-2">
              <SimpleFaqAccordion />
            </div>
          </div>
        </div>
      </section>

      <section
        className="help-cta"
        style={{ backgroundImage: "url(/img/help-ad/bg-shape.png)" }}
        aria-label="Help call to action"
      >
        <div className="container">
          <div className="section-title">
            <h2>We Help With Both New Loan And Collective Loan</h2>
          </div>
          <div className="sb-cta-inner">
            <p>
              Whether you need to borrow for renovation, car, holiday or want to combine your loans
              into one single loan, we will help you
            </p>
            <div className="sb-cta-actions">
              <Link href="/loan" className="theme-btn theme-btn-rounded">
                New Loan
              </Link>
              <Link href="/loan/details" className="theme-btn theme-btn-rounded theme-btn-alt">
                Collective Loan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
