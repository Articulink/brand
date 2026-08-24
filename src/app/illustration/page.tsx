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

      {/* Stars */}
      <Section title="Star Sparkles" id="stars">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Stars add a touch of magic and joy. Use them sparingly as decorative accents.
        </p>

        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden">
          <div className="bg-tide p-12 flex items-center justify-center gap-8">
            <svg className="w-4 h-4 text-sunshine/40" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.6 6.4 16 8 9.6 9.6 8 16 6.4 9.6 0 8 6.4 6.4 8 0Z" />
            </svg>
            <svg className="w-6 h-6 text-sunshine/70" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.6 6.4 16 8 9.6 9.6 8 16 6.4 9.6 0 8 6.4 6.4 8 0Z" />
            </svg>
            <svg className="w-8 h-8 text-sunshine" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.6 6.4 16 8 9.6 9.6 8 16 6.4 9.6 0 8 6.4 6.4 8 0Z" />
            </svg>
            <svg className="w-6 h-6 text-sunshine/70" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.6 6.4 16 8 9.6 9.6 8 16 6.4 9.6 0 8 6.4 6.4 8 0Z" />
            </svg>
            <svg className="w-4 h-4 text-sunshine/40" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L9.6 6.4 16 8 9.6 9.6 8 16 6.4 9.6 0 8 6.4 6.4 8 0Z" />
            </svg>
          </div>
          <div className="p-4">
            <CodeBlock code={`<svg viewBox="0 0 16 16" className="w-6 h-6 text-sunshine" fill="currentColor">
  <path d="M8 0L9.6 6.4 16 8 9.6 9.6 8 16 6.4 9.6 0 8 6.4 6.4 8 0Z" />
</svg>`} />
          </div>
        </div>
      </Section>

      {/* Icon Style */}
      <Section title="Icon Style" id="icons">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Icons should be rounded, friendly, and consistent. Use 2px stroke width with rounded caps.
        </p>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {[
            <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M14 7a4 4 0 11-8 0 4 4 0 018 0zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            <svg key="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
            <svg key="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
          ].map((icon, idx) => (
            <div key={idx} className="aspect-square rounded-xl bg-bg-card card-depth p-4 flex items-center justify-center text-text-secondary hover:text-tide hover:border-tide/30 transition-colors">
              {icon}
            </div>
          ))}
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
              <li>• Keep stars subtle and decorative</li>
              <li>• Use consistent icon stroke width</li>
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
              <li>• Mix icon styles</li>
              <li>• Use illustrations as buttons</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
