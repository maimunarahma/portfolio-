import { ArrowUp } from "lucide-react";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[#1f2322] bg-[#0b0d0c]">
      <div className="container flex flex-wrap items-center justify-between gap-3 py-5 font-mono text-[11.5px] tracking-[0.06em] text-[#5d6662]">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 rounded-full border border-input px-3.5 py-2 text-[#a3aba7] hover:border-primary hover:text-primary"
        >
          Back to top <ArrowUp className="size-3.5" />
        </a>
      </div>
    </footer>
  );
}
