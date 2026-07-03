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

/** Pages that use the global site footer instead of an embedded variant footer. */
export function usesGlobalFooter(pathname: string): boolean {
  return pathname === "/" || pathname === "/loan-steps";
}
