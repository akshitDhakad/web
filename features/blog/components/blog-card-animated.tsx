"use client";

import { motion } from "framer-motion";

import { FadeIn } from "@/components/animations/fade-in";
import type { BlogListPost } from "@/features/blog/types/blog";

import { BlogCard } from "./blog-card";

interface BlogCardAnimatedProps {
  post: BlogListPost;
  index?: number;
  headingLevel?: "h4" | "h5";
}

export function BlogCardAnimated({
  post,
  index = 0,
  headingLevel = "h4",
}: BlogCardAnimatedProps) {
  return (
    <FadeIn delay={0.1 + (index % 2) * 0.2} className="h-full">
      <motion.div
        className="h-full"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <BlogCard post={post} headingLevel={headingLevel} className="h-full" />
      </motion.div>
    </FadeIn>
  );
}
