import { Marquee } from "@/components/shared/marquee";

const words = [
  "Insured & Bonded",
  "Background-Checked Staff",
  "Trained Professionals",
  "Eco-Friendly Products",
  "Satisfaction Guaranteed",
  "Flexible Scheduling",
];

export function TrustMarquee() {
  return (
    <div className="relative border-y border-white/10 bg-ink py-6 sm:py-8">
      <Marquee>
        {words.map((word, i) => (
          <span
            key={word}
            className="flex items-center gap-6 sm:gap-10 px-6 sm:px-10"
          >
            <span className="font-display text-2xl sm:text-4xl italic text-foreground/90 whitespace-nowrap">
              {word}
            </span>
            <span className="text-gold text-2xl" aria-hidden="true">
              {i % 2 === 0 ? "~" : "•"}
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
