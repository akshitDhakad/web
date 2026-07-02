"use client";

import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CONTACT_FAQ_ITEMS,
  CONTACT_HELP_CARDS,
  CONTACT_INFO,
} from "@/features/pages/constants/contact";

function ContactInfoIcon({ type }: { type: string }) {
  if (type === "clock") return <Clock size={18} className="text-[var(--brand_color)]" aria-hidden />;
  if (type === "map") return <MapPin size={18} className="text-[var(--brand_color)]" aria-hidden />;
  return null;
}

export function ContactBreadcrumb() {
  return (
    <section className="breadcrumb-area" aria-label="Contact hero">
      <div
        className="breadcrumb-widget breadcrumb-widget-3 page-pt-200 page-pb-200"
        style={{ backgroundImage: "url(/img/breadcrumb/bg-4.jpg)" }}
      >
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="breadcrumb-content page-pt-100">
              <h1>We&apos;re here to help.</h1>
              <ul>
                <li>
                  <Link href="/">home</Link>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPageContent() {
  return (
    <>
      <ContactBreadcrumb />

      <section className="get-touch-area bg_white page-pt-140 page-pb-140">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <div className="section-title text-start">
                <h2>Get in touch with us.</h2>
                <p className="page-mt-15">
                  Want to get in touch? We&apos;d love to hear from you. Here&apos;s how you can reach us...
                </p>
              </div>
              <div className="page-mt-55 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="get-touch-box">
                    <div className="icon">
                      {item.icon === "map" || item.icon === "clock" ? (
                        <ContactInfoIcon type={item.icon} />
                      ) : (
                        <Image src={item.icon} alt="" width={18} height={18} aria-hidden />
                      )}
                    </div>
                    <div>
                      <p>{item.label}</p>
                      {"href" in item && item.href ? (
                        <Link href={item.href}>
                          <span>{item.value}</span>
                        </Link>
                      ) : (
                        <span className="whitespace-pre-line">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-form-widget">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name">Full Name</label>
                    <input id="contact-name" type="text" className="form-control" placeholder="What's your name?" required />
                  </div>
                  <div>
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" type="email" className="form-control" placeholder="yourname@example.com" required />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="contact-subject">Subject</label>
                    <input id="contact-subject" type="text" className="form-control" placeholder="Your subject" required />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="contact-message">Messages</label>
                    <textarea id="contact-message" cols={30} rows={5} className="form-control" placeholder="Your message......" required />
                  </div>
                  <div className="md:col-span-2">
                    <p className="policy-text">
                      By submitting this form you consent to us emailing you occasionally about our products and services.
                      You can unsubscribe from emails at any time, and we will never pass your email onto third parties.
                      Privacy Policy
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="theme-btn theme-btn-lg w-full">
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="page-pt-125 page-pb-140 bg_disable">
        <div className="container">
          <div className="section-title">
            <h2>Need more help?</h2>
            <p className="page-mt-15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className="page-mt-60 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {CONTACT_HELP_CARDS.map((card, index) => (
              <FadeIn key={card.title} delay={0.1 + index * 0.2}>
                <div className="feature-card-widget-4">
                  <Image src={card.icon} alt="" width={48} height={48} className="mx-auto" aria-hidden />
                  <h5 className="page-mt-15 page-mb-10">{card.title}</h5>
                  <p>{card.description}</p>
                  {"cta" in card && card.cta ? (
                    <Link href="#" className="theme-btn theme-btn-outlined page-mt-30 inline-block">
                      {card.cta}
                    </Link>
                  ) : (
                    <div className="page-mt-35 flex justify-center gap-3">
                      {["f", "t", "p", "in"].map((label) => (
                        <a key={label} href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--p_color)] text-sm">
                          {label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-area-2 page-pt-125 page-pb-200 bg_white">
        <div className="container">
          <div className="section-title">
            <h2>Frequently asked questions</h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible defaultValue="contact-faq-1" className="faq-widget">
              {CONTACT_FAQ_ITEMS.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p>{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="cta-area page-pt-60 bg_white">
        <div className="container">
          <div
            className="cta cta-bg-violet rounded-lg px-6 py-10 md:px-10"
            style={{ backgroundImage: "url(/img/cta/wave.png)", backgroundSize: "cover" }}
          >
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
              <h2 className="page-mb-0 text-center text-white md:text-start">
                Meet Banca, the financial partner you can bank on.
              </h2>
              <div className="text-center md:text-end">
                <Link href="#" className="theme-btn theme-btn-alt">
                  Open an Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
