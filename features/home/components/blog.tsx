import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { SectionTitle } from "@/components/common/section-title";
import { containerClassName } from "@/components/layout/container";
import { BLOG_POSTS } from "@/features/home/constants/blog-posts";

export function Blog() {
  return (
    <section
      className="news-area-2 relative z-[1] bg-white pt-120 pb-200"
      aria-label="Latest articles"
    >
      <div className={containerClassName}>
        <SectionTitle
          className="mb-3"
          eyebrow="_Blog"
          title={
            <>
              Our latest <span className="underline-shape">articles</span>
            </>
          }
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
        />

        <div className="grid grid-cols-1 gap-4 pt-55 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <FadeIn key={post.id} delay={0.1 + index * 0.2}>
              <article className="blog-widget-3">
                <Link href={post.href} className="blog-img">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={360}
                    height={240}
                    className="h-auto w-full"
                  />
                  <div className={`catagory ${post.categoryVariant}`}>{post.category}</div>
                </Link>
                <div className="blog-content">
                  <h4>
                    <Link href={post.href}>{post.title}</Link>
                  </h4>
                  <div className="post-info">
                    <div className="post-date">
                      <Image
                        src="/img/home-4/calender-outline.svg"
                        alt=""
                        width={16}
                        height={16}
                        aria-hidden
                      />
                      <span>{post.date}</span>
                    </div>
                    <div className="author">
                      <Image
                        src="/img/home-4/user-profile.svg"
                        alt=""
                        width={16}
                        height={16}
                        aria-hidden
                      />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
