"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { calculateLoanEmi, formatCurrency } from "@/features/loan/lib/calculator";

const INTEREST_RATE = 8.5;
const MIN_AMOUNT = 50000;
const MAX_AMOUNT = 500000;
const MIN_YEARS = 1;
const MAX_YEARS = 30;

export function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [durationMode, setDurationMode] = useState<"year" | "month">("year");
  const [durationYears, setDurationYears] = useState(5);
  const [durationMonths, setDurationMonths] = useState(60);

  const months = durationMode === "year" ? durationYears * 12 : durationMonths;

  const result = useMemo(
    () => calculateLoanEmi(loanAmount, INTEREST_RATE, months),
    [loanAmount, months],
  );

  const principalDeg = useMemo(() => {
    if (result.totalPayment === 0) return 0;
    return (loanAmount / result.totalPayment) * 360;
  }, [loanAmount, result.totalPayment]);

  return (
    <div className="calculator-widget loan-mt-50">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <FadeIn>
            <div className="single-calculator-widget">
              <div className="single-range">
                <div className="range-header mb-6 flex flex-wrap items-center justify-between gap-4">
                  <h6>Loan Amount</h6>
                  <input
                    type="text"
                    readOnly
                    value={formatCurrency(loanAmount)}
                    aria-label="Loan amount"
                  />
                </div>
                <input
                  className="loan-range-input"
                  type="range"
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                  step={5000}
                  value={loanAmount}
                  onChange={(event) => setLoanAmount(Number(event.target.value))}
                  aria-label="Adjust loan amount"
                />
              </div>

              <div className="single-range loan-mt-85">
                <div className="range-header mb-6 flex flex-wrap items-center justify-between gap-4">
                  <h6>Loan Duration</h6>
                  <div className="duration-tabs">
                    <span
                      className="active-bar"
                      style={{
                        left: durationMode === "month" ? 0 : 95,
                        width: durationMode === "month" ? 95 : 81,
                      }}
                    />
                    <button
                      type="button"
                      className={durationMode === "month" ? "active" : ""}
                      onClick={() => setDurationMode("month")}
                    >
                      Month
                    </button>
                    <button
                      type="button"
                      className={durationMode === "year" ? "active" : ""}
                      onClick={() => setDurationMode("year")}
                    >
                      Year
                    </button>
                  </div>
                  <input
                    type="text"
                    readOnly
                    value={durationMode === "year" ? `${durationYears} Years` : `${durationMonths} Months`}
                    aria-label="Loan duration"
                  />
                </div>
                <input
                  className="loan-range-input"
                  type="range"
                  min={durationMode === "year" ? MIN_YEARS : 12}
                  max={durationMode === "year" ? MAX_YEARS : 360}
                  step={durationMode === "year" ? 1 : 6}
                  value={durationMode === "year" ? durationYears : durationMonths}
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    if (durationMode === "year") {
                      setDurationYears(value);
                    } else {
                      setDurationMonths(value);
                    }
                  }}
                  aria-label="Adjust loan duration"
                />
              </div>

              <div className="interestBox bg_disable loan-mt-20">
                <p>Rate of Interest</p>
                <span>{INTEREST_RATE}%</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 loan-pl-35">
          <FadeIn delay={0.15}>
            <div className="calculator-result-widget bg_disable">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-center">
                <div className="sm:col-span-7">
                  <div className="emi-amount">
                    <h6>EMI Amount</h6>
                    <span>Principal + Interest</span>
                    <p className="loan-mt-10">{formatCurrency(result.totalPayment)}</p>
                  </div>
                  <div className="interest-payable loan-mt-20">
                    <h6>Interest Payable</h6>
                    <p className="loan-mt-10">{formatCurrency(result.totalInterest)}</p>
                  </div>
                </div>
                <div className="sm:col-span-5">
                  <div
                    className="pie-wrapper"
                    style={{ ["--principal-deg" as string]: `${principalDeg}deg` }}
                  >
                    <div className="pie" />
                    <div className="circle-border" />
                  </div>
                </div>
              </div>

              <div className="loan-mt-40 text-center sm:loan-mt-60">
                <h4 className="mb-1">Your EMI Amount</h4>
                <h1 className="m-0">{formatCurrency(result.emi)}*</h1>
                <Link href="/loan/personal-details" className="theme-btn theme-btn-lg loan-mt-40 inline-flex items-center gap-2">
                  Apply Now <ArrowRight size={18} aria-hidden />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
