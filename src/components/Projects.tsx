import type { Project } from "../types";
import { projects } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  onOpenProject: (project: Project) => void;
}

export function Projects({ onOpenProject }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="section-label">Selected Projects</span>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-medium tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Things I've built that demonstrate real engineering.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Each project is a case study — the problem, the architecture, and
              the decisions that mattered. Click any project for the full
              breakdown.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
