"use client";

import { Section } from "@/components/Section";
import { useState } from "react";

// Helper functions for color conversion
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

function rgbToCmyk(r: number, g: number, b: number): { c: number; m: number; y: number; k: number } {
  const rPrime = r / 255;
  const gPrime = g / 255;
  const bPrime = b / 255;
  const k = 1 - Math.max(rPrime, gPrime, bPrime);
  if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };
  const c = Math.round(((1 - rPrime - k) / (1 - k)) * 100);
  const m = Math.round(((1 - gPrime - k) / (1 - k)) * 100);
  const y = Math.round(((1 - bPrime - k) / (1 - k)) * 100);
  return { c, m, y, k: Math.round(k * 100) };
}

const primaryColors = [
  {
    name: "Tide",
    hex: "#037DE4",
    description: "is the core color of our brand. This is the hue that the world associates with Articulink. When in doubt, lean in to Tide!",
  },
  {
    name: "Surf",
    hex: "#1E96FC",
    description: "is our secondary blue, used for backgrounds and hover states where Tide elements appear.",
  },
  {
    name: "Abyss",
    hex: "#012A4D",
    description: "is used exclusively for typography.",
  },
  {
    name: "Cloud",
    hex: "#FFFFFF",
    description: "is our primary background color and used for text on dark backgrounds.",
  },
];

const blueScale = [
  { name: "Cloud", hex: "#FFFFFF", description: "is our brightest value, used for primary backgrounds and text on dark surfaces." },
  { name: "Breeze", hex: "#F7FBFF", description: "is a gentle off-white, perfect for secondary backgrounds and subtle contrast." },
  { name: "Mist", hex: "#E4F2FE", description: "is used for borders, dividers, and card outlines." },
  { name: "Bubble", hex: "#AFD9FD", description: "adds playful accents and is used for inactive UI elements." },
  { name: "Lagoon", hex: "#013F74", description: "provides depth for secondary text and subtle emphasis." },
  { name: "Abyss", hex: "#012A4D", description: "is our darkest value, reserved for primary typography." },
];

const secondaryColors = [
  { name: "Sunshine", hex: "#FCDE1E", description: "brings warmth and joy. Use sparingly for highlights and celebrations." },
  { name: "Coral", hex: "#FC1E96", description: "adds energy and playfulness to illustrations and accents." },
  { name: "Sunset", hex: "#FC6F1E", description: "creates warmth and is great for call-to-action highlights." },
  { name: "Jellyfish", hex: "#C11EFC", description: "adds a touch of magic for special moments and features." },
  { name: "Kelp", hex: "#96FC1E", description: "brings natural energy, used in illustrations and playful elements." },
  { name: "Seafoam", hex: "#1EFCC8", description: "evokes calm tropical waters, perfect for refreshing accents." },
];

const uiColors = [
  { name: "Info", hex: "#3B82F6", description: "communicates helpful information, tips, and neutral guidance." },
  { name: "Success", hex: "#22C55E", description: "confirms positive actions, completed states, and achievements." },
  { name: "Warning", hex: "#F59E0B", description: "alerts users to cautions, pending states, and important notices." },
  { name: "Error", hex: "#EF4444", description: "indicates errors, destructive actions, and critical alerts." },
];

