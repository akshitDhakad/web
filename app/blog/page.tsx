import type { Metadata } from "next";

import { BlogCard } from "@/features/blog/components/blog-card";
import { BlogListingHero } from "@/features/blog/components/blog-listing-hero";
import { BlogPagination } from "@/features/blog/components/blog-pagination";
import { BlogSidebar } from "@/features/blog/components/blog-sidebar";
import { BLOG_LIST_POSTS } from "@/features/blog/lib/posts";
import { SITE_CONFIG } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "Blog Listing",
  description: "Read the latest articles on banking, loans, and financial planning from Banca.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

export default function BlogListingPage() {
  return (
    <>
      <BlogListingHero />

      <section className="bg_disable pt-120 pb-120">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="blog-post-widget">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {BLOG_LIST_POSTS.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
                <div className="mt-55">
                  <BlogPagination />
                </div>
              </div>
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
