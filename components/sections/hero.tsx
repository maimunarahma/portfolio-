"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site, socials, typedRoles } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { LiveDot } from "@/components/live-dot";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }
    let w = 0, c = 0, deleting = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      if (!deleting) {
        c++;
        if (c >= word.length) {
          deleting = true;
          setText(word);
          t = setTimeout(tick, 2000);
          return;
        }
      } else {
        c--;
        if (c <= 0) {
          deleting = false;
          w = (w + 1) % words.length;
        }
      }
      setText(word.slice(0, c));
      t = setTimeout(tick, deleting ? 26 : 60);
    };
    t = setTimeout(tick, 700);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

const profile = [
  { k: "ROLE", v: "FULL_STACK_DEVELOPER" },
  { k: "CAMPUS", v: "JUST · JASHORE, BD" },
  { k: "STAGE", v: "FINAL_YEAR" },
];

export function Hero() {
  const typed = useTypewriter(typedRoles);

  return (
    <section className="grid items-center gap-[clamp(40px,6vw,80px)] py-[clamp(56px,9vw,112px)] pb-[clamp(64px,9vw,120px)] lg:grid-cols-2">
      <div className="flex flex-col gap-7">
        <Reveal>
          <div className="flex items-center gap-2.5 font-mono text-xs tracking-[0.1em] text-primary">
            <LiveDot />
            INITIALIZING_DEVELOPER_PROFILE...
          </div>
        </Reveal>
        <Reveal className="flex flex-col gap-3.5">
          <span className="font-mono text-[15px] text-muted-foreground">Hello, I&apos;m</span>
          <h1 className="font-display text-[clamp(44px,6.4vw,84px)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance">
            {site.name}
          </h1>
          <p
            aria-label={site.role}
            className="mt-1.5 flex min-h-[1.4em] items-center gap-2.5 font-display text-[clamp(19px,2vw,24px)] font-medium tracking-tight text-[#c9cfcc]"
          >
            <span className="font-mono text-primary">&gt;</span>
            <span>{typed}</span>
            <span className="inline-block h-[1.05em] w-[3px] animate-blink bg-primary" />
          </p>
        </Reveal>
        <Reveal>
          <p className="max-w-[540px] text-[17px] leading-[1.65] text-[#9aa29e] text-pretty">
            I build web applications end to end — from database schemas and APIs to the interfaces people actually use.
            Currently in my final year at Jashore University of Science and Technology, turning coursework and ideas into
            working software.
          </p>
        </Reveal>
        <Reveal className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="#projects">
              Explore My Work <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={site.resume} download>
              Download Resume
            </a>
          </Button>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap gap-5 border-t border-[#1f2322] pt-2 font-mono text-[13px]">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener" className="pt-3.5 text-muted-foreground hover:text-primary">
                {s.label} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal variant="scale" className="relative w-full max-w-[460px] justify-self-center">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-[14%] animate-glow blur-2xl"
          style={{ background: "radial-gradient(closest-side,#3ddc9730,#6ea8fe14 55%,transparent 75%)" }}
        />
        <div className="relative overflow-hidden rounded-xl border bg-[#121514] shadow-[0_30px_80px_-30px_#000]">
          <div className="flex items-center justify-between border-b px-4 py-3 font-mono text-[11px] text-[#7d8682]">
            <span>~/mysha/profile</span>
            <span className="flex items-center gap-[7px]">
              <span className="size-1.5 rounded-full bg-primary" />
              ONLINE
            </span>
          </div>
          <div className="relative aspect-[4/4.3] overflow-hidden bg-[#1d3a63]">
            <Image
              src="/images/profile.png"
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover object-[50%_12%]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[30%] animate-scan border-b border-primary/60"
              style={{ background: "linear-gradient(transparent,#3ddc971a 75%,#3ddc9755)" }}
            />
            <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-[#121514]" />
          </div>
          <div className="flex flex-col px-5 pb-5 pt-1.5 font-mono text-[12.5px]">
            {profile.map((r) => (
              <div key={r.k} className="grid grid-cols-[96px_1fr] gap-3 border-b border-dashed py-[9px]">
                <span className="text-[#6c7571]">{r.k}</span>
                <span>{r.v}</span>
              </div>
            ))}
            {site.openToWork && (
              <div className="grid grid-cols-[96px_1fr] gap-3 border-b border-dashed py-[9px]">
                <span className="text-[#6c7571]">STATUS</span>
                <span className="text-primary">OPEN_TO_OPPORTUNITIES</span>
              </div>
            )}
            <div className="flex items-center gap-2 pt-3.5 text-muted-foreground">
              <span className="text-primary">$</span>
              <span>whoami</span>
              <span className="inline-block h-4 w-2 animate-blink bg-primary" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
