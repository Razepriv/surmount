"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/anim/FadeIn";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

export default function NinetyDayRevenueResetPage() {
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
                  Revenue Operations
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50">
                  <Calendar className="w-3 h-3" />
                  February 28, 2026
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50">
                  <Clock className="w-3 h-3" />
                  10 min read
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-tight max-w-4xl">
                The 90-Day Revenue Reset: What Mid-Market B2B Companies Should Expect
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
                Every B2B company that has stalled between $5M and $50M in revenue shares a
                common pattern. The systems that carried the business through its first stage of
                growth are now the same systems holding it back. The pipeline is murky. Forecast
                accuracy is poor. Sales and marketing blame each other. And the CEO knows
                something is fundamentally broken but cannot pinpoint exactly where. This is the
                scenario a 90-day revenue reset is designed to solve.
              </p>

              {/* Section: Why 90 Days */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                Why 90 Days Is the Right Timeframe
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Ninety days is not an arbitrary window. It is long enough to diagnose root causes,
                implement structural changes, and begin measuring outcomes, but short enough to
                maintain urgency and executive attention. Most B2B revenue scaling consultants
                who work with mid-market companies know that transformation programs longer than
                90 days lose momentum. Teams revert to old habits. Sponsors get distracted.
                Initiatives drift.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                A 90-day reset forces prioritization. You cannot fix everything in three months,
                and you should not try. The goal is to identify the three to five highest-leverage
                changes in your revenue system, implement them with discipline, and build the
                foundation for sustained scaling. A good B2B revenue scaling consultant will tell
                you upfront what is in scope and what is not. That clarity is a feature, not a
                limitation.
              </p>

              {/* Section: The Diagnostic Phase */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                The Diagnostic Phase: Days 1 Through 30
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The first 30 days are about understanding reality, not making changes. This is
                where most internal turnaround attempts fail. Leaders skip the diagnostic and jump
                straight to solutions, which means they are solving the wrong problems. A proper
                revenue diagnostic examines five dimensions: pipeline health, conversion
                efficiency, sales process adherence, team capability, and technology utilization.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                During the diagnostic phase, expect deep dives into your CRM data. How many
                opportunities are truly qualified versus sitting in the pipeline as dead weight?
                What is the actual stage-to-stage conversion rate versus what your dashboard
                reports? Where are deals stalling, and why? This phase also includes one-on-one
                interviews with every revenue-facing team member, from SDRs to account executives
                to customer success managers. The patterns that emerge from these conversations
                are often more revealing than any data set.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                By the end of month one, you should have a clear diagnostic report that identifies
                your top revenue bottlenecks, quantifies the cost of inaction, and presents a
                prioritized action plan for the remaining 60 days.
              </p>

              {/* Section: The Build Phase */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                The Build Phase: Days 31 Through 75
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The build phase is where the real work happens. Based on the diagnostic findings,
                your team implements targeted interventions. Common workstreams include redefining
                your Ideal Customer Profile and ensuring your pipeline reflects it, redesigning
                pipeline stages with clear entry and exit criteria, implementing a forecasting
                methodology that connects to actual buyer behavior, restructuring sales and
                marketing alignment around shared revenue metrics, and configuring your CRM to
                support the process rather than just record it.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                This phase demands hands-on execution. A B2B revenue scaling consultant working
                in the build phase is not producing PowerPoint decks. They are in your CRM
                building dashboards, sitting in pipeline reviews coaching your managers, running
                enablement sessions with your reps, and holding weekly accountability meetings
                with your leadership team. The build phase is operationally intensive by design.
                You are rewiring how your revenue engine works while it is still running.
              </p>

              {/* Callout Box */}
              <div className="my-12 p-8 bg-[var(--color-summit-black)] rounded-sm border-l-4 border-[var(--color-surmount-red)]">
                <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-3">
                  Related Service
                </p>
                <p className="text-lg font-display text-white mb-4">
                  The 90-Day Revenue Reset Program
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  A structured diagnostic and implementation program that identifies your top
                  revenue bottlenecks and fixes them inside of one quarter.
                </p>
                <Link
                  href="/services/revenue-reset"
                  className="inline-flex items-center gap-2 text-[var(--color-surmount-red)] font-medium text-sm hover:underline"
                >
                  Learn about the Revenue Reset
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>

              {/* Section: The Handoff */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                The Handoff: Days 76 Through 90
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                A revenue reset is only as good as what happens after the consultant leaves. The
                final two weeks are dedicated to knowledge transfer and sustainability. This
                includes documenting every new process, training internal owners on how to run
                pipeline reviews and forecast cadences, building the dashboards your team will
                use going forward, and establishing the KPIs and reporting rhythms that keep the
                new system accountable.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The best resets create internal capability, not dependency. The goal is for your
                team to own the new revenue operating system completely by day 90. Some companies
                choose to extend the engagement into an advisory capacity, checking in monthly
                to ensure execution stays on track. But the core 90-day engagement should leave
                your organization fundamentally more capable than it was when you started.
              </p>

              {/* Section: What Success Looks Like */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                What Success Looks Like
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The outcomes of a well-executed 90-day revenue reset are measurable. Companies
                typically see a 15 to 30 percent improvement in pipeline-to-close conversion
                rates within one to two quarters. Forecast accuracy improves dramatically,
                often from below 50 percent to above 80 percent. Sales cycle length compresses
                as unqualified deals are removed from the pipeline and reps focus on winnable
                opportunities.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                But the most important outcome is cultural. A revenue reset gives your team a
                shared language, a shared process, and a shared set of metrics. It eliminates
                the finger-pointing between sales and marketing. It gives your board confidence
                in the numbers. And it gives your CEO the ability to focus on strategy instead
                of firefighting pipeline problems.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed">
                If your revenue engine feels stuck, the path forward is not more headcount or
                another tool. It is a disciplined reset of the systems, processes, and
                accountability structures that drive your growth. Ninety days is enough time
                to change everything.
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
                Is Your Revenue Engine Ready for a Reset?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                We will diagnose where the breakdown is happening, quantify the cost, and show
                you the 90-day path to getting your growth back on track.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Start Your 90-Day Reset
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}
