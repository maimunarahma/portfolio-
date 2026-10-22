import { ArrowUpRight } from "lucide-react";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { LiveDot } from "@/components/live-dot";
import { Accent, SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-[clamp(36px,5vw,56px)] border-t border-[#1f2322] py-[clamp(72px,10vw,136px)]">
      <SectionHeading
        index="03"
        label="EXPERIENCE"
        title={
          <>
            Roles &amp; <Accent>leadership</Accent>
          </>
        }
        description="Where I build, organise and contribute beyond the classroom."
      />
      <ol className="flex flex-col">
        {experience.map((x) => (
          <Reveal key={x.role}>
            <li className="grid grid-cols-1 gap-x-6 lg:grid-cols-[190px_28px_minmax(0,1fr)]">
              <div className="hidden flex-col items-end gap-2.5 py-7 text-right lg:flex">
                <span className="font-mono text-[12.5px]">{x.date}</span>
                <span className="text-[13.5px] leading-snug text-[#7d8682]">{x.short}</span>
              </div>
              <div className="relative hidden justify-center lg:flex">
                <span className="absolute inset-y-0 w-px bg-border" />
                <span
                  className="relative mt-8 size-[13px] rounded-full border-2 bg-background shadow-[0_0_0_4px_hsl(var(--background))]"
                  style={{ borderColor: x.color }}
                />
              </div>
              <article className="my-3 flex min-w-0 flex-col gap-3.5 rounded-2xl border bg-card p-[clamp(20px,2.6vw,28px)] transition-colors duration-300 hover:border-[#2f5a48] hover:bg-[#131816]">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge style={{ color: x.color, background: `${x.color}1a` }}>{x.tag}</Badge>
                  {x.status && (
                    <Badge variant="live">
                      <LiveDot />
                      {x.status}
                    </Badge>
                  )}
                  <span className="ml-auto font-mono text-xs text-muted-foreground lg:hidden">{x.date}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-[clamp(19px,2vw,23px)] font-semibold leading-tight tracking-tight">{x.role}</h3>
                  <span className="text-[15px] leading-snug text-brand-blue">{x.org}</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {x.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-[#a3aba7]">
                      <span className="mt-2.5 size-[5px] flex-none rounded-full bg-primary" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                {x.action && (
                  <div className="pt-1">
                    <Button asChild variant="outline" size="sm">
                      <a href={x.action.href} target="_blank" rel="noopener">
                        {x.action.label} <ArrowUpRight />
                      </a>
                    </Button>
                  </div>
                )}
              </article>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
