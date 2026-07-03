"use client";

import { useEffect, useRef } from "react";

type ParallaxConfig = {
  x?: number;
  y?: number;
  rotateZ?: number;
};

export function FinanceParallaxImage({
  src,
  alt,
  parallax,
  className,
  width,
  height,
  ariaHidden,
}: {
  src: string;
  alt: string;
  parallax: ParallaxConfig;
  className?: string;
  width?: number;
  height?: number;
  ariaHidden?: boolean;
}) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const { x = 0, y = 0, rotateZ = 0 } = parallax;

    const update = () => {
      const scrollTop = window.scrollY;
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      const viewportHeight = window.innerHeight;
      const fromScroll = Math.max(0, elementTop - viewportHeight);
      const distance = viewportHeight;
      const toScroll = fromScroll + distance;
      const clampedScroll = Math.min(Math.max(scrollTop, fromScroll), toScroll);
      const progress = (clampedScroll - fromScroll) / distance;
      const translateX = x * progress;
      const translateY = y * progress;
      const rotation = rotateZ * progress;

      element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotateZ(${rotation}deg)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [parallax]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      aria-hidden={ariaHidden}
      decoding="async"
    />
  );
}
