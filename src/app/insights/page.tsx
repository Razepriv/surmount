"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn, StaggerChildren } from "@/components/anim/FadeIn";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/Card";

const insights = [
  {
    category: "Strategy",
    title: "When to Hire a Fractional CRO vs. a Full-Time CRO",
    excerpt: "The full-time CRO gamble costs $250K+ before you know if it works. Here's how to decide when fractional leadership is the smarter path for your growth stage.",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    author: "Surmount Team",
    href: "/insights/when-to-hire-fractional-cro",
  },
  {
    category: "Revenue Operations",
    title: "The 90-Day Revenue Reset: What Mid-Market B2B Companies Should Expect",
    excerpt: "A step-by-step breakdown of what happens during a 90-day revenue intensive — from diagnostic to handoff — and the outcomes that justify the investment.",
    date: "Feb 28, 2026",
    readTime: "10 min read",
    author: "Surmount Team",
    href: "/insights/90-day-revenue-reset",
  },
  {
    category: "Global Talent",
    title: "How GCC Talent Models Work for U.S. Growth Companies",
    excerpt: "GCCs are replacing outsourcing for a reason. Learn how the talent model works, what it costs, and why U.S. growth companies are choosing ownership over vendors.",
    date: "Jan 20, 2026",
    readTime: "9 min read",
    author: "Surmount Team",
    href: "/insights/gcc-talent-models",
  },
  {
    category: "Execution",
    title: "The 5 Revenue System Mistakes That Stall Mid-Market Scaling",
    excerpt: "Most companies between $5M and $50M ARR hit the same walls. Here are the five systemic mistakes that create growth ceilings — and how to break through them.",
    date: "Dec 10, 2025",
    readTime: "7 min read",
    author: "Surmount Team",
    href: "/insights/revenue-system-mistakes",
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      <Section className="pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-24 bg-[var(--color-summit-black)] text-white">
        <Container>
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mb-8">Insights</h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl leading-relaxed">
              Field notes on scaling revenue, operations, and global teams.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((item, i) => (
              <FadeIn key={i}>
                <Link href={item.href} className="block h-full">
                  <Card className="h-full group cursor-pointer hover:shadow-lg transition-all duration-300 border border-[var(--color-platform-gray)] flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-surmount-red)] bg-[var(--color-surmount-red)]/5 px-2 py-1 rounded-sm">
                        {item.category}
                      </span>
                      <BookOpen className="w-5 h-5 text-[var(--color-stone-gray)]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display mb-4 group-hover:text-[var(--color-surmount-red)] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[var(--color-deep-charcoal)]/80 mb-8 flex-grow leading-relaxed text-sm sm:text-base">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center justify-between border-t border-[var(--color-platform-gray)] pt-6 mt-auto">
                      <div className="text-xs text-[var(--color-stone-gray)] font-medium">
                        <span className="block text-[var(--color-summit-black)] mb-1">{item.author}</span>
                        {item.date} &middot; {item.readTime}
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[var(--color-platform-gray)] group-hover:text-[var(--color-surmount-red)] transition-colors" />
                    </div>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </StaggerChildren>
        </Container>
      </Section>
    </main>
  );
}
