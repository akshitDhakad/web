"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import {
  MOBILE_APP_BANNER_LOGOS,
  MOBILE_APP_FEATURES,
  MOBILE_APP_NEWS,
  MOBILE_APP_STATS,
  MOBILE_APP_TESTIMONIALS,
} from "@/features/home-variants/mobile-app/constants";

const BUBBLE_PARALLAX = [
  { x: 0, y: -250 },
  { x: 0, y: -250 },
  { x: 50, y: -250 },
  { x: 60, y: -200 },
  { x: 50, y: -130 },
  { x: 130, y: 250 },
  { x: 0, y: -250 },
  { x: 100, y: -250 },
] as const;

function ClientTestimonial({
  testimonial,
  delay,
}: {
  testimonial: (typeof MOBILE_APP_TESTIMONIALS)[number];
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="single-client">
        <img
          className="img-fluid rounded-circle"
          src={testimonial.image}
          alt={testimonial.name}
        />
        <p className="quote">{testimonial.quote}</p>
        <div className="client-info">
          <div>
            <p>{testimonial.name}</p>
            <span className="role">{testimonial.role}</span>
          </div>
          <div className="rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <Link key={index} href="#">
                <i className="icon_star" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function ClientSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  const slides = [...MOBILE_APP_TESTIMONIALS, ...MOBILE_APP_TESTIMONIALS, ...MOBILE_APP_TESTIMONIALS];

  return (
    <div className="client-slider">
      <div className="ma-embla-viewport" ref={emblaRef}>
        <div className="ma-embla-track">
          {slides.map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="ma-embla-slide">
              <ClientTestimonial testimonial={testimonial} delay={0.1 + (index % 3) * 0.2} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  const slides = [...MOBILE_APP_NEWS, ...MOBILE_APP_NEWS, ...MOBILE_APP_NEWS];

  return (
    <div className="news-slider">
      <div className="ma-embla-viewport" ref={emblaRef}>
        <div className="ma-embla-track">
          {slides.map((article, index) => (
            <div key={`${article.title}-${index}`} className="ma-embla-slide">
              <FadeIn delay={0.1 + (index % 3) * 0.2}>
                <div className="blog-widget-1">
                  <img className="w-sm-auto w-100" src={article.image} alt="news image" />
                  <div className="blog-content">
                    <h4>
                      <Link href="/blog">{article.title}</Link>
                    </h4>
                    <p>{article.excerpt}</p>
                    <Link className="read-more" href="/blog">
                      Read More <i className="arrow_right" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileAppPageContent() {
  return (
    <div className="mobile-app-page">
      <section className="banner-area" id="banner_animation" aria-label="Mobile banking hero">
        <div className="bubbles">
          {BUBBLE_PARALLAX.map((offset, index) => (
            <div key={index} data-parallax={JSON.stringify({ x: offset.x, y: offset.y, rotateZ: 0 })}>
              <div className="bubble" />
            </div>
          ))}
        </div>
        <div className="logos" aria-hidden>
          {MOBILE_APP_BANNER_LOGOS.map((logo) => (
            <img key={logo} src={logo} alt="" width={72} height={72} />
          ))}
        </div>
        <div className="container">
          <div className="ma-banner-inner">
            <div className="banner-content">
              <h1>
                Simple and Safe Digital <br /> Banking Mobile App
              </h1>
              <div className="img-area">
                <img
                  className="img-fluid ma-hero-person"
                  data-depth="0.6"
                  src="/img/banner/person.png"
                  alt="person"
                  width={326}
                  height={540}
                />
              </div>
              <div className="symbol-pulse" aria-hidden>
                <div className="pulse-1" />
                <div className="pulse-2" />
                <div className="pulse-x" />
              </div>
            </div>
          </div>

          <div className="ma-stats-row">
            <div className="floated-widget">
              <div className="ma-stats-grid">
                {MOBILE_APP_STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="statistics-widget-1">
                      <img src={stat.icon} alt="icon" />
                      <p>{stat.label}</p>
                      <h2 className="counter">
                        <span>
                          {stat.value}
                          {"suffix" in stat ? stat.suffix : ""}
                        </span>
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feature" className="feature-area" aria-label="Featured services">
        <div className="container">
          <div className="ma-feature-intro">
            <FadeIn>
              <div className="section-title">
                <h2>Our Featured</h2>
                <p>
                  You may want top security so that you can rest assured that your accounts will not
                  be compromised while you&apos;re using the app.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="ma-feature-grid">
            {MOBILE_APP_FEATURES.map((feature) => (
              <FadeIn key={feature.title} delay={feature.delay}>
                <div className="feature-card-widget">
                  <div className="card-img">
                    <img src={feature.icon} alt="feature svg" />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="track-f-progress" aria-label="Track financial progress">
        <div className="container">
          <div className="ma-track-grid">
            <div className="img-content">
              <img className="bg-img" src="/img/track-progress/shape-bg.png" alt="" aria-hidden />
              <img className="track-3" src="/img/track-progress/track-1.png" alt="" />
              <img className="track-img track-1" src="/img/track-progress/track-2.png" alt="" />
              <img className="track-img track-2" src="/img/track-progress/track-3.png" alt="" />
            </div>
            <div className="ma-track-text">
              <FadeIn direction="left">
                <div className="text-content">
                  <h2>Track Your Financial Progress</h2>
                  <p>
                    Set challenges Set small challenges to motivate yourself to save. Setting smaller
                    goals within your larger goals can be more engaging in tracking
                  </p>
                  <div>
                    <Link className="theme-btn-2" href="/about">
                      <span className="arrow">
                        <span className="horizontal-line" />
                      </span>
                      Learn more
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="card-payment" aria-label="Credit card payment">
        <div className="container">
          <div className="ma-card-grid">
            <div className="ma-card-text">
              <FadeIn direction="right">
                <div className="text-content">
                  <h2>Simplicity Credit Card Payment</h2>
                  <p>
                    Make a Payment. Cardholders can pay any outstanding balances on their Citibank
                    Simplicity Credit Card by logging in to their online account.
                  </p>
                  <div>
                    <Link className="theme-btn-2" href="/about">
                      <span className="arrow">
                        <span className="horizontal-line" />
                      </span>
                      Learn more
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="ma-card-media">
              <div className="img-content">
                <img className="bg-img" src="/img/card-payment/shape-bg.png" alt="" aria-hidden />
                <img className="card-1 img-fluid" src="/img/card-payment/card-1.png" alt="" />
                <img className="card-2" src="/img/card-payment/card-2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="internet-banking" aria-label="Internet banking">
        <div className="container">
          <div className="ma-bank-grid">
            <div className="ma-bank-media">
              <div className="img-content">
                <img className="bg-img" src="/img/internet-banking/shape-bg.png" alt="" aria-hidden />
                <img className="bank-main img-fluid" src="/img/internet-banking/img-1.png" alt="" />
                <img className="bank-1 img-fluid" src="/img/internet-banking/img-2.png" alt="" />
                <img className="bank-2 img-fluid" src="/img/internet-banking/img-3.png" alt="" />
                <img className="bank-3 img-fluid" src="/img/internet-banking/info.png" alt="" />
              </div>
            </div>
            <div className="ma-bank-text">
              <FadeIn direction="left">
                <div className="text-content">
                  <h2>Access Personal Internet Banking</h2>
                  <p>
                    If you have chosen to order a Security Key, you will be entitled a 30-day period
                    after self-registration, which is referred to as &apos;Security Key Activation Grace
                    Period&apos;. During this period, you can log on to Personal Internet Banking.
                  </p>
                  <div>
                    <Link className="theme-btn-2" href="/about">
                      <span className="arrow">
                        <span className="horizontal-line" />
                      </span>
                      Learn more
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="security-area" aria-label="Security tips">
        <div className="container">
          <div className="section-title">
            <h2>Security Tips</h2>
          </div>
          <div className="ma-security-grid">
            <FadeIn>
              <div className="single-security-widget">
                <div className="security-img text-center">
                  <img className="img-fluid round-15" src="/img/security-tips/img-1.png" alt="security image" />
                </div>
                <div className="security-content">
                  <h4>Online Security</h4>
                  <p>
                    Banca will never send emails that ask for confidential information. We will never
                    seek your personal details such as account information, password, etc at any time.
                  </p>
                </div>
              </div>
            </FadeIn>
            <div className="ma-security-side">
              <FadeIn delay={0.2} direction="right">
                <div className="single-security-widget">
                  <div className="ma-security-row">
                    <div className="security-img h-100">
                      <img className="img-fluid round-10 h-100" src="/img/security-tips/img-2.png" alt="security image" />
                    </div>
                    <div className="security-content-2">
                      <p className="mb-4">
                        Naver share your OTP with anyon,click here for more security tips to keep you
                        safe.
                      </p>
                      <span className="tips-title">Card Safety</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4} direction="right">
                <div className="single-security-widget">
                  <div className="ma-security-row-reverse">
                    <div className="security-content-2">
                      <p>
                        Never disclose your pin number to anyone, Mashreq staff will never ask for your
                        pin number. For your security, we recommend that you change your ATM PIN
                        regularly.
                      </p>
                      <span className="tips-title mt-35">ATM Safety</span>
                    </div>
                    <div className="security-img h-100">
                      <img className="img-fluid round-10 h-100" src="/img/security-tips/img-3.png" alt="security image" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="client-area" aria-label="Client testimonials">
        <div className="container">
          <div className="section-title">
            <FadeIn>
              <h2 className="mb-0">What Our Client Say</h2>
            </FadeIn>
          </div>

          <ClientSlider />

          <div className="ma-cta-row">
            <div className="cta cta-2" style={{ backgroundImage: "url(/img/client/cta-bg.png)" }}>
              <div className="bubbles">
                {Array.from({ length: 8 }, (_, index) => (
                  <div key={index} className={`bubble-${index + 1}`} />
                ))}
              </div>
              <div className="ma-cta-grid">
                <FadeIn direction="right">
                  <div className="cta-content text-center">
                    <h2>Download Our Free Mobile App</h2>
                  </div>
                </FadeIn>
                <div className="ma-cta-actions">
                  <Link href="#">
                    <div className="app-btn">
                      <i className="fab fa-google-play" />
                      <div className="btn-text">
                        <span>GET IT ON</span>
                        <p>Google Play</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="app-btn">
                      <i className="fab fa-apple" />
                      <div className="btn-text">
                        <span>Downloan on the</span>
                        <p>Apple Store</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-area" aria-label="Latest news">
        <div className="container">
          <div className="section-title">
            <FadeIn>
              <h2>Banca Latest News</h2>
            </FadeIn>
          </div>
          <NewsSlider />
        </div>
      </section>
    </div>
  );
}
