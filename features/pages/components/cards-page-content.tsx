"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/animations/fade-in";
import { SectionTitle } from "@/components/common/section-title";
import {
  CARD_CUSTOMIZE_FEATURES,
  CARD_FEATURES,
  CARD_WHY_CHOOSE,
  CREDIT_CARDS,
  MARKETPLACE_LOGOS,
} from "@/features/pages/constants/cards";

export function CardsPageContent() {
  return (
    <>
      <section className="banner-area-4 page-pt-145" aria-label="Cards hero">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-8 pb-[60px] pt-[75px] lg:grid-cols-2">
            <FadeIn>
              <div className="banner-content">
                <h1 className="page-mb-0">The credit card as it should be.</h1>
                <p className="page-mt-20">
                  Without an annuity, it gives you cashback on all your purchases and access to months
                  without interest.
                </p>
                <Link href="#" className="theme-btn theme-btn-outlined_alt page-mt-40 inline-block">
                  I want my BancaCard
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="hero-img mx-auto text-center lg:ml-auto lg:text-end">
                <Image
                  className="person-img"
                  src="/img/card/hero-img.png"
                  alt="Banca credit card"
                  width={480}
                  height={520}
                  priority
                />
                <div className="shape" style={{ top: "18%", left: "30px", zIndex: 1 }}>
                  <Image src="/img/card/hero-card.png" alt="" width={120} height={80} aria-hidden />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mplace-logo bg_white page-pt-80 page-pb-85">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p>ACCEPTABLE TO MILLIONS OF CUSTOMERS WORLDWIDE AND IN TOP MARKETPLACES.</p>
            </div>
            <div className="logo-divider lg:col-span-9">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {MARKETPLACE_LOGOS.map((logo, index) => (
                  <FadeIn key={logo} delay={0.1 + index * 0.2}>
                    <Image className="mx-auto h-auto w-full max-w-[140px]" src={logo} alt="Partner logo" width={140} height={48} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bcard-feature-area bg_disable page-pt-125 page-pb-140">
        <div className="container">
          <SectionTitle
            title="Great Features Of Banca Card"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered"
          />
          <div className="page-mt-30 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {CARD_FEATURES.map((feature, index) => (
              <FadeIn key={feature.title} delay={0.1 + index * 0.2}>
                <div className="feature-card-widget-5">
                  <Image src={feature.icon} alt="" width={48} height={48} aria-hidden />
                  <h4 className="page-mt-30 page-mb-15">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="safe-deposit-area overflow-hidden bg_white page-pt-125 page-pb-115">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <FadeIn>
              <div className="card-img mx-auto max-w-md">
                <div className="logo">
                  <Image src="/img/card/visa.png" alt="Visa" width={80} height={40} />
                  <Image src="/img/card/mastercard.png" alt="Mastercard" width={80} height={40} />
                </div>
                <Image className="bg-img" src="/img/card/payment-bg.png" alt="" width={500} height={300} aria-hidden />
                <Image className="relative z-[1] w-full" src="/img/card/credit-card.png" alt="Credit card" width={400} height={260} />
              </div>
            </FadeIn>
            <div>
              <div className="section-title text-start">
                <h2>Best Ways to Send Your Money From Anywhere You Like</h2>
                <p className="border-left page-pl-10 page-mt-20">
                  Banca came as a solution to the next generation. Through our portal, you can sit at the
                  comfort of your home, office or pretty much anywhere, and send money to anywhere! Through our strong network.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 page-mt-80">
                <div className="payment-system">
                  <Image src="/img/card/online-payment.svg" alt="" width={40} height={40} aria-hidden />
                  <h5 className="page-mt-20 page-mb-10">Online Payments</h5>
                  <p>We acceept many type payments getway that you love.</p>
                </div>
                <div className="payment-system">
                  <Image src="/img/card/safebox.svg" alt="" width={40} height={40} aria-hidden />
                  <h5 className="page-mt-20 page-mb-10">Safe Deposit</h5>
                  <p>You can trust us for your deposit. No hidden fee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customize-card-area bg_disable page-pt-125 page-pb-115">
        <div className="container">
          <div className="section-title mb-[35px] text-start">
            <h2>Customize Your Payments</h2>
            <p className="page-mt-15">
              Personalize the newly-improved Payment Options Form to include all your payment methods
              such as, easy monthly payments, credit cards
            </p>
          </div>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              {CARD_CUSTOMIZE_FEATURES.map((feature, index) => (
                <FadeIn key={feature.title} delay={0.1 + index * 0.2}>
                  <div className={`feature-card-widget-6 ${index > 0 ? "page-mt-30" : ""}`}>
                    <div className="icon">
                      <Image src={feature.icon} alt="" width={48} height={48} aria-hidden />
                    </div>
                    <div className="card-content">
                      <h6>{feature.title}</h6>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <div className="card-img relative">
                <Image className="w-full" src="/img/card/card-img-bg.png" alt="" width={520} height={400} aria-hidden />
                <div className="shape-1">
                  <Image src="/img/card/Card-image-1.png" alt="Card design" width={280} height={180} />
                </div>
                <div className="shape-2">
                  <Image src="/img/card/Card-image-2.png" alt="" width={260} height={170} aria-hidden />
                </div>
                <div className="shape-3">
                  <Image src="/img/card/Card-image-3.png" alt="" width={240} height={160} aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-area page-pt-125 page-pb-135 overflow-hidden">
        <div className="container">
          <SectionTitle
            title="Why You Choose Us?"
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
          />
          <div className="page-mt-55 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CARD_WHY_CHOOSE.map((item, index) => (
              <FadeIn key={item.title} delay={0.1 + index * 0.2}>
                <div className="content-box px-4 lg:px-8">
                  {"showLine" in item && item.showLine && (
                    <div className="line-shape">
                      <Image src="/img/card/line-shape.png" alt="" width={120} height={40} aria-hidden />
                    </div>
                  )}
                  <Image src={item.icon} alt="" width={48} height={48} className="mx-auto" aria-hidden />
                  <h4 className="page-mt-30 page-mb-15">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="choose-card-area bg_disable page-pt-125 page-pb-140">
        <div className="container">
          <SectionTitle
            title={
              <>
                Choose Card <br />
                Considering Your Personal Needs
              </>
            }
            description="You're considering opening a credit card to build credit. If this is the case, you need to make sure that you act responsibly with your card."
          />
          <div className="page-mt-60 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CREDIT_CARDS.map((card, index) => (
              <FadeIn key={card.title} delay={0.1 + index * 0.2}>
                <div className="credit-card-box-widget">
                  <Image src={card.image} alt={card.title} width={300} height={190} />
                  <div className="card-content">
                    <h4>{card.title}</h4>
                    <p><Image src="/img/card/icon-1.png" alt="" width={16} height={16} aria-hidden />Max: 60 days</p>
                    <p><Image src="/img/card/icon-2.png" alt="" width={16} height={16} aria-hidden />Payment fee: 1%</p>
                    <p><Image src="/img/card/icon-3.png" alt="" width={16} height={16} aria-hidden />Max credit: $20.000</p>
                    <Link href="#" className="page-mt-25 inline-flex items-center gap-1">
                      Learn more <ArrowRight size={16} aria-hidden />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-3 page-pt-90 page-pb-75">
        <div className="container">
          <FadeIn>
            <div className="cta-content max-w-xl">
              <h5>Want to know about our offers first?</h5>
              <h2>Subscribe our newsletter</h2>
              <form className="input-group page-mt-40" onSubmit={(e) => e.preventDefault()}>
                <input type="email" className="form-control" placeholder="Your email address" />
                <button type="submit" className="input-append theme-btn theme-btn-lg">
                  Subscribe
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