// Compact card for mobile - just swatch, name, index, and hex
function CompactColorCard({ color, index }: { color: { name: string; hex: string }; index: number }) {
  const [copied, setCopied] = useState(false);

  const copyHex = () => {
    navigator.clipboard.writeText(color.hex.replace("#", ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl bg-white p-3 card-depth">
      {/* Color Swatch */}
      <div
        className="h-20 rounded-lg border border-border"
        style={{ backgroundColor: color.hex }}
      />

      {/* Name & Index */}
      <div className="flex items-center justify-between mt-3">
        <h3 className="font-display text-sm font-bold text-abyss">{color.name}</h3>
        <span className="text-text-muted text-sm">{index}</span>
      </div>

      {/* Hex with copy */}
      <div className="flex items-center justify-between mt-1">
        <span className="text-xs text-text-muted">{color.hex.replace("#", "").toUpperCase()}</span>
        <button
          onClick={copyHex}
          className="text-blue-bubble hover:text-tide transition-colors"
          title="Copy hex"
        >
          {copied ? (
            <svg className="w-3.5 h-3.5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

// Full card for desktop - includes all color values
function FullColorCard({ color, index }: { color: { name: string; hex: string; description?: string }; index: number }) {
  const [copied, setCopied] = useState(false);
  const rgb = hexToRgb(color.hex);
  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

  const copyHex = () => {
    navigator.clipboard.writeText(color.hex.replace("#", ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-[240px] rounded-2xl bg-white p-4 card-depth">
      {/* Color Swatch */}
      <div
        className="h-48 rounded-xl border border-border"
        style={{ backgroundColor: color.hex }}
      />

      {/* Name & Index */}
      <div className="flex items-center justify-between mt-4 mb-3">
        <h3 className="font-display text-base font-bold text-abyss">{color.name}</h3>
        <span className="text-text-muted font-medium">{index}</span>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-3" />

      {/* Color Values - Single column */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center">
          <span className="w-12 text-text-muted">Hex</span>
          <span className="text-abyss">{color.hex.replace("#", "").toUpperCase()}</span>
          <button
            onClick={copyHex}
            className="ml-2 text-blue-bubble hover:text-tide transition-colors"
            title="Copy hex"
          >
            {copied ? (
              <svg className="w-3 h-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
        <div className="flex">
          <span className="w-12 text-text-muted">RGB</span>
          <span className="text-abyss">{rgb.r} {rgb.g} {rgb.b}</span>
        </div>
        <div className="flex">
          <span className="w-12 text-text-muted">CMYK</span>
          <span className="text-abyss">{cmyk.c} {cmyk.m} {cmyk.y} {cmyk.k}</span>
        </div>
      </div>
    </div>
  );
}

// Color section with responsive layout
function ColorSection({
  id,
  title,
  intro,
  colors,
}: {
  id: string;
  title: string;
  intro: string;
  colors: { name: string; hex: string; description: string }[];
}) {
  return (
    <Section id={id}>
      {/* Mobile Layout: Title on top, cards, then descriptions */}
      <div className="xl:hidden">
        {/* Title */}
        <div className="flex items-center gap-2 mb-4">
          <h2 className="font-display text-xl font-bold text-abyss">{title}</h2>
          <a href={`#${id}`} className="text-blue-bubble hover:text-tide transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </a>
        </div>

        {/* Compact Cards Grid */}
        <div className="rounded-2xl bg-bg-secondary p-4 mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {colors.map((color, idx) => (
              <CompactColorCard key={color.hex} color={color} index={idx + 1} />
            ))}
          </div>
        </div>

        {/* Intro + Descriptions */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4">{intro}</p>
        <div className="space-y-3">
          {colors.map((color, idx) => (
            <p key={color.hex} className="text-sm text-text-secondary leading-relaxed">
              <span className="text-abyss">{idx + 1}. </span>
              <span className="font-semibold text-abyss">{color.name}</span> {color.description}
            </p>
          ))}
        </div>
      </div>

      {/* Desktop Layout: Side by side */}
      <div className="hidden xl:flex gap-6">
        {/* Color Cards - Left side */}
        <div className="flex-1 rounded-2xl bg-bg-secondary p-6 lg:p-8">
          <div className="flex flex-wrap gap-6 justify-center">
            {colors.map((color, idx) => (
              <FullColorCard key={color.hex} color={color} index={idx + 1} />
            ))}
          </div>
        </div>

        {/* Info Panel - Right side */}
        <div className="w-80 flex-shrink-0">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-display text-2xl font-bold text-abyss">{title}</h2>
            <a href={`#${id}`} className="text-blue-bubble hover:text-tide transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">{intro}</p>
          <div className="space-y-4">
            {colors.map((color, idx) => (
              <p key={color.hex} className="text-sm text-text-secondary leading-relaxed">
                <span className="text-abyss">{idx + 1}. </span>
                <span className="font-semibold text-abyss">{color.name}</span> {color.description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function ColorPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-muted mb-4">
          <span>Identity</span>
          <span className="mx-2">/</span>
          <span className="text-abyss">Color</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
          Color
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Our color palette is warm, joyful, and trustworthy. It helps us stand out while remaining approachable.
        </p>
      </header>

      <ColorSection
        id="primary"
        title="Core Brand Colors"
        intro="Our core colors form the foundation of Articulink's visual identity. Here's the common hierarchy in which they're used:"
        colors={primaryColors}
      />

      <ColorSection
        id="secondary"
        title="Secondary Colors"
        intro="Extended colors for accents, illustrations, and special moments. Use these sparingly to add personality and delight."
        colors={secondaryColors}
      />

      <ColorSection
        id="blue-scale"
        title="Blue Scale"
        intro="Our &quot;Ocean Journey&quot; palette — a 6-step scale from sky to sea. Use for backgrounds, borders, and text hierarchy."
        colors={blueScale}
      />

      <ColorSection
        id="ui-colors"
        title="UI Feedback"
        intro="Semantic colors for communicating status and feedback. These are universal across all interfaces."
        colors={uiColors}
      />

      {/* Usage */}
      <Section title="Usage Guidelines" id="usage">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-success/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-abyss">Do</span>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Use blue for primary actions</li>
              <li>• Use yellow sparingly as accent</li>
              <li>• Maintain contrast for accessibility</li>
              <li>• Use navy for text and headings</li>
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
              <li>• Use yellow for body text</li>
              <li>• Mix with off-brand colors</li>
              <li>• Use low-contrast combinations</li>
              <li>• Overuse the accent yellow</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
