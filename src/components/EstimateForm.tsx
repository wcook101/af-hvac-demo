"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");
    setError("");

    let response: Response;
    try {
      response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
    } catch {
      setStatus("error");
      setError("The request was not sent. Check your connection or call 610-704-4419.");
      return;
    }

    const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (response.ok && result?.ok === true) {
      form.reset();
      setStatus("success");
      return;
    }

    setStatus("error");
    setError(result?.error || "The request was not sent. Please call 610-704-4419.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-panel p-6 shadow-2xl shadow-black/20 sm:p-8"
      aria-describedby="estimate-note"
    >
      <h3 className="font-display text-2xl font-semibold tracking-tight text-cream">
        Request an Estimate
      </h3>
      <p id="estimate-note" className="mt-4 text-sm leading-relaxed text-muted">
        Include your name, phone, email, the service you need, and a short message.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-name">
          Name
          <input id="estimate-name" name="name" type="text" autoComplete="name" required className="field" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-phone">
          Phone
          <input id="estimate-phone" name="phone" type="tel" autoComplete="tel" required className="field" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-email">
          Email
          <input id="estimate-email" name="email" type="email" autoComplete="email" required className="field" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-service">
          Service interest
          <select id="estimate-service" name="service" required className="field" defaultValue="">
            <option value="" disabled>
              Select a category
            </option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-message">
          How can A&amp;F HVAC help?
          <textarea id="estimate-message" name="message" rows={5} required className="field min-h-32 resize-y" />
        </label>
        <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden" htmlFor="estimate-company">
          Company website
          <input id="estimate-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "success" ? (
        <p role="status" className="mt-5 rounded-2xl border border-white/15 bg-navy-deep px-4 py-3 text-sm leading-relaxed text-cream">
          Your request was sent to service@afhvacservice.com.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="mt-5 rounded-2xl border border-copper/40 bg-copper/10 px-4 py-3 text-sm leading-relaxed text-cream">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-copper mt-6 h-12 w-full px-6 disabled:cursor-wait disabled:opacity-70"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Request an Estimate"}
      </button>
    </form>
  );
}
