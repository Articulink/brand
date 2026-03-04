"use client";

import { Section } from "@/components/Section";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";

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
  { name: "Depths", hex: "#01355E", description: "is used for borders and card backgrounds in dark mode." },
  { name: "Abyss", hex: "#012A4D", description: "is used for primary typography and card backgrounds in dark mode." },
  { name: "Trench", hex: "#001C33", description: "is our darkest value, reserved for dark mode page backgrounds." },
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

function LightDarkComparison() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Light card: full border when in light mode, bottom-only when in dark mode
  const lightCardBorder = isLight
    ? { border: "2px solid #E4F2FE", borderBottomWidth: "5px" }
    : { border: "none", borderBottom: "5px solid #E4F2FE" };

  // Dark card: full border when in dark mode, bottom-only when in light mode
  const darkCardBorder = isLight
    ? { border: "none", borderBottom: "5px solid #013F74" }
    : { border: "2px solid #013F74", borderBottomWidth: "5px" };

  return (
    <div className="grid gap-6 lg:grid-cols-2 mb-8">
      {/* Light Mode Preview */}
      <div style={lightCardBorder} className="rounded-2xl overflow-hidden">
        <div style={{ backgroundColor: "#037DE4" }} className="px-4 py-2 flex items-center justify-between">
          <span style={{ color: "#FFFFFF" }} className="text-xs font-semibold uppercase tracking-wider">Light Mode (Preferred)</span>
          <span style={{ backgroundColor: "#FFFFFF", color: "#037DE4" }} className="px-2 py-0.5 rounded-full text-xs font-bold">Default</span>
        </div>
        <div style={{ backgroundColor: "#FFFFFF" }} className="p-6">
          <div style={{ backgroundColor: "#F7FBFF" }} className="rounded-xl p-4 mb-4">
            <h4 style={{ color: "#012A4D" }} className="font-display font-bold">Section Heading</h4>
            <p style={{ color: "#013F74" }} className="text-sm mt-1">Body text in Lagoon for comfortable reading.</p>
          </div>
          <div className="flex gap-3">
            <button style={{ backgroundColor: "#037DE4", borderColor: "#0369c1", color: "#FFFFFF" }} className="px-4 py-2 rounded-2xl border-b-4 text-sm font-bold">Primary</button>
            <button style={{ backgroundColor: "#FFFFFF", borderColor: "#E4F2FE", color: "#037DE4" }} className="px-4 py-2 rounded-2xl border-2 border-b-4 text-sm font-bold">Secondary</button>
          </div>
        </div>
      </div>

      {/* Dark Mode Preview */}
      <div style={darkCardBorder} className="rounded-2xl overflow-hidden">
        <div style={{ backgroundColor: "#01355E" }} className="px-4 py-2 flex items-center justify-between">
          <span style={{ color: "#FFFFFF" }} className="text-xs font-semibold uppercase tracking-wider">Dark Mode</span>
          <span style={{ backgroundColor: "#013F74", color: "#F7FBFF" }} className="px-2 py-0.5 rounded-full text-xs font-bold">Alternative</span>
        </div>
        <div style={{ backgroundColor: "#001C33" }} className="p-6">
          <div style={{ backgroundColor: "#012A4D", border: "1px solid #01355E" }} className="rounded-xl p-4 mb-4">
            <h4 style={{ color: "#FFFFFF" }} className="font-display font-bold">Section Heading</h4>
            <p style={{ color: "#F7FBFF" }} className="text-sm mt-1">Body text in Breeze for dark backgrounds.</p>
          </div>
          <div className="flex gap-3">
            <button style={{ backgroundColor: "#037DE4", borderColor: "#0369c1", color: "#FFFFFF" }} className="px-4 py-2 rounded-2xl border-b-4 text-sm font-bold">Primary</button>
            <button style={{ backgroundColor: "#012A4D", borderColor: "#01355E", color: "#FFFFFF" }} className="px-4 py-2 rounded-2xl border-2 border-b-4 text-sm font-bold">Secondary</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide text-sm hover:brightness-110 active:border-b-0 active:mt-1 transition-all shrink-0"
    >
      {theme === "light" ? (
        <>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          Try Dark Mode
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Try Light Mode
        </>
      )}
    </button>
  );
}

