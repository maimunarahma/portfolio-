import Image from "next/image";
import { pillars, profileRows, site } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Accent, SectionEyebrow } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="flex flex-wrap items-start gap-[clamp(36px,5vw,64px)] py-[clamp(72px,10vw,136px)]">
      <Reveal variant="scale" className="min-w-0 max-w-[420px] flex-[1_1_300px] lg:sticky lg:top-[110px]">
        <Card className="overflow-hidden rounded-[18px]">
          <div
            className="flex items-center gap-4 border-b border-[#1f2322] p-6"
            style={{ background: "radial-gradient(120% 140% at 0% 0%,#3ddc9714,transparent 60%)" }}
          >
            <Image
              src="/images/profile.png"
              alt=""
              width={60}
              height={60}
              className="size-[60px] rounded-[14px] border object-cover object-[50%_15%]"
            />
            <div className="flex min-w-0 flex-col gap-1">
              <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
              <span className="text-sm text-muted-foreground">{site.role}</span>
            </div>
          </div>
          <div className="flex flex-col px-6 py-2">
            {profileRows.map((r) => (
              <div key={r.k} className="flex justify-between gap-4 border-b border-[#1b1f1e] py-3.5 text-sm">
                <span className="text-[#7d8682]">{r.k}</span>
                <span className="text-right">{r.v}</span>
              </div>
            ))}
            <div className="flex justify-between gap-4 py-3.5 text-sm">
              <span className="text-[#7d8682]">Status</span>
              <span className="text-right text-primary">{site.openToWork ? "Open to opportunities" : "Studying"}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 px-6 pb-6 pt-2">
            <Button asChild variant="outline" size="sm" className="h-11">
              <a href={site.resume} download>
                Resume ↓
              </a>
            </Button>
            <Button asChild size="sm" className="h-11 hover:translate-y-0">
              <a href="#contact">Let&apos;s talk</a>
            </Button>
          </div>
        </Card>
      </Reveal>

      <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-7">
        <Reveal>
          <SectionEyebrow index="01" label="ABOUT ME" />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-[clamp(34px,4.6vw,58px)] font-semibold leading-[1.04] tracking-[-0.04em] text-balance">
            A developer who owns the <Accent>whole stack.</Accent>
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-[clamp(18px,1.7vw,21px)] leading-relaxed text-[#c9cfcc] text-pretty">
            I&apos;m a final-year Computer Science and Engineering student at Jashore University of Science and Technology. I
            design the data, write the API and build the interface — with care for how it reads and how it feels.
          </p>
        </Reveal>
        <Reveal>
          <p className="text-[16.5px] leading-[1.75] text-[#9aa29e] text-pretty">
            Most of my learning happens by building: taking an idea from a sketch to something deployed, then refining it.
            Alongside my contract development work, I&apos;m Webmaster for the founding committee of the IEEE Computer
            Society JUST Student Branch, and I volunteer at technical events like IEEE RAAICON 2026.
          </p>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-3 pt-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Card className="flex h-full flex-col gap-3 rounded-[14px] p-[22px] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#2f5a48]">
                <span className="grid size-[38px] place-items-center rounded-[10px] bg-primary/10 font-mono text-[13px] font-medium text-primary">
                  {p.glyph}
                </span>
                <span className="font-display text-lg font-semibold tracking-tight">{p.title}</span>
                <span className="text-[14.5px] leading-relaxed text-muted-foreground">{p.desc}</span>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
