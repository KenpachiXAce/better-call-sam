"use client";

import React, { useState } from "react";
import { Coffee, Send, CheckCircle, Mail, MapPin, Video, ArrowRight, ShieldCheck } from "lucide-react";
import { HIMALAYAN_JAVA_BRANCHES, COFFEE_MENU } from "@/data/himalayanJavaBranches";

export function HimalayanJavaScheduler() {
  const [activeTab, setActiveTab] = useState<"inquiry" | "coffee">("inquiry");
  
  // Project Inquiry Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("Product & UI/UX Design");
  const [timeline, setTimeline] = useState("Immediate (2ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ4 weeks)");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  
  // Coffee Meeting Form State
  const [selectedBranchId, setSelectedBranchId] = useState("thamel");
  const [customLocation, setCustomLocation] = useState("");
  const [selectedCoffee, setSelectedCoffee] = useState("flat-white");
  const [coffeeDate, setCoffeeDate] = useState("");
  
  const [submitted, setSubmitted] = useState(false);

  const selectedBranch = HIMALAYAN_JAVA_BRANCHES.find((b) => b.id === selectedBranchId) || HIMALAYAN_JAVA_BRANCHES[0];

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSubmitCoffee = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full border border-[rgba(247,244,238,0.16)] bg-[#111214] flex flex-col justify-between shadow-2xl">
      {/* Top Header & Tab Switcher */}
      <div className="p-6 border-b border-[rgba(247,244,238,0.12)] bg-[#090A0C]">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-[#B37CFF] uppercase font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>START A PROJECT // DIRECT INQUIRY</span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center border border-[rgba(247,244,238,0.16)] bg-[#111214] p-0.5 text-xs">
            <button
              onClick={() => setActiveTab("inquiry")}
              className={`px-3 py-1 font-medium transition-colors ${
                activeTab === "inquiry" ? "bg-[#5600A8] text-[#F7F4EE]" : "text-[#A5A2A0] hover:text-[#F7F4EE]"
              }`}
            >
              Project Inquiry
            </button>
            <button
              onClick={() => setActiveTab("coffee")}
              className={`px-3 py-1 font-medium flex items-center gap-1 transition-colors ${
                activeTab === "coffee" ? "bg-[#5600A8] text-[#F7F4EE]" : "text-[#A5A2A0] hover:text-[#F7F4EE]"
              }`}
            >
              <Coffee className="w-3.5 h-3.5 text-[#B37CFF]" />
              <span>Coffee Meeting</span>
            </button>
          </div>
        </div>

        <h2 className="text-heading-3 uppercase font-semibold text-[#F7F4EE]">
          {activeTab === "inquiry" ? "Send a Project Inquiry" : "Let's Meet Over Coffee"}
        </h2>
        <p className="text-xs text-[#A5A2A0] mt-1 leading-relaxed">
          {activeTab === "inquiry"
            ? "Tell me about your product, timeline, and goals. I reply within 24 hours."
            : "I meet clients in person when I can ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â usually at a Himalayan Java in Kathmandu."}
        </p>
      </div>

      {/* Confirmation State or Active Form */}
      {submitted ? (
        <div className="p-8 sm:p-12 flex flex-col items-center text-center my-auto">
          <div className="w-12 h-12 rounded-full bg-[#5600A8]/30 border border-[#B37CFF] flex items-center justify-center text-[#B37CFF] mb-4">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold uppercase text-[#F7F4EE]">Inquiry Dispatched</h3>
          <p className="text-xs text-[#A5A2A0] mt-2 max-w-sm leading-relaxed">
            Thank you. Sameer will review your project brief and reply directly to{" "}
            <span className="text-[#F7F4EE] font-medium">{email || "your email"}</span> within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-xs text-[#B37CFF] underline hover:text-[#F7F4EE]"
          >
            Send Another Note
          </button>
        </div>
      ) : activeTab === "inquiry" ? (
        /* Primary Project Inquiry Form */
        <form onSubmit={handleSubmitInquiry} className="p-6 sm:p-8 flex flex-col gap-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[#A5A2A0] text-[11px] uppercase">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] text-[#F7F4EE] focus:border-[#B37CFF] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#A5A2A0] text-[11px] uppercase">Your Email *</label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] text-[#F7F4EE] focus:border-[#B37CFF] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[#A5A2A0] text-[11px] uppercase">Company or Agency</label>
              <input
                type="text"
                placeholder="Company / Agency name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] text-[#F7F4EE] focus:border-[#B37CFF] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#A5A2A0] text-[11px] uppercase">Service Required</label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] text-[#F7F4EE] focus:border-[#B37CFF] focus:outline-none"
              >
                <option>Product &amp; UI/UX Design</option>
                <option>Responsive Websites &amp; Design Systems</option>
                <option>Email &amp; Campaign Design</option>
                <option>Branding &amp; Visual Communication</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[#A5A2A0] text-[11px] uppercase">Approximate Timeline</label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] text-[#F7F4EE] focus:border-[#B37CFF] focus:outline-none"
              >
                <option>Immediate (2ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ4 weeks)</option>
                <option>Next Quarter (1ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ2 months)</option>
                <option>Ongoing Retainer / Sprint</option>
                <option>Flexible Exploration</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#A5A2A0] text-[11px] uppercase">Budget Range (Optional)</label>
              <input
                type="text"
                placeholder="e.g. $2kÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ$5k USD or NRs."
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] text-[#F7F4EE] focus:border-[#B37CFF] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[#A5A2A0] text-[11px] uppercase">Project Summary *</label>
            <textarea
              required
              rows={3}
              placeholder="What are we building or redesigning?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] text-[#F7F4EE] focus:border-[#B37CFF] focus:outline-none resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full py-4 bg-[#5600A8] hover:bg-[#7A18D6] text-[#F7F4EE] text-xs uppercase tracking-wider font-semibold border border-[#B37CFF] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(86,0,168,0.4)] transition-all"
            >
              <span>Send project inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[10px] text-[#A5A2A0] text-center">
              * Privacy assurance: your contact info is never shared or stored in mailing lists.
            </span>
          </div>
        </form>
      ) : (
        /* Secondary Himalayan Java Coffee Meeting Form */
        <form onSubmit={handleSubmitCoffee} className="p-6 sm:p-8 flex flex-col gap-4 text-xs">
          <div className="flex flex-col gap-1">
            <label className="text-[#A5A2A0] text-[11px] uppercase flex items-center justify-between">
              <span>Pick your nearest branch:</span>
              <span className="text-[#B37CFF] text-[10px]">Kathmandu Valley &amp; Nepal</span>
            </label>
            <select
              value={selectedBranchId}
              onChange={(e) => setSelectedBranchId(e.target.value)}
              className="w-full px-3 py-2.5 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] text-[#F7F4EE] focus:border-[#B37CFF] focus:outline-none"
            >
              {HIMALAYAN_JAVA_BRANCHES.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name} ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ({b.neighborhood})
                </option>
              ))}
              <option value="custom">Custom Location (Specify below)</option>
            </select>

            {selectedBranchId === "custom" ? (
              <input
                type="text"
                required
                placeholder="Enter preferred cafÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© or client office in Kathmandu"
                value={customLocation}
                onChange={(e) => setCustomLocation(e.target.value)}
                className="w-full px-3 py-2 mt-2 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] text-[#F7F4EE] focus:border-[#B37CFF] focus:outline-none"
              />
            ) : (
              <div className="mt-1 p-2 bg-[#090A0C] border border-[rgba(247,244,238,0.1)] text-[10px] text-[#A5A2A0]">
                <div>{selectedBranch.address}</div>
                <div className="text-[#B37CFF] italic mt-0.5">{selectedBranch.vibe}</div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[#A5A2A0] text-[11px] uppercase">Coffee On Sameer (Choose Roast/Drink):</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {COFFEE_MENU.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setSelectedCoffee(c.id)}
                  className={`p-2 text-left border transition-all text-xs ${
                    selectedCoffee === c.id
                      ? "border-[#B37CFF] bg-[#5600A8]/30 text-[#F7F4EE] font-semibold"
                      : "border-[rgba(247,244,238,0.12)] bg-[#090A0C] text-[#A5A2A0] hover:text-[#F7F4EE]"
                  }`}
                >
                  <div className="truncate">{c.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[#A5A2A0] text-[11px] uppercase">Preferred Date &amp; Time *</label>
              <input
                type="text"
                required
                placeholder="e.g. Thursday, 3:00 PM"
                value={coffeeDate}
                onChange={(e) => setCoffeeDate(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] text-[#F7F4EE] focus:border-[#B37CFF] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#A5A2A0] text-[11px] uppercase">Your Email / Phone *</label>
              <input
                type="text"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#090A0C] border border-[rgba(247,244,238,0.16)] text-[#F7F4EE] focus:border-[#B37CFF] focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 bg-[#5600A8] hover:bg-[#7A18D6] text-[#F7F4EE] text-xs uppercase tracking-wider font-semibold border border-[#B37CFF] flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(86,0,168,0.4)]"
            >
              <span>Request coffee meeting</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {/* Alternative Options */}
      <div className="p-4 bg-[#090A0C] border-t border-[rgba(247,244,238,0.12)] flex flex-wrap items-center justify-between gap-3 text-xs text-[#A5A2A0]">
        <span>Prefer a call instead?</span>
        <div className="flex items-center gap-4">
          <a
            href="mailto:sameer974939@gmail.com?subject=Project%20Inquiry%20ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â%20Better%20Call%20Sam"
            className="text-[#B37CFF] hover:underline flex items-center gap-1"
          >
            <Mail className="w-3 h-3" />
            <span>sameer974939@gmail.com</span>
          </a>
          <span className="text-[rgba(247,244,238,0.25)]">ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€š·</span>
          <span className="text-[#F7F4EE]">Google Meet / Zoom</span>
        </div>
      </div>
    </div>
  );
}