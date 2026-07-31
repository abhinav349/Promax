# PROMAX — Premium Property Management & Cleaning

A cinematic, dark-luxury marketing site for ProMax, built on Next.js 16 +
React 19 with GSAP/Lenis scroll storytelling and a React Three Fiber hero
scene.

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind CSS 4 + Shadcn UI (radix-nova style)
- Motion (Framer Motion) for entrance/hover animation
- GSAP + ScrollTrigger for pinned, scroll-scrubbed storytelling
- Lenis for smooth scrolling, bridged to GSAP's ScrollTrigger
- React Three Fiber + Drei for the hero's WebGL scene (with a static-image
  fallback under `prefers-reduced-motion`)

## Structure

```
src/app/            – routes: /, /about, /services, /gallery, /contact
src/components/      – page sections, grouped by page + shared/ui/three/layout
src/lib/             – site content: site-config, images, services-data, gallery-data
```

## Run locally

```bash
npm install
npm run dev
```

## Hosting

### Vercel (recommended)
1. Push this repo to GitHub (`abhinav349/Promax`)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Framework Preset: **Next.js** (auto-detected)
4. Deploy — Vercel runs `npm run build` automatically
