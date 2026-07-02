"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { FadeIn } from "@/components/animations/fade-in";
import { containerClassName } from "@/components/layout/container";
import {
  loanCalculatorSchema,
  type LoanCalculatorFormData,
} from "@/features/home/schemas/loan-calculator.schema";

const COOPERATORS = [
  { src: "/img/home-4/cooperator-1.png", alt: "Cooperator 1" },
  { src: "/img/home-4/cooperator-2.png", alt: "Cooperator 2" },
  { src: "/img/home-4/cooperator-3.png", alt: "Cooperator 3" },
] as const;

const PARALLAX_SHAPES = [
  { src: "/img/home-4/shape-2.png", alt: "", className: "shape" },
  { src: "/img/home-4/shape-3.png", alt: "", className: "shape" },
  { src: "/img/home-4/shape-4.png", alt: "", className: "shape" },
] as const;

function LoanCalculator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanCalculatorFormData>({
    resolver: zodResolver(loanCalculatorSchema),
    defaultValues: {
      loanType: "debt-loan",
      amount: "",
      durationDays: "",
      repayments: "",
    },
  });

  const onSubmit = (data: LoanCalculatorFormData) => {
    console.info("Loan application:", data);
  };

  return (
    <FadeIn direction="left" delay={0.1}>
      <div className="basic-loan-calculator">
        <Image
          className="shape h-auto w-auto"
          src="/img/home-4/shape-1.png"
          alt=""
          width={80}
          height={80}
          aria-hidden
        />
        <h4>Loan calculator</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="mb-3">
            <label className="label" htmlFor="loandetails01">
              Type of Loan
            </label>
            <select
              id="loandetails01"
              className="loan-select-trigger w-full"
              {...register("loanType")}
            >
              <option value="debt-loan">Debt Loan</option>
              <option value="installment-loan">Installment loan</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="label" htmlFor="loan-amount">
              Amount of money
            </label>
            <div className="input-field">
              <span>$</span>
              <input
                type="text"
                id="loan-amount"
                placeholder="Enter amount"
                className="form-control"
                {...register("amount")}
              />
            </div>
            {errors.amount && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.amount.message}
              </p>
            )}
          </div>

          <div className="mb-3">
            <label className="label" htmlFor="loan-time">
              For how long (days)
            </label>
            <div className="input-field">
              <input
                type="text"
                id="loan-time"
                placeholder="For how long (days)"
                className="form-control"
                {...register("durationDays")}
              />
            </div>
            {errors.durationDays && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.durationDays.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="label" htmlFor="loan-repayment">
              Repayments
            </label>
            <div className="input-field">
              <span>$</span>
              <input
                type="text"
                id="loan-repayment"
                placeholder="Enter amount"
                className="form-control"
                {...register("repayments")}
              />
            </div>
            {errors.repayments && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.repayments.message}
              </p>
            )}
          </div>

          <button type="submit" className="theme-btn w-100">
            Apply for loans
          </button>
        </form>
      </div>
    </FadeIn>
  );
}

export function Hero() {
  return (
    <section className="banner-area-5" id="banner_animation" aria-label="Hero">
      <div className="bg-shapes" aria-hidden>
        {PARALLAX_SHAPES.map((shape, index) => (
          <div key={shape.src} className={shape.className}>
            <Image
              className="layer h-auto w-auto"
              src={shape.src}
              alt={shape.alt}
              width={index === 0 ? 120 : 100}
              height={index === 0 ? 120 : 100}
            />
          </div>
        ))}
        <div className="shape" />
        <div className="shape" />
      </div>

      <div className={containerClassName}>
        <div className="flex flex-col items-end gap-8 pt-170 pb-120 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <FadeIn direction="right" delay={0.1}>
              <div className="banner-content">
                <h1>
                  Smart finance solutions for your{" "}
                  <span className="underline-shape">business</span>
                </h1>
                <p>
                  Inventore veritatis et architecto beatae vitae dicta explicabo nemo enim
                  ipsam voluptatem quia voluptas aspernatur magni .
                </p>

                <div className="mt-40 flex flex-wrap items-center gap-4">
                  <Link href="#" className="theme-btn me-4">
                    Get started now
                  </Link>
                  <Link href="#" className="under_link">
                    Explore more <ArrowRight size={18} aria-hidden />
                  </Link>
                </div>

                <div className="co-operators">
                  <p className="mb-4 text-white">We are cooperating with:</p>
                  <div className="flex flex-wrap gap-[30px]">
                    {COOPERATORS.map((logo) => (
                      <Link key={logo.src} href="#" aria-label={logo.alt}>
                        <Image
                          className="h-auto w-auto"
                          src={logo.src}
                          alt={logo.alt}
                          width={100}
                          height={40}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2">
            <LoanCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
