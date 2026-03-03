"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/anim/FadeIn";
import { Flag, Rocket, Users, Target, Mountain } from "lucide-react";
import React from 'react';

// Placeholder for team photos
const members = [
  { name: "John Doe", title: "Managing Partner", bio: "Former CRO at $100M SaaS company. Scaling expert." },
  { name: "Jane Smith", title: "Head of Operations", bio: "Led 5 GCC deployments in India and Mexico." },
  { name: "Mike Johnson", title: "VP of Sales Engineering", bio: "20 years of B2B solution selling leadership." },
  { name: "Sara Williams", title: "Talent Acquisition Lead", bio: "Specialist in executive technical recruiting." },
  { name: "David Chen", title: "RevOps Strategist", bio: "Certified Salesforce Architect and Hubspot admin." }
];

const values = [
  { title: "Execution > Deckware", icon: Rocket, desc: "We ship outcomes, not just strategy slides." },
  { title: "Radical Transparency", icon: Users, desc: "Direct feedback loops and honest forecasting." },
  { title: "Ownership Mindset", icon: Flag, desc: "We treat your P&L like our own." },
  { title: "Long-Term Games", icon: Target, desc: "Building enduring value over quarterly hacks." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
       {/* 4.4 Mission & Vision */}
       <Section className="relative pt-48 pb-24 bg-[var(--color-summit-black)] text-white">
         <Container>
           <FadeIn direction="up">
             <h1 className="text-5xl md:text-8xl font-display mb-12">About Surmount</h1>
             <p className="text-2xl md:text-3xl font-light text-white/80 max-w-4xl leading-relaxed">
               We exist to bridge the execution gap between ambition and reality.
             </p>
             <div className="w-24 h-1 bg-[var(--color-surmount-red)] mt-12 mb-12"></div>
             <p className="text-lg text-white/60 max-w-2xl">
               Most growth companies fail not because of product-market fit, but because they cannot operationalize revenue at scale. We are the operators who fix the machine while it’s running.
             </p>
           </FadeIn>
         </Container>
       </Section>

       {/* 4.4 Founding Story / Timeline */}
       <Section className="bg-white">
         <Container className="grid grid-cols-1 md:grid-cols-2 gap-16">
           <div>
             <h2 className="text-4xl font-display mb-8">Our Origins</h2>
             <div className="space-y-8 pl-4 border-l-2 border-[var(--color-terrain-beige)]">
               <div className="relative pl-8 pb-8">
                 <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-[var(--color-surmount-red)] ring-4 ring-white"></div>
                 <span className="font-mono text-sm uppercase text-[var(--color-stone-gray)] mb-2 block">2020</span>
                 <h3 className="font-display text-xl mb-2">The Insight</h3>
                 <p className="text-[var(--color-deep-charcoal)]">Founders realized fractional leadership lacked accountability, and outsourcing lacked quality governance.</p>
               </div>
               <div className="relative pl-8 pb-8">
                <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-[var(--color-summit-black)] ring-4 ring-white"></div>
                 <span className="font-mono text-sm uppercase text-[var(--color-stone-gray)] mb-2 block">2022</span>
                 <h3 className="font-display text-xl mb-2">The Hybrid Model</h3>
                 <p className="text-[var(--color-deep-charcoal)]">Launched first combined Fractional CRO + GCC Accelerator engagement for a Series B SaaS firm.</p>
               </div>
               <div className="relative pl-8">
                <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-[var(--color-summit-black)] ring-4 ring-white"></div>
                 <span className="font-mono text-sm uppercase text-[var(--color-stone-gray)] mb-2 block">Today</span>
                 <h3 className="font-display text-xl mb-2">Dual-Engine Growth</h3>
                 <p className="text-[var(--color-deep-charcoal)]">Helping 20+ portfolio companies scale revenue operations globally.</p>
               </div>
             </div>
           </div>
           <div className="flex items-center justify-center bg-[var(--color-cloud-white)] p-12">
              <Mountain className="w-48 h-48 text-[var(--color-terrain-beige)]" strokeWidth={0.5} />
           </div>
         </Container>
       </Section>

       {/* 4.4 Leadership Team */}
       <Section>
         <Container>
           <h2 className="text-4xl font-display mb-12">Leadership Team</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
             {members.map((member, i) => (
               <div key={i} className="group">
                 <div className="aspect-[3/4] bg-[var(--color-stone-gray)]/20 mb-6 relative overflow-hidden">
                   {/* Fallback for image */}
                   <div className="absolute inset-0 flex items-center justify-center text-[var(--color-stone-gray)] font-mono text-xs uppercase tracking-widest bg-[var(--color-platform-gray)] group-hover:bg-[var(--color-surmount-red)]/5 transition-colors">
                     photo: {member.name}
                   </div>
                 </div>
                 <h3 className="text-xl font-display">{member.name}</h3>
                 <p className="text-sm font-medium text-[var(--color-surmount-red)] uppercase tracking-wide mb-2">{member.title}</p>
                 <p className="text-sm text-[var(--color-deep-charcoal)]/70">{member.bio}</p>
               </div>
             ))}
           </div>
         </Container>
       </Section>

       {/* 4.4 Values */}
       <Section className="bg-[var(--color-deep-charcoal)] text-white">
         <Container>
           <h2 className="text-4xl font-display mb-16 text-center">Core Values</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {values.map((val, i) => (
               <div key={i} className="text-center p-6 border border-white/10 hover:border-[var(--color-surmount-red)] transition-colors text-white">
                 <val.icon className="w-10 h-10 mx-auto mb-6 text-[var(--color-surmount-red)]" />
                 <h3 className="text-xl font-display mb-3">{val.title}</h3>
                 <p className="text-white/60 text-sm">{val.desc}</p>
               </div>
             ))}
           </div>
         </Container>
       </Section>
    </main>
  );
}
