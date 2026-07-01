"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/animations/fade-in";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ABOUT_TABS } from "@/features/home/constants/about-tabs";

export function AboutTabs() {
  return (
    <section className="about-tab-area bg-white" aria-label="Solutions by audience">
      <div className="container mx-auto max-w-[1320px] px-4">
        <Tabs defaultValue="freelancer" className="w-full">
          <TabsList>
            {ABOUT_TABS.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} role="tab">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="tab-content" id="myTabContent">
            {ABOUT_TABS.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} id={tab.id} role="tabpanel">
                <div className="flex flex-col items-center gap-8 pt-8 lg:flex-row">
                  <div className="w-full lg:w-5/12">
                    <FadeIn direction="right">
                      <div className="section-title text-start">
                        <h1>
                          {tab.title}{" "}
                          <span className="underline-shape">{tab.highlightedWord}</span>
                        </h1>
                        <p>{tab.description}</p>
                        <Link className="read-more" href="#">
                          Get started now <ArrowRight size={18} aria-hidden />
                        </Link>
                      </div>
                    </FadeIn>
                  </div>
                  <div className="w-full lg:w-7/12">
                    <FadeIn direction="left" delay={0.1}>
                      <Image
                        className="h-auto w-full max-w-full"
                        src={tab.image}
                        alt={tab.imageAlt}
                        width={700}
                        height={450}
                      />
                    </FadeIn>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
