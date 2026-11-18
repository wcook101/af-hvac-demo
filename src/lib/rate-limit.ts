const windowMs = 15 * 60 * 1000;
const maxAttempts = 5;
const store = globalThis as typeof globalThis & {
  __afEstimateHits?: Map<string, number[]>;
  __afEstimateDuplicates?: Map<string, number>;
};
const hits = store.__afEstimateHits ?? new Map<string, number[]>();
store.__afEstimateHits = hits;

export function clientAddress(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (forwarded || request.headers.get("x-real-ip") || "unknown").slice(0, 64);
}

const duplicates = store.__afEstimateDuplicates ?? new Map<string, number>();
store.__afEstimateDuplicates = duplicates;

function pruneDuplicates(now: number) {
  for (const [entry, time] of duplicates) {
    if (now - time >= 2 * 60 * 1000) duplicates.delete(entry);
  }
}

export function duplicateEstimate(key: string, fingerprint: string, now = Date.now()) {
  pruneDuplicates(now);
  return duplicates.has(`${key}:${fingerprint}`);
}

export function rememberEstimate(key: string, fingerprint: string, now = Date.now()) {
  pruneDuplicates(now);
  duplicates.set(`${key}:${fingerprint}`, now);
}

export function limitEstimateRequests(key: string, now = Date.now()) {
  const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);
  if (recent.length >= maxAttempts) {
    const retryAfter = Math.max(1, Math.ceil((recent[0] + windowMs - now) / 1000));
    hits.set(key, recent);
    return { allowed: false, retryAfter };
  }

  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 2000) {
    for (const [entry, times] of hits) {
      if (times.every((time) => now - time >= windowMs)) hits.delete(entry);
    }
  }

  return { allowed: true, retryAfter: 0 };
}
