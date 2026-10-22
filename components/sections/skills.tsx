import { skillGroups } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { Accent, SectionHeading } from "@/components/section-heading";
import { SkillIcon } from "@/components/skill-icon";

export function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-[clamp(36px,5vw,56px)] border-t border-[#1f2322] py-[clamp(72px,10vw,136px)]">
      <SectionHeading
        index="02"
        label="SKILLS"
        title={
          <>
            Technical <Accent>toolkit</Accent>
          </>
        }
        description="A JavaScript-first stack for shipping complete products — from schema to screen."
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,350px),1fr))] gap-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={(i % 3) * 80}>
            <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:border-[#2f5a48] hover:shadow-[0_24px_50px_-30px_#3ddc9755]">
              <div className="flex flex-col gap-1.5 border-b border-[#1f2322] px-[22px] pb-[18px] pt-[22px]">
                <div className="flex items-center gap-2.5">
                  <span className="size-2 rounded-[2px] bg-primary" />
                  <h3 className="font-display text-[19px] font-semibold tracking-tight">{g.name}</h3>
                </div>
                <span className="text-sm leading-normal text-[#7d8682]">{g.description}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                {g.items.map((s) => (
                  <div
                    key={s.name}
                    className="flex min-w-0 items-center gap-2.5 rounded-[10px] border border-[#1f2322] bg-[#0f1211] px-2.5 py-[9px] transition-colors hover:border-[#2f5a48] hover:bg-[#121a17]"
                  >
                    <span className="grid size-8 flex-none place-items-center rounded-lg bg-[#171b1a]">
                      <SkillIcon skill={s} size={19} />
                    </span>
                    <span className="truncate text-sm text-[#d5dad7]">{s.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
