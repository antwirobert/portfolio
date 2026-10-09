import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "../data/portfolio";

interface NavItem {
  label: string;
  target: string;
}

const navItems: NavItem[] = [
  { label: "Work", target: "projects" },
  { label: "Experience", target: "experience" },
  { label: "About", target: "about" },
  { label: "Contact", target: "contact" },
];

interface NavigationProps {
  onLogoClick: () => void;
  onNavigate: (target: string) => void;
}

export function Navigation({ onLogoClick, onNavigate }: NavigationProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const navigateTo = (target: string) => {
    setOpen(false);
    onNavigate(target);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-10"
      >
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            onLogoClick();
          }}
          className="rounded-sm text-sm font-semibold tracking-tight text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {profile.name}
          <span className="sr-only">Home</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={(event) => {
                event.preventDefault();
                navigateTo(item.target);
              }}
              className="rounded-sm py-2 text-sm text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-base px-6 py-3 md:hidden"
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-content">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(item.target);
                }}
                className="block border-b border-line py-3.5 text-sm text-secondary last:border-0 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex min-h-10 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Email Robert
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
