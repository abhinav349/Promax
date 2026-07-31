import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/reveal";
import { img, type ImageKey } from "@/lib/images";
import { cn } from "@/lib/utils";

const tiles: { image: ImageKey; span: string }[] = [
  { image: "exteriorTreeDeck", span: "sm:col-span-2 sm:row-span-2" },
  { image: "kitchenIsland", span: "" },
  { image: "bathroomGoldFixtures", span: "" },
  { image: "bedroomHotelStyle", span: "" },
  { image: "livingRoomFireplace", span: "" },
];

export function WorkStrip() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Portfolio"
            title="Our work speaks for itself"
            className="max-w-lg"
          />
          <Link
            href="/gallery"
            className="group flex items-center gap-2 text-sm tracking-wide uppercase text-foreground/80 hover:text-gold transition-colors shrink-0"
          >
            View Gallery
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <StaggerGroup className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] gap-4">
          {tiles.map((tile) => {
            const image = img(tile.image, 900, 75);
            return (
              <StaggerItem
                key={tile.image}
                className={cn("relative overflow-hidden group rounded-xl", tile.span)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover brightness-[0.8] saturate-[0.85] transition-[transform,filter] duration-700 ease-out group-hover:scale-110 group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
                <div className="absolute inset-0 rounded-xl border border-white/10" />
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
