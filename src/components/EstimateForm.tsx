"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

export function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.reset();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-panel p-6 shadow-2xl shadow-black/20 sm:p-8"
      aria-describedby="estimate-demo-note"
    >
      <h3 className="font-display text-2xl font-semibold tracking-tight text-cream">
        Request an Estimate
      </h3>
      <p id="estimate-demo-note" className="mt-4 rounded-2xl border border-copper/40 bg-copper/10 px-4 py-3 text-sm leading-relaxed text-cream">
        Demo only. This form does not send or save what you type.
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
            className="field"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-phone">
          Phone
          <input
            id="estimate-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
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
            className="field"
          />
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
            <option value="Not sure">Not sure yet</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-cream" htmlFor="estimate-message">
          How can A&amp;F HVAC help?
          <textarea
            id="estimate-message"
            name="message"
            rows={5}
            required
            className="field min-h-32 resize-y"
          />
        </label>
      </div>

      {submitted ? (
        <p role="status" className="mt-5 rounded-2xl border border-white/15 bg-navy-deep px-4 py-3 text-sm leading-relaxed text-cream">
          Preview only. Your note stayed in this browser and was not sent or stored.
        </p>
      ) : null}

      <button type="submit" className="btn-copper mt-6 h-12 w-full px-6">
        Request an Estimate
      </button>
    </form>
  );
}
