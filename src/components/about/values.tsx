import { GraduationCap, Leaf, ShieldCheck, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    body: "Fully insured, bonded, and background-checked team members you can count on.",
  },
  {
    icon: GraduationCap,
    title: "Trained Professionals",
    body: "Our staff undergoes rigorous training to meet the highest industry standards.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    body: "We use only environmentally safe products — tough on dirt, gentle on health.",
  },
  {
    icon: Trophy,
    title: "100% Satisfaction",
    body: "Not happy? We'll re-clean for free. Your satisfaction is our guarantee.",
  },
];

export function Values() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Excellence is Our Habit"
          title="Four things we never skip"
          align="center"
          className="mx-auto max-w-xl"
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <StaggerItem
              key={value.title}
              className="flex flex-col items-start gap-4 border-t border-white/10 pt-6"
            >
              <value.icon
                className={i % 2 === 0 ? "size-6 text-gold" : "size-6 text-slate"}
                strokeWidth={1.4}
              />
              <h3 className="font-display text-xl">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
