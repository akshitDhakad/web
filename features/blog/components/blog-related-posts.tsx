import { getPostBySlug } from "@/features/blog/lib/posts";

import { BlogCard } from "./blog-card";

interface BlogRelatedPostsProps {
  slugs: string[];
}

export function BlogRelatedPosts({ slugs }: BlogRelatedPostsProps) {
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="related-post-widget pb-90">
      <h4 className="blog-widget-title mb-45">Related Post</h4>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} headingLevel="h5" />
        ))}
      </div>
    </div>
  );
}
