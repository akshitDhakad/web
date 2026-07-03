"use client";

import {
  CardParallaxImage,
  CardParallaxWrap,
} from "@/features/pages/components/card-parallax-image";

export function CardCtaShapes() {
  return (
    <div className="img-shapes" aria-hidden>
      <div className="shape">
        <CardParallaxImage
          src="/img/card/right-arrow.png"
          alt=""
          parallax={{ x: 0, y: 0, rotateZ: 20 }}
        />
      </div>
      <CardParallaxWrap className="shape" parallax={{ x: 200, y: 90, rotateZ: 0 }}>
        <div className="fly-msg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/card/mail.png" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/card/wings-1.png" alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/card/wings-2.png" alt="" />
        </div>
      </CardParallaxWrap>
      <div className="shape">
        <CardParallaxImage
          src="/img/card/postbox.png"
          alt=""
          parallax={{ x: 0, y: 0, rotateZ: -6 }}
        />
      </div>
      <div className="shape">
        <CardParallaxImage
          src="/img/card/cloud.png"
          alt=""
          parallax={{ x: -200, y: 0, rotateZ: 0 }}
        />
      </div>
    </div>
  );
}
