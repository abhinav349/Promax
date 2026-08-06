import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { CategoryNav } from "@/components/services/category-nav";
import { ServiceSection } from "@/components/services/service-section";
import { QuoteCta } from "@/components/home/quote-cta";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential, commercial, Airbnb turnover, deep cleaning and maintenance plans from ProMax Property Management in Nova Scotia.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Care for every kind of space"
        subtitle="From a single deep clean to a standing weekly plan — every service built around trained crews and a consistent standard."
        image="kitchenIsland"
      />
      <CategoryNav />
      <div>
        {services.map((category) => (
          <ServiceSection key={category.id} category={category} />
        ))}
      </div>
      <QuoteCta />
    </>
  );
}
