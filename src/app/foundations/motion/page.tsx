"use client";

import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useState } from "react";

const easings = [
  { name: "ease-out", value: "cubic-bezier(0, 0, 0.2, 1)", use: "Enter animations" },
  { name: "ease-in", value: "cubic-bezier(0.4, 0, 1, 1)", use: "Exit animations" },
  { name: "ease-in-out", value: "cubic-bezier(0.4, 0, 0.2, 1)", use: "General transitions" },
  { name: "spring", value: "cubic-bezier(0.34, 1.56, 0.64, 1)", use: "Playful bounces" },
];

const durations = [
  { name: "instant", value: "0ms", use: "Color changes, opacity" },
  { name: "fast", value: "150ms", use: "Micro-interactions, hovers" },
  { name: "normal", value: "300ms", use: "Standard transitions" },
  { name: "slow", value: "500ms", use: "Complex animations" },
  { name: "slower", value: "700ms", use: "Page transitions" },
];

function AnimationDemo({
  name,
  className,
  trigger
}: {
  name: string;
  className: string;
  trigger: "hover" | "click";
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="rounded-xl bg-bg-card card-depth p-5">
      <div className="flex items-center justify-between mb-4">
        <code className="text-sm text-tide">{name}</code>
        {trigger === "click" && (
          <button
            onClick={() => setActive(!active)}
            className="text-xs text-text-muted hover:text-tide"
          >
            {active ? "Reset" : "Play"}
          </button>
        )}
      </div>
      <div className="h-24 bg-bg-secondary rounded-lg flex items-center justify-center">
        <div
          className={`w-12 h-12 rounded-xl bg-tide ${className} ${
            trigger === "click" && active ? "animate" : ""
          }`}
          onMouseEnter={trigger === "hover" ? () => setActive(true) : undefined}
          onMouseLeave={trigger === "hover" ? () => setActive(false) : undefined}
          style={trigger === "click" && active ? { animationPlayState: "running" } : {}}
        />
      </div>
    </div>
  );
}

