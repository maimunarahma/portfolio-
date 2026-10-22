import { allSkills } from "@/lib/data";
import { SkillIcon } from "@/components/skill-icon";

export function TechMarquee() {
  const items = [...allSkills, ...allSkills];
  return (
    <div
      aria-label="Technologies"
      className="relative overflow-hidden border-y border-[#1f2322] bg-[#101312] py-5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
    >
      <div className="flex w-max animate-marquee gap-3.5 pl-3.5">
        {items.map((s, i) => (
          <span
            key={`${s.name}-${i}`}
            aria-hidden={i >= allSkills.length}
            className="inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-[#1f2322] bg-[#0f1211] py-2.5 pl-3 pr-[18px]"
          >
            <SkillIcon skill={s} size={24} />
            <span className="font-display text-[17px] font-medium text-[#d5dad7]">{s.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
