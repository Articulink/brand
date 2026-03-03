import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

const componentSections = [
  {
    name: "Buttons",
    description: "Primary, secondary, accent, and icon button variants with all states.",
    href: "/components/buttons",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="8" width="18" height="8" rx="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Forms",
    description: "Inputs, selects, checkboxes, radio buttons, and form layouts.",
    href: "/components/forms",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "Cards",
    description: "Content cards, feature cards, stat cards, and interactive cards.",
    href: "/components/cards",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
      </svg>
    ),
  },
  {
    name: "Badges",
    description: "Status badges, tags, pills, and notification indicators.",
    href: "/components/badges",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    name: "Navigation",
    description: "Headers, sidebars, tabs, breadcrumbs, and pagination.",
    href: "/components/navigation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    name: "Modals",
    description: "Dialog boxes, confirmations, drawers, and overlays.",
    href: "/components/modals",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v18M3 9h6" />
      </svg>
    ),
  },
  {
    name: "Tables",
    description: "Data tables, lists, and grid layouts with sorting and pagination.",
    href: "/components/tables",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
  },
  {
    name: "Feedback",
    description: "Alerts, toasts, progress bars, spinners, and empty states.",
    href: "/components/feedback",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ComponentsPage() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="Components"
        description="A unified component library for all Articulink products. Use these components to build consistent, accessible interfaces across Portal, Website, Admin, and Screener."
        color="bg-tide"
      />

      <div className="px-8 lg:px-16 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {componentSections.map((section, idx) => (
            <Link
              key={section.name}
              href={section.href}
              className="group rounded-2xl bg-bg-card card-depth p-6 transition-all hover:card-depth-hover animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-tide/10 text-tide flex items-center justify-center mb-4 group-hover:bg-tide group-hover:text-white transition-colors">
                {section.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-abyss group-hover:text-tide transition-colors">
                {section.name}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {section.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Usage Guidelines */}
        <div className="mt-16 rounded-2xl bg-bg-secondary p-8">
          <h2 className="font-display text-2xl font-bold text-abyss mb-4">Usage Guidelines</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-abyss mb-2">Consistency</h3>
              <p className="text-sm text-text-secondary">
                Use these exact component specifications across all Articulink products to maintain visual consistency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-abyss mb-2">Accessibility</h3>
              <p className="text-sm text-text-secondary">
                All components meet WCAG 2.1 AA standards. Maintain focus states, color contrast, and semantic HTML.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-abyss mb-2">Responsiveness</h3>
              <p className="text-sm text-text-secondary">
                Components adapt to all screen sizes. Test at mobile (375px), tablet (768px), and desktop (1280px).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
