import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function InfoPanel() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.address.mapsQuery
  )}&output=embed`;

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-2xl border border-white/10 bg-card/40 p-8">
        <h3 className="font-display text-2xl mb-6">Get in Touch</h3>
        <div className="flex flex-col gap-5 text-sm">
          <div className="flex gap-3">
            <MapPin className="size-4 shrink-0 mt-0.5 text-gold" />
            <span className="text-foreground/85">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}
            </span>
          </div>
          <a
            href={siteConfig.phone.href}
            className="flex gap-3 text-foreground/85 hover:text-gold transition-colors"
          >
            <Phone className="size-4 shrink-0 text-gold" />
            {siteConfig.phone.display}
          </a>
          <a
            href={siteConfig.email.href}
            className="flex gap-3 text-foreground/85 hover:text-gold transition-colors"
          >
            <Mail className="size-4 shrink-0 text-gold" />
            {siteConfig.email.display}
          </a>
          <div className="flex gap-3">
            <Clock className="size-4 shrink-0 mt-0.5 text-gold" />
            <span className="text-foreground/85">
              {siteConfig.hours.display}
              <br />
              <span className="text-muted-foreground">
                {siteConfig.hours.note}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 grayscale-[40%] contrast-[1.05] hover:grayscale-0 transition-all duration-500">
        <iframe
          title="ProMax service area map"
          src={mapSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
