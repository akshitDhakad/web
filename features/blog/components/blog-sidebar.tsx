import Image from "next/image";
import Link from "next/link";

import {
  BLOG_CATEGORIES,
  BLOG_RECENT_NEWS,
  BLOG_SIDEBAR_TAGS,
  BLOG_SOCIAL_STATS,
} from "@/features/blog/constants/sidebar";

export function BlogSidebar() {
  return (
    <aside className="blog-sidebar-widget ps-lg-2">
      <div className="widget-subscribe">
        <h4 className="widget-title">Subscribe to our blog</h4>
        <p>Get the latest posts in your email</p>
        <form action="#">
          <input className="form-control" type="email" placeholder="Enter your email" />
          <button className="theme-btn w-100" type="submit">
            Subscribe
          </button>
        </form>
      </div>

      <div className="widget-social">
        <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3">
          {BLOG_SOCIAL_STATS.map((stat) => (
            <a key={stat.platform} href={stat.href}>
              <Image src={stat.icon} alt={stat.platform} width={32} height={32} />
              <h6>{stat.count}</h6>
              <span>{stat.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="widget-catagory">
        <h4 className="widget-title">Categories</h4>
        <ul>
          {BLOG_CATEGORIES.map((category) => (
            <li key={category.name}>
              <a href="#">
                {category.name}
                <span>({String(category.count).padStart(2, "0")})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="widget-news">
        <h4 className="widget-title">Reacent News</h4>
        <ul className="recent-post">
          {BLOG_RECENT_NEWS.map((item) => (
            <li key={item.title}>
              <Image src={item.image} alt="" width={80} height={80} />
              <div className="news-content">
                <h6>
                  <Link href={item.href}>{item.title}</Link>
                </h6>
                <div className="post-date">
                  <Image
                    src="/img/blog/calendar-outline.svg"
                    alt=""
                    width={14}
                    height={14}
                    aria-hidden
                  />
                  <span>{item.date}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="widget-tags">
        <h4 className="widget-title">Tags</h4>
        <div className="tags">
          {BLOG_SIDEBAR_TAGS.map((tag) => (
            <a key={tag} href="#">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
