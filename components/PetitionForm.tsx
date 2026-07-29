"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function PetitionForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;

    setStatus("submitting");
    setMessage("");

    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/signatures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Your signature could not be submitted."
        );
      }

      setStatus("success");
      setMessage(
        "Your name has been added. Thank you for standing up for accountability."
      );

      formElement.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  return (
    <form className="petitionForm" onSubmit={submit}>
      <div className="twoCol">
        <label>
          First name
          <input
            name="firstName"
            required
            minLength={2}
            maxLength={60}
            autoComplete="given-name"
          />
        </label>

        <label>
          Last name
          <input
            name="lastName"
            required
            minLength={2}
            maxLength={60}
            autoComplete="family-name"
          />
        </label>
      </div>

      <label>
        Email address <small>Never displayed publicly</small>
        <input
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
        />
      </label>

      <label>
        Country
        <input
          name="country"
          required
          minLength={2}
          maxLength={80}
          autoComplete="country-name"
        />
      </label>

      <label>
        Comment <small>Optional · max 500 characters</small>
        <textarea name="comment" maxLength={500} rows={4} />
      </label>

      <label className="consent">
        <input name="consent" type="checkbox" value="true" required />
        <span>
          I confirm that I am signing voluntarily and accept the{" "}
          <a href="/privacy" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <button
        className="formButton"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Submitting…" : "Add my name"}
      </button>

      {message && (
        <p className={`formMessage ${status}`} role="status">
          {message}
        </p>
      )}
    </form>
  );
}