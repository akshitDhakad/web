import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { FadeIn } from "@/components/animations/fade-in";
import { SectionTitle } from "@/components/common/section-title";
import { containerClassName } from "@/components/layout/container";
import { ABOUT_FEATURES } from "@/features/home/constants/about-tabs";

export function About() {
  return (
    <section className="about-area bg-white" aria-label="Why Banca">
      <div className={`${containerClassName} py-16 lg:py-20`}>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="w-full lg:w-7/12">
            <div className="cash-img">
              <Image
                className="cash-main-img"
                src="/img/home-4/manage-cash-img.png"
                alt="Manage cash dashboard"
                width={700}
                height={608}
                priority={false}
              />
              <FadeIn direction="right" delay={0.1}>
                <Image
                  className="msg-1"
                  src="/img/home-4/basic-info-2.png"
                  alt=""
                  width={220}
                  height={98}
                  aria-hidden
                />
              </FadeIn>
              <FadeIn direction="right" delay={0.3}>
                <Image
                  className="msg-2"
                  src="/img/home-4/basic-info-3.png"
                  alt=""
                  width={280}
                  height={103}
                  aria-hidden
                />
              </FadeIn>
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <FadeIn direction="left">
              <SectionTitle
                eyebrow="_WHY BANCA ?"
                align="start"
                animated={false}
                title={
                  <>
                    Manage your cash <span className="underline-shape">easily</span>
                  </>
                }
                description="Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's"
                titleClassName="mb-3"
              />
              <ul className="feature-list">
                {ABOUT_FEATURES.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={19} aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
