import { CalendarCheck, ClipboardCheck, Sparkles, ThumbsUp } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

const steps = [
  {
    icon: CalendarCheck,
    number: "01",
    title: "Book Online / Give Us a Call",
    body: "Fill out our quick form or give us a call to schedule your service.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "We Confirm",
    body: "Our team confirms your booking and addresses any special requests.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "We Clean",
    body: "Our trained professionals arrive on time and deliver exceptional results.",
  },
  {
    icon: ThumbsUp,
    number: "04",
    title: "You Approve",
    body: "Walk through the results. Not satisfied? We'll re-clean for free.",
  },
];

export function Process() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Simple Process"
          title="How it works"
          align="center"
          className="mx-auto max-w-xl"
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <StaggerItem
              key={step.number}
              className="flex flex-col items-start gap-4 border-t border-white/10 pt-6"
            >
              <div className="flex items-center gap-3">
                <step.icon
                  className={i % 2 === 0 ? "size-6 text-gold" : "size-6 text-slate"}
                  strokeWidth={1.4}
                />
                <span
                  className={
                    i % 2 === 0
                      ? "font-display italic text-gold-soft text-lg"
                      : "font-display italic text-slate text-lg"
                  }
                >
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-xl">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
