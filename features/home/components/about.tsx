import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { FadeIn } from "@/components/animations/fade-in";
import { SectionTitle } from "@/components/common/section-title";
import { ABOUT_FEATURES } from "@/features/home/constants/about-tabs";

export function About() {
  return (
    <section className="about-area bg-white" aria-label="Why Banca">
      <div className="container mx-auto max-w-[1320px] px-4 py-16 lg:py-20">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="w-full lg:w-7/12">
            <div className="cash-img">
              <Image
                className="h-auto w-full max-w-full"
                src="/img/home-4/manage-cash-img.png"
                alt="Manage cash dashboard"
                width={700}
                height={500}
                priority={false}
              />
              <FadeIn direction="right" delay={0.1}>
                <Image
                  className="msg-1 h-auto w-auto"
                  src="/img/home-4/basic-info-2.png"
                  alt=""
                  width={200}
                  height={120}
                  aria-hidden
                />
              </FadeIn>
              <FadeIn direction="right" delay={0.3}>
                <Image
                  className="msg-2 h-auto w-auto"
                  src="/img/home-4/basic-info-3.png"
                  alt=""
                  width={200}
                  height={120}
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
