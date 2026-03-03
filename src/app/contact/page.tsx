"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/anim/FadeIn";
import { Mail, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* 4.5 Hero Section */}
      <Section className="relative pt-48 pb-12 bg-[var(--color-summit-black)] text-white">
        <Container>
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-8xl font-display mb-8">Let's Talk Growth</h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl leading-relaxed">
              Ready to scale your revenue operations or expand your global footprint?
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-white -mt-12 pt-24">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information & Context */}
          <div className="space-y-12">
             <div>
                <h2 className="text-3xl font-display mb-6">Partner with Surmount</h2>
                <p className="text-[var(--color-deep-charcoal)] leading-relaxed mb-8">
                  Whether you need immediate fractional leadership or a long-term GCC strategy, our team is ready to deploy. We typically reply within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-[var(--color-surmount-red)] mr-4 mt-1" />
                    <div>
                      <span className="block font-medium text-[var(--color-summit-black)]">Email Us</span>
                      <a href="mailto:growth@surmount.com" className="text-[var(--color-stone-gray)] hover:text-[var(--color-surmount-red)] transition-colors">growth@surmount.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                     <MapPin className="w-6 h-6 text-[var(--color-surmount-red)] mr-4 mt-1" />
                     <div>
                        <span className="block font-medium text-[var(--color-summit-black)]">Headquarters</span>
                        <p className="text-[var(--color-stone-gray)]">San Francisco, CA & New York, NY</p>
                     </div>
                  </div>
                </div>
             </div>

             {/* Cal.com Embed Placeholder */}
             <div className="bg-[var(--color-cloud-white)] p-8 border border-[var(--color-platform-gray)] rounded-sm">
                <div className="flex items-center mb-4">
                   <Calendar className="w-6 h-6 text-[var(--color-summit-black)] mr-3" />
                   <h3 className="text-xl font-display">Book a Discovery Call</h3>
                </div>
                <p className="text-sm text-[var(--color-deep-charcoal)]/70 mb-6">
                  Skip the email tag and book a 30-minute consultation directly with our managing partners.
                </p>
                {/* Visual Placeholder for Embed */}
                <div className="w-full h-16 bg-white border border-dashed border-[var(--color-stone-gray)] flex items-center justify-center text-[var(--color-stone-gray)] text-sm font-mono mb-4">
                  [Cal.com Embed Widget]
                </div>
                <a href="#" className="inline-flex items-center text-[var(--color-surmount-red)] font-medium hover:underline">
                  View Availability <ArrowRight className="w-4 h-4 ml-2" />
                </a>
             </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--color-cloud-white)] p-8 md:p-12 border border-[var(--color-platform-gray)] shadow-sm">
             <h3 className="text-2xl font-display mb-8">Send us a message</h3>
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-[var(--color-summit-black)] uppercase tracking-wide">First Name</label>
                      <input type="text" id="firstName" className="w-full bg-white border border-[var(--color-platform-gray)] p-3 focus:outline-none focus:border-[var(--color-surmount-red)] transition-colors" placeholder="Jane" />
                   </div>
                   <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-[var(--color-summit-black)] uppercase tracking-wide">Last Name</label>
                      <input type="text" id="lastName" className="w-full bg-white border border-[var(--color-platform-gray)] p-3 focus:outline-none focus:border-[var(--color-surmount-red)] transition-colors" placeholder="Doe" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label htmlFor="email" className="text-sm font-medium text-[var(--color-summit-black)] uppercase tracking-wide">Work Email</label>
                   <input type="email" id="email" className="w-full bg-white border border-[var(--color-platform-gray)] p-3 focus:outline-none focus:border-[var(--color-surmount-red)] transition-colors" placeholder="jane@company.com" />
                </div>

                <div className="space-y-2">
                   <label htmlFor="interest" className="text-sm font-medium text-[var(--color-summit-black)] uppercase tracking-wide">I'm interested in...</label>
                   <select id="interest" className="w-full bg-white border border-[var(--color-platform-gray)] p-3 focus:outline-none focus:border-[var(--color-surmount-red)] transition-colors text-[var(--color-deep-charcoal)]">
                      <option>Fractional CRO Leadership</option>
                      <option>GCC Accelerator</option>
                      <option>RevOps Audit</option>
                      <option>Other</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-medium text-[var(--color-summit-black)] uppercase tracking-wide">Message</label>
                   <textarea id="message" rows={4} className="w-full bg-white border border-[var(--color-platform-gray)] p-3 focus:outline-none focus:border-[var(--color-surmount-red)] transition-colors" placeholder="Tell us about your current growth challenges..."></textarea>
                </div>

                <Button variant="primary" className="w-full justify-center">Send Message</Button>
             </form>
          </div>

        </Container>
      </Section>
    </main>
  );
}
