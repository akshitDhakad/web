export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
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
];

export const FOOTER_SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "facebook" as const },
  { label: "Twitter", href: "#", icon: "twitter" as const },
  { label: "Pinterest", href: "#", icon: "pinterest" as const },
  { label: "LinkedIn", href: "#", icon: "linkedin" as const },
];
