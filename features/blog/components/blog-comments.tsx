import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { BLOG_DETAIL_CONTENT } from "@/features/blog/constants/detail-content";

export function BlogComments() {
  const { comments } = BLOG_DETAIL_CONTENT;

  return (
    <div className="blog-comment-widget pb-90">
      <h4 className="blog-widget-title">{comments.length} Comments</h4>
      <div className="comment-author">
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className={comment.isReply ? "children" : undefined}>
              <div className="comments-box">
                <div className="comments-avatar">
                  <Image
                    className="rounded-full"
                    src={comment.avatar}
                    alt={comment.author}
                    width={60}
                    height={60}
                  />
                </div>
                <div className="comments-text">
                  <div className="avatar-name">
                    <h5>{comment.author}</h5>
                    <div className="post-date">
                      <Image
                        src="/img/blog/calendar-outline.svg"
                        alt=""
                        width={14}
                        height={14}
                        aria-hidden
                      />
                      <span>{comment.date}</span>
                    </div>
                    <a className="reply" href="#">
                      Reply <ArrowRight aria-hidden size={14} />
                    </a>
                  </div>
                  <p>{comment.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
