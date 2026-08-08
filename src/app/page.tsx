import { Hero } from "@/components/home/hero";
import { Difference } from "@/components/home/difference";
import { ServicesHighlights } from "@/components/home/services-highlights";
import { PropertyManagement } from "@/components/home/property-management";
import { TrustMarquee } from "@/components/home/trust-marquee";
import { WorkStrip } from "@/components/home/work-strip";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";
import { QuoteCta } from "@/components/home/quote-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Difference />
      <ServicesHighlights />
      <PropertyManagement />
      <TrustMarquee />
      <WorkStrip />
      <Process />
      <Testimonials />
      <QuoteCta />
    </>
  );
}
