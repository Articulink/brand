import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

const sections = [
  {
    title: "Logo",
    description: "Our logo and its proper usage across different contexts.",
    href: "/identity/logo",
  },
  {
    title: "Color",
    description: "The Articulink color palette and how to use it effectively.",
    href: "/identity/color",
  },
  {
    title: "Typography",
    description: "Our typefaces and how to apply them consistently.",
    href: "/identity/typography",
  },
];

export default function IdentityPage() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="Identity"
        description="Successfully represent Articulink with core brand elements and rules for usage."
        color="bg-tide"
      />

      <div className="px-8 lg:px-16 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, idx) => (
            <Link
              key={section.title}
              href={section.href}
              className="group rounded-2xl bg-bg-card card-depth p-6 transition-all hover:card-depth-hover animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <h3 className="font-display text-xl font-bold text-abyss group-hover:text-tide transition-colors">
                {section.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {section.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-text-muted group-hover:text-tide transition-colors">
                <span className="text-sm font-medium">View</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
