export interface FeatureWidget {
  id: string;
  featureClass: string;
  delay: number;
  shapes: string[];
  icon: string;
  label: string;
  title: string;
}

export interface CorporateCard {
  id: string;
  delay: number;
  iconBgClass: string;
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorkStep {
  text: string;
  active?: boolean;
}

export interface HowItWorkWidget {
  id: string;
  delay: number;
  widgetClass: string;
  icon: string;
  title: string;
  description: string;
  steps: HowItWorkStep[];
}

export interface FaqItem {
  id: string;
  delay: number;
  question: string;
  answer: string;
}

export const FEATURE_WIDGETS: FeatureWidget[] = [
  {
    id: "feature-1",
    featureClass: "feature-1",
    delay: 0.1,
    shapes: [
      "/img/feature/shape-6.png",
      "/img/feature/shape-10.png",
      "/img/feature/shape-4.png",
      "/img/feature/shape-3.png",
      "/img/feature/shape-12.png",
      "/img/feature/shape-12.png",
    ],
    icon: "/img/feature/icon-5.png",
    label: "UP TO $5M",
    title: "High Rang Loan",
  },
  {
    id: "feature-2",
    featureClass: "feature-2",
    delay: 0.3,
    shapes: [
      "/img/feature/shape-13.png",
      "/img/feature/shape-14.png",
      "/img/feature/shape-15.png",
      "/img/feature/shape-11.png",
      "/img/feature/shape-12.png",
      "/img/feature/shape-5.png",
    ],
    icon: "/img/feature/icon-6.png",
    label: "FROM 7.50%",
    title: "Offer Low Interest",
  },
  {
    id: "feature-3",
    featureClass: "feature-3",
    delay: 0.5,
    shapes: [
      "/img/feature/shape-1.png",
      "/img/feature/shape-2.png",
      "/img/feature/shape-6.png",
      "/img/feature/shape-9.png",
      "/img/feature/shape-11.png",
    ],
    icon: "/img/feature/icon-7.png",
    label: "7 DAYS PROCESS",
    title: "Fast & Easy Process",
  },
];

export const APPLY_TOPICS = [
  "Get up to $15,000 Cash Fast",
  "15 MinuteOnline Application",
  "Centrelink Considered*",
  "Bad Credit Considered2",
] as const;

export const LEARN_MORE_NOTES = [
  { prefix: "1.", text: "Subject to verifcation, suitability and affordability" },
  {
    prefix: "2.",
    text: "Your income from Centrelink must be less then 50% of your total income in order to qialify.",
  },
] as const;

export const CORPORATE_CARDS: CorporateCard[] = [
  {
    id: "freelancers",
    delay: 0.1,
    iconBgClass: "icon-bg-1",
    icon: "/img/corporate-finance/icon-5.svg",
    title: "Freelancers",
    description: "The best business account to send and receive payments on a daily basis.",
  },
  {
    id: "smbs",
    delay: 0.3,
    iconBgClass: "icon-bg-2",
    icon: "/img/corporate-finance/icon-2.svg",
    title: "SMBs & Startups",
    description: "Optimize your team's expenses by always staying in control.",
  },
  {
    id: "founders",
    delay: 0.5,
    iconBgClass: "icon-bg-3",
    icon: "/img/corporate-finance/icon-3.svg",
    title: "Business Founders",
    description: "Open a business account for the online deposit of your share capital.",
  },
  {
    id: "micro",
    delay: 0.7,
    iconBgClass: "icon-bg-4",
    icon: "/img/corporate-finance/icon-4.svg",
    title: "Microbusinesses",
    description: "Stay focused on your core business by managing your finances and accounting.",
  },
];

export const HOW_IT_WORK_WIDGETS: HowItWorkWidget[] = [
  {
    id: "apply-online",
    delay: 0.1,
    widgetClass: "apply-online",
    icon: "/img/how-works/icon-1.png",
    title: "Apply Online",
    description: "That is why we have a wide range of you can apply for a Personal Loan.",
    steps: [
      { text: "Apply Online", active: true },
      { text: "Enter Your Informantion - 10 min" },
      { text: "Pre-qualify / Pre-Approve - 5 min" },
      { text: "Help you prepare" },
      { text: "We help your qualify - 15 days" },
    ],
  },
  {
    id: "consultation",
    delay: 0.3,
    widgetClass: "consultation",
    icon: "/img/how-works/icon-2.png",
    title: "Consultation",
    description:
      "Conis Guide on the supervisory approach to consolidation in the banking sector.",
    steps: [
      { text: "Schedule a Free Consulation", active: true },
      { text: "Discuss your Situation" },
      { text: "We Review your condition" },
      { text: "Help you prepare" },
      { text: "We help your qualify" },
    ],
  },
];

export const SECURITY_SHAPES = [
  "/img/security-tips/shape-1.png",
  "/img/security-tips/shape-2.png",
  "/img/security-tips/shape-3.png",
  "/img/security-tips/shape-4.png",
  "/img/security-tips/shape-5.png",
  "/img/security-tips/shape-6.png",
  "/img/security-tips/shape-1.png",
  "/img/security-tips/shape-7.png",
  "/img/security-tips/shape-8.png",
] as const;

export const CTA_SHAPES = [
  "/img/cta/icon-1.png",
  "/img/cta/icon-2.png",
  "/img/cta/icon-3.png",
  "/img/cta/icon-4.png",
  "/img/cta/icon-5.png",
  "/img/cta/icon-6.png",
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "loan-steps-faq-1",
    delay: 0.1,
    question: "Can I pay off my loan early?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
  },
  {
    id: "loan-steps-faq-2",
    delay: 0.3,
    question: "How much can I Banca?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
  },
  {
    id: "loan-steps-faq-3",
    delay: 0.5,
    question: "Do you offering refinancing ?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
  },
  {
    id: "loan-steps-faq-4",
    delay: 0.7,
    question: "Can I do all of my banking with you?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
  },
  {
    id: "loan-steps-faq-5",
    delay: 0.9,
    question: "When should i apply?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
  },
];
