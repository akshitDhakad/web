"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { FadeIn } from "@/components/animations/fade-in";
import { SectionTitle } from "@/components/common/section-title";
import { TESTIMONIALS } from "@/features/home/constants/testimonials";
import { cn } from "@/lib/utils";

function TestimonialCard({
  quote,
  name,
  role,
  avatar,
}: {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <div className="single-client">
      <div className="rating flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} aria-hidden />
        ))}
      </div>
      <p className="quote">{quote}</p>
      <div className="client-info">
        <Image
          className="rounded-full"
          src={avatar}
          alt={name}
          width={56}
          height={56}
        />
        <div>
          <p>{name}</p>
          <span className="role">{role}</span>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="client-area-2 pt-60 pb-60" aria-label="Testimonials">
      <div className="container mx-auto max-w-[1320px] px-4">
        <SectionTitle
          className="mb-3"
          eyebrow="_Testimonials"
          title={
            <>
              Customer <span className="underline-shape">feedbacks</span>
            </>
          }
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,"
        />

        <div className="client-slider-2 relative">
          <button
            type="button"
            className="slider-arrow prev"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {TESTIMONIALS.map((testimonial, index) => (
                <div className="embla__slide" key={testimonial.id}>
                  <FadeIn delay={0.1 + (index % 3) * 0.2}>
                    <TestimonialCard {...testimonial} />
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="slider-arrow next"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

          <div className="embla-dots">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                className={cn("embla-dot", index === selectedIndex && "is-selected")}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
