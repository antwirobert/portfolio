import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../types";
import { Reveal } from "./Reveal";
import { GitHubIcon } from "./icons/github";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

const categoryColors: Record<string, string> = {
  "Backend Systems": "text-accent border-accent/30 bg-accent/5",
  "Full-Stack": "text-accent border-accent/30 bg-accent/5",
  "Developer Tools": "text-signal border-signal/30 bg-signal/5",
  "Data / ML": "text-signal border-signal/30 bg-signal/5",
  Infrastructure: "text-accent border-accent/30 bg-accent/5",
};

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const isFeatured = project.featured ?? false;
  const categoryClass =
    categoryColors[project.category] || "text-muted border-line bg-surface";

  return (
    <Reveal delay={index * 80} as="article" className="">
      <button
        onClick={() => onOpen(project)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-line bg-surface text-left transition-all duration-500 hover:border-strong hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]"
      >
        <div className="relative overflow-hidden border-b border-line h-44 sm:h-48 lg:h-52">
          <ProjectVisual project={project} />

          <div className="absolute left-4 top-4 z-10">
            <span
              className={`inline-flex rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider ${categoryClass}`}
            >
              {project.category}
            </span>
          </div>

          <div className="absolute right-4 top-4 z-10 font-mono text-xs text-faint">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-medium tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
              {project.name}
            </h3>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-secondary line-clamp-2">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, isFeatured ? 7 : 4).map((tech) => (
              <span
                key={tech}
                className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isFeatured ? 7 : 4) && (
              <span className="px-2 py-0.5 font-mono text-[11px] text-faint">
                +{project.technologies.length - (isFeatured ? 7 : 4)}
              </span>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <span className="text-xs text-muted line-clamp-1">
              {project.contribution}
            </span>
            <div className="flex items-center gap-1.5">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex h-7 w-7 items-center justify-center rounded border border-line text-faint transition-all duration-300 hover:border-strong hover:text-primary hover:bg-elevated/40"
                  aria-label={`${link.label} for ${project.name}`}
                >
                  {link.type === "github" ? (
                    <GitHubIcon className="h-3.5 w-3.5" />
                  ) : (
                    <ExternalLink className="h-3.5 w-3.5" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </button>
    </Reveal>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.id === "workloom") {
    return (
      <div className="relative h-full w-full bg-surface">
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[20px_20px]" />
        </div>

        <div className="relative flex h-full flex-col items-center justify-center gap-2.5 px-4 sm:gap-3 sm:px-8">
          <div className="rounded-md border border-accent/50 bg-accent/10 px-5 py-2 font-mono text-[11px] font-medium text-accent">
            Organization
          </div>

          <div className="h-5 w-px bg-linear-to-b from-accent/40 to-border" />

          <div className="flex items-center gap-3">
            <div className="rounded-md border border-line bg-elevated/70 px-4 py-1.5 font-mono text-[10px] text-secondary">
              Workspace
            </div>
            <div className="rounded-md border border-line bg-elevated/70 px-4 py-1.5 font-mono text-[10px] text-secondary">
              Workspace
            </div>
          </div>

          <div className="h-5 w-px bg-border" />

          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="rounded border border-line bg-elevated/50 px-3 py-1 font-mono text-[10px] text-muted">
              Project
            </div>
            <div className="rounded border border-line bg-elevated/50 px-3 py-1 font-mono text-[10px] text-muted">
              Task
            </div>
            <div className="rounded border border-line bg-elevated/50 px-3 py-1 font-mono text-[10px] text-muted">
              Task
            </div>
            <div className="rounded border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] text-accent">
              Kanban
            </div>
          </div>

          <div className="mt-1 font-mono text-[9px] tracking-wide text-faint">
            multi-tenant · real-time collaboration
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "agentmeet-ai") {
    return (
      <div className="relative h-full w-full bg-surface">
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[20px_20px]" />
        </div>

        <div className="relative flex h-full items-center justify-center gap-3 px-4 sm:gap-5 sm:px-6">
          <div className="flex flex-col items-center gap-1.5">
            <div className="rounded-lg border border-line bg-elevated/60 px-4 py-2.5 font-mono text-[11px] text-secondary">
              Meeting
            </div>
            <span className="font-mono text-[9px] text-faint">
              Stream Video
            </span>
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <div className="h-px w-6 bg-border-strong sm:w-8" />
            <span className="font-mono text-[9px] text-accent">live</span>
            <div className="h-px w-6 bg-border-strong sm:w-8" />
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="rounded-lg border border-accent/50 bg-accent/10 px-4 py-2.5 font-mono text-[11px] font-medium text-accent">
              AI Agent
            </div>
            <span className="font-mono text-[9px] text-faint">
              Realtime API
            </span>
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <div className="h-px w-6 bg-border sm:w-8" />
            <span className="font-mono text-[9px] text-faint">→</span>
            <div className="h-px w-6 bg-border sm:w-8" />
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="rounded-lg border border-line bg-elevated/60 px-4 py-2.5 font-mono text-[11px] text-secondary">
              Summary
            </div>
            <span className="font-mono text-[9px] text-faint">
              post-meeting
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-surface">
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[20px_20px]" />
      </div>
      <div className="relative flex h-full items-center justify-center">
        <div className="font-mono text-xs text-faint">System overview</div>
      </div>
    </div>
  );
}
