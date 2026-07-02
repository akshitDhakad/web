export interface NavChild {
  label: string;
  href: string;
  active?: boolean;
  children?: NavChild[];
}

export interface NavItem {
  label: string;
  href?: string;
  active?: boolean;
  children?: NavChild[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    children: [
      { label: "Smart Finance", href: "/" },
      { label: "Loan Company", href: "/loan-company" },
      { label: "Mobile App", href: "/mobile-app" },
      { label: "Simple Banca", href: "/simple" },
      { label: "Loan Steps", href: "/loan-steps" },
      { label: "Finance Sass App", href: "/finance" },
      { label: "Small Bank", href: "/small-bank" },
    ],
  },
  {
    label: "Loan",
    href: "/loan",
    children: [
      { label: "Get loan", href: "/loan" },
      {
        label: "Loan Application",
        href: "/loan/details",
        children: [
          { label: "Step 01", href: "/loan/details" },
          { label: "Step 02", href: "/loan/personal-details" },
          { label: "Step 03", href: "/loan/document-upload" },
        ],
      },
    ],
  },
  {
    label: "Job Pages",
    href: "/career",
    children: [
      { label: "Career", href: "/career" },
      { label: "Jobs", href: "/jobs" },
      { label: "Job Application", href: "/job-application" },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "Cards", href: "/cards" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "404 Error", href: "/error" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Blog Listing", href: "/blog" },
      { label: "Blog Details", href: "/blog/details" },
    ],
  },
];

export const BUY_BANCA_URL =
  "https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9";

export const SITE_CONFIG = {
  name: "Banca",
  title: "Banca - Banking & Business Loan",
  description:
    "Smart finance solutions for your business. Banca is a leading bank offering secure banking, loans, and financial services.",
  url: "https://banca.finance",
} as const;