export default function MotionPage() {
  const [showFadeIn, setShowFadeIn] = useState(false);
  const [showSlide, setShowSlide] = useState(false);
  const [showScale, setShowScale] = useState(false);

  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="Motion"
        description="Animation brings interfaces to life while guiding attention and providing feedback."
        color="bg-coral"
      />

      {/* Principles */}
      <Section title="Motion Principles" id="principles">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-12 h-12 rounded-xl bg-tide/10 text-tide flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss">Purposeful</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Every animation should serve a purpose — guide attention, provide feedback, or enhance understanding.
            </p>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-12 h-12 rounded-xl bg-sunshine/20 text-sunshine flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss">Delightful</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Subtle animations add personality and make interactions feel polished and responsive.
            </p>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-12 h-12 rounded-xl bg-success/20 text-success flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss">Restrained</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Don&apos;t overdo it. Too much motion is distracting and can cause accessibility issues.
            </p>
          </div>
        </div>
      </Section>

      {/* Timing */}
      <Section title="Duration" id="duration">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Choose duration based on the size and importance of the change. Larger changes need more time.
        </p>

        <div className="space-y-3">
          {durations.map((duration) => (
            <div key={duration.name} className="rounded-xl bg-bg-card card-depth p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <code className="text-tide font-semibold w-20">{duration.name}</code>
                <span className="text-text-muted w-16">{duration.value}</span>
                <span className="text-text-secondary text-sm hidden sm:block">{duration.use}</span>
              </div>
              <div className="w-32 h-2 bg-bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-tide rounded-full transition-all hover:w-full"
                  style={{
                    width: "20%",
                    transitionDuration: duration.value === "0ms" ? "150ms" : duration.value,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Easing */}
      <Section title="Easing" id="easing">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Easing curves define the acceleration of animations. Choose based on the animation type.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {easings.map((easing) => (
            <div key={easing.name} className="rounded-xl bg-bg-card card-depth p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <code className="text-tide font-semibold">{easing.name}</code>
                  <p className="text-xs text-text-muted mt-1">{easing.use}</p>
                </div>
                <code className="text-xs text-text-muted hidden sm:block">{easing.value}</code>
              </div>
              <div className="h-16 bg-bg-secondary rounded-lg flex items-center px-4">
                <div
                  className="w-8 h-8 rounded-lg bg-tide hover:translate-x-[calc(100%-2rem)] transition-transform duration-500"
                  style={{ transitionTimingFunction: easing.value }}
                />
              </div>
              <p className="text-xs text-text-muted mt-3 text-center">Hover to see easing</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Animation Types */}
      <Section title="Common Animations" id="animations">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Pre-defined animation classes for common use cases. These are defined in globals.css.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Fade In */}
          <div className="rounded-xl bg-bg-card card-depth p-5">
            <div className="flex items-center justify-between mb-4">
              <code className="text-sm text-tide">animate-fade-in</code>
              <button
                onClick={() => {
                  setShowFadeIn(false);
                  setTimeout(() => setShowFadeIn(true), 50);
                }}
                className="text-xs text-text-muted hover:text-tide"
              >
                Play
              </button>
            </div>
            <div className="h-24 bg-bg-secondary rounded-lg flex items-center justify-center">
              {showFadeIn && (
                <div className="w-12 h-12 rounded-xl bg-tide animate-fade-in" />
              )}
              {!showFadeIn && (
                <div className="w-12 h-12 rounded-xl bg-tide/20" />
              )}
            </div>
            <p className="text-xs text-text-muted mt-3">Fade from 0 to 100% opacity</p>
          </div>

          {/* Fade In Up */}
          <div className="rounded-xl bg-bg-card card-depth p-5">
            <div className="flex items-center justify-between mb-4">
              <code className="text-sm text-tide">animate-fade-in-up</code>
              <button
                onClick={() => {
                  setShowSlide(false);
                  setTimeout(() => setShowSlide(true), 50);
                }}
                className="text-xs text-text-muted hover:text-tide"
              >
                Play
              </button>
            </div>
            <div className="h-24 bg-bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
              {showSlide && (
                <div className="w-12 h-12 rounded-xl bg-tide animate-fade-in-up" />
              )}
              {!showSlide && (
                <div className="w-12 h-12 rounded-xl bg-tide/20" />
              )}
            </div>
            <p className="text-xs text-text-muted mt-3">Fade in while sliding up</p>
          </div>

          {/* Scale In */}
          <div className="rounded-xl bg-bg-card card-depth p-5">
            <div className="flex items-center justify-between mb-4">
              <code className="text-sm text-tide">animate-scale-in</code>
              <button
                onClick={() => {
                  setShowScale(false);
                  setTimeout(() => setShowScale(true), 50);
                }}
                className="text-xs text-text-muted hover:text-tide"
              >
                Play
              </button>
            </div>
            <div className="h-24 bg-bg-secondary rounded-lg flex items-center justify-center">
              {showScale && (
                <div className="w-12 h-12 rounded-xl bg-tide animate-scale-in" />
              )}
              {!showScale && (
                <div className="w-12 h-12 rounded-xl bg-tide/20" />
              )}
            </div>
            <p className="text-xs text-text-muted mt-3">Scale from 95% to 100%</p>
          </div>
        </div>

        {/* Stagger Delays */}
        <div className="mt-8 rounded-xl bg-bg-card card-depth p-6">
          <h3 className="font-semibold text-abyss mb-4">Stagger Delays</h3>
          <p className="text-sm text-text-secondary mb-6">
            Use delay classes to create staggered entrance animations for lists.
          </p>
          <div className="flex gap-3">
            {["delay-100", "delay-200", "delay-300", "delay-400"].map((delay, idx) => (
              <div
                key={delay}
                className={`w-12 h-12 rounded-xl bg-tide animate-fade-in-up ${delay}`}
                style={{ opacity: 0, animationFillMode: "forwards" }}
              />
            ))}
          </div>
          <div className="flex gap-3 mt-3">
            {["delay-100", "delay-200", "delay-300", "delay-400"].map((delay) => (
              <code key={delay} className="text-xs text-text-muted w-12 text-center">{delay}</code>
            ))}
          </div>
        </div>
      </Section>

      {/* Micro-interactions */}
      <Section title="Micro-interactions" id="micro">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Small, subtle animations that respond to user actions. They make interfaces feel alive.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Hover Scale */}
          <div className="rounded-xl bg-bg-card card-depth p-5">
            <code className="text-xs text-tide">hover:scale-105</code>
            <div className="h-24 bg-bg-secondary rounded-lg flex items-center justify-center mt-4">
              <div className="w-12 h-12 rounded-xl bg-tide transition-transform hover:scale-105 cursor-pointer" />
            </div>
            <p className="text-xs text-text-muted mt-3 text-center">Card/button hover</p>
          </div>

          {/* Hover Lift */}
          <div className="rounded-xl bg-bg-card card-depth p-5">
            <code className="text-xs text-tide">hover:-translate-y-1</code>
            <div className="h-24 bg-bg-secondary rounded-lg flex items-center justify-center mt-4">
              <div className="w-12 h-12 rounded-xl bg-tide transition-transform hover:-translate-y-1 cursor-pointer shadow-lg" />
            </div>
            <p className="text-xs text-text-muted mt-3 text-center">Lift on hover</p>
          </div>

          {/* Press */}
          <div className="rounded-xl bg-bg-card card-depth p-5">
            <code className="text-xs text-tide">active:scale-95</code>
            <div className="h-24 bg-bg-secondary rounded-lg flex items-center justify-center mt-4">
              <button className="w-12 h-12 rounded-xl bg-tide transition-transform active:scale-95" />
            </div>
            <p className="text-xs text-text-muted mt-3 text-center">Button press</p>
          </div>

          {/* Rotate */}
          <div className="rounded-xl bg-bg-card card-depth p-5">
            <code className="text-xs text-tide">hover:rotate-90</code>
            <div className="h-24 bg-bg-secondary rounded-lg flex items-center justify-center mt-4">
              <div className="w-12 h-12 rounded-xl bg-tide transition-transform hover:rotate-90 cursor-pointer flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-text-muted mt-3 text-center">Icon rotation</p>
          </div>
        </div>
      </Section>

      {/* Guidelines */}
      <Section title="Guidelines" id="guidelines">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-success/10 p-5">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-abyss">Do</span>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Use animation to provide feedback</li>
              <li>• Keep durations under 500ms for interactions</li>
              <li>• Respect prefers-reduced-motion</li>
              <li>• Stagger list animations for polish</li>
              <li>• Use easing curves (never linear)</li>
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
              <li>• Animate everything — it&apos;s distracting</li>
              <li>• Use long animations that block users</li>
              <li>• Auto-play looping animations</li>
              <li>• Animate layout shifts unexpectedly</li>
              <li>• Forget about motion sensitivity</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
