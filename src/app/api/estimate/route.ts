import { validateEstimate } from "@/lib/estimate-request";
import { clientAddress, duplicateEstimate, limitEstimateRequests, rememberEstimate } from "@/lib/rate-limit";
import { sendEstimate } from "@/lib/smtp";
import { NextResponse } from "next/server";

const notSent = "The request was not sent. Please try again.";

function error(message: string, status: number, retryAfter?: number) {
  return NextResponse.json(
    { ok: false, error: message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...(retryAfter ? { "Retry-After": String(retryAfter) } : {}),
      },
    },
  );
}

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(length) && length > 20_000) {
    return error("The request was not sent. Please shorten the message.", 413);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return error(notSent, 400);
  }

  const limit = limitEstimateRequests(clientAddress(request));
  if (!limit.allowed) {
    return error(
      "The request was not sent. Please wait a few minutes.",
      429,
      limit.retryAfter,
    );
  }

  const input = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  const parsed = validateEstimate(input);
  if ("honeypot" in parsed) return error(notSent, 400);
  if (!parsed.ok) return error(parsed.error, 400);
  const fingerprint = `${parsed.value.email}:${parsed.value.service}:${parsed.value.message}`.toLowerCase();
  if (duplicateEstimate(clientAddress(request), fingerprint)) {
    return error("The request was not sent. This inquiry was already submitted.", 409);
  }

  const sent = await sendEstimate(parsed.value);
  if (!sent.ok && sent.reason === "unconfigured") {
    return error("The request was not sent. Email delivery is not configured yet.", 503);
  }
  if (!sent.ok) return error(notSent, 502);

  rememberEstimate(clientAddress(request), fingerprint);
  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
