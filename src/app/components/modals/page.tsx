"use client";

import { Section } from "@/components/Section";
import { useState } from "react";

export default function ModalsPage() {
  const [showBasicModal, setShowBasicModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-secondary mb-4">
          <span>Components</span>
          <span className="mx-2">/</span>
          <span className="text-abyss">Modals</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
          Modals & Overlays
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Modals interrupt the user flow for important actions. Use sparingly and always provide a clear way to dismiss.
        </p>
      </header>

      {/* Basic Modal */}
      <Section title="Basic Modal" id="basic">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Standard modal dialog with title, content, and action buttons.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <button
            onClick={() => setShowBasicModal(true)}
            className="px-6 py-3 rounded-xl bg-tide text-white font-semibold hover:bg-tide transition-colors"
          >
            Open Modal
          </button>

          {/* Modal */}
          {showBasicModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div
                className="absolute inset-0 bg-abyss/40 backdrop-blur-sm"
                onClick={() => setShowBasicModal(false)}
              />
              <div className="relative bg-bg-card rounded-2xl shadow-lg max-w-md w-full p-6 animate-fade-in-up">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-abyss">Modal Title</h3>
                  <button
                    onClick={() => setShowBasicModal(false)}
                    className="w-8 h-8 rounded-lg hover:bg-bg-secondary flex items-center justify-center text-text-secondary"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-text-secondary mb-6">
                  This is the modal content. Use modals for important actions that require user attention.
                </p>
                <div className="flex gap-3 justify-end">
                  <button
                    onClick={() => setShowBasicModal(false)}
                    className="px-4 py-2 rounded-xl border border-border text-text-secondary hover:bg-bg-secondary transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowBasicModal(false)}
                    className="px-4 py-2 rounded-xl bg-tide text-white font-semibold hover:bg-tide transition-colors"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              Backdrop: bg-abyss/40 backdrop-blur-sm | Content: bg-bg-card rounded-2xl shadow-lg
            </code>
          </div>
        </div>
      </Section>

      {/* Confirmation Modal */}
      <Section title="Confirmation Modal" id="confirmation">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Destructive or important action confirmation with warning styling.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-6 py-3 rounded-xl bg-error/10 text-error font-semibold hover:bg-error hover:text-white transition-colors"
          >
            Delete Item
          </button>

          {/* Confirmation Modal */}
          {showConfirmModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div
                className="absolute inset-0 bg-abyss/40 backdrop-blur-sm"
                onClick={() => setShowConfirmModal(false)}
              />
              <div className="relative bg-bg-card rounded-2xl shadow-lg max-w-sm w-full p-6 animate-fade-in-up">
                <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-abyss text-center mb-2">Delete this item?</h3>
                <p className="text-text-secondary text-center mb-6">
                  This action cannot be undone. The item will be permanently removed.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowConfirmModal(false)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-border text-text-secondary hover:bg-bg-secondary transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowConfirmModal(false)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-error text-white font-semibold hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              Icon: bg-error/10 text-error | Destructive button: bg-error text-white hover:bg-red-600
            </code>
          </div>
        </div>
      </Section>

      {/* Form Modal */}
      <Section title="Form Modal" id="form">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Modal containing a form for data entry.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <button
            onClick={() => setShowFormModal(true)}
            className="px-6 py-3 rounded-xl bg-tide text-white font-semibold hover:bg-tide transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Client
          </button>

          {/* Form Modal */}
          {showFormModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div
                className="absolute inset-0 bg-abyss/40 backdrop-blur-sm"
                onClick={() => setShowFormModal(false)}
              />
              <div className="relative bg-bg-card rounded-2xl shadow-lg max-w-md w-full animate-fade-in-up">
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-abyss">Add New Client</h3>
                      <p className="text-sm text-text-secondary mt-1">Enter the client&apos;s information below.</p>
                    </div>
                    <button
                      onClick={() => setShowFormModal(false)}
                      className="w-8 h-8 rounded-lg hover:bg-bg-secondary flex items-center justify-center text-text-secondary"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-abyss mb-1.5">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-bg-card text-abyss placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-abyss mb-1.5">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-bg-card text-abyss placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-abyss mb-1.5">Date of Birth</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-bg-card text-abyss focus:outline-none focus:ring-2 focus:ring-tide focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="p-6 border-t border-border flex gap-3 justify-end">
                  <button
                    onClick={() => setShowFormModal(false)}
                    className="px-4 py-2.5 rounded-xl border border-border text-text-secondary hover:bg-bg-secondary transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowFormModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-tide text-white font-semibold hover:bg-tide transition-colors"
                  >
                    Add Client
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Drawer / Slide-over */}
      <Section title="Drawer" id="drawer">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Slide-out panels for secondary content or detailed views.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <button
            onClick={() => setShowDrawer(true)}
            className="px-6 py-3 rounded-xl border-2 border-tide text-tide font-semibold hover:bg-tide hover:text-white transition-colors"
          >
            Open Drawer
          </button>

          {/* Drawer */}
          {showDrawer && (
            <div className="fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-abyss/40 backdrop-blur-sm"
                onClick={() => setShowDrawer(false)}
              />
              <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-bg-card shadow-lg transform transition-transform animate-slide-in">
                <div className="h-full flex flex-col">
                  <div className="p-6 border-b border-border flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-abyss">Details</h3>
                    <button
                      onClick={() => setShowDrawer(false)}
                      className="w-8 h-8 rounded-lg hover:bg-bg-secondary flex items-center justify-center text-text-secondary"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex-1 p-6 overflow-y-auto">
                    <p className="text-text-secondary">
                      Drawer content goes here. Use drawers for detailed views, settings panels, or secondary information that doesn&apos;t need to block the entire view.
                    </p>
                  </div>
                  <div className="p-6 border-t border-border">
                    <button
                      onClick={() => setShowDrawer(false)}
                      className="w-full px-4 py-3 rounded-xl bg-tide text-white font-semibold hover:bg-tide transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              Drawer: fixed right-0 max-w-md bg-bg-card shadow-lg animate-slide-in
            </code>
          </div>
        </div>
      </Section>

      {/* Toast Notifications */}
      <Section title="Toast Notifications" id="toast">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Temporary notifications that appear and auto-dismiss. Position in bottom-right or top-right.
        </p>
        <div className="rounded-2xl bg-bg-card card-depth p-8">
          <div className="space-y-4 max-w-sm">
            {/* Success toast */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-success/10 border border-success/20">
              <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-abyss">Appointment booked!</p>
                <p className="text-xs text-text-secondary">Your session is confirmed for March 5th.</p>
              </div>
              <button className="text-text-secondary hover:text-abyss flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Error toast */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-error/10 border border-error/20">
              <div className="w-8 h-8 rounded-full bg-error/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-error" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-abyss">Something went wrong</p>
                <p className="text-xs text-text-secondary">Please try again later.</p>
              </div>
              <button className="text-text-secondary hover:text-abyss flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Info toast */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-tide/10 border border-tide/20">
              <div className="w-8 h-8 rounded-full bg-tide/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-tide" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-abyss">New message received</p>
                <p className="text-xs text-text-secondary">Your therapist sent you a message.</p>
              </div>
              <button className="text-text-secondary hover:text-abyss flex-shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 bg-bg-secondary rounded-xl p-4">
            <code className="text-sm text-text-secondary">
              Toast: p-4 rounded-xl bg-[status]/10 border border-[status]/20 | Position: fixed bottom-4 right-4
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
              <li>Provide clear close/dismiss options</li>
              <li>Use for important, interruptive actions</li>
              <li>Keep modal content focused and concise</li>
              <li>Trap focus within the modal</li>
              <li>Allow closing with Escape key</li>
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
              <li>Use modals for non-essential content</li>
              <li>Open modals from other modals</li>
              <li>Block users without a way to dismiss</li>
              <li>Put long forms in small modals</li>
              <li>Use modals when inline editing works</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
