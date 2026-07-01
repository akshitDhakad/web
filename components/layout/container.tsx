import { cn } from "@/lib/utils";

/** Max content width — wider than Bootstrap default for modern screens */
export const CONTAINER_MAX_WIDTH = 1320;

export const containerClassName = "container mx-auto w-full max-w-[1320px] px-4";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={cn(containerClassName, className)}>{children}</Tag>;
}
