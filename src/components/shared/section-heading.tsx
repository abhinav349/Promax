import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal y={12}>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal y={20} delay={0.05}>
        <h2
          className={cn(
            "font-display font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal y={16} delay={0.1}>
          <p className="max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed text-balance">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
