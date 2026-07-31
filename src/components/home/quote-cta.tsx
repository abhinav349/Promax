import Link from "next/link";
import Image from "next/image";
import { Phone, Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { img } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

export function QuoteCta() {
  const image = img("exteriorAngular", 1920, 75);

  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="object-cover opacity-30 saturate-[0.8]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal y={16}>
          <span className="eyebrow">Get a Free Quote</span>
        </Reveal>
        <Reveal y={26} delay={0.06}>
          <h2 className="mt-4 font-display font-medium text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-balance">
            Ready for a spotless space?
          </h2>
        </Reveal>
        <Reveal y={18} delay={0.12}>
          <p className="mt-6 text-foreground/75 text-base sm:text-lg leading-relaxed max-w-lg mx-auto text-balance">
            Join hundreds of satisfied clients who trust ProMax for their
            property care needs — get a personalized quote within 24 hours.
          </p>
        </Reveal>

        <Reveal y={16} delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-10 h-13 text-sm tracking-wide uppercase">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              <Phone className="size-4" />
              {siteConfig.phone.display}
            </a>
          </div>
        </Reveal>

        <Reveal y={14} delay={0.28}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground border-t border-white/10 pt-8">
            <span className="flex items-center gap-2">
              <Clock className="size-4 text-gold" />
              {siteConfig.hours.display}
            </span>
            <span className="hidden sm:block h-4 w-px bg-white/15" />
            <span className="flex items-center gap-2 text-center">
              <MapPin className="size-4 text-gold shrink-0" />
              {siteConfig.address.line1}, {siteConfig.address.city}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
