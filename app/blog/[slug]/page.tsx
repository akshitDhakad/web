import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogAuthorWidget } from "@/features/blog/components/blog-author-widget";
import { BlogCommentForm } from "@/features/blog/components/blog-comment-form";
import { BlogComments } from "@/features/blog/components/blog-comments";
import { BlogDetailContent } from "@/features/blog/components/blog-detail-content";
import { BlogDetailHero } from "@/features/blog/components/blog-detail-hero";
import { BlogRelatedPosts } from "@/features/blog/components/blog-related-posts";
import { BlogShareWidget } from "@/features/blog/components/blog-share-widget";
import { BlogSidebar } from "@/features/blog/components/blog-sidebar";
import { BLOG_DETAIL_CONTENT } from "@/features/blog/constants/detail-content";
import { BLOG_LIST_POSTS, getPostBySlug } from "@/features/blog/lib/posts";
import { SITE_CONFIG } from "@/constants/navigation";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_LIST_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogDetailHero title={post.title} author={post.author} date={post.date} />

      <section className="bg_disable pt-120 pb-120">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="relative lg:col-span-1">
              <BlogShareWidget />
            </div>
            <div className="lg:col-span-7">
              <BlogDetailContent post={post} />
              <BlogAuthorWidget />
              <BlogRelatedPosts slugs={BLOG_DETAIL_CONTENT.relatedSlugs} />
              <BlogComments />
              <BlogCommentForm />
            </div>
            <div className="lg:col-span-4 lg:ps-8">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
