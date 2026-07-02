"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Play } from "lucide-react";
import Image from "next/image";

import { FadeIn } from "@/components/animations/fade-in";
import { LOAN_TESTIMONIALS } from "@/features/loan/constants/loan";

const TESTIMONIAL_COPY =
  "We were looking for a home of happiness and peace. Thanks to the Grihashakti team, who helped us to realise this dream of ours. Our home has been very lucky for us – as we shifted to our new home, prosperity followed!";

export function LoanTestimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="testimonial-area page-pt-140 page-pb-140 bg_disable">
      <div className="container-fluid px-0">
        <div className="testimonial-slider overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {LOAN_TESTIMONIALS.map((item, index) => (
              <div className="min-w-0 flex-[0_0_100%]" key={item.id}>
                <div className="container px-4">
                  <FadeIn delay={index * 0.1}>
                    <div className="testimonial-widget">
                      <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-span-4">
                          <div className="author-img">
                            <Image src={item.image} alt={item.name} width={400} height={400} />
                          </div>
                        </div>
                        <div className="flex items-center md:col-span-8">
                          <div className="testimonial-content">
                            <div className="watch-button">
                              <a
                                href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Play size={16} aria-hidden />
                                watch the video
                              </a>
                            </div>
                            <h2>Making dreams a reality!</h2>
                            <p className="lg:pr-16">{TESTIMONIAL_COPY}</p>
                            <div className="author-info">
                              <h4>{item.name}</h4>
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
