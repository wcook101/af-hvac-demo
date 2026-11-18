import { estimateMessage, validateEstimate } from "@/lib/estimate-request";
import { clientAddress, limitEstimateRequests } from "@/lib/rate-limit";
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
  if ("honeypot" in parsed) return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  if (!parsed.ok) return error(parsed.error, 400);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return error(
      "The request was not sent. Email delivery is not configured yet.",
      503,
    );
  }

  const message = estimateMessage(parsed.value);
  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
      signal: AbortSignal.timeout(12_000),
    });
  } catch (reason) {
    console.error("Estimate email request failed", reason instanceof Error ? reason.name : "unknown");
    return error(notSent, 502);
  }

  const payload = (await response.json().catch(() => null)) as { id?: unknown } | null;
  if (!response.ok || typeof payload?.id !== "string") {
    console.error("Estimate email was rejected", response.status);
    return error(notSent, 502);
  }

  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
