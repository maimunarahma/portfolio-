import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Accent, SectionHeading } from "@/components/section-heading";

export function Moments() {
  return (
    <section id="moments" className="flex flex-col gap-[clamp(36px,5vw,56px)] border-t border-[#1f2322] py-[clamp(72px,10vw,136px)]">
      <SectionHeading
        index="05"
        label="MOMENTS"
        title={
          <>
            IEEE <Accent>RAAICON</Accent> 2026
          </>
        }
        description="5th International Conference on Robotics, Automation, Artificial-Intelligence and Internet-of-Things · 18–19 September 2026 · Jashore University of Science and Technology."
      />
      <div className="flex flex-wrap gap-4">
        <Reveal variant="scale" className="min-w-0 flex-[1_1_300px]">
          <figure className="group relative aspect-[3/4] overflow-hidden rounded-[18px] border bg-[#141817]">
            <Image
              src="/images/raaicon-banner.jpeg"
              alt="Maimuna at the IEEE RAAICON 2026 conference banner"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover object-[50%_40%] transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1.5 bg-gradient-to-b from-transparent to-background/95 px-[22px] pb-5 pt-[60px]">
              <span className="font-mono text-[11px] tracking-[0.1em] text-primary">ROLE · 01</span>
              <span className="font-display text-[19px] font-semibold tracking-tight text-white">Technical Committee Volunteer</span>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal variant="scale" className="min-w-0 flex-[2_1_560px]">
          <figure className="group relative h-full min-h-[360px] overflow-hidden rounded-[18px] border bg-[#141817]">
            <Image
              src="/images/raaicon-session.jpeg"
              alt="Maimuna in the RAAICON 2026 session room"
              fill
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover object-[40%_50%] transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 bg-gradient-to-b from-transparent to-background/95 px-[22px] pb-5 pt-[60px]">
              <span className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] tracking-[0.1em] text-primary">ROLE · 02</span>
                <span className="font-display text-[19px] font-semibold tracking-tight text-white">Assistant Session Moderator</span>
              </span>
              <span className="rounded-full border border-[#2a302e] bg-background/80 px-2.5 py-1 font-mono text-[11px] text-[#c9cfcc]">
                SEP 2026 · JUST
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
