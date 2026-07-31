import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { img } from "@/lib/images";

export function Spotlight() {
  const image = img("glovesHeart", 1920, 78);

  return (
    <section className="relative h-[70vh] min-h-[520px] overflow-hidden bg-ink">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="object-cover brightness-[0.55] saturate-[0.7]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/50" />

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-4xl px-6 pb-16 text-center">
          <Reveal y={20}>
            <p className="font-display italic text-3xl sm:text-4xl md:text-5xl leading-[1.2] text-balance">
              &ldquo;We don&apos;t just clean a space. We treat it like
              we&apos;re getting it ready for someone we care about.&rdquo;
            </p>
          </Reveal>
          <Reveal y={14} delay={0.1}>
            <p className="mt-6 eyebrow">The ProMax Team</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
