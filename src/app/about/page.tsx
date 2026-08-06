import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Story } from "@/components/about/story";
import { Values } from "@/components/about/values";
import { Spotlight } from "@/components/about/spotlight";
import { Stats } from "@/components/about/stats";
import { QuoteCta } from "@/components/home/quote-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind ProMax Property Management in Nova Scotia — trusted, trained, and insured property care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="We don't just clean, we care"
        subtitle="ProMax brings trained, background-checked crews and a consistent standard to homes, rentals, and businesses across Nova Scotia."
        image="livingRoomFireplace"
      />
      <Story />
      <Stats />
      <Values />
      <Spotlight />
      <QuoteCta />
    </>
  );
}
