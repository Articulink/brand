import Link from "next/link";
import { LogoWithSize } from "@/components/Logo";

const categories = [
  {
    name: "Identity",
    description: "Successfully represent Articulink with core brand elements and rules for usage.",
    href: "/identity",
    color: "bg-tide",
  },
  {
    name: "Writing",
    description: "Produce content in the spirit of Articulink and ensure consistency across all mediums.",
    href: "/writing",
    color: "bg-sunshine",
  },
  {
    name: "Illustration",
    description: "Create artwork that feels right at home in the expanding Articulink universe.",
    href: "/illustration",
    color: "bg-jellyfish",
  },
  {
    name: "Marketing",
    description: "Create materials using all the critical elements of the Articulink visual identity.",
    href: "/marketing",
    color: "bg-error",
  },
  {
    name: "Resources",
    description: "Logos, fact sheets, images, and all the other downloadables you need.",
    href: "/resources",
    color: "bg-tide",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-8 lg:px-16 py-16 lg:py-24">
        <div className="max-w-4xl">
          <div className="mb-8">
            <LogoWithSize variant="default" size="text-5xl lg:text-6xl" />
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-extrabold text-abyss leading-tight">
            Brand Guidelines
          </h1>
          <p className="mt-6 text-xl lg:text-2xl text-text-secondary max-w-2xl leading-relaxed">
            These guidelines exist to help us communicate clearly and consistently.
            They define who we are and how we show up for families everywhere.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-8 lg:px-16 pb-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, idx) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-bg-card card-depth p-6 transition-all hover:card-depth-hover animate-fade-in-up"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Color indicator */}
              <div className={`w-12 h-12 rounded-xl ${category.color} mb-5 transition-transform group-hover:scale-110`} />

              <h2 className="font-display text-xl font-bold text-abyss group-hover:text-tide transition-colors">
                {category.name}
              </h2>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {category.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-2 text-text-muted group-hover:text-tide transition-colors">
                <span className="text-sm font-medium">Explore</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-8 lg:px-16 py-16 border-t border-border">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-tide uppercase tracking-wider mb-4">
            Our Mission
          </p>
          <blockquote className="font-display text-3xl lg:text-4xl font-bold text-abyss leading-snug">
            &ldquo;To make exceptional speech therapy accessible to every child, delivered with warmth, expertise, and joy.&rdquo;
          </blockquote>
        </div>
      </section>
    </div>
  );
}
