import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
};

export function SectionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <span className="flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {index} / {label}
    </span>
  );
}

export function SectionHeading({ index, label, title, description }: Props) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="flex flex-col gap-[18px]">
        <Reveal>
          <SectionEyebrow index={index} label={label} />
        </Reveal>
        <Reveal>
          <h2 className="font-display text-[clamp(36px,5vw,60px)] font-semibold leading-[1.02] tracking-[-0.04em]">
            {title}
          </h2>
        </Reveal>
      </div>
      {description && (
        <Reveal className="max-w-[440px]">
          <div className="text-base leading-[1.7] text-muted-foreground text-pretty">{description}</div>
        </Reveal>
      )}
    </div>
  );
}

export function Accent({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <span className="text-primary" style={color ? { color } : undefined}>
      {children}
    </span>
  );
}
