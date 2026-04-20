"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/anim/FadeIn";
import { Mail, Calendar, MapPin, Phone, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const offices = [
  { city: "Austin, TX", flag: "🇺🇸", label: "HQ" },
  { city: "New York, NY", flag: "🇺🇸", label: "East Coast" },
  { city: "Bengaluru", flag: "🇮🇳", label: "India Operations" },
  { city: "London", flag: "🇬🇧", label: "EMEA" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* Hero Section */}
      <Section className="relative pt-32 sm:pt-40 md:pt-48 pb-12 bg-[var(--color-summit-black)] text-white">
        <Container>
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mb-8">Let&apos;s Talk Growth</h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl leading-relaxed">
              Ready to scale your revenue operations or expand your global footprint? Choose the path that fits your timeline.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Two-Option Contact Section */}
      <Section className="bg-white -mt-8 md:-mt-12 pt-16 md:pt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">

            {/* Option 1: Book Directly (Calendly) */}
            <FadeIn>
              <div className="bg-[var(--color-cloud-white)] border-2 border-[var(--color-surmount-red)] p-6 sm:p-8 md:p-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-surmount-red)]/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[var(--color-surmount-red)]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display">Ready to Book?</h2>
                    <p className="text-sm text-[var(--color-stone-gray)]">30-minute discovery call</p>
                  </div>
                </div>
                <p className="text-[var(--color-deep-charcoal)] mb-6 leading-relaxed">
                  Skip the back-and-forth. Book a 30-minute strategy session directly with a Surmount managing partner. We&apos;ll diagnose your top revenue bottleneck live.
                </p>

                {/* Calendly Embed Placeholder */}
                <div className="flex-grow bg-white border border-[var(--color-platform-gray)] rounded-sm overflow-hidden min-h-[360px] flex flex-col items-center justify-center relative">
                  <div className="text-center p-8">
                    <Calendar className="w-12 h-12 text-[var(--color-surmount-red)] mx-auto mb-4" />
                    <h3 className="text-xl font-display mb-3">Schedule Your Call</h3>
                    <p className="text-sm text-[var(--color-stone-gray)] mb-6 max-w-xs mx-auto">
                      Pick a time that works. We&apos;ll come prepared with initial observations about your revenue model.
                    </p>
                    {/* Replace with actual Calendly embed: <div className="calendly-inline-widget" data-url="YOUR_CALENDLY_URL" style={{minWidth:320,height:580}}></div> */}
                    <a
                      href="https://calendly.com/surmountcxo/discovery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium bg-[var(--color-surmount-red)] text-white hover:bg-[#B91217] transition-colors"
                    >
                      Open Calendar
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Option 2: Short Contact Form */}
            <FadeIn delay={0.2}>
              <div className="bg-[var(--color-cloud-white)] border border-[var(--color-platform-gray)] p-6 sm:p-8 md:p-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-summit-black)]/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[var(--color-summit-black)]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display">Not Ready to Call?</h2>
                    <p className="text-sm text-[var(--color-stone-gray)]">We&apos;ll reach out within 24 hours</p>
                  </div>
                </div>
                <p className="text-[var(--color-deep-charcoal)] mb-6 leading-relaxed">
                  Tell us a bit about your company and challenge. A partner will review your situation and reply with a tailored recommendation within one business day.
                </p>

                <form action="mailto:Info@surmountcxo.com" method="post" encType="text/plain" className="space-y-5 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[var(--color-summit-black)] uppercase tracking-wide">Full Name *</label>
                      <input type="text" id="name" required className="w-full bg-white border border-[var(--color-platform-gray)] p-3 text-base focus:outline-none focus:border-[var(--color-surmount-red)] transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-[var(--color-summit-black)] uppercase tracking-wide">Company *</label>
                      <input type="text" id="company" required className="w-full bg-white border border-[var(--color-platform-gray)] p-3 text-base focus:outline-none focus:border-[var(--color-surmount-red)] transition-colors" placeholder="Acme Corp" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[var(--color-summit-black)] uppercase tracking-wide">Work Email *</label>
                    <input type="email" id="email" required className="w-full bg-white border border-[var(--color-platform-gray)] p-3 text-base focus:outline-none focus:border-[var(--color-surmount-red)] transition-colors" placeholder="jane@acme.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="revenue" className="text-sm font-medium text-[var(--color-summit-black)] uppercase tracking-wide">Annual Revenue Range</label>
                    <select id="revenue" className="w-full bg-white border border-[var(--color-platform-gray)] p-3 text-base focus:outline-none focus:border-[var(--color-surmount-red)] transition-colors text-[var(--color-deep-charcoal)]">
                      <option value="">Select range...</option>
                      <option value="1-5m">$1M &ndash; $5M ARR</option>
                      <option value="5-15m">$5M &ndash; $15M ARR</option>
                      <option value="15-50m">$15M &ndash; $50M ARR</option>
                      <option value="50m+">$50M+ ARR</option>
                    </select>
                  </div>

                  <div className="space-y-2 flex-grow">
                    <label htmlFor="challenge" className="text-sm font-medium text-[var(--color-summit-black)] uppercase tracking-wide">Primary Challenge *</label>
                    <textarea id="challenge" required rows={3} className="w-full bg-white border border-[var(--color-platform-gray)] p-3 text-base focus:outline-none focus:border-[var(--color-surmount-red)] transition-colors" placeholder="e.g., Pipeline isn't converting, need to scale sales team, exploring GCC setup..."></textarea>
                  </div>

                  <Button variant="primary" className="w-full justify-center mt-auto">
                    Send &mdash; Get a Recommendation
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Contact Details + Geographic Credibility */}
          <div className="border-t border-[var(--color-platform-gray)] pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Direct Contact */}
              <div>
                <h3 className="text-xl font-display mb-6">Direct Contact</h3>
                <div className="space-y-5">
                  <a href="tel:+15127618208" className="flex items-center gap-3 text-[var(--color-deep-charcoal)] hover:text-[var(--color-surmount-red)] transition-colors">
                    <Phone className="w-5 h-5 text-[var(--color-surmount-red)] shrink-0" />
                    <span>+1 512 761 8208</span>
                  </a>
                  <a href="mailto:Info@surmountcxo.com" className="flex items-center gap-3 text-[var(--color-deep-charcoal)] hover:text-[var(--color-surmount-red)] transition-colors">
                    <Mail className="w-5 h-5 text-[var(--color-surmount-red)] shrink-0" />
                    <span>Info@surmountcxo.com</span>
                  </a>
                  <div className="flex items-start gap-3 text-[var(--color-deep-charcoal)]">
                    <MapPin className="w-5 h-5 text-[var(--color-surmount-red)] shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium">Austin, Texas (HQ)</span>
                      <span className="text-sm text-[var(--color-stone-gray)]">Serving U.S. mid-market growth companies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Presence */}
              <div>
                <h3 className="text-xl font-display mb-6">Global Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {offices.map((office, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-[var(--color-cloud-white)] border border-[var(--color-platform-gray)]">
                      <span className="text-2xl">{office.flag}</span>
                      <div>
                        <span className="block text-sm font-medium text-[var(--color-summit-black)]">{office.city}</span>
                        <span className="text-xs text-[var(--color-stone-gray)] uppercase tracking-wider">{office.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-[var(--color-stone-gray)]">
                  <Globe2 className="w-4 h-4" />
                  <span>Operating across 4 time zones to support global growth</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
