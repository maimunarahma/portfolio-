import { NextResponse } from "next/server";
import { Resend } from "resend";

const recipient = "maimunarahman30@gmail.com";
const defaultSender = "onboarding@resend.dev";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim() : "";
    const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
    const message = typeof payload.message === "string" ? payload.message.trim() : "";

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !subject || message.length < 10) {
      return NextResponse.json({ error: "Please complete the form with valid details." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL?.trim() || defaultSender;
    if (!apiKey) {
      return NextResponse.json({ error: "Email delivery is not configured yet." }, { status: 500 });
    }

    if (!/^(?:[^<>]+\s*)?<[^<>\s]+@[^<>\s]+\.[^<>\s]+>$|^[^<>\s]+@[^<>\s]+\.[^<>\s]+$/.test(from)) {
      return NextResponse.json(
        { error: "Invalid RESEND_FROM_EMAIL. Use email@example.com or Name <email@example.com>." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: recipient,
      replyTo: email,
      subject: subject || "Portfolio enquiry",
      text: `${message}\n\nFrom: ${name}\nEmail: ${email}`,
    });

    if (error) {
      return NextResponse.json({ error: "The message could not be sent." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "The message could not be sent." }, { status: 500 });
  }
}