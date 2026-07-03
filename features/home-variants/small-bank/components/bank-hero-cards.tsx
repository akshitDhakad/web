"use client";

import { useEffect, useRef } from "react";

type ParallaxConfig = {
  x?: number;
  y?: number;
  rotateZ?: number;
};

const HERO_CARDS = [
  {
    src: "/img/bank/card-3.png",
    width: 820,
    height: 566,
    animationDelay: "0.8s",
    parallax: { x: 0, y: 90 } satisfies ParallaxConfig,
  },
  {
    src: "/img/bank/card-2.png",
    width: 846,
    height: 591,
    animationDelay: "0.5s",
    parallax: { x: 0, y: 50 } satisfies ParallaxConfig,
  },
  {
    src: "/img/bank/card-1.png",
    width: 846,
    height: 591,
    animationDelay: "0.3s",
    parallax: null,
  },
] as const;

const HERO_SHAPES = [
  { src: "/img/bank/line.png", className: "one", parallax: null },
  {
    src: "/img/bank/Star-2.png",
    className: "two",
    parallax: { x: 0, y: 50, rotateZ: 305 } satisfies ParallaxConfig,
  },
  {
    src: "/img/bank/Star-3.png",
    className: "three",
    parallax: { x: 0, y: 0, rotateZ: 305 } satisfies ParallaxConfig,
  },
  {
    src: "/img/bank/Star-4.png",
    className: "four",
    parallax: { x: 20, y: 0, rotateZ: 305 } satisfies ParallaxConfig,
  },
] as const;

function useScrollParallax<T extends HTMLElement>(parallax: ParallaxConfig | null) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!parallax) return;

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

  return ref;
}

function ParallaxImage({
  src,
  alt,
  width,
  height,
  parallax,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  parallax: ParallaxConfig | null;
  className?: string;
}) {
  const ref = useScrollParallax<HTMLImageElement>(parallax);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
    />
  );
}

export function BankHeroCards() {
  return (
    <div className="bank-card-img">
      {HERO_CARDS.map((card) => (
        <div
          key={card.src}
          className="bank-card sb-fade-in-up"
          style={{ animationDelay: card.animationDelay }}
        >
          <ParallaxImage
            src={card.src}
            alt="Bank card"
            width={card.width}
            height={card.height}
            parallax={card.parallax}
          />
        </div>
      ))}
      {HERO_SHAPES.map((shape) => (
        <ParallaxImage
          key={shape.src}
          src={shape.src}
          alt=""
          width={shape.className === "one" ? 200 : 40}
          height={shape.className === "one" ? 100 : 40}
          parallax={shape.parallax}
          className={`shap ${shape.className}`}
        />
      ))}
    </div>
  );
}
