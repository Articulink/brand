"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useState } from "react";

const spacingScale = [
  { name: "0", value: "0px", class: "w-0" },
  { name: "1", value: "4px", class: "w-1" },
  { name: "2", value: "8px", class: "w-2" },
  { name: "3", value: "12px", class: "w-3" },
  { name: "4", value: "16px", class: "w-4" },
  { name: "5", value: "20px", class: "w-5" },
  { name: "6", value: "24px", class: "w-6" },
  { name: "8", value: "32px", class: "w-8" },
  { name: "10", value: "40px", class: "w-10" },
  { name: "12", value: "48px", class: "w-12" },
  { name: "16", value: "64px", class: "w-16" },
  { name: "20", value: "80px", class: "w-20" },
  { name: "24", value: "96px", class: "w-24" },
];

const breakpoints = [
  { name: "sm", value: "640px", description: "Small tablets, large phones (landscape)" },
  { name: "md", value: "768px", description: "Tablets" },
  { name: "lg", value: "1024px", description: "Small laptops, tablets (landscape)" },
  { name: "xl", value: "1280px", description: "Desktops" },
  { name: "2xl", value: "1536px", description: "Large desktops" },
];

const borderRadii = [
  { name: "none", value: "0px", class: "rounded-none" },
  { name: "sm", value: "2px", class: "rounded-sm" },
  { name: "default", value: "4px", class: "rounded" },
  { name: "md", value: "6px", class: "rounded-md" },
  { name: "lg", value: "8px", class: "rounded-lg" },
  { name: "xl", value: "12px", class: "rounded-xl" },
  { name: "2xl", value: "16px", class: "rounded-2xl" },
  { name: "3xl", value: "24px", class: "rounded-3xl" },
  { name: "full", value: "9999px", class: "rounded-full" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="text-xs text-text-muted hover:text-tide transition-colors"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export default function SpacingPage() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="Spacing & Layout"
        description="Consistent spacing creates visual harmony and improves readability."
        color="bg-blue-lagoon"
      />

      {/* Spacing Scale */}
      <Section title="Spacing Scale" id="scale">
        <p className="text-text-secondary mb-8 max-w-2xl">
          We use a base-4 spacing scale. All spacing values are multiples of 4px for
          consistent vertical rhythm and alignment.
        </p>

        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-abyss">Token</th>
                  <th className="text-left p-4 font-semibold text-abyss">Value</th>
                  <th className="text-left p-4 font-semibold text-abyss">Class</th>
                  <th className="text-left p-4 font-semibold text-abyss">Preview</th>
                </tr>
              </thead>
              <tbody>
                {spacingScale.map((space) => (
                  <tr key={space.name} className="border-b border-border last:border-0">
                    <td className="p-4">
                      <code className="text-tide">{space.name}</code>
                    </td>
                    <td className="p-4 text-text-secondary">{space.value}</td>
                    <td className="p-4">
                      <code className="text-xs bg-bg-secondary px-2 py-1 rounded">
                        {space.class}
                      </code>
                    </td>
                    <td className="p-4">
                      <div className={`h-4 bg-tide rounded ${space.class}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Common Spacing */}
      <Section title="Common Patterns" id="patterns">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-bg-card card-depth p-6">
            <h3 className="font-display text-lg font-bold text-abyss mb-4">Component Spacing</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-text-secondary">Card padding</span>
                <code className="text-tide">p-6</code>
              </li>
              <li className="flex justify-between">
                <span className="text-text-secondary">Button padding</span>
                <code className="text-tide">px-6 py-3</code>
              </li>
              <li className="flex justify-between">
                <span className="text-text-secondary">Input padding</span>
                <code className="text-tide">px-4 py-3</code>
              </li>
              <li className="flex justify-between">
                <span className="text-text-secondary">Badge padding</span>
                <code className="text-tide">px-4 py-1.5</code>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-bg-card card-depth p-6">
            <h3 className="font-display text-lg font-bold text-abyss mb-4">Layout Spacing</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-text-secondary">Section gap</span>
                <code className="text-tide">py-12 lg:py-16</code>
              </li>
              <li className="flex justify-between">
                <span className="text-text-secondary">Grid gap</span>
                <code className="text-tide">gap-4 lg:gap-6</code>
              </li>
              <li className="flex justify-between">
                <span className="text-text-secondary">Stack gap</span>
                <code className="text-tide">space-y-4</code>
              </li>
              <li className="flex justify-between">
                <span className="text-text-secondary">Page padding</span>
                <code className="text-tide">px-6 lg:px-12</code>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Breakpoints */}
      <Section title="Breakpoints" id="breakpoints">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Mobile-first responsive breakpoints. Always design for mobile, then enhance for larger screens.
        </p>

        <div className="space-y-3">
          {breakpoints.map((bp, idx) => (
            <div key={bp.name} className="rounded-xl bg-bg-card card-depth p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-tide/10 flex items-center justify-center">
                  <code className="text-tide font-bold">{bp.name}</code>
                </div>
                <div>
                  <p className="font-semibold text-abyss">{bp.value}</p>
                  <p className="text-sm text-text-secondary">{bp.description}</p>
                </div>
              </div>
              <div
                className="hidden lg:block h-4 bg-tide/20 rounded"
                style={{ width: `${(idx + 1) * 60}px` }}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-tide/10 p-4">
          <p className="text-sm text-text-secondary">
            <strong className="text-abyss">Tip:</strong> Use{" "}
            <code className="text-tide">sm:</code>, <code className="text-tide">md:</code>,{" "}
            <code className="text-tide">lg:</code>, <code className="text-tide">xl:</code>{" "}
            prefixes to apply styles at specific breakpoints.
          </p>
        </div>
      </Section>

      {/* Border Radius */}
      <Section title="Border Radius" id="radius">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Rounded corners are central to Articulink&apos;s friendly aesthetic. Use larger radii for larger elements.
        </p>

        <div className="grid gap-4 grid-cols-3 lg:grid-cols-9">
          {borderRadii.map((radius) => (
            <div key={radius.name} className="text-center">
              <div
                className={`aspect-square bg-tide ${radius.class} mb-3`}
              />
              <p className="text-xs font-semibold text-abyss">{radius.name}</p>
              <p className="text-xs text-text-muted">{radius.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-success/10 p-5">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-sm text-abyss">Recommended</span>
            </div>
            <ul className="space-y-1.5 text-xs text-text-secondary">
              <li>• Cards: <code className="text-tide">rounded-2xl</code></li>
              <li>• Buttons: <code className="text-tide">rounded-full</code> or <code className="text-tide">rounded-xl</code></li>
              <li>• Inputs: <code className="text-tide">rounded-xl</code></li>
              <li>• Badges: <code className="text-tide">rounded-full</code></li>
              <li>• Icons/Avatars: <code className="text-tide">rounded-xl</code></li>
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
              <li>• Sharp corners (<code className="text-error">rounded-none</code>)</li>
              <li>• Mixing too many different radii</li>
              <li>• Inconsistent rounding within a component</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Grid */}
      <Section title="Grid System" id="grid">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Use CSS Grid for layouts. Common column configurations for different content types.
        </p>

        <div className="space-y-6">
          {/* 12 Column Grid */}
          <div className="rounded-xl bg-bg-card card-depth p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-abyss">12-Column Grid</h3>
              <CopyButton text="grid grid-cols-12 gap-4" />
            </div>
            <div className="grid grid-cols-12 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-12 rounded-lg bg-tide/20 flex items-center justify-center">
                  <span className="text-xs text-tide font-medium">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Layouts */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-bg-card card-depth p-5">
              <code className="text-xs text-tide">grid-cols-2</code>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="h-8 rounded bg-tide/20" />
                <div className="h-8 rounded bg-tide/20" />
              </div>
              <p className="text-xs text-text-muted mt-3">Two-column layouts</p>
            </div>

            <div className="rounded-xl bg-bg-card card-depth p-5">
              <code className="text-xs text-tide">grid-cols-3</code>
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="h-8 rounded bg-tide/20" />
                <div className="h-8 rounded bg-tide/20" />
                <div className="h-8 rounded bg-tide/20" />
              </div>
              <p className="text-xs text-text-muted mt-3">Card grids, features</p>
            </div>

            <div className="rounded-xl bg-bg-card card-depth p-5">
              <code className="text-xs text-tide">grid-cols-4</code>
              <div className="grid grid-cols-4 gap-2 mt-3">
                <div className="h-8 rounded bg-tide/20" />
                <div className="h-8 rounded bg-tide/20" />
                <div className="h-8 rounded bg-tide/20" />
                <div className="h-8 rounded bg-tide/20" />
              </div>
              <p className="text-xs text-text-muted mt-3">Icon grids, stats</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Container */}
      <Section title="Container Widths" id="container">
        <div className="space-y-4">
          {[
            { name: "max-w-sm", value: "384px", use: "Modals, dropdowns" },
            { name: "max-w-md", value: "448px", use: "Small dialogs" },
            { name: "max-w-lg", value: "512px", use: "Form containers" },
            { name: "max-w-xl", value: "576px", use: "Medium content" },
            { name: "max-w-2xl", value: "672px", use: "Text content, articles" },
            { name: "max-w-4xl", value: "896px", use: "Main content area" },
            { name: "max-w-6xl", value: "1152px", use: "Wide layouts" },
            { name: "max-w-7xl", value: "1280px", use: "Page container" },
          ].map((container) => (
            <div key={container.name} className="flex items-center gap-4">
              <code className="w-24 text-sm text-tide">{container.name}</code>
              <span className="w-16 text-sm text-text-muted">{container.value}</span>
              <div className="flex-1 h-3 bg-bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-tide rounded-full"
                  style={{ width: `${(parseInt(container.value) / 1280) * 100}%` }}
                />
              </div>
              <span className="text-sm text-text-secondary hidden sm:block">{container.use}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
