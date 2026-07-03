"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

/** Banca template styles target `body.body_dark`, not `html.dark`. */
export function ThemeBodySync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const isDark = resolvedTheme === "dark";
    document.body.classList.toggle("body_dark", isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, [resolvedTheme]);

  return null;
}
