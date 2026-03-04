"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { useState } from "react";

export default function NavigationPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-muted mb-4">
          <Link href="/components" className="hover:text-tide transition-colors">Components</Link>
          <span className="mx-2">/</span>
          <span className="text-abyss">Navigation</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
          Navigation
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Navigation components help users move through the application. Maintain consistency across all products.
        </p>
      </header>

      {/* Header/Navbar */}
      <Section title="Header" id="header">
        <p className="text-text-secondary mb-8 max-w-2xl">
          The primary header used on the marketing website. Blue background with white text.
        </p>
        <div className="rounded-2xl overflow-hidden card-depth">
          {/* Demo header */}
          <header className="bg-surf px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <span className="text-white font-display font-bold text-xl">Articulink</span>
                <nav className="hidden md:flex items-center gap-6">
                  <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">How It Works</a>
                  <a href="#" className="text-white hover:text-white text-sm font-medium transition-colors">Services</a>
                  <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
                  <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Learn</a>
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <button className="hidden md:block px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors">
                  Log In
                </button>
                <button className="px-5 py-2.5 rounded-2xl bg-sunshine border-b-4 border-[#d4a90e] text-abyss text-sm font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </header>
        </div>
        <div className="mt-4 bg-bg-secondary rounded-xl p-4">
          <code className="text-sm text-text-secondary">
            Header: bg-surf | Links: text-white/80 hover:text-white | Active: text-white | CTA: bg-sunshine text-abyss
          </code>
        </div>
      </Section>

      {/* Sidebar */}
      <Section title="Sidebar" id="sidebar">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Fixed sidebar navigation used in Portal and Admin dashboards.
        </p>
        <div className="rounded-2xl overflow-hidden card-depth flex">
          {/* Demo sidebar */}
          <aside className="w-64 bg-bg-card border-r border-border">
            <div className="p-4 border-b border-border">
              <span className="font-display font-bold text-lg text-abyss">Articulink</span>
            </div>
            <nav className="p-3 space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-tide text-white text-sm font-medium">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Dashboard
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-text-secondary hover:bg-bg-secondary hover:text-abyss text-sm font-medium transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Appointments
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-text-secondary hover:bg-bg-secondary hover:text-abyss text-sm font-medium transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Family
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-text-secondary hover:bg-bg-secondary hover:text-abyss text-sm font-medium transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Messages
              </a>
            </nav>
          </aside>
          {/* Content preview */}
          <div className="flex-1 bg-bg-secondary p-8">
            <div className="text-sm text-text-secondary">Main content area</div>
          </div>
        </div>
        <div className="mt-4 bg-bg-secondary rounded-xl p-4">
          <code className="text-sm text-text-secondary">
            Active: bg-tide text-white rounded-xl | Inactive: text-text-secondary hover:bg-bg-secondary
          </code>
        </div>
      </Section>

      {/* Tabs */}
      <Section title="Tab Navigation" id="tabs">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Horizontal tabs for switching between views or content sections.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          {/* Underline tabs */}
          <div className="mb-8">
            <p className="text-sm text-text-secondary mb-3">Underline Tabs</p>
            <div className="border-b border-border">
              <nav className="flex gap-6">
                <button
                  className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "overview"
                      ? "border-tide text-tide"
                      : "border-transparent text-text-secondary hover:text-abyss"
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
                <button
                  className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "appointments"
                      ? "border-tide text-tide"
                      : "border-transparent text-text-secondary hover:text-abyss"
                  }`}
                  onClick={() => setActiveTab("appointments")}
                >
                  Appointments
                </button>
                <button
                  className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "documents"
                      ? "border-tide text-tide"
                      : "border-transparent text-text-secondary hover:text-abyss"
                  }`}
                  onClick={() => setActiveTab("documents")}
                >
                  Documents
                </button>
              </nav>
            </div>
          </div>

          {/* Pill tabs */}
          <div className="mb-8">
            <p className="text-sm text-text-secondary mb-3">Pill Tabs</p>
            <div className="inline-flex rounded-xl bg-bg-secondary p-1">
              <button className="px-4 py-2 rounded-lg bg-tide text-white font-medium text-sm">
                Day
              </button>
              <button className="px-4 py-2 rounded-lg text-text-secondary font-medium text-sm hover:text-abyss transition-colors">
                Week
              </button>
              <button className="px-4 py-2 rounded-lg text-text-secondary font-medium text-sm hover:text-abyss transition-colors">
                Month
              </button>
            </div>
          </div>

          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              Underline: border-b-2 border-tide text-tide | Pill: bg-tide text-white rounded-lg
            </code>
          </div>
        </div>
      </Section>

      {/* Breadcrumbs */}
      <Section title="Breadcrumbs" id="breadcrumbs">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Breadcrumbs show the user&apos;s location in a hierarchical structure.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <a href="#" className="text-text-secondary hover:text-tide transition-colors">Home</a>
            <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <a href="#" className="text-text-secondary hover:text-tide transition-colors">Services</a>
            <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-abyss font-medium">Speech Therapy</span>
          </nav>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              Links: text-text-secondary hover:text-tide | Current: text-abyss font-medium
            </code>
          </div>
        </div>
      </Section>

      {/* Mobile Menu */}
      <Section title="Mobile Menu" id="mobile">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Hamburger menu with slide-out drawer for mobile navigation.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex gap-8">
            {/* Hamburger button */}
            <div>
              <p className="text-sm text-text-secondary mb-3">Menu Button</p>
              <button
                className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center hover:bg-tide hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Drawer preview */}
            <div className="flex-1">
              <p className="text-sm text-text-secondary mb-3">Drawer (Preview)</p>
              <div className="relative w-64 h-80 bg-bg-secondary rounded-xl overflow-hidden">
                <div className={`absolute inset-y-0 left-0 w-full bg-bg-card shadow-lg transform transition-transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <span className="font-display font-bold text-abyss">Menu</span>
                    <button
                      className="w-8 h-8 rounded-lg hover:bg-bg-secondary flex items-center justify-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <nav className="p-3 space-y-1">
                    <a href="#" className="block px-3 py-2.5 rounded-xl text-abyss font-medium">Dashboard</a>
                    <a href="#" className="block px-3 py-2.5 rounded-xl text-text-secondary">Appointments</a>
                    <a href="#" className="block px-3 py-2.5 rounded-xl text-text-secondary">Messages</a>
                    <a href="#" className="block px-3 py-2.5 rounded-xl text-text-secondary">Settings</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pagination */}
      <Section title="Pagination" id="pagination">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Pagination controls for navigating through multi-page content.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="flex items-center justify-center gap-1 mb-8">
            <button className="w-10 h-10 rounded-xl border border-border text-text-secondary hover:bg-bg-secondary transition-colors flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-xl bg-tide text-white font-medium">1</button>
            <button className="w-10 h-10 rounded-xl text-text-secondary hover:bg-bg-secondary transition-colors font-medium">2</button>
            <button className="w-10 h-10 rounded-xl text-text-secondary hover:bg-bg-secondary transition-colors font-medium">3</button>
            <span className="px-2 text-text-secondary">...</span>
            <button className="w-10 h-10 rounded-xl text-text-secondary hover:bg-bg-secondary transition-colors font-medium">12</button>
            <button className="w-10 h-10 rounded-xl border border-border text-text-secondary hover:bg-bg-secondary transition-colors flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              Active: bg-tide text-white | Inactive: text-text-secondary hover:bg-bg-secondary
            </code>
          </div>
        </div>
      </Section>

      {/* Usage Guidelines */}
      <Section title="Usage Guidelines" id="guidelines">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-success/10 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-abyss">Do</span>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Keep navigation consistent across pages</li>
              <li>Clearly indicate the active/current item</li>
              <li>Use recognizable icons with text labels</li>
              <li>Ensure mobile navigation is accessible</li>
              <li>Limit primary nav items to 5-7</li>
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
              <li>Hide important nav items in dropdowns</li>
              <li>Use inconsistent patterns across products</li>
              <li>Forget focus states for keyboard users</li>
              <li>Create deeply nested navigation</li>
              <li>Change nav position on scroll unexpectedly</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
