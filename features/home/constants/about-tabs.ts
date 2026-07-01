export interface AboutTab {
  id: string;
  label: string;
  title: string;
  highlightedWord: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const ABOUT_TABS: AboutTab[] = [
  {
    id: "freelancer",
    label: "Freelancers",
    title: "Access to secure",
    highlightedWord: "banking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
    image: "/img/home-4/freelance-tab.png",
    imageAlt: "Freelancer banking dashboard",
  },
  {
    id: "startup",
    label: "SMBs & Startups",
    title: "Manage your cash",
    highlightedWord: "easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
    image: "/img/home-4/freelance-tab-2.png",
    imageAlt: "Startup cash management",
  },
  {
    id: "business",
    label: "Business Founders",
    title: "Access to secure",
    highlightedWord: "banking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
    image: "/img/home-4/freelance-tab.png",
    imageAlt: "Business founder banking",
  },
  {
    id: "micro_business",
    label: "Micro businesses",
    title: "Manage your cash",
    highlightedWord: "easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
    image: "/img/home-4/freelance-tab-2.png",
    imageAlt: "Micro business cash management",
  },
];

export const ABOUT_FEATURES = [
  "Inventore veritatis et architecto beatae",
  "Tempor egestas morbi pulvinar amet",
] as const;
