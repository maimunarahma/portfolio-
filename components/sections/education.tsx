import { education } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { LiveDot } from "@/components/live-dot";
import { Accent, SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="education" className="flex flex-col gap-[clamp(36px,5vw,56px)] border-t border-[#1f2322] py-[clamp(72px,10vw,136px)]">
      <SectionHeading
        index="07"
        label="EDUCATION"
        title={
          <>
            Academic <Accent>foundation</Accent>
          </>
        }
      />
      <Reveal variant="scale">
        <div
          className="flex flex-wrap overflow-hidden rounded-[18px] border"
          style={{ background: "radial-gradient(90% 120% at 0% 0%,#3ddc9712,transparent 55%),hsl(var(--card))" }}
        >
          <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-[18px] p-[clamp(26px,4vw,48px)]">
            <Badge className="self-start">
              <LiveDot />
              FINAL YEAR · CLASS OF {education.end}
            </Badge>
            <h3 className="font-display text-[clamp(26px,3.2vw,38px)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance">
              {education.degree}
            </h3>
            <span className="text-[17px] text-[#a3aba7]">{education.school}</span>
            <span className="font-mono text-[13px] text-[#7d8682]">{education.location}</span>
            <div className="flex flex-col gap-2.5 pt-2.5">
              <div className="flex justify-between font-mono text-[11px] text-[#7d8682]">
                <span>{education.start}</span>
                <span>{education.end}</span>
              </div>
              <div className="h-1 overflow-hidden rounded bg-[#1f2322]">
                <div className="h-full w-[85%] rounded bg-gradient-to-r from-brand-green to-brand-blue" />
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_360px] flex-col border-l p-[clamp(26px,4vw,48px)] font-mono text-[13px]">
            {education.rows.map((r) => (
              <div key={r.k} className="grid grid-cols-[120px_1fr] gap-3.5 border-b border-[#1b1f1e] py-3.5">
                <span className="text-[#6c7571]">{r.k}</span>
                <span className="leading-normal">{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
