"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services-data";

export function CategoryNav() {
  const [active, setActive] = useState(services[0].id);
  const lenis = useLenis();

  useEffect(() => {
    const sections = services
      .map((c) => document.getElementById(c.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 120;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    if (lenis) {
      lenis.scrollTo(top, { duration: 1.1 });
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <div className="sticky top-[64px] sm:top-[76px] z-30 border-b border-white/10 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6 lg:px-10 no-scrollbar">
        {services.map((category) => (
          <button
            key={category.id}
            onClick={() => handleClick(category.id)}
            className={cn(
              "relative shrink-0 px-4 py-4 text-xs sm:text-sm tracking-wide uppercase transition-colors whitespace-nowrap",
              active === category.id
                ? "text-gold"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {category.title}
            {active === category.id && (
              <span className="absolute bottom-0 left-4 right-4 h-px bg-gold" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
