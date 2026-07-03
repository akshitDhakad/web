export const CLIENT_LOGOS = [
  { src: "/img/saas-app/c_logo_1.png", alt: "Client logo 1", delay: 0.1 },
  { src: "/img/saas-app/c_logo_2.png", alt: "Client logo 2", delay: 0.3 },
  { src: "/img/saas-app/c_logo_3.png", alt: "Client logo 3", delay: 0.5 },
  { src: "/img/saas-app/c_logo_4.png", alt: "Client logo 4", delay: 0.7 },
  { src: "/img/saas-app/c_logo_5.png", alt: "Client logo 5", delay: 0.7 },
] as const;

export const PROCESS_CARDS = [
  {
    icon: "/img/saas-app/clap.svg",
    title: "Making genuine loans",
    description:
      "There are many variations in passage lorem Ipsum available of them will.",
  },
  {
    icon: "/img/saas-app/hand.svg",
    title: "Almost limitless amount",
    description:
      "There are many variations in passage lorem Ipsum available of them will.",
  },
  {
    icon: "/img/saas-app/house.svg",
    title: "Safe & secure banking",
    description:
      "There are many variations in passage lorem Ipsum available of them will.",
  },
] as const;

export const PRICING_PLANS = {
  month: [
    { name: "Basic Plan", price: "$15", period: "/month" },
    { name: "Premium Plan", price: "$25", period: "/month" },
    { name: "Business Plan", price: "$45", period: "/month" },
  ],
  year: [
    { name: "Basic Plan", price: "$25", period: "/ Year" },
    { name: "Premium Plan", price: "$35", period: "/ Year" },
    { name: "Business Plan", price: "$55", period: "/ Year" },
  ],
} as const;

export const PRICING_FEATURES = [
  "Non ipsum metus vulputate",
  "There are variations of passages",
  "Alteration some form injected",
] as const;

export const FAQ_COLUMN_ONE = [
  {
    id: "collapseOne",
    headingId: "headingOne",
    question: "How do I reset my password?",
    answer:
      'To reset your password, go to the login page and click on the "Forgot Password" link. You will be prompted to enter your email address and a reset link will be sent to you.',
    defaultOpen: true,
  },
  {
    id: "collapseTwo",
    headingId: "headingTwo",
    question:
      "What payment methods do you accept and how do I track my purchase order?",
    answer:
      'To reset your password, go to the login page and click on the "Forgot Password" link. You will be prompted to enter your email address and a reset link will be sent to you.',
    defaultOpen: false,
  },
  {
    id: "collapseThree",
    headingId: "headingThree",
    question:
      "What is your return policy and how do I contact support incase of said event ?",
    answer:
      'To reset your password, go to the login page and click on the "Forgot Password" link. You will be prompted to enter your email address and a reset link will be sent to you.',
    defaultOpen: false,
  },
] as const;

export const FAQ_COLUMN_TWO = [
  {
    id: "collapseFour",
    headingId: "headingFour",
    question:
      "What is a mutual fund and how does compound interest builds up ?",
    answer:
      'To reset your password, go to the login page and click on the "Forgot Password" link. You will be prompted to enter your email address and a reset link will be sent to you.',
    defaultOpen: true,
  },
  {
    id: "collapseFive",
    headingId: "headingFive",
    question:
      "What budget is a financial plan that outlines your expected income and expenses ?",
    answer:
      'To reset your password, go to the login page and click on the "Forgot Password" link. You will be prompted to enter your email address and a reset link will be sent to you.',
    defaultOpen: false,
  },
  {
    id: "collapseSix",
    headingId: "headingSix",
    question:
      "What is a strategy of spreading your investment across different asset classes ?",
    answer:
      'To reset your password, go to the login page and click on the "Forgot Password" link. You will be prompted to enter your email address and a reset link will be sent to you.',
    defaultOpen: false,
  },
] as const;

export const FOOTER_SUPPORT_LINKS = [
  "Pricing",
  "Account Information",
  "About",
  "Contact us",
] as const;

export const FOOTER_DESIGN_LINKS = [
  "Logo Maker",
  "Cover Photo Maker",
  "Banner Maker",
  "Branded Templates",
] as const;

export const FOOTER_TOOLS_LINKS = [
  "Templates",
  "PDF Editor",
  "Animator",
  "Image Resizer",
] as const;

export const PAYMENT_ICONS = [
  { src: "/img/saas-app/visa.png", alt: "Visa" },
  { src: "/img/saas-app/amazon.png", alt: "Amazon" },
  { src: "/img/saas-app/stripe.png", alt: "Stripe" },
  { src: "/img/saas-app/paypal.png", alt: "PayPal" },
  { src: "/img/saas-app/amex.png", alt: "American Express" },
  { src: "/img/saas-app/discover.png", alt: "Discover" },
] as const;