export default function ColorPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-muted mb-4">
          <Link href="/identity" className="hover:text-tide transition-colors">Identity</Link>
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
        intro="Our &quot;Ocean Journey&quot; palette — an 8-step scale from sky to midnight depths. Use for backgrounds, borders, and text hierarchy."
        colors={blueScale}
      />

      <ColorSection
        id="ui-colors"
        title="UI Feedback"
        intro="Semantic colors for communicating status and feedback. These are universal across all interfaces."
        colors={uiColors}
      />

      {/* Color Roles */}
      <Section title="Color Roles" id="roles">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-10 h-10 rounded-xl bg-tide mb-4" />
            <h3 className="font-display text-lg font-bold text-abyss mb-2">Primary Actions</h3>
            <p className="text-sm text-text-secondary">
              Use <span className="font-semibold text-tide">Tide</span> for buttons, links, active states, and interactive elements that need attention.
            </p>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-10 h-10 rounded-xl bg-abyss mb-4" />
            <h3 className="font-display text-lg font-bold text-abyss mb-2">Typography</h3>
            <p className="text-sm text-text-secondary">
              Use <span className="font-semibold text-abyss">Abyss</span> for headings and <span className="font-semibold text-blue-lagoon">Lagoon</span> for body text to ensure readability.
            </p>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white to-blue-breeze border border-border mb-4" />
            <h3 className="font-display text-lg font-bold text-abyss mb-2">Backgrounds</h3>
            <p className="text-sm text-text-secondary">
              Use <span className="font-semibold">Cloud</span> for primary backgrounds, <span className="font-semibold">Breeze</span> for sections, and <span className="font-semibold">Mist</span> for borders.
            </p>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-10 h-10 rounded-xl bg-sunshine mb-4" />
            <h3 className="font-display text-lg font-bold text-abyss mb-2">Accents</h3>
            <p className="text-sm text-text-secondary">
              Use <span className="font-semibold text-amber-500">Sunshine</span> sparingly for highlights, celebrations, and drawing attention to key moments.
            </p>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="flex gap-1 mb-4">
              <div className="w-10 h-10 rounded-xl bg-success" />
              <div className="w-10 h-10 rounded-xl bg-warning" />
              <div className="w-10 h-10 rounded-xl bg-error" />
            </div>
            <h3 className="font-display text-lg font-bold text-abyss mb-2">UI Feedback</h3>
            <p className="text-sm text-text-secondary">
              Use semantic colors consistently: <span className="text-success font-semibold">Success</span>, <span className="text-warning font-semibold">Warning</span>, <span className="text-error font-semibold">Error</span>, <span className="text-info font-semibold">Info</span>.
            </p>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="flex gap-1 mb-4">
              <div className="w-10 h-10 rounded-xl bg-coral" />
              <div className="w-10 h-10 rounded-xl bg-jellyfish" />
              <div className="w-10 h-10 rounded-xl bg-seafoam" />
            </div>
            <h3 className="font-display text-lg font-bold text-abyss mb-2">Illustrations</h3>
            <p className="text-sm text-text-secondary">
              Secondary colors bring life to illustrations, icons, and decorative elements. Use playfully but sparingly.
            </p>
          </div>
        </div>
      </Section>

      {/* Contrast & Accessibility */}
      <Section title="Contrast & Accessibility" id="contrast">
        <p className="text-text-secondary mb-8 max-w-2xl">
          All color combinations must meet WCAG 2.1 AA standards. Normal text requires 4.5:1 contrast ratio; large text (18px+) requires 3:1.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { bgColor: "#FFFFFF", textColor: "#012A4D", label: "Abyss on Cloud", ratio: "15.6:1", pass: true },
            { bgColor: "#FFFFFF", textColor: "#013F74", label: "Lagoon on Cloud", ratio: "9.2:1", pass: true },
            { bgColor: "#FFFFFF", textColor: "#037DE4", label: "Tide on Cloud", ratio: "4.5:1", pass: true },
            { bgColor: "#037DE4", textColor: "#FFFFFF", label: "Cloud on Tide", ratio: "4.5:1", pass: true },
            { bgColor: "#012A4D", textColor: "#FFFFFF", label: "Cloud on Abyss", ratio: "15.6:1", pass: true },
            { bgColor: "#FFFFFF", textColor: "#AFD9FD", label: "Bubble on Cloud", ratio: "2.1:1", pass: false },
          ].map((example) => (
            <div key={example.label} className="rounded-xl overflow-hidden card-depth">
              <div style={{ backgroundColor: example.bgColor, borderBottom: "1px solid #E4F2FE" }} className="p-6 flex items-center justify-center h-24">
                <span style={{ color: example.textColor }} className="font-semibold text-lg">Aa</span>
              </div>
              <div style={{ backgroundColor: "#FFFFFF" }} className="p-4 flex items-center justify-between">
                <div>
                  <p style={{ color: "#012A4D" }} className="text-sm font-medium">{example.label}</p>
                  <p style={{ color: "#AFD9FD" }} className="text-xs">{example.ratio} ratio</p>
                </div>
                {example.pass ? (
                  <span className="px-2 py-1 rounded-full bg-success/10 text-success text-xs font-medium">AA Pass</span>
                ) : (
                  <span className="px-2 py-1 rounded-full bg-error/10 text-error text-xs font-medium">Fail</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Dark Mode */}
      <Section title="Dark Mode" id="dark-mode">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <p className="text-text-secondary max-w-2xl">
            While light mode (Cloud background) is our preferred style, dark mode is available for user preference and reduced eye strain. The same Ocean Journey palette adapts beautifully.
          </p>
          <DarkModeToggle />
        </div>

        {/* Light vs Dark Comparison */}
        <LightDarkComparison />

        {/* Dark Mode Color Mappings */}
        <div className="rounded-2xl bg-bg-card card-depth overflow-hidden mb-8">
          <div className="bg-bg-secondary px-6 py-4 border-b border-border">
            <h3 className="font-display text-lg font-bold text-abyss">Color Mapping</h3>
            <p className="text-sm text-text-secondary mt-1">How Ocean Journey colors translate between modes</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-secondary/50">
                  <th className="text-left p-4 font-semibold text-abyss">Role</th>
                  <th className="text-left p-4 font-semibold text-abyss">Light Mode</th>
                  <th className="text-left p-4 font-semibold text-abyss">Dark Mode</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { role: "Primary Background", light: "Cloud (#FFFFFF)", lightHex: "#FFFFFF", dark: "Trench (#001C33)", darkHex: "#001C33" },
                  { role: "Secondary Background", light: "Breeze (#F7FBFF)", lightHex: "#F7FBFF", dark: "Abyss (#012A4D)", darkHex: "#012A4D" },
                  { role: "Card Background", light: "Cloud (#FFFFFF)", lightHex: "#FFFFFF", dark: "Abyss (#012A4D)", darkHex: "#012A4D" },
                  { role: "Border", light: "Mist (#E4F2FE)", lightHex: "#E4F2FE", dark: "Lagoon (#013F74)", darkHex: "#013F74" },
                  { role: "Primary Text", light: "Abyss (#012A4D)", lightHex: "#012A4D", dark: "Cloud (#FFFFFF)", darkHex: "#FFFFFF" },
                  { role: "Secondary Text", light: "Lagoon (#013F74)", lightHex: "#013F74", dark: "Breeze (#F7FBFF)", darkHex: "#F7FBFF" },
                  { role: "Muted Text", light: "Bubble (#AFD9FD)", lightHex: "#AFD9FD", dark: "Bubble (#AFD9FD)", darkHex: "#AFD9FD" },
                  { role: "Primary Action", light: "Tide (#037DE4)", lightHex: "#037DE4", dark: "Tide (#037DE4)", darkHex: "#037DE4" },
                  { role: "Accent", light: "Sunshine (#FCDE1E)", lightHex: "#FCDE1E", dark: "Sunshine (#FCDE1E)", darkHex: "#FCDE1E" },
                ].map((row) => (
                  <tr key={row.role} className="border-b border-border last:border-0">
                    <td className="p-4 font-medium text-abyss">{row.role}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div style={{ backgroundColor: row.lightHex, border: "1px solid #E4F2FE" }} className="w-5 h-5 rounded" />
                        <span className="text-text-secondary">{row.light}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div style={{ backgroundColor: row.darkHex, border: "1px solid #E4F2FE" }} className="w-5 h-5 rounded" />
                        <span className="text-text-secondary">{row.dark}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </Section>

      {/* Do's and Don'ts */}
      <Section title="Do&apos;s and Don&apos;ts" id="guidelines">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-success/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-abyss">Do</span>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Use <strong className="text-abyss">Tide</strong> for primary buttons and interactive elements</li>
              <li>• Use <strong className="text-abyss">Abyss</strong> for headings, <strong className="text-abyss">Lagoon</strong> for body text</li>
              <li>• Use <strong className="text-abyss">Cloud/Breeze</strong> for backgrounds (preferred style)</li>
              <li>• Use <strong className="text-abyss">Sunshine</strong> sparingly for accent highlights</li>
              <li>• Apply secondary colors in illustrations and decorative elements</li>
              <li>• Maintain 4.5:1 contrast ratio for all text</li>
              <li>• Use semantic UI colors consistently across all products</li>
              <li>• In dark mode, use <strong className="text-abyss">Cloud</strong> for headings, <strong className="text-abyss">Breeze</strong> for body text</li>
              <li>• Default to light mode — offer dark mode as user preference</li>
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
              <li>• Use Sunshine, Coral, or other bright colors for body text</li>
              <li>• Use Bubble or Mist for text on light backgrounds</li>
              <li>• Mix Ocean Journey colors with off-brand colors</li>
              <li>• Use low-contrast combinations (Surf on Tide, Lagoon on Abyss)</li>
              <li>• Overuse secondary colors — they should feel special</li>
              <li>• Use UI feedback colors for non-semantic purposes</li>
              <li>• Apply gradients that combine incompatible colors</li>
              <li>• Use Lagoon for text in dark mode (insufficient contrast)</li>
              <li>• Make dark mode the default — light mode is preferred</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
