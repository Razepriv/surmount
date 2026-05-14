"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/anim/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Globe2, TrendingUp, Brain, Layers } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* Hero */}
      <Section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-24 bg-[var(--color-summit-black)] text-white">
        <Container>
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mb-8">
              Two Engines. <br/> <span className="text-[var(--color-surmount-red)]">Infinite Scale.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl leading-relaxed">
              Surmount embeds fractional CRO leadership to hypergrow your revenue &mdash; then scales your execution through AI-native skills and Global Capability Centers. <span className="text-white font-medium">One firm. Three levers. Measurable outcomes.</span>
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Three Service Cards */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Fractional CRO */}
            <FadeIn>
              <div className="group relative border border-[var(--color-platform-gray)] bg-[var(--color-cloud-white)] p-8 sm:p-10 md:p-12 h-full hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  <TrendingUp className="w-20 h-20 sm:w-32 sm:h-32 text-[var(--color-surmount-red)]" strokeWidth={0.5} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-display mb-6">Fractional CRO for Sales Hypergrowth</h2>
                  <p className="text-base sm:text-lg text-[var(--color-deep-charcoal)] mb-8 leading-relaxed">
                    Embed a proven CRO operator &mdash; not an advisor &mdash; who owns your revenue engine from day one. We design the system, run the cadence, and hand you the keys when you&apos;re ready for a full-time hire. <span className="font-medium">Fixed-fee entry. Retainer-based scale.</span>
                  </p>
                  <ul className="space-y-3 mb-10 text-[var(--color-stone-gray)] text-sm">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Revenue Reset (90-Day)</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Scale Retainer</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Outsourced CRO + Agentic AI</li>
                  </ul>
                  <Button variant="outline" href="/services/fractional-cro" className="group-hover:bg-[var(--color-summit-black)] group-hover:text-white group-hover:border-[var(--color-summit-black)]">
                    Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>

            {/* Skills AI */}
            <FadeIn delay={0.2}>
              <div className="group relative border border-[var(--color-platform-gray)] bg-[var(--color-cloud-white)] p-8 sm:p-10 md:p-12 h-full hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  <Brain className="w-20 h-20 sm:w-32 sm:h-32 text-[var(--color-surmount-red)]" strokeWidth={0.5} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-display mb-6">Agentic Skills AI &mdash; Built for Every Business Function</h2>
                  <p className="text-base sm:text-lg text-[var(--color-deep-charcoal)] mb-8 leading-relaxed">
                    We develop custom Claude-powered AI skills across RevOps, Finance &amp; Administration, GTM Operations, Engineering Services, Enablement, Analytics, Customer Support, and cross-functional delivery. <span className="font-medium">Deploy standalone or pair with your GCC as the AI brain behind human-in-the-loop execution.</span>
                  </p>
                  <ul className="space-y-3 mb-10 text-[var(--color-stone-gray)] text-sm">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Claude Skills Consulting</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Agentic Workflows</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>GCC Integration</li>
                  </ul>
                  <Button variant="outline" href="/services/skills-ai" className="group-hover:bg-[var(--color-summit-black)] group-hover:text-white group-hover:border-[var(--color-summit-black)]">
                    Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>

            {/* GCC Accelerator */}
            <FadeIn delay={0.4}>
              <div className="group relative border border-[var(--color-platform-gray)] bg-[var(--color-cloud-white)] p-8 sm:p-10 md:p-12 h-full hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  <Globe2 className="w-20 h-20 sm:w-32 sm:h-32 text-[var(--color-surmount-red)]" strokeWidth={0.5} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-display mb-6">GCC as a Business Accelerator &mdash; Build, Scale, Optimize, Transfer</h2>
                  <p className="text-base sm:text-lg text-[var(--color-deep-charcoal)] mb-8 leading-relaxed">
                    Launch your own India-based capability center and capture <span className="font-medium">40&ndash;60% in annual cost savings with 400%+ 3-year ROI</span>. We run the full journey &mdash; from feasibility to fully operational GCC &mdash; in as few as 16&ndash;24 weeks. You own the talent, the IP, and the culture.
                  </p>
                  <ul className="space-y-3 mb-10 text-[var(--color-stone-gray)] text-sm">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Discovery &amp; Blueprint</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Launch Execution</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Operate &amp; Optimize</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>BOT Transfer</li>
                  </ul>
                  <Button variant="outline" href="/services/gcc-accelerator" className="group-hover:bg-[var(--color-summit-black)] group-hover:text-white group-hover:border-[var(--color-summit-black)]">
                    Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Why Our Services Work (now 4 points incl. Integrated Delivery) */}
      <Section className="bg-[var(--color-summit-black)] text-white">
        <Container>
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4 text-center">Why Our Services Work</h2>
            <p className="text-center text-white/60 mb-12 md:mb-16 max-w-xl mx-auto">
              Every engagement is grounded in real operator experience &mdash; not theory.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FadeIn delay={0.1}>
              <div className="p-6 sm:p-8 border border-white/10 hover:border-[var(--color-surmount-red)] transition-colors duration-300 h-full">
                <div className="w-10 h-10 rounded-full bg-[var(--color-surmount-red)]/10 flex items-center justify-center text-[var(--color-surmount-red)] mb-6 text-xl font-display font-bold">01</div>
                <h3 className="text-xl sm:text-2xl font-display mb-4">Experienced Leaders</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Every engagement is led by operators with 20+ years of real-world revenue and GTM experience &mdash; not analysts, not junior associates. You get the principal, every time.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-6 sm:p-8 border border-white/10 hover:border-[var(--color-surmount-red)] transition-colors duration-300 h-full">
                <div className="w-10 h-10 rounded-full bg-[var(--color-surmount-red)]/10 flex items-center justify-center text-[var(--color-surmount-red)] mb-6 text-xl font-display font-bold">02</div>
                <h3 className="text-xl sm:text-2xl font-display mb-4">Proven Playbooks</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Battle-tested GTM playbooks, GCC launch frameworks, and AI workflow SOPs refined across multiple scale-ups and exits. No experimentation on your dime.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-6 sm:p-8 border border-white/10 hover:border-[var(--color-surmount-red)] transition-colors duration-300 h-full">
                <div className="w-10 h-10 rounded-full bg-[var(--color-surmount-red)]/10 flex items-center justify-center text-[var(--color-surmount-red)] mb-6 text-xl font-display font-bold">03</div>
                <h3 className="text-xl sm:text-2xl font-display mb-4">Measurable Outcomes</h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Every engagement is anchored to a KPI baseline set on Day 1. Revenue lift, GCC cost savings, and AI adoption rates are reported weekly. We hold ourselves to the number.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="p-6 sm:p-8 border-2 border-[var(--color-surmount-red)] bg-[var(--color-surmount-red)]/5 transition-colors duration-300 h-full">
                <div className="w-10 h-10 rounded-full bg-[var(--color-surmount-red)] flex items-center justify-center text-white mb-6">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display mb-4">Integrated Delivery</h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Our three services are designed to work together. A fractional CRO sets the strategy. Skills AI automates the execution. A GCC scales the headcount. Deploy one or combine all three.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </main>
  );
}
