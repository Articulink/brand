"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { useState } from "react";

export default function ButtonsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("day");

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-muted mb-4">
          <Link href="/components" className="hover:text-tide transition-colors">Components</Link>
          <span className="mx-2">/</span>
          <span className="text-abyss">Buttons</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
          Buttons
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Our buttons have a playful, tactile feel with a 3D depth effect that makes them feel pressable. Use uppercase text with letter spacing for clarity.
        </p>
      </header>

      {/* Primary Buttons */}
      <Section title="Primary Button" id="primary">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use primary buttons for the main action on a page. The Tide color with a darker bottom border creates a satisfying "pushable" appearance.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="px-8 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide opacity-50 cursor-not-allowed">
              Disabled
            </button>
            <button className="px-8 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Loading
            </button>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              className=&quot;px-8 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Secondary Buttons */}
      <Section title="Secondary Button" id="secondary">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use secondary buttons for alternative actions. The outline style with a thicker bottom border maintains the 3D effect while being visually lighter.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="px-8 py-3 rounded-2xl bg-white border-2 border-border border-b-4 text-tide font-bold uppercase tracking-wide hover:bg-blue-breeze active:border-b-2 active:mt-0.5 transition-all">
              I Have An Account
            </button>
            <button className="px-8 py-3 rounded-2xl bg-white border-2 border-border border-b-4 text-tide font-bold uppercase tracking-wide opacity-50 cursor-not-allowed">
              Disabled
            </button>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              className=&quot;px-8 py-3 rounded-2xl bg-white border-2 border-border border-b-4 text-tide font-bold uppercase tracking-wide&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Accent Buttons */}
      <Section title="Accent Button" id="accent">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use accent buttons to draw extra attention, typically for promotional CTAs or celebratory moments.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="px-8 py-3 rounded-2xl bg-sunshine border-b-4 border-[#d4a90e] text-abyss font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
              Claim Reward
            </button>
            <button className="px-8 py-3 rounded-2xl bg-success border-b-4 border-[#16a34a] text-white font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
              Complete
            </button>
            <button className="px-8 py-3 rounded-2xl bg-coral border-b-4 border-[#d41672] text-white font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
              Special Offer
            </button>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              className=&quot;px-8 py-3 rounded-2xl bg-sunshine border-b-4 border-[#d4a90e] text-abyss font-bold uppercase tracking-wide&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Ghost Buttons */}
      <Section title="Ghost Button" id="ghost">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use ghost buttons on dark backgrounds. They maintain the pill shape but use a subtle border treatment.
        </p>
        <div className="rounded-2xl bg-tide border-b-[5px] border-[#0369c1] p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="px-8 py-3 rounded-2xl border-2 border-white/40 border-b-4 text-white font-bold uppercase tracking-wide hover:bg-white/10 active:border-b-2 active:mt-0.5 transition-all">
              Learn More
            </button>
            <button className="px-8 py-3 rounded-2xl border-2 border-white/40 border-b-4 text-white/50 font-bold uppercase tracking-wide cursor-not-allowed">
              Disabled
            </button>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <code className="text-sm text-white/70">
              className=&quot;px-8 py-3 rounded-2xl border-2 border-white/40 border-b-4 text-white font-bold uppercase tracking-wide&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Button Sizes */}
      <Section title="Sizes" id="sizes">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use different sizes based on context. Small for dense UIs, large for hero CTAs.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-end mb-8">
            <button className="px-5 py-2 text-sm rounded-2xl bg-tide border-b-[3px] border-[#0369c1] text-white font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-[3px] transition-all">
              Small
            </button>
            <button className="px-8 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
              Medium
            </button>
            <button className="px-10 py-4 text-lg rounded-2xl bg-tide border-b-[5px] border-[#0369c1] text-white font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-[5px] transition-all">
              Large
            </button>
          </div>
          <div className="space-y-2">
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-muted mb-1">Small</p>
              <code className="text-sm text-text-secondary">px-5 py-2 text-sm rounded-2xl border-b-[3px]</code>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-muted mb-1">Medium (default)</p>
              <code className="text-sm text-text-secondary">px-8 py-3 rounded-2xl border-b-4</code>
            </div>
            <div className="bg-bg-secondary rounded-xl p-4">
              <p className="text-xs text-text-muted mb-1">Large</p>
              <code className="text-sm text-text-secondary">px-10 py-4 text-lg rounded-2xl border-b-[5px]</code>
            </div>
          </div>
        </div>
      </Section>

      {/* Icon Buttons */}
      <Section title="Icon Buttons" id="icon">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use icon buttons for common actions. The circular shape maintains the playful feel while staying compact.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="w-12 h-12 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white flex items-center justify-center hover:brightness-110 active:border-b-0 active:mt-1 transition-all" aria-label="Add">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-2xl bg-white border-2 border-border border-b-4 text-text-secondary flex items-center justify-center hover:text-tide hover:border-tide/30 active:border-b-2 active:mt-0.5 transition-all" aria-label="Edit">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-2xl bg-error border-b-4 border-[#c53030] text-white flex items-center justify-center hover:brightness-110 active:border-b-0 active:mt-1 transition-all" aria-label="Delete">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-2xl bg-success border-b-4 border-[#16a34a] text-white flex items-center justify-center hover:brightness-110 active:border-b-0 active:mt-1 transition-all" aria-label="Check">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              className=&quot;w-12 h-12 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white flex items-center justify-center&quot;
            </code>
          </div>
        </div>
      </Section>

      {/* Button with Icon */}
      <Section title="Button with Icon" id="with-icon">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Pair icons with text to add visual cues. Icons should match the button&apos;s visual weight.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-4 items-center">
            <button className="px-8 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide flex items-center gap-2 hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add New
            </button>
            <button className="px-8 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide flex items-center gap-2 hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
              Continue
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="px-8 py-3 rounded-2xl bg-white border-2 border-border border-b-4 text-tide font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-blue-breeze active:border-b-2 active:mt-0.5 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
          </div>
        </div>
      </Section>

      {/* Full Width Buttons */}
      <Section title="Full Width" id="full-width">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use full-width buttons in mobile layouts, modals, and forms where the button should span the container.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8 max-w-md">
          <div className="space-y-3">
            <button className="w-full px-8 py-4 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
              Sign Up Free
            </button>
            <button className="w-full px-8 py-4 rounded-2xl bg-white border-2 border-border border-b-4 text-tide font-bold uppercase tracking-wide hover:bg-blue-breeze active:border-b-2 active:mt-0.5 transition-all">
              I Already Have An Account
            </button>
          </div>
        </div>
      </Section>

      {/* Button Group */}
      <Section title="Button Group" id="group">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Group related actions together. Maintain the 3D style but adjust spacing for visual harmony.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex flex-wrap gap-8 items-start">
            {/* Inline group */}
            <div>
              <p className="text-sm text-text-muted mb-3">Inline Actions</p>
              <div className="flex gap-3">
                <button className="px-8 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
                  Save
                </button>
                <button className="px-8 py-3 rounded-2xl bg-white border-2 border-border border-b-4 text-tide font-bold uppercase tracking-wide hover:bg-blue-breeze active:border-b-2 active:mt-0.5 transition-all">
                  Cancel
                </button>
              </div>
            </div>
            {/* Segmented control */}
            <div>
              <p className="text-sm text-text-muted mb-3">Segmented Control</p>
              <div className="inline-flex rounded-2xl bg-bg-secondary p-1 border-2 border-border border-b-4">
                {["day", "week", "month"].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-5 py-2 rounded-xl font-bold text-sm uppercase tracking-wide transition-all ${
                      selectedPeriod === period
                        ? "bg-tide text-white"
                        : "text-text-secondary hover:text-abyss"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
              <p className="text-xs text-text-muted mt-2">Selected: {selectedPeriod}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Active/Pressed State Demo */}
      <Section title="Interaction States" id="states">
        <p className="text-text-secondary mb-8 max-w-2xl">
          The 3D effect responds to interaction. On press, the bottom border disappears and the button shifts down, creating a satisfying tactile feedback.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <p className="text-sm text-text-muted mb-3">Default</p>
              <button className="px-8 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide">
                Button
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-text-muted mb-3">Hover</p>
              <button className="px-8 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide brightness-110">
                Button
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-text-muted mb-3">Pressed</p>
              <button className="px-8 py-3 rounded-2xl bg-tide border-b-0 mt-1 text-white font-bold uppercase tracking-wide">
                Button
              </button>
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
              <li>• Use one primary button per view</li>
              <li>• Use short, clear action verbs in uppercase</li>
              <li>• Maintain consistent sizing within button groups</li>
              <li>• Include loading states for async actions</li>
              <li>• Use the 3D press effect for interactive feedback</li>
              <li>• Use full-width buttons on mobile</li>
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
              <li>• Use multiple primary buttons together</li>
              <li>• Use long sentences as button labels</li>
              <li>• Mix button styles inconsistently</li>
              <li>• Remove the 3D depth effect (it&apos;s core to our brand)</li>
              <li>• Use buttons for navigation (use links instead)</li>
              <li>• Disable buttons without explaining why</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
