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

          {/* Shapes */}
          <div className="mt-8 flex items-center gap-4">
            <svg viewBox="-100 -100 200 200" className="w-10 h-10 text-sunshine">
              <path d="M44.1,-58.3C56.4,-49.5,64.8,-35.2,68.6,-19.9C72.4,-4.6,71.5,11.7,64.7,25.2C57.9,38.6,45.1,49.2,31.1,55.9C17.1,62.7,1.9,65.6,-13.2,63.3C-28.2,61,-43.1,53.5,-53.3,41.6C-63.5,29.7,-69,13.5,-68.3,-2.3C-67.6,-18,-60.7,-33.2,-49.8,-42.2C-38.9,-51.1,-24,-53.7,-9.4,-56.2C5.2,-58.6,20.5,-60.9,44.1,-58.3Z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-coral -rotate-45">
              <path d="M10 64 A 40 40 0 0 1 90 64 Z" fill="currentColor" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
            </svg>
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-surf rotate-12">
              <path d="M20 16 L84 22 L78 84 L16 76 Z" fill="currentColor" stroke="currentColor" strokeWidth="12" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
