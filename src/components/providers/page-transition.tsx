"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";

const easeCinematic = [0.16, 1, 0.3, 1] as const;

function ScrollToTopOnRoute() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <ScrollToTopOnRoute />
      <AnimatePresence mode="wait" initial={false}>
        {/*
          Opacity-only on purpose: animating `transform`/`filter` here would make
          this wrapper a new CSS containing block for any `position: fixed`
          descendant (e.g. GSAP ScrollTrigger pins), silently breaking them.
        */}
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: easeCinematic }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
