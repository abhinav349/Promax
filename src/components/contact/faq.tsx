import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    q: "Do you bring your own cleaning supplies?",
    a: "Yes — our team arrives fully equipped with eco-friendly products and equipment. If you prefer we use specific products in your home, just let us know.",
  },
  {
    q: "Are you insured and bonded?",
    a: "Every ProMax team member is background-checked, fully insured, and bonded, so you can trust exactly who's in your space.",
  },
  {
    q: "What if I'm not satisfied with a clean?",
    a: "Let us know within 24 hours and we'll come back to re-clean the area at no charge. Your satisfaction is guaranteed.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. One-time cleans, weekly and bi-weekly plans are all available with no long-term commitment required.",
  },
  {
    q: "How quickly can I get a quote?",
    a: `Fill out the form and we'll get back to you within 24 hours. For urgent requests, call us directly at ${siteConfig.phone.display}.`,
  },
];

export function Faq() {
  return (
    <section className="border-t border-white/10 bg-ink py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Good to Know"
          title="Frequently asked"
          align="center"
          className="mx-auto"
        />
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="border-white/10"
            >
              <AccordionTrigger className="text-left font-display text-lg sm:text-xl hover:text-gold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
