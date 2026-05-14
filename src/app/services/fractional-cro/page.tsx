"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SceneWrapper, PlaceholderGeo } from "@/components/3d/SceneWrapper";
import { FadeIn } from "@/components/anim/FadeIn";
import { Check, X, ArrowUpRight, BarChart, Users, Target, Brain, ArrowRight } from "lucide-react";

export default function FractionalCROPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] md:min-h-[80vh] lg:h-screen lg:min-h-[700px] flex items-center overflow-hidden bg-[var(--color-summit-black)] text-white">
        <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-32 md:py-20 md:h-full">
          <FadeIn direction="up">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display mb-6 leading-[1.1]">
              Fractional CRO for <br/> <span className="text-[var(--color-surmount-red)]">Sales Hypergrowth</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-lg mb-6 font-light leading-relaxed">
              Operator-led revenue leadership for mid-market companies ready to scale. Not advisory. Not consulting. We own the revenue system, run the cadence, and build the machine &mdash; until you&apos;re ready to hand the keys to a full-time CRO.
            </p>
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-8">
              Built for B2B SaaS, industrial, and PE-backed firms between $5M&ndash;$150M ARR
            </p>
            <div className="flex gap-4">
              <Button href="/contact" variant="cta" size="lg">
                Book a Fractional CRO Discovery Call
              </Button>
            </div>
          </FadeIn>

          <div className="hidden md:block h-full w-full">
            <SceneWrapper className="w-full h-full">
              <PlaceholderGeo />
            </SceneWrapper>
          </div>
        </Container>
      </section>

      {/* Why Mid-Market Revenue Stalls */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-display text-[var(--color-surmount-red)]">Why Mid-Market Revenue Stalls</h2>
              <ul className="space-y-6">
                {[
                  "Hired VP Sales too early ($250k mistake)",
                  "No pipeline discipline or qualification criteria",
                  "Forecast is fiction, not data-driven",
                  "Sales & Marketing working in silos",
                  "No AI-native workflows — reps still doing manual research, copy-paste follow-up, and gut-feel forecasting while competitors use agentic tools to outpace them"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-[var(--color-deep-charcoal)]">
                    <X className="w-6 h-6 text-[var(--color-surmount-red)] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--color-cloud-white)] p-10 border-l-4 border-[var(--color-surmount-red)]">
              <h3 className="text-2xl font-display mb-6">The Surmount Fix</h3>
              <p className="text-lg mb-6">
                We install a proven revenue operating system before you hire the expensive full-time leader. We build the machine, then hand over the keys.
              </p>
              <p className="text-base text-[var(--color-deep-charcoal)]/80 mb-6">
                Optionally, we can layer in Agentic AI workflows that turn your existing team into 10x operators &mdash; so you scale output without scaling headcount.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <div className="text-4xl font-mono text-[var(--color-summit-black)] font-bold">90</div>
                  <div className="text-sm uppercase tracking-widest mt-1">Day Reset</div>
                </div>
                <div>
                  <div className="text-4xl font-mono text-[var(--color-summit-black)] font-bold">3x</div>
                  <div className="text-sm uppercase tracking-widest mt-1">Pipeline ROI</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Revenue Engine Modules (Messaging Alignment replaced with AI-Native Execution Layer) */}
      <Section className="bg-[var(--color-cloud-white)]">
        <Container>
           <div className="mb-16">
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4">Revenue Engine Modules</h2>
             <p className="text-lg max-w-2xl text-[var(--color-deep-charcoal)]/80">
               Our system is modular. We deploy exactly what your revenue organization needs to scale.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { title: "Pipeline Discipline", icon: BarChart, desc: "Standardized stages, exit criteria, and deal hygiene protocols." },
               { title: "GTM System Redesign", icon: Target, desc: "ICP refinement, persona mapping, and value proposition alignment." },
               { title: "Hiring & Onboarding", icon: Users, desc: "Role definition, OTE modeling, and ramp-up playbooks." },
               { title: "RevOps & Tech Stack", icon: ArrowUpRight, desc: "CRM cleanup, automation, and dashboard visibility." },
               { title: "AI-Native Execution Layer", icon: Brain, desc: "We integrate Agentic AI tools (powered by Claude Skills AI) into your revenue workflows — prospecting automation, forecast intelligence, deal risk scoring, and CRM copilots. Pair with your fractional CRO engagement or purchase standalone.", featured: true },
               { title: "Improvement Cadence", icon: BarChart, desc: "Weekly forecast calls, QBRs, and coaching loops." }
             ].map((mod, i) => (
               <Card key={i} className={`h-full flex flex-col justify-between group cursor-pointer ${mod.featured ? "border-2 border-[var(--color-surmount-red)] bg-white" : "hover:border-[var(--color-surmount-red)]"}`}>
                 <div className="mb-4">
                   <mod.icon className="w-10 h-10 text-[var(--color-surmount-red)] mb-6" />
                   <h3 className="text-xl font-display mb-3">{mod.title}</h3>
                   <p className="text-[var(--color-deep-charcoal)]/80 text-sm leading-relaxed">{mod.desc}</p>
                 </div>
                 {mod.featured && (
                   <div className="mt-6 pt-4 border-t border-[var(--color-platform-gray)] text-xs font-mono uppercase tracking-widest text-[var(--color-surmount-red)]">
                     Powered by Claude Skills AI
                   </div>
                 )}
               </Card>
             ))}
           </div>
        </Container>
      </Section>

      {/* Engagement Models — RESTRUCTURED */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-10 md:mb-16 text-center">Engagement Models</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Tier 01: Revenue Reset */}
            <Card variant="outline" className="border border-[var(--color-terrain-beige)] h-full">
              <div className="font-mono text-xs text-[var(--color-stone-gray)] mb-2">01</div>
              <h3 className="text-2xl font-display mb-2">Revenue Reset</h3>
              <p className="text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">90 Days &mdash; Fixed Fee</p>
              <p className="text-sm text-[var(--color-deep-charcoal)]/80 mb-6 italic">
                Companies who know something is broken but can&apos;t pinpoint what. Entry product before committing to retainer.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Full diagnostic",
                  "ICP validation & stage definitions",
                  "Pipeline audit & dashboard build",
                  "12-month GTM roadmap",
                  "Quick-win execution",
                  "Defined deliverables, fixed price",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-[var(--color-surmount-red)] mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Button href="/services/revenue-reset" variant="ghost" size="sm" className="text-[var(--color-surmount-red)]">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            {/* Tier 02: Scale Retainer (Most Popular) */}
            <Card className="border-2 border-[var(--color-surmount-red)] relative shadow-xl transform md:-translate-y-4 z-10 bg-white h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-surmount-red)] text-white px-4 py-1 text-xs font-medium uppercase tracking-widest">
                Most Popular
              </div>
              <div className="font-mono text-xs text-[var(--color-stone-gray)] mb-2">02</div>
              <h3 className="text-2xl font-display mb-2">Scale Retainer</h3>
              <p className="text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">3&ndash;6 Months Min.</p>
              <p className="text-sm text-[var(--color-deep-charcoal)]/80 mb-6 italic">
                Companies with a functioning sales team that need senior revenue leadership to install operating discipline and accelerate to the next stage.
              </p>
              <ul className="space-y-3 mb-2">
                {[
                  "2–2.5 days/week fractional CRO",
                  "Full embedded leadership",
                  "Weekly forecast calls",
                  "ExCo participation",
                  "Hiring support & cadence management",
                  "Ongoing optimization",
                  "Retainer-based",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-[var(--color-surmount-red)] mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Tier 03: Outsourced CRO */}
            <Card variant="outline" className="border border-[var(--color-terrain-beige)] h-full">
              <div className="font-mono text-xs text-[var(--color-stone-gray)] mb-2">03</div>
              <h3 className="text-2xl font-display mb-2">Outsourced CRO</h3>
              <p className="text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">6+ Months (until full-time ready)</p>
              <p className="text-sm text-[var(--color-deep-charcoal)]/80 mb-6 italic">
                PE-backed firms, post-Series A/B companies, or organizations not yet ready to justify a $300k+ full-time CRO. We hold the seat until you&apos;re ready to fill it permanently.
              </p>
              <ul className="space-y-3 mb-2">
                {[
                  "3+ days/week or effectively full-time",
                  "Complete revenue system ownership",
                  "Strategy, hiring, compensation design",
                  "Forecasting & board reporting",
                  "Cross-functional alignment",
                  "Optional: AI skills layer via Claude Skills AI",
                  "Retainer-based",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-[var(--color-surmount-red)] mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-[var(--color-deep-charcoal)]/70 mb-6">Pricing is scoped to each engagement. Let&apos;s find the right fit for your business.</p>
            <Button href="/contact" variant="cta" size="lg">Book a Fractional CRO Discovery Call</Button>
          </div>
        </Container>
      </Section>

      {/* AI Coupling Banner */}
      <Section className="bg-[var(--color-summit-black)] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-4">AI + CRO Compound Effect</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6">Supercharge Your CRO Engagement with Agentic AI</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                Every Surmount fractional CRO engagement can be paired with our Claude Skills AI consulting service. We build custom agentic workflows for your sales and RevOps teams &mdash; prospecting automation, deal risk scoring, forecast intelligence, and CRM copilots. Your team executes <span className="text-[var(--color-surmount-red)] font-medium">3x faster without adding headcount</span>.
              </p>
              <p className="text-white/60 italic mb-8">Ask about AI integration in your discovery call.</p>
              <Button href="/services/skills-ai" variant="cta" size="lg">
                Learn About Skills AI <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-white/10">
                <Brain className="w-8 h-8 text-[var(--color-surmount-red)] mb-3" />
                <div className="text-2xl font-mono text-[var(--color-surmount-red)] mb-1">3x</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Output per Rep</div>
              </div>
              <div className="p-6 border border-white/10">
                <BarChart className="w-8 h-8 text-[var(--color-surmount-red)] mb-3" />
                <div className="text-2xl font-mono text-[var(--color-surmount-red)] mb-1">50%</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Research Time Saved</div>
              </div>
              <div className="p-6 border border-white/10">
                <Target className="w-8 h-8 text-[var(--color-surmount-red)] mb-3" />
                <div className="text-2xl font-mono text-[var(--color-surmount-red)] mb-1">2x</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Pipeline Coverage</div>
              </div>
              <div className="p-6 border border-white/10">
                <ArrowUpRight className="w-8 h-8 text-[var(--color-surmount-red)] mb-3" />
                <div className="text-2xl font-mono text-[var(--color-surmount-red)] mb-1">90d</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Time to Adopt</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* KPIs We Track */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4">KPIs We Track</h2>
            <p className="text-lg text-[var(--color-deep-charcoal)]/80">
              Every engagement is anchored to a KPI baseline set on Day 1. We hold ourselves to the number.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px] bg-white">
              <thead>
                <tr className="border-b-2 border-[var(--color-summit-black)]">
                  <th className="py-4 px-4 font-display text-lg w-2/5">Revenue KPI</th>
                  <th className="py-4 px-4 font-display text-lg">What It Measures</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { kpi: "Pipeline Coverage Ratio", measure: "Do you have enough opportunities to hit your number?" },
                  { kpi: "Stage Conversion Rates", measure: "Where are deals stalling or leaking?" },
                  { kpi: "Forecast Accuracy", measure: "Is your CRM data trustworthy for board reporting?" },
                  { kpi: "Sales Cycle Length", measure: "Are you speeding up or slowing down?" },
                  { kpi: "CAC Payback Period", measure: "Is new revenue being acquired profitably?" },
                  { kpi: "Marketing Contribution %", measure: "Is demand gen aligned with sales?" },
                  { kpi: "Time-to-Productivity (New Reps)", measure: "Are you onboarding and ramping fast enough?" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[var(--color-platform-gray)] hover:bg-[var(--color-cloud-white)]/50">
                    <td className="py-4 px-4 font-medium text-[var(--color-summit-black)]">{row.kpi}</td>
                    <td className="py-4 px-4 text-[var(--color-deep-charcoal)]/80">{row.measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    </main>
  );
}
