"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SceneWrapper, PlaceholderGeo } from "@/components/3d/SceneWrapper";
import { FadeIn } from "@/components/anim/FadeIn";
import { Check, Globe2, Zap, Trophy, Users, Scale, ArrowRight } from "lucide-react";

export default function GCCAcceleratorPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* 4.3 Hero */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-[var(--color-summit-black)] text-white">
        <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pt-20">
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-7xl font-display mb-6 leading-[1.1]">
              GCC Business <br/> <span className="text-[var(--color-surmount-red)]">Accelerator</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg mb-8 font-light">
              Build, scale, and optimize your global capability center — with optional transfer readiness.
            </p>
            <div className="flex gap-4">
              <Button href="/contact" size="lg" className="bg-white text-[var(--color-summit-black)] hover:bg-gray-100">
                Start Your Blueprint
              </Button>
            </div>
          </FadeIn>
          
          <div className="h-[400px] md:h-full w-full relative">
            <SceneWrapper className="w-full h-full">
              <PlaceholderGeo />
            </SceneWrapper>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50">
               <Globe2 className="w-64 h-64 text-[var(--color-surmount-red)] animate-pulse" strokeWidth={0.5} />
             </div>
          </div>
        </Container>
      </section>

      {/* 4.3 Three-Phase Journey */}
      <Section className="bg-white">
        <Container>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display mb-6">The Accelerator Roadmap</h2>
            <p className="text-lg text-[var(--color-deep-charcoal)]/80">
              From location strategy to full-scale operations. We handle the heavy lifting while you retain IP and culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-[var(--color-terrain-beige)] z-0"></div>

            {/* Phase 1 */}
            <Card className="relative z-10 bg-[var(--color-cloud-white)] border-none">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-[var(--color-surmount-red)] flex items-center justify-center text-3xl font-display font-bold mb-6 mx-auto shadow-lg">
                01
              </div>
              <h3 className="text-2xl font-display text-center mb-2">Blueprint</h3>
              <div className="text-center font-mono text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">4-6 Weeks</div>
              <p className="text-center text-sm mb-6 max-w-xs mx-auto">Location strategy, function scope, hiring plan, governance, 12-week go-live plan.</p>
              <div className="flex justify-center">
                 <span className="font-mono font-bold text-lg">$40k - $90k</span>
              </div>
            </Card>

            {/* Phase 2 */}
            <Card className="relative z-10 bg-[var(--color-cloud-white)] border-none">
              <div className="w-24 h-24 rounded-full bg-[var(--color-surmount-red)] text-white border-4 border-white flex items-center justify-center text-3xl font-display font-bold mb-6 mx-auto shadow-lg">
                02
              </div>
              <h3 className="text-2xl font-display text-center mb-2">Launch</h3>
              <div className="text-center font-mono text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">12 Weeks</div>
              <p className="text-center text-sm mb-6 max-w-xs mx-auto">Initial hiring, operating cadence, KPI framework, entity setup, year-1 playbook.</p>
              <div className="flex justify-center">
                 <span className="font-mono font-bold text-lg">$120k - $220k</span>
              </div>
            </Card>

            {/* Phase 3 */}
            <Card className="relative z-10 bg-[var(--color-cloud-white)] border-none">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-[var(--color-summit-black)] flex items-center justify-center text-3xl font-display font-bold mb-6 mx-auto shadow-lg">
                03
              </div>
              <h3 className="text-2xl font-display text-center mb-2">Operate & Scale</h3>
              <div className="text-center font-mono text-sm text-[var(--color-stone-gray)] mb-6 uppercase tracking-widest">Ongoing</div>
              <p className="text-center text-sm mb-6 max-w-xs mx-auto">Talent lifecycle, workspace/IT, finance/tax, continuous optimization.</p>
              <div className="flex justify-center">
                 <span className="font-mono font-bold text-lg">$15k - $35k / mo</span>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4.3 Success Metrics */}
      <Section className="bg-[var(--color-cloud-white)]">
        <Container>
           <h2 className="text-4xl font-display mb-12">GCC Success Metrics</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Operational Efficiency", icon: Zap, desc: "Cost arbitrage meets process optimization." },
               { title: "Talent Retention", icon: Users, desc: "Lower attrition than pure outsourcing models." },
               { title: "Innovation", icon: Trophy, desc: "R&D and product ownership, not just tickets." },
               { title: "Corporate Alignment", icon: Scale, desc: "Culture extension, not a vendor relationship." }
             ].map((item, i) => (
                <Card key={i} className="bg-white hover:border-[var(--color-surmount-red)] transition-colors">
                  <item.icon className="w-8 h-8 text-[var(--color-surmount-red)] mb-4" />
                  <h3 className="text-xl font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-deep-charcoal)]/80">{item.desc}</p>
                </Card>
             ))}
           </div>
        </Container>
      </Section>

      {/* 4.3 Location Strategy Map Placeholder */}
      <Section className="bg-[var(--color-summit-black)] text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display mb-6">Global Talent Access</h2>
              <p className="text-lg text-white/70 mb-8">
                We help you select the right geography based on talent density, cost, and time-zone overlap.
              </p>
              <ul className="space-y-4">
                {[
                  "India (Bengaluru, Hyderabad, Pune)",
                  "Mexico (CDMX, Guadalajara)",
                  "Eastern Europe (Poland, Romania)",
                  "Portugal (Lisbon)"
                ].map((loc, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Globe2 className="w-5 h-5 text-[var(--color-surmount-red)]" />
                    <span className="font-mono text-sm uppercase tracking-wider">{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video bg-[var(--color-deep-charcoal)] rounded-lg flex items-center justify-center border border-white/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url(/map-pattern.png)] opacity-10"></div> {/* Placeholder for map asset */}
               <div className="z-10 text-center">
                 <Globe2 className="w-16 h-16 text-[var(--color-surmount-red)] mx-auto mb-4" />
                 <span className="font-mono text-xs uppercase tracking-widest text-white/50">Interactive Map Component</span>
               </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4.3 Competitor Context */} 
      <Section className="bg-white">
        <Container>
           <h2 className="text-4xl font-display mb-12 text-center">Why Surmount vs. Traditional BPOs</h2>
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse min-w-[600px]">
               <thead>
                 <tr className="border-b border-[var(--color-summit-black)]">
                   <th className="py-4 font-display text-xl w-1/3">Criteria</th>
                   <th className="py-4 font-display text-xl text-[var(--color-surmount-red)] w-1/3 bg-[var(--color-cloud-white)] px-6">Surmount GCC</th>
                   <th className="py-4 font-display text-xl text-[var(--color-stone-gray)] w-1/3 px-6">Traditional Outsourcing</th>
                 </tr>
               </thead>
               <tbody>
                 {[
                   { criteria: "IP Ownership", our: "100% Client Owned", their: "Vendor Owned" },
                   { criteria: "Culture", our: "Extension of HQ", their: "Vendor Culture" },
                   { criteria: "Pricing Model", our: "Transparent Cost + Mgmt Fee", their: "Black Box Rate Card" },
                   { criteria: "Exit Strategy", our: "Transferable Entity", their: "High Friction / Lock-in" },
                   { criteria: "Talent Quality", our: "Top 10% (Product/R&D)", their: "Average (Support/Maintenance)" },
                 ].map((row, i) => (
                   <tr key={i} className="border-b border-[var(--color-terrain-beige)] hover:bg-[var(--color-cloud-white)]/30">
                     <td className="py-4 font-medium">{row.criteria}</td>
                     <td className="py-4 font-medium text-[var(--color-summit-black)] bg-[var(--color-cloud-white)] px-6 border-l border-r border-white">{row.our}</td>
                     <td className="py-4 text-[var(--color-stone-gray)] px-6">{row.their}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-deep-charcoal)] text-white text-center">
        <Container>
          <h2 className="text-3xl md:text-5xl font-display mb-8">Ready to Scale globally?</h2>
          <Button href="/contact" size="lg" className="bg-white text-[var(--color-surmount-red)] hover:bg-[var(--color-cloud-white)]">
             Compare Locations
          </Button>
        </Container>
      </Section>
    </main>
  );
}
