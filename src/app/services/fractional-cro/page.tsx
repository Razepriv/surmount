"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SceneWrapper, PlaceholderGeo } from "@/components/3d/SceneWrapper";
import { FadeIn, StaggerChildren } from "@/components/anim/FadeIn";
import { Check, X, ArrowUpRight, BarChart, Users, Target } from "lucide-react";

export default function FractionalCROPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* 4.2 Hero */}
      <section className="relative w-full min-h-[60vh] md:min-h-[80vh] lg:h-screen lg:min-h-[700px] flex items-center overflow-hidden bg-[var(--color-summit-black)] text-white">
        <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-32 md:py-20 md:h-full">
          <FadeIn direction="up">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display mb-6 leading-[1.1]">
              Fractional CRO for <br/> <span className="text-[var(--color-surmount-red)]">Sales Hypergrowth</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-lg mb-8 font-light">
              Embedded revenue leadership. Not advisory. Not consulting. Operator-level execution.
            </p>
            <div className="flex gap-4">
              <Button href="/contact" size="lg" className="bg-white text-[var(--color-summit-black)] hover:bg-gray-100">
                Book a Strategy Call
              </Button>
            </div>
          </FadeIn>

          <div className="hidden md:block h-full w-full">
            <SceneWrapper className="w-full h-full">
              <PlaceholderGeo />
            </SceneWrapper>
          </div>
        </Container>
      </section>

      {/* 4.2 The Problem Section */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-display text-[var(--color-surmount-red)]">Why Growth Stalls</h2>
              <ul className="space-y-6">
                {[
                  "Hired VP Sales too early ($250k mistake)",
                  "No pipeline discipline or qualification criteria",
                  "Forecast is fiction, not data-driven",
                  "Sales & Marketing working in silos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-[var(--color-deep-charcoal)]">
                    <X className="w-6 h-6 text-[var(--color-surmount-red)] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[var(--color-cloud-white)] p-10 border-l-4 border-[var(--color-surmount-red)]">
              <h3 className="text-2xl font-display mb-6">The Surmount Fix</h3>
              <p className="text-lg mb-6">
                We install a proven revenue operating system before you hire the expensive full-time leader. We build the machine, then hand over the keys.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <div className="text-4xl font-mono text-[var(--color-summit-black)] font-bold">90</div>
                  <div className="text-sm uppercase tracking-widest mt-1">Day Reset</div>
                </div>
                <div>
                  <div className="text-4xl font-mono text-[var(--color-summit-black)] font-bold">3x</div>
                  <div className="text-sm uppercase tracking-widest mt-1">Pipeline ROI</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4.2 Modules Section (Interactive Grid) */}
      <Section className="bg-[var(--color-cloud-white)]">
        <Container>
           <div className="mb-16">
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4">Revenue Engine Modules</h2>
             <p className="text-lg max-w-2xl text-[var(--color-deep-charcoal)]/80">
               Our system is modular. We deploy exactly what your revenue organization needs to scale.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { title: "Pipeline Discipline", icon: BarChart, desc: "Standardized stages, exit criteria, and deal hygiene protocols." },
               { title: "GTM System Redesign", icon: Target, desc: "ICP refinement, persona mapping, and value proposition alignment." },
               { title: "Hiring & Onboarding", icon: Users, desc: "Role definition, OTE modeling, and ramp-up playbooks." },
               { title: "RevOps & Tech Stack", icon: ArrowUpRight, desc: "CRM cleanup, automation, and dashboard visibility." },
               { title: "Messaging Alignment", icon: Target, desc: "Sales enablement assets that actually convert." },
               { title: "Improvement Cadence", icon: BarChart, desc: "Weekly forecast calls, QBRs, and coaching loops." }
             ].map((module, i) => (
               <Card key={i} className="h-full flex flex-col justify-between group cursor-pointer hover:border-[var(--color-surmount-red)]">
                 <div className="mb-4">
                   <module.icon className="w-10 h-10 text-[var(--color-surmount-red)] mb-6" />
                   <h3 className="text-xl font-display mb-3">{module.title}</h3>
                   <p className="text-[var(--color-deep-charcoal)]/80">{module.desc}</p>
                 </div>
                 <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-[var(--color-surmount-red)] flex items-center">
                   View Details <ArrowUpRight className="ml-2 w-4 h-4" />
                 </div>
               </Card>
             ))}
           </div>
        </Container>
      </Section>
      
      <Section className="bg-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-10 md:mb-16 text-center">Engagement Models</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-start">
             {/* Model 1 */}
             <Card variant="outline" className="border border-[var(--color-terrain-beige)]">
               <h3 className="text-2xl font-display mb-2">Revenue Reset</h3>
               <p className="text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">90-Day Intensive</p>
               <ul className="space-y-4 mb-8">
                 {["90-Day Intensive", "Full Diagnostic", "GTM Roadmap", "Quick Wins Execution"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm">
                     <Check className="w-4 h-4 text-[var(--color-surmount-red)]" /> {item}
                   </li>
                 ))}
               </ul>
             </Card>

             {/* Model 2 (Highlighted) */}
             <Card className="border-2 border-[var(--color-surmount-red)] relative shadow-xl transform md:-translate-y-4 z-10 bg-white">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-surmount-red)] text-white px-4 py-1 text-xs font-medium uppercase tracking-widest">
                 Most Popular
               </div>
               <h3 className="text-2xl font-display mb-2">Scale Retainer</h3>
               <p className="text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">2-2.5 Days / Week</p>
               <ul className="space-y-4 mb-8">
                 {["6-Month Minimum term", "Full Fractional CRO Role", "Weekly ExCo Participation", "Hiring & Training"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm">
                     <Check className="w-4 h-4 text-[var(--color-surmount-red)]" /> {item}
                   </li>
                 ))}
               </ul>
             </Card>

             {/* Model 3 */}
             <Card variant="outline" className="border border-[var(--color-terrain-beige)]">
               <h3 className="text-2xl font-display mb-2">Build Retainer</h3>
               <p className="text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">1-1.5 Days / Week</p>
               <ul className="space-y-4 mb-8">
                 {["3-Month Minimum term", "Strategic Advisory", "Weekly Forecast Call", "Playbook Design"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-sm">
                     <Check className="w-4 h-4 text-[var(--color-surmount-red)]" /> {item}
                   </li>
                 ))}
               </ul>
             </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-[var(--color-deep-charcoal)]/70 mb-6">Pricing is scoped to each engagement. Let&apos;s find the right fit for your business.</p>
            <Button href="/contact" size="lg">Book a Strategy Call</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
