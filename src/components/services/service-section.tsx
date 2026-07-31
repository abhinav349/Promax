import { CalendarClock, Sparkles, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import type { ServiceCategory } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const tagConfig = {
  "most requested": { icon: Star, label: "Most Requested" },
  "add-on": { icon: Sparkles, label: "Add-On" },
  seasonal: { icon: CalendarClock, label: "Seasonal" },
} as const;

export function ServiceSection({ category }: { category: ServiceCategory }) {
  return (
    <section
      id={category.id}
      className="scroll-mt-40 border-b border-white/10 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={`${category.items.length} services`}
          title={category.title}
          subtitle={category.subtitle}
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {category.items.map((item) => {
            const tag = item.tag ? tagConfig[item.tag] : null;
            const TagIcon = tag?.icon;
            return (
              <StaggerItem key={item.name}>
                <h3 className="font-display text-xl sm:text-2xl leading-snug text-foreground">
                  {item.name}
                </h3>
                <div className="mt-1.5 border-b border-dashed border-white/10 pb-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {tag && TagIcon && (
                  <span
                    className={cn(
                      "mt-2 inline-flex items-center gap-1.5 text-[11px] tracking-wide uppercase text-gold-soft/80"
                    )}
                  >
                    <TagIcon className="size-3" />
                    {tag.label}
                  </span>
                )}
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
