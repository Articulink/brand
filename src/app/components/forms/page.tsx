"use client";

import { Section } from "@/components/Section";
import { useState } from "react";

export default function FormsPage() {
  const [checked, setChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-secondary mb-4">
          <span>Components</span>
          <span className="mx-2">/</span>
          <span className="text-abyss">Forms</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
          Forms
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Form elements collect user input. All inputs should have clear labels, helpful placeholders, and proper validation states.
        </p>
      </header>

      {/* Text Input */}
      <Section title="Text Input" id="text">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Standard text input for single-line text entry.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="grid gap-6 max-w-md">
            <div>
              <label className="block text-sm font-medium text-abyss mb-2">
                Default
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-abyss placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-abyss mb-2">
                With helper text
              </label>
              <input
                type="text"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-abyss placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent transition-all"
              />
              <p className="mt-2 text-sm text-text-secondary">We&apos;ll never share your email.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-abyss mb-2">
                Error state
              </label>
              <input
                type="text"
                defaultValue="invalid@"
                className="w-full px-4 py-3 rounded-xl border-2 border-error bg-error/5 text-abyss focus:outline-none focus:ring-2 focus:ring-error focus:border-transparent transition-all"
              />
              <p className="mt-2 text-sm text-error">Please enter a valid email address.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Disabled
              </label>
              <input
                type="text"
                disabled
                placeholder="Disabled input"
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-secondary text-text-secondary cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Input with Icon */}
      <Section title="Input with Icon" id="icon-input">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Add icons to provide visual context for the expected input.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="grid gap-6 max-w-md">
            <div>
              <label className="block text-sm font-medium text-abyss mb-2">
                Search
              </label>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-white text-abyss placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-abyss mb-2">
                Email
              </label>
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-white text-abyss placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Select */}
      <Section title="Select" id="select">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Dropdown select for choosing from predefined options.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="grid gap-6 max-w-md">
            <div>
              <label className="block text-sm font-medium text-abyss mb-2">
                Default
              </label>
              <div className="relative">
                <select className="w-full px-4 py-3 rounded-xl border border-border bg-white text-abyss appearance-none focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent transition-all cursor-pointer">
                  <option value="">Select an option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Textarea */}
      <Section title="Textarea" id="textarea">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Multi-line text input for longer content like messages or descriptions.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="grid gap-6 max-w-lg">
            <div>
              <label className="block text-sm font-medium text-abyss mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Enter your message..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-abyss placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent transition-all resize-none"
              />
              <p className="mt-2 text-sm text-text-secondary">0/500 characters</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Checkbox */}
      <Section title="Checkbox" id="checkbox">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Checkboxes allow users to select multiple options or toggle a single option.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="w-6 h-6 rounded-lg border-2 border-border bg-white peer-checked:bg-tide peer-checked:border-tide transition-all peer-focus:ring-2 peer-focus:ring-tide peer-focus:ring-offset-2">
                  <svg className="w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-abyss group-hover:text-tide transition-colors">I agree to the terms and conditions</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="w-6 h-6 rounded-lg border-2 border-border bg-white peer-checked:bg-tide peer-checked:border-tide transition-all">
                  <svg className="w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-abyss group-hover:text-tide transition-colors">Send me promotional emails</span>
            </label>
            <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
              <div className="relative">
                <input type="checkbox" disabled className="peer sr-only" />
                <div className="w-6 h-6 rounded-lg border-2 border-border bg-bg-secondary">
                </div>
              </div>
              <span className="text-text-secondary">Disabled option</span>
            </label>
          </div>
        </div>
      </Section>

      {/* Radio Buttons */}
      <Section title="Radio Buttons" id="radio">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Radio buttons allow users to select one option from a group.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="space-y-4">
            {["option1", "option2", "option3"].map((option, idx) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="radio"
                    name="radio-group"
                    value={option}
                    checked={selectedRadio === option}
                    onChange={(e) => setSelectedRadio(e.target.value)}
                    className="peer sr-only"
                  />
                  <div className="w-6 h-6 rounded-full border-2 border-border bg-white peer-checked:border-tide transition-all peer-focus:ring-2 peer-focus:ring-tide peer-focus:ring-offset-2">
                    <div className="w-full h-full rounded-full bg-tide scale-0 peer-checked:scale-50 transition-transform m-auto" />
                  </div>
                </div>
                <span className="text-abyss group-hover:text-tide transition-colors">Option {idx + 1}</span>
              </label>
            ))}
          </div>
        </div>
      </Section>

      {/* Toggle Switch */}
      <Section title="Toggle Switch" id="toggle">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Toggle switches for binary on/off settings.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="space-y-6">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-abyss">Email notifications</span>
              <div className="relative">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="w-12 h-7 bg-border rounded-full peer-checked:bg-tide transition-colors">
                  <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform" />
                </div>
              </div>
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-abyss">Push notifications</span>
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="w-12 h-7 bg-border rounded-full peer-checked:bg-tide transition-colors">
                  <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-5 transition-transform" />
                </div>
              </div>
            </label>
          </div>
        </div>
      </Section>

      {/* Form Layout */}
      <Section title="Form Layout" id="layout">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Example of a complete form with proper spacing and grouping.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <form className="max-w-lg space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-abyss mb-2">First name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-abyss focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-abyss mb-2">Last name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-abyss focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-abyss mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-abyss focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-abyss mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-abyss focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent transition-all resize-none"
              />
            </div>
            <div className="flex gap-4">
              <button type="submit" className="px-6 py-3 rounded-xl bg-tide text-white font-semibold shadow-lg shadow-tide/25 hover:bg-tide transition-colors">
                Submit
              </button>
              <button type="button" className="px-6 py-3 rounded-xl border-2 border-tide text-tide font-semibold hover:bg-tide hover:text-white transition-colors">
                Cancel
              </button>
            </div>
          </form>
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
              <li>Always include visible labels</li>
              <li>Use helpful placeholder text</li>
              <li>Show validation errors inline</li>
              <li>Group related fields together</li>
              <li>Mark required fields clearly</li>
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
              <li>Use placeholder as the only label</li>
              <li>Show errors after form submission only</li>
              <li>Use generic error messages</li>
              <li>Disable submit without explanation</li>
              <li>Auto-submit without user action</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
