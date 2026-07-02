"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { LoanApplicationLayout } from "@/features/loan/components/loan-application-layout";
import { DOCUMENT_REQUIREMENTS } from "@/features/loan/constants/loan";

export function DocumentUploadContent() {
  return (
    <LoanApplicationLayout
      currentStep={3}
      title="Documants Upload"
      breadcrumbContentClass="loan-pt-90"
      breadcrumbWidgetClass="page-pt-200 loan-pb-100"
      sectionClassName="page-pt-140"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="loan-form-stack">
          {DOCUMENT_REQUIREMENTS.map((item, index) => (
            <div key={item.text} className={index === 1 ? "doc-info loan-mt-15" : "doc-info"}>
              <span>{index + 1}.</span>
              <p>{item.text}</p>
            </div>
          ))}

          <div className="dropzone">
            <Image src="/img/icon_upload.svg" alt="" width={48} height={48} className="mx-auto" />
            <h4>Drag and Drop files here</h4>
            <p>or browse to</p>
            <button type="button" className="theme-btn theme-btn-primary_alt loan-mt-15">
              Chosse File
            </button>
          </div>

          <div className="form-check loan-mt-15">
            <input className="form-check-input" type="checkbox" id="agreeBox" required />
            <label className="form-check-label" htmlFor="agreeBox">
              I hereby agree that the information given is true, accurate and complete as of the date of this
              application submission. **
            </label>
          </div>
        </div>

        <div className="loan-mt-40 nav-btn">
          <Link href="/loan/personal-details" className="prev-btn theme-btn theme-btn-primary_alt">
            <ArrowLeft size={16} aria-hidden />
            previous
          </Link>
          <button type="submit" className="theme-btn theme-btn-primary_alt">
            Submit
          </button>
        </div>
      </form>
    </LoanApplicationLayout>
  );
}
