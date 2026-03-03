interface PageHeaderProps {
  title: string;
  description: string;
  color?: string;
}

export function PageHeader({ title, description, color = "bg-tide" }: PageHeaderProps) {
  return (
    <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
      <div className="flex items-start gap-6">
        <div className={`w-16 h-16 rounded-2xl ${color} shrink-0`} />
        <div>
          <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
            {title}
          </h1>
          <p className="mt-3 text-lg text-text-secondary max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
}
