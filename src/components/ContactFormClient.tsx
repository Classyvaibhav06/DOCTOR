"use client";
import React, { useState } from "react";

type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  concern: string;
  preferredTime: string;
};

export default function ContactFormClient() {
  const [form, setForm] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    concern: "Erectile Dysfunction",
    preferredTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      concern: "Erectile Dysfunction",
      preferredTime: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setSubmitMessage("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(data?.message || "Unable to submit request.");

      setSubmitStatus("success");
      setSubmitMessage(data?.message || "Request submitted successfully.");
      resetForm();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setSubmitStatus("error");
      setSubmitMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form-row">
        <div className="booking-field">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            required
          />
        </div>
        <div className="booking-field">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="booking-form-row">
        <div className="booking-field">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            required
          />
        </div>
      </div>

      <div className="booking-field">
        <label>Concern / Service</label>
        <select name="concern" value={form.concern} onChange={handleChange}>
          <option>Erectile Dysfunction</option>
          <option>Premature Ejaculation</option>
          <option>Low Libido</option>
          <option>Male Infertility</option>
          <option>Nightfall Treatment</option>
          <option>Other / General Query</option>
        </select>
      </div>

      <div className="booking-field">
        <label>Preferred Time</label>
        <input
          type="text"
          name="preferredTime"
          value={form.preferredTime}
          onChange={handleChange}
          placeholder="e.g., Morning, Evening, Weekends"
        />
      </div>

      <button type="submit" className="booking-submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Callback"}
      </button>

      {submitStatus !== "idle" && (
        <p
          className="booking-submit-status"
          style={{
            fontSize: "0.85rem",
            color: submitStatus === "success" ? "#047857" : "#dc2626",
          }}
        >
          {submitMessage}
        </p>
      )}

      <p className="booking-privacy">
        🔒 Safe & Discreet — Your privacy is guaranteed
      </p>
    </form>
  );
}
