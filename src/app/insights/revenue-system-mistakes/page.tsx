"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/anim/FadeIn";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

export default function RevenueSystemMistakesPage() {
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
                  December 10, 2025
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50">
                  <Clock className="w-3 h-3" />
                  7 min read
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-tight max-w-4xl">
                The 5 Revenue System Mistakes That Stall Mid-Market Scaling
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
                Mid-market B2B companies between $10M and $75M in revenue face a paradox. They
                have enough traction to prove the business works, but not enough operational
                maturity to scale reliably. Growth feels inconsistent. Quarters are unpredictable.
                And leadership teams often sense that the problem is systemic without being able
                to name exactly what is broken. After working with dozens of mid-market revenue
                operations, we see the same five mistakes repeated across industries, geographies,
                and business models.
              </p>

              {/* Mistake 1 */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                <span className="text-[var(--color-surmount-red)] font-mono text-lg mr-3">01</span>
                Hiring Headcount Before Building Process
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The instinct to throw bodies at a revenue problem is deeply ingrained in
                mid-market leadership. Pipeline is light? Hire more SDRs. Deals are not closing?
                Add account executives. Customer churn is rising? Build a customer success team.
                The problem is that new hires amplify existing systems, good or bad. If your
                sales process is undefined, ten reps will execute ten different processes. If
                your ICP is vague, more SDRs will simply generate more unqualified pipeline.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The companies that scale efficiently do it in the opposite order. They define
                the process, validate it with a small team, document the playbook, and then hire
                into a machine that is already working. Mid-market revenue operations should
                focus on process before people. Every time. The headcount investment pays off
                exponentially when the infrastructure exists to support it.
              </p>

              {/* Mistake 2 */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                <span className="text-[var(--color-surmount-red)] font-mono text-lg mr-3">02</span>
                No Pipeline Discipline
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                A pipeline without discipline is a fiction. Most mid-market companies we audit
                have pipelines inflated by 40 to 60 percent with opportunities that are stale,
                unqualified, or misclassified. Reps keep deals in the pipeline because removing
                them feels like admitting failure. Managers tolerate it because a large pipeline
                number looks good in the board report. The result is a forecasting disaster that
                erodes trust between the revenue team and the executive suite.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Pipeline discipline means enforcing clear entry criteria for each stage, removing
                deals that have not progressed within defined timeframes, and requiring verified
                next steps for every opportunity. It means the pipeline number your CRM reports
                reflects reality, not aspiration. Companies with strong mid-market revenue
                operations review pipeline weekly, not monthly, and hold reps accountable for
                pipeline hygiene as seriously as they hold them accountable for quota attainment.
              </p>

              {/* Mistake 3 */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                <span className="text-[var(--color-surmount-red)] font-mono text-lg mr-3">03</span>
                Forecast Fiction
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Ask any mid-market CEO what their forecast accuracy is and you will likely hear
                an uncomfortable silence. The dirty secret of mid-market B2B sales is that most
                forecasts are a blend of optimism, gut feel, and spreadsheet manipulation. Reps
                sandbagging their commit numbers. Managers padding with upside deals they know
                will not close. VPs of Sales presenting a forecast that reflects what the board
                wants to hear rather than what the data shows.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Fixing forecast fiction requires two things. First, a methodology. Whether you
                use MEDDPICC, weighted pipeline, or a time-decay model, the approach must be
                consistent and inspectable. Second, accountability. Forecast calls should be
                deal-level reviews where managers challenge assumptions and verify buyer behavior.
                When forecasting becomes a rigorous process instead of a guessing game, CEOs
                can make investment decisions with confidence and boards trust the numbers they
                are seeing.
              </p>

              {/* Callout Box */}
              <div className="my-12 p-8 bg-[var(--color-summit-black)] rounded-sm border-l-4 border-[var(--color-surmount-red)]">
                <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-3">
                  Related Services
                </p>
                <p className="text-lg font-display text-white mb-4">
                  Revenue Architecture and Fractional CRO Engagements
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  We help mid-market companies build the revenue systems, processes, and
                  leadership infrastructure required to scale past plateaus.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[var(--color-surmount-red)] font-medium text-sm hover:underline"
                >
                  Explore our services
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>

              {/* Mistake 4 */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                <span className="text-[var(--color-surmount-red)] font-mono text-lg mr-3">04</span>
                Siloed Sales and Marketing Teams
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                In nearly every mid-market company we engage with, sales and marketing operate
                as separate kingdoms with separate metrics, separate meetings, and separate
                definitions of success. Marketing celebrates MQLs. Sales ignores them. Sales
                complains about lead quality. Marketing points to volume numbers. The customer
                acquisition cost balloons while both teams insist the problem is on the other
                side of the wall.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Alignment is not a cultural initiative. It is an operational one. It starts with
                shared definitions: what constitutes a qualified lead, what the handoff process
                looks like, and what revenue metrics both teams are jointly accountable for. It
                continues with shared rituals: joint pipeline reviews, shared dashboards, and
                regular feedback loops. The companies with the most effective mid-market revenue
                operations treat sales and marketing as a single revenue function with two
                operating arms, not two independent departments.
              </p>

              {/* Mistake 5 */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                <span className="text-[var(--color-surmount-red)] font-mono text-lg mr-3">05</span>
                No Revenue Operations Function
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Revenue Operations, or RevOps, is the connective tissue that makes everything
                else work. It is the function responsible for systems administration, data
                integrity, process enforcement, reporting accuracy, and cross-functional
                alignment. Without it, your CRM becomes a graveyard of bad data. Your reports
                contradict each other. Your tools do not integrate. And your leadership team
                spends hours every week arguing about whose numbers are correct.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Many mid-market companies resist hiring a RevOps leader because it feels like
                overhead. It is not. It is infrastructure. A strong RevOps function does not add
                to your cost structure. It makes every dollar you spend on sales and marketing
                more efficient. It ensures the data your executives use to make decisions is
                accurate. It enables the pipeline discipline, forecasting methodology, and
                cross-functional alignment described in the previous four sections.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The irony is that companies that delay investing in RevOps end up spending far
                more on consultants, failed hires, and missed opportunities than they would have
                spent on a single strategic operations leader.
              </p>

              {/* Conclusion */}
              <div className="mt-12 pt-8 border-t border-[var(--color-platform-gray)]">
                <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                  These five mistakes are not esoteric. They are not edge cases. They are the
                  default failure mode of mid-market growth companies. The good news is that
                  every one of them is fixable. The fix does not require massive investment or
                  years of transformation. It requires honest diagnosis, disciplined execution,
                  and the willingness to build systems before scaling headcount.
                </p>
                <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed">
                  If you recognized your company in two or more of these patterns, the time to
                  act is now. Revenue system debt compounds just like technical debt. The longer
                  you wait, the more expensive the fix becomes.
                </p>
              </div>
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
                Stop Guessing. Start Diagnosing.
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Our revenue diagnostic identifies exactly which of these five mistakes are
                costing you growth, and gives you a clear roadmap to fix them.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Get Your Revenue Diagnostic
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}
