const FOOTER_LINK_MAP: Record<string, string> = {
  "About Us": "/about",
  Recognition: "/about",
  "Executive Team": "/about",
  "Refer a Friend": "/loan",
  "Partner Program": "/about",
  "Security Center": "/about",
  Careers: "/career",
  "Customer Care": "/contact",
  "Contact Us": "/contact",
  Blog: "/blog",
  "Get loan": "/loan",
  "Business Loans | Main": "/loan",
  "Loan Calculator": "/loan",
  Cards: "/cards",
  "Write to us": "/contact",
  "Terms of Service": "/contact",
  "Privacy Policy": "/contact",
  "Cookies Policy": "/contact",
  "Terms & Conditions": "/contact",
  "Legal Notice": "/contact",
  Privecy: "/contact",
  "Term of Use": "/contact",
  Banca: "/",
};

export function footerLink(label: string): string {
  return FOOTER_LINK_MAP[label] ?? "/contact";
}
