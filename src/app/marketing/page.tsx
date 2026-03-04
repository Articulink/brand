import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

export default function MarketingPage() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="Marketing"
        description="Create materials using all the critical elements of the Articulink visual identity."
      />

      {/* Components */}
      <Section title="Buttons" id="buttons">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Buttons have a playful 3D depth effect with a darker bottom border. Use uppercase text with letter spacing.
        </p>

        <div className="rounded-2xl bg-bg-card card-depth p-6 lg:p-8">
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <button className="px-8 py-3 rounded-2xl bg-tide border-b-4 border-[#0369c1] text-white font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
              Primary Button
            </button>
            <button className="px-8 py-3 rounded-2xl bg-white border-2 border-border border-b-4 text-tide font-bold uppercase tracking-wide hover:bg-blue-breeze active:border-b-2 active:mt-0.5 transition-all">
              Secondary Button
            </button>
            <button className="px-8 py-3 rounded-2xl bg-sunshine border-b-4 border-[#d4a90e] text-abyss font-bold uppercase tracking-wide hover:brightness-110 active:border-b-0 active:mt-1 transition-all">
              Accent Button
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-bg-secondary p-4">
              <span className="text-xs text-tide font-semibold uppercase tracking-wider">Primary</span>
              <p className="text-sm text-text-secondary mt-1">Main CTAs, form submits</p>
            </div>
            <div className="rounded-xl bg-bg-secondary p-4">
              <span className="text-xs text-tide font-semibold uppercase tracking-wider">Secondary</span>
              <p className="text-sm text-text-secondary mt-1">Alternative actions</p>
            </div>
            <div className="rounded-xl bg-bg-secondary p-4">
              <span className="text-xs text-tide font-semibold uppercase tracking-wider">Accent</span>
              <p className="text-sm text-text-secondary mt-1">High-priority CTAs</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Cards */}
      <Section title="Cards" id="cards">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Cards use rounded corners, subtle borders, and hover states for interactivity.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="group rounded-2xl bg-bg-card card-depth p-6 transition-all hover:border-tide/30">
            <div className="w-12 h-12 rounded-xl bg-tide mb-4 transition-transform group-hover:scale-110" />
            <h3 className="font-display text-lg font-bold text-abyss group-hover:text-tide transition-colors">Card Title</h3>
            <p className="mt-2 text-sm text-text-secondary">Brief description of the card content goes here.</p>
          </div>

          <div className="group rounded-2xl bg-bg-card card-depth p-6 transition-all hover:border-tide/30">
            <div className="w-12 h-12 rounded-xl bg-sunshine mb-4 transition-transform group-hover:scale-110" />
            <h3 className="font-display text-lg font-bold text-abyss group-hover:text-tide transition-colors">Featured Card</h3>
            <p className="mt-2 text-sm text-text-secondary">Yellow accent for highlighted content.</p>
          </div>

          <div className="group rounded-2xl bg-bg-card card-depth p-6 transition-all hover:border-tide/30">
            <div className="w-12 h-12 rounded-xl bg-jellyfish mb-4 transition-transform group-hover:scale-110" />
            <h3 className="font-display text-lg font-bold text-abyss group-hover:text-tide transition-colors">Special Card</h3>
            <p className="mt-2 text-sm text-text-secondary">Secondary colors for variety.</p>
          </div>
        </div>
      </Section>

      {/* Form Elements */}
      <Section title="Form Elements" id="forms">
        <div className="rounded-2xl bg-bg-card card-depth p-6 lg:p-8">
          <div className="grid gap-6 md:grid-cols-2 max-w-2xl">
            <div>
              <label className="block text-sm font-medium text-abyss mb-2">Text Input</label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-abyss placeholder:text-text-muted focus:border-tide focus:outline-none focus:ring-1 focus:ring-tide"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-abyss mb-2">Select</label>
              <select className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-abyss focus:border-tide focus:outline-none focus:ring-1 focus:ring-tide">
                <option>Select option...</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>
        </div>
      </Section>

      {/* Tags */}
      <Section title="Tags & Badges" id="tags">
        <div className="rounded-2xl bg-bg-card card-depth p-6">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full bg-tide text-abyss text-sm font-medium">Active</span>
            <span className="px-4 py-1.5 rounded-full bg-bg-secondary text-abyss text-sm font-medium">Default</span>
            <span className="px-4 py-1.5 rounded-full bg-sunshine text-abyss text-sm font-medium">Featured</span>
            <span className="px-4 py-1.5 rounded-full bg-success text-abyss text-sm font-medium">Success</span>
            <span className="px-4 py-1.5 rounded-full bg-error text-abyss text-sm font-medium">Error</span>
            <span className="px-4 py-1.5 rounded-full border border-border text-text-secondary text-sm font-medium">Outlined</span>
          </div>
        </div>
      </Section>

      {/* Photography */}
      <Section title="Photography Style" id="photography">
        <div className="rounded-2xl bg-bg-card card-depth p-6 lg:p-8">
          <p className="text-text-secondary mb-6">
            Photography should feel warm, authentic, and joyful. Focus on real moments
            of connection between therapists, children, and families.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-success/10 p-4">
              <span className="text-xs font-semibold text-success uppercase tracking-wider">Do</span>
              <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                <li>• Natural lighting</li>
                <li>• Candid moments</li>
                <li>• Diverse representation</li>
                <li>• Warm color grading</li>
              </ul>
            </div>
            <div className="rounded-xl bg-error/10 p-4">
              <span className="text-xs font-semibold text-error uppercase tracking-wider">Don&apos;t</span>
              <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                <li>• Overly posed shots</li>
                <li>• Clinical settings</li>
                <li>• Stock photo clichés</li>
                <li>• Cool/harsh tones</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
