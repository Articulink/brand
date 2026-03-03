"use client";

import { Section } from "@/components/Section";
import { useState } from "react";

const typeScale = [
  { name: "Display", size: "60px", class: "text-6xl font-display font-extrabold" },
  { name: "Heading 1", size: "36px", class: "text-4xl font-display font-bold" },
  { name: "Heading 2", size: "24px", class: "text-2xl font-display font-bold" },
  { name: "Heading 3", size: "20px", class: "text-xl font-semibold" },
  { name: "Body", size: "16px", class: "text-base" },
  { name: "Small", size: "14px", class: "text-sm" },
  { name: "Caption", size: "12px", class: "text-xs" },
];

const fontWeights = [
  { name: "Regular", weight: "400", class: "font-normal" },
  { name: "Medium", weight: "500", class: "font-medium" },
  { name: "Semi Bold", weight: "600", class: "font-semibold" },
  { name: "Bold", weight: "700", class: "font-bold" },
  { name: "Extra Bold", weight: "800", class: "font-extrabold" },
];

const specimen = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "-«+»!?.*\\/()£€$¥¢+-±×÷=≠≈<>≤",
  accents: "ćðđłĵğƒþŧřßŋąŀēıőķůỳ",
};

function FontShowcase({
  fontClass,
  fontName,
  fontLink,
  description,
  codeTags,
  darkMode,
  setDarkMode,
}: {
  fontClass: string;
  fontName: string;
  fontLink: string;
  description: string;
  codeTags: string[];
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) {
  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
      {/* Specimen Card */}
      <div
        className={`flex-1 rounded-2xl p-5 sm:p-6 lg:p-8 transition-colors duration-300 overflow-hidden ${
          darkMode ? "bg-tide" : "bg-bg-secondary"
        }`}
      >
        <div className={`${fontClass} space-y-1 sm:space-y-2 transition-colors duration-300 ${
          darkMode ? "text-white" : "text-tide"
        }`}>
          <p className="text-base sm:text-xl lg:text-2xl font-bold tracking-[0.08em] sm:tracking-[0.12em] break-all">
            {specimen.uppercase}
          </p>
          <p className="text-base sm:text-xl lg:text-2xl font-bold tracking-[0.08em] sm:tracking-[0.12em] break-all">
            {specimen.lowercase}
          </p>
          <p className="text-base sm:text-xl lg:text-2xl font-bold tracking-[0.08em] sm:tracking-[0.12em]">
            {specimen.numbers}
          </p>
          <p className="text-base sm:text-xl lg:text-2xl font-bold tracking-[0.08em] sm:tracking-[0.12em] break-all">
            {specimen.symbols}
          </p>
          <p className="text-base sm:text-xl lg:text-2xl font-bold tracking-[0.08em] sm:tracking-[0.12em] break-all">
            {specimen.accents}
          </p>
        </div>

        {/* Toggle dots */}
        <div className="flex items-center justify-center gap-3 mt-5 sm:mt-6">
          <button
            onClick={() => setDarkMode(false)}
            className={`w-4 h-4 rounded-full transition-all bg-tide shadow-[0_0_0_2px_rgba(255,255,255,0.8),0_0_0_3px_rgba(0,0,0,0.1)] ${
              !darkMode ? "scale-110" : "opacity-70 hover:opacity-100"
            }`}
            aria-label="Light mode"
          />
          <button
            onClick={() => setDarkMode(true)}
            className={`w-4 h-4 rounded-full transition-all bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.8),0_0_0_3px_rgba(0,0,0,0.1)] ${
              darkMode ? "scale-110" : "opacity-70 hover:opacity-100"
            }`}
            aria-label="Dark mode"
          />
        </div>
      </div>

      {/* Info Panel */}
      <div className="xl:w-72 flex-shrink-0">
        <div className="flex items-center gap-2 mb-3">
          <h3 className={`${fontClass} text-xl sm:text-2xl font-bold text-abyss`}>
            {fontName}
          </h3>
          <a
            href={fontLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-bubble hover:text-tide transition-colors"
            aria-label="View on Google Fonts"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </a>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {codeTags.map((tag) => (
            <code key={tag} className="px-2 py-1 rounded-lg bg-bg-secondary text-xs text-text-muted">
              {tag}
            </code>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TypographyPage() {
  const [leagueDarkMode, setLeagueDarkMode] = useState(false);
  const [poppinsDarkMode, setPoppinsDarkMode] = useState(false);

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="px-6 lg:px-12 py-8 lg:py-12 border-b border-border">
        <nav className="text-sm text-text-muted mb-3">
          <span>Identity</span>
          <span className="mx-2">/</span>
          <span className="text-abyss">Typography</span>
        </nav>
        <h1 className="font-display text-3xl lg:text-4xl font-extrabold text-abyss">
          Typography
        </h1>
        <p className="mt-2 text-base text-text-secondary max-w-xl">
          Our typefaces are friendly, clear, and professional.
        </p>
      </header>

      {/* League Spartan */}
      <Section id="league-spartan">
        <FontShowcase
          fontClass="font-display"
          fontName="League Spartan"
          fontLink="https://fonts.google.com/specimen/League+Spartan"
          description="Our headline typeface. Use only for headlines and titles. Bold, geometric letterforms that convey confidence and clarity."
          codeTags={["font-display"]}
          darkMode={leagueDarkMode}
          setDarkMode={setLeagueDarkMode}
        />
      </Section>

      {/* Poppins */}
      <Section id="poppins">
        <FontShowcase
          fontClass="font-sans"
          fontName="Poppins"
          fontLink="https://fonts.google.com/specimen/Poppins"
          description="Our primary typeface for everything except headlines. Body text, UI elements, buttons, labels, and navigation. Geometric with excellent legibility at all sizes."
          codeTags={["font-sans"]}
          darkMode={poppinsDarkMode}
          setDarkMode={setPoppinsDarkMode}
        />
      </Section>

      {/* Font Weights */}
      <Section title="Font Weights" id="weights">
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-5">
          {fontWeights.map((weight) => (
            <div
              key={weight.name}
              className="rounded-xl bg-bg-card card-depth p-4"
            >
              <span className="text-xs text-text-muted">{weight.weight}</span>
              <p className={`font-display text-xl sm:text-2xl text-abyss mt-1 ${weight.class}`}>
                Aa
              </p>
              <p className="text-xs text-text-muted mt-2">{weight.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Type Scale */}
      <Section title="Type Scale" id="scale">
        <div className="space-y-2">
          {typeScale.map((level) => (
            <div
              key={level.name}
              className="rounded-lg bg-bg-card card-depth px-4 py-3 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="text-xs text-text-muted w-12 flex-shrink-0">{level.size}</span>
                <span className={`${level.class} text-abyss truncate`}>{level.name}</span>
              </div>
              <code className="text-[10px] text-text-muted hidden sm:block flex-shrink-0">{level.class}</code>
            </div>
          ))}
        </div>
      </Section>

      {/* Hierarchy */}
      <Section title="Hierarchy" id="hierarchy">
        <div className="rounded-xl bg-bg-card card-depth p-5 lg:p-8">
          <span className="text-xs font-semibold text-tide uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-abyss mt-1">
            Speech Therapy for Every Child
          </h2>
          <p className="text-text-secondary mt-4 leading-relaxed">
            We provide personalized speech therapy services designed to help your child
            communicate with confidence.
          </p>
        </div>
      </Section>

      {/* Font Usage */}
      <Section title="Font Usage" id="usage">
        <div className="space-y-4">
          {/* League Spartan Usage */}
          <div className="rounded-xl bg-bg-card card-depth p-5 lg:p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-tide flex items-center justify-center flex-shrink-0">
                <span className="font-display text-xl font-bold text-white">Aa</span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-abyss mb-2">League Spartan</h3>
                <p className="text-sm text-text-secondary mb-3">
                  Use <strong>only</strong> for headlines. Its bold geometric forms create impact and establish visual hierarchy. Never use for body text or UI elements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-lg bg-tide/10 text-xs text-tide font-medium">Page titles</span>
                  <span className="px-2 py-1 rounded-lg bg-tide/10 text-xs text-tide font-medium">Section headings</span>
                  <span className="px-2 py-1 rounded-lg bg-tide/10 text-xs text-tide font-medium">Card titles</span>
                  <span className="px-2 py-1 rounded-lg bg-tide/10 text-xs text-tide font-medium">Hero text</span>
                </div>
              </div>
            </div>
          </div>

          {/* Poppins Usage */}
          <div className="rounded-xl bg-bg-card card-depth p-5 lg:p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-lagoon flex items-center justify-center flex-shrink-0">
                <span className="font-sans text-xl font-medium text-white">Aa</span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-abyss mb-2">Poppins</h3>
                <p className="text-sm text-text-secondary mb-3">
                  Use for <strong>everything else</strong>. Body text, UI elements, buttons, labels, navigation, and any text that isn&apos;t a headline. Its geometric design pairs perfectly with League Spartan.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-lg bg-blue-lagoon/10 text-xs text-blue-lagoon font-medium">Body text</span>
                  <span className="px-2 py-1 rounded-lg bg-blue-lagoon/10 text-xs text-blue-lagoon font-medium">Buttons</span>
                  <span className="px-2 py-1 rounded-lg bg-blue-lagoon/10 text-xs text-blue-lagoon font-medium">Form labels</span>
                  <span className="px-2 py-1 rounded-lg bg-blue-lagoon/10 text-xs text-blue-lagoon font-medium">Navigation</span>
                  <span className="px-2 py-1 rounded-lg bg-blue-lagoon/10 text-xs text-blue-lagoon font-medium">Captions</span>
                  <span className="px-2 py-1 rounded-lg bg-blue-lagoon/10 text-xs text-blue-lagoon font-medium">Logo wordmark</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Line Height */}
      <Section title="Line Height" id="line-height">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-bg-card card-depth p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-tide uppercase tracking-wider">Tight</span>
              <code className="text-xs text-text-muted">1.1 – 1.2</code>
            </div>
            <p className="font-display text-xl font-bold text-abyss leading-tight">
              Headlines and display text use tight leading.
            </p>
            <p className="text-xs text-text-muted mt-3">Use for headlines, hero text, and large display typography.</p>
          </div>

          <div className="rounded-xl bg-bg-card card-depth p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-tide uppercase tracking-wider">Normal</span>
              <code className="text-xs text-text-muted">1.5 – 1.6</code>
            </div>
            <p className="text-base text-abyss leading-normal">
              Body text uses normal line height for comfortable reading at standard sizes.
            </p>
            <p className="text-xs text-text-muted mt-3">Use for paragraphs, descriptions, and UI text.</p>
          </div>

          <div className="rounded-xl bg-bg-card card-depth p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-tide uppercase tracking-wider">Relaxed</span>
              <code className="text-xs text-text-muted">1.7 – 1.8</code>
            </div>
            <p className="text-sm text-abyss leading-relaxed">
              Small text and captions benefit from extra breathing room to maintain readability.
            </p>
            <p className="text-xs text-text-muted mt-3">Use for small text, captions, and dense content.</p>
          </div>
        </div>
      </Section>

      {/* Letter Spacing */}
      <Section title="Letter Spacing" id="letter-spacing">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-bg-card card-depth p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-tide uppercase tracking-wider">Headlines</span>
              <code className="text-xs text-text-muted">-0.02em to 0</code>
            </div>
            <p className="font-display text-2xl font-bold text-abyss tracking-tight">
              Tight tracking for impact
            </p>
            <p className="text-xs text-text-muted mt-3">Large headlines can use slightly tighter tracking for a more cohesive appearance.</p>
          </div>

          <div className="rounded-xl bg-bg-card card-depth p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-tide uppercase tracking-wider">Body Text</span>
              <code className="text-xs text-text-muted">0 (default)</code>
            </div>
            <p className="text-base text-abyss">
              Standard tracking for readability
            </p>
            <p className="text-xs text-text-muted mt-3">Body text should use default letter spacing for optimal legibility.</p>
          </div>

          <div className="rounded-xl bg-bg-card card-depth p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-tide uppercase tracking-wider">Small Caps / Labels</span>
              <code className="text-xs text-text-muted">0.05em to 0.1em</code>
            </div>
            <p className="text-xs font-semibold text-abyss uppercase tracking-widest">
              Wider tracking for labels
            </p>
            <p className="text-xs text-text-muted mt-3">Uppercase text and small labels benefit from increased letter spacing.</p>
          </div>

          <div className="rounded-xl bg-bg-card card-depth p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-tide uppercase tracking-wider">Buttons</span>
              <code className="text-xs text-text-muted">0.02em to 0.04em</code>
            </div>
            <p className="text-sm font-semibold text-abyss tracking-wide">
              Slightly wider for buttons
            </p>
            <p className="text-xs text-text-muted mt-3">Button text can use subtle tracking to improve tap target clarity.</p>
          </div>
        </div>
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility" id="accessibility">
        <div className="rounded-xl bg-bg-card card-depth p-5 lg:p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-bold text-abyss mb-3">Minimum Sizes</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-abyss">Body text:</strong> 16px minimum for comfortable reading</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-abyss">Secondary text:</strong> 14px minimum for labels and captions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-abyss">Small text:</strong> 12px only for non-essential info</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-abyss mb-3">Color Contrast</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-abyss">Normal text:</strong> 4.5:1 contrast ratio minimum</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-abyss">Large text (18px+):</strong> 3:1 contrast ratio minimum</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-abyss">Abyss on Cloud:</strong> 15.6:1 ratio (excellent)</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-display text-lg font-bold text-abyss mb-3">Best Practices</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start gap-2 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-tide mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Avoid justified text alignment</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-tide mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Limit line length to 65-75 characters</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-tide mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Support text resizing up to 200%</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-tide mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Never rely on color alone for meaning</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-tide mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Use semantic HTML headings (h1-h6)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-tide mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Avoid all-caps for long text</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Guidelines */}
      <Section title="Do&apos;s and Don&apos;ts" id="guidelines">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-success/10 p-5">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-abyss">Do</span>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Use League Spartan <strong>only</strong> for headlines</li>
              <li>• Use Poppins for everything else</li>
              <li>• Maintain clear visual hierarchy with size and weight</li>
              <li>• Keep body text at 16px or larger</li>
              <li>• Use bold weights sparingly for emphasis</li>
              <li>• Pair bold headings with regular body text</li>
              <li>• Allow sufficient line height for readability</li>
            </ul>
          </div>

          <div className="rounded-xl bg-error/10 p-5">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="font-semibold text-abyss">Don&apos;t</span>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Use League Spartan for anything other than headlines</li>
              <li>• Mix more than 2-3 font weights on a page</li>
              <li>• Set text smaller than 12px</li>
              <li>• Use light weights (300 or below)</li>
              <li>• Stretch, skew, or artificially style fonts</li>
              <li>• Use long passages of uppercase text</li>
              <li>• Ignore contrast requirements</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
