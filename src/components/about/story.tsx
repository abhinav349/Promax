import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { img } from "@/lib/images";

export function Story() {
  const image = img("livingRoomCozy", 1200, 78);

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center px-6 lg:px-10">
        <div>
          <Reveal y={14}>
            <span className="eyebrow">Our Story</span>
          </Reveal>
          <Reveal y={26} delay={0.05}>
            <h2 className="mt-4 font-display font-medium text-4xl sm:text-5xl leading-[1.08] text-balance">
              Property care, built for Halifax
            </h2>
          </Reveal>
          <Reveal y={18} delay={0.12}>
            <div className="mt-6 flex flex-col gap-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                ProMax started with a simple idea: property care in Halifax
                deserved better than a rotating cast of one-off cleaners.
                Homeowners, hosts, and property managers needed a team they
                could actually rely on — the same standard, every visit.
              </p>
              <p>
                Today we look after residential homes, commercial spaces, and
                short-term rentals across the city — background-checked
                staff, eco-friendly products, and a checklist that doesn&apos;t
                change depending on who&apos;s on shift.
              </p>
              <p>
                We&apos;re not the biggest cleaning company in Halifax. We&apos;d
                rather be the one you trust with a key.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal y={30} className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover brightness-[0.85] saturate-[0.85]"
          />
          <div className="absolute inset-0 rounded-2xl border border-white/10" />
        </Reveal>
      </div>
    </section>
  );
}
