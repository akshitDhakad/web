export type BlogCategoryVariant = "yellow-bg" | "orange-bg" | "tulip-bg";

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  categoryVariant: BlogCategoryVariant;
  image: string;
  date: string;
  author: string;
  href: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Build a website that looks like it can run on it's own",
    category: "Design",
    categoryVariant: "yellow-bg",
    image: "/img/home-4/article-1.png",
    date: "November 08, 2022",
    author: "Spiderthemes",
    href: "/blog/details",
  },
  {
    id: "2",
    title: "Build a website that looks like it can run on it's own",
    category: "Design",
    categoryVariant: "orange-bg",
    image: "/img/home-4/article-2.png",
    date: "November 08, 2022",
    author: "Spiderthemes",
    href: "/blog/details",
  },
  {
    id: "3",
    title: "Build a website that looks like it can run on it's own",
    category: "Design",
    categoryVariant: "tulip-bg",
    image: "/img/home-4/article-3.png",
    date: "November 08, 2022",
    author: "Spiderthemes",
    href: "/blog/details",
  },
];
