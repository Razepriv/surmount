"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/anim/FadeIn";
import {
  Brain,
  Workflow,
  Target,
  Users,
  BarChart,
  ArrowRight,
  Wallet,
  Code2,
  GraduationCap,
  LineChart,
  HeartHandshake,
  Layers,
} from "lucide-react";

const domains = [
  {
    num: "01",
    name: "Revenue Operations (RevOps)",
    icon: Target,
    build: "AI-native pipeline management, forecasting, CRM hygiene, and deal desk automation",
    skills: "CRM copilot, deal risk scorer, pipeline health dashboard, forecast assist",
  },
  {
    num: "02",
    name: "Finance & Administration",
    icon: Wallet,
    build: "Automated reporting, invoice processing, variance analysis, and financial close workflows",
    skills: "AP/AR automation, budget variance alerts, close-checklist agent, spend analyzer",
  },
  {
    num: "03",
    name: "GTM Operations",
    icon: Workflow,
    build: "Account scoring, territory planning, ICP enrichment, signal detection, and campaign ops",
    skills: "Agentic prospecting, signal-to-outreach pipeline, persona mapper, campaign brief generator",
  },
  {
    num: "04",
    name: "Engineering Services",
    icon: Code2,
    build: "Ticket triage, code review assist, documentation automation, sprint analytics",
    skills: "Auto-triage agent, sprint velocity tracker, tech debt analyzer, API documentation bot",
  },
  {
    num: "05",
    name: "Enablement",
    icon: GraduationCap,
    build: "Battle cards, objection libraries, just-in-time coaching, onboarding acceleration",
    skills: "Auto-generated battle cards, live deal coach, onboarding content bot, certification tracker",
  },
  {
    num: "06",
    name: "Analytics & Insights",
    icon: LineChart,
    build: "Custom dashboards, board reporting, AI-generated insights narratives, trend alerts",
    skills: "Executive narrative generator, anomaly alert system, KPI health scorecard, competitive monitor",
  },
  {
    num: "07",
    name: "Customer Support",
    icon: HeartHandshake,
    build: "Ticket routing, churn prediction, health scoring, renewal playbooks, escalation automation",
    skills: "Churn predictor, ticket classifier, renewal automation, health score engine",
  },
  {
    num: "08",
    name: "Cross-functional Delivery",
    icon: Layers,
    build: "Project tracking, status reporting, cross-team alignment, OKR management",
    skills: "OKR progress agent, meeting summary bot, project risk flag, dependency tracker",
  },
];

