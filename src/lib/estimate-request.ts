import { infinityServiceName, services, site } from "@/lib/site";

const allowedServices = new Set<string>([
  ...services.map((service) => service.title),
  infinityServiceName,
  "Not sure yet",
]);

export const estimateLimits = {
  name: 120,
  phone: 40,
  email: 254,
  service: 80,
  message: 4000,
} as const;

export type EstimateRequest = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export type EstimateValidation =
  | { ok: true; value: EstimateRequest }
  | { ok: false; error: string }
  | { ok: false; honeypot: true };

function cleanLine(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function cleanMessage(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim()
    .slice(0, max);
}

export function validateEstimate(input: Record<string, unknown>): EstimateValidation {
  if (cleanLine(input.leave_blank, 200)) return { ok: false, honeypot: true };

  const name = cleanLine(input.name, estimateLimits.name);
  const phone = cleanLine(input.phone, estimateLimits.phone);
  const email = cleanLine(input.email, estimateLimits.email);
  const service = cleanLine(input.service, estimateLimits.service);
  const message = cleanMessage(input.message, estimateLimits.message);
  const digits = phone.replace(/\D/g, "");

  if (name.length < 2) {
    return { ok: false, error: "The request was not sent. Enter your name." };
  }
  if (digits.length < 10 || digits.length > 15) {
    return { ok: false, error: "The request was not sent. Enter a phone number with the area code." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "The request was not sent. Enter a valid email address." };
  }
  if (!allowedServices.has(service)) {
    return { ok: false, error: "The request was not sent. Select a service." };
  }
  if (message.length < 2) {
    return { ok: false, error: "The request was not sent. Enter a short message." };
  }

  return { ok: true, value: { name, phone, email, service, message } };
}

export function estimateMessage(value: EstimateRequest, submittedAt = new Date()) {
  const submitted = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "short",
  }).format(submittedAt);

  return {
    from: "A&F HVAC <service@afhvacservice.com>",
    to: site.email,
    replyTo: value.email,
    subject: "New Website Inquiry — A&F HVAC",
    text: [
      `Name: ${value.name}`,
      `Phone: ${value.phone}`,
      `Email: ${value.email}`,
      `Service: ${value.service}`,
      `Submitted: ${submitted}`,
      "",
      value.message,
    ].join("\n"),
  };
}
