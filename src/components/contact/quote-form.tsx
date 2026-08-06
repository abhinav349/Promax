"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const SERVICE_TYPES = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Airbnb & Short-Term",
  "Deep Cleaning",
  "Regular Maintenance",
];

const PROPERTY_SIZES = [
  "Studio / 1 Bedroom",
  "2-3 Bedrooms",
  "4-5 Bedrooms",
  "6+ Bedrooms",
  "Commercial Space",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  propertySize: string;
  details: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  serviceType: "",
  propertySize: "",
  details: "",
};

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.serviceType ||
      !form.propertySize
    ) {
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New ProMax Quote Request",
          _template: "table",
          _captcha: "false",
          "First Name": form.firstName,
          "Last Name": form.lastName,
          Email: form.email,
          Phone: form.phone,
          "Service Type": form.serviceType,
          "Property Size": form.propertySize,
          Details: form.details,
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong sending your request. Please call or email us directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start gap-5 border border-white/10 bg-card/40 p-8 sm:p-10"
      >
        <CheckCircle2 className="size-10 text-gold" strokeWidth={1.3} />
        <div>
          <h3 className="font-display text-3xl">Quote request sent</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
            Thank you, {form.firstName}. We&apos;ll get back to you within 24
            hours with a personalized quote.
          </p>
        </div>
        <Button
          variant="outline"
          className="rounded-full border-white/20"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
        >
          Submit another request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">
            First name <span className="text-gold">*</span>
          </Label>
          <Input
            id="firstName"
            required
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="First name"
            className="rounded-lg h-12 bg-transparent border-white/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">
            Last name <span className="text-gold">*</span>
          </Label>
          <Input
            id="lastName"
            required
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Last name"
            className="rounded-lg h-12 bg-transparent border-white/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">
            Email address <span className="text-gold">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className="rounded-lg h-12 bg-transparent border-white/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">
            Phone number <span className="text-gold">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(902) 555-0123"
            className="rounded-lg h-12 bg-transparent border-white/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="serviceType">
            Service type <span className="text-gold">*</span>
          </Label>
          <Select
            value={form.serviceType}
            onValueChange={(v) => update("serviceType", v)}
          >
            <SelectTrigger
              id="serviceType"
              className="rounded-lg h-12 w-full bg-transparent border-white/20"
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_TYPES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="propertySize">
            Property size <span className="text-gold">*</span>
          </Label>
          <Select
            value={form.propertySize}
            onValueChange={(v) => update("propertySize", v)}
          >
            <SelectTrigger
              id="propertySize"
              className="rounded-lg h-12 w-full bg-transparent border-white/20"
            >
              <SelectValue placeholder="Select a size" />
            </SelectTrigger>
            <SelectContent>
              {PROPERTY_SIZES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="details">Additional details (optional)</Label>
        <Textarea
          id="details"
          value={form.details}
          onChange={(e) => update("details", e.target.value)}
          placeholder="Anything else we should know?"
          className="rounded-lg min-h-32 bg-transparent border-white/20"
        />
      </div>

      <p className="text-xs text-muted-foreground">
        <span className="text-gold">*</span> Required fields
      </p>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="rounded-full h-13 mt-2 text-sm tracking-wide uppercase"
      >
        {submitting ? "Sending..." : "Request Free Quote"}
      </Button>

      <a
        href={siteConfig.phone.href}
        className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
      >
        <Phone className="size-3.5" />
        Prefer to talk? Call {siteConfig.phone.display}
      </a>
    </form>
  );
}
