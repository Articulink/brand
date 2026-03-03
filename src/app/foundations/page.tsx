import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";

const sections = [
  {
    name: "Spacing & Layout",
    href: "/foundations/spacing",
    description: "Grid system, spacing scale, breakpoints, and border radius.",
    color: "bg-blue-lagoon",
  },
  {
    name: "Accessibility",
    href: "/foundations/accessibility",
    description: "Color contrast, focus states, keyboard navigation, and ARIA.",
    color: "bg-success",
  },
  {
    name: "Motion",
    href: "/foundations/motion",
    description: "Animation principles, timing, easing, and micro-interactions.",
    color: "bg-coral",
  },
];

export default function FoundationsPage() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="Foundations"
        description="The underlying principles and systems that make our design consistent and accessible."
        color="bg-abyss"
      />

      <div className="px-6 lg:px-12 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className="group rounded-2xl bg-bg-card card-depth p-6 transition-all hover:border-tide/30"
            >
              <div className={`w-12 h-12 rounded-xl ${section.color} mb-4 transition-transform group-hover:scale-110`} />
              <h3 className="font-display text-xl font-bold text-abyss group-hover:text-tide transition-colors">
                {section.name}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{section.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-tide opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explore</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
