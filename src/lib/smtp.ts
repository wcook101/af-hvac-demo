import { estimateMessage, type EstimateRequest } from "@/lib/estimate-request";
import { site } from "@/lib/site";
import nodemailer from "nodemailer";

type SmtpSettings = {
  host: string;
  port: 465 | 587;
  user: string;
  pass: string;
};

export function smtpSettings(): SmtpSettings | null {
  const host = process.env.SMTP_HOST?.trim() ?? "";
  const user = process.env.SMTP_USER?.trim() ?? "";
  const pass = process.env.SMTP_PASSWORD ?? "";
  const port = Number(process.env.SMTP_PORT);
  if (!host || !user || !pass || (port !== 465 && port !== 587)) return null;
  if (user.toLowerCase() !== site.email.toLowerCase()) return null;
  return { host, port, user, pass };
}

export async function sendEstimate(value: EstimateRequest) {
  const settings = smtpSettings();
  if (!settings) return { ok: false as const, reason: "unconfigured" as const };

  const transporter = nodemailer.createTransport({
    host: settings.host,
    port: settings.port,
    secure: settings.port === 465,
    requireTLS: settings.port === 587,
    auth: { user: settings.user, pass: settings.pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    tls: { minVersion: "TLSv1.2", servername: settings.host },
  });

  try {
    const info = await transporter.sendMail({
      ...estimateMessage(value),
      envelope: { from: settings.user, to: site.email },
    });
    const accepted = Array.isArray(info.accepted) ? info.accepted.map((item) => String(item).toLowerCase()) : [];
    const rejected = Array.isArray(info.rejected) ? info.rejected.map((item) => String(item).toLowerCase()) : [];
    const delivered = accepted.some((item) => item.includes(site.email.toLowerCase()));
    if (!info.messageId || !delivered || rejected.length > 0) {
      console.error("Estimate email was rejected", "rejected");
      return { ok: false as const, reason: "rejected" as const };
    }
    return { ok: true as const };
  } catch (error) {
    const code = error && typeof error === "object" && "code" in error ? String(error.code) : "unknown";
    const responseCode =
      error && typeof error === "object" && "responseCode" in error ? String(error.responseCode) : "";
    console.error("Estimate email was rejected", code, responseCode);
    return { ok: false as const, reason: "rejected" as const };
  } finally {
    transporter.close();
  }
}
