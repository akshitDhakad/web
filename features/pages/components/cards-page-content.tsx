"use client";

import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { CardCtaShapes } from "@/features/pages/components/card-cta-shapes";
import { CardHeroImages } from "@/features/pages/components/card-hero-images";
import {
  CARD_CUSTOMIZE_FEATURES,
  CARD_FEATURES,
  CARD_WHY_CHOOSE,
  CREDIT_CARDS,
  MARKETPLACE_LOGOS,
} from "@/features/pages/constants/cards";
import { cn } from "@/lib/utils";

const TITLE_H2 =
  "cards-title-h2 mb-5 mt-0 font-[family-name:var(--font-poppins),'Poppins',sans-serif] text-[30px] font-semibold leading-[1.2] text-[var(--secondary_color)] md:text-[42px]";

const TITLE_P =
  "m-0 font-[family-name:var(--font-roboto),'Roboto',sans-serif] text-base font-normal leading-[26px] text-[var(--p_color)]";

function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("section-title", className)}>{children}</div>;
}

export function CardsPageContent() {
  return (
    <div className="cards-page">
      {/* Hero */}
      <section
        className="banner-area-4 cards-sec-hero overflow-hidden bg-[#10121c]"
        aria-label="Cards hero"
      >
        <div className="cards-container">
          <div className="cards-grid cards-grid--2 cards-hero-inner">
            <FadeIn>
              <div className="banner-content">
                <h1 className="m-0 font-[family-name:var(--font-poppins),'Poppins',sans-serif] text-[42px] font-bold leading-[1.15] text-white max-md:text-[36px]">
                  The credit card as it should be.
                </h1>
                <p className="mt-5 font-[family-name:var(--font-roboto),'Roboto',sans-serif] text-base leading-6 text-white">
                  Without an annuity, it gives you cashback on all your purchases and
                  access to months without interest.
                </p>
                <Link
                  href="#"
                  className="theme-btn theme-btn-outlined_alt mt-[50px] inline-block h-[55px] leading-[51px] text-black hover:text-white"
                >
                  I want my BancaCard
                </Link>
              </div>
            </FadeIn>
            <div className="cards-hero-media mx-auto w-full max-w-[380px] overflow-visible text-center sm:text-right md:ml-auto">
              <CardHeroImages />
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace logos */}
      <section className="mplace-logo cards-sec-marketplace bg-white">
        <div className="cards-container">
          <div className="cards-grid cards-grid--12">
            <FadeIn direction="left" className="cards-col-3">
              <p className="m-0 font-[family-name:var(--font-roboto),'Roboto',sans-serif] text-base leading-7 text-[var(--p_color)]">
                ACCEPTABLE TO MILLIONS OF CUSTOMERS WORLDWIDE AND IN TOP MARKETPLACES.
              </p>
            </FadeIn>
            <div className="cards-col-8 text-center">
              <div className="cards-grid cards-grid--logos">
                {MARKETPLACE_LOGOS.map((logo, index) => (
                  <FadeIn key={logo} direction="right" delay={0.1 + index * 0.2}>
                    <Link href="#" className="flex justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="h-auto w-auto max-w-[140px] opacity-[0.85] transition-opacity hover:opacity-100"
                        src={logo}
                        alt="Partner logo"
                      />
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bcard-feature-area cards-sec-features bg-[#f5f7fa]">
        <div className="cards-container">
          <SectionTitle className="cards-title-block cards-title-block--center">
            <FadeIn>
              <h2 className={TITLE_H2}>Great Features Of Banca Card</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className={TITLE_P}>
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered
              </p>
            </FadeIn>
          </SectionTitle>
          <div className="cards-grid cards-grid--3 cards-mt-30">
            {CARD_FEATURES.map((feature, index) => (
              <FadeIn key={feature.title} delay={0.1 + index * 0.2}>
                <div className="feature-card-widget-5 h-full rounded-lg bg-white px-10 pt-[50px] pb-[43px] text-left shadow-[0_1.6px_3.6px_rgba(51,77,114,0.15)] transition-shadow hover:shadow-[0_20px_45px_rgba(51,77,114,0.15)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="block h-auto w-auto max-h-16 max-w-16"
                    src={feature.icon}
                    alt=""
                    aria-hidden
                  />
                  <h4 className="mb-[15px] mt-[30px] font-[family-name:var(--font-poppins),'Poppins',sans-serif] text-2xl font-semibold text-[var(--secondary_color)]">
                    {feature.title}
                  </h4>
                  <p className={TITLE_P}>{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Safe deposit */}
      <section className="safe-deposit-area cards-sec-safe overflow-hidden bg-white">
        <div className="cards-container">
          <div className="cards-grid cards-grid--2">
            <FadeIn>
              <div className="card-img relative z-[1] mx-auto w-full max-w-xl md:max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/img/card/visa.png" alt="Visa" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/img/card/mastercard.png" alt="Mastercard" />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="bg-img" src="/img/card/payment-bg.png" alt="" aria-hidden />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="relative z-[1] block h-auto w-full"
                  src="/img/card/credit-card.png"
                  alt="Credit card"
                />
              </div>
            </FadeIn>
            <div>
              <SectionTitle className="cards-title-block cards-title-block--left">
                <FadeIn>
                  <h2 className={cn(TITLE_H2, "text-left")}>
                    Best Ways to Send Your Money From Anywhere You Like
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p
                    className={cn(
                      TITLE_P,
                      "cards-border-left relative pl-2.5 text-left",
                    )}
                  >
                    Banca came as a solution to the next generation. Through our portal, you can sit
                    at the comfort of your home, office or pretty much anywhere, and send money to
                    anywhere! Through our strong network.
                  </p>
                </FadeIn>
              </SectionTitle>
              <div className="cards-grid cards-grid--2 cards-mt-80">
                <FadeIn direction="right" delay={0.1}>
                  <div className="payment-system">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="block h-12 w-12"
                      src="/img/card/online-payment.svg"
                      alt=""
                      aria-hidden
                    />
                    <h5 className="mb-2.5 mt-5 font-[family-name:var(--font-poppins),'Poppins',sans-serif] text-xl font-semibold text-[var(--secondary_color)]">
                      Online Payments
                    </h5>
                    <p className={TITLE_P}>We acceept many type payments getway that you love.</p>
                  </div>
                </FadeIn>
                <FadeIn direction="right" delay={0.3}>
                  <div className="payment-system cards-mt-65-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="block h-12 w-12"
                      src="/img/card/safebox.svg"
                      alt=""
                      aria-hidden
                    />
                    <h5 className="mb-2.5 mt-5 font-[family-name:var(--font-poppins),'Poppins',sans-serif] text-xl font-semibold text-[var(--secondary_color)]">
                      Safe Deposit
                    </h5>
                    <p className={TITLE_P}>You can trust us for your deposit. No hidden fee.</p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customize payments */}
      <section className="customize-card-area cards-sec-customize overflow-hidden bg-[#f5f7fa]">
        <div className="cards-container">
          <SectionTitle className="cards-title-block cards-title-block--left cards-mb-35">
            <FadeIn>
              <h2 className={cn(TITLE_H2, "text-left")}>Customize Your Payments</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className={cn(TITLE_P, "text-left")}>
                Personalize the newly-improved Payment Options Form to include all your payment
                methods such as, easy monthly payments, credit cards
              </p>
            </FadeIn>
          </SectionTitle>
          <div className="cards-grid cards-grid--2">
            <div className="cards-order-2 cards-lg-order-1 cards-widget-gap">
              {CARD_CUSTOMIZE_FEATURES.map((feature, index) => (
                <FadeIn key={feature.title} delay={0.1 + index * 0.2}>
                  <div className="feature-card-widget-6 flex items-start gap-5 rounded-[10px] bg-white p-[38px_40px] text-left shadow-[0_1.6px_3.6px_rgba(51,77,114,0.15)] transition-shadow hover:shadow-[0_20px_45px_rgba(51,77,114,0.15)]">
                    <div className="icon shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="block h-12 w-12"
                        src={feature.icon}
                        alt=""
                        aria-hidden
                      />
                    </div>
                    <div className="card-content min-w-0">
                      <h6 className="mb-2 font-[family-name:var(--font-poppins),'Poppins',sans-serif] text-lg font-semibold leading-snug text-[var(--secondary_color)]">
                        {feature.title}
                      </h6>
                      <p className={TITLE_P}>{feature.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="cards-order-1 cards-lg-order-2 cards-lg-pl-50">
              <FadeIn direction="left" delay={0.2}>
                <div className="card-img relative mb-8 sm:mb-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="block h-auto w-full"
                    src="/img/card/card-img-bg.png"
                    alt=""
                    aria-hidden
                  />
                  <div className="shape-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/card/Card-image-1.png" alt="Card design" />
                  </div>
                  <div className="shape-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/card/Card-image-2.png" alt="" aria-hidden />
                  </div>
                  <div className="shape-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/card/Card-image-3.png" alt="" aria-hidden />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="why-choose-area cards-sec-why overflow-hidden bg-[#10121c]">
        <div className="cards-container">
          <SectionTitle className="cards-title-block cards-title-block--center">
            <FadeIn>
              <h2 className={cn(TITLE_H2, "text-white")}>Why You Choose Us?</h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className={cn(TITLE_P, "text-[#c8ccd0]")}>
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration.
              </p>
            </FadeIn>
          </SectionTitle>
          <div className="cards-grid cards-grid--3 cards-mt-55">
            {CARD_WHY_CHOOSE.map((item, index) => (
              <FadeIn key={item.title} delay={0.1 + index * 0.2}>
                <div className="content-box cards-why-item relative text-center">
                  {"showLine" in item && item.showLine && (
                    <div className="line-shape">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/img/card/line-shape.png" alt="" aria-hidden />
                    </div>
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mx-auto block h-16 w-16"
                    src={item.icon}
                    alt=""
                    aria-hidden
                  />
                  <h4 className="mb-[15px] mt-[30px] font-[family-name:var(--font-poppins),'Poppins',sans-serif] text-2xl font-semibold leading-[30px] text-white">
                    {item.title}
                  </h4>
                  <p className={cn(TITLE_P, "text-[#c8ccd0]")}>{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Choose card */}
      <section className="choose-card-area cards-sec-choose bg-[#f5f7fa]">
        <div className="cards-container">
          <SectionTitle className="cards-title-block cards-title-block--center cards-title-block--wide">
            <FadeIn>
              <h2 className={TITLE_H2}>
                Choose Card <br />
                Considering Your Personal Needs
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className={TITLE_P}>
                You&apos;re considering opening a credit card to build credit. If this is the case,
                you need to make sure that you act responsibly with your card.
              </p>
            </FadeIn>
          </SectionTitle>
          <div className="cards-grid cards-grid--4 cards-mt-60">
            {CREDIT_CARDS.map((card, index) => (
              <FadeIn key={card.title} delay={0.1 + index * 0.2}>
                <div className="credit-card-box-widget h-full overflow-hidden rounded-[10px] border border-[var(--black_50)] bg-white p-[5px] transition-shadow hover:shadow-[0_20px_45px_rgba(51,77,114,0.15)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="block w-full rounded-lg" src={card.image} alt={card.title} />
                  <div className="card-content p-[30px_20px]">
                    <h4 className="mb-4 font-[family-name:var(--font-poppins),'Poppins',sans-serif] text-2xl font-semibold text-[var(--secondary_color)]">
                      {card.title}
                    </h4>
                    <p className="mb-0 flex items-center font-[family-name:var(--font-roboto),'Roboto',sans-serif] text-base leading-[35px] text-[var(--secondary_color)]">
                      <span className="mr-[15px] inline-flex shrink-0 items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="h-5 w-5" src="/img/card/icon-1.png" alt="" aria-hidden />
                      </span>
                      Max: 60 days
                    </p>
                    <p className="mb-0 flex items-center font-[family-name:var(--font-roboto),'Roboto',sans-serif] text-base leading-[35px] text-[var(--secondary_color)]">
                      <span className="mr-[15px] inline-flex shrink-0 items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="h-5 w-5" src="/img/card/icon-2.png" alt="" aria-hidden />
                      </span>
                      Payment fee: 1%
                    </p>
                    <p className="mb-0 flex items-center font-[family-name:var(--font-roboto),'Roboto',sans-serif] text-base leading-[35px] text-[var(--secondary_color)]">
                      <span className="mr-[15px] inline-flex shrink-0 items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="h-5 w-5" src="/img/card/icon-3.png" alt="" aria-hidden />
                      </span>
                      Max credit: $20.000
                    </p>
                    <Link
                      href="#"
                      className="cards-learn-more relative mt-[25px] inline-block text-base text-[var(--brand_color)]"
                    >
                      Learn more <i className="arrow_right align-middle text-lg" aria-hidden />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="cta-3 cards-sec-cta relative overflow-hidden bg-[#d0f2ec]">
        <CardCtaShapes />
        <div className="cards-container">
          <div className="cards-grid cards-grid--12">
            <FadeIn direction="left" className="cards-col-5">
              <div className="cta-content relative z-[1] text-black">
                <h5 className="m-0 font-[family-name:var(--font-poppins),'Poppins',sans-serif] text-xl font-semibold text-[#535a60]">
                  Want to know about our offers first?
                </h5>
                <h2 className="mb-0 font-[family-name:var(--font-poppins),'Poppins',sans-serif] text-4xl font-semibold leading-[42px] text-[var(--secondary_color)]">
                  Subscribe our newsletter
                </h2>
                <div className="cards-mt-30 flex flex-wrap gap-3">
                  <input
                    type="email"
                    className="form-control min-w-[200px] flex-1 border-[#171d24] bg-transparent px-5 text-base lowercase text-[var(--p_color)] placeholder:text-[var(--p_color)]"
                    placeholder="Your  email address"
                  />
                  <Link
                    href="#"
                    className="input-append theme-btn theme-btn-lg shrink-0 whitespace-nowrap bg-[var(--secondary_color)] px-10 leading-[57px] h-[60px]"
                  >
                    Subscribe
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
