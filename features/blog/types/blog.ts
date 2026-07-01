export type BlogCategoryClass =
  | "bg_primary"
  | "yellow-bg"
  | "green-bg"
  | "sky-bg"
  | "deep-green-bg"
  | "violet-bg";

export interface BlogListPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryClass: BlogCategoryClass;
  image: string;
  date: string;
  author: string;
}

export interface BlogComment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  isReply?: boolean;
}

export interface BlogAuthorBio {
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogQuote {
  text: string;
  author: string;
  role: string;
  avatar: string;
}

export interface BlogDetailContent {
  heroImage: string;
  secondaryImage: string;
  paragraphs: string[];
  featureList: string[];
  quote: BlogQuote;
  sectionTitle: string;
  sectionParagraph: string;
  tags: string[];
  authorBio: BlogAuthorBio;
  relatedSlugs: string[];
  comments: BlogComment[];
}

export interface BlogCategory {
  name: string;
  count: number;
}

export interface RecentNewsItem {
  title: string;
  image: string;
  date: string;
  href: string;
}

export interface SocialStat {
  platform: string;
  icon: string;
  count: string;
  label: string;
  href: string;
}
