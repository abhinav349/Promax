import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { img, type ImageKey } from "@/lib/images";

const highlights: {
  name: string;
  category: string;
  tag: string;
  description: string;
  image: ImageKey;
}[] = [
  {
    name: "Standard Home Clean",
    category: "Residential",
    tag: "Most requested",
    description: "Kitchens, bathrooms, living spaces and bedrooms, every visit",
    image: "kitchenIsland",
  },
  {
    name: "Office Cleaning",
    category: "Commercial",
    tag: "Scheduled",
    description: "Daily or scheduled cleaning for workspaces and washrooms",
    image: "livingRoomFireplace",
  },
  {
    name: "Turnover Cleaning",
    category: "Airbnb",
    tag: "Same-day",
    description: "Guest-ready resets timed to your check-in and check-out",
    image: "bedroomHotelStyle",
  },
  {
    name: "Seasonal Deep Clean",
    category: "Deep Cleaning",
    tag: "Twice a year",
    description: "A full top-to-bottom reset, corner to corner",
    image: "bathroomGoldFixtures",
  },
];

export function ServicesHighlights() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="What We Offer"
            title="Care for every kind of space"
            className="max-w-lg"
          />
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/20 hover:bg-white/5 shrink-0"
          >
            <Link href="/services" className="flex items-center gap-2">
              All Services <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <StaggerGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const image = img(item.image, 800, 75);
            return (
              <StaggerItem key={item.name} className="group">
                <Link href="/services" className="block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover brightness-[0.82] saturate-[0.85] transition-[transform,filter] duration-700 ease-out group-hover:scale-110 group-hover:brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
                    <span className="absolute top-4 left-4 eyebrow !text-[10px] text-gold-soft">
                      {item.category}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <h3 className="font-display text-xl leading-tight text-white">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs text-white/60 leading-snug line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {item.category}
                    </span>
                    <span className="text-sm text-gold font-medium">
                      {item.tag}
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
