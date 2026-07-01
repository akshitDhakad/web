import Image from "next/image";

import { BLOG_DETAIL_CONTENT } from "@/features/blog/constants/detail-content";
import type { BlogListPost } from "@/features/blog/types/blog";

interface BlogDetailContentProps {
  post: BlogListPost;
}

export function BlogDetailContent({ post }: BlogDetailContentProps) {
  const content = BLOG_DETAIL_CONTENT;

  return (
    <div className="post-details-widget relative border-b pb-70">
      <Image
        className="post-img w-full rounded-[10px]"
        src={content.heroImage}
        alt={post.title}
        width={820}
        height={460}
      />

      {content.paragraphs.slice(0, 2).map((paragraph) => (
        <p key={paragraph.slice(0, 24)} className="post-text mt-35">
          {paragraph}
        </p>
      ))}

      <ul className="feature-list">
        {content.featureList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <blockquote>
        <p>{content.quote.text}</p>
        <div className="author">
          <Image
            className="rounded-full"
            src={content.quote.avatar}
            alt={content.quote.author}
            width={48}
            height={48}
          />
          <div>
            <h6>{content.quote.author}</h6>
            <span>{content.quote.role}</span>
          </div>
        </div>
      </blockquote>

      <Image
        className="post-img w-full rounded-[10px]"
        src={content.secondaryImage}
        alt=""
        width={820}
        height={460}
      />

      <p className="post-text mt-40 pb-2">{content.paragraphs[2]}</p>

      <h2>{content.sectionTitle}</h2>
      <p className="post-text mt-20">{content.sectionParagraph}</p>

      <div className="tag-widget mt-35">
        <h6>Tags :</h6>
        {content.tags.map((tag) => (
          <a key={tag} href="#">
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}
