import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { QuoteCta } from "@/components/home/quote-cta";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at ProMax's work across Nova Scotia — residential, commercial, Airbnb turnovers, and the details in between.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our work speaks for itself"
        subtitle="A closer look at the homes, offices, and rentals we care for across Nova Scotia."
        image="differenceExterior"
      />
      <GalleryGrid />
      <QuoteCta />
    </>
  );
}
