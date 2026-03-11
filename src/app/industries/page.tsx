"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn, StaggerChildren } from "@/components/anim/FadeIn";
import { Card } from "@/components/ui/Card";
import { Server, Wifi, Cpu, ShoppingBag, FlaskConical, Sparkles } from "lucide-react";

// assisted: true = company has directly worked in this vertical — displayed with red title
const industries = [
  {
    title: "Enterprise SaaS",
    icon: Server,
    desc: "Scaling complex B2B sales cycles and recurring revenue models. From seed-stage PLG to enterprise-led growth.",
    assisted: true,
  },
  {
    title: "IoT",
    icon: Wifi,
    desc: "Bridging hardware and software sales motions to drive adoption across connected device ecosystems.",
    assisted: true,
  },
  {
    title: "Developer-Led Hardware",
    icon: Cpu,
    desc: "Commercializing developer platforms and purpose-built hardware for engineering-driven buyer communities.",
    assisted: true,
  },
  {
    title: "E-Commerce",
    icon: ShoppingBag,
    desc: "Infrastructure and logistics software powering the next generation of retail and direct-to-consumer brands.",
    assisted: false,
  },
  {
    title: "Deep Tech",
    icon: FlaskConical,
    desc: "Translating breakthrough science and research into commercially viable products with a repeatable go-to-market.",
    assisted: false,
  },
  {
    title: "AI",
    icon: Sparkles,
    desc: "Building revenue systems for AI-native companies navigating rapid product evolution and category creation.",
    assisted: false,
  },
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
          <div className="mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-stone-gray)]">
              <span className="text-[var(--color-surmount-red)]">Red</span> indicates verticals Surmount has directly assisted.
            </p>
          </div>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item, i) => (
              <FadeIn key={i}>
                <Card className="h-full border border-[var(--color-platform-gray)] hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                  <item.icon className="w-12 h-12 text-[var(--color-surmount-red)] mb-6" strokeWidth={1} />
                  <h3 className={`text-2xl font-display mb-4 ${item.assisted ? "text-[var(--color-surmount-red)]" : "text-[var(--color-summit-black)]"}`}>
                    {item.title}
                    {item.assisted && (
                      <span className="ml-2 text-xs font-mono font-normal uppercase tracking-widest align-middle opacity-70">✓ Assisted</span>
                    )}
                  </h3>
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
