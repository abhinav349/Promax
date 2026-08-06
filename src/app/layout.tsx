import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { PageTransition } from "@/components/providers/page-transition";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/layout/custom-cursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.fullName} | ${siteConfig.region}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ProMax Nova Scotia",
    "property management Nova Scotia",
    "house cleaning Nova Scotia",
    "Airbnb turnover cleaning Nova Scotia",
    "commercial cleaning Nova Scotia",
    "residential cleaning Nova Scotia",
  ],
  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    locale: "en_CA",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0d0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-gold/30">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <div className="grain-overlay" aria-hidden="true" />
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <PageTransition>
            <main id="main-content" className="flex-1">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
