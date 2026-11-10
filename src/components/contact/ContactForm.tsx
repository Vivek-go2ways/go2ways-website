"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 500);
  };

  return (
    <div className="rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#1E83C1] via-[#10b981] to-[#04FF00]">
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
          Ready to Get Started?
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-white/90">
          Your email address will not be published. Required fields are marked{" "}
          <span className="text-white font-bold">*</span>
        </p>

        {submitted ? (
          <div className="mt-8 p-6 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-md flex items-center gap-4">
            <CheckCircle2 className="h-8 w-8 text-white shrink-0" />
            <div>
              <h4 className="font-bold text-lg">Thank you!</h4>
              <p className="text-sm text-white/90">
                Your message has been sent successfully. We will get back to you within 24 hours.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full rounded-lg bg-white/25 border border-white/40 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition backdrop-blur-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white mb-1.5">
                Your Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full rounded-lg bg-white/25 border border-white/40 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition backdrop-blur-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white mb-1.5">
                Your Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full rounded-lg bg-white/25 border border-white/40 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition backdrop-blur-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white mb-1.5">
                Message...
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full rounded-lg bg-white/25 border border-white/40 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition backdrop-blur-sm resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-[#1B1D21] font-extrabold uppercase text-xs sm:text-sm tracking-wider shadow-lg hover:bg-slate-100 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
