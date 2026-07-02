"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { FadeIn } from "@/components/animations/fade-in";

export function ErrorPageContent() {
  return (
    <section className="error_area bg_color page-pb-50 overflow-hidden">
      <div className="error_dot one" aria-hidden />
      <div className="error_dot two" aria-hidden />
      <div className="error_dot three" aria-hidden />
      <div className="error_dot four" aria-hidden />
      <div className="container">
        <div className="error_content_two text-center">
          <FadeIn>
            <div className="error_img">
              <Image className="error_shap" src="/img/error/404_bg.png" alt="" width={400} height={200} aria-hidden />
              <div className="one">
                <Image className="img_one" src="/img/error/404_two.png" alt="" width={80} height={120} aria-hidden />
              </div>
              <div className="two">
                <Image className="img_two" src="/img/error/404_three.png" alt="" width={80} height={120} aria-hidden />
              </div>
              <div className="three">
                <Image className="img_three" src="/img/error/404_one.png" alt="404" width={100} height={140} />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2>Error. We can&apos;t find the page you&apos;re looking for.</h2>
            <p>
              Sorry for the inconvenience. Go to our homepage or check out our latest collections for
              Fashion, Chair, Decoration...
            </p>
            <form className="error_search" onSubmit={(e) => e.preventDefault()}>
              <input type="search" className="form-control" placeholder="Search" />
            </form>
            <Link href="/" className="theme-btn inline-flex items-center gap-2">
              <ArrowLeft size={16} aria-hidden />
              Back to Home Page
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
