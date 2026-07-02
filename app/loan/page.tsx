import type { Metadata } from "next";

import { GetLoanPageContent } from "@/features/loan/components/get-loan-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Get Loan",
  description: "Apply for a home or business loan with Banca. Check eligibility, calculate EMI, and get approved in 3 steps.",
  alternates: { canonical: `${SITE_CONFIG.url}/loan` },
};

export default function LoanPage() {
  return <GetLoanPageContent />;
}
