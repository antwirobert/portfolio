import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "../data/portfolio";
import { GitHubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkedin";

interface NavItem {
  label: string;
  target: string;
}

const navItems: NavItem[] = [
  { label: "Projects", target: "projects" },
  { label: "Stack", target: "stack" },
  { label: "About", target: "about" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Navigation({ onLogoClick }: { onLogoClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navItems.map((n) => document.getElementById(n.target));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollPos) {
          setActive(navItems[i].target);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-3.5 lg:px-10">
        <button
          onClick={onLogoClick}
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line font-mono text-sm font-semibold text-accent transition-all duration-300 group-hover:border-strong group-hover:bg-surface/50">
            {"</>"}
          </span>
          <span className="hidden font-mono text-xs text-muted transition-colors duration-300 group-hover:text-secondary sm:block">
            ~/portfolio
          </span>
        </button>

        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className={`relative px-3.5 py-2 text-sm transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-md ${
                active === item.target
                  ? "text-primary"
                  : "text-muted hover:text-primary"
              }`}
            >
              {item.label}
              {active === item.target && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute bottom-1 left-3.5 right-3.5 h-px bg-accent"
                  transition={{ duration: 0.3, ease: easeOut }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all duration-300 hover:border-strong hover:text-primary hover:bg-elevated/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all duration-300 hover:border-strong hover:text-primary hover:bg-elevated/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:flex"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="mx-1 h-4 w-px bg-border" />

          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-all duration-300 hover:border-strong hover:text-primary hover:bg-elevated/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="overflow-hidden border-t border-line bg-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-6 py-3">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.target}
                  onClick={() => scrollTo(item.target)}
                  className={`flex items-center justify-between border-b border-line py-3.5 text-left text-sm transition-colors last:border-0 ${
                    active === item.target
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: easeOut, delay: i * 0.04 }}
                >
                  {item.label}
                  <span className="font-mono text-xs text-faint">→</span>
                </motion.button>
              ))}

              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2.5 py-3 text-sm text-muted transition-colors hover:text-primary"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: easeOut,
                  delay: navItems.length * 0.04,
                }}
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
