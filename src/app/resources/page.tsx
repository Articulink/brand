import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

const downloads = [
  {
    name: "Logo Package",
    description: "All logo variations in SVG, PNG, and EPS formats",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Color Swatches",
    description: "ASE, CLR, and Sketch palette files",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="13.5" cy="6.5" r="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="19" cy="13.5" r="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="15" cy="19.5" r="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="17" r="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="5" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Icon Set",
    description: "Complete icon library in SVG format",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="14" y="3" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="14" y="14" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="14" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Presentation Template",
    description: "Keynote and PowerPoint templates",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const fonts = [
  { name: "League Spartan", type: "Headlines", url: "https://fonts.google.com/specimen/League+Spartan" },
  { name: "Poppins", type: "Everything Else", url: "https://fonts.google.com/specimen/Poppins" },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="Resources"
        description="Logos, fact sheets, images, and all the other downloadables you need."
        color="bg-tide"
      />

      {/* Downloads */}
      <Section title="Downloads" id="downloads">
        <div className="grid gap-4 md:grid-cols-2">
          {downloads.map((item) => (
            <button
              key={item.name}
              className="group rounded-2xl bg-bg-card card-depth p-6 text-left transition-all hover:border-tide/30"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-abyss group-hover:text-tide transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">{item.description}</p>
                </div>
                <div className="shrink-0 w-12 h-12 rounded-xl bg-bg-secondary flex items-center justify-center text-text-muted group-hover:text-tide transition-colors">
                  {item.icon}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-text-muted group-hover:text-tide transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Download</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-tide/10  p-4">
          <p className="text-sm text-text-secondary">
            <strong className="text-abyss">Note:</strong> Download buttons are placeholders.
            In production, these would link to actual asset files.
          </p>
        </div>
      </Section>

      {/* Fonts */}
      <Section title="Fonts" id="fonts">
        <p className="text-text-secondary mb-6">
          We use Google Fonts. These are free and can be loaded via CDN.
        </p>

        <div className="space-y-3">
          {fonts.map((font) => (
            <a
              key={font.name}
              href={font.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl bg-bg-card card-depth p-5 transition-all hover:border-tide/30"
            >
              <div>
                <h3 className="font-semibold text-abyss group-hover:text-tide transition-colors">
                  {font.name}
                </h3>
                <p className="text-sm text-text-secondary">{font.type} Font</p>
              </div>
              <div className="flex items-center gap-2 text-text-muted group-hover:text-tide transition-colors">
                <span className="text-sm">Google Fonts</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Brand Kit */}
      <Section title="Complete Brand Kit" id="kit">
        <div className="rounded-2xl bg-tide p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white">
                Download Everything
              </h3>
              <p className="mt-3 text-white/70 max-w-md">
                Get all logos, colors, fonts, and assets in a single organized ZIP file.
              </p>
            </div>
            <button className="shrink-0 px-8 py-4 rounded-full bg-sunshine text-abyss font-semibold hover:bg-amber-300 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download ZIP
            </button>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🎨", label: "Logos", count: "8 files" },
              { emoji: "🎭", label: "Colors", count: "4 formats" },
              { emoji: "✏️", label: "Fonts", count: "2 families" },
              { emoji: "⭐", label: "Icons", count: "24 files" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-white/10 backdrop-blur-sm p-4">
                <span className="text-2xl">{item.emoji}</span>
                <p className="mt-2 font-medium text-white">{item.label}</p>
                <p className="text-sm text-white/60">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section title="Questions?" id="contact">
        <div className="rounded-2xl bg-bg-card card-depth p-6">
          <p className="text-text-secondary">
            Need help with the brand? Have questions about usage?
          </p>
          <a
            href="mailto:brand@articulink.com"
            className="mt-3 inline-flex items-center gap-2 text-tide font-medium hover:text-abyss transition-colors"
          >
            brand@articulink.com
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </Section>
    </div>
  );
}
