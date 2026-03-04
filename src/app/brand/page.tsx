import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

const values = [
  {
    name: "Empowerment",
    description: "We believe every child deserves the tools to express themselves confidently.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Accessibility",
    description: "Quality speech therapy should be available to every family, everywhere.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12h20" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Joy",
    description: "Therapy works best when it feels like play, not work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Trust",
    description: "Parents trust us with their children. We honor that responsibility every day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Progress",
    description: "Every small step forward is worth celebrating.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Connection",
    description: "Communication connects us. That's why our work matters.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const personality = [
  { trait: "Friendly", not: "Formal" },
  { trait: "Encouraging", not: "Pushy" },
  { trait: "Expert", not: "Condescending" },
  { trait: "Playful", not: "Childish" },
  { trait: "Warm", not: "Casual" },
  { trait: "Clear", not: "Simplistic" },
];

export default function BrandPage() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="Brand"
        description="The heart and soul of Articulink — who we are, what we believe, and how we show up."
      />

      {/* Mission */}
      <Section title="Mission" id="mission">
        <div className="rounded-2xl bg-bg-card card-depth p-8 lg:p-12">
          <p className="font-display text-2xl lg:text-3xl font-bold text-abyss leading-snug max-w-3xl">
            To empower every child to find their voice and communicate with confidence,
            making quality speech therapy accessible to families everywhere.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-1 w-16 bg-tide rounded-full" />
            <span className="text-text-muted text-sm">Our North Star</span>
          </div>
        </div>
      </Section>

      {/* Tagline */}
      <Section title="Tagline" id="tagline">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-tide border-b-[5px] border-[#0369c1] p-8 lg:p-10">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Primary Tagline</span>
            <p className="font-display text-3xl lg:text-4xl font-bold text-white mt-3">
              Find Your Voice
            </p>
            <p className="text-white/70 mt-4 text-sm">
              Use in hero sections, marketing headlines, and brand moments.
            </p>
          </div>
          <div className="rounded-2xl bg-bg-card card-depth p-8 lg:p-10">
            <span className="text-xs font-semibold text-tide uppercase tracking-wider">Supporting Taglines</span>
            <ul className="mt-4 space-y-3">
              <li className="font-display text-xl font-bold text-abyss">Speech therapy for every child</li>
              <li className="font-display text-xl font-bold text-abyss">Where communication begins</li>
              <li className="font-display text-xl font-bold text-abyss">Every voice matters</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section title="Values" id="values">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Our values guide every decision we make, from product features to how we write an email.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name} className="rounded-2xl bg-bg-card card-depth p-6">
              <div className="w-12 h-12 rounded-xl bg-tide/10 text-tide flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-abyss">{value.name}</h3>
              <p className="mt-2 text-sm text-text-secondary">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Personality */}
      <Section title="Brand Personality" id="personality">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Our brand has a distinct personality. Here&apos;s how we show up — and how we don&apos;t.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {personality.map((item) => (
            <div key={item.trait} className="rounded-xl bg-bg-card card-depth p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span className="font-semibold text-abyss">{item.trait}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-text-muted">not</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-error" />
                  <span className="text-text-secondary">{item.not}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Audience */}
      <Section title="Our Audience" id="audience">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-12 h-12 rounded-xl bg-tide mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss">Parents</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Caring parents seeking the best support for their child&apos;s communication development. They want expertise they can trust and progress they can see.
            </p>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-12 h-12 rounded-xl bg-sunshine mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-abyss">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss">Children</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Kids aged 2-12 working on speech and language skills. They need therapy that feels like play, with celebrations for every milestone.
            </p>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-12 h-12 rounded-xl bg-abyss mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-abyss">Professionals</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Speech-language pathologists, pediatricians, and educators who refer families to us. They need to know we meet clinical standards.
            </p>
          </div>
        </div>
      </Section>

      {/* Brand Promise */}
      <Section title="Brand Promise" id="promise">
        <div className="rounded-2xl bg-tide border-b-[5px] border-[#0369c1] p-8 lg:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">What We Promise</span>
            <p className="font-display text-2xl lg:text-3xl font-bold text-white mt-4 leading-snug">
              When you choose Articulink, you&apos;re choosing a partner who celebrates every
              word, every sound, and every breakthrough — no matter how small.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Expert Care", "Joyful Experience", "Visible Progress", "Always Accessible"].map((item) => (
                <span key={item} className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
