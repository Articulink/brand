"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navigation = [
  {
    name: "Brand",
    href: "/brand",
  },
  {
    name: "Identity",
    href: "/identity",
    children: [
      {
        name: "Logos",
        href: "/identity/logo",
        children: [
          { name: "Logotype", href: "/identity/logo#logotype" },
          { name: "Icon", href: "/identity/logo#icon" },
        ],
      },
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
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/") ||
    (item.href.includes("#") && pathname === item.href.split("#")[0]);
  const [isOpen, setIsOpen] = useState(isActive);

  useEffect(() => {
    if (isActive) setIsOpen(true);
  }, [isActive]);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="border-b-2 border-border last:border-b-0">
      {/* Section Header */}
      {hasChildren ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full flex items-center justify-between px-5 py-4 text-left transition-colors
            ${isActive ? "text-tide" : "text-abyss hover:text-tide"}
          `}
        >
          <span className="font-semibold text-[15px]">{item.name}</span>
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
      ) : (
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`
            block px-5 py-4 transition-colors
            ${isActive ? "text-tide" : "text-abyss hover:text-tide"}
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
          <div className="bg-blue-breeze">
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
                      : "text-blue-lagoon/70 hover:text-abyss"
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
        flex items-center justify-between px-5 py-3 transition-colors
        ${isActive ? "text-tide font-medium" : "text-abyss hover:text-tide"}
      `}
    >
      <span className="text-[14px]">{item.name}</span>
      <svg
        className="w-4 h-4 text-blue-bubble"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
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
            <Image
              src="/images/logo-white.svg"
              alt="Articulink"
              width={120}
              height={30}
              className="h-6 w-auto"
            />
          </Link>
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
          <div className="bg-white rounded-2xl border-2 border-border overflow-hidden">
            {/* Subtitle */}
            <div className="px-5 py-4 border-b-2 border-border">
              <p className="text-[13px] text-blue-lagoon">Brand Guidelines</p>
            </div>

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
              <div className="flex items-center justify-between text-[12px] text-blue-lagoon">
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
        <div className="flex-1 flex flex-col bg-white rounded-2xl border-2 border-border overflow-hidden">
          {/* Logo & Subtitle */}
          <Link
            href="/"
            className="block px-5 py-4 border-b-2 border-border"
          >
            <Image
              src="/images/logo.svg"
              alt="Articulink"
              width={140}
              height={35}
              className="h-7 w-auto"
            />
            <p className="text-[13px] text-blue-lagoon mt-2">Brand Guidelines</p>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            {navigation.map((item) => (
              <NavSection key={item.name} item={item} />
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t-2 border-border px-5 py-4">
            <div className="flex items-center justify-between text-[12px] text-blue-lagoon">
              <span>v1.0</span>
              <span>March 2026</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
