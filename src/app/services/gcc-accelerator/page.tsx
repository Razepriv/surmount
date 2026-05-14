"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SceneWrapper, PlaceholderGeo } from "@/components/3d/SceneWrapper";
import { FadeIn } from "@/components/anim/FadeIn";
import { Check, Globe2, Zap, Trophy, Users, Scale, ArrowRight, Brain, ShieldCheck, Clock, TrendingUp } from "lucide-react";

export default function GCCAcceleratorPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] md:min-h-[80vh] lg:h-screen lg:min-h-[700px] flex items-center overflow-hidden bg-[var(--color-summit-black)] text-white">
        <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-32 md:py-20 md:h-full">
          <FadeIn direction="up">
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-4">
              Build &rarr; Scale &rarr; Optimize &rarr; Transfer
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-6 leading-[1.1]">
              GCC Business Accelerator &mdash; <br/> <span className="text-[var(--color-surmount-red)]">Your Talent, Your IP, Your Competitive Edge</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 font-light leading-relaxed">
              Launch a fully owned India-based Global Capability Center in 16&ndash;24 weeks. Capture <span className="text-white font-medium">40&ndash;60% in annual cost savings</span>, <span className="text-white font-medium">400%+ 3-year ROI</span>, and <span className="text-white font-medium">12&ndash;18 month payback</span>. We run the full journey &mdash; you own everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="cta" size="lg">
                Build Your GCC Team &mdash; Own Your Talent
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--color-summit-black)]">
                Free Workshop Assessment
              </Button>
            </div>
          </FadeIn>

          <div className="hidden md:block h-full w-full relative">
            <SceneWrapper className="w-full h-full">
              <PlaceholderGeo />
            </SceneWrapper>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50">
               <Globe2 className="w-64 h-64 text-[var(--color-surmount-red)] animate-pulse" strokeWidth={0.5} />
             </div>
          </div>
        </Container>
      </section>

      {/* ROI Snapshot */}
      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-4">The Business Case at a Glance</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4">Why a GCC Pays for Itself</h2>
            <p className="text-lg text-[var(--color-deep-charcoal)]/80">
              Bengaluru and Hyderabad market economics. Real outcomes from real builds &mdash; not projections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0.05}>
              <div className="p-8 bg-[var(--color-cloud-white)] border border-[var(--color-platform-gray)] hover:border-[var(--color-surmount-red)] transition-colors h-full">
                <Clock className="w-10 h-10 text-[var(--color-surmount-red)] mb-6" />
                <div className="text-4xl sm:text-5xl font-mono text-[var(--color-summit-black)] mb-2">12&ndash;18<span className="text-2xl">mo</span></div>
                <div className="text-sm uppercase tracking-widest text-[var(--color-stone-gray)] mb-3">Payback Period</div>
                <p className="text-sm text-[var(--color-deep-charcoal)]/70">On GCC setup investment, typical Tech + Ops mix.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-8 bg-[var(--color-cloud-white)] border-2 border-[var(--color-surmount-red)] h-full relative">
                <TrendingUp className="w-10 h-10 text-[var(--color-surmount-red)] mb-6" />
                <div className="text-4xl sm:text-5xl font-mono text-[var(--color-surmount-red)] mb-2">400%+</div>
                <div className="text-sm uppercase tracking-widest text-[var(--color-stone-gray)] mb-3">3-Year ROI</div>
                <p className="text-sm text-[var(--color-deep-charcoal)]/70">Cumulative return on Surmount-managed GCC builds.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="p-8 bg-[var(--color-cloud-white)] border border-[var(--color-platform-gray)] hover:border-[var(--color-surmount-red)] transition-colors h-full">
                <Scale className="w-10 h-10 text-[var(--color-surmount-red)] mb-6" />
                <div className="text-4xl sm:text-5xl font-mono text-[var(--color-summit-black)] mb-2">40&ndash;60%</div>
                <div className="text-sm uppercase tracking-widest text-[var(--color-stone-gray)] mb-3">Annual Savings</div>
                <p className="text-sm text-[var(--color-deep-charcoal)]/70">Ongoing cost reduction vs equivalent US headcount.</p>
              </div>
            </FadeIn>
          </div>

          <p className="text-xs text-[var(--color-stone-gray)] text-center italic max-w-3xl mx-auto">
            *Estimates based on Bengaluru/Hyderabad market rates. Actual savings vary by function, seniority mix, and location.
          </p>
        </Container>
      </Section>

      {/* 4-Phase Roadmap */}
      <Section className="bg-[var(--color-cloud-white)]">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-4">The Accelerator Roadmap</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6">Build &rarr; Scale &rarr; Optimize &rarr; Transfer</h2>
            <p className="text-lg text-[var(--color-deep-charcoal)]/80">
              From feasibility to a fully operational GCC in 16&ndash;24 weeks. We handle the heavy lifting while you retain IP, culture, and full ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                name: "Discovery & Blueprint",
                duration: "Weeks 2–6",
                desc: "Half-day technical workshop + remote deep-dive. Feasibility study, location strategy, function scope, cost modeling, hiring plan, governance, security/compliance baseline, and 12-week go-live plan.",
                accent: false,
              },
              {
                num: "02",
                name: "Launch",
                duration: "Weeks 7–18",
                desc: "Entity setup, bank accounts, IP agreements, GCC Head hire, functional lead recruitment, office readiness, IT infrastructure, process documentation, KPI framework. 2× Agentic AI skills implemented alongside launch.",
                accent: true,
              },
              {
                num: "03",
                name: "Operate & Scale",
                duration: "Month 5 onwards",
                desc: "Talent lifecycle management, workspace/IT, finance/tax/regulatory coordination, continuous optimization. Performance dashboards tracking time-to-hire, attrition, productivity, cost/FTE, compliance maturity.",
                accent: false,
              },
              {
                num: "04",
                name: "Transfer (Optional)",
                duration: "Month 12–24 (BOT)",
                desc: "Full operational handover when you're ready to manage independently. Compliance standardization, process finalization, leadership transition, ongoing advisory post-transfer. Zero operational risk.",
                accent: false,
              },
            ].map((phase, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className={`relative h-full ${phase.accent ? "bg-[var(--color-summit-black)] text-white border-none" : "bg-white border-[var(--color-platform-gray)]"}`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-display font-bold mb-6 ${
                    phase.accent
                      ? "bg-[var(--color-surmount-red)] text-white"
                      : "bg-white border-2 border-[var(--color-surmount-red)] text-[var(--color-summit-black)]"
                  }`}>
                    {phase.num}
                  </div>
                  <h3 className={`text-xl font-display mb-2 ${phase.accent ? "text-white" : ""}`}>{phase.name}</h3>
                  <div className={`font-mono text-xs uppercase tracking-widest mb-4 ${phase.accent ? "text-white/60" : "text-[var(--color-stone-gray)]"}`}>{phase.duration}</div>
                  <p className={`text-sm leading-relaxed ${phase.accent ? "text-white/80" : "text-[var(--color-deep-charcoal)]/80"}`}>{phase.desc}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Three Engagement Models */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4">Three Engagement Models</h2>
            <p className="text-lg text-[var(--color-deep-charcoal)]/80">
              Pick the level of operational control that matches your risk tolerance and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            <Card variant="outline" className="border border-[var(--color-terrain-beige)] h-full">
              <h3 className="text-2xl font-display mb-2">Advisory</h3>
              <p className="text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">Strategy + Planning</p>
              <p className="text-sm text-[var(--color-deep-charcoal)]/80 mb-6 italic">
                For companies in early evaluation or building the business case for leadership.
              </p>
              <ul className="space-y-3 mb-2">
                {[
                  "GCC feasibility assessment",
                  "Location & model selection",
                  "Business case & ROI model",
                  "Entity structure roadmap",
                  "Executive briefing deck",
                  "Year 1 quarterly advisory sessions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-[var(--color-surmount-red)] mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="border-2 border-[var(--color-surmount-red)] relative shadow-xl transform md:-translate-y-4 z-10 bg-white h-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-surmount-red)] text-white px-4 py-1 text-xs font-medium uppercase tracking-widest">
                Most Popular
              </div>
              <h3 className="text-2xl font-display mb-2">Build</h3>
              <p className="text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">Full Launch Execution</p>
              <p className="text-sm text-[var(--color-deep-charcoal)]/80 mb-6 italic">
                For companies ready to launch a 25&ndash;100 person GCC.
              </p>
              <ul className="space-y-3 mb-2">
                {[
                  "Everything in Advisory",
                  "Legal entity setup",
                  "Office & infrastructure",
                  "Leadership & team hiring (initial cohort)",
                  "90-day ops launch playbook",
                  "Agentic AI skill deployment",
                  "Ongoing advisory post-launch",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-[var(--color-surmount-red)] mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card variant="outline" className="border border-[var(--color-terrain-beige)] h-full">
              <h3 className="text-2xl font-display mb-2">Build-Operate-Transfer</h3>
              <p className="text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">Managed GCC (BOT)</p>
              <p className="text-sm text-[var(--color-deep-charcoal)]/80 mb-6 italic">
                For companies wanting zero operational risk before ownership.
              </p>
              <ul className="space-y-3 mb-2">
                {[
                  "Everything in Build",
                  "Surmount-managed operations P&L",
                  "Dedicated GCC Head on-ground",
                  "12–24 month managed run",
                  "Clean ownership transfer",
                  "We hand you a running business",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-[var(--color-surmount-red)] mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <p className="text-center text-[var(--color-deep-charcoal)]/70 mt-12 italic text-sm">
            All engagements are scoped per company. We never publish $ figures &mdash; you&apos;ll get a fixed-fee, milestone-based proposal after your free workshop assessment.
          </p>
        </Container>
      </Section>

      {/* Success Metrics */}
      <Section className="bg-[var(--color-cloud-white)]">
        <Container>
           <h2 className="text-3xl sm:text-4xl font-display mb-12">GCC Success Metrics</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Operational Efficiency", icon: Zap, desc: "Cost arbitrage meets process optimization." },
               { title: "Talent Retention", icon: Users, desc: "Lower attrition than pure outsourcing models." },
               { title: "Innovation", icon: Trophy, desc: "R&D and product ownership, not just tickets." },
               { title: "Corporate Alignment", icon: ShieldCheck, desc: "Culture extension, not a vendor relationship." }
             ].map((item, i) => (
                <Card key={i} className="bg-white hover:border-[var(--color-surmount-red)] transition-colors">
                  <item.icon className="w-8 h-8 text-[var(--color-surmount-red)] mb-4" />
                  <h3 className="text-xl font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-deep-charcoal)]/80">{item.desc}</p>
                </Card>
             ))}
           </div>
        </Container>
      </Section>

      {/* Agentic AI Integration */}
      <Section className="bg-[var(--color-summit-black)] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="up">
              <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-4">AI + Human Delivery</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6">Power Your GCC with Agentic AI</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                Every Surmount GCC engagement includes the option to deploy Claude-powered AI skills across your capability center&apos;s functions. Your GCC team becomes AI-augmented from day one &mdash; working with custom agentic tools built for RevOps, Finance, GTM, Engineering, Customer Support, and more.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                The result: a GCC that doesn&apos;t just save cost &mdash; it <span className="text-[var(--color-surmount-red)] font-medium">multiplies output</span>.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "AI skills deployment included in Build and BOT engagements",
                  "Human-in-the-loop workflows that combine AI speed with human judgment",
                  "8 functional domains covered: RevOps, Finance & Admin, GTM, Engineering, Enablement, Analytics, Customer Support, Cross-functional Delivery",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-[var(--color-surmount-red)] shrink-0 mt-1.5" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/services/skills-ai" variant="cta" size="lg">
                Learn About Skills AI <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 sm:p-10 border border-white/10 hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                <Brain className="w-16 h-16 text-[var(--color-surmount-red)] mb-8" strokeWidth={0.75} />
                <h3 className="text-2xl font-display mb-4">The AI + GCC Compound Effect</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Pure AI without people produces hallucinations. Pure offshoring without AI produces ticket factories. Combined, you get an owned, AI-augmented operations capability that scales your output without scaling your cost.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-mono text-[var(--color-surmount-red)] mb-1">3x</div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Operator Capacity</div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono text-[var(--color-surmount-red)] mb-1">40-60%</div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Global Expansion */}
      <Section className="bg-[var(--color-summit-black)] text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up">
              <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-4">New Service</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6">Global Expansion</h2>
              <p className="text-xl text-white/80 mb-8 font-light leading-relaxed">
                For GCCs and global companies looking to establish or expand their US presence. We bring the operator network, market entry playbook, and revenue infrastructure to help you break into North America.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "US Market Entry Strategy",
                  "Entity Setup & Compliance",
                  "Revenue & GTM Infrastructure",
                  "Executive Network Access",
                  "Go-to-Market Execution Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-[var(--color-surmount-red)] shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="cta" size="lg">
                Explore US Expansion
              </Button>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-10 border border-white/10 hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                <Globe2 className="w-16 h-16 text-[var(--color-surmount-red)] mb-8" strokeWidth={0.75} />
                <h3 className="text-2xl font-display mb-4">Who This Is For</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  If your GCC or global technology company has proven itself at home and is ready to capture US market share, Surmount provides the fractional CRO leadership and operational scaffolding to make the move with confidence.
                </p>
                <div className="space-y-3 text-sm font-mono uppercase tracking-widest text-white/50">
                  <div className="flex items-center gap-2"><span className="w-2 h-2 bg-[var(--color-surmount-red)] rounded-full"></span> Established GCCs entering the US</div>
                  <div className="flex items-center gap-2"><span className="w-2 h-2 bg-[var(--color-surmount-red)] rounded-full"></span> Global product companies scaling sales</div>
                  <div className="flex items-center gap-2"><span className="w-2 h-2 bg-[var(--color-surmount-red)] rounded-full"></span> Non-US firms seeking US partnerships</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* GCC vs. BPO (expanded with 2 new rows) */}
      <Section className="bg-white">
        <Container>
           <div className="text-center mb-12">
             <h2 className="text-3xl sm:text-4xl font-display mb-4">GCC vs. Traditional BPO</h2>
             <p className="text-lg text-[var(--color-deep-charcoal)]/70 max-w-2xl mx-auto">
               Understanding the structural advantages of owning your capability center versus relying on a traditional outsourcing model.
             </p>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse min-w-[600px]">
               <thead>
                 <tr className="border-b border-[var(--color-summit-black)]">
                   <th className="py-4 font-display text-xl w-1/3">Criteria</th>
                   <th className="py-4 font-display text-xl text-[var(--color-surmount-red)] w-1/3 bg-[var(--color-cloud-white)] px-6">GCC Model</th>
                   <th className="py-4 font-display text-xl text-[var(--color-stone-gray)] w-1/3 px-6">Traditional BPO</th>
                 </tr>
               </thead>
               <tbody>
                 {[
                   { criteria: "IP Ownership", our: "100% Client Owned", their: "Vendor Owned" },
                   { criteria: "Culture", our: "Extension of HQ", their: "Vendor Culture" },
                   { criteria: "Pricing Model", our: "Transparent Cost + Mgmt Fee", their: "Black Box Rate Card" },
                   { criteria: "Exit Strategy", our: "Transferable Entity (BOT pathway)", their: "High Friction / Lock-in" },
                   { criteria: "Talent Quality", our: "Top 10% — Product, R&D, Engineering", their: "Average — Support / Maintenance" },
                   { criteria: "AI Integration", our: "Agentic AI skills deployed into your workflows", their: "Generic tooling decided by vendor" },
                   { criteria: "Time to Launch", our: "16–24 weeks with Surmount", their: "3–6 months setup; quality variable" },
                 ].map((row, i) => (
                   <tr key={i} className="border-b border-[var(--color-terrain-beige)] hover:bg-[var(--color-cloud-white)]/30">
                     <td className="py-4 font-medium">{row.criteria}</td>
                     <td className="py-4 font-medium text-[var(--color-summit-black)] bg-[var(--color-cloud-white)] px-6 border-l border-r border-white">{row.our}</td>
                     <td className="py-4 text-[var(--color-stone-gray)] px-6">{row.their}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </Container>
      </Section>

      {/* Surmount vs. Alternatives */}
      <Section className="bg-[var(--color-cloud-white)]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display mb-4">Surmount vs. The Alternatives</h2>
            <p className="text-lg text-[var(--color-deep-charcoal)]/70 max-w-2xl mx-auto">
              How an operator-led firm differs from large consultancies on the things that actually matter.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px] bg-white">
              <thead>
                <tr className="border-b border-[var(--color-summit-black)]">
                  <th className="py-4 px-4 font-display text-xl w-1/3">Criterion</th>
                  <th className="py-4 px-4 font-display text-xl text-[var(--color-stone-gray)] w-1/3">Big-4 / Large Consultancy</th>
                  <th className="py-4 px-4 font-display text-xl text-[var(--color-surmount-red)] w-1/3 bg-[var(--color-cloud-white)]">Surmount CxO Partners</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: "Who executes?", a: "Junior analysts write reports; partners rarely visible", s: "Founders personally lead every engagement" },
                  { c: "Execution included?", a: "Reports + frameworks only — you run the build", s: "Full execution: entity, office, hiring, compliance, AI" },
                  { c: "India ground reality?", a: "US-side view of India; generic location scoring", s: "India-side daily execution; real government relationships" },
                  { c: "Pricing model?", a: "Open-ended retainers; hourly billing; scope creep common", s: "Fixed-fee, milestone-based; you know the cost upfront" },
                  { c: "Time to launch?", a: "12–18 months (advisory + transition phases)", s: "16–24 weeks to fully operational GCC" },
                  { c: "AI integration?", a: "Bolt-on advisory; generic recommendations", s: "Custom Claude Skills AI built into GCC workflows" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[var(--color-terrain-beige)]">
                    <td className="py-4 px-4 font-medium align-top">{row.c}</td>
                    <td className="py-4 px-4 text-[var(--color-stone-gray)] align-top text-sm">{row.a}</td>
                    <td className="py-4 px-4 font-medium text-[var(--color-summit-black)] bg-[var(--color-cloud-white)] align-top text-sm">{row.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section className="bg-[var(--color-deep-charcoal)] text-white text-center">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display mb-8">Ready to Scale Globally?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
            Free workshop assessment from our GCC and AI experts. No retainer, no commitment &mdash; just a clear path forward.
          </p>
          <Button href="/contact" variant="cta" size="lg">
             Build Your GCC Team &mdash; Own Your Talent
          </Button>
        </Container>
      </Section>
    </main>
  );
}
