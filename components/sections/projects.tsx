"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Accent, SectionEyebrow } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const SLIDE_MS = 6500;

export function Projects() {
  const autoplay = useRef(Autoplay({ delay: SLIDE_MS, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 32 }, [autoplay.current]);
  const [selected, setSelected] = useState(0);
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelected(emblaApi.selectedScrollSnap());
      setTick((t) => t + 1);
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const go = useCallback(
    (i: number) => {
      emblaApi?.scrollTo(i);
      autoplay.current.reset();
    },
    [emblaApi]
  );
  const prev = () => {
    emblaApi?.scrollPrev();
    autoplay.current.reset();
  };
  const next = () => {
    emblaApi?.scrollNext();
    autoplay.current.reset();
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="projects" className="flex flex-col gap-[clamp(32px,4.5vw,48px)] border-t border-[#1f2322] py-[clamp(72px,10vw,136px)]">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-[18px]">
          <Reveal>
            <SectionEyebrow index="04" label="PROJECTS" />
          </Reveal>
          <Reveal>
            <h2 className="font-display text-[clamp(36px,5vw,60px)] font-semibold leading-[1.02] tracking-[-0.04em]">
              Selected <Accent>work</Accent>
            </h2>
          </Reveal>
        </div>
        <Reveal className="flex items-center gap-3.5">
          <span className="font-mono text-[13px] text-muted-foreground">
            <span className="text-foreground">{pad(selected + 1)}</span> / {pad(projects.length)}
          </span>
          {/* <Button variant="outline" size="icon" aria-label="Previous project" onClick={prev} className="bg-card hover:-translate-x-0.5">
            <ArrowLeft />
          </Button>
          <Button size="icon" aria-label="Next project" onClick={next} className="hover:translate-x-0.5 hover:translate-y-0">
            <ArrowRight />
          </Button> */}
        </Reveal>
      </div>

      <Reveal variant="scale">
        <div
          className="rounded-[22px] p-px"
          style={{ background: "linear-gradient(135deg,#3ddc9766,#242827 35%,#242827 65%,#6ea8fe55)" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setTick((t) => t + 1);
          }}
        >
          <div ref={emblaRef} className="overflow-hidden rounded-[21px] bg-[#0f1211]" aria-roledescription="carousel">
            <div className="flex touch-pan-y">
              {projects.map((p, i) => (
                <article
                  key={p.title}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${projects.length}`}
                  aria-hidden={i !== selected}
                  className={cn(
                    "grid min-w-0 flex-[0_0_100%] items-center gap-[clamp(28px,4vw,52px)] p-[clamp(22px,3.6vw,48px)] transition-opacity duration-700 lg:grid-cols-2",
                    i === selected ? "opacity-100" : "opacity-[.35]"
                  )}
                  style={{ background: `radial-gradient(110% 80% at 100% 0%, ${p.accent}16, transparent 60%), #0f1211` }}
                >
                  <div className="flex min-w-0 flex-col gap-5">
                    <div className="flex flex-wrap gap-2">
                      {p.badges.map((b) => (
                        <Badge key={b} variant="outline">
                          {b}
                        </Badge>
                      ))}
                    </div>
                    <span className="font-mono text-xs" style={{ color: p.accent }}>
                      {pad(i + 1)} — {p.category}
                    </span>
                    <h3
                      className={cn(
                        "font-display text-[clamp(32px,4.2vw,54px)] font-semibold leading-none tracking-[-0.045em]",
                        p.draft && "text-brand-draft"
                      )}
                    >
                      {p.title}
                    </h3>
                    <p className="max-w-[520px] text-[16.5px] leading-[1.7] text-[#a3aba7] text-pretty">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span key={t} className="rounded-[5px] bg-[#18201d] px-2.5 py-1 font-mono text-[11px] text-[#7fd8ad]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <Button asChild>
                        <a href={p.live ?? "#projects"} target="_blank" rel="noopener" tabIndex={i === selected ? 0 : -1}>
                          {p.live ? "Visit live site" : "Live demo"} <ArrowUpRight />
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href={p.source ?? "#projects"} target="_blank" rel="noopener" tabIndex={i === selected ? 0 : -1}>
                          Source code
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="min-w-0 overflow-hidden rounded-[14px] border border-[#2a302e] bg-[#141817] shadow-[0_30px_70px_-30px_#000]">
                    <div className="flex items-center gap-2.5 border-b bg-card px-3.5 py-2.5">
                      <span className="flex gap-1.5">
                        <span className="size-[9px] rounded-full bg-[#3a3f3d]" />
                        <span className="size-[9px] rounded-full bg-[#3a3f3d]" />
                        <span className="size-[9px] rounded-full bg-[#3a3f3d]" />
                      </span>
                      <span className="min-w-0 flex-1 truncate rounded-[5px] bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                        {p.url ?? "project-preview.app"}
                      </span>
                    </div>
                    <div className="relative grid aspect-[16/10] place-items-center overflow-hidden bg-[repeating-linear-gradient(135deg,#141817_0_10px,#171b1a_10px_20px)]">
                      {p.url ? (
                        <iframe
                          src={p.url}
                          title={`${p.title} live preview`}
                          loading="lazy"
                          tabIndex={-1}
                          className="pointer-events-none absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[.4] border-0 bg-[#0a0b0b]"
                        />
                      ) : (
                        <span className="font-mono text-[11px] tracking-[0.08em] text-[#5d6662]">[ project screenshot ]</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div role="tablist" aria-label="Projects" className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-3">
        {projects.map((p, i) => (
          <button
            key={p.title}
            role="tab"
            aria-selected={i === selected}
            onClick={() => go(i)}
            className="flex flex-col gap-3 text-left"
          >
            <span className="relative h-0.5 w-full overflow-hidden rounded bg-border">
              {i === selected && (
                <span
                  key={`${i}-${tick}`}
                  className="absolute inset-0 origin-left motion-safe:animate-[fill_linear_forwards]"
                  style={{
                    background: p.accent,
                    animationDuration: `${SLIDE_MS}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              )}
            </span>
            <span className="flex flex-col gap-1">
              <span className="font-mono text-[11px]" style={{ color: i === selected ? p.accent : "#5d6662" }}>
                {pad(i + 1)}
              </span>
              <span className={cn("font-display text-base font-medium transition-colors", i === selected ? "text-foreground" : "text-[#6c7571]")}>
                {p.title}
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
