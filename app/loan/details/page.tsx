import type { Metadata } from "next";

import { LoanDetailsContent } from "@/features/loan/components/loan-details-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Loan Details - Step 01",
  description: "Start your loan application by selecting loan type, financing option, amount, and duration.",
  alternates: { canonical: `${SITE_CONFIG.url}/loan/details` },
};

export default function LoanDetailsPage() {
  return <LoanDetailsContent />;
}
