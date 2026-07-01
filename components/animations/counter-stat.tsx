"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterStatProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

export function CounterStat({ value, suffix = "", decimals = 0 }: CounterStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString();
      }
    });
    return unsubscribe;
  }, [springValue, decimals]);

  return (
    <h1 className="counter">
      <span ref={ref}>0</span>
      {suffix}
    </h1>
  );
}
