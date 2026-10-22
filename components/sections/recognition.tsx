import { ArrowUpRight } from "lucide-react";
import { certificates, milestones, nasa } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { LiveDot } from "@/components/live-dot";
import { Accent, SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const stageStyle = {
  done: { bar: "bg-primary", text: "text-primary" },
  active: { bar: "bg-gradient-to-r from-brand-orange to-brand-orange/30", text: "text-brand-orange" },
  pending: { bar: "bg-border", text: "text-[#6c7571]" },
} as const;

export function Recognition() {
  return (
    <section id="recognition" className="flex flex-col gap-[clamp(36px,5vw,56px)] border-t border-[#1f2322] py-[clamp(72px,10vw,136px)]">
      <SectionHeading
        index="06"
        label="RECOGNITION"
        title={
          <>
            Achievements &amp; <Accent>credentials</Accent>
          </>
        }
      />

      <Reveal variant="scale">
        <article
          className="rounded-[20px] p-px"
          style={{ background: "linear-gradient(135deg,#ff9a5c66,#242827 40%,#242827 70%,#3ddc9755)" }}
        >
          <div
            className="flex flex-col gap-[clamp(24px,3vw,36px)] rounded-[19px] p-[clamp(22px,3.6vw,44px)]"
            style={{ background: "radial-gradient(100% 120% at 100% 0%,#ff9a5c12,transparent 55%),#0f1211" }}
          >
            <div className="flex flex-wrap justify-between gap-6">
              <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-brand-orange/10 text-brand-orange">NASA SPACE APPS CHALLENGE 2026</Badge>
                  <Badge variant="live">
                    <LiveDot />
                    JOURNEY IN PROGRESS
                  </Badge>
                </div>
                <h3 className="font-display text-[clamp(28px,3.6vw,44px)] font-semibold leading-[1.05] tracking-[-0.035em]">
                  Advanced to <Accent color="#ff9a5c">Round 2</Accent>
                </h3>
                <p className="max-w-[560px] text-base leading-[1.7] text-[#a3aba7] text-pretty">
                  Our team&apos;s project, Flame in Freefall, moved on to the second round — one of 600 teams selected from more
                  than 1,100 competing. The journey is still in progress.
                </p>
                <Button asChild variant="outline" size="sm" className="h-[42px] self-start hover:border-brand-orange hover:text-brand-orange">
                  <a href="https://flame-in-freefall.vercel.app" target="_blank" rel="noopener">
                    See the project <ArrowUpRight />
                  </a>
                </Button>
              </div>
              <div className="grid min-w-0 flex-[1_1_300px] grid-cols-3 gap-px self-start overflow-hidden rounded-[14px] border bg-border">
                {nasa.stats.map((s) => (
                  <div key={s.k} className="flex flex-col gap-1.5 bg-card px-4 py-5">
                    <span
                      className={cn(
                        "font-display text-[clamp(24px,2.6vw,32px)] font-semibold tracking-[-0.03em]",
                        s.highlight && "text-brand-orange"
                      )}
                    >
                      {s.v}
                    </span>
                    <span className="text-[13px] leading-snug text-[#7d8682]">{s.k}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {nasa.stages.map((st) => (
                <div key={st.label} className="flex flex-col gap-2.5">
                  <span className={cn("h-1 rounded", stageStyle[st.tone].bar)} />
                  <span className="flex flex-col gap-0.5">
                    <span className={cn("font-mono text-[11px] tracking-[0.08em]", stageStyle[st.tone].text)}>{st.state}</span>
                    <span className="text-sm text-[#c9cfcc]">{st.label}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-[clamp(24px,4vw,40px)]">
        <div className="flex flex-col gap-3">
          <span className="pb-1.5 font-mono text-[11px] tracking-[0.12em] text-[#6c7571]">MORE MILESTONES</span>
          {milestones.map((m) => (
            <Reveal key={m.title}>
              <Card className="flex gap-[18px] rounded-[14px] p-[22px] transition-colors hover:border-[#2f5a48]">
                <span className="grid size-11 flex-none place-items-center rounded-[10px] bg-brand-blue/10 font-mono text-[13px] font-medium text-brand-blue">
                  {m.mark}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span className="font-mono text-[11px] tracking-[0.08em] text-brand-blue">{m.type}</span>
                  <span className="font-display text-lg font-semibold tracking-tight">{m.title}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{m.desc}</span>
                  <a href={m.cert} target="_blank" rel="noopener" className="mt-1.5 self-start font-mono text-xs text-primary hover:text-[#8ef0c2]">
                    View certificate ↗
                  </a>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="flex flex-col">
          <span className="pb-[18px] font-mono text-[11px] tracking-[0.12em] text-[#6c7571]">CERTIFICATES</span>
          <div className="flex flex-col border-t">
            {certificates.map((c) => (
              <Reveal key={c.title}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener"
                  className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1.5 border-b px-1 py-5 text-foreground transition-all duration-300 hover:bg-card hover:pl-3.5"
                >
                  <span className="font-display text-[17px] font-medium">{c.title}</span>
                  <span className="font-mono text-xs text-[#7d8682]">{c.year}</span>
                  <span className="font-mono text-xs text-[#6c7571]">{c.issuer}</span>
                  <span className="font-mono text-xs text-primary">View certificate ↗</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
