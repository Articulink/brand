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
          Flat, hard-edged shapes are our signature decorative element. Each shape is
          a single solid color from the palette — no gradients, blurs, or outlines.
          Cluster them at the edges of a section and let them bleed off-canvas; they
          sit beside or behind content, never over text.
        </p>

        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden">
          <div className="bg-bg-secondary p-12 flex items-center justify-center gap-10">
            <svg viewBox="-100 -100 200 200" className="w-16 h-16 text-sunshine">
              <path d="M44.1,-58.3C56.4,-49.5,64.8,-35.2,68.6,-19.9C72.4,-4.6,71.5,11.7,64.7,25.2C57.9,38.6,45.1,49.2,31.1,55.9C17.1,62.7,1.9,65.6,-13.2,63.3C-28.2,61,-43.1,53.5,-53.3,41.6C-63.5,29.7,-69,13.5,-68.3,-2.3C-67.6,-18,-60.7,-33.2,-49.8,-42.2C-38.9,-51.1,-24,-53.7,-9.4,-56.2C5.2,-58.6,20.5,-60.9,44.1,-58.3Z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 100 100" className="w-14 h-14 text-kelp rotate-12">
              <path d="M50 16 L86 78 L14 78 Z" fill="currentColor" stroke="currentColor" strokeWidth="14" strokeLinejoin="round" />
            </svg>
            <svg viewBox="0 0 100 100" className="w-14 h-14 text-coral -rotate-45">
              <path d="M10 64 A 40 40 0 0 1 90 64 Z" fill="currentColor" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
            </svg>
            <svg viewBox="0 0 100 100" className="w-12 h-12 text-surf rotate-6">
              <path d="M20 16 L84 22 L78 84 L16 76 Z" fill="currentColor" stroke="currentColor" strokeWidth="12" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="p-4">
            <p className="text-sm text-text-secondary mb-3">The four variants: blob, triangle, half-moon, wonky square (currentColor)</p>
            <CodeBlock code={`{/* Blob — viewBox "-100 -100 200 200" */}
<path d="M44.1,-58.3C56.4,-49.5,64.8,-35.2,68.6,-19.9C72.4,-4.6,71.5,11.7,64.7,25.2C57.9,38.6,45.1,49.2,31.1,55.9C17.1,62.7,1.9,65.6,-13.2,63.3C-28.2,61,-43.1,53.5,-53.3,41.6C-63.5,29.7,-69,13.5,-68.3,-2.3C-67.6,-18,-60.7,-33.2,-49.8,-42.2C-38.9,-51.1,-24,-53.7,-9.4,-56.2C5.2,-58.6,20.5,-60.9,44.1,-58.3Z" fill="currentColor" />

{/* Triangle / half-moon / square — viewBox "0 0 100 100"; corners rounded by the stroke join */}
<path d="M50 16 L86 78 L14 78 Z" fill="currentColor" stroke="currentColor" strokeWidth="14" strokeLinejoin="round" />
<path d="M10 64 A 40 40 0 0 1 90 64 Z" fill="currentColor" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
<path d="M20 16 L84 22 L78 84 L16 76 Z" fill="currentColor" stroke="currentColor" strokeWidth="12" strokeLinejoin="round" />`} />
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
