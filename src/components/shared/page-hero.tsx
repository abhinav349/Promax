"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "motion/react";
import { type ImageKey, img } from "@/lib/images";

const AmbientCanvas = dynamic(() => import("@/components/three/ambient-canvas"), {
  ssr: false,
});

const easeCinematic = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: ImageKey;
}) {
  const { src, alt } = img(image, 1920, 75);

  return (
    <section className="relative flex h-[62vh] min-h-[440px] items-end overflow-hidden bg-ink">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45 saturate-[0.8]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

      <div className="absolute inset-0 opacity-70">
        <AmbientCanvas className="!absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pb-16">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeCinematic }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeCinematic, delay: 0.08 }}
          className="mt-3 font-display font-medium text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeCinematic, delay: 0.16 }}
            className="mt-5 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed text-balance"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
