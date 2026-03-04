"use client";

import Link from "next/link";
import { Section } from "@/components/Section";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-muted mb-4">
          <Link href="/components" className="hover:text-tide transition-colors">Components</Link>
          <span className="mx-2">/</span>
          <span className="text-abyss">Feedback</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
          Feedback
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Feedback components communicate system status to users. Use appropriate types and timing.
        </p>
      </header>

      {/* Alerts */}
      <Section title="Alerts" id="alerts">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Inline alerts for important messages that require attention.
        </p>
        <div className="space-y-4 max-w-2xl">
          {/* Success Alert */}
          <div className="rounded-xl bg-success/10 border border-success/20 p-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-success mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-abyss">Appointment confirmed!</h4>
                <p className="text-sm text-text-secondary mt-1">
                  Your session is scheduled for March 5th at 2:00 PM.
                </p>
              </div>
            </div>
          </div>

          {/* Warning Alert */}
          <div className="rounded-xl bg-warning/10 border border-warning/20 p-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-warning mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-abyss">Session credits running low</h4>
                <p className="text-sm text-text-secondary mt-1">
                  You have 2 credits remaining. Purchase more to continue booking sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Error Alert */}
          <div className="rounded-xl bg-error/10 border border-error/20 p-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-error mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-abyss">Payment failed</h4>
                <p className="text-sm text-text-secondary mt-1">
                  We couldn&apos;t process your payment. Please check your card details and try again.
                </p>
              </div>
            </div>
          </div>

          {/* Info Alert */}
          <div className="rounded-xl bg-tide/10 border border-tide/20 p-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-tide mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-abyss">New feature available</h4>
                <p className="text-sm text-text-secondary mt-1">
                  You can now message your therapist directly from the portal. Try it out!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-bg-secondary rounded-xl p-4 max-w-2xl">
          <code className="text-sm text-text-secondary">
            Alert: rounded-xl bg-[status]/10 border border-[status]/20 p-4
          </code>
        </div>
      </Section>

      {/* Progress Bars */}
      <Section title="Progress Bars" id="progress">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Show progress for multi-step processes or loading states.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8 space-y-8 max-w-xl">
          {/* Basic progress */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-abyss">Profile completion</span>
              <span className="text-sm text-text-secondary">75%</span>
            </div>
            <div className="h-2 rounded-full bg-bg-secondary overflow-hidden">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-surf to-tide transition-all duration-500" />
            </div>
          </div>

          {/* Colored variants */}
          <div className="space-y-4">
            <div>
              <span className="text-sm text-text-secondary mb-2 block">Success</span>
              <div className="h-2 rounded-full bg-bg-secondary overflow-hidden">
                <div className="h-full w-full rounded-full bg-success" />
              </div>
            </div>
            <div>
              <span className="text-sm text-text-secondary mb-2 block">Warning</span>
              <div className="h-2 rounded-full bg-bg-secondary overflow-hidden">
                <div className="h-full w-1/2 rounded-full bg-warning" />
              </div>
            </div>
            <div>
              <span className="text-sm text-text-secondary mb-2 block">Error</span>
              <div className="h-2 rounded-full bg-bg-secondary overflow-hidden">
                <div className="h-full w-1/4 rounded-full bg-error" />
              </div>
            </div>
          </div>

          {/* Animated/loading progress */}
          <div>
            <span className="text-sm text-text-secondary mb-2 block">Loading (animated)</span>
            <div className="h-2 rounded-full bg-bg-secondary overflow-hidden">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-surf to-tide animate-pulse" />
            </div>
          </div>
        </div>
        <div className="mt-6 bg-bg-secondary rounded-xl p-4 max-w-xl">
          <code className="text-sm text-text-secondary">
            Track: h-2 rounded-full bg-bg-secondary | Fill: bg-gradient-to-r from-surf to-tide
          </code>
        </div>
      </Section>

      {/* Spinners */}
      <Section title="Spinners" id="spinners">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Loading indicators for async operations.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-8 items-center">
            {/* Small spinner */}
            <div className="text-center">
              <div className="w-5 h-5 border-2 border-tide/30 border-t-surf rounded-full animate-spin mx-auto" />
              <span className="text-xs text-text-secondary mt-2 block">Small</span>
            </div>

            {/* Medium spinner */}
            <div className="text-center">
              <div className="w-8 h-8 border-3 border-tide/30 border-t-surf rounded-full animate-spin mx-auto" />
              <span className="text-xs text-text-secondary mt-2 block">Medium</span>
            </div>

            {/* Large spinner */}
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-tide/30 border-t-surf rounded-full animate-spin mx-auto" />
              <span className="text-xs text-text-secondary mt-2 block">Large</span>
            </div>

            {/* Button with spinner */}
            <div className="text-center">
              <button className="px-6 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide flex items-center gap-2 opacity-75 cursor-wait">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Saving...
              </button>
              <span className="text-xs text-text-secondary mt-2 block">In button</span>
            </div>
          </div>
          <div className="mt-6 bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              Spinner: border-2 border-tide/30 border-t-surf rounded-full animate-spin
            </code>
          </div>
        </div>
      </Section>

      {/* Step Indicators */}
      <Section title="Step Indicators" id="steps">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Multi-step progress indicators for wizards and onboarding flows.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          {/* Horizontal stepper */}
          <div className="flex items-center justify-center mb-12">
            {/* Step 1 - Complete */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-success text-white flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-abyss font-medium mt-2">Account</span>
            </div>
            <div className="w-20 h-1 bg-success mx-2" />

            {/* Step 2 - Active */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-tide text-white flex items-center justify-center ring-4 ring-tide/20">
                <span className="font-bold">2</span>
              </div>
              <span className="text-sm text-tide font-medium mt-2">Profile</span>
            </div>
            <div className="w-20 h-1 bg-border mx-2" />

            {/* Step 3 - Pending */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-bg-secondary text-text-secondary flex items-center justify-center">
                <span className="font-medium">3</span>
              </div>
              <span className="text-sm text-text-secondary mt-2">Review</span>
            </div>
          </div>

          {/* Vertical stepper */}
          <div className="max-w-sm mx-auto">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-success text-white flex items-center justify-center text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="w-0.5 h-12 bg-success" />
              </div>
              <div className="pb-8">
                <h4 className="font-semibold text-abyss">Complete intake form</h4>
                <p className="text-sm text-text-secondary">Tell us about yourself and your therapy goals.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-tide text-white flex items-center justify-center text-sm font-bold ring-4 ring-tide/20">
                  2
                </div>
                <div className="w-0.5 h-12 bg-border" />
              </div>
              <div className="pb-8">
                <h4 className="font-semibold text-tide">Therapist matching</h4>
                <p className="text-sm text-text-secondary">We&apos;re finding the perfect therapist for you.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-bg-secondary text-text-secondary flex items-center justify-center text-sm font-medium">
                  3
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-text-secondary">Schedule evaluation</h4>
                <p className="text-sm text-text-secondary">Book your first session with your therapist.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skeleton Loaders */}
      <Section title="Skeleton Loaders" id="skeleton">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Placeholder content while data is loading.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Card skeleton */}
            <div className="rounded-xl border border-border p-4 animate-pulse">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-bg-secondary" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-bg-secondary rounded w-3/4" />
                  <div className="h-3 bg-bg-secondary rounded w-1/2" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-bg-secondary rounded" />
                <div className="h-3 bg-bg-secondary rounded w-5/6" />
                <div className="h-3 bg-bg-secondary rounded w-4/6" />
              </div>
            </div>

            {/* List skeleton */}
            <div className="space-y-4 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-bg-secondary" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-bg-secondary rounded w-3/4" />
                    <div className="h-3 bg-bg-secondary rounded w-1/2" />
                  </div>
                  <div className="w-16 h-6 bg-bg-secondary rounded-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              Container: animate-pulse | Shapes: bg-bg-secondary rounded
            </code>
          </div>
        </div>
      </Section>

      {/* Empty States */}
      <Section title="Empty States" id="empty">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Friendly messages when there&apos;s no content to display.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* No results */}
          <div className="rounded-2xl bg-bg-card card-depth p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-bg-secondary flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss mb-2">No results found</h3>
            <p className="text-sm text-text-secondary mb-4">
              Try adjusting your search or filters.
            </p>
            <button className="px-5 py-2.5 rounded-2xl bg-white border-2 border-border border-b-4 text-tide text-sm font-bold uppercase tracking-wide hover:bg-blue-breeze active:border-b-2 active:mt-0.5 transition-all">
              Clear filters
            </button>
          </div>

          {/* Empty inbox */}
          <div className="rounded-2xl bg-bg-card card-depth p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-tide/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tide" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss mb-2">All caught up!</h3>
            <p className="text-sm text-text-secondary">
              You have no new messages.
            </p>
          </div>
        </div>
      </Section>

      {/* Usage Guidelines */}
      <Section title="Usage Guidelines" id="guidelines">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-success/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-abyss">Do</span>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Use semantic colors for alert types</li>
              <li>Provide clear, actionable messaging</li>
              <li>Show loading states for async operations</li>
              <li>Use skeleton loaders instead of spinners for content</li>
              <li>Include helpful CTAs in empty states</li>
            </ul>
          </div>

          <div className="rounded-xl bg-error/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="font-semibold text-abyss">Don&apos;t</span>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Use alerts for non-essential info</li>
              <li>Show spinners longer than necessary</li>
              <li>Leave users without feedback on actions</li>
              <li>Use technical jargon in error messages</li>
              <li>Show empty states without context</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
