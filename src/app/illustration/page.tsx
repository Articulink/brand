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

      {/* Bubbles */}
      <Section title="Bubbles" id="bubbles">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Bubbles are our signature decorative element — a nod to the Ocean Journey
          palette. Clusters of drifting bubbles add life and depth to sections. Use
          the ocean blues (Surf, Bubble, Seafoam) on light backgrounds and lighter
          tints on dark ones; bubbles sit behind or beside content, never over text.
        </p>

        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden">
          <div className="bg-tide p-12 flex items-center justify-center gap-10">
            <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-white/50">
              <circle cx="22" cy="42" r="13" stroke="currentColor" strokeWidth="2.5" />
              <path d="M14 39.5 a10.5 10.5 0 0 1 4.5 -7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
              <circle cx="45" cy="21" r="8" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />
              <circle cx="52" cy="46" r="4" fill="currentColor" opacity="0.4" />
            </svg>
            <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-white/80">
              <circle cx="22" cy="42" r="13" stroke="currentColor" strokeWidth="2.5" />
              <path d="M14 39.5 a10.5 10.5 0 0 1 4.5 -7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
              <circle cx="45" cy="21" r="8" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />
              <circle cx="52" cy="46" r="4" fill="currentColor" opacity="0.4" />
            </svg>
            <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10 text-white/50">
              <circle cx="22" cy="42" r="13" stroke="currentColor" strokeWidth="2.5" />
              <path d="M14 39.5 a10.5 10.5 0 0 1 4.5 -7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
              <circle cx="45" cy="21" r="8" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />
              <circle cx="52" cy="46" r="4" fill="currentColor" opacity="0.4" />
            </svg>
          </div>
          <div className="p-4">
            <p className="text-sm text-text-secondary mb-3">Bubble cluster (currentColor)</p>
            <CodeBlock code={`<svg viewBox="0 0 64 64" fill="none" className="w-12 h-12 text-surf/80">
  <circle cx="22" cy="42" r="13" stroke="currentColor" strokeWidth="2.5" />
  <path d="M14 39.5 a10.5 10.5 0 0 1 4.5 -7.5" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" opacity="0.55" />
  <circle cx="45" cy="21" r="8" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />
  <circle cx="52" cy="46" r="4" fill="currentColor" opacity="0.4" />
</svg>`} />
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
              <li>• Use bubbles in ocean blues (Surf, Bubble, Seafoam)</li>
              <li>• Let bubbles drift behind or beside content</li>
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
              <li>• Place bubbles over text or interactive elements</li>
              <li>• Use illustrations as buttons</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
