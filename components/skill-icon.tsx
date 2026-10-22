/* eslint-disable @next/next/no-img-element */
import type { Skill } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SkillIcon({ skill, size = 20, className }: { skill: Skill; size?: number; className?: string }) {
  if (skill.icon) {
    return (
      <img
        src={skill.icon}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        className={cn(skill.invert && "invert brightness-[1.4]", className)}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      className={cn("grid place-items-center rounded-md bg-primary/10 font-mono text-[9px] font-medium text-primary", className)}
      style={{ width: size + 4, height: size + 4 }}
    >
      {skill.mono}
    </span>
  );
}
