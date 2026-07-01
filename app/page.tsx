import { About } from "@/features/home/components/about";
import { AboutTabs } from "@/features/home/components/about-tabs";
import { Blog } from "@/features/home/components/blog";
import { CTA } from "@/features/home/components/cta";
import { FAQ } from "@/features/home/components/faq";
import { Features } from "@/features/home/components/features";
import { Hero } from "@/features/home/components/hero";
import { Services } from "@/features/home/components/services";
import { Testimonials } from "@/features/home/components/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <AboutTabs />
      <FAQ />
      <Services />
      <Testimonials />
      <Blog />
      <CTA />
    </>
  );
}
