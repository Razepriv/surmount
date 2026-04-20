"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn, StaggerChildren } from "@/components/anim/FadeIn";
import { ArrowUpRight, BookOpen, Podcast, Video } from "lucide-react";
import { Card } from "@/components/ui/Card";
import React from 'react';

// Mock Data for Insights
const insights = [
  {
    type: "Article",
    category: "Strategy",
    title: "Why Your first GCC Should Be in Hydrabad, Not Bangalore",
    excerpt: "Talent density vs. cost arbitrage: A deep dive into the 2024 landscape for SaaS engineering hubs.",
    date: "Oct 12, 2023",
    readTime: "8 min read",
    author: "Jane Smith",
    icon: BookOpen
  },
  {
    type: "Case Study",
    category: "Revenue Operations",
    title: "Scaling from $10M to $50M: Technical Debt in the CRM",
    excerpt: "How we refactored a convoluted Salesforce instance to support multi-product GTM motions.",
    date: "Sep 28, 2023",
    readTime: "12 min read",
    author: "David Chen",
    icon: Video
  },
  {
    type: "Podcast",
    category: "Leadership",
    title: "The Fractional Executive Model is Broken",
    excerpt: "Discussion on why 'advisory' roles fail and 'operational' roles succeed in the current market.",
    date: "Sep 15, 2023",
    readTime: "45 min listen",
    author: "John Doe",
    icon: Podcast
  },
  {
    type: "Article",
    category: "Talent",
    title: "Hiring for the 'Builder' Mindset",
    excerpt: "Interview questions that reveal if a candidate can actually build from 0 to 1.",
    date: "Aug 30, 2023",
    readTime: "6 min read",
    author: "Sara Williams",
    icon: BookOpen
  }
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
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {insights.map((item, i) => (
                 <FadeIn key={i}>
                   <Card className="h-full group cursor-pointer hover:shadow-lg transition-all duration-300 border border-[var(--color-platform-gray)] flex flex-col">
                       <div className="flex items-center justify-between mb-6">
                         <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-surmount-red)] bg-[var(--color-surmount-red)]/5 px-2 py-1 rounded-sm">
                           {item.category}
                         </span>
                         <item.icon className="w-5 h-5 text-[var(--color-stone-gray)]" />
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
                 </FadeIn>
               ))}
            </StaggerChildren>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-3 border border-[var(--color-stone-gray)] text-[var(--color-summit-black)] hover:bg-[var(--color-summit-black)] hover:text-white transition-all duration-300 font-medium tracking-wide uppercase text-sm">
              Load More Articles
            </button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
