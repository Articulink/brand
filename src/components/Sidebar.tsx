"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoWithSize } from "./Logo";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navigation = [
  {
    name: "Brand",
    href: "/brand",
  },
  {
    name: "Identity",
    href: "/identity",
    children: [
      { name: "Logo", href: "/identity/logo" },
      { name: "Color", href: "/identity/color" },
      { name: "Typography", href: "/identity/typography" },
    ],
  },
  {
    name: "Foundations",
    href: "/foundations",
    children: [
      { name: "Spacing & Layout", href: "/foundations/spacing" },
      { name: "Accessibility", href: "/foundations/accessibility" },
      { name: "Motion", href: "/foundations/motion" },
    ],
  },
  {
    name: "Components",
    href: "/components",
    children: [
      { name: "Buttons", href: "/components/buttons" },
      { name: "Forms", href: "/components/forms" },
      { name: "Cards", href: "/components/cards" },
      { name: "Badges", href: "/components/badges" },
      { name: "Navigation", href: "/components/navigation" },
      { name: "Modals", href: "/components/modals" },
      { name: "Tables", href: "/components/tables" },
      { name: "Feedback", href: "/components/feedback" },
    ],
  },
  {
    name: "Writing",
    href: "/writing",
  },
  {
    name: "Illustration",
    href: "/illustration",
  },
  {
    name: "Marketing",
    href: "/marketing",
  },
  {
    name: "Resources",
    href: "/resources",
  },
];

type NavChild = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

type NavItem = {
  name: string;
  href: string;
  children?: NavChild[];
};

function NavSection({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const pathname = usePathname();
  const isExactMatch = pathname === item.href;
  const isInSection = pathname === item.href || pathname.startsWith(item.href + "/") ||
    (item.href.includes("#") && pathname === item.href.split("#")[0]);
  const [isOpen, setIsOpen] = useState(isInSection);

  useEffect(() => {
    if (isInSection) setIsOpen(true);
  }, [isInSection]);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="border-b-2 border-border last:border-b-0">
      {/* Section Header */}
      {hasChildren ? (
        <div className="flex items-center">
          <Link
            href={item.href}
            onClick={onNavigate}
            className={`
              flex-1 px-5 py-4 transition-colors
              ${isExactMatch ? "text-tide font-semibold" : isInSection ? "text-tide" : "text-abyss hover:text-tide"}
            `}
          >
            <span className="font-semibold text-[15px]">{item.name}</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-4 text-blue-bubble hover:text-tide transition-colors"
            aria-label={isOpen ? "Collapse submenu" : "Expand submenu"}
          >
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ) : (
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`
            block px-5 py-4 transition-colors
            ${isInSection ? "text-tide" : "text-abyss hover:text-tide"}
          `}
        >
          <span className="font-semibold text-[15px]">{item.name}</span>
        </Link>
      )}

      {/* Children */}
      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-200 ${
            isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-bg-secondary">
            {item.children!.map((child) => (
              <NavChild key={child.name} item={child} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NavChild({ item, onNavigate }: { item: NavChild; onNavigate?: () => void }) {
  const pathname = usePathname();
  const baseHref = item.href.split("#")[0];
  const isActive = pathname === baseHref || pathname.startsWith(baseHref + "/");
  const [isOpen, setIsOpen] = useState(isActive);

  useEffect(() => {
    if (isActive) setIsOpen(true);
  }, [isActive]);

  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <div className="py-2">
        {/* Expandable child header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full flex items-center justify-between px-5 py-2 text-left transition-colors
            ${isActive ? "text-tide font-medium" : "text-abyss hover:text-tide"}
          `}
        >
          <span className="text-[14px]">{item.name}</span>
          <svg
            className={`w-4 h-4 text-blue-bubble transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Sub-items with left border */}
        <div
          className={`overflow-hidden transition-all duration-200 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="ml-5 border-l-2 border-border py-1">
            {item.children!.map((subItem) => {
              const subBaseHref = subItem.href.split("#")[0];
              const isSubActive = pathname === subBaseHref ||
                (subItem.href.includes("#") && pathname === subBaseHref);

              return (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  onClick={onNavigate}
                  className={`
                    block px-4 py-2 text-[14px] transition-colors
                    ${isSubActive
                      ? "text-tide font-medium border-l-2 border-tide -ml-[2px] pl-[14px]"
                      : "text-text-secondary hover:text-tide"
                    }
                  `}
                >
                  {subItem.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={`
        block px-5 py-3 transition-colors
        ${isActive ? "text-tide font-medium" : "text-abyss hover:text-tide"}
      `}
    >
      <span className="text-[14px]">{item.name}</span>
    </Link>
  );
}

function ThemeToggle({ variant = "default" }: { variant?: "default" | "header" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const trackClass = variant === "header"
    ? "bg-white/20 border-white/30"
    : "bg-bg-secondary border-border";

  const thumbClass = isDark
    ? "left-[calc(100%-22px)] bg-abyss"
    : variant === "header"
      ? "left-0.5 bg-white"
      : "left-0.5 bg-tide";

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-12 h-6 rounded-full border transition-colors ${trackClass}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Sliding thumb with icon */}
      <span
        className={`absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${thumbClass}`}
      >
        {isDark ? (
          <svg className="w-3 h-3 text-sunshine" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className={`w-3 h-3 ${variant === "header" ? "text-tide" : "text-white"}`} fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
          </svg>
        )}
      </span>
    </button>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-tide">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoWithSize variant="white" size="text-xl" />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle variant="header" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-abyss/30 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-14 left-0 right-0 bottom-0 p-4 overflow-y-auto transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="bg-bg-primary rounded-2xl border-2 border-border overflow-hidden">
            {/* Navigation */}
            <nav>
              {navigation.map((item) => (
                <NavSection
                  key={item.name}
                  item={item}
                  onNavigate={() => setMobileMenuOpen(false)}
                />
              ))}
            </nav>

            {/* Footer */}
            <div className="border-t-2 border-border px-5 py-4">
              <div className="flex items-center justify-between text-[12px] text-text-secondary">
                <span>v1.0</span>
                <span>March 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden lg:flex h-screen w-[280px] flex-col pl-6 pr-4 py-4">
        {/* Card container */}
        <div className="flex-1 flex flex-col bg-bg-primary rounded-2xl border-2 border-border overflow-hidden">
          {/* Logo & Toggle */}
          <div className="px-5 py-4 border-b-2 border-border flex items-center justify-between">
            <Link href="/">
              <LogoWithSize variant="default" size="text-2xl" />
            </Link>
            <ThemeToggle />
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            {navigation.map((item) => (
              <NavSection key={item.name} item={item} />
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t-2 border-border px-5 py-4">
            <div className="flex items-center justify-between text-[12px] text-text-secondary">
              <span>v1.0</span>
              <span>March 2026</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
