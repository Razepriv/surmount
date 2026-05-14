"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/anim/FadeIn";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

export default function WhenToHireFractionalCROPage() {
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
                  Strategy
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50">
                  <Calendar className="w-3 h-3" />
                  March 15, 2026
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50">
                  <Clock className="w-3 h-3" />
                  8 min read
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-tight max-w-4xl">
                When to Hire a Fractional CRO vs. a Full-Time CRO
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
                For mid-market B2B companies generating between $5M and $150M in annual revenue,
                the decision to bring on a Chief Revenue Officer is one of the most consequential
                hiring choices a CEO can make. Get it right, and you unlock the next stage of
                growth. Get it wrong, and you burn through six figures of salary, equity, and
                lost time. The question is not whether you need revenue leadership. The question
                is what kind.
              </p>

              {/* Section: The Full-Time CRO Gamble */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                The Full-Time CRO Gamble
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The typical full-time CRO hire at the mid-market level comes with a base salary
                of $250,000 to $400,000, plus equity, bonus targets, and benefits that push total
                compensation well north of half a million dollars. Then there is the cost of
                recruiting, which often involves a retained search firm charging 25 to 30 percent
                of first-year compensation. The process takes three to six months. By the time
                your new CRO is in seat, you are nine months and $150,000 into the engagement
                before a single process has been redesigned.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                And here is the uncomfortable truth: the failure rate for CRO hires at this stage
                is staggering. Industry data suggests that nearly 60 percent of newly hired
                revenue leaders depart within 18 months. The reasons are consistent. The company
                was not ready for a full-time executive. The mandate was unclear. The systems were
                too immature to support a strategic leader. Or the hire came from a company three
                stages ahead and could not adapt to the constraints of a smaller operation.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                A failed CRO hire does not just waste money. It destabilizes your sales team,
                confuses your board, and can set your revenue trajectory back by 12 months or
                more. For companies in Austin and across the Sun Belt that are scaling quickly
                but operating lean, the risk-reward calculus of a full-time CRO deserves serious
                scrutiny.
              </p>

              {/* Section: When Fractional Makes Sense */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                When Fractional Makes Sense
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                A fractional CRO in Austin, or any growth market, provides the same caliber of
                strategic revenue leadership without the permanent overhead. This model works
                especially well in specific circumstances. If your company has crossed the $3M
                to $5M ARR threshold but has not yet built repeatable sales processes, a fractional
                CRO brings the operational playbook you need without requiring you to commit to a
                quarter-million-dollar salary before you know what kind of leader fits long term.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The fractional model also excels when you are between revenue leaders. Perhaps
                your VP of Sales just departed and you need someone to stabilize the pipeline,
                coach your reps, and maintain board confidence while you search for a permanent
                hire. A fractional CRO can fill that gap with zero ramp time because they have
                done this exact work across dozens of companies.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Companies preparing for fundraising or a strategic exit also benefit enormously.
                A fractional CRO Austin-based firm like Surmount CxO Partners can restructure
                your revenue metrics, clean up your CRM data, and present a credible growth
                narrative to investors in 90 days. That is the kind of outcome that justifies
                itself many times over.
              </p>

              {/* Callout Box */}
              <div className="my-12 p-8 bg-[var(--color-summit-black)] rounded-sm border-l-4 border-[var(--color-surmount-red)]">
                <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-surmount-red)] mb-3">
                  Related Service
                </p>
                <p className="text-lg font-display text-white mb-4">
                  Fractional CRO Engagements
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Hands-on revenue leadership for mid-market B2B companies. Strategy, process,
                  team development, and pipeline architecture from day one.
                </p>
                <Link
                  href="/services/fractional-cro"
                  className="inline-flex items-center gap-2 text-[var(--color-surmount-red)] font-medium text-sm hover:underline"
                >
                  Explore our Fractional CRO service
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>

              {/* Section: Cost Comparison */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                The Cost Comparison Is Not Even Close
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Consider the total first-year cost of a full-time CRO: base salary, bonus,
                equity, benefits, recruiting fees, onboarding, and the opportunity cost of a
                three-to-six-month ramp period. For a mid-market company, that figure lands
                between $500,000 and $750,000. And if the hire does not work out, you absorb
                severance, another recruiting cycle, and the revenue impact of leadership
                instability.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                A fractional CRO engagement typically runs between $10,000 and $25,000 per month,
                depending on scope and time commitment. That is $120,000 to $300,000 annually,
                with the flexibility to scale up or down based on need. There is no equity
                dilution, no recruiting fee, and no severance risk. You get a senior operator
                who is delivering value from week one because they have built and fixed revenue
                systems at companies just like yours.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                For many mid-market companies working with a fractional CRO, the engagement pays
                for itself within the first quarter through improved pipeline conversion, reduced
                sales cycle length, and better forecasting accuracy.
              </p>

              {/* Section: Signs You're Ready */}
              <h2 className="text-2xl sm:text-3xl font-display text-[var(--color-summit-black)] mt-12 mb-6">
                Signs You Are Ready for a Fractional CRO
              </h2>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                Not every company is a fit for the fractional model. But if you recognize
                yourself in two or more of these scenarios, it is likely the right move.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Your CEO is still the de facto head of sales and it is consuming more than 30 percent of their time.",
                  "You have sales reps but no documented sales process, no clear ICP definition, and no pipeline stages that your team actually follows.",
                  "Your board is asking about revenue predictability and you do not have a credible answer.",
                  "You are preparing for a Series A, B, or growth equity round and need to demonstrate a mature go-to-market engine.",
                  "You recently lost your VP of Sales or CRO and need experienced leadership while you search for a permanent replacement.",
                  "Your revenue has plateaued and you cannot figure out whether the problem is lead generation, sales execution, or retention.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-surmount-red)] shrink-0" />
                    <span className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed mb-6">
                The fractional CRO model is not about settling for less. It is about accessing
                more experienced leadership at the stage where you need it most, without the
                financial and operational risk of a premature full-time hire. Companies across
                Austin and the broader mid-market are increasingly recognizing that fractional
                executive talent is not a stopgap. It is a strategic advantage.
              </p>
              <p className="text-base md:text-lg text-[var(--color-deep-charcoal)]/90 leading-relaxed">
                The best time to bring on a fractional CRO is before the pain becomes a crisis.
                If you are reading this article and nodding, the second-best time is today.
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
                Ready to Explore Fractional Revenue Leadership?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                A 30-minute discovery call is all it takes to understand whether a fractional CRO
                engagement is the right fit for your stage, your team, and your goals.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Book a Fractional CRO Discovery Call
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </main>
  );
}
