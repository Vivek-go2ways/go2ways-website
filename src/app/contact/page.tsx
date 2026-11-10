import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us | Go2Ways",
  description:
    "Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <Container>
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-primary inline-block mb-2 font-heading">
                contact details
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-heading">
                Contact us
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Give us a call or drop by anytime, we endeavour to answer all
                enquiries within 24 hours on business days. We will be happy to
                answer your questions.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-foreground font-heading">
                    Our Address:
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-muted-foreground leading-snug">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Mailbox */}
              <div className="flex items-start gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-foreground font-heading">
                    Our Mailbox:
                  </h3>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-1 inline-block text-sm sm:text-base text-muted-foreground hover:text-foreground hover:underline transition-colors leading-snug"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-foreground font-heading">
                    Our Phone:
                  </h3>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="mt-1 inline-block text-sm sm:text-base text-muted-foreground hover:text-foreground hover:underline transition-colors leading-snug"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Figma Gradient Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-lg bg-white">
            <div className="absolute top-4 left-4 z-10">
              <a
                href="https://maps.google.com/?q=Uttam+Nagar,+New+Delhi,+India,+110059"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A73E8] hover:bg-[#1557b0] text-white text-xs sm:text-sm font-semibold shadow-md transition-colors"
              >
                <span>Open in Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <iframe
              title="Go2Ways Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.283151829624!2d77.0543781!3d28.6276856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04c1070e6c71%3A0xb304b4d63428987b!2sUttam%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110059!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] sm:h-[460px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
