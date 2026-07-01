import type { BlogCategory, RecentNewsItem, SocialStat } from "@/features/blog/types/blog";

export const BLOG_POPULAR_TAGS = ["Business", "Financial", "Case Study"] as const;

export const BLOG_SIDEBAR_TAGS = [
  "Banking",
  "web design",
  "ui/ux",
  "saas",
  "software",
  "creative",
  "product",
  "development",
  "design",
  "sequrity",
] as const;

export const BLOG_CATEGORIES: BlogCategory[] = [
  { name: "Business", count: 10 },
  { name: "Loan", count: 9 },
  { name: "Financial", count: 12 },
  { name: "Bank Transfer", count: 7 },
  { name: "Technology", count: 6 },
  { name: "Security", count: 11 },
  { name: "Privacy", count: 5 },
];

export const BLOG_SOCIAL_STATS: SocialStat[] = [
  {
    platform: "Facebook",
    icon: "/img/social/facebook-logo.svg",
    count: "815.5K",
    label: "Fans",
    href: "#",
  },
  {
    platform: "Twitter",
    icon: "/img/social/twitter.svg",
    count: "107.2K",
    label: "Followers",
    href: "#",
  },
  {
    platform: "YouTube",
    icon: "/img/social/youtube.svg",
    count: "90.6K",
    label: "Subscribers",
    href: "#",
  },
];

export const BLOG_RECENT_NEWS: RecentNewsItem[] = [
  {
    title: "Is It Worth Buying A Premium Form Builder.",
    image: "/img/blog/recent-post-1.png",
    date: "March 18, 2021",
    href: "/blog/details",
  },
  {
    title: "10 Classic Summer Vacations",
    image: "/img/blog/recent-post-2.png",
    date: "March 18, 2021",
    href: "/blog/details",
  },
  {
    title: "How To Easily Add weForms Widget Using Elementor",
    image: "/img/blog/recent-post-3.png",
    date: "March 18, 2021",
    href: "/blog/details",
  },
  {
    title: "How to Create GDPR Consent Form In WordPress",
    image: "/img/blog/recent-post-4.png",
    date: "March 18, 2021",
    href: "/blog/details",
  },
];
