"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/anim/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Globe2, TrendingUp, Brain } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      <Section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-24 bg-[var(--color-summit-black)] text-white">
        <Container>
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mb-8">Our Services</h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl leading-relaxed">
              We provide the operational infrastructure for scale. Three engines working in tandem to drive revenue, talent, and AI-native execution.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <FadeIn>
              <div className="group relative border border-[var(--color-platform-gray)] bg-[var(--color-cloud-white)] p-8 sm:p-10 md:p-12 h-full hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  <TrendingUp className="w-20 h-20 sm:w-32 sm:h-32 text-[var(--color-surmount-red)]" strokeWidth={0.5} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-display mb-6">Fractional CRO</h2>
                  <p className="text-xl text-[var(--color-deep-charcoal)] mb-8 leading-relaxed">
                    Embedded revenue leadership to fix your funnel, hire your team, and build a predictable sales machine.
                  </p>
                  <ul className="space-y-4 mb-12 text-[var(--color-stone-gray)]">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Go-to-Market Strategy</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Sales Process Optimization</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Revenue Operations (RevOps)</li>
                  </ul>
                  <Button variant="outline" href="/services/fractional-cro" className="group-hover:bg-[var(--color-summit-black)] group-hover:text-white group-hover:border-[var(--color-summit-black)]">
                    Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group relative border border-[var(--color-platform-gray)] bg-[var(--color-cloud-white)] p-8 sm:p-10 md:p-12 h-full hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                 <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  <Globe2 className="w-20 h-20 sm:w-32 sm:h-32 text-[var(--color-surmount-red)]" strokeWidth={0.5} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-display mb-6">GCC Accelerator</h2>
                  <p className="text-xl text-[var(--color-deep-charcoal)] mb-8 leading-relaxed">
                    Launch your own Global Capability Center. Access top-tier engineering and product talent owned by you, not a vendor.
                  </p>
                  <ul className="space-y-4 mb-12 text-[var(--color-stone-gray)]">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Location Strategy</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Entity Setup & Compliance</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Talent Acquisition</li>
                  </ul>
                  <Button variant="outline" href="/services/gcc-accelerator" className="group-hover:bg-[var(--color-summit-black)] group-hover:text-white group-hover:border-[var(--color-summit-black)]">
                    Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="group relative border border-[var(--color-platform-gray)] bg-[var(--color-cloud-white)] p-8 sm:p-10 md:p-12 h-full hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  <Brain className="w-20 h-20 sm:w-32 sm:h-32 text-[var(--color-surmount-red)]" strokeWidth={0.5} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-display mb-6">Skills AI</h2>
                  <p className="text-xl text-[var(--color-deep-charcoal)] mb-8 leading-relaxed">
                    Equip your revenue teams with AI-native skills, tooling, and workflows. Turn your operators into 10x executors.
                  </p>
                  <ul className="space-y-4 mb-12 text-[var(--color-stone-gray)]">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>AI-Powered Prospecting</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>RevOps Copilots</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Enablement Automation</li>
                  </ul>
                  <Button variant="outline" href="/services/skills-ai" className="group-hover:bg-[var(--color-summit-black)] group-hover:text-white group-hover:border-[var(--color-summit-black)]">
                    Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Why Our Services Work */}
      <Section className="bg-[var(--color-summit-black)] text-white">
        <Container>
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display mb-4 text-center">Why Our Services Work</h2>
            <p className="text-center text-white/60 mb-16 max-w-xl mx-auto">
              Every engagement is grounded in real operator experience — not theory.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 border border-white/10 hover:border-[var(--color-surmount-red)] transition-colors duration-300 h-full">
                <div className="w-10 h-10 rounded-full bg-[var(--color-surmount-red)]/10 flex items-center justify-center text-[var(--color-surmount-red)] mb-6 text-xl font-display font-bold">01</div>
                <h3 className="text-2xl font-display mb-4">Experienced Leaders</h3>
                <p className="text-white/70 leading-relaxed">
                  Every engagement is led by operators with 20+ years of real-world revenue and GTM experience — not analysts, not junior associates. You get the principal, every time.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 border border-white/10 hover:border-[var(--color-surmount-red)] transition-colors duration-300 h-full">
                <div className="w-10 h-10 rounded-full bg-[var(--color-surmount-red)]/10 flex items-center justify-center text-[var(--color-surmount-red)] mb-6 text-xl font-display font-bold">02</div>
                <h3 className="text-2xl font-display mb-4">Proven Playbooks</h3>
                <p className="text-white/70 leading-relaxed">
                  We deploy battle-tested playbooks refined across multiple scale-ups and exits. No experimentation on your dime — we know what works and move fast.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-8 border border-white/10 hover:border-[var(--color-surmount-red)] transition-colors duration-300 h-full">
                <div className="w-10 h-10 rounded-full bg-[var(--color-surmount-red)]/10 flex items-center justify-center text-[var(--color-surmount-red)] mb-6 text-xl font-display font-bold">03</div>
                <h3 className="text-2xl font-display mb-4">Measurable Outcomes</h3>
                <p className="text-white/70 leading-relaxed">
                  We set clear KPIs at the start of every engagement and report against them weekly. Revenue is a predictable execution activity — and we hold ourselves accountable to that.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </main>
  );
}
