"use client";

import { Section } from "@/components/Section";

export default function BadgesPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-secondary mb-4">
          <span>Components</span>
          <span className="mx-2">/</span>
          <span className="text-abyss">Badges</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
          Badges
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Badges communicate status, categories, and counts. Use semantic colors consistently across all products.
        </p>
      </header>

      {/* Status Badges */}
      <Section title="Status Badges" id="status">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Status badges indicate the state of items. Use consistent colors: green for success, amber for warning, red for error, blue for info.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-3 items-center mb-8">
            <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
              Success
            </span>
            <span className="px-3 py-1 rounded-full bg-warning/10 text-warning text-sm font-medium">
              Warning
            </span>
            <span className="px-3 py-1 rounded-full bg-error/10 text-error text-sm font-medium">
              Error
            </span>
            <span className="px-3 py-1 rounded-full bg-tide/10 text-tide text-sm font-medium">
              Info
            </span>
            <span className="px-3 py-1 rounded-full bg-bg-secondary text-text-secondary text-sm font-medium">
              Neutral
            </span>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              className=&quot;px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Appointment Status */}
      <Section title="Appointment Status" id="appointment">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Specific badge variants for appointment states used in Portal and Admin.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-3 items-center mb-8">
            <span className="px-3 py-1 rounded-full bg-tide/10 text-tide text-sm font-medium">
              Scheduled
            </span>
            <span className="px-3 py-1 rounded-full bg-tide/10 text-tide text-sm font-medium">
              Confirmed
            </span>
            <span className="px-3 py-1 rounded-full bg-sunshine/20 text-amber-600 text-sm font-medium">
              In Progress
            </span>
            <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
              Completed
            </span>
            <span className="px-3 py-1 rounded-full bg-error/10 text-error text-sm font-medium">
              Cancelled
            </span>
            <span className="px-3 py-1 rounded-full bg-bg-secondary text-text-secondary text-sm font-medium">
              No Show
            </span>
          </div>
          <div className="space-y-2">
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Scheduled/Confirmed</p>
              <code className="text-sm text-text-secondary">bg-tide/10 text-tide</code>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">In Progress</p>
              <code className="text-sm text-text-secondary">bg-sunshine/20 text-amber-600</code>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Completed</p>
              <code className="text-sm text-text-secondary">bg-success/10 text-success</code>
            </div>
          </div>
        </div>
      </Section>

      {/* Role Badges */}
      <Section title="Role Badges" id="role">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Role badges identify user types in the system.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-3 items-center mb-8">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-surf to-tide text-white text-sm font-medium">
              Admin
            </span>
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-jellyfish to-purple-500 text-white text-sm font-medium">
              Therapist
            </span>
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-success to-emerald-500 text-white text-sm font-medium">
              Client
            </span>
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-sunshine to-amber-500 text-abyss text-sm font-medium">
              Parent
            </span>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              className=&quot;px-3 py-1 rounded-full bg-gradient-to-r from-surf to-tide text-white text-sm font-medium&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Category Badges */}
      <Section title="Category Badges" id="category">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Category badges label content types, typically used on blog posts and resources.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-3 items-center mb-8">
            <span className="px-3 py-1.5 rounded-lg bg-tide/10 text-tide text-xs font-semibold uppercase tracking-wide">
              Speech Therapy
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-jellyfish/10 text-jellyfish text-xs font-semibold uppercase tracking-wide">
              Tips & Tricks
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-success/10 text-success text-xs font-semibold uppercase tracking-wide">
              Success Story
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-sunshine/20 text-amber-600 text-xs font-semibold uppercase tracking-wide">
              For Parents
            </span>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              className=&quot;px-3 py-1.5 rounded-lg bg-tide/10 text-tide text-xs font-semibold uppercase tracking-wide&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Count Badges */}
      <Section title="Count Badges" id="count">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Count badges show numeric values, often paired with icons or buttons.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-6 items-center mb-8">
            {/* Icon with badge */}
            <div className="relative">
              <button className="w-10 h-10 rounded-xl bg-bg-secondary text-text-secondary flex items-center justify-center" aria-label="Notifications">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-error text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
            </div>

            {/* Inline count */}
            <div className="flex items-center gap-2">
              <span className="text-text-secondary">Messages</span>
              <span className="px-2 py-0.5 rounded-full bg-tide text-white text-xs font-bold">
                12
              </span>
            </div>

            {/* Large count */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-secondary">
              <span className="text-abyss font-medium">Appointments</span>
              <span className="px-2.5 py-1 rounded-lg bg-success text-white text-sm font-bold">
                247
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Notification badge</p>
              <code className="text-sm text-text-secondary">absolute -top-1 -right-1 w-5 h-5 rounded-full bg-error text-white text-xs font-bold</code>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Inline count</p>
              <code className="text-sm text-text-secondary">px-2 py-0.5 rounded-full bg-tide text-white text-xs font-bold</code>
            </div>
          </div>
        </div>
      </Section>

      {/* Step Badges */}
      <Section title="Step Badges" id="step">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Step badges indicate progress through multi-step workflows.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex items-center gap-2 mb-8">
            {/* Completed step */}
            <div className="w-8 h-8 rounded-full bg-success text-white flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="w-12 h-0.5 bg-success" />

            {/* Active step */}
            <div className="w-8 h-8 rounded-full bg-tide text-white text-sm font-bold flex items-center justify-center ring-4 ring-tide/20">
              2
            </div>
            <div className="w-12 h-0.5 bg-border" />

            {/* Future step */}
            <div className="w-8 h-8 rounded-full bg-bg-secondary text-text-secondary text-sm font-medium flex items-center justify-center">
              3
            </div>
            <div className="w-12 h-0.5 bg-border" />

            {/* Future step */}
            <div className="w-8 h-8 rounded-full bg-bg-secondary text-text-secondary text-sm font-medium flex items-center justify-center">
              4
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Completed</p>
              <code className="text-sm text-text-secondary">bg-success text-white</code>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Active</p>
              <code className="text-sm text-text-secondary">bg-tide text-white ring-4 ring-tide/20</code>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Future</p>
              <code className="text-sm text-text-secondary">bg-bg-secondary text-text-secondary</code>
            </div>
          </div>
        </div>
      </Section>

      {/* Badge Sizes */}
      <Section title="Sizes" id="sizes">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use small badges in dense UI, medium for standard use, and large for emphasis.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <span className="px-2 py-0.5 rounded-full bg-tide/10 text-tide text-xs font-medium">
              Small
            </span>
            <span className="px-3 py-1 rounded-full bg-tide/10 text-tide text-sm font-medium">
              Medium
            </span>
            <span className="px-4 py-1.5 rounded-full bg-tide/10 text-tide text-base font-medium">
              Large
            </span>
          </div>
          <div className="space-y-2">
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Small</p>
              <code className="text-sm text-text-secondary">px-2 py-0.5 text-xs</code>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Medium (default)</p>
              <code className="text-sm text-text-secondary">px-3 py-1 text-sm</code>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Large</p>
              <code className="text-sm text-text-secondary">px-4 py-1.5 text-base</code>
            </div>
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
              <li>Use consistent colors for status types</li>
              <li>Keep badge text concise (1-2 words)</li>
              <li>Use semantic colors (green=success, red=error)</li>
              <li>Position count badges consistently</li>
              <li>Use rounded-full for pills, rounded-lg for tags</li>
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
              <li>Use badges for long text</li>
              <li>Mix badge shapes inconsistently</li>
              <li>Use arbitrary colors for status</li>
              <li>Stack multiple badges when one suffices</li>
              <li>Make badges clickable (use buttons instead)</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
