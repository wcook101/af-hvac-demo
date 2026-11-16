import { NextResponse } from "next/server";
import { services, site } from "@/lib/site";

const allowedServices = new Set<string>([...services.map((service) => service.title), "Not sure yet"]);

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "The request was not sent. Please try again or call 610-704-4419." },
      { status: 400 },
    );
  }

  const input = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  if (text(input.company, 200)) {
    return NextResponse.json(
      { ok: false, error: "The request was not sent." },
      { status: 400 },
    );
  }

  const name = text(input.name, 120);
  const phone = text(input.phone, 40);
  const email = text(input.email, 200);
  const service = text(input.service, 80);
  const message = text(input.message, 5000);

  if (!name || !phone || !email || !service || !message || !allowedServices.has(service)) {
    return NextResponse.json(
      { ok: false, error: "The request was not sent. Complete every field and try again." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "The request was not sent. Enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error: "The request was not sent. Email delivery is not configured yet. Call 610-704-4419.",
      },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "A&F HVAC <service@afhvacservice.com>",
      to: [site.email],
      reply_to: email,
      subject: `Estimate request from ${name.replace(/[\r\n]+/g, " ")}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Estimate email was rejected", response.status);
    return NextResponse.json(
      { ok: false, error: "The request was not sent. Please call 610-704-4419." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
