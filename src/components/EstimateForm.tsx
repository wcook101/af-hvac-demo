"use client";

import { validateEstimate } from "@/lib/estimate-request";
import { infinityServiceName, services, site } from "@/lib/site";
import { useEffect, useRef, useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const empty = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  leave_blank: "",
};

export function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fields, setFields] = useState(empty);
  const feedbackRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (status === "error" || status === "success") feedbackRef.current?.focus();
  }, [status]);

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get("interest");
    if (interest !== "carrier-infinity-system") return;
    setFields((current) =>
      current.service ? current : { ...current, service: infinityServiceName },
    );
  }, []);

  function update(name: keyof typeof empty, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
    if (status === "error") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const parsed = validateEstimate(fields);
    if (!parsed.ok) {
      setStatus("error");
      setError("error" in parsed ? parsed.error : "The request was not sent. Please try again.");
      return;
    }

    setStatus("submitting");
    setError("");

    let response: Response;
    try {
      response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
    } catch {
      setStatus("error");
      setError("The request was not sent. Check your connection.");
      return;
    }

    const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (response.ok && result?.ok === true) {
      setFields(empty);
      setStatus("success");
      return;
    }

    setStatus("error");
    setError(result?.error || "The request was not sent. Please try again.");
  }

  const feedbackId = status === "success" ? "estimate-success" : status === "error" ? "estimate-error" : undefined;

  return (
    <form
      onSubmit={handleSubmit}
      id="estimate"
      className="relative scroll-mt-40 overflow-hidden rounded-3xl border border-white/10 bg-panel p-6 shadow-2xl shadow-black/20 sm:p-8"
      aria-busy={status === "submitting"}
      aria-describedby={feedbackId ? `estimate-note ${feedbackId}` : "estimate-note"}
    >
      <h3 className="font-display text-2xl font-semibold tracking-tight text-cream">Request an Estimate</h3>
      <p id="estimate-note" className="mt-4 text-sm leading-relaxed text-muted">
        Include your name, phone, email, the service you need, and a short message.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-name">
          Name
          <input
            id="estimate-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            className="field"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-phone">
          Phone
          <input
            id="estimate-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            maxLength={40}
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="field"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-email">
          Email
          <input
            id="estimate-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            className="field"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-service">
          Service interest
          <select
            id="estimate-service"
            name="service"
            required
            value={fields.service}
            onChange={(event) => update("service", event.target.value)}
            className="field"
          >
            <option value="" disabled>
              Select a category
            </option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value={infinityServiceName}>{infinityServiceName}</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-message">
          How can A&amp;F HVAC help?
          <textarea
            id="estimate-message"
            name="message"
            rows={5}
            required
            maxLength={4000}
            value={fields.message}
            onChange={(event) => update("message", event.target.value)}
            className="field min-h-32 resize-y"
          />
        </label>
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="estimate-company">
            Leave this field blank
            <input
              id="estimate-company"
              name="leave_blank"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={fields.leave_blank}
              onChange={(event) => update("leave_blank", event.target.value)}
            />
          </label>
        </div>
      </div>

      {status === "success" ? (
        <p
          ref={feedbackRef}
          id="estimate-success"
          role="status"
          tabIndex={-1}
          className="mt-5 rounded-2xl border border-white/15 bg-navy-deep px-4 py-3 text-sm leading-relaxed text-cream outline-none"
        >
          Your request was sent to service@afhvacservice.com.
        </p>
      ) : null}
      {status === "error" ? (
        <p
          ref={feedbackRef}
          id="estimate-error"
          role="alert"
          tabIndex={-1}
          className="mt-5 rounded-2xl border border-copper/40 bg-copper/10 px-4 py-3 text-sm leading-relaxed text-cream outline-none"
        >
          {error}{" "}
          <a href={site.phoneHref} className="font-semibold text-copper underline underline-offset-2">
            Call {site.phoneDisplay}
          </a>
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
