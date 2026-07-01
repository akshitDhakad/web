import Image from "next/image";
import Link from "next/link";

import { getPostHref } from "@/features/blog/lib/posts";
import type { BlogListPost } from "@/features/blog/types/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogListPost;
  headingLevel?: "h4" | "h5";
  className?: string;
}

export function BlogCard({ post, headingLevel = "h4", className }: BlogCardProps) {
  const Heading = headingLevel;

  return (
    <article className={cn("blog-widget-2", className)}>
      <Link href={getPostHref(post.slug)} className="blog-img">
        <Image
          src={post.image}
          alt={post.title}
          width={360}
          height={240}
          className="h-auto w-full"
        />
        <div className={cn("catagory", post.categoryClass)}>{post.category}</div>
      </Link>
      <div className="blog-content">
        <Heading>
          <Link href={getPostHref(post.slug)}>{post.title}</Link>
        </Heading>
        <p>{post.excerpt}</p>
        <div className="post-info">
          <div className="author">
            <Image
              src="/img/blog/user-profile.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden
            />
            <span>{post.author}</span>
          </div>
          <div className="post-date">
            <Image
              src="/img/blog/calendar-outline.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden
            />
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
