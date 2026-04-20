"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn, StaggerChildren } from "@/components/anim/FadeIn";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";

const jobs = [
  {
    title: "Project Engagement Lead",
    location: "Remote / Hybrid (NY)",
    type: "Contract-to-Hire",
    department: "Operations",
    description: "Lead client engagements for our Fractional CRO practice. Must have 5+ years in SaaS ops."
  },
  {
    title: "Senior RevOps Analyst",
    location: "Remote",
    type: "Full-Time",
    department: "Consulting",
    description: "Deep dive into client CRM data to find revenue leakage and optimization opportunities."
  },
  {
    title: "Talent Partner (GCC Specialist)",
    location: "Bangalore / Hyderabad",
    type: "Full-Time",
    department: "Talent Acquisition",
    description: "Build out engineering teams for our US-based clients in India."
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      <Section className="relative pt-32 sm:pt-40 md:pt-48 pb-12 bg-[var(--color-summit-black)] text-white">
        <Container>
          <FadeIn direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display mb-8">Join the Climb</h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl leading-relaxed">
              We are building the operating system for high-growth companies.
            </p>
          </FadeIn>
        </Container>
      </Section>
      
      <Section className="bg-white">
        <Container>
           <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-display mb-12 text-center text-[var(--color-summit-black)]">Open Positions</h2>
             
             <div className="space-y-6">
               <StaggerChildren className="space-y-8">
                 {jobs.map((job, i) => (
                   <FadeIn key={i}>
                     <div className="group border border-[var(--color-platform-gray)] hover:border-[var(--color-surmount-red)] bg-[var(--color-cloud-white)] p-8 transition-all duration-300">
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                         <div>
                           <h3 className="text-xl font-display mb-2 group-hover:text-[var(--color-surmount-red)] transition-colors">{job.title}</h3>
                           <div className="flex flex-wrap items-center text-sm text-[var(--color-stone-gray)] gap-x-4 gap-y-1 mb-4">
                              <span className="flex items-center"><Briefcase className="w-4 h-4 mr-2" /> {job.department}</span>
                              <span className="hidden sm:block w-1 h-1 bg-[var(--color-stone-gray)] rounded-full"></span>
                              <span>{job.location}</span>
                              <span className="hidden sm:block w-1 h-1 bg-[var(--color-stone-gray)] rounded-full"></span>
                              <span>{job.type}</span>
                           </div>
                           <p className="text-[var(--color-deep-charcoal)] leading-relaxed max-w-2xl text-sm sm:text-base">{job.description}</p>
                         </div>
                         <Button variant="outline" className="shrink-0 self-start md:self-center w-full sm:w-auto justify-center">
                           Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                         </Button>
                       </div>
                     </div>
                   </FadeIn>
                 ))}
               </StaggerChildren>
             </div>
             
             <div className="mt-12 md:mt-16 bg-[var(--color-deep-charcoal)] text-white p-8 md:p-12 text-center rounded-sm">
                <h3 className="text-2xl font-display mb-4">Don't see your role?</h3>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">
                  We are always looking for exceptional operators. Send your resume and a brief intro to <a href="mailto:careers@surmount.com" className="text-[var(--color-surmount-red)] underline hover:text-white transition-colors">careers@surmount.com</a>.
                </p>
             </div>
           </div>
        </Container>
      </Section>
    </main>
  );
}
