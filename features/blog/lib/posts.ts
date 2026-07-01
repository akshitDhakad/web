import type { BlogListPost } from "@/features/blog/types/blog";

export function getPostBySlug(slug: string): BlogListPost | undefined {
  return BLOG_LIST_POSTS.find((post) => post.slug === slug);
}

export function getPostHref(slug: string): string {
  return `/blog/${slug}`;
}

export const DEFAULT_BLOG_SLUG = "how-to-save-enough-money-to-buy-a-home";

export const BLOG_LIST_POSTS: BlogListPost[] = [
  {
    id: "1",
    slug: "five-steps-to-buying-for-your-home-loan",
    title: "Five Steps to Buying for Your Home Loan",
    excerpt: "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    category: "buisiness",
    categoryClass: "bg_primary",
    image: "/img/blog/blog-1.png",
    date: "March 18, 2021",
    author: "Zain Siphron",
  },
  {
    id: "2",
    slug: "how-to-save-enough-money-to-buy-a-home",
    title: "How To Save Enough Money To Buy A Home",
    excerpt: "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    category: "loan",
    categoryClass: "yellow-bg",
    image: "/img/blog/blog-2.png",
    date: "March 18, 2021",
    author: "Zain Siphron",
  },
  {
    id: "3",
    slug: "create-a-wordpress-multi-step-form",
    title: "Create A WordPress Multi Step Form",
    excerpt: "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    category: "Securiey",
    categoryClass: "green-bg",
    image: "/img/blog/blog-3.png",
    date: "March 18, 2021",
    author: "Zain Siphron",
  },
  {
    id: "4",
    slug: "what-happens-to-your-debt-when-you-die",
    title: "What Happens to Your Debt When You Die?",
    excerpt: "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    category: "buisiness",
    categoryClass: "sky-bg",
    image: "/img/blog/blog-4.png",
    date: "March 18, 2021",
    author: "Zain Siphron",
  },
  {
    id: "5",
    slug: "how-do-banca-banks-make-money",
    title: "How Do Banca Banks Make Money?",
    excerpt: "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    category: "banking",
    categoryClass: "deep-green-bg",
    image: "/img/blog/blog-5.png",
    date: "March 18, 2021",
    author: "Zain Siphron",
  },
  {
    id: "6",
    slug: "finance-your-property-in-a-market",
    title: "Finance Your Property in a Market",
    excerpt: "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    category: "loan",
    categoryClass: "yellow-bg",
    image: "/img/blog/blog-6.png",
    date: "March 18, 2021",
    author: "Zain Siphron",
  },
  {
    id: "7",
    slug: "how-our-revamped-api-can-help-your-finances",
    title: "How our revamped API can help your finances",
    excerpt: "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    category: "finances",
    categoryClass: "violet-bg",
    image: "/img/blog/blog-7.png",
    date: "March 18, 2021",
    author: "Zain Siphron",
  },
  {
    id: "8",
    slug: "linking-your-finances-and-your-business",
    title: "Linking your finances and your business",
    excerpt: "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    category: "finances",
    categoryClass: "violet-bg",
    image: "/img/blog/blog-8.png",
    date: "March 18, 2021",
    author: "Zain Siphron",
  },
  {
    id: "9",
    slug: "why-set-impossible-goals-for-2021",
    title: "Why Set Impossible Goals for 2021?",
    excerpt: "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    category: "buisiness",
    categoryClass: "bg_primary",
    image: "/img/blog/blog-9.png",
    date: "March 18, 2021",
    author: "Zain Siphron",
  },
  {
    id: "10",
    slug: "how-banca-elevated-the-design-to-code",
    title: "How Banca elevated the design to code.",
    excerpt: "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    category: "loan",
    categoryClass: "yellow-bg",
    image: "/img/blog/blog-10.png",
    date: "March 18, 2021",
    author: "Zain Siphron",
  },
];
