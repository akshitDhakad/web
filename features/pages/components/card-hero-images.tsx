"use client";

import { CardParallaxImage } from "@/features/pages/components/card-parallax-image";

const HERO_SHAPES = [
  { src: "/img/card/hero-img-2.png", parallax: { x: -120, y: 90, rotateZ: 0 } },
  { src: "/img/card/hero-img-3.png", parallax: { x: -70, y: 0, rotateZ: 190 } },
  { src: "/img/card/hero-img-4.png", parallax: { x: -70, y: 0, rotateX: 190 } },
  { src: "/img/card/hero-img-5.png", parallax: { x: -90, y: 20, rotateZ: 0 } },
  { src: "/img/card/hero-img-6.png", parallax: { x: -250, y: 100, rotateY: 360 } },
  { src: "/img/card/hero-img-7.png", parallax: { x: 0, y: 150, rotateZ: 0 } },
  { src: "/img/card/hero-img-8.png", parallax: { x: 0, y: -90, rotateZ: 0 } },
  { src: "/img/card/hero-card.png", parallax: { x: 75, y: -20, rotateZ: 0 } },
] as const;

export function CardHeroImages() {
  return (
    <div className="hero-img">
      {HERO_SHAPES.map((shape) => (
        <div key={shape.src} className="shape">
          <CardParallaxImage src={shape.src} alt="" parallax={shape.parallax} ariaHidden />
        </div>
      ))}
      <CardParallaxImage
        className="person-img"
        src="/img/card/hero-img.png"
        alt="Banca credit card"
        parallax={{ x: 50, y: -50, rotateZ: 0 }}
        width={380}
        height={420}
      />
    </div>
  );
}
