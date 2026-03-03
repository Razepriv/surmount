"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn, StaggerChildren } from "@/components/anim/FadeIn";
import { Card } from "@/components/ui/Card";
import { Server, Zap, ShoppingBag, ShieldCheck, Cpu, Building2 } from "lucide-react";

const industries = [
  {
    title: "Enterprise SaaS",
    icon: Server,
    desc: "Scaling complex B2B sales cycles and recurring revenue models."
  },
  {
    title: "FinTech",
    icon: ShieldCheck,
    desc: "Navigating regulatory landscapes while accelerating user acquisition."
  },
  {
    title: "HealthTech",
    icon: Zap,
    desc: "Bridging the gap between patient outcomes and commercial growth."
  },
  {
    title: "E-Commerce Enablers",
    icon: ShoppingBag,
    desc: "Infrastructure and logistics software powering the next generation of retail."
  },
  {
    title: "Deep Tech & AI",
    icon: Cpu,
    desc: "Commercializing breakthrough technologies into sellable products."
  },
  {
    title: "PropTech",
    icon: Building2,
    desc: "Modernizing real estate operations through digital transformation."
  }
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
       <Section className="relative pt-48 pb-24 bg-[var(--color-summit-black)] text-white">
        <Container>
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-8xl font-display mb-8">Industries</h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl leading-relaxed">
              We specialize in high-growth verticals where operational excellence is the key differentiator.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item, i) => (
              <FadeIn key={i}>
                <Card className="h-full border border-[var(--color-platform-gray)] hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                  <item.icon className="w-12 h-12 text-[var(--color-surmount-red)] mb-6" strokeWidth={1} />
                  <h3 className="text-2xl font-display mb-4">{item.title}</h3>
                  <p className="text-[var(--color-deep-charcoal)] leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </StaggerChildren>
        </Container>
      </Section>
    </main>
  );
}
