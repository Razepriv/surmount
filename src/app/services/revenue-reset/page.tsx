"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/anim/FadeIn";
import { Check, ArrowRight, BarChart, Target, Zap, Clock } from "lucide-react";

export default function RevenueResetPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-[var(--color-summit-black)] text-white">
        <Container className="relative z-10 py-32 md:py-20">
          <FadeIn direction="up">
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-4">90-Day Intensive</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display mb-6 leading-[1.1]">
              Revenue Reset
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 font-light leading-relaxed">
              A focused 90-day diagnostic and execution sprint that identifies revenue leakage, rebuilds your GTM foundation, and delivers quick wins while setting the stage for sustainable growth.
            </p>
            <Button href="/contact" variant="cta" size="lg">
              Start Your 90-Day Reset
            </Button>
          </FadeIn>
        </Container>
      </section>

      {/* What You Get */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display mb-8">What&apos;s Included</h2>
              <ul className="space-y-6">
                {[
                  "Full Revenue Diagnostic (pipeline, forecast, process)",
                  "ICP & Persona Validation",
                  "Sales Process Audit & Redesign",
                  "CRM Cleanup & Dashboard Build",
                  "GTM Roadmap for the Next 12 Months",
                  "Quick-Win Execution (close stuck deals, fix leakage)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[var(--color-deep-charcoal)]">
                    <Check className="w-5 h-5 text-[var(--color-surmount-red)] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--color-cloud-white)] p-8 md:p-10 border-l-4 border-[var(--color-surmount-red)]">
              <h3 className="text-2xl font-display mb-6">Why 90 Days?</h3>
              <p className="text-[var(--color-deep-charcoal)] leading-relaxed mb-6">
                Long enough to see real results. Short enough to force urgency. Our Revenue Reset is designed for companies between $5M&ndash;$50M ARR who know something is broken but can&apos;t pinpoint exactly what.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-3xl font-mono text-[var(--color-surmount-red)] font-bold">90</div>
                  <div className="text-sm uppercase tracking-widest mt-1">Days</div>
                </div>
                <div>
                  <div className="text-3xl font-mono text-[var(--color-surmount-red)] font-bold">3x</div>
                  <div className="text-sm uppercase tracking-widest mt-1">Pipeline ROI</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section className="bg-[var(--color-cloud-white)]">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-display mb-12 text-center">The 90-Day Arc</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { phase: "Weeks 1-3", title: "Diagnose", icon: Target, desc: "Full pipeline audit, stakeholder interviews, CRM deep-dive, ICP validation." },
              { phase: "Weeks 4-8", title: "Build", icon: Zap, desc: "Process redesign, dashboard creation, messaging alignment, quick-win execution." },
              { phase: "Weeks 9-12", title: "Hand Off", icon: BarChart, desc: "12-month roadmap delivery, team coaching, hiring plan, transition playbook." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="p-8 bg-white border border-[var(--color-platform-gray)] hover:border-[var(--color-surmount-red)] transition-colors h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-5 h-5 text-[var(--color-stone-gray)]" />
                    <span className="font-mono text-sm uppercase tracking-widest text-[var(--color-stone-gray)]">{item.phase}</span>
                  </div>
                  <item.icon className="w-10 h-10 text-[var(--color-surmount-red)] mb-4" />
                  <h3 className="text-2xl font-display mb-3">{item.title}</h3>
                  <p className="text-[var(--color-deep-charcoal)]/80">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-[var(--color-deep-charcoal)] text-white text-center">
        <Container className="flex flex-col items-center gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display">See Where Your Revenue Is Leaking</h2>
          <p className="text-white/70 max-w-xl">
            In 90 days, you&apos;ll have a clear picture of what&apos;s working, what&apos;s broken, and what to do next.
          </p>
          <Button href="/contact" variant="cta" size="lg">
            Start Your 90-Day Reset <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Container>
      </Section>
    </main>
  );
}
