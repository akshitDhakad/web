export const FINANCE_CLIENT_LOGOS = [
  "/img/saas-app/c_logo_1.png",
  "/img/saas-app/c_logo_2.png",
  "/img/saas-app/c_logo_3.png",
  "/img/saas-app/c_logo_4.png",
  "/img/saas-app/c_logo_5.png",
] as const;

export const FINANCE_PROCESS_CARDS = [
  {
    icon: "/img/saas-app/clap.svg",
    title: "Making genuine loans",
    description: "There are many variations in passage lorem Ipsum available of them will.",
  },
  {
    icon: "/img/saas-app/hand.svg",
    title: "Almost limitless amount",
    description: "There are many variations in passage lorem Ipsum available of them will.",
  },
  {
    icon: "/img/saas-app/house.svg",
    title: "Safe & secure banking",
    description: "There are many variations in passage lorem Ipsum available of them will.",
  },
] as const;

export const FINANCE_PRICING = {
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

export const FINANCE_FAQ_LEFT = [
  { id: "f1", question: "How do I reset my password?", answer: "To reset your password, go to the login page and click on the Forgot Password link." },
  { id: "f2", question: "What payment methods do you accept and how do I track my purchase order?", answer: "We accept major credit cards, PayPal, and bank transfers." },
  { id: "f3", question: "What is your return policy and how do I contact support incase of said event ?", answer: "Contact our support team within 30 days for assistance with returns." },
] as const;

export const FINANCE_FAQ_RIGHT = [
  { id: "f4", question: "What is a mutual fund and how does compound interest builds up ?", answer: "A mutual fund pools money from investors to purchase securities." },
  { id: "f5", question: "What budget is a financial plan that outlines your expected income and expenses ?", answer: "A budget helps you track spending and plan for future goals." },
  { id: "f6", question: "What is a strategy of spreading your investment across different asset classes ?", answer: "Diversification reduces risk by spreading investments across assets." },
] as const;

export const FINANCE_PAYMENT_ICONS = [
  "/img/saas-app/visa.png",
  "/img/saas-app/amazon.png",
  "/img/saas-app/stripe.png",
  "/img/saas-app/paypal.png",
  "/img/saas-app/amex.png",
  "/img/saas-app/discover.png",
] as const;