export default function SkillsAIPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-[var(--color-summit-black)] text-white">
        <Container className="relative z-10 py-32 md:py-20">
          <FadeIn direction="up">
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-4">
              Agentic Skills AI Powered by Claude
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-6 leading-[1.1]">
              Agentic <span className="text-[var(--color-surmount-red)]">Skills AI</span> &mdash; Custom AI for Every Business Function
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 font-light leading-relaxed">
              We design and deploy Claude-powered AI skills across your entire operation &mdash; not just your sales team. From RevOps to Finance, GTM to Engineering, Customer Support to cross-functional delivery. Standalone consulting engagement or integrated as the intelligence layer inside your Global Capability Center.
            </p>
            <Button href="/contact" variant="cta" size="lg">
              Book a Skills AI Discovery Call
            </Button>
          </FadeIn>
        </Container>
      </section>

      {/* Philosophy */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display mb-8">AI Isn&apos;t an Add-On. It&apos;s the New Operating System.</h2>
              <p className="text-lg text-[var(--color-deep-charcoal)] leading-relaxed mb-6">
                Most organizations experiment with AI by layering tools onto broken workflows. The companies that win the next decade rebuild the workflow around AI from day one &mdash; and they do it function by function, with purpose-built skills, not generic prompts.
              </p>
              <p className="text-lg text-[var(--color-deep-charcoal)] leading-relaxed">
                Surmount&apos;s Agentic Skills AI consulting service develops custom Claude-powered skills for any business function: revenue, finance, engineering, customer success, and beyond. We design the workflow, build the AI skill, integrate the tooling, and train your team until AI becomes muscle memory. Deploy alongside your existing team, or use our India-based GCC as the human-in-the-loop execution layer.
              </p>
            </div>
            <div className="bg-[var(--color-cloud-white)] p-8 md:p-10 border-l-4 border-[var(--color-surmount-red)]">
              <h3 className="text-2xl font-display mb-6">What You Get</h3>
              <ul className="space-y-4">
                {[
                  "AI skills audit across business functions",
                  "Custom AI skill design + workflow rebuild (RevOps, Finance & Admin, GTM, Engineering, Enablement, Analytics, Customer Support, cross-functional delivery)",
                  "Tool stack selection & integration",
                  "Hands-on team training & coaching",
                  "Prompt libraries + SOP playbooks",
                  "30/60/90-day adoption scorecards",
                  "Agentic workflow architecture using Claude Skills API — from prompt design to autonomous task execution",
                  "Optional GCC integration: deploy AI-skilled operators from our India capability center as human-in-the-loop execution partners",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-deep-charcoal)]">
                    <span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full mt-2 shrink-0"></span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8 Functional Domains */}
      <Section className="bg-[var(--color-cloud-white)]">
        <Container>
          <div className="mb-12 md:mb-16 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4">8 Functional Domains. One AI Operating System.</h2>
            <p className="text-lg text-[var(--color-deep-charcoal)]/80">
              Deploy the full program across your organization or activate only the domains that match your biggest bottleneck. Each skill is custom-built for your workflows, not off-the-shelf software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((d, i) => (
              <FadeIn key={i} delay={(i % 4) * 0.05}>
                <Card className="h-full flex flex-col group hover:border-[var(--color-surmount-red)] bg-white">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-xs text-[var(--color-stone-gray)]">{d.num}</span>
                    <div className="w-10 h-10 rounded-full bg-[var(--color-surmount-red)]/5 flex items-center justify-center">
                      <d.icon className="w-5 h-5 text-[var(--color-surmount-red)]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-display mb-3 leading-tight">{d.name}</h3>
                  <p className="text-sm text-[var(--color-deep-charcoal)]/80 leading-relaxed mb-4">
                    <span className="block font-medium text-[var(--color-summit-black)] mb-1 text-xs uppercase tracking-wider">What We Build</span>
                    {d.build}
                  </p>
                  <p className="text-sm text-[var(--color-deep-charcoal)]/70 leading-relaxed mt-auto pt-4 border-t border-[var(--color-platform-gray)]">
                    <span className="block font-medium text-[var(--color-summit-black)] mb-1 text-xs uppercase tracking-wider">Sample Skills</span>
                    {d.skills}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* GCC Integration Block */}
      <Section className="bg-[var(--color-summit-black)] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="up">
              <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-4">The Surmount Difference</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6">Add Human-in-the-Loop Execution via Your GCC</h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed font-light">
                Agentic AI is most powerful when backed by skilled human operators. Surmount&apos;s GCC Accelerator service builds you a dedicated India-based capability center staffed with professionals trained on your AI skills and workflows.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed font-light">
                The AI makes decisions, routes tasks, and generates output &mdash; your GCC team reviews, refines, and executes. Together, they deliver at a fraction of the cost of equivalent US headcount, with <span className="text-[var(--color-surmount-red)] font-medium">40&ndash;60% annual savings</span>.
              </p>
              <p className="text-white/60 italic mb-8 text-base">
                This is the Surmount difference: AI + human delivery, owned by you &mdash; not outsourced to a vendor.
              </p>
              <Button href="/services/gcc-accelerator" variant="cta" size="lg">
                Explore the GCC Accelerator <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 sm:p-10 border border-white/10 bg-white/[0.02]">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl sm:text-4xl font-mono text-[var(--color-surmount-red)] mb-2">40-60%</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Annual Cost Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-mono text-[var(--color-surmount-red)] mb-2">8</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Functional Domains</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-mono text-[var(--color-surmount-red)] mb-2">100%</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Client-Owned IP</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-mono text-[var(--color-surmount-red)] mb-2">90d</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">Time to Adoption</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Measurable Outcomes (expanded) */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4 text-center">Measurable Outcomes</h2>
          <p className="text-center text-[var(--color-deep-charcoal)]/70 mb-12 max-w-2xl mx-auto">
            What success looks like when your AI skills are embedded across business functions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { value: "3x", label: "Operator Capacity", desc: "Same headcount producing 3x the output after AI skill deployment" },
              { value: "50%", label: "Research / Admin Time Reclaimed", desc: "Reps, analysts, and ops staff focused on judgment — not data entry" },
              { value: "2x", label: "Pipeline Coverage", desc: "GTM workflows produce more qualified pipeline without more reps" },
              { value: "60%", label: "Faster Reporting Cycles", desc: "Finance and analytics teams close books and produce board-ready output faster" },
              { value: "90d", label: "Time to Full Adoption", desc: "Custom AI skills embedded in team muscle memory within one quarter" },
              { value: "40-60%", label: "Cost Reduction via GCC", desc: "When paired with India GCC, deliver AI-enabled operations at 40–60% lower cost" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="h-full p-6 sm:p-8 bg-[var(--color-cloud-white)] border border-[var(--color-platform-gray)] hover:border-[var(--color-surmount-red)] transition-colors">
                  <div className="text-3xl sm:text-4xl font-mono text-[var(--color-surmount-red)] mb-3">{stat.value}</div>
                  <h3 className="text-base font-display text-[var(--color-summit-black)] mb-2 uppercase tracking-wider">{stat.label}</h3>
                  <p className="text-sm text-[var(--color-deep-charcoal)]/70 leading-relaxed">{stat.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section className="bg-[var(--color-deep-charcoal)] text-white text-center">
        <Container className="flex flex-col items-center gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display">Build Your AI Operating System &mdash; Function by Function</h2>
          <p className="text-white/70 max-w-2xl text-lg">
            The companies that pull ahead in the next decade won&apos;t be AI-enabled &mdash; they&apos;ll be AI-native at every level of the organization. Start with one domain. Scale to all eight. Surmount builds, deploys, and trains you on AI skills that stick.
          </p>
          <Button href="/contact" variant="cta" size="lg">
            Book a Skills AI Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Container>
      </Section>
    </main>
  );
}
