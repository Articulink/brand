import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";

const voiceTraits = [
  {
    trait: "Warm",
    description: "We speak like a trusted friend, not a medical textbook.",
    do: "Great job today! You're making amazing progress.",
    dont: "Session completed. Next appointment in 7 days.",
  },
  {
    trait: "Clear",
    description: "We explain complex things simply, without jargon.",
    do: "We'll help your child make clearer 's' sounds.",
    dont: "We'll address the lateral lisp affecting sibilant phonemes.",
  },
  {
    trait: "Encouraging",
    description: "We celebrate progress and keep spirits high.",
    do: "Every small step forward is a win!",
    dont: "Results may vary based on condition severity.",
  },
  {
    trait: "Professional",
    description: "We're experts, but we don't talk down to anyone.",
    do: "Our therapists are certified and experienced.",
    dont: "Trust us, we know what we're doing.",
  },
];

export default function WritingPage() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="Writing"
        description="Produce content in the spirit of Articulink and ensure consistency across all mediums."
      />

      {/* Brand Voice */}
      <Section title="Brand Voice" id="voice">
        <p className="text-text-secondary mb-8 max-w-2xl">
          Our voice is the personality behind our words. It stays consistent across all
          communications while our tone adapts to context.
        </p>

        <div className="space-y-4">
          {voiceTraits.map((item) => (
            <div
              key={item.trait}
              className="rounded-2xl bg-bg-card card-depth p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-1/3">
                  <h3 className="font-display text-xl font-bold text-abyss">{item.trait}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
                </div>
                <div className="lg:w-2/3 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-success/10 p-4">
                    <span className="text-xs font-semibold text-success uppercase tracking-wider">Do</span>
                    <p className="mt-2 text-sm text-abyss">&ldquo;{item.do}&rdquo;</p>
                  </div>
                  <div className="rounded-xl bg-error/10 p-4">
                    <span className="text-xs font-semibold text-error uppercase tracking-wider">Don&apos;t</span>
                    <p className="mt-2 text-sm text-abyss">&ldquo;{item.dont}&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tone */}
      <Section title="Tone by Context" id="tone">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-10 h-10 rounded-xl bg-tide mb-4" />
            <h3 className="font-display text-lg font-bold text-abyss">For Parents</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Reassuring, informative, empathetic. Parents need to feel confident in their choice.
            </p>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-10 h-10 rounded-xl bg-sunshine mb-4" />
            <h3 className="font-display text-lg font-bold text-abyss">For Children</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Playful, encouraging, simple. Therapy should feel like fun, not work.
            </p>
          </div>

          <div className="rounded-2xl bg-bg-card card-depth p-6">
            <div className="w-10 h-10 rounded-xl bg-abyss mb-4" />
            <h3 className="font-display text-lg font-bold text-abyss">For Professionals</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Knowledgeable, direct, respectful. We speak peer-to-peer with clinical partners.
            </p>
          </div>
        </div>
      </Section>

      {/* Writing Tips */}
      <Section title="Writing Tips" id="tips">
        <div className="rounded-2xl bg-bg-card card-depth p-6 lg:p-8">
          <ul className="space-y-4">
            {[
              "Use active voice. 'We'll call you' not 'You will be contacted.'",
              "Keep sentences short. Aim for 15-20 words max.",
              "Avoid jargon. If a 12-year-old wouldn't understand it, simplify.",
              "Lead with benefits. What does this mean for the reader?",
              "Be specific. 'In 2 business days' not 'soon.'",
              "End with action. Tell people what to do next.",
            ].map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tide text-abyss text-xs font-bold">
                  {idx + 1}
                </span>
                <span className="text-text-secondary">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
