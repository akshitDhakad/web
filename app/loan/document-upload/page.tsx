import type { Metadata } from "next";

import { DocumentUploadContent } from "@/features/loan/components/document-upload-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Document Upload - Step 03",
  description: "Upload required documents to complete your Banca loan application.",
  alternates: { canonical: `${SITE_CONFIG.url}/loan/document-upload` },
};

export default function DocumentUploadPage() {
  return <DocumentUploadContent />;
}
