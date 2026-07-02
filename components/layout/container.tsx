import { cn } from "@/lib/utils";

/** Max content width — slightly inset on large screens for comfortable reading */
export const CONTAINER_MAX_WIDTH = 1240;

export const containerClassName =
  "container mx-auto w-full max-w-[1240px] px-4 lg:px-6 xl:px-8";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={cn(containerClassName, className)}>{children}</Tag>;
}
