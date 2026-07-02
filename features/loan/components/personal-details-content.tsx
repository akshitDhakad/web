"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { LoanApplicationLayout } from "@/features/loan/components/loan-application-layout";
import { BIRTH_YEARS, MONTHS } from "@/features/loan/constants/loan";

const DAYS = Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, "0"));

export function PersonalDetailsContent() {
  const router = useRouter();

  return (
    <LoanApplicationLayout
      currentStep={2}
      title="Personal Details"
      breadcrumbContentClass="loan-pt-95"
      breadcrumbWidgetClass="page-pt-200 loan-pb-100"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/loan/document-upload");
        }}
      >
        <div className="loan-form-grid">
          <div>
            <label className="label" htmlFor="fName">
              First Name*
            </label>
            <input id="fName" className="form-control" type="text" required />
          </div>
          <div>
            <label className="label" htmlFor="lName">
              Last Name*
            </label>
            <input id="lName" className="form-control" type="text" required />
          </div>
          <div>
            <label className="label" htmlFor="dob-d">
              Date of Birth*
            </label>
            <div className="dob">
              <select id="dob-d" className="loan-select" defaultValue="" aria-label="Day">
                <option value="">Day</option>
                {DAYS.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select id="dob-m" className="loan-select" defaultValue="" aria-label="Month">
                <option value="">Month</option>
                {MONTHS.map((month, index) => (
                  <option key={month} value={String(index + 1).padStart(2, "0")}>
                    {month}
                  </option>
                ))}
              </select>
              <select id="dob-y" className="loan-select me-0" defaultValue="" aria-label="Year">
                <option value="">Year</option>
                {BIRTH_YEARS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="label mb-4">Marital Statas*</label>
            <div className="loan-duration-options">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="MaritalStatas" id="single" value="single" />
                <label className="form-check-label" htmlFor="single">
                  Single
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="MaritalStatas" id="married" value="married" />
                <label className="form-check-label" htmlFor="married">
                  Married
                </label>
              </div>
            </div>
          </div>
          <div>
            <label className="label" htmlFor="emailName">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="emailName"
              placeholder="examplename@example.com"
              required
            />
          </div>
          <div>
            <label className="label" htmlFor="inputPhoneNumber">
              Mobile Number*
            </label>
            <input id="inputPhoneNumber" className="form-control w-full" type="tel" required />
          </div>
          <div className="loan-form-full">
            <label className="label" htmlFor="pAddress">
              Present Address*
            </label>
            <input id="pAddress" className="form-control" type="text" required />
          </div>
          <div>
            <label className="label" htmlFor="stateName">
              State*
            </label>
            <input id="stateName" className="form-control" type="text" required />
          </div>
          <div>
            <label className="label" htmlFor="cityName">
              City*
            </label>
            <input id="cityName" className="form-control" type="text" required />
          </div>
          <div>
            <label className="label" htmlFor="zipCode">
              Postal / Zip Code*
            </label>
            <input id="zipCode" className="form-control" type="text" required />
          </div>
        </div>

        <div className="loan-mt-60 nav-btn">
          <Link href="/loan/details" className="prev-btn theme-btn theme-btn-primary_alt">
            <ArrowLeft size={16} aria-hidden />
            previous
          </Link>
          <button type="submit" className="next-btn theme-btn theme-btn-primary_alt">
            next <ArrowRight size={16} aria-hidden />
          </button>
        </div>
      </form>
    </LoanApplicationLayout>
  );
}
