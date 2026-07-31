"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/[0.06] py-3"
          : "bg-gradient-to-b from-black/50 to-transparent py-6"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group flex flex-col leading-none" data-cursor="link">
          <span className="font-display text-2xl sm:text-3xl tracking-[0.08em] text-foreground group-hover:text-gold transition-colors">
            PROMAX
          </span>
          <span className="eyebrow mt-1 text-[10px] sm:text-[11px] text-muted-foreground group-hover:text-gold-soft transition-colors">
            Property Management
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm tracking-wide uppercase transition-colors py-1",
                    active ? "text-gold" : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={siteConfig.phone.href}
            className="flex items-center gap-2 text-sm text-foreground/80 hover:text-gold transition-colors"
          >
            <Phone className="size-3.5" />
            {siteConfig.phone.display}
          </a>
          <Button asChild size="sm" className="rounded-full px-6">
            <Link href="/contact">Free Quote</Link>
          </Button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden text-foreground"
        >
          <Menu className="size-6" />
        </button>
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="w-full sm:max-w-sm bg-background border-white/10 p-0 flex flex-col"
        >
          <SheetHeader className="border-b border-white/10 flex-row items-center justify-between px-6 py-5">
            <SheetTitle className="font-display text-2xl tracking-[0.08em]">
              PROMAX
            </SheetTitle>
            <SheetClose className="text-foreground">
              <X className="size-6" />
            </SheetClose>
          </SheetHeader>
          <div className="flex flex-col px-6 py-8 gap-1">
            <AnimatePresence>
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-3 font-display text-3xl tracking-wide border-b border-white/5",
                      pathname === link.href ? "text-gold" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="mt-auto px-6 py-8 border-t border-white/10 flex flex-col gap-4">
            <a
              href={siteConfig.phone.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-foreground/80"
            >
              <Phone className="size-4" />
              {siteConfig.phone.display}
            </a>
            <Button asChild className="rounded-full w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
