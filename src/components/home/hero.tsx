"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { img } from "@/lib/images";

const HeroCanvas = dynamic(() => import("@/components/three/hero-canvas"), {
  ssr: false,
});

const easeCinematic = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fallback = img("heroFallback", 1920, 70);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink"
    >
      {reducedMotion ? (
        <Image
          src={fallback.src}
          alt={fallback.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 saturate-[0.8]"
        />
      ) : (
        <HeroCanvas scrollProgress={scrollYProgress} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-end px-6 pb-24 sm:pb-28 lg:px-10"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeCinematic, delay: 0.2 }}
          className="eyebrow"
        >
          Nova Scotia
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeCinematic, delay: 0.32 }}
          className="mt-5 max-w-3xl font-display font-medium text-5xl sm:text-7xl md:text-8xl leading-[0.98] text-balance"
        >
          We don&apos;t just clean.
          <br />
          <span className="italic text-gold">We care.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeCinematic, delay: 0.5 }}
          className="mt-7 max-w-md text-base sm:text-lg text-foreground/75 leading-relaxed text-balance"
        >
          Premium property management and cleaning for homes, rentals, and
          businesses across Nova Scotia — trusted, trained, and insured.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeCinematic, delay: 0.66 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Magnetic>
            <Button asChild size="lg" className="rounded-full px-9 h-13 text-sm tracking-wide uppercase">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-9 h-13 text-sm tracking-wide uppercase border-white/25 bg-transparent hover:bg-white/5"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeCinematic, delay: 0.9 }}
        className="absolute right-6 top-24 z-10 hidden sm:flex flex-col items-center gap-1 rounded-2xl border border-white/15 bg-background/40 px-6 py-5 text-center backdrop-blur-md lg:right-10"
      >
        <div className="flex gap-0.5 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-gold" />
          ))}
        </div>
        <span className="font-display text-3xl">4.9</span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          Average Rating
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/60 sm:left-auto sm:right-10 sm:translate-x-0"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
