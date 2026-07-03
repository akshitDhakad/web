import type { Metadata } from "next";

import { LoanStepsPageContent } from "@/features/home-variants/loan-steps/components/loan-steps-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Loan Steps",
  description:
    "Flexible home loans for the international lifestyle. Fast, secure loans in 7 days with Banca.",
  alternates: { canonical: `${SITE_CONFIG.url}/loan-steps` },
};

export default function LoanStepsPage() {
  return <LoanStepsPageContent />;
}
