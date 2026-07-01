import Image from "next/image";

import { BLOG_DETAIL_CONTENT } from "@/features/blog/constants/detail-content";

export function BlogAuthorWidget() {
  const { authorBio } = BLOG_DETAIL_CONTENT;

  return (
    <div className="author-media-widget mt-90 mb-90">
      <div className="author-img">
        <Image
          className="rounded-full"
          src={authorBio.avatar}
          alt={authorBio.name}
          width={80}
          height={80}
        />
      </div>
      <div className="author-info">
        <h6>{authorBio.name}</h6>
        <p>{authorBio.bio}</p>
      </div>
    </div>
  );
}
