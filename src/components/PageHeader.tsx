import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumb?: string; // Parent section name (e.g., "Identity", "Foundations")
  breadcrumbHref?: string; // Link to parent section (e.g., "/identity")
}

export function PageHeader({ title, description, breadcrumb, breadcrumbHref }: PageHeaderProps) {
  return (
    <header className="px-8 lg:px-16 py-12 lg:py-16 border-b border-border">
      {breadcrumb && (
        <nav className="text-sm text-text-muted mb-4">
          {breadcrumbHref ? (
            <Link href={breadcrumbHref} className="hover:text-tide transition-colors">
              {breadcrumb}
            </Link>
          ) : (
            <span>{breadcrumb}</span>
          )}
          <span className="mx-2">/</span>
          <span className="text-abyss">{title}</span>
        </nav>
      )}
      <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-abyss">
        {title}
      </h1>
      <p className="mt-3 text-lg text-text-secondary max-w-2xl">
        {description}
      </p>
    </header>
  );
}
