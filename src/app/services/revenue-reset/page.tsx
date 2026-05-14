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
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-4">90-Day Fixed-Fee Intensive</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display mb-6 leading-[1.1]">
              Revenue Reset
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 font-light leading-relaxed">
              A fixed-fee, 90-day diagnostic and execution sprint that identifies revenue leakage, rebuilds your GTM foundation, and delivers quick wins &mdash; while setting the stage for predictable hypergrowth. Designed for mid-market B2B companies between <span className="text-white font-medium">$5M and $150M ARR</span>.
            </p>
            <Button href="/contact" variant="cta" size="lg">
              Start Your Revenue Reset
            </Button>
          </FadeIn>
        </Container>
      </section>

      {/* What's Included (8 bullets) */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display mb-8">What&apos;s Included</h2>
              <ul className="space-y-5">
                {[
                  "Full Revenue Diagnostic (pipeline, forecast, process)",
                  "ICP & Persona Validation",
                  "Sales Process Audit & Redesign",
                  "CRM Cleanup & Dashboard Build",
                  "GTM Roadmap for the Next 12 Months",
                  "Quick-Win Execution (close stuck deals, fix leakage)",
                  "Agentic AI Readiness Audit — We identify which revenue workflows are prime candidates for AI automation and provide a prioritized AI implementation roadmap as part of your 12-month GTM plan.",
                  "Transition Playbook — A clear recommendation for whether your next step should be a Scale Retainer, Outsourced CRO engagement, or full-time CRO hire — with criteria, timing, and comp modeling.",
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
                Long enough to see real results. Short enough to force urgency. Our Revenue Reset is designed for companies between <span className="font-medium">$5M&ndash;$150M ARR</span> who know something is broken but can&apos;t pinpoint exactly what.
              </p>
              <p className="text-[var(--color-deep-charcoal)] leading-relaxed mb-6 italic">
                Fixed-fee means no surprises. You know the cost, the timeline, and the deliverables before signing. If we find a quick win in week one, we execute it &mdash; we don&apos;t save it for the retainer.
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

      {/* The 90-Day Arc (with deliverables) */}
      <Section className="bg-[var(--color-cloud-white)]">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-display mb-12 text-center">The 90-Day Arc</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Weeks 1-3",
                title: "Diagnose",
                icon: Target,
                activities: "Full pipeline audit, stakeholder interviews, CRM deep-dive, ICP validation, forecast health assessment, stage definition review, win/loss analysis, tech stack evaluation, AI readiness scan.",
                deliverable: "Revenue Diagnostic Report: pipeline health score, top 5 leakage points, ICP clarity rating, forecast accuracy baseline."
              },
              {
                phase: "Weeks 4-8",
                title: "Build",
                icon: Zap,
                activities: "Process redesign, dashboard build (v1), messaging alignment, stage exits and qualification criteria, quick-win deal execution, enablement asset creation, CRM cleanup, AI workflow identification.",
                deliverable: "Live Revenue Dashboard, Redesigned Sales Process, Quick-Win Execution Log, Messaging Playbook."
              },
              {
                phase: "Weeks 9-12",
                title: "Hand Off",
                icon: BarChart,
                activities: "12-month GTM roadmap delivery, team coaching and enablement, hiring plan and compensation modeling, AI implementation roadmap, Transition Playbook with explicit recommendation for next engagement tier.",
                deliverable: "12-Month GTM Roadmap, Hiring Plan, AI Readiness Roadmap, Transition Playbook."
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="p-8 bg-white border border-[var(--color-platform-gray)] hover:border-[var(--color-surmount-red)] transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-5 h-5 text-[var(--color-stone-gray)]" />
                    <span className="font-mono text-sm uppercase tracking-widest text-[var(--color-stone-gray)]">{item.phase}</span>
                  </div>
                  <item.icon className="w-10 h-10 text-[var(--color-surmount-red)] mb-4" />
                  <h3 className="text-2xl font-display mb-3">{item.title}</h3>
                  <p className="text-[var(--color-deep-charcoal)]/80 text-sm leading-relaxed mb-6">{item.activities}</p>
                  <div className="mt-auto pt-4 border-t border-[var(--color-platform-gray)]">
                    <p className="text-xs uppercase tracking-widest text-[var(--color-summit-black)] font-medium mb-2">Deliverable</p>
                    <p className="text-sm text-[var(--color-deep-charcoal)] leading-relaxed">{item.deliverable}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Transition Path (NEW) */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4">What Comes After the Reset?</h2>
            <p className="text-lg text-[var(--color-deep-charcoal)]/80">
              The Revenue Reset ends with a clear recommendation. We&apos;ll tell you exactly which engagement model fits your next stage &mdash; and why.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-[var(--color-summit-black)]">
                  <th className="py-4 px-4 font-display text-lg w-1/3">If You Need&hellip;</th>
                  <th className="py-4 px-4 font-display text-lg text-[var(--color-surmount-red)] w-1/3">We Recommend&hellip;</th>
                  <th className="py-4 px-4 font-display text-lg w-1/3">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    need: "Continued revenue leadership 2–3 days/week",
                    rec: "Scale Retainer (3–6 months)",
                    why: "You have a team; you need an operator to run the system and keep discipline.",
                    link: "/services/fractional-cro",
                  },
                  {
                    need: "Effectively a full-time CRO without the cost",
                    rec: "Outsourced CRO (6+ months)",
                    why: "You're not yet ready to justify a $300k+ executive hire, but need full-seat coverage.",
                    link: "/services/fractional-cro",
                  },
                  {
                    need: "AI-native workflows for your sales team",
                    rec: "Skills AI Engagement",
                    why: "Your process is clean; now it's time to 10x operator output with agentic tools.",
                    link: "/services/skills-ai",
                  },
                  {
                    need: "Offshore execution capacity at scale",
                    rec: "GCC Accelerator",
                    why: "You need to grow headcount in RevOps, support, or GTM — without US labor costs.",
                    link: "/services/gcc-accelerator",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[var(--color-platform-gray)] hover:bg-[var(--color-cloud-white)]/50">
                    <td className="py-5 px-4 text-[var(--color-deep-charcoal)] align-top text-sm">{row.need}</td>
                    <td className="py-5 px-4 font-medium text-[var(--color-summit-black)] align-top">
                      <a href={row.link} className="hover:text-[var(--color-surmount-red)] transition-colors inline-flex items-center gap-2">
                        {row.rec} <ArrowRight className="w-4 h-4" />
                      </a>
                    </td>
                    <td className="py-5 px-4 text-[var(--color-deep-charcoal)]/70 align-top text-sm">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Stats (4 expanded) */}
      <Section className="bg-[var(--color-summit-black)] text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-white/20 pt-8 md:pt-12">
            {[
              { value: "90 Days", label: "Fixed-Fee Timeline" },
              { value: "3x", label: "Pipeline ROI" },
              { value: "$5M–$150M", label: "ARR Target Range" },
              { value: "12 Months", label: "GTM Roadmap Horizon" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col gap-2">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono text-[var(--color-surmount-red)] break-words">{stat.value}</span>
                <span className="text-xs sm:text-sm uppercase tracking-widest text-white/60">{stat.label}</span>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section className="bg-[var(--color-deep-charcoal)] text-white text-center">
        <Container className="flex flex-col items-center gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display">Stop Guessing. Start Knowing.</h2>
          <p className="text-white/70 max-w-xl">
            In 90 days, you&apos;ll have a complete picture of where revenue is leaking, what&apos;s fixable fast, and exactly what to build next. Fixed fee. Defined deliverables. No retainer lock-in required.
          </p>
          <Button href="/contact" variant="cta" size="lg">
            Start Your Revenue Reset <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Container>
      </Section>
    </main>
  );
}
