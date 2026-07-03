"use client";

import { usePathname } from "next/navigation";

import { usesGlobalFooter } from "@/constants/home-variants";

import { Footer } from "./footer";

export function ConditionalFooter() {
  const pathname = usePathname();

  if (!usesGlobalFooter(pathname)) {
    return null;
  }

  return <Footer />;
}
