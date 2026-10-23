"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";
import { LiveDot } from "@/components/live-dot";
import { Accent, SectionEyebrow } from "@/components/section-heading";

type FormState = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const links = [
  { k: "LINKEDIN", v: "Connect on LinkedIn", href: site.linkedin, icon: Linkedin, external: true },
  { k: "GITHUB", v: "See my code on GitHub", href: site.github, icon: Github, external: true },
  { k: "PHONE", v: site.phoneLabel, href: `tel:${site.phone}`, icon: Phone, external: false },
  { k: "LOCATION", v: `${site.location} · Remote friendly`, href: undefined, icon: MapPin, external: false },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const er: Errors = {};
    if (!form.name.trim()) er.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Enter a valid email address.";
    if (!form.subject.trim()) er.subject = "Please enter a subject.";
    if (form.message.trim().length < 10) er.message = "Message should be at least 10 characters.";
    setErrors(er);
    if (Object.keys(er).length) {
      setStatus("");
      return;
    }

    setSending(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "The message could not be sent.");
      setStatus("Message sent. Thanks for reaching out!");
      setForm({ name: "", email: "", subject: "", message: "" });
      window.setTimeout(() => window.location.assign("/?contact=success#contact"), 900);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "The message could not be sent.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-[clamp(72px,10vw,136px)]">
      <Reveal variant="scale">
        <div className="rounded-3xl p-px" style={{ background: "linear-gradient(135deg,#3ddc9766,#242827 35%,#242827 70%,#6ea8fe55)" }}>
          <div
            className="flex flex-col gap-[clamp(32px,4vw,48px)] rounded-[23px] p-[clamp(24px,4.5vw,64px)]"
            style={{
              background:
                "radial-gradient(80% 100% at 0% 0%,#3ddc9714,transparent 60%),radial-gradient(70% 90% at 100% 100%,#6ea8fe10,transparent 60%),#0f1211",
            }}
          >
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex max-w-[720px] flex-col gap-[18px]">
                <SectionEyebrow index="08" label="CONTACT" />
                <h2 className="font-display text-[clamp(36px,5.6vw,72px)] font-semibold leading-none tracking-[-0.045em] text-balance">
                  Let&apos;s build something <Accent>meaningful.</Accent>
                </h2>
                <p className="max-w-[520px] text-[17px] leading-[1.7] text-[#a3aba7] text-pretty">
                  Recruiters, fellow developers and collaborators — if you have a role, a project, or a question about my work,
                  I&apos;d be glad to hear from you.
                </p>
              </div>
              {site.openToWork && (
                <span className="flex items-center gap-2.5 rounded-full border border-[#2f5a48] bg-primary/5 px-4 py-2.5 text-sm text-[#c9cfcc]">
                  <LiveDot />
                  Open to internships &amp; full-time roles
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-start gap-[clamp(24px,3vw,36px)]">
              <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3">
                <Card className="flex items-center gap-3.5 rounded-[14px] p-[18px]">
                  <span className="grid size-11 flex-none place-items-center rounded-[10px] bg-primary/10 text-primary">
                    <Mail className="size-5" />
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
                    <span className="font-mono text-[11px] tracking-[0.1em] text-[#6c7571]">EMAIL</span>
                    <a href={`mailto:${site.email}`} className="truncate text-[15px] text-foreground hover:text-primary">
                      {site.email}
                    </a>
                  </div>
                  <Button variant="outline" size="sm" onClick={copy} className={copied ? "text-primary" : ""}>
                    {copied ? <Check /> : <Copy />}
                    {copied ? "copied" : "copy"}
                  </Button>
                </Card>
                {links.map(({ k, v, href, icon: Icon, external }) => {
                  const inner = (
                    <>
                      <span className="grid size-11 flex-none place-items-center rounded-[10px] bg-[#171b1a] text-primary">
                        <Icon className="size-5" />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col gap-[3px]">
                        <span className="font-mono text-[11px] tracking-[0.1em] text-[#6c7571]">{k}</span>
                        <span className="text-[15px]">{v}</span>
                      </span>
                      {href && <ArrowUpRight className="size-4 text-[#6c7571]" />}
                    </>
                  );
                  return href ? (
                    <a
                      key={k}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel="noopener"
                      className="flex items-center gap-3.5 rounded-[14px] border bg-card p-[18px] text-foreground transition-all duration-200 hover:translate-x-1 hover:border-[#2f5a48]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={k} className="flex items-center gap-3.5 rounded-[14px] border bg-card p-[18px]">
                      {inner}
                    </div>
                  );
                })}
              </div>

              <Card className="min-w-0 flex-[1.3_1_400px] rounded-2xl p-[clamp(20px,3vw,32px)]">
                <form onSubmit={submit} noValidate className="flex flex-col gap-[18px]">
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-[18px]">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">NAME</Label>
                      <Input id="name" autoComplete="name" placeholder="Your name" value={form.name} onChange={update("name")} />
                      {errors.name && <span className="font-mono text-[11px] text-destructive">{errors.name}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">EMAIL</Label>
                      <Input id="email" type="email" autoComplete="email" placeholder="you@company.com" value={form.email} onChange={update("email")} />
                      {errors.email && <span className="font-mono text-[11px] text-destructive">{errors.email}</span>}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject">SUBJECT</Label>
                    <Input id="subject" placeholder="Internship, project, collaboration…" value={form.subject} onChange={update("subject")} />
                    {errors.subject && <span className="font-mono text-[11px] text-destructive">{errors.subject}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">MESSAGE</Label>
                    <Textarea id="message" rows={5} placeholder="Tell me a little about it" value={form.message} onChange={update("message")} />
                    {errors.message && <span className="font-mono text-[11px] text-destructive">{errors.message}</span>}
                  </div>
                  <Button type="submit" size="lg" disabled={sending} className="hover:translate-y-0">
                    {sending ? "Sending..." : "Send message"} {!sending && <ArrowRight />}
                  </Button>
                  <span role="status" className={`font-mono text-xs leading-normal ${status.startsWith("Message sent") ? "text-primary" : "text-destructive"}`}>
                    {status}
                  </span>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
