import Image from "next/image";

import { FadeIn } from "@/components/animations/fade-in";
import { SectionTitle } from "@/components/common/section-title";
import { PROCESS_STEPS } from "@/features/home/constants/process-steps";

export function Features() {
  return (
    <section id="feature" className="steps-area bg-white pt-115 pb-105" aria-label="Our process">
      <div className="container mx-auto max-w-[1320px] px-4">
        <div className="mx-auto max-w-[50%] pb-55 max-lg:max-w-full">
          <SectionTitle
            eyebrow="_OUR PROCESS"
            title={
              <>
                3 <span className="underline-shape">steps</span> to follow
              </>
            }
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-0">
          {PROCESS_STEPS.map((step, index) => (
            <FadeIn key={step.title} delay={0.1 + index * 0.2} className="h-full">
              <div className="feature-card-widget-8 h-full">
                <div className="card-img">
                  <Image
                    src={step.icon}
                    alt={`${step.title} icon`}
                    width={80}
                    height={80}
                    className="h-auto w-auto"
                  />
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
