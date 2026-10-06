import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../types";
import { Reveal } from "./Reveal";
import { GitHubIcon } from "./icons/github";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const imageFirst = index % 2 === 1;
  const introColumn = imageFirst ? "xl:col-start-9" : "xl:col-start-1";
  const imageColumn = imageFirst ? "xl:col-start-1" : "xl:col-start-5";
  const detailsColumn = introColumn;

  return (
    <Reveal
      as="article"
      className="border-b border-line py-10 first:pt-0 lg:py-14"
    >
      <div className="grid grid-cols-1 gap-7 xl:grid-cols-12 xl:items-start xl:gap-x-8 xl:gap-y-0">
        <div className={`order-1 xl:col-span-4 xl:row-start-1 ${introColumn}`}>
          <p className="font-mono text-xs tracking-wide text-muted">
            PROJECT {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-secondary">
            {project.tagline}
          </p>
        </div>

        <figure
          className={`order-2 min-w-0 xl:col-span-8 xl:row-span-2 xl:row-start-1 xl:self-center ${imageColumn}`}
        >
          <img
            src={project.showcaseScreenshot.src}
            alt={project.showcaseScreenshot.alt}
            width={project.showcaseScreenshot.width}
            height={project.showcaseScreenshot.height}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
            className="block h-auto w-full border border-line bg-surface"
          />
          <figcaption className="mt-2 text-xs text-muted">
            {project.name} — product screenshot
          </figcaption>
        </figure>

        <div
          className={`order-3 mt-1 xl:col-span-4 xl:row-start-2 xl:mt-4 ${detailsColumn}`}
        >
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Engineering focus
            </h4>
            <ul className="mt-3 space-y-2">
              {project.engineeringHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2.5 text-sm leading-relaxed text-secondary"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
            <span className="font-medium text-primary">Stack:</span>{" "}
            {project.showcaseTechnologies.join(" · ")}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-accent underline decoration-accent/50 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Read case study
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </button>
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 text-sm text-muted underline decoration-border-strong underline-offset-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.type === "github" ? (
                  <GitHubIcon className="h-4 w-4" />
                ) : (
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                )}
                {link.label}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
