"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useState } from "react";

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={copy}
        className="absolute top-3 right-3 text-xs text-text-muted hover:text-tide transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="text-sm text-text-secondary overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function IllustrationPage() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="Illustration"
        description="Create artwork that feels right at home in the expanding Articulink universe."
      />

      {/* Shapes */}
      <Section title="Shapes" id="shapes">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Flat geometric shapes are our signature decorative element: circle,
          triangle, half-moon, and square, all with rounded corners. Each shape is a
          single solid color from the palette — no gradients, blurs, or outlines.
          Cluster them at the edges of a section, tilt them, and let them bleed
          off-canvas; they sit beside or behind content, never over text.
        </p>

        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden">
          <div className="bg-bg-secondary p-12 flex items-center justify-center gap-10">
            <svg viewBox="0 0 100 100" className="w-14 h-14 text-sunshine">
              <circle cx="50" cy="50" r="42" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 100 100" className="w-14 h-14 text-kelp rotate-12">
              <path d="M50 15.65 L86 78 L14 78 Z" fill="currentColor" stroke="currentColor" strokeWidth="14" strokeLinejoin="round" />
            </svg>
            <svg viewBox="0 0 100 100" className="w-14 h-14 text-coral -rotate-45">
              <path d="M10 64 A 40 40 0 0 1 90 64 Z" fill="currentColor" stroke="currentColor" strokeWidth="10" strokeLinejoin="round" />
            </svg>
            <svg viewBox="0 0 100 100" className="w-12 h-12 text-surf rotate-6">
              <rect x="18" y="18" width="64" height="64" rx="14" fill="currentColor" />
            </svg>
          </div>
          <div className="p-4">
            <p className="text-sm text-text-secondary mb-3">The four variants: circle, triangle, half-moon, square (currentColor, viewBox &quot;0 0 100 100&quot;)</p>
            <CodeBlock code={`<circle cx="50" cy="50" r="42" fill="currentColor" />

{/* Triangle and half-moon — corners rounded by the stroke join */}
<path d="M50 15.65 L86 78 L14 78 Z" fill="currentColor" stroke="currentColor" strokeWidth="14" strokeLinejoin="round" />
<path d="M10 64 A 40 40 0 0 1 90 64 Z" fill="currentColor" stroke="currentColor" strokeWidth="10" strokeLinejoin="round" />

<rect x="18" y="18" width="64" height="64" rx="14" fill="currentColor" />`} />
          </div>
        </div>
      </Section>

      {/* Guidelines */}
      <Section title="Guidelines" id="guidelines">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-success/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-abyss">Do</span>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Keep each shape a single, flat color</li>
              <li>• Let shapes bleed off the canvas edges</li>
              <li>• Follow the exact SVG paths provided</li>
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
              <li>• Overuse decorative elements</li>
              <li>• Place shapes over text or interactive elements</li>
              <li>• Add gradients, blurs, or outlines to shapes</li>
              <li>• Use illustrations as buttons</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
