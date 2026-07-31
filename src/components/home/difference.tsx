"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { img } from "@/lib/images";

const steps = [
  {
    number: "01",
    title: "Trusted from day one",
    body: "Every team member is background-checked, fully insured, and bonded — you know exactly who's in your space.",
  },
  {
    number: "02",
    title: "Trained to a standard",
    body: "Our crews follow the same rigorous checklist on every visit, so the result never depends on who shows up.",
  },
  {
    number: "03",
    title: "A guarantee that means it",
    body: "Not satisfied with a spot we missed? We come back and re-clean it, free — no questions asked.",
  },
];

export function Difference() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const items = stepRefs.current.filter(Boolean) as HTMLDivElement[];

        gsap.set(items.slice(1), { opacity: 0.25 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=140%",
            scrub: 0.6,
            pin: true,
            pinType: "transform",
          },
        });

        items.forEach((item, i) => {
          if (i === 0) return;
          tl.to(
            items[i - 1],
            { opacity: 0.25, duration: 0.3 },
            i * 0.6
          ).to(
            item,
            { opacity: 1, duration: 0.3 },
            i * 0.6
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const image = img("differenceExterior", 1400, 78);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background lg:h-[100svh] lg:min-h-[600px]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:h-full lg:grid-cols-2 lg:items-center lg:px-10 lg:py-0">
        <div className="relative order-2 lg:order-1 flex flex-col gap-10">
          <span className="eyebrow">The ProMax Difference</span>
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="max-w-md"
            >
              <span className="font-display italic text-gold text-2xl">
                {step.number}
              </span>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl leading-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="relative order-1 lg:order-2 h-[46vh] lg:h-[72vh] w-full overflow-hidden rounded-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover brightness-[0.85] saturate-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          <div className="absolute inset-0 rounded-2xl border border-white/10" />
        </div>
      </div>
    </section>
  );
}
