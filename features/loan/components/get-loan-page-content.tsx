"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { LoanCalculator } from "@/features/loan/components/loan-calculator";
import { LoanTestimonials } from "@/features/loan/components/loan-testimonials";
import {
  LOAN_BANNER_STEPS,
  LOAN_TYPE_OPTIONS,
} from "@/features/loan/constants/loan";
import { JOB_LOCATIONS } from "@/features/jobs/constants/filters";
import { cn } from "@/lib/utils";

export function GetLoanPageContent() {
  const router = useRouter();
  const [loanAmount, setLoanAmount] = useState("5,000");

  return (
    <>
      <section
        className="banner-area-2 loan-banner page-pt-145"
        style={{ backgroundImage: "url(/img/banner/loan-banner.png)" }}
        aria-label="Loan hero"
      >
        <div className="container">
          <div className="loan-pt-165 loan-pb-200">
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <div className="section-title">
                  <h1>Get your loan approved in 3 steps</h1>
                </div>
                <Link
                  href="/loan/details"
                  className="theme-btn theme-btn-lg theme-btn-alt loan-mt-50 inline-flex items-center gap-2"
                >
                  Get started <ArrowRight size={18} aria-hidden />
                </Link>
              </FadeIn>
            </div>
          </div>

          <div className="relative loan-pt-70 max-lg:hidden">
            <div className="floated-widget">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {LOAN_BANNER_STEPS.map((step, index) => (
                  <FadeIn key={step.title} delay={index * 0.1}>
                    <div className={cn(index < 2 && "step-divider lg:pr-6 lg:pb-0 pb-6")}>
                      <div className="steps-widget px-6">
                        <Image src={step.icon} alt="" width={64} height={64} className="mx-auto" />
                        <h4>
                          <Link href="/loan/details">{step.title}</Link>
                        </h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="apply-loan-area page-pt-200 page-pb-140 bg_disable">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="section-title text-center">
                <h2>One step closer to finding your perfect Home!</h2>
              </div>
            </FadeIn>
          </div>

          <form
            className="page-pt-35"
            onSubmit={(event) => {
              event.preventDefault();
              router.push("/loan/personal-details");
            }}
          >
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <FadeIn delay={0.1}>
                  <div className="loan-apply-widget">
                    <div className="icon">
                      <Image className="default-icon" src="/img/apply-loan/icon-1.1.png" alt="" width={40} height={40} />
                      <Image className="hover-icon" src="/img/apply-loan/icon-1.2.png" alt="" width={40} height={40} />
                    </div>
                    <div className="apply-content">
                      <span className="title">How much do you need?</span>
                      <p className="amount-row">
                        $ <input value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="loan-apply-widget">
                    <div className="icon">
                      <Image className="default-icon" src="/img/apply-loan/icon-2.1.png" alt="" width={40} height={40} />
                      <Image className="hover-icon" src="/img/apply-loan/icon-2.2.png" alt="" width={40} height={40} />
                    </div>
                    <div className="apply-content">
                      <span className="title">Type of Loan</span>
                      <select defaultValue="" aria-label="Loan type">
                        {LOAN_TYPE_OPTIONS.map((option) => (
                          <option key={option} value={option === "Select your Loan" ? "" : option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="loan-apply-widget">
                    <div className="icon">
                      <Image className="default-icon" src="/img/apply-loan/icon-3.1.png" alt="" width={40} height={40} />
                      <Image className="hover-icon" src="/img/apply-loan/icon-3.2.png" alt="" width={40} height={40} />
                    </div>
                    <div className="apply-content">
                      <span className="title">Where do you currently live?</span>
                      <select defaultValue="Bandarban" aria-label="Location">
                        {JOB_LOCATIONS.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="loan-mt-15 flex items-start gap-2">
                <Image src="/img/steps/sheild.png" alt="" width={20} height={20} aria-hidden />
                <p className="security-info">
                  Your information is 100% secure. We do not share your info with other parties.
                </p>
              </div>

              <div className="loan-mt-35 text-center">
                <button type="submit" className="theme-btn theme-btn-lg inline-flex items-center gap-2">
                  apply now <ArrowRight size={18} aria-hidden />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="page-pt-125 page-pb-140 bg_white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <div className="section-title">
                <h2>Calculator</h2>
                <p className="page-mt-15">
                  Get an approximate figure for the total monthly instalment payments along with a complete
                  break-up of the home loan.
                </p>
              </div>
            </FadeIn>
          </div>
          <LoanCalculator />
        </div>
      </section>

      <LoanTestimonials />
    </>
  );
}
