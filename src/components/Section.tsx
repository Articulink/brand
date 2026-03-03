interface SectionProps {
  title?: string;
  id?: string;
  children: React.ReactNode;
}

export function Section({ title, id, children }: SectionProps) {
  return (
    <section id={id} className="px-8 lg:px-16 py-12 border-t border-border scroll-mt-8">
      {title && (
        <h2 className="font-display text-2xl font-bold text-abyss mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
