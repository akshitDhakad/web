import type { Metadata } from "next";

import { ErrorPageContent } from "@/features/pages/components/error-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "404 Error",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_CONFIG.url}/error` },
};

export default function ErrorPage() {
  return <ErrorPageContent />;
}
