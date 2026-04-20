"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/anim/FadeIn";
import { Brain, Zap, Workflow, Target, Users, BarChart, ArrowRight } from "lucide-react";

export default function SkillsAIPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-[var(--color-summit-black)] text-white">
        <Container className="relative z-10 py-32 md:py-20">
          <FadeIn direction="up">
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-4">AI-Native Revenue Teams</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display mb-6 leading-[1.1]">
              Skills <span className="text-[var(--color-surmount-red)]">AI</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-8 font-light leading-relaxed">
              Equip your go-to-market and operations teams with AI-native skills, tooling, and workflows. Turn your people into 10x operators &mdash; without replacing them.
            </p>
            <Button href="/contact" variant="cta" size="lg">
              Upskill Your Revenue Team
            </Button>
          </FadeIn>
        </Container>
      </section>

      {/* What It Is */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display mb-8">AI Isn&apos;t a Tool. It&apos;s an Operating Model.</h2>
              <p className="text-lg text-[var(--color-deep-charcoal)] leading-relaxed mb-6">
                Most companies bolt AI onto existing workflows and expect magic. The winners rebuild the workflow around AI from day one.
              </p>
              <p className="text-lg text-[var(--color-deep-charcoal)] leading-relaxed">
                Skills AI is an operator-led program that retrains your revenue teams on AI-first workflows &mdash; prospecting, forecasting, enablement, ops, and customer success. We install the tools, rewrite the playbooks, and coach the team until AI becomes muscle memory.
              </p>
            </div>
            <div className="bg-[var(--color-cloud-white)] p-8 md:p-10 border-l-4 border-[var(--color-surmount-red)]">
              <h3 className="text-2xl font-display mb-6">What You Get</h3>
              <ul className="space-y-4">
                {[
                  "AI skills audit across revenue functions",
                  "Custom workflow redesign (sales, RevOps, CS)",
                  "Tool stack selection & integration",
                  "Hands-on team training & coaching",
                  "Prompt libraries + SOP playbooks",
                  "30/60/90-day adoption scorecards",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-deep-charcoal)]">
                    <span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Modules */}
      <Section className="bg-[var(--color-cloud-white)]">
        <Container>
          <div className="mb-12 md:mb-16 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4">Skills AI Modules</h2>
            <p className="text-lg text-[var(--color-deep-charcoal)]/80">
              Deploy the full program or cherry-pick the modules that match your bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI-Powered Prospecting", icon: Target, desc: "Replace manual research with agentic outbound. Account scoring, signal detection, hyper-personalized messaging at scale." },
              { title: "Forecast Intelligence", icon: BarChart, desc: "AI-assisted pipeline review, deal risk scoring, and predictive forecasting that beats rep gut-calls." },
              { title: "Enablement Automation", icon: Zap, desc: "Auto-generated battle cards, objection libraries, and just-in-time coaching during live deals." },
              { title: "RevOps Copilots", icon: Workflow, desc: "Custom AI agents for CRM hygiene, routing, reporting, and deal desk automation." },
              { title: "Customer Success AI", icon: Users, desc: "Churn prediction, health scoring, and automated renewal playbooks that scale without more CSMs." },
              { title: "Leadership Dashboards", icon: Brain, desc: "Real-time AI-generated insights for weekly forecast calls, QBRs, and board reporting." },
            ].map((mod, i) => (
              <Card key={i} className="h-full flex flex-col group hover:border-[var(--color-surmount-red)]">
                <mod.icon className="w-10 h-10 text-[var(--color-surmount-red)] mb-6" />
                <h3 className="text-xl font-display mb-3">{mod.title}</h3>
                <p className="text-[var(--color-deep-charcoal)]/80 text-sm leading-relaxed">{mod.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section className="bg-[var(--color-summit-black)] text-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-12 text-center">Measurable Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "3x", label: "Rep Capacity" },
              { value: "50%", label: "Research Time Saved" },
              { value: "2x", label: "Pipeline Coverage" },
              { value: "90d", label: "Time to Adoption" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col gap-2 text-center">
                <span className="text-3xl sm:text-4xl md:text-5xl font-mono text-[var(--color-surmount-red)]">{stat.value}</span>
                <span className="text-xs sm:text-sm uppercase tracking-widest text-white/60">{stat.label}</span>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-[var(--color-deep-charcoal)] text-white text-center">
        <Container className="flex flex-col items-center gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display">Turn Your Team into AI Operators</h2>
          <p className="text-white/70 max-w-xl">
            The companies that win the next decade won&apos;t be AI-enabled &mdash; they&apos;ll be AI-native. Start building that muscle now.
          </p>
          <Button href="/contact" variant="cta" size="lg">
            Upskill Your Revenue Team <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Container>
      </Section>
    </main>
  );
}
