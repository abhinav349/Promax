import { CountUp } from "@/components/shared/count-up";
import { Reveal } from "@/components/shared/reveal";

const stats = [
  { value: 500, suffix: "+", label: "Happy clients served" },
  { value: 5, suffix: "+", label: "Years in business" },
  { value: 6, suffix: "", label: "Days a week, open" },
  { value: 100, suffix: "%", label: "Satisfaction guarantee" },
];

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} y={20} className="text-center lg:text-left">
            <p className="font-display text-5xl sm:text-6xl text-gold">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-snug">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
