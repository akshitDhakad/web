import type { Metadata } from "next";

import { ContactPageContent } from "@/features/pages/components/contact-page-content";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Banca. Contact our team for support, inquiries, and banking assistance.",
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
