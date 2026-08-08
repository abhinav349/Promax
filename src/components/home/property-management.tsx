import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Residential Package",
    subtitle: "For single-family homes & townhouses",
    services: [
      "Lawn mowing",
      "Snow plowing",
      "Pressure washing",
      "Seasonal cleaning",
    ],
    popular: true,
  },
  {
    name: "Commercial & Multi-Unit Package",
    subtitle: "For offices, retail and strata buildings",
    services: [
      "Snow plowing (lots & walkways)",
      "Lawn & grounds care",
      "Pressure washing (common areas)",
      "Common area cleaning",
    ],
  },
  {
    name: "Seasonal Refresh Package",
    subtitle: "One-time or seasonal exterior upkeep",
    services: [
      "Deck staining",
      "Driveway sealing",
      "Pressure washing",
      "Spring / fall cleanup",
    ],
  },
];

export function PropertyManagement() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Property Management"
          title="Packages for every property"
          subtitle="Lawn mowing, snow plowing, pressure washing, deck staining, driveway sealing and cleaning — bundled into a plan built around your property. Not sure what fits? Reach out and we'll put together a custom quote."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <StaggerItem
              key={pkg.name}
              className={cn(
                "relative flex flex-col gap-6 rounded-2xl border p-8",
                pkg.popular
                  ? "border-gold/40 bg-background/60"
                  : "border-white/10 bg-background/40"
              )}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-8 eyebrow !text-[10px] bg-ink px-2 text-gold-soft">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="font-display text-2xl leading-tight">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {pkg.subtitle}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {pkg.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-2.5 text-sm text-foreground/85"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
                    {service}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={pkg.popular ? "default" : "outline"}
                className="mt-auto rounded-full border-white/20 h-11 text-xs tracking-wide uppercase"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/10 pt-10">
          <p className="text-sm text-muted-foreground text-center">
            Every property is different — tell us what yours needs and
            we&apos;ll build a package around it.
          </p>
          <a
            href={siteConfig.phone.href}
            className="flex items-center gap-2 text-sm text-gold hover:text-gold-soft transition-colors shrink-0"
          >
            <Phone className="size-3.5" />
            {siteConfig.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
