"use client";

import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/features/home/constants/faq-items";

export function FAQ() {
  return (
    <section className="faq-area-3" aria-label="Frequently asked questions">
      <div className="container mx-auto max-w-[1320px] px-4">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-0">
          <FadeIn direction="right">
            <Image
              className="faq-img h-auto w-full"
              src="/img/home-4/faq-Img.png"
              alt="FAQ illustration"
              width={540}
              height={600}
            />
          </FadeIn>

          <div className="pl-lg-50">
            <FadeIn delay={0.1}>
              <span className="subtitle">_FAQ</span>
              <h1>
                Frequently asked general <span className="underline-shape">questions</span>
              </h1>
            </FadeIn>

            <div className="faq-widget">
              <Accordion type="single" collapsible defaultValue="faq-1">
                {FAQ_ITEMS.map((item, index) => (
                  <FadeIn key={item.id} delay={0.1 + index * 0.2}>
                    <AccordionItem value={item.id}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <p>{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </FadeIn>
                ))}
              </Accordion>

              <h6 className="more-contact">
                Have more question ?{" "}
                <Link href="/contact">Contact Us</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
