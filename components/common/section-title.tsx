import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "start";
  className?: string;
  titleClassName?: string;
  delay?: number;
  animated?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  delay = 0,
  animated = true,
}: SectionTitleProps) {
  const content = (
    <div className={cn("section-title", align === "start" && "text-start")}>
      {eyebrow && <span className="short-title-2">{eyebrow}</span>}
      <h1 className={titleClassName}>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );

  if (!animated) {
    return <div className={className}>{content}</div>;
  }

  return (
    <FadeIn delay={delay} className={className}>
      {content}
    </FadeIn>
  );
}
