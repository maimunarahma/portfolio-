"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "scale";
  delay?: number;
};

export function Reveal({ children, className, variant = "up", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform,filter] ease-[cubic-bezier(.2,.7,.2,1)]",
        variant === "scale" ? "duration-[900ms]" : "duration-700",
        shown
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : variant === "scale"
            ? "translate-y-4 scale-[.965] opacity-0 blur-[6px]"
            : "translate-y-6 opacity-0 blur-[2px]",
        className
      )}
    >
      {children}
    </div>
  );
}
