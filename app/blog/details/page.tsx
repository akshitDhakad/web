import { redirect } from "next/navigation";

import { DEFAULT_BLOG_SLUG } from "@/features/blog/lib/posts";

export default function BlogDetailsRedirectPage() {
  redirect(`/blog/${DEFAULT_BLOG_SLUG}`);
}
