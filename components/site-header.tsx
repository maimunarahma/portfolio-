"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const { id } of nav) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-brand-green to-brand-blue"
        style={{ transform: `scaleX(${progress})` }}
      />
      <header className="sticky top-0 z-50 border-b border-[#1f2322] bg-background/90 backdrop-blur-md">
        <div className="container flex items-center justify-between gap-6 py-3.5">
          <Link href="#top" className="flex items-center gap-3 text-foreground">
            <span className="grid size-9 place-items-center rounded-md border border-primary font-mono text-[13px] font-medium text-primary">
              MR
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="font-display text-[15px] font-semibold tracking-tight">{site.name}</span>
              <span className="font-mono text-[10px] tracking-[0.12em] text-[#7d8682]">DEVELOPER.PORTFOLIO</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={cn(
                  "rounded-md px-2.5 py-2 font-mono text-xs transition-colors hover:text-foreground",
                  active === n.id ? "bg-primary/10 text-primary" : "text-muted-foreground"
                )}
              >
                {n.label}
              </a>
            ))}
            <Button asChild size="sm" className="ml-2 font-mono text-xs font-medium hover:translate-y-0">
              <a href="#contact">
                Contact Me <ArrowRight />
              </a>
            </Button>
          </nav>

          <Button
            variant="outline"
            size="sm"
            className="font-mono text-xs lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />} {open ? "close" : "menu"}
          </Button>
        </div>

        {open && (
          <nav className="container flex flex-col border-t border-[#1f2322] pb-4 pt-2 lg:hidden">
            {nav.map((n, i) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-b border-[#1a1e1d] py-3 font-mono text-sm",
                  active === n.id ? "text-primary" : "text-muted-foreground"
                )}
              >
                {String(i + 1).padStart(2, "0")} {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="py-3.5 font-mono text-sm text-primary">
              Contact Me →
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
