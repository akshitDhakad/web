export interface BannerFact {
  id: string;
  delay: number;
  icon: "globe" | "user" | "briefcase";
  text: string;
}

export interface CompanyFeature {
  id: string;
  delay: number;
  icon?: string;
  title: string;
  description?: string;
  isLinkCard?: boolean;
}

export interface LoanTypeSlide {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CountryItem {
  id: string;
  delay: number;
  flag: string;
  name: string;
}

export interface AboutStat {
  value: string;
  label: string;
  description: string;
}

export const BANNER_FEATURES = ["Get 30 day free trial", "No Spamming"] as const;

export const BANNER_FACTS: BannerFact[] = [
  {
    id: "global",
    delay: 0.1,
    icon: "globe",
    text: "A global customer base from over 120 countries",
  },
  {
    id: "users",
    delay: 0.4,
    icon: "user",
    text: "Almost over 250 thousand active users",
  },
  {
    id: "experience",
    delay: 0.7,
    icon: "briefcase",
    text: "10 years worth of experience as a industry expert",
  },
];

export const COMPANY_FEATURES: CompanyFeature[] = [
  {
    id: "mobility",
    delay: 0.1,
    icon: "/img/home-5/feature-icon-1.svg",
    title: "Fast Mobility",
    description: "Quis dapibus volutpat condi",
  },
  {
    id: "term-loan",
    delay: 0.3,
    icon: "/img/home-5/feature-icon-2.svg",
    title: "Term Loan",
    description: "Quis dapibus volutpat condi",
  },
  {
    id: "experience",
    delay: 0.5,
    icon: "/img/home-5/feature-icon-3.svg",
    title: "Easy Experience",
    description: "Quis dapibus volutpat condi",
  },
  {
    id: "safe",
    delay: 0.7,
    icon: "/img/home-5/feature-icon-4.svg",
    title: "Safe and protected",
    description: "Quis dapibus volutpat condi",
  },
  {
    id: "worldwide",
    delay: 0.9,
    icon: "/img/home-5/feature-icon-5.svg",
    title: "Wordwide",
    description: "Quis dapibus volutpat condi",
  },
  {
    id: "fees",
    delay: 1.1,
    icon: "/img/home-5/feature-icon-6.svg",
    title: "One term fees",
    description: "Quis dapibus volutpat condi",
  },
  {
    id: "merchant",
    delay: 1.3,
    icon: "/img/home-5/feature-icon-7.svg",
    title: "Merchant Payment",
    description: "Quis dapibus volutpat condi",
  },
  {
    id: "more",
    delay: 1.7,
    title: "10+",
    isLinkCard: true,
  },
];

export const ABOUT_PROCESS_FEATURES = [
  "It is a long established fact that a reader will be",
  "It is a long established fact distracted by the readable",
] as const;

export const CUSTOMER_STATS = [
  { value: "50", label: "Parters", sublabel: "Included" },
  { value: "1M", label: "Total", sublabel: "Attendies" },
] as const;

export const LOAN_TERM_TABS = ["Yearly", "Monthly", "Weekly"] as const;

export type LoanTermTab = (typeof LOAN_TERM_TABS)[number];

export const LOAN_TYPES: LoanTypeSlide[] = [
  {
    id: "personal-1",
    icon: "/img/home-5/loan-type-1.png",
    title: "Personal Loans",
    description: "Our team of experts uses methodology identify the credit cards most.",
  },
  {
    id: "installment-1",
    icon: "/img/home-5/loan-type-2.png",
    title: "Installment Loans",
    description: "Our team of experts uses methodology identify the credit cards most.",
  },
  {
    id: "payday-1",
    icon: "/img/home-5/loan-type-3.png",
    title: "Payday Loans",
    description: "Our team of experts uses methodology identify the credit cards most.",
  },
  {
    id: "personal-2",
    icon: "/img/home-5/loan-type-1.png",
    title: "Personal Loans",
    description: "Our team of experts uses methodology identify the credit cards most.",
  },
  {
    id: "installment-2",
    icon: "/img/home-5/loan-type-2.png",
    title: "Installment Loans",
    description: "Our team of experts uses methodology identify the credit cards most.",
  },
  {
    id: "payday-2",
    icon: "/img/home-5/loan-type-3.png",
    title: "Payday Loans",
    description: "Our team of experts uses methodology identify the credit cards most.",
  },
  {
    id: "installment-3",
    icon: "/img/home-5/loan-type-2.png",
    title: "Installment Loans",
    description: "Our team of experts uses methodology identify the credit cards most.",
  },
  {
    id: "payday-3",
    icon: "/img/home-5/loan-type-3.png",
    title: "Payday Loans",
    description: "Our team of experts uses methodology identify the credit cards most.",
  },
  {
    id: "personal-3",
    icon: "/img/home-5/loan-type-1.png",
    title: "Personal Loans",
    description: "Our team of experts uses methodology identify the credit cards most.",
  },
];

export const ABOUT_STATS: AboutStat[] = [
  {
    value: "1.5M",
    label: "Active Customers",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have.",
  },
  {
    value: "30k",
    label: "Business Partners",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have.",
  },
];

export const COUNTRIES: CountryItem[] = [
  { id: "brazil", delay: 0.1, flag: "/img/home-5/country-1.png", name: "Brazil" },
  { id: "canada", delay: 0.3, flag: "/img/home-5/country-2.png", name: "Canada" },
  { id: "australia", delay: 0.5, flag: "/img/home-5/country-3.png", name: "Australia" },
  { id: "usa", delay: 0.7, flag: "/img/home-5/country-4.png", name: "USA" },
  { id: "korea", delay: 0.9, flag: "/img/home-5/country-5.png", name: "South Korea" },
  { id: "bangladesh", delay: 1.1, flag: "/img/home-5/country-6.png", name: "Bangladesh" },
];

export const CONSULT_STATS = [
  { value: "1M+", label: "Total Customers" },
  { value: "40+", label: "Financial Consultants" },
] as const;

export const FOOTER_COMPANY_LINKS = [
  "About Us",
  "Recognition",
  "Executive Team",
  "Careers",
] as const;

export const FOOTER_PRODUCT_LINKS = [
  "Business Loans | Main",
  "Loan Calculator",
  "Refer a Friend",
  "Partner Program",
] as const;

export const FOOTER_HELP_LINKS = [
  "Customer Care",
  "Contact Us",
  "Security Center",
  "Blog",
] as const;

export const FOOTER_SOCIAL = ["facebook", "twitter", "pinterest", "linkedin"] as const;
