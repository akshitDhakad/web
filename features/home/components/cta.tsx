"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { FadeIn } from "@/components/animations/fade-in";
import { containerClassName } from "@/components/layout/container";
import {
  newsletterSchema,
  type NewsletterFormData,
} from "@/features/home/schemas/newsletter.schema";

const CTA_FEATURES = ["Get 30 day free trial", "No Spamming"] as const;

export function CTA() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: NewsletterFormData) => {
    console.info("Newsletter subscription:", data);
    reset();
  };

  return (
    <section className="cta-area-3 bg-white" aria-label="Newsletter signup">
      <div className={containerClassName}>
        <div className="relative">
          <div className="cta-4 cta-bg-primary">
            <div className="flex flex-col items-center gap-8 lg:flex-row">
              <div className="w-full lg:w-1/2">
                <FadeIn direction="right">
                  <div className="cta-content">
                    <h2 className="mb-10">Start your free trial !</h2>
                    <p>There are many variations of passages of Lorem Ipsum available.</p>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="mt-40 flex flex-col gap-3 sm:flex-row"
                    >
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email address"
                        {...register("email")}
                      />
                      <button type="submit" className="theme-btn theme-btn-lg shrink-0 sm:ms-3">
                        Subscribe
                      </button>
                    </form>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-200" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                    <ul className="feature-list">
                      {CTA_FEATURES.map((feature) => (
                        <li key={feature}>
                          <CheckCircle2 size={16} aria-hidden />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>

              <div className="w-full lg:w-1/2">
                <FadeIn direction="left" delay={0.1}>
                  <div className="cta-visual">
                    <Image
                      className="cta-img h-auto max-w-full"
                      src="/img/home-4/cta-Img.png"
                      alt=""
                      width={500}
                      height={400}
                      aria-hidden
                    />
                    <Image
                      className="shape h-auto max-w-full"
                      src="/img/home-4/cta-shape.png"
                      alt=""
                      width={500}
                      height={400}
                      aria-hidden
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
