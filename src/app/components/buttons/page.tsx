"use client";

import { Section } from "@/components/Section";

export default function ButtonsPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-secondary mb-4">
          <span>Components</span>
          <span className="mx-2">/</span>
          <span className="text-abyss">Buttons</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
          Buttons
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Buttons trigger actions and guide users through workflows. Use the appropriate variant based on hierarchy and context.
        </p>
      </header>

      {/* Primary Buttons */}
      <Section title="Primary Button" id="primary">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use primary buttons for the main action on a page. Limit to one primary button per view.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="px-6 py-3 rounded-xl bg-tide text-white font-semibold shadow-lg shadow-tide/25 hover:bg-tide transition-colors">
              Primary Button
            </button>
            <button className="px-6 py-3 rounded-xl bg-tide text-white font-semibold shadow-lg shadow-tide/25 opacity-50 cursor-not-allowed">
              Disabled
            </button>
            <button className="px-6 py-3 rounded-xl bg-tide text-white font-semibold shadow-lg shadow-tide/25 flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Loading...
            </button>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              className=&quot;px-6 py-3 rounded-xl bg-tide text-white font-semibold shadow-lg shadow-tide/25 hover:bg-tide transition-colors&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Secondary Buttons */}
      <Section title="Secondary Button" id="secondary">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use secondary buttons for alternative actions that don&apos;t compete with the primary action.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="px-6 py-3 rounded-xl border-2 border-tide text-tide font-semibold hover:bg-tide hover:text-white transition-colors">
              Secondary Button
            </button>
            <button className="px-6 py-3 rounded-xl border-2 border-tide text-tide font-semibold opacity-50 cursor-not-allowed">
              Disabled
            </button>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              className=&quot;px-6 py-3 rounded-xl border-2 border-tide text-tide font-semibold hover:bg-tide hover:text-white transition-colors&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Accent Buttons */}
      <Section title="Accent Button" id="accent">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use accent buttons to draw extra attention, typically for promotional CTAs or special actions.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="px-6 py-3 rounded-xl bg-sunshine text-abyss font-semibold shadow-lg shadow-sunshine/25 hover:brightness-110 transition-all">
              Accent Button
            </button>
            <button className="px-6 py-3 rounded-xl bg-sunshine text-abyss font-semibold opacity-50 cursor-not-allowed">
              Disabled
            </button>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              className=&quot;px-6 py-3 rounded-xl bg-sunshine text-abyss font-semibold shadow-lg shadow-sunshine/25 hover:brightness-110 transition-all&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Ghost Buttons */}
      <Section title="Ghost Button" id="ghost">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use ghost buttons on dark backgrounds or when you need a subtle action that doesn&apos;t distract.
        </p>
        <div className="rounded-2xl bg-abyss p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="px-6 py-3 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors">
              Ghost Button
            </button>
            <button className="px-6 py-3 rounded-xl border-2 border-white/30 text-white/50 font-semibold cursor-not-allowed">
              Disabled
            </button>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <code className="text-sm text-white/70">
              className=&quot;px-6 py-3 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Button Sizes */}
      <Section title="Sizes" id="sizes">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use different sizes based on context. Small for dense UIs, large for primary CTAs.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="px-4 py-2 text-sm rounded-lg bg-tide text-white font-semibold hover:bg-tide transition-colors">
              Small
            </button>
            <button className="px-6 py-3 rounded-xl bg-tide text-white font-semibold hover:bg-tide transition-colors">
              Medium
            </button>
            <button className="px-8 py-4 text-lg rounded-xl bg-tide text-white font-semibold hover:bg-tide transition-colors">
              Large
            </button>
          </div>
          <div className="space-y-2">
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Small</p>
              <code className="text-sm text-text-secondary">px-4 py-2 text-sm rounded-lg</code>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Medium (default)</p>
              <code className="text-sm text-text-secondary">px-6 py-3 rounded-xl</code>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-secondary mb-1">Large</p>
              <code className="text-sm text-text-secondary">px-8 py-4 text-lg rounded-xl</code>
            </div>
          </div>
        </div>
      </Section>

      {/* Icon Buttons */}
      <Section title="Icon Buttons" id="icon">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use icon buttons for common actions like close, edit, or delete. Always include aria-label for accessibility.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="w-10 h-10 rounded-xl bg-tide text-white flex items-center justify-center hover:bg-tide transition-colors" aria-label="Add">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-xl bg-bg-secondary text-text-secondary flex items-center justify-center hover:bg-tide hover:text-white transition-colors" aria-label="Edit">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-xl bg-error/10 text-error flex items-center justify-center hover:bg-error hover:text-white transition-colors" aria-label="Delete">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-xl border border-border text-text-secondary flex items-center justify-center hover:border-tide hover:text-tide transition-colors" aria-label="More options">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              className=&quot;w-10 h-10 rounded-xl bg-tide text-white flex items-center justify-center hover:bg-tide transition-colors&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Button with Icon */}
      <Section title="Button with Icon" id="with-icon">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Pair icons with text to add visual cues and improve scannability.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-6 py-3 rounded-xl bg-tide text-white font-semibold flex items-center gap-2 hover:bg-tide transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add New
            </button>
            <button className="px-6 py-3 rounded-xl bg-tide text-white font-semibold flex items-center gap-2 hover:bg-tide transition-colors">
              Continue
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="px-6 py-3 rounded-xl border-2 border-tide text-tide font-semibold flex items-center gap-2 hover:bg-tide hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
          </div>
        </div>
      </Section>

      {/* Button Group */}
      <Section title="Button Group" id="group">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Group related actions together. Use consistent sizing within groups.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-8 items-start">
            {/* Inline group */}
            <div>
              <p className="text-sm text-text-secondary mb-3">Inline Actions</p>
              <div className="flex gap-3">
                <button className="px-6 py-3 rounded-xl bg-tide text-white font-semibold hover:bg-tide transition-colors">
                  Save
                </button>
                <button className="px-6 py-3 rounded-xl border-2 border-tide text-tide font-semibold hover:bg-tide hover:text-white transition-colors">
                  Cancel
                </button>
              </div>
            </div>
            {/* Segmented control */}
            <div>
              <p className="text-sm text-text-secondary mb-3">Segmented Control</p>
              <div className="inline-flex rounded-xl bg-bg-secondary p-1">
                <button className="px-4 py-2 rounded-lg bg-tide text-white font-medium text-sm">
                  Day
                </button>
                <button className="px-4 py-2 rounded-lg text-text-secondary font-medium text-sm hover:text-abyss transition-colors">
                  Week
                </button>
                <button className="px-4 py-2 rounded-lg text-text-secondary font-medium text-sm hover:text-abyss transition-colors">
                  Month
                </button>
              </div>
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
              <li>Use one primary button per view</li>
              <li>Use action verbs (Save, Submit, Continue)</li>
              <li>Maintain consistent sizing in groups</li>
              <li>Include loading states for async actions</li>
              <li>Use aria-label for icon-only buttons</li>
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
              <li>Use multiple primary buttons together</li>
              <li>Use vague labels like &quot;Click Here&quot;</li>
              <li>Disable buttons without explanation</li>
              <li>Mix button sizes inconsistently</li>
              <li>Use buttons for navigation (use links)</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
