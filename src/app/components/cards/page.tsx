import Link from "next/link";
import { Section } from "@/components/Section";

export default function CardsPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
        <nav className="text-sm text-text-muted mb-4">
          <Link href="/components" className="hover:text-tide transition-colors">Components</Link>
          <span className="mx-2">/</span>
          <span className="text-abyss">Cards</span>
        </nav>
        <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
          Cards
        </h1>
        <p className="mt-3 text-lg text-text-secondary max-w-2xl">
          Cards group related content and actions. They create visual hierarchy and help users scan information quickly.
        </p>
      </header>

      {/* Basic Card */}
      <Section title="Basic Card" id="basic">
        <p className="text-text-secondary mb-8 max-w-2xl">
          The foundation card style with rounded corners, shadow, and padding.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <h3 className="font-display text-lg font-bold text-abyss">Card Title</h3>
            <p className="mt-2 text-sm text-text-secondary">
              This is a basic card with standard padding and styling. Use it for general content containers.
            </p>
          </div>
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <h3 className="font-display text-lg font-bold text-abyss">Another Card</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Cards automatically maintain consistent spacing and visual weight.
            </p>
          </div>
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <h3 className="font-display text-lg font-bold text-abyss">Third Card</h3>
            <p className="mt-2 text-sm text-text-secondary">
              The shadow provides depth and separates content from the background.
            </p>
          </div>
        </div>
        <div className="mt-6 bg-bg-secondary rounded-xl p-4">
          <code className="text-sm text-text-secondary">
            className=&quot;rounded-2xl bg-bg-card card-depth p-6&quot;
          </code>
        </div>
      </Section>

      {/* Interactive Card */}
      <Section title="Interactive Card" id="interactive">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Cards that respond to user interaction with hover effects.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a href="#" className="group rounded-2xl bg-bg-card card-depth p-6 transition-all hover:card-depth-hover">
            <div className="w-12 h-12 rounded-xl bg-tide/10 text-tide flex items-center justify-center mb-4 group-hover:bg-tide group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss group-hover:text-tide transition-colors">Quick Actions</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Hover to see the enhanced shadow and color transitions.
            </p>
          </a>
          <a href="#" className="group rounded-2xl bg-bg-card card-depth p-6 transition-all hover:card-depth-hover">
            <div className="w-12 h-12 rounded-xl bg-sunshine/10 text-sunshine flex items-center justify-center mb-4 group-hover:bg-sunshine group-hover:text-abyss transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss group-hover:text-tide transition-colors">Featured</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Use accent colors to draw attention to important cards.
            </p>
          </a>
          <a href="#" className="group rounded-2xl bg-bg-card card-depth p-6 transition-all hover:card-depth-hover">
            <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center mb-4 group-hover:bg-success group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss group-hover:text-tide transition-colors">Completed</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Status-colored icons communicate state at a glance.
            </p>
          </a>
        </div>
      </Section>

      {/* Stat Card */}
      <Section title="Stat Card" id="stat">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Display key metrics and statistics prominently.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-tide/10 text-tide flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-sm text-text-secondary">Active Clients</span>
            </div>
            <p className="text-3xl font-display font-bold text-abyss">1,234</p>
            <p className="text-sm text-success mt-1">+12% from last month</p>
          </div>
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-sunshine/10 text-sunshine flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm text-text-secondary">Sessions</span>
            </div>
            <p className="text-3xl font-display font-bold text-abyss">847</p>
            <p className="text-sm text-text-secondary mt-1">This week</p>
          </div>
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-success/10 text-success flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm text-text-secondary">Goals Met</span>
            </div>
            <p className="text-3xl font-display font-bold text-abyss">92%</p>
            <p className="text-sm text-success mt-1">Above target</p>
          </div>
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-sm text-text-secondary">Satisfaction</span>
            </div>
            <p className="text-3xl font-display font-bold text-abyss">4.9</p>
            <p className="text-sm text-text-secondary mt-1">Out of 5 stars</p>
          </div>
        </div>
      </Section>

      {/* Profile Card */}
      <Section title="Profile Card" id="profile">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Display user or therapist information with avatar and details.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-tide text-white flex items-center justify-center font-bold text-lg">
                SJ
              </div>
              <div>
                <h3 className="font-semibold text-abyss">Sarah Johnson</h3>
                <p className="text-sm text-text-secondary">Speech-Language Pathologist</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>California, Texas, Florida</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary mt-2">
                <svg className="w-4 h-4 text-sunshine" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>4.9 (127 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Content Card with Image */}
      <Section title="Content Card" id="content">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Cards with featured images for blog posts, articles, or services.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl bg-bg-card card-depth overflow-hidden transition-all hover:card-depth-hover">
            <div className="h-40 bg-tide/20 flex items-center justify-center">
              <svg className="w-12 h-12 text-tide/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-tide uppercase tracking-wider">Article</span>
              <h3 className="mt-2 font-display text-lg font-bold text-abyss group-hover:text-tide transition-colors">
                Understanding Speech Development
              </h3>
              <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                Learn about the key milestones in speech development and how to support your child&apos;s communication journey.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-tide font-medium">
                Read more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Card on Dark Background */}
      <Section title="Card on Dark Background" id="dark">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Cards styled for dark background contexts.
        </p>
        <div className="rounded-2xl bg-tide border-b-[5px] border-[#0369c1] p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/10">
              <h3 className="font-display text-lg font-bold text-white">Dark Card</h3>
              <p className="mt-2 text-sm text-white/70">
                Use semi-transparent backgrounds on dark surfaces.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/10">
              <h3 className="font-display text-lg font-bold text-white">With Border</h3>
              <p className="mt-2 text-sm text-white/70">
                Subtle borders help define edges on dark backgrounds.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/10">
              <h3 className="font-display text-lg font-bold text-white">Backdrop Blur</h3>
              <p className="mt-2 text-sm text-white/70">
                Use backdrop-blur for a frosted glass effect.
              </p>
            </div>
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
              <li>Use consistent padding (p-6 standard)</li>
              <li>Apply card-depth for depth</li>
              <li>Full border when card matches its background color</li>
              <li>Bottom border only when card contrasts its background</li>
              <li>Use hover states for interactive cards</li>
              <li>Maintain visual hierarchy within cards</li>
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
              <li>Nest cards within cards</li>
              <li>Mix card sizes inconsistently</li>
              <li>Overload cards with too much content</li>
              <li>Use cards for single elements</li>
              <li>Forget hover states on clickable cards</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
