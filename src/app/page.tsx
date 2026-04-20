"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, BarChart3, Globe2, LayoutTemplate } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SceneWrapper, PlaceholderGeo } from "@/components/3d/SceneWrapper";
import { FadeIn, StaggerChildren } from "@/components/anim/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* 4.1 Section 1: Hero (Full Viewport) */}
      <section className="relative w-full min-h-[85vh] md:h-screen md:min-h-[700px] flex items-center overflow-hidden">
        <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-28 sm:py-32 md:py-0 md:h-full md:pt-20">
          <FadeIn direction="up" className="flex flex-col gap-6 md:gap-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-[var(--color-summit-black)] leading-[0.95] tracking-tight">
                We Build <br/> Revenue Engines. <br/> <span className="text-[var(--color-stone-gray)]">We Scale Execution.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-deep-charcoal)] max-w-lg leading-relaxed font-light">
                Fractional CRO leadership and GCC acceleration for mid-market growth companies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/contact" size="lg">
                Schedule a Diagnostic
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </FadeIn>
          
          <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full z-0">
             <SceneWrapper className="w-full h-full">
               <PlaceholderGeo />
             </SceneWrapper>
             <AnimatePresence>
               {showOverlay && (
                 <motion.div 
                   initial={{ opacity: 0, y: "-50%", x: "-50%", scale: 0.9 }}
                   animate={{ opacity: 1, y: "-50%", x: "-50%", scale: 1 }}
                   exit={{ opacity: 0, y: "-50%", x: "-50%", scale: 0.9 }}
                   transition={{ duration: 0.8, ease: "easeInOut" }}
                   className="absolute top-1/2 left-1/2 pointer-events-none z-20"
                 >
                    <span className="bg-[var(--color-cloud-white)]/80 backdrop-blur px-4 py-2 font-mono text-xs text-[var(--color-surmount-red)] border border-[var(--color-surmount-red)]/20">
                      INTERACTIVE 3D SCENE
                    </span>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </Container>
      </section>

      {/* 4.1 Section 2: Two Engines (Split Panel) */}
      <section className="relative w-full bg-white border-y border-[var(--color-terrain-beige)]/30">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--color-terrain-beige)]/30">
          <Link href="/services/fractional-cro" className="group relative p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-between min-h-[320px] md:min-h-[400px] hover:bg-gray-50 transition-colors">
            <div className="space-y-6">
               <div className="w-12 h-12 rounded-full bg-[var(--color-surmount-red)]/5 flex items-center justify-center text-[var(--color-surmount-red)] group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 size={24} />
               </div>
               <h3 className="text-3xl font-display text-[var(--color-summit-black)] group-hover:text-[var(--color-surmount-red)] transition-colors">Fractional CRO</h3>
               <p className="text-[var(--color-deep-charcoal)] max-w-sm">Embedded revenue leadership backed by 20+ years of operating experience. Pipeline discipline, forecasting, and GTM system redesign.</p>
            </div>
            <div className="mt-12 flex items-center text-sm font-medium uppercase tracking-wide group-hover:translate-x-2 transition-transform">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </Link>
          
          <Link href="/services/gcc-accelerator" className="group relative p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-between min-h-[320px] md:min-h-[400px] hover:bg-gray-50 transition-colors">
            <div className="space-y-6">
               <div className="w-12 h-12 rounded-full bg-[var(--color-surmount-red)]/5 flex items-center justify-center text-[var(--color-surmount-red)] group-hover:scale-110 transition-transform duration-300">
                  <Globe2 size={24} />
               </div>
               <h3 className="text-3xl font-display text-[var(--color-summit-black)] group-hover:text-[var(--color-surmount-red)] transition-colors">GCC Accelerator</h3>
               <p className="text-[var(--color-deep-charcoal)] max-w-sm">Build, scale, and optimize your global capability center — led by operators with 20–30 years of experience in scaling global operations.</p>
            </div>
            <div className="mt-12 flex items-center text-sm font-medium uppercase tracking-wide group-hover:translate-x-2 transition-transform">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* 4.1 Section 3: Market Context (Animated Numbers) */}
      <Section className="bg-[var(--color-summit-black)] text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 border-t border-white/20 pt-8 md:pt-12">
            {[
              { label: "GCCs in India", value: "1,760+" },
              { label: "Revenue Lift", value: ">40%" },
              { label: "Companies Helped", value: "~5" },
              { label: "Projected GCCs", value: "2,400+" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col gap-2">
                <span className="text-3xl sm:text-4xl md:text-5xl font-mono text-[var(--color-surmount-red)]">{stat.value}</span>
                <span className="text-sm uppercase tracking-widest text-white/60">{stat.label}</span>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Sectors We've Scaled */}
      <section className="bg-white border-b border-[var(--color-terrain-beige)]/30 py-6">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm uppercase tracking-widest text-[var(--color-stone-gray)] mr-4 font-medium">Sectors We&apos;ve Scaled:</span>
            {[
              { name: "Enterprise SaaS", assisted: true },
              { name: "IoT", assisted: true },
              { name: "Developer-Led Hardware", assisted: true },
              { name: "E-Commerce", assisted: false },
              { name: "Deep Tech", assisted: false },
              { name: "AI", assisted: false },
            ].map((v, i) => (
              <span key={i} className={`text-sm font-mono uppercase tracking-widest px-3 py-1 border ${
                v.assisted
                  ? "text-[var(--color-surmount-red)] border-[var(--color-surmount-red)]/30 bg-[var(--color-surmount-red)]/5"
                  : "text-[var(--color-stone-gray)] border-[var(--color-terrain-beige)]"
              }`}>
                {v.name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* 4.1 Section 5: Differentiation Pillars */}
      <Section className="bg-[var(--color-cloud-white)]">
        <Container>
          <div className="mb-16 max-w-xl">
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6">Why Surmount?</h2>
             <p className="text-lg text-[var(--color-deep-charcoal)]/80">
               Most companies fail at scale because they hire sales leaders before building revenue systems. We fix the order of operations.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "Real World Experience of Scale-Up and Exits", desc: "Revenue is a predictable execution activity. We bring decades of operator experience to your growth engine." },
               { title: "Operator-Led", desc: "No consultants. Only former CROs and VPs who have carried a bag." },
               { title: "GCC Acceleration", desc: "Unlock global talent without the outsourcing agency markup." }
             ].map((card, i) => (
               <FadeIn key={i} delay={i * 0.2} className="p-8 bg-white border border-[var(--color-terrain-beige)]/40 shadow-sm hover:shadow-xl hover:border-[var(--color-surmount-red)] transition-all duration-300 group">
                  <LayoutTemplate className="w-10 h-10 text-[var(--color-stone-gray)] mb-6 group-hover:text-[var(--color-surmount-red)] transition-colors" />
                  <h3 className="text-2xl font-display mb-4">{card.title}</h3>
                  <p className="text-[var(--color-deep-charcoal)]/80 mb-8">{card.desc}</p>
               </FadeIn>
             ))}
          </div>
        </Container>
      </Section>
      
      {/* CTA Banner */}
      <Section className="bg-[var(--color-deep-charcoal)] text-white text-center">
        <Container className="flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display">Ready to Build Your Revenue Engine?</h2>
          <Button href="/contact" size="lg" className="bg-white text-[var(--color-surmount-red)] hover:bg-[var(--color-cloud-white)]">
            Schedule a Strategy Call
          </Button>
        </Container>
      </Section>
    </main>
  );
}