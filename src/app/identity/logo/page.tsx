"use client";

import Image from "next/image";
import { Section } from "@/components/Section";
import { useState } from "react";

const variants = [
  { name: "Tide", bg: "bg-blue-breeze", logoColor: "text-tide", dotColor: "bg-tide", file: "logo.svg" },
  { name: "Abyss", bg: "bg-blue-breeze", logoColor: "text-abyss", dotColor: "bg-abyss", file: "logo-abyss.svg" },
  { name: "Cloud", bg: "bg-tide", logoColor: "text-white", dotColor: "bg-white border border-border", file: "logo-white.svg" },
];

export default function LogoPage() {
  const [activeVariant, setActiveVariant] = useState(0);
  const current = variants[activeVariant];

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="px-6 lg:px-12 py-8 lg:py-12 border-b border-border">
        <nav className="text-sm text-text-muted mb-3">
          <span>Identity</span>
          <span className="mx-2">/</span>
          <span className="text-abyss">Logo</span>
        </nav>
        <h1 className="font-display text-3xl lg:text-4xl font-extrabold text-abyss">
          Logo
        </h1>
        <p className="mt-2 text-base text-text-secondary max-w-xl">
          Our logo is the most recognizable element of our brand.
        </p>
      </header>

      {/* Logo Showcase */}
      <Section id="showcase">
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
          {/* Logo Display */}
          <div
            className={`flex-1 rounded-2xl p-8 sm:p-12 lg:p-16 transition-colors duration-300 relative ${current.bg}`}
          >
            {/* Download button */}
            <button className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg className={`w-5 h-5 ${activeVariant === 2 ? "text-white/70" : "text-abyss/40"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="flex items-center justify-center min-h-[120px] sm:min-h-[160px]">
              <span className={`font-wordmark text-5xl sm:text-6xl lg:text-7xl font-bold transition-colors duration-300 ${current.logoColor}`}>
                articulink
              </span>
            </div>

            {/* Toggle dots */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {variants.map((variant, idx) => (
                <button
                  key={variant.name}
                  onClick={() => setActiveVariant(idx)}
                  className={`w-4 h-4 rounded-full transition-all ${variant.dotColor} shadow-[0_0_0_2px_rgba(255,255,255,0.8),0_0_0_3px_rgba(0,0,0,0.1)] ${
                    idx === activeVariant
                      ? "scale-110"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`${variant.name} logo`}
                />
              ))}
            </div>
          </div>

          {/* Info Panel */}
          <div className="xl:w-72 flex-shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-abyss">
                Logotype
              </h3>
              <a
                href="#"
                className="text-blue-bubble hover:text-tide transition-colors"
                aria-label="Copy link"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Our typographic signature uses League Spartan Bold. The clean, geometric letterforms convey confidence and approachability.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              The logotype can be used in one of three colors: <span className="text-tide font-medium">Tide</span>, <span className="text-abyss font-medium">Abyss</span>, or <span className="font-medium">Cloud</span>.
            </p>
          </div>
        </div>
      </Section>

      {/* Logo Colors */}
      <Section title="Logo Colors" id="colors">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-bg-secondary">
            <div className="w-5 h-5 rounded-full bg-tide shrink-0" />
            <div>
              <p className="text-sm font-medium text-abyss">Tide</p>
              <p className="text-xs text-text-muted">#037DE4</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-bg-secondary">
            <div className="w-5 h-5 rounded-full bg-abyss shrink-0" />
            <div>
              <p className="text-sm font-medium text-abyss">Abyss</p>
              <p className="text-xs text-text-muted">#012A4D</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-bg-secondary">
            <div className="w-5 h-5 rounded-full bg-white border border-border shrink-0" />
            <div>
              <p className="text-sm font-medium text-abyss">Cloud</p>
              <p className="text-xs text-text-muted">#FFFFFF</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Clear Space */}
      <Section title="Clear Space" id="clear-space">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <p className="text-sm text-text-secondary leading-relaxed lg:w-64 flex-shrink-0">
            Maintain clear space equal to the x-height of the letters around the logo.
          </p>
          <div className="flex-1 bg-bg-secondary rounded-xl p-8 flex items-center justify-center">
            <div className="relative inline-block">
              <div className="absolute -inset-6 border-2 border-dashed border-tide/40 rounded-lg" />
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 -translate-y-full">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-px bg-tide/50" />
                  <span className="mt-1 text-[10px] text-tide">1x</span>
                </div>
              </div>
              <Image
                src="/images/logo.svg"
                alt="Logo with clear space"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Minimum Size */}
      <Section title="Minimum Size" id="minimum-size">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-bg-secondary p-5">
            <p className="text-xs font-medium text-text-muted mb-3">Digital</p>
            <div className="bg-white rounded-lg p-4">
              <Image
                src="/images/logo.svg"
                alt="Minimum digital size"
                width={120}
                height={30}
                className="h-5 w-auto"
              />
            </div>
            <p className="mt-3 text-xs text-text-secondary">120px minimum width</p>
          </div>

          <div className="rounded-xl bg-bg-secondary p-5">
            <p className="text-xs font-medium text-text-muted mb-3">Print</p>
            <div className="bg-white rounded-lg p-4">
              <Image
                src="/images/logo.svg"
                alt="Minimum print size"
                width={120}
                height={30}
                className="h-5 w-auto"
              />
            </div>
            <p className="mt-3 text-xs text-text-secondary">1 inch (25mm) minimum</p>
          </div>
        </div>
      </Section>

      {/* Don'ts */}
      <Section title="Don'ts" id="donts">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Stretch or distort */}
          <div className="rounded-xl bg-bg-secondary p-4 relative overflow-hidden">
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-error/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="h-20 flex items-center justify-center">
              <span className="font-wordmark text-3xl font-bold text-tide scale-x-150">articulink</span>
            </div>
            <p className="text-xs text-text-muted mt-2 text-center">Don&apos;t stretch or distort</p>
          </div>

          {/* Change colors */}
          <div className="rounded-xl bg-bg-secondary p-4 relative overflow-hidden">
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-error/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="h-20 flex items-center justify-center">
              <span className="font-wordmark text-3xl font-bold text-coral">articulink</span>
            </div>
            <p className="text-xs text-text-muted mt-2 text-center">Don&apos;t change colors</p>
          </div>

          {/* Add shadows */}
          <div className="rounded-xl bg-bg-secondary p-4 relative overflow-hidden">
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-error/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="h-20 flex items-center justify-center">
              <span className="font-wordmark text-3xl font-bold text-tide drop-shadow-[4px_6px_0px_rgba(0,0,0,0.4)]">articulink</span>
            </div>
            <p className="text-xs text-text-muted mt-2 text-center">Don&apos;t add shadows</p>
          </div>

          {/* Rotate */}
          <div className="rounded-xl bg-bg-secondary p-4 relative overflow-hidden">
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-error/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="h-20 flex items-center justify-center">
              <span className="font-wordmark text-3xl font-bold text-tide -rotate-12">articulink</span>
            </div>
            <p className="text-xs text-text-muted mt-2 text-center">Don&apos;t rotate or skew</p>
          </div>

          {/* Low contrast */}
          <div className="rounded-xl bg-bg-secondary p-4 relative overflow-hidden">
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-error/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="h-20 flex items-center justify-center">
              <div className="px-4 py-2 rounded-lg bg-surf">
                <span className="font-wordmark text-3xl font-bold text-tide">articulink</span>
              </div>
            </div>
            <p className="text-xs text-text-muted mt-2 text-center">Don&apos;t use low contrast</p>
          </div>

          {/* Busy background */}
          <div className="rounded-xl bg-bg-secondary p-4 relative overflow-hidden">
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-error/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="h-20 flex items-center justify-center">
              <div className="px-4 py-2 rounded-lg bg-gradient-to-br from-sunshine via-coral to-jellyfish">
                <span className="font-wordmark text-3xl font-bold text-tide">articulink</span>
              </div>
            </div>
            <p className="text-xs text-text-muted mt-2 text-center">Don&apos;t use busy backgrounds</p>
          </div>
        </div>
      </Section>

      {/* Downloads */}
      <Section title="Downloads" id="download">
        <div className="grid gap-3 sm:grid-cols-2">
          <button className="group rounded-xl bg-bg-secondary p-4 text-left transition-all hover:bg-blue-mist">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-abyss group-hover:text-tide transition-colors">
                  Color Logo
                </h3>
                <p className="text-xs text-text-muted mt-0.5">For light backgrounds</p>
              </div>
              <svg className="w-5 h-5 text-text-muted group-hover:text-tide transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mt-3 flex gap-1.5">
              <span className="px-2 py-0.5 rounded bg-white text-[10px] text-text-muted">SVG</span>
              <span className="px-2 py-0.5 rounded bg-white text-[10px] text-text-muted">PNG</span>
            </div>
          </button>

          <button className="group rounded-xl bg-bg-secondary p-4 text-left transition-all hover:bg-blue-mist">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-abyss group-hover:text-tide transition-colors">
                  White Logo
                </h3>
                <p className="text-xs text-text-muted mt-0.5">For dark backgrounds</p>
              </div>
              <svg className="w-5 h-5 text-text-muted group-hover:text-tide transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mt-3 flex gap-1.5">
              <span className="px-2 py-0.5 rounded bg-white text-[10px] text-text-muted">SVG</span>
              <span className="px-2 py-0.5 rounded bg-white text-[10px] text-text-muted">PNG</span>
            </div>
          </button>
        </div>
      </Section>
    </div>
  );
}
