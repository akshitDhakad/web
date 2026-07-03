export const FACT_ITEMS = [
  {
    icon: "/img/bank/single-icon.png",
    title: "Single term fees",
    description:
      "Realtime problem solving is not just about time, it's about time this allows you to solve within a specified time problem than you would.",
    delay: 0,
  },
  {
    icon: "/img/bank/world-icon.png",
    title: "Worldwide Locations",
    description:
      "Realtime problem solving is not just about time, it's about time this allows you to solve within a specified time problem than you would.",
    delay: 0.2,
  },
  {
    icon: "/img/bank/sheld-icon.png",
    title: "Safe and protected",
    description:
      "Realtime problem solving is not just about time, it's about time this allows you to solve within a specified time problem than you would.",
    delay: 0.4,
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Check Eligibility",
    description:
      "Choose your training and register for free if you are a freelancer the courses are entirely taken care.",
    delay: 0.1,
  },
  {
    number: "02",
    title: "Apply for loan",
    description:
      "Choose your training and register for free if you are a freelancer the courses are entirely taken care.",
    delay: 0.3,
  },
  {
    number: "03",
    title: "Get Approved",
    description:
      "Choose your training and register for free if you are a freelancer the courses are entirely taken care.",
    delay: 0.6,
  },
  {
    number: "04",
    title: "Get your money",
    description:
      "Choose your training and register for free if you are a freelancer the courses are entirely taken care.",
    delay: 0.6,
  },
] as const;

export const BANK_CARD_TABS = [
  {
    id: "freelancer",
    label: "Standard Card",
    description:
      "Choose your training and register for free. If you are a freelancer, the courses are entirely taken care you.",
    cardOne: "/img/bank/f-card1.png",
    cardTwo: "/img/bank/f-card2.png",
    delay: 0,
  },
  {
    id: "startup",
    label: "Premium Card",
    description:
      "Choose your training and register for free. If you are a freelancer, the courses are entirely taken care you.",
    cardOne: "/img/bank/f_card3.png",
    cardTwo: "/img/bank/f_card4.png",
    delay: 0.2,
  },
  {
    id: "business",
    label: "Business Card",
    description:
      "Choose your training and register for free. If you are a freelancer, the courses are entirely taken care you.",
    cardOne: "/img/bank/f_card5.png",
    cardTwo: "/img/bank/f_card6.png",
    delay: 0.3,
  },
] as const;

export type BankCardTabId = (typeof BANK_CARD_TABS)[number]["id"];

export const INTEGRATIONS = [
  { icon: "/img/bank/slack.png", name: "Slack", delay: 0.1 },
  { icon: "/img/bank/dropbox.png", name: "Dropbox", delay: 0.3 },
  { icon: "/img/bank/google_drive.png", name: "Google Drive", delay: 0.6 },
  { icon: "/img/bank/jira.png", name: "Jira", delay: 0.1 },
  { icon: "/img/bank/zendesk.png", name: "Zendesk", delay: 0.3 },
  { icon: "/img/bank/mailchimp.png", name: "Mailchimp", delay: 0.6 },
] as const;

export const MAP_FLAGS = [
  { src: "/img/bank/flag-1.png", delay: 0.2, active: true },
  { src: "/img/bank/flag-2.png", delay: 0.4 },
  { src: "/img/bank/flag-3.png", delay: 0.5 },
  { src: "/img/bank/flag-4.png", delay: 0.6 },
  { src: "/img/bank/flag-5.png", delay: 0.7 },
  { src: "/img/bank/flag-6.png", delay: 0.8 },
  { src: "/img/bank/flag-7.png", delay: 0.9 },
  { src: "/img/bank/flag-8.png", delay: 0.95 },
] as const;

export const CLIENT_LOGOS = [
  { src: "/img/saas-app/c_logo_1.png", alt: "Client logo 1", delay: 0.1 },
  { src: "/img/saas-app/c_logo_2.png", alt: "Client logo 2", delay: 0.3 },
  { src: "/img/saas-app/c_logo_3.png", alt: "Client logo 3", delay: 0.5 },
  { src: "/img/saas-app/c_logo_4.png", alt: "Client logo 4", delay: 0.7 },
  { src: "/img/saas-app/c_logo_5.png", alt: "Client logo 5", delay: 0.7 },
] as const;

export const FOOTER_COMPANY_LINKS = [
  "Pricing",
  "Account Information",
  "About",
  "Contact us",
] as const;

export const FOOTER_RESOURCES_LINKS = [
  "News",
  "Blog",
  "Help Center",
  "Tutorials",
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
