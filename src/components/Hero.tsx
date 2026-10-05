import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
import { GitHubIcon } from "./icons/github";
import { LinkedInIcon } from "./icons/linkedin";

const focusAreas = ["TypeScript", "React", "Node.js", "PostgreSQL"];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="border-b border-line"
    >
      <div className="mx-auto grid max-w-content gap-10 px-6 pb-16 pt-20 sm:gap-12 sm:pb-20 sm:pt-24 lg:grid-cols-12 lg:items-start lg:gap-12 lg:px-10 lg:pb-24 lg:pt-28">
        <div className="lg:col-span-8">
          <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
            <span className="font-medium text-primary">{profile.name}</span>
            <span aria-hidden="true" className="text-faint">
              /
            </span>
            <span>{profile.availability}</span>
          </p>

          <h1
            id="hero-title"
            className="max-w-4xl text-balance text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.045em] text-primary sm:text-6xl lg:text-7xl"
          >
            Full-stack software engineer.
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-secondary sm:text-xl">
            {profile.positioning}
          </p>

          <p className="mt-5 border-l-2 border-accent pl-3 text-sm leading-relaxed text-muted">
            Project work includes multi-tenant SaaS and real-time AI meeting
            applications.
          </p>

          <ul
            aria-label="Core technologies"
            className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"
          >
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:px-5"
            >
              View selected work
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-strong px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:px-5"
            >
              Get in touch
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <ul
            aria-label="Professional profiles"
            className="mt-7 flex flex-wrap items-center gap-5 text-sm"
          >
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <aside
          aria-label="Experience and education summary"
          className="border-t border-line pt-6 lg:col-span-4 lg:mt-52 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0"
        >
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted">
            Background
          </h2>
          <dl className="mt-5 divide-y divide-line">
            <div className="py-4 first:pt-0">
              <dt className="text-sm font-medium text-primary">
                Software Engineer Intern
              </dt>
              <dd className="mt-1 text-sm text-secondary">
                Kofa Technologies
                <span className="mt-1 block text-xs text-muted">
                  June–November 2025
                </span>
              </dd>
            </div>
            <div className="py-4 last:pb-0">
              <dt className="text-sm font-medium text-primary">
                BTech, Computer Science
              </dt>
              <dd className="mt-1 text-sm text-secondary">
                Accra Technical University
                <span className="mt-1 block text-xs text-muted">
                  Expected 2027 · GPA 4.7/5.0
                </span>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
