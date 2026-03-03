"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/anim/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Globe2, TrendingUp } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      <Section className="relative pt-48 pb-24 bg-[var(--color-summit-black)] text-white">
        <Container>
          <FadeIn direction="up">
            <h1 className="text-5xl md:text-8xl font-display mb-8">Our Services</h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl leading-relaxed">
              We provide the operational infrastructure for scale. Two engines working in tandem to drive revenue and efficiency.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn>
              <div className="group relative border border-[var(--color-platform-gray)] bg-[var(--color-cloud-white)] p-12 h-full hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  <TrendingUp className="w-32 h-32 text-[var(--color-surmount-red)]" strokeWidth={0.5} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-display mb-6">Fractional CRO</h2>
                  <p className="text-xl text-[var(--color-deep-charcoal)] mb-8 leading-relaxed">
                    Embedded revenue leadership to fix your funnel, hire your team, and build a predictable sales machine.
                  </p>
                  <ul className="space-y-4 mb-12 text-[var(--color-stone-gray)]">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Go-to-Market Strategy</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Sales Process Optimization</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Revenue Operations (RevOps)</li>
                  </ul>
                  <Button variant="outline" href="/services/fractional-cro" className="group-hover:bg-[var(--color-summit-black)] group-hover:text-white group-hover:border-[var(--color-summit-black)]">
                    Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group relative border border-[var(--color-platform-gray)] bg-[var(--color-cloud-white)] p-12 h-full hover:border-[var(--color-surmount-red)] transition-colors duration-300">
                 <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  <Globe2 className="w-32 h-32 text-[var(--color-surmount-red)]" strokeWidth={0.5} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-display mb-6">GCC Accelerator</h2>
                  <p className="text-xl text-[var(--color-deep-charcoal)] mb-8 leading-relaxed">
                    Launch your own Global Capability Center. Access top-tier engineering and product talent owned by you, not a vendor.
                  </p>
                  <ul className="space-y-4 mb-12 text-[var(--color-stone-gray)]">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Location Strategy</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Entity Setup & Compliance</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-surmount-red)] rounded-full"></span>Talent Acquisition</li>
                  </ul>
                  <Button variant="outline" href="/services/gcc-accelerator" className="group-hover:bg-[var(--color-summit-black)] group-hover:text-white group-hover:border-[var(--color-summit-black)]">
                    Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </main>
  );
}
