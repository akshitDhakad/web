export const SITE_FOOTER_COMPANY_LINKS = [
  "About Us",
  "Recognition",
  "Executive Team",
  "Careers",
] as const;

export const SITE_FOOTER_PRODUCT_LINKS = [
  "Business Loans | Main",
  "Loan Calculator",
  "Refer a Friend",
  "Partner Program",
] as const;

export const SITE_FOOTER_HELP_LINKS = [
  "Customer Care",
  "Contact Us",
  "Security Center",
  "Blog",
] as const;

export const SITE_FOOTER_SOCIAL = ["facebook", "twitter", "pinterest", "linkedin"] as const;

export type SiteFooterSocial = (typeof SITE_FOOTER_SOCIAL)[number];

export const SITE_FOOTER_SOCIAL_ICON_CLASS: Record<SiteFooterSocial, string> = {
  facebook: "fab fa-facebook-f",
  twitter: "fab fa-twitter",
  pinterest: "fab fa-pinterest-p",
  linkedin: "fab fa-linkedin-in",
};

/** @deprecated Use SITE_FOOTER_* constants */
export const FOOTER_LINK_GROUPS = [
  {
    title: "Banca at a Glance",
    links: [
      { label: "Our core Businesses", href: "#" },
      { label: "Our 'company purpose'", href: "#" },
      { label: "Jobs & Careers", href: "/career" },
      { label: "Our Responsibility", href: "#" },
    ],
  },
  {
    title: "Publications",
    links: [
      { label: "Compliance Publications", href: "#" },
      { label: "Annual Reports", href: "#" },
      { label: "CSR Reports", href: "#" },
      { label: "Financial documentation", href: "#" },
    ],
  },
  {
    title: "Direct Access",
    links: [
      { label: "Our news", href: "#" },
      { label: "Our press releases", href: "#" },
      { label: "Our job offers", href: "/jobs" },
      { label: "Our websites", href: "#" },
    ],
  },
] as const;

/** @deprecated Use SITE_FOOTER_SOCIAL */
export const FOOTER_SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "Twitter", href: "#", icon: "twitter" as const },
  { label: "Pinterest", href: "#", icon: "pinterest" as const },
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
];
