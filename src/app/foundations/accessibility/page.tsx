"use client";

import Link from "next/link";
import { Section } from "@/components/Section";

const contrastExamples = [
  { bg: "bg-white", text: "text-abyss", label: "Abyss on Cloud", ratio: "15.6:1", pass: true },
  { bg: "bg-white", text: "text-blue-lagoon", label: "Lagoon on Cloud", ratio: "9.2:1", pass: true },
  { bg: "bg-white", text: "text-tide", label: "Tide on Cloud", ratio: "4.5:1", pass: true },
  { bg: "bg-tide", text: "text-white", label: "Cloud on Tide", ratio: "4.5:1", pass: true },
  { bg: "bg-abyss", text: "text-white", label: "Cloud on Abyss", ratio: "15.6:1", pass: true },
  { bg: "bg-white", text: "text-blue-bubble", label: "Bubble on Cloud", ratio: "2.1:1", pass: false },
];

const focusStates = [
  { name: "Buttons", class: "focus:ring-2 focus:ring-tide focus:ring-offset-2" },
  { name: "Inputs", class: "focus:border-tide focus:ring-1 focus:ring-tide" },
  { name: "Links", class: "focus:outline-none focus:ring-2 focus:ring-tide focus:ring-offset-2 rounded" },
  { name: "Cards", class: "focus-within:ring-2 focus-within:ring-tide" },
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-muted mb-4">
          <Link href="/foundations" className="hover:text-tide transition-colors">Foundations</Link>
          <span className="mx-2">/</span>
          <span className="text-abyss">Accessibility</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
          Accessibility
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Building inclusive experiences that work for everyone.
        </p>
      </header>

      {/* Principles */}
      <Section title="Principles" id="principles">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              letter: "P",
              title: "Perceivable",
              description: "Information must be presentable in ways all users can perceive.",
            },
            {
              letter: "O",
              title: "Operable",
              description: "Interface components must be operable by all users.",
            },
            {
              letter: "U",
              title: "Understandable",
              description: "Information and UI operation must be understandable.",
            },
            {
              letter: "R",
              title: "Robust",
              description: "Content must be robust enough for assistive technologies.",
            },
          ].map((principle) => (
            <div key={principle.letter} className="rounded-2xl bg-bg-card card-depth p-6">
              <div className="w-12 h-12 rounded-xl bg-tide flex items-center justify-center mb-4">
                <span className="font-display text-xl font-bold text-white">{principle.letter}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-abyss">{principle.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-tide/10 p-4">
          <p className="text-sm text-text-secondary">
            We follow <strong className="text-abyss">WCAG 2.1 Level AA</strong> guidelines as our minimum standard.
          </p>
        </div>
      </Section>

      {/* Color Contrast */}
      <Section title="Color Contrast" id="contrast">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Text must have sufficient contrast against its background. Minimum ratios: 4.5:1 for normal text, 3:1 for large text (18px+).
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contrastExamples.map((example) => (
            <div key={example.label} className="rounded-xl bg-bg-card card-depth overflow-hidden">
              <div className={`${example.bg} p-6 flex items-center justify-center border-b border-border`}>
                <span className={`${example.text} font-semibold text-lg`}>Sample Text</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-abyss text-sm">{example.label}</p>
                  <p className="text-xs text-text-muted">{example.ratio}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  example.pass ? "bg-success/10 text-success" : "bg-error/10 text-error"
                }`}>
                  {example.pass ? "Pass" : "Fail"}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-success/10 p-5">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-sm text-abyss">Safe Combinations</span>
            </div>
            <ul className="space-y-1.5 text-xs text-text-secondary">
              <li>• Abyss text on Cloud/Breeze/Mist backgrounds</li>
              <li>• Cloud text on Tide/Abyss backgrounds</li>
              <li>• Lagoon text on Cloud/Breeze backgrounds</li>
              <li>• Tide text on Cloud background</li>
            </ul>
          </div>

          <div className="rounded-xl bg-error/10 p-5">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="font-semibold text-sm text-abyss">Avoid</span>
            </div>
            <ul className="space-y-1.5 text-xs text-text-secondary">
              <li>• Bubble text on any light background</li>
              <li>• Mist text on Cloud background</li>
              <li>• Sunshine text on Cloud (decorative only)</li>
              <li>• Low contrast color combinations</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Focus States */}
      <Section title="Focus States" id="focus">
        <p className="text-text-secondary mb-8 max-w-2xl">
          All interactive elements must have visible focus indicators for keyboard navigation.
        </p>

        <div className="space-y-4">
          {focusStates.map((state) => (
            <div key={state.name} className="rounded-xl bg-bg-card card-depth p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-abyss">{state.name}</h3>
                <code className="text-xs text-tide mt-1 block">{state.class}</code>
              </div>
              <div className="flex items-center gap-3">
                {state.name === "Buttons" && (
                  <button className="px-5 py-2.5 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide text-sm hover:brightness-110 active:border-b-0 active:mt-1 transition-all focus:ring-2 focus:ring-tide focus:ring-offset-2 outline-none">
                    Focus me
                  </button>
                )}
                {state.name === "Inputs" && (
                  <input
                    type="text"
                    placeholder="Focus me"
                    className="px-4 py-2 rounded-xl border border-border focus:border-tide focus:ring-1 focus:ring-tide outline-none"
                  />
                )}
                {state.name === "Links" && (
                  <a href="#focus" className="text-tide font-medium focus:outline-none focus:ring-2 focus:ring-tide focus:ring-offset-2 rounded">
                    Focus me
                  </a>
                )}
                {state.name === "Cards" && (
                  <div className="px-4 py-2 rounded-xl bg-bg-secondary focus-within:ring-2 focus-within:ring-tide">
                    <input type="text" placeholder="Focus inside" className="bg-transparent outline-none text-sm" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-warning/10 p-4">
          <p className="text-sm text-text-secondary">
            <strong className="text-abyss">Never</strong> use <code className="text-error">outline: none</code> without providing an alternative focus indicator.
          </p>
        </div>
      </Section>

      {/* Keyboard Navigation */}
      <Section title="Keyboard Navigation" id="keyboard">
        <p className="text-text-secondary mb-8 max-w-2xl">
          All functionality must be accessible via keyboard. Common patterns:
        </p>

        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-secondary">
                <th className="text-left p-4 font-semibold text-abyss">Key</th>
                <th className="text-left p-4 font-semibold text-abyss">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { key: "Tab", action: "Move focus to next focusable element" },
                { key: "Shift + Tab", action: "Move focus to previous focusable element" },
                { key: "Enter / Space", action: "Activate buttons, links, and controls" },
                { key: "Escape", action: "Close modals, dropdowns, and overlays" },
                { key: "Arrow Keys", action: "Navigate within menus, tabs, and lists" },
                { key: "Home / End", action: "Jump to first/last item in a list" },
              ].map((item) => (
                <tr key={item.key} className="border-b border-border last:border-0">
                  <td className="p-4">
                    <kbd className="px-2 py-1 rounded bg-bg-secondary text-abyss font-mono text-xs">
                      {item.key}
                    </kbd>
                  </td>
                  <td className="p-4 text-text-secondary">{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Screen Readers */}
      <Section title="Screen Reader Support" id="screen-readers">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <h3 className="font-display text-lg font-bold text-abyss mb-4">ARIA Labels</h3>
            <div className="space-y-4">
              <div className="rounded-xl bg-bg-secondary p-4">
                <code className="text-xs text-tide block mb-2">aria-label</code>
                <p className="text-sm text-text-secondary">Provide text label for elements without visible text</p>
                <pre className="mt-3 text-xs bg-abyss text-white p-3 rounded-lg overflow-x-auto">
{`<button aria-label="Close modal">
  <XIcon />
</button>`}
                </pre>
              </div>

              <div className="rounded-xl bg-bg-secondary p-4">
                <code className="text-xs text-tide block mb-2">aria-describedby</code>
                <p className="text-sm text-text-secondary">Link element to its description</p>
                <pre className="mt-3 text-xs bg-abyss text-white p-3 rounded-lg overflow-x-auto">
{`<input aria-describedby="email-hint" />
<p id="email-hint">We'll never share your email</p>`}
                </pre>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <h3 className="font-display text-lg font-bold text-abyss mb-4">Semantic HTML</h3>
            <ul className="space-y-3">
              {[
                { element: "<button>", use: "Clickable actions", not: "<div onClick>" },
                { element: "<a href>", use: "Navigation links", not: "<span onClick>" },
                { element: "<nav>", use: "Navigation regions", not: "<div class='nav'>" },
                { element: "<main>", use: "Main content area", not: "<div class='main'>" },
                { element: "<h1>-<h6>", use: "Section headings", not: "<p class='title'>" },
                { element: "<ul>, <ol>", use: "Lists of items", not: "<div> with bullets" },
              ].map((item) => (
                <li key={item.element} className="flex items-start gap-3 text-sm">
                  <code className="text-tide bg-tide/10 px-2 py-0.5 rounded shrink-0">{item.element}</code>
                  <span className="text-text-secondary">
                    {item.use} <span className="text-error">(not {item.not})</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Motion & Animation */}
      <Section title="Motion Sensitivity" id="motion">
        <div className="rounded-2xl bg-bg-card card-depth p-6">
          <p className="text-text-secondary mb-6">
            Some users are sensitive to motion. Always respect the <code className="text-tide">prefers-reduced-motion</code> media query.
          </p>

          <pre className="text-sm bg-abyss text-white p-4 rounded-xl overflow-x-auto">
{`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`}
          </pre>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-success/10 p-4">
              <span className="text-xs font-semibold text-success uppercase tracking-wider">Safe</span>
              <ul className="mt-2 space-y-1 text-sm text-text-secondary">
                <li>• Color transitions</li>
                <li>• Opacity fades</li>
                <li>• Small scale changes</li>
              </ul>
            </div>
            <div className="rounded-xl bg-error/10 p-4">
              <span className="text-xs font-semibold text-error uppercase tracking-wider">Disable for reduced-motion</span>
              <ul className="mt-2 space-y-1 text-sm text-text-secondary">
                <li>• Parallax effects</li>
                <li>• Auto-playing animations</li>
                <li>• Large sliding transitions</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Checklist */}
      <Section title="Accessibility Checklist" id="checklist">
        <div className="rounded-2xl bg-bg-card card-depth p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Color contrast meets WCAG AA (4.5:1)",
              "All images have alt text",
              "Form inputs have labels",
              "Focus states are visible",
              "Keyboard navigation works",
              "Headings are hierarchical (h1 → h2 → h3)",
              "Links are descriptive (not 'click here')",
              "Error messages are clear and helpful",
              "Touch targets are at least 44x44px",
              "Reduced motion is respected",
              "Page has a skip link",
              "Language is declared (<html lang='en'>)",
            ].map((item, idx) => (
              <label key={idx} className="flex items-start gap-3 text-sm text-text-secondary cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-0.5 w-4 h-4 rounded border-border text-tide focus:ring-tide"
                />
                <span className="group-hover:text-abyss transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
