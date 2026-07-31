import { Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

const testimonials = [
  {
    quote:
      "ProMax transformed our office space completely. The attention to detail is incredible — every surface gleams. We switched from our old service after one trial clean.",
    name: "Sarah Mitchell",
    context: "Office Manager, TechFlow Inc.",
  },
  {
    quote:
      "As an Airbnb host, turnaround time is everything. ProMax consistently delivers spotless results in record time. My ratings went from 4.2 to 4.9 stars.",
    name: "David Chen",
    context: "Property Host, 12 Listings",
  },
  {
    quote:
      "I've used many cleaning services over the years, but ProMax is in a league of its own. Professional, punctual, and they genuinely care about quality.",
    name: "Maria Rodriguez",
    context: "Homeowner",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          align="center"
          className="mx-auto max-w-xl"
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <StaggerItem
              key={t.name}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 p-8 bg-background/40"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-gold" />
                ))}
              </div>
              <p className="font-display text-xl leading-relaxed italic text-foreground/90 text-balance">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-2">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.context}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
