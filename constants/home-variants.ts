export const HOME_VARIANT_PATHS = [
  "/loan-company",
  "/mobile-app",
  "/simple",
  "/loan-steps",
  "/finance",
  "/small-bank",
] as const;

export type HomeVariantPath = (typeof HOME_VARIANT_PATHS)[number];

export function isHomeVariantPath(pathname: string): pathname is HomeVariantPath {
  return (HOME_VARIANT_PATHS as readonly string[]).includes(pathname);
}

/** Variant pages that ship their own footer in page content — hide the global footer on these only. */
const PAGES_WITH_EMBEDDED_FOOTER = ["/finance", "/small-bank"] as const;

function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/** Pages that use the shared site footer from `components/layout/footer.tsx`. */
export function usesGlobalFooter(pathname: string): boolean {
  const path = normalizePathname(pathname);
  return !(PAGES_WITH_EMBEDDED_FOOTER as readonly string[]).includes(path);
}
