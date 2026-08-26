"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Coffee, Send } from "lucide-react";
import { HIMALAYAN_JAVA_BRANCHES } from "@/data/himalayanJavaBranches";

export function HimalayanJavaScheduler() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@bettercallsam.design";
  const [mode, setMode] = useState<"project" | "coffee">("project");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Product & UI/UX Design");
  const [timeline, setTimeline] = useState("2–4 weeks");
  const [summary, setSummary] = useState("");
  const [branch, setBranch] = useState(HIMALAYAN_JAVA_BRANCHES[0]?.id ?? "thamel");
  const [meetingTime, setMeetingTime] = useState("");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const selectedBranch = HIMALAYAN_JAVA_BRANCHES.find((item) => item.id === branch);
    const subject = mode === "project" ? `Project inquiry from ${name}` : `Coffee meeting request from ${name}`;
    const body = mode === "project"
      ? `Name: ${name}\nEmail: ${email}\nService: ${service}\nTimeline: ${timeline}\n\nProject summary:\n${summary}`
      : `Name: ${name}\nEmail: ${email}\nBranch: ${selectedBranch?.name ?? branch}\nPreferred time: ${meetingTime}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form contact-form--success" role="status">
        <CheckCircle2 aria-hidden="true" />
        <h3>Your note is ready.</h3>
        <p>Your email app should open with the details filled in. Send it when you&apos;re happy with the message.</p>
        <button type="button" onClick={() => setSubmitted(false)}>Edit details</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-tabs" aria-label="Contact type">
        <button type="button" className={mode === "project" ? "is-active" : ""} onClick={() => setMode("project")}>
          <Send aria-hidden="true" /> Project inquiry
        </button>
        <button type="button" className={mode === "coffee" ? "is-active" : ""} onClick={() => setMode("coffee")}>
          <Coffee aria-hidden="true" /> Coffee meeting
        </button>
      </div>

      <div className="contact-fields contact-fields--two">
        <label>
          <span>Your name</span>
          <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Sameer Chaudhary" />
        </label>
        <label>
          <span>Email</span>
          <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" />
        </label>
      </div>

      {mode === "project" ? (
        <>
          <div className="contact-fields contact-fields--two">
            <label>
              <span>What do you need?</span>
              <select value={service} onChange={(event) => setService(event.target.value)}>
                <option>Product &amp; UI/UX Design</option>
                <option>Websites &amp; Design Systems</option>
                <option>Email &amp; Campaign Design</option>
                <option>Branding &amp; Visual Communication</option>
              </select>
            </label>
            <label>
              <span>Preferred timeline</span>
              <select value={timeline} onChange={(event) => setTimeline(event.target.value)}>
                <option>2–4 weeks</option>
                <option>1–2 months</option>
                <option>Ongoing collaboration</option>
                <option>Still exploring</option>
              </select>
            </label>
          </div>
          <label>
            <span>What are we solving?</span>
            <textarea required rows={6} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="A short brief, the current friction, and what success should look like." />
          </label>
        </>
      ) : (
        <div className="contact-fields contact-fields--two">
          <label>
            <span>Nearest Himalayan Java</span>
            <select value={branch} onChange={(event) => setBranch(event.target.value)}>
              {HIMALAYAN_JAVA_BRANCHES.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </label>
          <label>
            <span>Preferred date and time</span>
            <input required value={meetingTime} onChange={(event) => setMeetingTime(event.target.value)} placeholder="Thursday, 3:00 PM" />
          </label>
        </div>
      )}

      <div className="contact-form__footer">
        <p>Your information is only used to reply to this inquiry.</p>
        <button type="submit" className="pill-action">
          {mode === "project" ? "Prepare inquiry" : "Request coffee"} <ArrowUpRight aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
