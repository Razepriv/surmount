"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/anim/FadeIn";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

export default function GCCTalentModelsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cloud-white)]">
      {/* Hero Banner */}
      <Section className="pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-20 bg-[var(--color-summit-black)] text-white !py-0">
        <Container>
          <div className="pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-20">
            <FadeIn direction="up">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors mb-10"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Insights
              </Link>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--color-surmount-red)] bg-[var(--color-surmount-red)]/10 px-3 py-1.5 rounded-sm">
                  <Tag className="w-3 h-3" />
                  Global Talent
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50">
                  <Calendar className="w-3 h-3" />
                  January 20, 2026
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50">
                  <Clock className="w-3 h-3" />
                  9 min read
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-tight max-w-4xl">
                How GCC Talent Models Work for U.S. Growth Companies
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-surmount-red)]/20 flex items-center justify-center text-sm font-display text-[var(--color-surmount-red)]">
                  S
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Surmount Team</p>
                  <p className="text-xs text-white/50">Surmount CxO Partners</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Article Body */}
      <Section className="bg-[var(--color-cloud-white)] !py-12 md:!py-20">
        <Container size="sm">
          <FadeIn direction="up">
            <article className="prose-article">
              {/* Intro */}
              <p className="text-lg md:text-xl text-[var(--color-deep-charcoal)] leading-relaxed mb-8 font-light">
                For U.S.-based growth companies looking to scale engineering, data, and operations
                teams without proportionally scaling costs, the Global Capability Center model
                has moved from enterprise luxury to mid-market necessity. Once the exclusive
                domain of Fortune 500 companies, the GCC talent model in India and other emerging
                markets is now accessible to companies generating $10M to $100M in revenue. The
                shift represents one of the most significant structural advantages available to
                growth-stage companies today.
              </p>

              {/* Section: What Is a GCC */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                What Is a GCC, and Why Does It Matter Now?
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                A Global Capability Center is a wholly owned subsidiary or dedicated office that
                a company establishes in an international market, typically India, to house
                critical business functions. Unlike outsourcing, where you contract a third party
                to deliver work, a GCC is your team, on your payroll, operating under your
                management, and building your intellectual property. The distinction matters
                enormously.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                India alone hosts over 1,600 GCCs employing more than 1.7 million professionals.
                Cities like Hyderabad, Bangalore, Pune, and Chennai have built world-class
                technology ecosystems that rival Silicon Valley in talent density for specific
                disciplines. The GCC talent model in India benefits from a deep bench of
                engineers, data scientists, and operational professionals trained at globally
                recognized institutions and seasoned at major technology companies.
              </p>

              {/* Section: GCC vs Outsourcing */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                GCC vs. Outsourcing: A Fundamental Difference
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The outsourcing model has served companies well for decades, but it comes with
                inherent limitations that become more painful as you scale. With outsourcing,
                you do not own the team. Turnover is managed by the vendor, not by you. Knowledge
                walks out the door when contracts change. Incentives are misaligned because the
                outsourcing firm profits from billing hours, not from building your product
                better.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                A GCC inverts every one of those dynamics. Your team members are your employees.
                They attend your all-hands meetings. They advance through your career ladder.
                They build institutional knowledge that compounds over time. The code they write,
                the processes they build, and the data models they create belong to you. For
                companies building proprietary technology or handling sensitive customer data,
                this ownership model is not just preferable. It is essential.
              </p>

              {/* Section: The Talent Advantage */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                The Talent Advantage
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The quality of talent available through a GCC talent model in India has improved
                dramatically in the last decade. Indian universities now produce over 1.5 million
                engineering graduates annually, and the top tier of this talent pool is
                exceptionally strong. Companies establishing GCCs in Hyderabad or Bangalore
                regularly hire engineers with five to ten years of experience at companies like
                Google, Amazon, Microsoft, and Flipkart, at a fraction of U.S. compensation
                levels.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                But the advantage is not just about cost. It is about access. The U.S. market
                for senior software engineers, data engineers, and DevOps professionals is
                fiercely competitive. Companies in Austin, Denver, and Atlanta are competing
                against FAANG compensation packages and fully remote offers from coastal
                enterprises. A GCC allows you to sidestep that war for talent entirely while
                still building a world-class team.
              </p>

              {/* Callout Box */}
              <div className="my-12 p-8 bg-[var(--color-summit-black)] rounded-sm border-l-4 border-[var(--color-surmount-red)]">
                <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-3">
                  Related Service
                </p>
                <p className="text-lg font-display text-white mb-4">
                  GCC Accelerator Program
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  From entity setup to first hire in 90 days. We handle the legal, compliance,
                  and recruiting infrastructure so you can focus on building your team.
                </p>
                <Link
                  href="/services/gcc-accelerator"
                  className="inline-flex items-center gap-2 text-[var(--color-surmount-red)] font-medium text-sm hover:underline"
                >
                  Explore the GCC Accelerator
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>

              {/* Section: Cost + Quality Equation */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                The Cost and Quality Equation
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The financial case for a GCC is compelling, but it requires honest accounting.
                A senior software engineer in the U.S. commands a total compensation package of
                $180,000 to $280,000. An equivalently skilled engineer in Hyderabad costs
                $40,000 to $70,000 in total compensation. That is a 3x to 5x cost advantage,
                but the savings are not purely in salary. Real estate, benefits, and operational
                costs are all significantly lower.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The mistake some companies make is optimizing purely for cost. The lowest-cost
                hires are rarely the best performers, and a GCC staffed with junior engineers
                churning out low-quality code will cost you more in rework, bugs, and missed
                deadlines than a smaller team of senior professionals. The right approach is to
                target the 70th to 90th percentile of local talent, which still delivers massive
                savings compared to U.S. hiring while ensuring the caliber of work meets your
                standards.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                When modeled correctly, a 10-person GCC engineering team can deliver the
                equivalent output of a $3M U.S. team for under $1M in annual cost. That
                difference compounds every year and fundamentally changes your unit economics.
              </p>

              {/* Section: Getting Started */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                Getting Started: What the First 90 Days Look Like
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Establishing a GCC is a significant operational undertaking, but it does not need
                to be overwhelming. The first phase involves entity formation, which includes
                registering a subsidiary in India, establishing banking relationships, and
                navigating local compliance requirements. Companies that attempt this without
                local expertise often spend six to twelve months in setup. With an experienced
                partner, this timeline compresses to 60 to 90 days.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Simultaneously, you begin building your talent pipeline. This means defining
                role profiles, establishing compensation bands that are competitive in the local
                market, and beginning outreach to candidates. The best GCC launches have their
                first three to five hires onboarded within 90 days of the decision to proceed.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed">
                The GCC talent model is no longer an enterprise-only strategy. It is a
                competitive necessity for U.S. growth companies that want to scale their teams,
                protect their IP, and maintain cost discipline. The companies that move now will
                have a structural talent advantage that compounds for years. The companies that
                wait will continue competing in the most expensive talent market on earth.
              </p>
            </article>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[var(--color-summit-black)] text-white">
        <Container>
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-6">
                Build Your GCC Team. Own Your Talent.
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Stop renting talent through outsourcing. Let us help you establish a Global
                Capability Center that gives you world-class team members who are truly yours.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Build Your GCC Team
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}
