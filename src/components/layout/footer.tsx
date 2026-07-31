import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Marquee } from "@/components/shared/marquee";
import { InstagramIcon, FacebookIcon } from "@/components/shared/social-icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1 flex flex-col gap-4">
          <span className="font-display text-3xl tracking-[0.08em]">PROMAX</span>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            {siteConfig.description}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-white/15 text-foreground/80 hover:border-gold hover:text-gold transition-colors"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-white/15 text-foreground/80 hover:border-gold hover:text-gold transition-colors"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="eyebrow">Explore</span>
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="eyebrow">Visit</span>
          <div className="flex gap-3 text-sm text-foreground/80">
            <MapPin className="size-4 shrink-0 mt-0.5 text-gold" />
            <span>
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}
            </span>
          </div>
          <a
            href={siteConfig.phone.href}
            className="flex gap-3 text-sm text-foreground/80 hover:text-gold transition-colors"
          >
            <Phone className="size-4 shrink-0 text-gold" />
            {siteConfig.phone.display}
          </a>
          <div className="flex gap-3 text-sm text-foreground/80">
            <Clock className="size-4 shrink-0 mt-0.5 text-gold" />
            <span>
              {siteConfig.hours.display}
              <br />
              <span className="text-muted-foreground">{siteConfig.hours.note}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="eyebrow">Get a Quote</span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tell us about your property and we&apos;ll get back to you within
            24 hours with a personalized quote.
          </p>
          <Link
            href="/contact"
            className="text-sm font-medium text-gold hover:text-gold-soft transition-colors underline underline-offset-4"
          >
            Request a quote &rarr;
          </Link>
        </div>
      </div>

      <Marquee className="border-t border-white/10 py-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="font-display text-2xl sm:text-3xl italic text-foreground/15 px-8 whitespace-nowrap"
          >
            Premium Property Care &mdash; Halifax
          </span>
        ))}
      </Marquee>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>
          &copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights
          reserved.
        </span>
        <span>
          Built by{" "}
          <a
            href="https://ownwebify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-gold transition-colors underline underline-offset-4"
          >
            Ownwebify
          </a>
        </span>
      </div>
    </footer>
  );
}
