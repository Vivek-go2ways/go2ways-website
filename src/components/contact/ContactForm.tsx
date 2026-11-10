"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .trim()
    .min(8, "Phone number must be at least 8 digits")
    .regex(/^[+0-9\s\-()]+$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Custom typed resolver using Zod schema without requiring extra external packages
const zodResolver = (schema: z.ZodType<ContactFormData>) => async (data: unknown) => {
  const result = schema.safeParse(data);
  if (result.success) {
    return { values: result.data, errors: {} };
  }
  const errors: Record<string, { type: string; message: string }> = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as string;
    if (key && !errors[key]) {
      errors[key] = { type: issue.code, message: issue.message };
    }
  }
  return { values: {}, errors };
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: ContactFormData) => {
    void data;
    setLoading(true);
    // Simulating API dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      reset();
    }, 600);
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

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-md flex items-center gap-4"
            >
              <CheckCircle2 className="h-8 w-8 text-white shrink-0" />
              <div>
                <h4 className="font-bold text-lg">Thank you!</h4>
                <p className="text-sm text-white/90">
                  Your message has been sent successfully. We will get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-semibold underline text-white hover:text-white/80 transition"
                >
                  Send another message
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mt-8 space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="John Doe"
                  className="w-full rounded-lg bg-white/25 border border-white/40 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition backdrop-blur-sm"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-100 bg-red-600/40 px-2.5 py-1 rounded-md flex items-center gap-1.5 font-medium">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Your Phone Number *
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg bg-white/25 border border-white/40 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition backdrop-blur-sm"
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-100 bg-red-600/40 px-2.5 py-1 rounded-md flex items-center gap-1.5 font-medium">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="john@example.com"
                  className="w-full rounded-lg bg-white/25 border border-white/40 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition backdrop-blur-sm"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-100 bg-red-600/40 px-2.5 py-1 rounded-md flex items-center gap-1.5 font-medium">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Message... *
                </label>
                <textarea
                  rows={4}
                  {...register("message")}
                  placeholder="Write your message here..."
                  className="w-full rounded-lg bg-white/25 border border-white/40 px-4 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition backdrop-blur-sm resize-none"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-100 bg-red-600/40 px-2.5 py-1 rounded-md flex items-center gap-1.5 font-medium">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-[#1B1D21] font-extrabold uppercase text-xs sm:text-sm tracking-wider shadow-lg hover:bg-slate-100 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
