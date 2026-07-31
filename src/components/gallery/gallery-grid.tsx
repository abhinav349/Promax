"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { img } from "@/lib/images";
import { galleryItems, type GalleryItem } from "@/lib/gallery-data";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";

const categories: Array<GalleryItem["category"] | "All"> = [
  "All",
  "Residential",
  "Commercial",
  "Airbnb",
  "Detail",
];

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter]
  );

  const close = useCallback(() => {
    setLightboxIndex(null);
    lastTriggerRef.current?.focus();
  }, []);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);
  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, close, next, prev]);

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null;
  const activeImage = active ? img(active.image, 1600, 82) : null;

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-2 text-xs tracking-[0.15em] uppercase border transition-colors",
                filter === cat
                  ? "border-gold text-gold"
                  : "border-white/15 text-muted-foreground hover:border-white/35 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <StaggerGroup
          key={filter}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px] sm:auto-rows-[200px]"
        >
          {filtered.map((item, i) => {
            const image = img(item.image, 800, 75);
            return (
              <StaggerItem
                key={item.image}
                className={cn(
                  "relative overflow-hidden group cursor-pointer rounded-xl",
                  item.tall && "row-span-2"
                )}
              >
                <button
                  onClick={(e) => {
                    lastTriggerRef.current = e.currentTarget;
                    setLightboxIndex(i);
                  }}
                  className="absolute inset-0 h-full w-full"
                  aria-label={`Open image: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover brightness-[0.8] saturate-[0.85] transition-[transform,filter] duration-700 ease-out group-hover:scale-110 group-hover:brightness-95"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
                  <span className="absolute top-3 left-3 eyebrow !text-[9px] text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.category}
                  </span>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>

      <AnimatePresence>
        {active && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/92 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            onClick={close}
          >
            <button
              ref={closeButtonRef}
              onClick={close}
              aria-label="Close"
              className="absolute top-6 right-6 text-white/70 hover:text-gold transition-colors"
            >
              <X className="size-7" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 sm:left-8 text-white/60 hover:text-gold transition-colors"
            >
              <ChevronLeft className="size-9" />
            </button>

            <motion.div
              key={activeImage.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-16 aspect-[4/3] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 sm:right-8 text-white/60 hover:text-gold transition-colors"
            >
              <ChevronRight className="size-9" />
            </button>

            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/50 max-w-md text-center px-6">
              {activeImage.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
