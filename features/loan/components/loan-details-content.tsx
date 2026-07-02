"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { LoanApplicationLayout } from "@/features/loan/components/loan-application-layout";
import {
  BANK_SERVICES,
  FINANCING_TYPES,
  LOAN_DURATIONS,
  LOAN_TYPES,
} from "@/features/loan/constants/loan";

export function LoanDetailsContent() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState("personal");

  return (
    <LoanApplicationLayout currentStep={1} title="Loan deatails">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/loan/personal-details");
        }}
      >
        <div className="loan-type-grid mb-8">
          {LOAN_TYPES.map((type) => (
            <div key={type.id} className="loan-type-option">
              <input
                className="select-loan-type-radio"
                name="select-loan-type"
                type="radio"
                id={type.id}
                checked={selectedType === type.id}
                onChange={() => setSelectedType(type.id)}
              />
              <label htmlFor={type.id} className="loan-type">
                <Image className="default-icon mx-auto" src={type.icon1} alt="" width={48} height={48} />
                <Image className="hover-icon mx-auto" src={type.icon2} alt="" width={48} height={48} />
                <span>{type.label}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="loan-form-grid">
          <div>
            <label className="label" htmlFor="loandetails01">
              Choose your financing type
            </label>
            <select className="loan-select" id="loandetails01" defaultValue={FINANCING_TYPES[0]}>
              {FINANCING_TYPES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="loandetails02">
              Choose your preferred bank service
            </label>
            <select className="loan-select" id="loandetails02" defaultValue={BANK_SERVICES[0]}>
              {BANK_SERVICES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="loan-amount">
              Yout loan amount
            </label>
            <div className="input-field">
              <span>$</span>
              <input type="number" id="loan-amount" className="form-control" defaultValue={5000} />
            </div>
          </div>
          <div className="loan-form-full">
            <label className="label mb-4">Laon duration</label>
            <div className="loan-duration-options">
              {LOAN_DURATIONS.map((duration, index) => (
                <div key={duration} className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="loan-duration"
                    id={`duration-${index}`}
                    defaultChecked={index === 0}
                  />
                  <label className="form-check-label" htmlFor={`duration-${index}`}>
                    {duration}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="loan-mt-60 nav-btn justify-end">
          <button type="submit" className="theme-btn theme-btn-primary_alt next-btn">
            next <ArrowRight size={16} aria-hidden />
          </button>
        </div>
      </form>
    </LoanApplicationLayout>
  );
}
