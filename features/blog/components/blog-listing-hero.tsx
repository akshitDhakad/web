"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { BLOG_POPULAR_TAGS } from "@/features/blog/constants/sidebar";

export function BlogListingHero() {
  const [query, setQuery] = useState("");

  return (
    <section className="breadcrumb-area" aria-label="Blog hero">
      <div
        className="breadcrumb-widget breadcrumb-widget-2 pt-200 pb-145"
        style={{ backgroundImage: "url(/img/breadcrumb/bg-3.jpg)" }}
      >
        <div className="shapes">
          <div className="one-shape shape-1">
            <Image
              src="/img/breadcrumb/Polygon-1.png"
              alt=""
              width={120}
              height={120}
              aria-hidden
            />
          </div>
          <div className="one-shape shape-2">
            <Image
              src="/img/breadcrumb/Polygon-2.png"
              alt=""
              width={120}
              height={200}
              aria-hidden
            />
          </div>
        </div>
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="breadcrumb-content pt-50">
              <h1>Blog</h1>
              <form
                className="search-box mt-20"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="input-group">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search for topic..."
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <button className="search-btn input-group-append" type="submit" aria-label="Search">
                    <Search aria-hidden size={22} />
                  </button>
                </div>
              </form>
              <div className="popular-tags mt-20">
                <span>Popular Tags:</span>
                {BLOG_POPULAR_TAGS.map((tag) => (
                  <a key={tag} href="#">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
