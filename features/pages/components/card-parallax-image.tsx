"use client";

import { useEffect, useRef, type ReactNode } from "react";

export type CardParallaxConfig = {
  x?: number;
  y?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
};

export function CardParallaxImage({
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
  parallax: CardParallaxConfig;
  className?: string;
  width?: number;
  height?: number;
  ariaHidden?: boolean;
}) {
  const ref = useCardParallax<HTMLImageElement>(parallax);

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

function useCardParallax<T extends HTMLElement>(parallax: CardParallaxConfig) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const { x = 0, y = 0, rotateX = 0, rotateY = 0, rotateZ = 0 } = parallax;

    const update = () => {
      const scrollTop = window.scrollY;
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      const viewportHeight = window.innerHeight;
      const fromScroll = Math.max(0, elementTop - viewportHeight);
      const distance = viewportHeight;
      const toScroll = fromScroll + distance;
      const clampedScroll = Math.min(Math.max(scrollTop, fromScroll), toScroll);
      const progress = (clampedScroll - fromScroll) / distance;

      element.style.transform = [
        `translate3d(${x * progress}px, ${y * progress}px, 0)`,
        `rotateX(${rotateX * progress}deg)`,
        `rotateY(${rotateY * progress}deg)`,
        `rotateZ(${rotateZ * progress}deg)`,
      ].join(" ");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [parallax]);

  return ref;
}

export function CardParallaxWrap({
  children,
  parallax,
  className,
}: {
  children: ReactNode;
  parallax: CardParallaxConfig;
  className?: string;
}) {
  const ref = useCardParallax<HTMLDivElement>(parallax);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
