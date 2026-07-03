import type { Metadata } from "next";

import { LoanCompanyPageContent } from "@/features/home-variants/loan-company/components/loan-company-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Loan Company",
  description:
    "Simplify all your banking and loan methods. Banca offers term loans, personal loans, and worldwide coverage.",
  alternates: { canonical: `${SITE_CONFIG.url}/loan-company` },
};

export default function LoanCompanyPage() {
  return <LoanCompanyPageContent />;
}
