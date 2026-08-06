import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { QuoteForm } from "@/components/contact/quote-form";
import { InfoPanel } from "@/components/contact/info-panel";
import { Faq } from "@/components/contact/faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free quote from ProMax Property Management — residential, commercial, and Airbnb cleaning across Nova Scotia.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Free Quote"
        title="Ready to elevate your home?"
        subtitle="Fill out the form and our team will get back to you within 24 hours with a personalized quote."
        image="windowCleaning"
      />
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16">
          <QuoteForm />
          <InfoPanel />
        </div>
      </section>
      <Faq />
    </>
  );
}
